import express, { type Express } from "express";
import fs from "fs";
import path from "path";
import { getPageMeta } from "./page-meta";

/**
 * Builds a server-side HTML navigation block containing all internal links
 * extracted from the sitemap.xml. This ensures Ahrefs / Googlebot can
 * discover every page without JavaScript execution. The nav is visually
 * hidden via the sr-only pattern but fully accessible to crawlers and
 * screen readers — a standard, Google-compliant accessibility technique.
 */
function buildInternalLinksNav(sitemapPath: string): string {
  try {
    const sitemap = fs.readFileSync(sitemapPath, "utf-8");
    const base = "https://stressfreientruempelungen.de";
    const paths = Array.from(sitemap.matchAll(/<loc>([^<]+)<\/loc>/g))
      .map((m) => m[1].replace(base, "") || "/")
      .filter((p) => p !== "");

    // Organize into labeled sections for semantic clarity
    const sections: Record<string, string[]> = {
      Hauptseiten: [],
      Entrümpelung: [],
      Haushaltsauflösung: [],
      Wohnungsauflösung: [],
      Kellerentleerung: [],
      Umzug: [],
      Ratgeber: [],
      Stadtteile: [],
      Sonstiges: [],
    };

    for (const p of paths) {
      if (["/", "/entruempelung", "/haushaltsaufloesung", "/wohnungsaufloesung", "/kellerentruempelung", "/umzug", "/kontakt", "/ueber-uns", "/standorte", "/faq", "/ratgeber", "/kosten-entruempelung", "/kosten-umzug", "/leistungen"].includes(p)) {
        sections["Hauptseiten"].push(p);
      } else if (p.startsWith("/entruempelung-") || p === "/entruempelung-in-der-naehe" || p === "/messie-wohnung" || p === "/firmenaufloesung" || p === "/schrottankauf") {
        sections["Entrümpelung"].push(p);
      } else if (p.startsWith("/haushaltsaufloesung")) {
        sections["Haushaltsauflösung"].push(p);
      } else if (p.startsWith("/wohnungsaufloesung")) {
        sections["Wohnungsauflösung"].push(p);
      } else if (p.startsWith("/kellerentruempelung")) {
        sections["Kellerentleerung"].push(p);
      } else if (p.startsWith("/umzug") || p.startsWith("/umzugsunternehmen") || p.startsWith("/privat") || p.startsWith("/senioren") || p.startsWith("/buero") || p.startsWith("/firmen") || p.startsWith("/gewerbe") || p.startsWith("/fern") || p.startsWith("/archiv") || p.startsWith("/behoerden") || p.includes("umzug")) {
        sections["Umzug"].push(p);
      } else if (p.startsWith("/blog/") || ["/entruempelungstipps", "/entsorgungsguide", "/haushaltsaufloesung-bei-trennung", "/haushaltsaufloesung-checkliste", "/haushaltsaufloesung-kosten-2026", "/haushaltsaufloesung-vorbereiten", "/kueche-entruempeln", "/missverstaendnisse-zum-thema-entruempelung", "/sachen-aus-haushaltsaufloesung-verkaufen", "/senioren-umzug-nrw", "/sperrmull-rhein-erft-kreis", "/upcycling-nach-entruempelung", "/was-gehoert-zum-sperrmuell", "/was-kostet-sperrmuell", "/wie-man-eine-professionelle-entruempelungsfirma-engagiert", "/wohnungsaufloesung-selbst-oder-firma", "/wohnungsuebergabe-nach-haushaltsaufloesung", "/messie-entruempelung-nrw", "/gruenschnitt-entsorgen-kosten", "/kostenuebernahme-durch-die-pflegekasse-bei-entruempelung-und-umzug-fuer-senioren", "/entruempelung-rhein-erft-kreis-preise", "/entruempelung-nach-todesfall", "/umzugscheckliste", "/umzugshelfer-tipps", "/umzugskosten-rhein-erft-kreis", "/umzugstransporter-beladen"].includes(p)) {
        sections["Ratgeber"].push(p);
      } else {
        sections["Sonstiges"].push(p);
      }
    }

    const sectionHtml = Object.entries(sections)
      .filter(([, links]) => links.length > 0)
      .map(([title, links]) => {
        const linkTags = links
          .map((p) => `<a href="${p}">${p.replace(/^\//, "").replace(/-/g, " ") || "Startseite"}</a>`)
          .join("");
        return `<section><h3>${title}</h3>${linkTags}</section>`;
      })
      .join("");

    return `\n<nav aria-label="Seitennavigation" style="position:absolute;left:-10000px;top:auto;width:1px;height:1px;overflow:hidden">\n<h2>Alle Seiten von Stressfrei Entrümpelungen &amp; Umzüge</h2>\n${sectionHtml}\n</nav>`;
  } catch {
    return "";
  }
}

function buildPreloadHints(distPath: string): string {
  try {
    const manifestPath = path.join(distPath, ".vite", "manifest.json");
    if (!fs.existsSync(manifestPath)) return "";

    const manifest: Record<string, { file: string; isEntry?: boolean; imports?: string[] }> =
      JSON.parse(fs.readFileSync(manifestPath, "utf-8"));

    const preloadFiles: string[] = [];

    for (const [key, entry] of Object.entries(manifest)) {
      if (entry.isEntry) continue;
      if (key.includes("pages/home") || key.includes("_layout-")) {
        preloadFiles.push(entry.file);
      }
    }

    return preloadFiles
      .map((f) => `<link rel="modulepreload" crossorigin href="/${f}">`)
      .join("\n    ");
  } catch {
    return "";
  }
}

export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  const preloadHints = buildPreloadHints(distPath);

  // Build pre-rendered internal links nav (from sitemap.xml) once at startup
  const internalLinksNav = buildInternalLinksNav(path.join(distPath, "sitemap.xml"));

  let indexHtml = fs.readFileSync(path.join(distPath, "index.html"), "utf-8");

  // 1. Remove vendor-toast from eager modulepreload — it's lazy-loaded in React,
  //    saving ~50 kB gzip from the initial network waterfall.
  indexHtml = indexHtml.replace(
    /<link rel="modulepreload" crossorigin href="\/assets\/vendor-toast[^"]*">\n?/g,
    "",
  );

  // 2. Make the main CSS non-render-blocking so FCP happens without waiting for it.
  //    Inline styles already cover above-the-fold content (hero h1 + images).
  //    onload trick: preload → swap to stylesheet once downloaded.
  indexHtml = indexHtml.replace(
    /<link rel="stylesheet" crossorigin href="([^"]+)">/,
    (_, href) =>
      `<link rel="preload" as="style" crossorigin onload="this.onload=null;this.rel='stylesheet'" href="${href}">` +
      `<noscript><link rel="stylesheet" crossorigin href="${href}"></noscript>`,
  );

  // 3. Inject modulepreload hints for home.js + layout.js so they download
  //    in parallel with the main bundle (eliminates one extra network round-trip).
  if (preloadHints) {
    indexHtml = indexHtml.replace("</head>", `  ${preloadHints}\n  </head>`);
  }

  // 4. Inject all internal links before </body> so crawlers see them even without JS.
  //    React only mounts inside <div id="root">, so this nav persists after hydration.
  if (internalLinksNav) {
    indexHtml = indexHtml.replace("</body>", `${internalLinksNav}\n</body>`);
  }

  app.use(express.static(distPath, {
    index: false,
    setHeaders: (res, filePath) => {
      if (filePath.includes("/assets/")) {
        // Hashed bundles (JS/CSS): content-addressable → cache 1 year immutable
        res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
      } else if (filePath.includes("/fonts/")) {
        // Fonts don't change → cache 1 year
        res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
      } else if (filePath.includes("/images/")) {
        // Images: cache 30 days (may occasionally change)
        res.setHeader("Cache-Control", "public, max-age=2592000, stale-while-revalidate=86400");
      } else if (filePath.endsWith(".xml") || filePath.endsWith(".txt")) {
        // sitemap.xml / robots.txt: revalidate after 1 day
        res.setHeader("Cache-Control", "public, max-age=86400");
      } else {
        // Favicon, manifest, etc.: cache 7 days
        res.setHeader("Cache-Control", "public, max-age=604800");
      }
    },
  }));

  // Inject page-specific canonical, title, meta description and hreflang per
  // request so crawlers (SEMrush, Ahrefs, Bing) see unique tags without JS.
  app.use("/{*path}", (req, res) => {
    const reqPath = req.originalUrl.split("?")[0];
    const canonicalUrl = `https://stressfreientruempelungen.de${reqPath}`;
    const pageMeta = getPageMeta(reqPath);

    let html = indexHtml;

    // 1. Canonical tag + og:url (required OG tag, unique per page)
    html = html.replace(
      "</head>",
      `  <link rel="canonical" href="${canonicalUrl}">\n  <meta property="og:url" content="${canonicalUrl}">\n  </head>`,
    );

    // 2. Page-specific <title> and <meta name="description">
    if (pageMeta) {
      const safeTitle = pageMeta.title.replace(/</g, "&lt;").replace(/>/g, "&gt;");
      const safeDesc = pageMeta.description.replace(/"/g, "&quot;");

      html = html.replace(
        /<title>[^<]*<\/title>/,
        `<title>${safeTitle}</title>`,
      );
      html = html.replace(
        /(<meta name="description" content=")[^"]*(")/,
        `$1${safeDesc}$2`,
      );
      // OG tags
      html = html.replace(
        /(<meta property="og:title" content=")[^"]*(")/,
        `$1${safeTitle}$2`,
      );
      html = html.replace(
        /(<meta property="og:description" content=")[^"]*(")/,
        `$1${safeDesc}$2`,
      );
    }

    // 3. For the homepage: inject LocalBusiness + AggregateRating JSON-LD directly in
    //    the HTML so Google sees rich snippet data without JavaScript execution.
    if (reqPath === "/") {
      const homepageSchema = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://stressfreientruempelungen.de/#organization",
        "name": "Stressfrei Entrümpelungen & Umzüge",
        "description": "Professionelle Entrümpelungen, Haushaltsauflösungen & Umzüge im Rhein-Erft-Kreis und ganz NRW. Festpreise, kostenlose Beratung und besenreine Übergabe.",
        "url": "https://stressfreientruempelungen.de",
        "telephone": "+4922715880940",
        "email": "info@stressfreientruempelungen.de",
        "image": "https://stressfreientruempelungen.de/images/umzug-umzugskartons-stressfrei-rhein-erft-kreis.webp",
        "logo": "https://stressfreientruempelungen.de/images/logo.webp",
        "priceRange": "€€",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Hauptstraße",
          "addressLocality": "Bergheim",
          "postalCode": "50126",
          "addressRegion": "Nordrhein-Westfalen",
          "addressCountry": "DE"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 50.9548,
          "longitude": 6.6396
        },
        "openingHoursSpecification": [
          { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "08:00", "closes": "18:00" },
          { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "09:00", "closes": "14:00" }
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "reviewCount": "92",
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": [
          { "@type": "Review", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "author": { "@type": "Person", "name": "Sebastian K." }, "reviewBody": "Top-Service! Die Entrümpelung verlief schnell, professionell und zuverlässig. Das Team war pünktlich, freundlich und hat alles sauber hinterlassen. Preis-Leistung ist absolut fair!" },
          { "@type": "Review", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "author": { "@type": "Person", "name": "Feniajulia" }, "reviewBody": "Vom ersten Kontakt an war das Team äußerst professionell und freundlich. Sie kamen pünktlich, hatten alles Nötige dabei und arbeiteten zügig und effizient. Der Name ist Programm!" },
          { "@type": "Review", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "author": { "@type": "Person", "name": "Michaela M." }, "reviewBody": "Schnell einen Termin bekommen, pünktlich, freundlich und unkompliziert wurde meine Garage und mein Keller geräumt. Schränke wurden demontiert, besenrein hinterlassen." },
          { "@type": "Review", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "author": { "@type": "Person", "name": "Tamara K." }, "reviewBody": "Haushaltsauflösung lief super. Schneller Termin, professionelle Durchführung und fairer Preis. Ich bin sehr zufrieden und kann die Firma nur wärmstens empfehlen!" }
        ],
        "sameAs": ["https://share.google/bYXZHQXPyL6EWKLhL"]
      });
      html = html.replace(
        "</head>",
        `  <script type="application/ld+json" data-home-ld="true">${homepageSchema}</script>\n  </head>`,
      );
    }

    // 4. Fix hreflang to point to the actual page URL (not always the homepage)
    html = html.replace(
      /(<link rel="alternate" hreflang="de" href=")[^"]*(")/,
      `$1${canonicalUrl}$2`,
    );
    html = html.replace(
      /(<link rel="alternate" hreflang="x-default" href=")[^"]*(")/,
      `$1${canonicalUrl}$2`,
    );

    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.setHeader("Cache-Control", "no-cache");
    res.send(html);
  });
}
