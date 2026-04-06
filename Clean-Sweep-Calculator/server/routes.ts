import type { Express } from "express";
import { createServer, type Server } from "http";
import path from "path";
import fs from "fs";
import { storage } from "./storage";
import { getUncachableResendClient } from "./resend";
import { getUncachableGoogleCalendarClient } from "./google-calendar";

const RECIPIENT_EMAIL = "info@stressfreientruempelungen.de";

function escHtml(s: unknown): string {
  return String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

// Hardcoded robots.txt content — always reachable, independent of static file serving
const ROBOTS_TXT = `User-agent: *
Allow: /
Disallow: /api/

User-agent: Googlebot
Allow: /
Disallow: /api/

User-agent: Bingbot
Allow: /
Disallow: /api/

User-agent: AhrefsBot
Crawl-delay: 10

User-agent: SemrushBot
Crawl-delay: 10

User-agent: MJ12bot
Disallow: /

Sitemap: https://stressfreientruempelungen.de/sitemap.xml
`;

const PERMANENT_REDIRECTS: Record<string, string> = {
  "/bergheim": "/entruempelung-bergheim",
  "/bedburg": "/entruempelung-bedburg",
  "/kerpen": "/entruempelung-kerpen",
  "/elsdorf": "/entruempelung-elsdorf",
  "/pulheim": "/entruempelung-pulheim",
  "/frechen": "/entruempelung-frechen",
  "/huerth": "/entruempelung-huerth",
  "/erftstadt": "/entruempelung-erftstadt",
  "/rommerskirchen": "/entruempelung-rommerskirchen",
  "/grevenbroich": "/entruempelung-grevenbroich",
  // Duplicate URL consolidation — same content, one canonical URL
  "/ratgeber-und-tipps": "/ratgeber",
  // Old WordPress slug for the about page — redirect to canonical URL
  "/stressfrei-entruempelungen-umzuege-2": "/ueber-uns",
};

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  // ─── Critical SEO files — explicit routes, proper caching, always accessible ───
  // robots.txt: served from hardcoded constant (never fails, even on cold-start)
  app.get("/robots.txt", (_req, res) => {
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.setHeader("Cache-Control", "public, max-age=86400, stale-while-revalidate=3600");
    res.setHeader("X-Robots-Tag", "noindex"); // don't index the robots.txt file itself
    res.status(200).send(ROBOTS_TXT);
  });

  // sitemap.xml: served from filesystem with 1h caching + stale-while-revalidate
  // In production (CJS bundle): __dirname = dist/ → dist/public/sitemap.xml
  // In development (ESM tsx): __dirname is undefined → use process.cwd() + client/public
  app.get("/sitemap.xml", (_req, res, next) => {
    const isProd = process.env.NODE_ENV === "production";
    let sitemapPath: string;
    try {
      // Works in production CJS build where __dirname is defined
      // eslint-disable-next-line no-undef
      sitemapPath = isProd
        // @ts-ignore – defined in CJS production bundle
        ? path.resolve(__dirname, "public", "sitemap.xml")
        : path.resolve(process.cwd(), "client", "public", "sitemap.xml");
    } catch {
      sitemapPath = path.resolve(process.cwd(), "client", "public", "sitemap.xml");
    }
    if (!fs.existsSync(sitemapPath)) {
      return next(); // fall through to Vite or static handler
    }
    const content = fs.readFileSync(sitemapPath, "utf-8");
    res.setHeader("Content-Type", "application/xml; charset=utf-8");
    res.setHeader("Cache-Control", "public, max-age=3600, stale-while-revalidate=600");
    res.status(200).send(content);
  });

  // 410 Gone for all old WordPress/CMS paths — tells Google definitively these don't exist
  app.use((req, res, next) => {
    const gonePatterns = [
      // WordPress admin & core files
      /^\/wp-admin/,
      /^\/wp-login\.php/,
      /^\/wp-content/,
      /^\/wp-includes/,
      /^\/wp-json/,
      /^\/xmlrpc\.php/,
      /^\/wp-cron\.php/,
      /^\/wp-signup\.php/,
      // Old WordPress taxonomy & archive URLs
      /^\/tag\//,
      /^\/author\//,
      /^\/category\//,
      /\/feed\/?$/,
      // Old WordPress date archives (e.g. /2025/01/20/)
      /^\/20\d{2}\//,
      // Old WordPress pages no longer in use
      /^\/danke\/?$/,
      // Elementor builder paths (old WordPress page builder)
      /^\/elementor-hf\//,
      /^\/elementor\//,
      // Old WordPress REST API plugins
      /^\/wp-json\/wpraddons\//,
      // Cloudflare email obfuscation URLs
      /^\/cdn-cgi\//,
    ];
    if (gonePatterns.some((p) => p.test(req.path))) {
      return res.status(410).send("Gone");
    }
    next();
  });

  // Subdomain → main domain redirects (301 permanent)
  // Covers www. and neu. which both point to this server but are duplicate content
  app.use((req, res, next) => {
    const host = req.headers.host || "";
    const protocol = (req.headers["x-forwarded-proto"] as string) || "https";
    if (host.startsWith("www.")) {
      return res.redirect(301, `${protocol}://stressfreientruempelungen.de${req.url}`);
    }
    if (host.startsWith("neu.")) {
      return res.redirect(301, `${protocol}://stressfreientruempelungen.de${req.url}`);
    }
    next();
  });

  app.use((req, res, next) => {
    if (req.path !== "/" && req.path.endsWith("/")) {
      const cleanPath = req.path.slice(0, -1);
      const qs = req.url.includes("?") ? req.url.slice(req.url.indexOf("?")) : "";
      return res.redirect(301, cleanPath + qs);
    }
    next();
  });

  app.use((req, res, next) => {
    const target = PERMANENT_REDIRECTS[req.path];
    if (target) {
      return res.redirect(301, target);
    }
    next();
  });

  app.get("/api/availability", async (req, res) => {
    try {
      const { date } = req.query;
      if (!date || typeof date !== "string") {
        return res.status(400).json({ error: "Datum ist erforderlich (YYYY-MM-DD)." });
      }

      const calendar = await getUncachableGoogleCalendarClient();
      const dayStart = new Date(date + "T00:00:00+01:00");
      const dayEnd = new Date(date + "T23:59:59+01:00");

      const eventsRes = await calendar.events.list({
        calendarId: "primary",
        timeMin: dayStart.toISOString(),
        timeMax: dayEnd.toISOString(),
        singleEvents: true,
        orderBy: "startTime",
      });

      const busySlots: string[] = [];
      const events = eventsRes.data.items || [];

      const slots = [
        "08:00", "08:30", "09:00", "09:30", "10:00", "10:30",
        "11:00", "11:30", "12:00", "12:30", "13:00", "13:30",
        "14:00", "14:30", "15:00", "15:30", "16:00", "16:30",
        "17:00", "17:30", "18:00",
      ];

      for (const event of events) {
        if (event.status === "cancelled") continue;
        const start = event.start?.dateTime || event.start?.date;
        const end = event.end?.dateTime || event.end?.date;
        if (!start || !end) continue;

        const eventStart = new Date(start).getTime();
        const eventEnd = new Date(end).getTime();

        for (const slot of slots) {
          const slotStart = new Date(`${date}T${slot}:00+01:00`).getTime();
          const slotEnd = slotStart + 30 * 60 * 1000;

          if (slotStart < eventEnd && slotEnd > eventStart) {
            if (!busySlots.includes(slot)) {
              busySlots.push(slot);
            }
          }
        }
      }

      res.json({ busySlots });
    } catch (error: any) {
      console.error("Calendar availability error:", error?.message || error);
      res.json({ busySlots: [] });
    }
  });

  app.post("/api/lead", async (req, res) => {
    try {
      const { formName, name, phone, email, message, calculationDetails, calendarDate, calendarTime, calendarService } = req.body;

      if (!name || !phone) {
        return res.status(400).json({ error: "Name und Telefonnummer sind erforderlich." });
      }

      if (
        String(name).length > 150 ||
        String(phone).length > 30 ||
        (email && String(email).length > 254) ||
        (message && String(message).length > 3000) ||
        (formName && String(formName).length > 60) ||
        (calculationDetails && String(calculationDetails).length > 5000)
      ) {
        return res.status(400).json({ error: "Eingabe zu lang." });
      }

      if (formName === "terminplaner" && calendarDate && calendarTime) {
        try {
          const calendar = await getUncachableGoogleCalendarClient();
          const [day, month, year] = calendarDate.split(".");
          const isoDate = `${year}-${month}-${day}`;
          const startDateTime = `${isoDate}T${calendarTime}:00+01:00`;
          const [h, m] = calendarTime.split(":").map(Number);
          const endMinutes = m + 30;
          const endH = h + Math.floor(endMinutes / 60);
          const endM = endMinutes % 60;
          const endTime = `${endH.toString().padStart(2, "0")}:${endM.toString().padStart(2, "0")}`;
          const endDateTime = `${isoDate}T${endTime}:00+01:00`;

          await calendar.events.insert({
            calendarId: "primary",
            requestBody: {
              summary: `${calendarService || "Termin"} – ${name}`,
              description: `Telefon: ${phone}\n${email ? `E-Mail: ${email}\n` : ""}${message ? `Nachricht: ${message}` : ""}`,
              start: { dateTime: startDateTime, timeZone: "Europe/Berlin" },
              end: { dateTime: endDateTime, timeZone: "Europe/Berlin" },
            },
          });
        } catch (calErr: any) {
          console.error("Calendar event error:", calErr?.message || calErr);
        }
      }

      const detailsHtml = calculationDetails
        ? `<tr><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#666;vertical-align:top;">Kalkulation</td><td style="padding:8px 12px;border-bottom:1px solid #eee;white-space:pre-line;">${escHtml(calculationDetails)}</td></tr>`
        : "";

      const htmlBody = `
        <div style="font-family:'Helvetica Neue',Arial,sans-serif;max-width:600px;margin:0 auto;">
          <div style="background:#0891b2;padding:20px 24px;border-radius:8px 8px 0 0;">
            <h2 style="color:#fff;margin:0;font-size:18px;">Neue Anfrage: ${escHtml(formName || "Unbekannt")}</h2>
          </div>
          <div style="background:#fff;border:1px solid #e5e7eb;border-top:none;border-radius:0 0 8px 8px;padding:4px 0;">
            <table style="width:100%;border-collapse:collapse;font-size:14px;">
              <tr><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#666;width:140px;">Name</td><td style="padding:8px 12px;border-bottom:1px solid #eee;font-weight:600;">${escHtml(name)}</td></tr>
              <tr><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#666;">Telefon</td><td style="padding:8px 12px;border-bottom:1px solid #eee;font-weight:600;">${escHtml(phone)}</td></tr>
              ${email ? `<tr><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#666;">E-Mail</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${escHtml(email)}</td></tr>` : ""}
              ${message ? `<tr><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#666;vertical-align:top;">Nachricht</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${escHtml(message)}</td></tr>` : ""}
              ${detailsHtml}
            </table>
          </div>
          <p style="font-size:11px;color:#999;margin-top:16px;text-align:center;">Gesendet über stressfreientruempelungen.de</p>
        </div>
      `;

      const subjectMap: Record<string, string> = {
        umzugsrechner: "Umzugsrechner-Anfrage",
        wohnung_rechner: "Entrümpelungsrechner – Wohnung",
        haus_rechner: "Entrümpelungsrechner – Haus",
        gewerbe_rechner: "Entrümpelungsrechner – Gewerbe",
        kontakt_formular: "Kontaktformular-Anfrage",
        schnellanfrage: "Schnellanfrage",
        cta_formular: "CTA-Anfrage",
        terminplaner: "Terminanfrage",
        schrottankauf: "Schrottankauf-Anfrage",
      };

      const subject = `Neue Anfrage: ${subjectMap[formName] || formName || "Website"} – ${name}`;

      const { client, fromEmail } = await getUncachableResendClient();
      const result = await client.emails.send({
        from: fromEmail || "Stressfrei <onboarding@resend.dev>",
        to: RECIPIENT_EMAIL,
        subject,
        html: htmlBody,
        replyTo: email || undefined,
      });

      if (result.error) {
        console.error("Resend error:", JSON.stringify(result.error));
        return res.status(500).json({ error: result.error.message || "E-Mail konnte nicht gesendet werden." });
      }

      res.json({ success: true });
    } catch (error: any) {
      console.error("Lead email error:", error?.message || error);
      res.status(500).json({ error: "E-Mail konnte nicht gesendet werden." });
    }
  });

  app.get("/sitemap.xml", (_req, res) => {
    const BASE = "https://stressfreientruempelungen.de";
    const today = new Date().toISOString().split("T")[0];

    const urls: { loc: string; priority: string; changefreq: string }[] = [
      { loc: "/", priority: "1.0", changefreq: "weekly" },
      { loc: "/entruempelung", priority: "0.9", changefreq: "weekly" },
      { loc: "/haushaltsaufloesung", priority: "0.9", changefreq: "weekly" },
      { loc: "/umzug", priority: "0.9", changefreq: "weekly" },
      { loc: "/wohnungsaufloesung", priority: "0.8", changefreq: "monthly" },
      { loc: "/firmenaufloesung", priority: "0.8", changefreq: "monthly" },
      { loc: "/betriebsaufloesung", priority: "0.7", changefreq: "monthly" },
      { loc: "/nachlassaufloesung", priority: "0.8", changefreq: "monthly" },
      { loc: "/messie-wohnung", priority: "0.8", changefreq: "monthly" },
      { loc: "/kellerentruempelung", priority: "0.8", changefreq: "monthly" },
      { loc: "/entruempelung-in-der-naehe", priority: "0.8", changefreq: "monthly" },
      { loc: "/seniorenumzug", priority: "0.8", changefreq: "monthly" },
      { loc: "/privatumzug", priority: "0.8", changefreq: "monthly" },
      { loc: "/bueroumzug", priority: "0.8", changefreq: "monthly" },
      { loc: "/einlagerung-rhein-erft-kreis", priority: "0.7", changefreq: "monthly" },
      { loc: "/schrottankauf", priority: "0.7", changefreq: "monthly" },
      { loc: "/kosten-entruempelung", priority: "0.8", changefreq: "monthly" },
      { loc: "/kosten-umzug", priority: "0.8", changefreq: "monthly" },
      { loc: "/galerie", priority: "0.6", changefreq: "monthly" },
      { loc: "/faq", priority: "0.7", changefreq: "monthly" },
      { loc: "/ueber-uns", priority: "0.7", changefreq: "monthly" },
      { loc: "/standorte-und-einzugsgebiete", priority: "0.7", changefreq: "monthly" },
      { loc: "/ratgeber", priority: "0.8", changefreq: "weekly" },
      { loc: "/terminplaner", priority: "0.7", changefreq: "monthly" },
      { loc: "/kontakt", priority: "0.7", changefreq: "monthly" },
      { loc: "/entruempelung-bergheim", priority: "0.9", changefreq: "monthly" },
      { loc: "/entruempelung-bedburg", priority: "0.9", changefreq: "monthly" },
      { loc: "/entruempelung-kerpen", priority: "0.9", changefreq: "monthly" },
      { loc: "/entruempelung-elsdorf", priority: "0.9", changefreq: "monthly" },
      { loc: "/entruempelung-pulheim", priority: "0.9", changefreq: "monthly" },
      { loc: "/entruempelung-frechen", priority: "0.9", changefreq: "monthly" },
      { loc: "/entruempelung-huerth", priority: "0.9", changefreq: "monthly" },
      { loc: "/entruempelung-erftstadt", priority: "0.9", changefreq: "monthly" },
      { loc: "/entruempelung-rommerskirchen", priority: "0.8", changefreq: "monthly" },
      { loc: "/entruempelung-grevenbroich", priority: "0.8", changefreq: "monthly" },
      { loc: "/entruempelung-rhein-erft-kreis", priority: "0.9", changefreq: "monthly" },
      { loc: "/umzugsunternehmen-bergheim", priority: "0.9", changefreq: "monthly" },
      { loc: "/umzugsunternehmen-bedburg", priority: "0.9", changefreq: "monthly" },
      { loc: "/umzugsunternehmen-kerpen", priority: "0.9", changefreq: "monthly" },
      { loc: "/umzugsunternehmen-elsdorf", priority: "0.9", changefreq: "monthly" },
      { loc: "/umzugsunternehmen-pulheim", priority: "0.9", changefreq: "monthly" },
      { loc: "/umzugsunternehmen-frechen", priority: "0.9", changefreq: "monthly" },
      { loc: "/umzugsunternehmen-huerth", priority: "0.9", changefreq: "monthly" },
      { loc: "/umzugsunternehmen-erftstadt", priority: "0.9", changefreq: "monthly" },
      { loc: "/umzugsunternehmen-rommerskirchen", priority: "0.8", changefreq: "monthly" },
      { loc: "/umzugsunternehmen-grevenbroich", priority: "0.8", changefreq: "monthly" },
      { loc: "/kostenuebernahme-durch-die-pflegekasse-bei-entruempelung-und-umzug-fuer-senioren", priority: "0.7", changefreq: "monthly" },
      { loc: "/entruempelung-rhein-erft-kreis-preise", priority: "0.7", changefreq: "monthly" },
      { loc: "/missverstaendnisse-zum-thema-entruempelung", priority: "0.7", changefreq: "monthly" },
      { loc: "/wie-man-eine-professionelle-entruempelungsfirma-engagiert", priority: "0.7", changefreq: "monthly" },
      { loc: "/entruempelungstipps", priority: "0.7", changefreq: "monthly" },
      { loc: "/was-kostet-sperrmuell", priority: "0.7", changefreq: "monthly" },
      { loc: "/wertanrechnung-bei-der-entruempelung", priority: "0.7", changefreq: "monthly" },
      { loc: "/umzugscheckliste", priority: "0.7", changefreq: "monthly" },
      { loc: "/entruempelung-nach-todesfall", priority: "0.7", changefreq: "monthly" },
      { loc: "/entsorgungsguide", priority: "0.7", changefreq: "monthly" },
      { loc: "/umzugshelfer-tipps", priority: "0.7", changefreq: "monthly" },
      { loc: "/haushaltsaufloesung-vorbereiten", priority: "0.7", changefreq: "monthly" },
      { loc: "/messie-entruempelung-nrw", priority: "0.7", changefreq: "monthly" },
      { loc: "/sperrmull-rhein-erft-kreis", priority: "0.7", changefreq: "monthly" },
      { loc: "/haushaltsaufloesung-checkliste", priority: "0.8", changefreq: "monthly" },
      { loc: "/entruempelung-bruehl", priority: "0.9", changefreq: "monthly" },
      { loc: "/entruempelung-wesseling", priority: "0.9", changefreq: "monthly" },
      { loc: "/haushaltsaufloesung-bergheim", priority: "0.85", changefreq: "monthly" },
      { loc: "/haushaltsaufloesung-bedburg", priority: "0.85", changefreq: "monthly" },
      { loc: "/haushaltsaufloesung-kerpen", priority: "0.85", changefreq: "monthly" },
      { loc: "/haushaltsaufloesung-elsdorf", priority: "0.85", changefreq: "monthly" },
      { loc: "/haushaltsaufloesung-pulheim", priority: "0.85", changefreq: "monthly" },
      { loc: "/haushaltsaufloesung-frechen", priority: "0.85", changefreq: "monthly" },
      { loc: "/haushaltsaufloesung-huerth", priority: "0.85", changefreq: "monthly" },
      { loc: "/haushaltsaufloesung-erftstadt", priority: "0.85", changefreq: "monthly" },
      { loc: "/haushaltsaufloesung-rommerskirchen", priority: "0.85", changefreq: "monthly" },
      { loc: "/haushaltsaufloesung-grevenbroich", priority: "0.85", changefreq: "monthly" },
      { loc: "/haushaltsaufloesung-bruehl", priority: "0.85", changefreq: "monthly" },
      { loc: "/haushaltsaufloesung-wesseling", priority: "0.85", changefreq: "monthly" },
      { loc: "/wohnungsaufloesung-bergheim", priority: "0.8", changefreq: "monthly" },
      { loc: "/wohnungsaufloesung-bedburg", priority: "0.8", changefreq: "monthly" },
      { loc: "/wohnungsaufloesung-kerpen", priority: "0.8", changefreq: "monthly" },
      { loc: "/wohnungsaufloesung-elsdorf", priority: "0.8", changefreq: "monthly" },
      { loc: "/wohnungsaufloesung-pulheim", priority: "0.8", changefreq: "monthly" },
      { loc: "/wohnungsaufloesung-frechen", priority: "0.8", changefreq: "monthly" },
      { loc: "/wohnungsaufloesung-huerth", priority: "0.8", changefreq: "monthly" },
      { loc: "/wohnungsaufloesung-erftstadt", priority: "0.8", changefreq: "monthly" },
      { loc: "/wohnungsaufloesung-rommerskirchen", priority: "0.8", changefreq: "monthly" },
      { loc: "/wohnungsaufloesung-grevenbroich", priority: "0.8", changefreq: "monthly" },
      { loc: "/wohnungsaufloesung-bruehl", priority: "0.8", changefreq: "monthly" },
      { loc: "/wohnungsaufloesung-wesseling", priority: "0.8", changefreq: "monthly" },
      { loc: "/kellerentruempelung-bergheim", priority: "0.8", changefreq: "monthly" },
      { loc: "/kellerentruempelung-bedburg", priority: "0.8", changefreq: "monthly" },
      { loc: "/kellerentruempelung-kerpen", priority: "0.8", changefreq: "monthly" },
      { loc: "/kellerentruempelung-elsdorf", priority: "0.8", changefreq: "monthly" },
      { loc: "/kellerentruempelung-pulheim", priority: "0.8", changefreq: "monthly" },
      { loc: "/kellerentruempelung-frechen", priority: "0.8", changefreq: "monthly" },
      { loc: "/kellerentruempelung-huerth", priority: "0.8", changefreq: "monthly" },
      { loc: "/kellerentruempelung-erftstadt", priority: "0.8", changefreq: "monthly" },
      { loc: "/kellerentruempelung-rommerskirchen", priority: "0.8", changefreq: "monthly" },
      { loc: "/kellerentruempelung-grevenbroich", priority: "0.8", changefreq: "monthly" },
      { loc: "/kellerentruempelung-bruehl", priority: "0.8", changefreq: "monthly" },
      { loc: "/kellerentruempelung-wesseling", priority: "0.8", changefreq: "monthly" },
      { loc: "/entruempelung-quadrath-ichendorf", priority: "0.8", changefreq: "monthly" },
      { loc: "/entruempelung-niederaussem", priority: "0.8", changefreq: "monthly" },
      { loc: "/entruempelung-glesch", priority: "0.8", changefreq: "monthly" },
      { loc: "/entruempelung-paffendorf", priority: "0.8", changefreq: "monthly" },
      { loc: "/entruempelung-glessen", priority: "0.8", changefreq: "monthly" },
      { loc: "/entruempelung-oberaussem", priority: "0.8", changefreq: "monthly" },
      { loc: "/entruempelung-zieverich", priority: "0.8", changefreq: "monthly" },
      { loc: "/entruempelung-thorr", priority: "0.8", changefreq: "monthly" },
      { loc: "/entruempelung-sindorf", priority: "0.8", changefreq: "monthly" },
      { loc: "/entruempelung-horrem", priority: "0.8", changefreq: "monthly" },
      { loc: "/entruempelung-buir", priority: "0.8", changefreq: "monthly" },
      { loc: "/entruempelung-manheim", priority: "0.8", changefreq: "monthly" },
      { loc: "/entruempelung-tuernich", priority: "0.8", changefreq: "monthly" },
      { loc: "/entruempelung-blatzheim", priority: "0.8", changefreq: "monthly" },
      { loc: "/entruempelung-brauweiler", priority: "0.8", changefreq: "monthly" },
      { loc: "/entruempelung-stommeln", priority: "0.8", changefreq: "monthly" },
      { loc: "/entruempelung-sinnersdorf", priority: "0.8", changefreq: "monthly" },
      { loc: "/entruempelung-geyen", priority: "0.8", changefreq: "monthly" },
      { loc: "/entruempelung-koenigsdorf", priority: "0.8", changefreq: "monthly" },
      { loc: "/entruempelung-bachem", priority: "0.8", changefreq: "monthly" },
      { loc: "/entruempelung-habbelrath", priority: "0.8", changefreq: "monthly" },
      { loc: "/entruempelung-hermuelheim", priority: "0.8", changefreq: "monthly" },
      { loc: "/entruempelung-efferen", priority: "0.8", changefreq: "monthly" },
      { loc: "/entruempelung-gleuel", priority: "0.8", changefreq: "monthly" },
      { loc: "/entruempelung-berrenrath", priority: "0.8", changefreq: "monthly" },
      { loc: "/entruempelung-liblar", priority: "0.8", changefreq: "monthly" },
      { loc: "/entruempelung-lechenich", priority: "0.8", changefreq: "monthly" },
      { loc: "/entruempelung-gymnich", priority: "0.8", changefreq: "monthly" },
      { loc: "/entruempelung-bliesheim", priority: "0.8", changefreq: "monthly" },
      { loc: "/entruempelung-friesheim", priority: "0.8", changefreq: "monthly" },
      { loc: "/entruempelung-heppendorf", priority: "0.8", changefreq: "monthly" },
      { loc: "/entruempelung-berrendorf", priority: "0.8", changefreq: "monthly" },
      { loc: "/entruempelung-niederembt", priority: "0.8", changefreq: "monthly" },
      { loc: "/entruempelung-oberembt", priority: "0.8", changefreq: "monthly" },
      { loc: "/entruempelung-kapellen-grevenbroich", priority: "0.8", changefreq: "monthly" },
      { loc: "/entruempelung-gustorf", priority: "0.8", changefreq: "monthly" },
      { loc: "/entruempelung-elsen", priority: "0.8", changefreq: "monthly" },
      { loc: "/entruempelung-evinghoven", priority: "0.8", changefreq: "monthly" },
      { loc: "/entruempelung-gilbach", priority: "0.8", changefreq: "monthly" },
      { loc: "/entruempelung-oekoven", priority: "0.8", changefreq: "monthly" },
      { loc: "/entruempelung-kaster", priority: "0.8", changefreq: "monthly" },
      { loc: "/entruempelung-kirchherten", priority: "0.8", changefreq: "monthly" },
      { loc: "/entruempelung-lipp", priority: "0.8", changefreq: "monthly" },
      { loc: "/entruempelung-vochem", priority: "0.8", changefreq: "monthly" },
      { loc: "/entruempelung-kierberg", priority: "0.8", changefreq: "monthly" },
      { loc: "/entruempelung-pingsdorf", priority: "0.8", changefreq: "monthly" },
      { loc: "/entruempelung-urfeld", priority: "0.8", changefreq: "monthly" },
      { loc: "/entruempelung-keldenich", priority: "0.8", changefreq: "monthly" },
      { loc: "/entruempelung-berzdorf", priority: "0.8", changefreq: "monthly" },
      { loc: "/umzugsunternehmen-koeln", priority: "0.9", changefreq: "monthly" },
      { loc: "/umzugsunternehmen-duesseldorf", priority: "0.8", changefreq: "monthly" },
      { loc: "/umzugsunternehmen-aachen", priority: "0.8", changefreq: "monthly" },
      { loc: "/einpackservice", priority: "0.8", changefreq: "monthly" },
      { loc: "/auspackservice", priority: "0.8", changefreq: "monthly" },
      { loc: "/moebelmontagedienst", priority: "0.8", changefreq: "monthly" },
      { loc: "/umzugstransport", priority: "0.8", changefreq: "monthly" },
      { loc: "/halteverbotszone", priority: "0.7", changefreq: "monthly" },
      { loc: "/schwerlasttransport", priority: "0.7", changefreq: "monthly" },
      { loc: "/aussenlifteinsatz", priority: "0.7", changefreq: "monthly" },
      { loc: "/tapeten-entfernen", priority: "0.8", changefreq: "monthly" },
      { loc: "/grundreinigung", priority: "0.8", changefreq: "monthly" },
      { loc: "/gebaeudereinigung", priority: "0.8", changefreq: "monthly" },
      { loc: "/renovierungsservice", priority: "0.8", changefreq: "monthly" },
    ];

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>${BASE}${u.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join("\n")}
</urlset>`;

    res.setHeader("Content-Type", "application/xml; charset=utf-8");
    res.send(xml);
  });

  app.get("/rss.xml", (_req, res) => {
    const BASE = "https://stressfreientruempelungen.de";
    const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Stressfrei Entrümpelungen &amp; Umzüge – Ratgeber</title>
    <link>${BASE}/ratgeber</link>
    <description>Tipps und Ratgeber rund um Entrümpelung, Haushaltsauflösung und Umzug im Rhein-Erft-Kreis.</description>
    <language>de-DE</language>
    <atom:link href="${BASE}/rss.xml" rel="self" type="application/rss+xml" />
    <image>
      <url>${BASE}/favicon.webp</url>
      <title>Stressfrei Entrümpelungen &amp; Umzüge</title>
      <link>${BASE}</link>
    </image>
    <item>
      <title>Umzugscheckliste 2025: Schritt für Schritt zum stressfreien Umzug</title>
      <link>${BASE}/umzugscheckliste</link>
      <description>Kostenlose interaktive Umzugscheckliste mit 40+ Aufgaben in 6 Phasen – von 8 Wochen vorher bis nach dem Umzug.</description>
      <pubDate>Mon, 01 Jan 2025 08:00:00 +0000</pubDate>
      <guid>${BASE}/umzugscheckliste</guid>
    </item>
    <item>
      <title>Was kostet Sperrmüll? Alle Kosten im Überblick</title>
      <link>${BASE}/was-kostet-sperrmuell</link>
      <description>Kommunale Abholung, Container oder private Entsorgung – was kostet Sperrmüll wirklich? Alle Preise und Spartipps.</description>
      <pubDate>Mon, 10 Mar 2025 08:00:00 +0000</pubDate>
      <guid>${BASE}/was-kostet-sperrmuell</guid>
    </item>
    <item>
      <title>Entsorgungsguide: Was gehört wohin?</title>
      <link>${BASE}/entsorgungsguide</link>
      <description>Der vollständige Entsorgungsguide erklärt, wie Sperrmüll, Elektroschrott und Sondermüll korrekt entsorgt werden.</description>
      <pubDate>Sat, 01 Feb 2025 08:00:00 +0000</pubDate>
      <guid>${BASE}/entsorgungsguide</guid>
    </item>
    <item>
      <title>Haushaltsauflösung vorbereiten: Die komplette Checkliste</title>
      <link>${BASE}/haushaltsaufloesung-vorbereiten</link>
      <description>So bereiten Sie eine Haushaltsauflösung optimal vor – mit Checkliste und Tipps zu Wertgegenständen.</description>
      <pubDate>Sat, 15 Feb 2025 08:00:00 +0000</pubDate>
      <guid>${BASE}/haushaltsaufloesung-vorbereiten</guid>
    </item>
    <item>
      <title>Messie Entrümpelung NRW: Professionelle & diskrete Hilfe</title>
      <link>${BASE}/messie-entruempelung-nrw</link>
      <description>Messie Wohnung professionell und diskret räumen im Rhein-Erft-Kreis & NRW. Festpreis, keine Wertung, erfahrenes Team.</description>
      <pubDate>Fri, 20 Mar 2026 08:00:00 +0000</pubDate>
      <guid>${BASE}/messie-entruempelung-nrw</guid>
    </item>
    <item>
      <title>Sperrmüll Rhein-Erft-Kreis 2025: Anmelden, Kosten & Alternativen</title>
      <link>${BASE}/sperrmull-rhein-erft-kreis</link>
      <description>Sperrmüll im Rhein-Erft-Kreis anmelden: AWB-Infos, Freimengen je Stadt, Vergleich mit Entrümpelungsfirma und Spartipps.</description>
      <pubDate>Fri, 20 Mar 2026 08:00:00 +0000</pubDate>
      <guid>${BASE}/sperrmull-rhein-erft-kreis</guid>
    </item>
    <item>
      <title>Haushaltsauflösung Checkliste 2025: Schritt für Schritt</title>
      <link>${BASE}/haushaltsaufloesung-checkliste</link>
      <description>Interaktive Haushaltsauflösung Checkliste: Von 6 Wochen vorher bis zur Wohnungsübergabe — alle Schritte mit Steuertipps und Kostenübersicht.</description>
      <pubDate>Fri, 20 Mar 2026 08:00:00 +0000</pubDate>
      <guid>${BASE}/haushaltsaufloesung-checkliste</guid>
    </item>
    <item>
      <title>Entrümpelung nach Todesfall: So gehen Sie vor</title>
      <link>${BASE}/entruempelung-nach-todesfall</link>
      <description>Alles was Sie bei einer Entrümpelung nach einem Todesfall wissen müssen – einfühlsam und diskret erklärt.</description>
      <pubDate>Fri, 01 Nov 2024 08:00:00 +0000</pubDate>
      <guid>${BASE}/entruempelung-nach-todesfall</guid>
    </item>
    <item>
      <title>Wertanrechnung bei der Entrümpelung</title>
      <link>${BASE}/wertanrechnung-bei-der-entruempelung</link>
      <description>Wie verwertbare Gegenstände den Entrümpelungspreis senken – Tipps zur Wertanrechnung.</description>
      <pubDate>Sun, 01 Dec 2024 08:00:00 +0000</pubDate>
      <guid>${BASE}/wertanrechnung-bei-der-entruempelung</guid>
    </item>
    <item>
      <title>Kostenübernahme durch die Pflegekasse bei Entrümpelung und Umzug für Senioren</title>
      <link>${BASE}/kostenuebernahme-durch-die-pflegekasse-bei-entruempelung-und-umzug-fuer-senioren</link>
      <description>Wann die Pflegekasse Entrümpelung oder Umzug bezahlt – Voraussetzungen und Antragstipps.</description>
      <pubDate>Sun, 01 Dec 2024 08:00:00 +0000</pubDate>
      <guid>${BASE}/kostenuebernahme-durch-die-pflegekasse-bei-entruempelung-und-umzug-fuer-senioren</guid>
    </item>
    <item>
      <title>Entrümpelung Preise im Rhein-Erft-Kreis 2025</title>
      <link>${BASE}/entruempelung-rhein-erft-kreis-preise</link>
      <description>Aktuelle Preise für Entrümpelung im Rhein-Erft-Kreis 2025 – transparente Kostenübersicht.</description>
      <pubDate>Tue, 01 Oct 2024 08:00:00 +0000</pubDate>
      <guid>${BASE}/entruempelung-rhein-erft-kreis-preise</guid>
    </item>
    <item>
      <title>Häufige Missverständnisse zum Thema Entrümpelung</title>
      <link>${BASE}/missverstaendnisse-zum-thema-entruempelung</link>
      <description>Die häufigsten Mythen und Missverständnisse rund um Entrümpelung aufgeklärt.</description>
      <pubDate>Fri, 01 Nov 2024 08:00:00 +0000</pubDate>
      <guid>${BASE}/missverstaendnisse-zum-thema-entruempelung</guid>
    </item>
    <item>
      <title>Professionelle Entrümpelungsfirma beauftragen</title>
      <link>${BASE}/wie-man-eine-professionelle-entruempelungsfirma-engagiert</link>
      <description>Wie Sie eine gute Entrümpelungsfirma finden und worauf Sie achten sollten.</description>
      <pubDate>Sun, 01 Sep 2024 08:00:00 +0000</pubDate>
      <guid>${BASE}/wie-man-eine-professionelle-entruempelungsfirma-engagiert</guid>
    </item>
    <item>
      <title>Entrümpelungstipps: Effektiv und stressfrei entrümpeln</title>
      <link>${BASE}/entruempelungstipps</link>
      <description>Praktische Tipps für eine effektive Entrümpelung – Schritt für Schritt erklärt.</description>
      <pubDate>Tue, 15 Oct 2024 08:00:00 +0000</pubDate>
      <guid>${BASE}/entruempelungstipps</guid>
    </item>
    <item>
      <title>Umzugshelfer: Tipps und Rechtliches</title>
      <link>${BASE}/umzugshelfer-tipps</link>
      <description>Was Sie bei Umzugshelfern beachten müssen – von der Organisation bis zur Versicherung.</description>
      <pubDate>Sat, 01 Mar 2025 08:00:00 +0000</pubDate>
      <guid>${BASE}/umzugshelfer-tipps</guid>
    </item>
  </channel>
</rss>`;
    res.setHeader("Content-Type", "application/rss+xml; charset=utf-8");
    res.send(feed);
  });

  return httpServer;
}
