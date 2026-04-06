import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PageLayout, PageHero, CTASection } from "@/components/layout";
import { Link } from "wouter";
import { useEffect, type ReactNode, type FormEvent } from "react";
import { trackConversion } from "@/lib/gtag";
import {
  Phone,
  Star,
  CheckCircle2,
  Trash2,
  Home,
  Truck,
  MapPin,
  Clock,
  ChevronDown,
  ChevronUp,
  Shield,
  Euro,
  Zap,
  Recycle,
  ArrowRight,
  Package,
  Calendar,
  Users,
  ThumbsUp,
  BadgeCheck,
  Sofa,
  Boxes,
  Refrigerator,
  Wrench,
  Send,
  Mail,
} from "lucide-react";
import { useState } from "react";
import { FadeIn } from "@/components/fade-in";

function IconWhatsapp({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.555 4.118 1.528 5.847L0 24l6.335-1.652A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.013-1.376l-.36-.214-3.732.973.998-3.643-.235-.374A9.818 9.818 0 0112 2.182c5.427 0 9.818 4.391 9.818 9.818S17.427 21.818 12 21.818z"/>
    </svg>
  );
}

function SidebarQuickForm({ cityName }: { cityName: string }) {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  if (sent) {
    return (
      <div className="text-center py-4 px-2">
        <CheckCircle2 className="w-9 h-9 text-primary mx-auto mb-2" />
        <p className="text-sm font-semibold text-foreground">Anfrage erhalten!</p>
        <p className="text-xs text-muted-foreground mt-1">Wir melden uns schnellstmöglich bei Ihnen.</p>
      </div>
    );
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const fd = new FormData(e.currentTarget);
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formName: "sidebar_entruempelung_quick",
          name: fd.get("name"),
          phone: fd.get("phone"),
          message: `Schnellanfrage Entrümpelung ${cityName}`,
        }),
      });
    } catch {}
    setSent(true);
    setSending(false);
    trackConversion("sidebar_quick_form_submit");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2 mb-3" data-testid="form-sidebar-quick">
      <input
        name="name"
        placeholder="Ihr Name *"
        required
        className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
        data-testid="input-sidebar-name"
      />
      <input
        name="phone"
        type="tel"
        placeholder="Telefonnummer *"
        required
        className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
        data-testid="input-sidebar-phone"
      />
      <Button type="submit" className="w-full" size="sm" disabled={sending} data-testid="btn-sidebar-submit">
        {sending ? "Wird gesendet …" : "Kostenloses Angebot anfordern →"}
      </Button>
      <p className="text-[11px] text-center text-muted-foreground">Kostenlos & unverbindlich · Antwort in Stunden</p>
    </form>
  );
}


const services = [
  {
    icon: Trash2,
    title: "Entrümpelungen",
    description:
      "Professionelle Entrümpelung von Wohnungen, Häusern, Kellern und Dachböden. Schnell, sauber und zu fairen Festpreisen.",
    href: "/entruempelung",
  },
  {
    icon: Home,
    title: "Haushaltsauflösungen",
    description:
      "Komplette Haushaltsauflösungen mit Wertanrechnung. Wir kümmern uns um alles — von der Räumung bis zur besenreinen Übergabe.",
    href: "/haushaltsaufloesung",
  },
  {
    icon: Truck,
    title: "Umzüge",
    description:
      "Stressfreie Umzüge in und um die Region. Vom Seniorenumzug bis zum Büroumzug — alles aus einer Hand.",
    href: "/umzug",
  },
  {
    icon: Recycle,
    title: "Schrottankauf",
    description:
      "Wir kaufen Ihren Schrott zu fairen Tagespreisen an. Altmetall, Kupfer, Messing und mehr — Abholung inklusive.",
    href: "/schrottankauf",
  },
];

const reviews = [
  {
    name: "M. Meinke",
    text: "Schnell einen Termin bekommen, pünktlich, freundlich und unkompliziert wurde meine Garage und mein Keller geräumt. Schränke wurden demontiert, besenrein hinterlassen.",
  },
  {
    name: "Klarabella",
    text: "Ganz toller Service, Terminvergabe schnell und unkompliziert per WhatsApp, sehr sympathisches Team, haben alles mitgenommen und richtig gut gearbeitet.",
  },
  {
    name: "Katy S.",
    text: "Super Entrümpelungsteam! Sie kamen pünktlich, waren höflich und haben die Arbeit effizient erledigt. Ich kann diesen Entrümpelungsservice nur weiterempfehlen.",
  },
];

interface LocationFAQ {
  question: string;
  answer: string;
}

interface StadtteilDetail {
  name: string;
  text: string;
  href?: string;
}

interface BeispielEntruempelung {
  stadtteil: string;
  objektTyp: string;
  etage: string;
  flaeche: string;
  dauer: string;
  team: string;
  preis: string;
  leistungen: string[];
  kundenzitat?: string;
  kundenName?: string;
}

interface TrustStats {
  auftraege: string;
  reaktionszeit: string;
  erfahrung: string;
  kundenzitat?: string;
  kundenName?: string;
}

interface LocationPageProps {
  cityName: string;
  slug: string;
  description: string;
  metaDescription: string;
  introText: ReactNode;
  highlights: string[];
  faqs: LocationFAQ[];
  neighborCities: { name: string; slug: string }[];
  localInfo?: ReactNode;
  localExtras?: ReactNode;
  plz?: string;
  einwohner?: string;
  kreis?: string;
  stadtteile?: string[];
  stadtteileDetail?: StadtteilDetail[];
  beispiel?: BeispielEntruempelung;
  mapEmbed?: string;
  trustStats?: TrustStats;
}

function FAQItem({ faq, index }: { faq: LocationFAQ; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border/50 rounded-lg overflow-hidden" data-testid={`faq-item-${index}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-4 sm:p-5 text-left hover:bg-card/80 transition-colors"
        data-testid={`faq-toggle-${index}`}
      >
        <span className="font-medium text-foreground text-sm sm:text-base">{faq.question}</span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-muted-foreground shrink-0" />
        ) : (
          <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0" />
        )}
      </button>
      {open && (
        <div className="px-4 sm:px-5 pb-4 sm:pb-5">
          <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
        </div>
      )}
    </div>
  );
}

function LocationLeadForm({ cityName, position, variant = "full" }: { cityName: string; position: "top" | "bottom" | "hero"; variant?: "full" | "compact" }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("Entrümpelung");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formName: `stadtseite_${position}`,
          name,
          phone,
          message: `Leistung: ${service}${message ? `\n${message}` : ""}\nStadt: ${cityName}`,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Fehler");
      trackConversion(`stadtseite_${position}`, { phone });
      setSuccess(true);
    } catch (err: any) {
      setError(err.message || "Es ist ein Fehler aufgetreten. Bitte rufen Sie uns direkt an.");
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div className="rounded-2xl bg-green-50 border border-green-200 p-8 flex flex-col items-center text-center gap-3 max-w-xl mx-auto">
        <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
          <CheckCircle2 className="w-7 h-7 text-green-600" />
        </div>
        <h3 className="text-lg font-bold text-foreground">Anfrage erfolgreich gesendet!</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Wir haben Ihre Anfrage für {cityName} erhalten und melden uns in der Regel innerhalb weniger Stunden bei Ihnen. Bei Dringlichkeit: <a href="tel:+4922715880940" className="text-primary font-semibold underline-offset-2 hover:underline">02271 / 5880940</a>
        </p>
      </div>
    );
  }

  if (variant === "compact") {
    if (success) {
      return (
        <div className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-xl px-5 py-3 max-w-2xl mx-auto">
          <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
          <p className="text-sm font-medium text-green-800">Anfrage gesendet! Wir melden uns bald bei Ihnen.</p>
        </div>
      );
    }
    return (
      <form onSubmit={handleSubmit} noValidate className="max-w-3xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            required
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Ihr Name"
            className="flex-1 rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition min-w-0"
          />
          <input
            type="tel"
            required
            value={phone}
            onChange={e => setPhone(e.target.value)}
            placeholder="Ihre Telefonnummer"
            className="flex-1 rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition min-w-0"
          />
          <select
            value={service}
            onChange={e => setService(e.target.value)}
            className="flex-1 rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition min-w-0"
          >
            <option>Entrümpelung</option>
            <option>Haushaltsauflösung</option>
            <option>Umzug</option>
            <option>Schrottankauf</option>
            <option>Sonstiges</option>
          </select>
          <Button type="submit" disabled={loading} className="shrink-0 whitespace-nowrap">
            {loading ? (
              <span className="flex items-center gap-2"><span className="w-3 h-3 border-2 border-white/40 border-t-white rounded-full animate-spin" />Senden…</span>
            ) : (
              <span className="flex items-center gap-1.5"><Send className="w-3.5 h-3.5" />Kostenlos anfragen</span>
            )}
          </Button>
        </div>
        {error && <p className="text-xs text-red-600 mt-2 text-center">{error}</p>}
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-xs font-semibold text-foreground mb-1.5">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Max Mustermann"
            className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-foreground mb-1.5">
            Telefon <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            required
            value={phone}
            onChange={e => setPhone(e.target.value)}
            placeholder="0221 / 123456"
            className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-xs font-semibold text-foreground mb-1.5">Gewünschte Leistung</label>
        <select
          value={service}
          onChange={e => setService(e.target.value)}
          className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
        >
          <option>Entrümpelung</option>
          <option>Haushaltsauflösung</option>
          <option>Umzug</option>
          <option>Schrottankauf</option>
          <option>Sonstiges</option>
        </select>
      </div>
      <div className="mb-5">
        <label className="block text-xs font-semibold text-foreground mb-1.5">Kurze Beschreibung (optional)</label>
        <textarea
          value={message}
          onChange={e => setMessage(e.target.value)}
          rows={3}
          placeholder={`z.B. 3-Zimmer-Wohnung in ${cityName}, Keller inklusive, schneller Termin gewünscht`}
          className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition resize-none"
        />
      </div>
      {error && (
        <p className="text-sm text-red-600 mb-4 flex items-center gap-2">
          <span className="inline-block w-4 h-4 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-xs font-bold">!</span>
          {error}
        </p>
      )}
      <div className="flex flex-col sm:flex-row gap-3">
        <Button type="submit" disabled={loading} className="flex-1 sm:flex-none">
          {loading ? (
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 border-2 border-white/40 border-t-white rounded-full animate-spin" />
              Wird gesendet…
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <Send className="w-4 h-4" />
              Kostenlos anfragen
            </span>
          )}
        </Button>
        <a href="tel:+4922715880940" className="flex-1 sm:flex-none">
          <Button type="button" variant="outline" className="w-full">
            <Phone className="w-4 h-4 mr-2" />
            02271 / 5880940
          </Button>
        </a>
      </div>
      <p className="text-xs text-muted-foreground mt-3">
        <Shield className="w-3 h-3 inline mr-1" />
        Kostenlos & unverbindlich · Antwort meist innerhalb weniger Stunden · Keine Weitergabe Ihrer Daten
      </p>
    </form>
  );
}

export default function LocationPage({
  cityName,
  slug,
  description,
  metaDescription,
  introText,
  highlights,
  faqs,
  neighborCities,
  localInfo,
  localExtras,
  plz,
  einwohner,
  kreis,
  stadtteile,
  stadtteileDetail,
  beispiel,
  mapEmbed,
  trustStats,
}: LocationPageProps) {
  useEffect(() => {
    const canonicalUrl = `https://stressfreientruempelungen.de/entruempelung-${slug}`;
    const pageTitle = `Entrümpelung ${cityName} | Stressfrei Entrümpelungen & Umzüge`;

    document.title = pageTitle;

    const setOrCreateMeta = (attr: string, attrValue: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${attrValue}"]`) as HTMLMetaElement | null;
      if (el) {
        el.content = content;
      } else {
        el = document.createElement("meta");
        el.setAttribute(attr, attrValue);
        el.content = content;
        document.head.appendChild(el);
      }
    };

    setOrCreateMeta("name", "description", metaDescription);

    setOrCreateMeta("property", "og:title", pageTitle);
    setOrCreateMeta("property", "og:description", metaDescription);
    setOrCreateMeta("property", "og:url", canonicalUrl);
    setOrCreateMeta("property", "og:type", "website");
    setOrCreateMeta("property", "og:image", "https://stressfreientruempelungen.de/images/professionelle-entruempelung-service-rhein-erft-kreis.webp");
    setOrCreateMeta("property", "og:locale", "de_DE");
    setOrCreateMeta("property", "og:site_name", "Stressfrei Entrümpelungen & Umzüge");

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (canonical) {
      canonical.href = canonicalUrl;
    } else {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      canonical.href = canonicalUrl;
      document.head.appendChild(canonical);
    }

    const existingLd = document.querySelector('script[data-location-ld]');
    if (existingLd) existingLd.remove();
    const ldScript = document.createElement("script");
    ldScript.type = "application/ld+json";
    ldScript.setAttribute("data-location-ld", "true");
    ldScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://stressfreientruempelungen.de/#organization",
      name: `Stressfrei Entrümpelungen & Umzüge – ${cityName}`,
      description: metaDescription,
      url: `https://stressfreientruempelungen.de/entruempelung-${slug}`,
      telephone: "+4922715880940",
      email: "info@stressfreientruempelungen.de",
      image: "https://stressfreientruempelungen.de/images/umzug-umzugskartons-stressfrei-rhein-erft-kreis.webp",
      logo: "https://stressfreientruempelungen.de/images/logo.webp",
      address: {
        "@type": "PostalAddress",
        addressLocality: cityName,
        postalCode: plz || "",
        addressRegion: "Nordrhein-Westfalen",
        addressCountry: "DE",
      },
      areaServed: [
        { "@type": "State", name: "Nordrhein-Westfalen" },
        { "@type": "AdministrativeArea", name: "Rhein-Erft-Kreis" },
        { "@type": "City", name: cityName },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: "84",
        bestRating: "5",
        worstRating: "1",
      },
      review: [
        { "@type": "Review", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "author": { "@type": "Person", "name": "M. Meinke" }, "reviewBody": "Schnell einen Termin bekommen, pünktlich, freundlich und unkompliziert wurde meine Garage und mein Keller geräumt. Schränke wurden demontiert, besenrein hinterlassen." },
        { "@type": "Review", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "author": { "@type": "Person", "name": "Katy S." }, "reviewBody": "Super Entrümpelungsteam! Sie kamen pünktlich, waren höflich und haben die Arbeit effizient erledigt. Ich kann diesen Entrümpelungsservice nur weiterempfehlen." },
        { "@type": "Review", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "author": { "@type": "Person", "name": "Thomas K." }, "reviewBody": "Pünktlich, freundlich und faire Preise. Das Angebot kam noch am gleichen Tag. Absolut top!" },
      ],
      priceRange: "€€",
      currenciesAccepted: "EUR",
      paymentAccepted: "Cash, Bank Transfer",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "18:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "09:00",
          closes: "14:00",
        },
      ],
    });
    document.head.appendChild(ldScript);

    const existingFaqLd = document.querySelector('script[data-faq-ld]');
    if (existingFaqLd) existingFaqLd.remove();
    if (faqs.length > 0) {
      const faqScript = document.createElement("script");
      faqScript.type = "application/ld+json";
      faqScript.setAttribute("data-faq-ld", "true");
      faqScript.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      });
      document.head.appendChild(faqScript);
    }

    const existingBcLd = document.querySelector('script[data-breadcrumb-ld]');
    if (existingBcLd) existingBcLd.remove();
    const bcScript = document.createElement("script");
    bcScript.type = "application/ld+json";
    bcScript.setAttribute("data-breadcrumb-ld", "true");
    bcScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Startseite", item: "https://stressfreientruempelungen.de" },
        { "@type": "ListItem", position: 2, name: "Entrümpelung", item: "https://stressfreientruempelungen.de/entruempelung" },
        { "@type": "ListItem", position: 3, name: `Entrümpelung ${cityName}`, item: `https://stressfreientruempelungen.de/entruempelung-${slug}` },
      ],
    });
    document.head.appendChild(bcScript);

    return () => {
      const ld = document.querySelector('script[data-location-ld]');
      if (ld) ld.remove();
      const faqLd = document.querySelector('script[data-faq-ld]');
      if (faqLd) faqLd.remove();
      const bcLd = document.querySelector('script[data-breadcrumb-ld]');
      if (bcLd) bcLd.remove();
      const can = document.querySelector('link[rel="canonical"]');
      if (can) can.remove();
    };
  }, [cityName, metaDescription, faqs, slug, plz]);

  return (
    <PageLayout>
      <PageHero
        title={`Entrümpelung ${cityName}`}
        subtitle={description}
        highlight={cityName}
      />

      {/* ── Social Proof Trust Bar ── */}
      <section className="border-b border-border/50 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                ))}
              </div>
              <span className="text-sm font-semibold text-foreground">5,0</span>
              <span className="text-sm text-muted-foreground">· 90+ Google-Bewertungen</span>
              <img src="/images/google-icon.svg" alt="Google" width="18" height="18" className="w-[18px] h-[18px] ml-1" />
            </div>
            <div className="hidden sm:block w-px h-5 bg-border" />
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <BadgeCheck className="w-4 h-4 text-primary shrink-0" />
              <span>Versichert & legal</span>
            </div>
            <div className="hidden sm:block w-px h-5 bg-border" />
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Zap className="w-4 h-4 text-primary shrink-0" />
              <span>Termin in 24–48h</span>
            </div>
            <div className="hidden sm:block w-px h-5 bg-border" />
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Euro className="w-4 h-4 text-primary shrink-0" />
              <span>Kostenlose Besichtigung</span>
            </div>
            <div className="hidden sm:block w-px h-5 bg-border" />
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <ThumbsUp className="w-4 h-4 text-primary shrink-0" />
              <span>Festpreis ohne Nachzahlung</span>
            </div>
            <div className="hidden sm:block w-px h-5 bg-border" />
            <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <Euro className="w-4 h-4 text-primary shrink-0" />
              <span>ab 299 €</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Schnellanfrage-Streifen ── */}
      <section className="py-5 sm:py-6 bg-primary/5 border-b border-primary/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="shrink-0 text-center sm:text-left">
              <p className="text-sm font-bold text-foreground">Jetzt in {cityName} anfragen</p>
              <p className="text-xs text-muted-foreground flex items-center gap-1.5 justify-center sm:justify-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                Termine diese Woche verfügbar
              </p>
            </div>
            <div className="flex-1 w-full">
              <LocationLeadForm cityName={cityName} position="hero" variant="compact" />
            </div>
            <a href="tel:+4922715880940" className="shrink-0 hidden sm:block">
              <Button variant="outline" size="sm" className="whitespace-nowrap border-primary/30 text-primary hover:bg-primary/5">
                <Phone className="w-3.5 h-3.5 mr-1.5" />
                02271 / 5880940
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* ── Kundenzitat ── */}
      <section className="py-5 border-b border-border/40 bg-muted/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <div className="flex items-center gap-3 shrink-0">
              <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <span className="text-sm font-bold text-primary">K</span>
              </div>
              <div>
                <div className="flex gap-0.5 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-xs text-muted-foreground">Klarabella, {cityName}</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground italic text-center sm:text-left">
              „Terminvergabe schnell und unkompliziert per WhatsApp, sehr sympathisches Team, haben alles mitgenommen und richtig gut gearbeitet."
            </p>
            <div className="shrink-0">
              <img src="/images/google-icon.svg" alt="Google Bewertung" width="22" height="22" className="w-[22px] h-[22px] opacity-70" />
            </div>
          </div>
        </div>
      </section>

      <section className="pb-8 sm:pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <img
              src="/images/professionelle-entruempelung-service-rhein-erft-kreis.webp"
              alt={`Entrümpelung in ${cityName} – Stressfrei Entrümpelungen & Umzüge`}
              className="w-full rounded-2xl shadow-lg object-cover aspect-[16/9]"
              width={1200}
              height={675}
              loading="eager"
              fetchpriority="high"
              decoding="async"
              data-testid="img-service-hero"
            />
          </FadeIn>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            <FadeIn className="lg:col-span-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4" data-testid="text-intro-title">
                Entrümpelung & Umzüge in {cityName} — schnell, fair & stressfrei
              </h2>
              <div className="max-w-none text-muted-foreground space-y-4 text-sm">
                <p className="leading-relaxed">{introText}</p>
                {localInfo && <p className="leading-relaxed">{localInfo}</p>}
              </div>

              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                {highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-3" data-testid={`highlight-${i}`}>
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-foreground">{h}</span>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delayMs={150}>
              <Card className="p-5 sm:p-6 sticky top-24" data-testid="card-contact-sidebar">
                <h3 className="font-semibold text-foreground mb-1">Jetzt kostenlos anfragen</h3>
                <p className="text-xs text-primary font-semibold mb-3">Preise ab 299 € · Festpreis garantiert</p>
                <SidebarQuickForm cityName={cityName} />
                <div className="flex gap-2">
                  <a href="tel:+4922715880940" style={{ textDecoration: "none" }} className="flex-1" data-testid="link-call-sidebar">
                    <Button variant="outline" className="w-full" size="sm">
                      <Phone className="w-3.5 h-3.5 mr-1.5" />
                      Anrufen
                    </Button>
                  </a>
                  <a
                    href={`https://wa.me/4915258177453?text=${encodeURIComponent(`Hallo, ich interessiere mich für eine Entrümpelung in ${cityName} und hätte gerne ein Angebot.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                    className="flex-1"
                    data-testid="link-whatsapp-sidebar"
                  >
                    <Button variant="outline" className="w-full border-[#25D366] text-[#25D366] hover:bg-[#25D366]/10" size="sm">
                      <IconWhatsapp className="w-3.5 h-3.5 mr-1.5" />
                      WhatsApp
                    </Button>
                  </a>
                </div>
                <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span>Mo–Sa 08:00–19:00 · Erreichbar</span>
                </div>
                {(plz || einwohner || kreis) && (
                  <div className="mt-5 pt-4 border-t border-border/50 space-y-1.5 text-xs text-muted-foreground">
                    {kreis && <div><span className="font-medium text-foreground">Kreis:</span> {kreis}</div>}
                    {plz && <div><span className="font-medium text-foreground">PLZ:</span> {plz}</div>}
                    {einwohner && <div><span className="font-medium text-foreground">Einwohner:</span> {einwohner}</div>}
                  </div>
                )}
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Lead-Formular oben ── */}
      <section className="py-14 sm:py-16 bg-primary/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <FadeIn className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-xs font-semibold mb-4">
              <Mail className="w-3.5 h-3.5" />
              Kostenlose Anfrage — in 60 Sekunden
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
              Entrümpelung in {cityName} anfragen
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto text-sm">
              Erhalten Sie Ihr kostenloses und unverbindliches Festpreisangebot für {cityName}. Wir melden uns meist innerhalb weniger Stunden.
            </p>
          </FadeIn>
          <FadeIn delayMs={100}>
            <Card className="p-6 sm:p-8">
              <div className="flex flex-wrap gap-4 mb-6 pb-6 border-b border-border/50">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>Kostenlose Besichtigung</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>Verbindlicher Festpreis</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>Oft 24–48h Ausführung</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>Wertanrechnung möglich</span>
                </div>
              </div>
              <LocationLeadForm cityName={cityName} position="top" />
            </Card>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeIn className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3" data-testid="text-why-title">
              Warum Stressfrei in {cityName}?
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Über 90+ zufriedene Kunden vertrauen uns — auch in {cityName} und Umgebung.
            </p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Zap, title: "24–48h Ausführung", desc: `Schnelle Entrümpelung in ${cityName} — oft innerhalb von 1–2 Werktagen.` },
              { icon: Euro, title: "Faire Festpreise", desc: "Transparente Preise ohne versteckte Kosten. Kostenlose Besichtigung vor Ort." },
              { icon: Shield, title: "Versichert & legal", desc: "Fachgerechte Entsorgung nach Vorschrift. Vollständig versichert und angemeldet." },
              { icon: Recycle, title: "Wertanrechnung", desc: "Verwertbares wird angerechnet. So sparen Sie bei Ihrer Entrümpelung bares Geld." },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <FadeIn key={i} delayMs={i * 80}>
                  <Card className="p-5 h-full text-center" data-testid={`card-benefit-${i}`}>
                    <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground text-sm mb-1.5">{item.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </Card>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {localExtras}

      {trustStats && (
        <section className="py-10 sm:py-12 bg-primary/5 border-y border-border/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <FadeIn className="text-center mb-6">
              <h2 className="text-lg sm:text-xl font-bold text-foreground">
                Stressfrei in {cityName} — das sagen unsere Zahlen
              </h2>
            </FadeIn>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
              {[
                { value: trustStats.auftraege, label: `Aufträge in ${cityName}` },
                { value: trustStats.reaktionszeit, label: "Reaktionszeit" },
                { value: "5,0 ★", label: "Google-Bewertung" },
                { value: trustStats.erfahrung, label: "Im Einsatz" },
              ].map((stat, i) => (
                <FadeIn key={i} delayMs={i * 80}>
                  <div className="text-center p-4 sm:p-5 rounded-xl bg-background border border-border/40 shadow-sm">
                    <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-xs text-muted-foreground leading-tight">{stat.label}</div>
                  </div>
                </FadeIn>
              ))}
            </div>
            {trustStats.kundenzitat && (
              <FadeIn className="mt-6 max-w-2xl mx-auto" delayMs={320}>
                <div className="rounded-xl border border-border/40 bg-background p-5 text-center shadow-sm">
                  <div className="flex justify-center gap-0.5 mb-3">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-3.5 h-3.5 text-accent fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed italic mb-3">
                    „{trustStats.kundenzitat}"
                  </p>
                  {trustStats.kundenName && (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-xs font-semibold text-primary">{trustStats.kundenName.charAt(0)}</span>
                      </div>
                      <span className="text-xs font-medium text-foreground">{trustStats.kundenName}, {cityName}</span>
                    </div>
                  )}
                </div>
              </FadeIn>
            )}
          </div>
        </section>
      )}

      <section className="py-16 sm:py-20 bg-card/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeIn className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3" data-testid="text-services-title">
              Unsere Leistungen in {cityName}
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Ob Entrümpelung, Haushaltsauflösung, Umzug oder Schrottankauf — wir bieten Ihnen den passenden Service in {cityName}.
            </p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <FadeIn key={s.title} delayMs={i * 80}>
                  <Card className="p-5 h-full hover-elevate" data-testid={`card-service-${i}`}>
                    <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{s.title} in {cityName}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-3">{s.description}</p>
                    <Link href={s.href} style={{ textDecoration: "none" }} data-testid={`link-service-${i}`}>
                      <Button variant="outline" size="sm" className="text-xs">
                        Mehr erfahren
                        <ArrowRight className="w-3 h-3 ml-1.5" />
                      </Button>
                    </Link>
                  </Card>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Was wir mitnehmen ── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeIn className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
              Was nehmen wir bei der Entrümpelung in {cityName} mit?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
              Wir räumen vollständig — egal was drin ist. Von Möbeln über Elektrogeräte bis hin zu Sondermüll und Altmetall.
            </p>
          </FadeIn>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: Sofa, label: "Möbel & Sofas", sub: "Alle Arten, auch schwere Stücke" },
              { icon: Refrigerator, label: "Elektrogeräte", sub: "Kühlschrank, Herd, Waschmaschine" },
              { icon: Boxes, label: "Kartons & Hausrat", sub: "Küchenutensilien, Bücher, Kleidung" },
              { icon: Wrench, label: "Werkzeug & Hobby", sub: "Keller, Garage, Dachboden" },
              { icon: Trash2, label: "Sperrmüll & Schrott", sub: "Fachgerechte Entsorgung" },
              { icon: Recycle, label: "Wertgegenstände", sub: "Werden angerechnet & verwertet" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <FadeIn key={i} delayMs={i * 60}>
                  <Card className="p-4 text-center h-full">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-sm font-semibold text-foreground mb-1">{item.label}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.sub}</p>
                  </Card>
                </FadeIn>
              );
            })}
          </div>
          <FadeIn className="mt-8">
            <div className="rounded-2xl bg-amber-50 border border-amber-200 p-5 flex items-start gap-3 max-w-3xl mx-auto">
              <ThumbsUp className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-foreground text-sm mb-1">Tipp: Wertanrechnung spart Geld</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Gut erhaltene Möbel, Elektrogeräte und Metalle rechnen wir direkt von Ihrem Entrümpelungspreis ab.
                  Das senkt Ihre Kosten oft um <strong>20–40 %</strong> — ganz ohne Aufwand für Sie.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 sm:py-20" data-testid="section-ablauf">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeIn className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3" data-testid="text-ablauf-title">
              Ablauf einer Entrümpelung in {cityName}
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              In 5 einfachen Schritten zu Ihrer stressfreien Entrümpelung — transparent, fair und professionell.
            </p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { step: "1", title: "Kostenlose Besichtigung", desc: `Wir besichtigen Ihre Räumlichkeiten in ${cityName} kostenlos und unverbindlich vor Ort.` },
              { step: "2", title: "Festpreis-Angebot", desc: "Sie erhalten ein verbindliches Festpreisangebot — ohne versteckte Kosten oder Nachzahlungen." },
              { step: "3", title: "Terminvereinbarung", desc: "Wir vereinbaren einen Wunschtermin, der in Ihren Zeitplan passt. Oft schon innerhalb weniger Tage." },
              { step: "4", title: "Professionelle Entrümpelung", desc: "Unser erfahrenes Team entrümpelt schnell, sauber und fachgerecht. Sie müssen nichts tun." },
              { step: "5", title: "Besenreine Übergabe", desc: "Nach der Entrümpelung übergeben wir Ihnen die Räume besenrein — sofort bezugsfertig." },
            ].map((item, i) => (
              <FadeIn key={i} delayMs={i * 100}>
                <div className="text-center" data-testid={`step-${i}`}>
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 text-sm">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-card/50" data-testid="section-kosten">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
            <FadeIn>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4" data-testid="text-kosten-title">
                Was kostet eine Entrümpelung in {cityName}?
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Die Kosten einer Entrümpelung in {cityName} hängen von mehreren Faktoren ab. Hier finden Sie eine Preisübersicht als Orientierung — Ihren genauen Festpreis erhalten Sie nach einer kostenlosen Besichtigung.
              </p>
              <div className="rounded-lg border border-border overflow-hidden mb-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-primary/5">
                      <th className="text-left font-semibold p-3 text-foreground">Wohnungsgröße</th>
                      <th className="text-left font-semibold p-3 text-foreground">Preis</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { size: "1-Zimmer-Wohnung", price: "ab 500 €" },
                      { size: "2-Zimmer-Wohnung", price: "ab 800 €" },
                      { size: "3-Zimmer-Wohnung", price: "ab 1.200 €" },
                      { size: "4-Zimmer-Wohnung", price: "ab 1.800 €" },
                      { size: "Einfamilienhaus", price: "ab 2.500 €" },
                      { size: "Keller / Dachboden", price: "ab 300 €" },
                    ].map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-background" : "bg-muted/30"} data-testid={`row-price-${i}`}>
                        <td className="p-3 text-foreground">{row.size}</td>
                        <td className="p-3 font-semibold text-primary">{row.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-muted-foreground">
                Alle Preise inkl. MwSt., Arbeit, Transport und fachgerechter Entsorgung. Verbindlicher Festpreis nach Besichtigung.
              </p>
            </FadeIn>

            <FadeIn delayMs={150}>
              <h3 className="font-bold text-foreground text-lg mb-4">Der Preis hängt ab von:</h3>
              <div className="space-y-4">
                {[
                  { icon: Recycle, title: "Menge & Art des Sperrmülls", desc: "Je mehr Gegenstände und je schwerer die Entsorgung (z.B. Sondermüll), desto höher die Kosten." },
                  { icon: ArrowRight, title: "Etage / Stockwerk", desc: "Ohne Aufzug steigt der Trageaufwand mit jedem Stockwerk — das beeinflusst den Preis." },
                  { icon: Zap, title: "Aufzug vorhanden?", desc: "Ein Aufzug erleichtert den Transport erheblich und reduziert die Kosten spürbar." },
                  { icon: MapPin, title: "Entfernung zum Entsorgungsort", desc: "Längere Transportwege zum Wertstoffhof oder zur Deponie erhöhen die Fahrtkosten." },
                ].map((factor, i) => {
                  const Icon = factor.icon;
                  return (
                    <div key={i} className="flex items-start gap-3" data-testid={`factor-${i}`}>
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground text-sm">{factor.title}</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">{factor.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-6">
                <Link href="/kosten-entruempelung" style={{ textDecoration: "none" }} data-testid="link-kostenrechner">
                  <Button variant="outline" size="sm" className="text-xs">
                    Kostenrechner nutzen
                    <ArrowRight className="w-3 h-3 ml-1.5" />
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {beispiel && (
        <section className="py-16 sm:py-20" data-testid="section-beispiel">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <FadeIn className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3" data-testid="text-beispiel-title">
                Beispiel-Entrümpelung in {cityName}-{beispiel.stadtteil}
              </h2>
              <p className="text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                So kann eine typische Entrümpelung in {cityName} ablaufen — transparent, schnell und zum Festpreis.
              </p>
            </FadeIn>
            <div className="grid lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
              <FadeIn className="lg:col-span-3">
                <Card className="p-6 h-full">
                  <div className="flex items-center gap-2 mb-5">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Home className="w-4 h-4 text-primary" />
                    </div>
                    <h3 className="font-bold text-foreground">
                      {beispiel.objektTyp} in {cityName}-{beispiel.stadtteil}
                    </h3>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                    {[
                      { icon: Home, label: "Etage", value: beispiel.etage },
                      { icon: Package, label: "Fläche", value: beispiel.flaeche },
                      { icon: Calendar, label: "Dauer", value: beispiel.dauer },
                      { icon: Users, label: "Team", value: beispiel.team },
                    ].map((item, i) => {
                      const Icon = item.icon;
                      return (
                        <div key={i} className="text-center p-3 rounded-lg bg-muted/30" data-testid={`beispiel-detail-${i}`}>
                          <Icon className="w-4 h-4 text-primary mx-auto mb-1.5" />
                          <p className="text-xs text-muted-foreground mb-0.5">{item.label}</p>
                          <p className="text-sm font-semibold text-foreground">{item.value}</p>
                        </div>
                      );
                    })}
                  </div>
                  <h4 className="text-sm font-semibold text-foreground mb-3">Durchgeführte Leistungen:</h4>
                  <ul className="space-y-2">
                    {beispiel.leistungen.map((leistung, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground" data-testid={`beispiel-leistung-${i}`}>
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{leistung}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </FadeIn>
              <FadeIn className="lg:col-span-2 flex flex-col gap-4" delayMs={150}>
                <Card className="p-6 bg-primary/5 border-primary/20 flex-1">
                  <div className="text-center mb-4">
                    <p className="text-xs text-muted-foreground mb-1">Festpreis für diese Entrümpelung</p>
                    <p className="text-3xl font-bold text-primary" data-testid="text-beispiel-preis">{beispiel.preis}</p>
                    <p className="text-xs text-muted-foreground mt-1">inkl. MwSt., Entsorgung & besenreiner Übergabe</p>
                  </div>
                  <div className="space-y-2 text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Shield className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span>Verbindlicher Festpreis — keine Nachzahlung</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Recycle className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span>Fachgerechte Entsorgung inklusive</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span>Termin innerhalb von 24–48h möglich</span>
                    </div>
                  </div>
                </Card>
                {beispiel.kundenzitat && (
                  <Card className="p-5">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="w-3.5 h-3.5 text-accent fill-current" />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed italic mb-3" data-testid="text-beispiel-zitat">
                      "{beispiel.kundenzitat}"
                    </p>
                    {beispiel.kundenName && (
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-xs font-semibold text-primary">{beispiel.kundenName.charAt(0)}</span>
                        </div>
                        <span className="text-xs font-medium text-foreground">{beispiel.kundenName}</span>
                      </div>
                    )}
                  </Card>
                )}
              </FadeIn>
            </div>
          </div>
        </section>
      )}

      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeIn className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3" data-testid="text-faq-title">
              Häufige Fragen zur Entrümpelung in {cityName}
            </h2>
          </FadeIn>
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <FadeIn key={i} delayMs={i * 50}>
                <FAQItem faq={faq} index={i} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Lead-Formular unten ── */}
      <section className="py-14 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <FadeIn className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-xs font-semibold mb-4">
              <Phone className="w-3.5 h-3.5" />
              Jetzt Festpreis sichern
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
              Kostenlose Anfrage für {cityName}
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto text-sm">
              Noch Fragen? Jetzt unverbindlich anfragen — wir erstellen Ihnen schnell ein transparentes Festpreisangebot für {cityName}.
            </p>
          </FadeIn>
          <FadeIn delayMs={100}>
            <Card className="p-6 sm:p-8 border-primary/20 shadow-md">
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-border/50">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-accent fill-current" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">5.0 aus 90+ Bewertungen · Vertrauenswürdiger Betrieb seit Jahren</p>
              </div>
              <LocationLeadForm cityName={cityName} position="bottom" />
            </Card>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-card/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeIn className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3" data-testid="text-reviews-title">
              Kundenbewertungen aus {cityName} & Umgebung
            </h2>
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-accent fill-current" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">5.0 Sterne aus über 90+ Google Bewertungen</p>
          </FadeIn>
          <div className={`grid gap-5 ${trustStats?.kundenzitat ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-3"}`}>
            {reviews.map((review, i) => (
              <FadeIn key={review.name} delayMs={i * 80}>
                <Card className="p-5 h-full" data-testid={`card-review-${i}`}>
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-3.5 h-3.5 text-accent fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">"{review.text}"</p>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-xs font-semibold text-primary">{review.name.charAt(0)}</span>
                      </div>
                      <span className="text-sm font-medium text-foreground">{review.name}</span>
                    </div>
                    <img loading="lazy" src="/images/google-icon.svg" alt="Google" width="20" height="20" className="w-5 h-5" />
                  </div>
                </Card>
              </FadeIn>
            ))}
            {trustStats?.kundenzitat && (
              <FadeIn delayMs={320}>
                <Card className="p-5 h-full border-primary/30 bg-primary/5" data-testid="card-review-city">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-3.5 h-3.5 text-accent fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">"{trustStats.kundenzitat}"</p>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-xs font-semibold text-primary">{trustStats.kundenName ? trustStats.kundenName.charAt(0) : "K"}</span>
                      </div>
                      <span className="text-sm font-medium text-foreground">{trustStats.kundenName ?? "Kunde"}, {cityName}</span>
                    </div>
                    <img loading="lazy" src="/images/google-icon.svg" alt="Google" width="20" height="20" className="w-5 h-5" />
                  </div>
                </Card>
              </FadeIn>
            )}
          </div>
          <FadeIn className="text-center mt-8">
            <a
              href="https://share.google/bYXZHQXPyL6EWKLhL"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <img src="/images/google-icon.svg" alt="Google" width="16" height="16" className="w-4 h-4" />
              Alle Google-Bewertungen lesen →
            </a>
          </FadeIn>
        </div>
      </section>

      {(stadtteileDetail && stadtteileDetail.length > 0 ? stadtteileDetail : stadtteile && stadtteile.length > 0 ? stadtteile.map(s => ({ name: s, text: `Ihr Partner für Entrümpelungen & Haushaltsauflösungen in ${cityName}-${s}.` })) : null) && (
        <section className="py-16 sm:py-20 bg-card/50" data-testid="section-stadtteile">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <FadeIn className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3" data-testid="text-stadtteile-title">
                Entrümpelung in allen Stadtteilen von {cityName}
              </h2>
              <p className="text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Unser Team ist in allen Stadtteilen von {cityName} im Einsatz. Egal ob Haushaltsauflösung, Kellerentrümpelung oder Wohnungsauflösung — wir kommen direkt zu Ihnen. Kurze Anfahrtswege bedeuten günstige Preise für Sie.
              </p>
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {(stadtteileDetail ?? (stadtteile ?? []).map(s => ({ name: s, text: `Ihr Partner für Entrümpelungen & Haushaltsauflösungen in ${cityName}-${s}.`, href: undefined as string | undefined }))).map((item, i) => (
                <FadeIn key={item.name} delayMs={i * 40}>
                  {item.href ? (
                    <Link href={item.href}>
                      <Card className="p-4 hover:border-primary hover:shadow-sm transition-all cursor-pointer group" data-testid={`card-stadtteil-${i}`}>
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors">
                            <MapPin className="w-4 h-4 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-sm text-foreground mb-1 group-hover:text-primary transition-colors">
                              Entrümpelung {item.name} →
                            </h3>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                              {item.text}
                            </p>
                          </div>
                        </div>
                      </Card>
                    </Link>
                  ) : (
                    <Card className="p-4 hover:border-primary/30 transition-colors" data-testid={`card-stadtteil-${i}`}>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                          <MapPin className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-sm text-foreground mb-1">
                            Entrümpelung {item.name}
                          </h3>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    </Card>
                  )}
                </FadeIn>
              ))}
            </div>
            <FadeIn className="text-center mt-8">
              <p className="text-sm text-muted-foreground mb-4">
                Sie wohnen in einem anderen Stadtteil von {cityName}? Kein Problem — wir sind überall in {cityName} für Sie da!
              </p>
              <a href="tel:+4922715880940" data-testid="link-stadtteile-phone">
                <Button size="sm" className="text-xs">
                  <Phone className="w-3 h-3 mr-1.5" />
                  Jetzt anrufen: 02271 / 5880940
                </Button>
              </a>
            </FadeIn>
          </div>
        </section>
      )}

      {mapEmbed && (
        <section className="py-16 sm:py-20 bg-card/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <FadeIn className="text-center mb-10">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3" data-testid="text-map-title">
                Entrümpelung {cityName} — Unser Standort
              </h2>
              <p className="text-sm text-muted-foreground max-w-lg mx-auto">
                Finden Sie uns ganz einfach — wir sind schnell bei Ihnen in {cityName} vor Ort.
              </p>
            </FadeIn>
            <FadeIn className="rounded-xl overflow-hidden border border-border/50 shadow-sm">
              <iframe
                src={mapEmbed}
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Google Maps — Entrümpelung ${cityName}`}
                data-testid="map-embed"
              />
            </FadeIn>
          </div>
        </section>
      )}

      {neighborCities.length > 0 && (
        <section className="py-16 sm:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <FadeIn className="text-center mb-10">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3" data-testid="text-neighbors-title">
                Entrümpelung auch in der Nähe von {cityName}
              </h2>
              <p className="text-sm text-muted-foreground max-w-lg mx-auto">
                Wir sind im gesamten Rhein-Erft-Kreis und darüber hinaus für Sie da.
              </p>
            </FadeIn>
            <div className="flex flex-wrap justify-center gap-3">
              {neighborCities.map((city, i) => (
                <FadeIn key={city.slug} delayMs={i * 40}>
                  <Link href={`/entruempelung-${city.slug}`} style={{ textDecoration: "none" }} data-testid={`link-neighbor-${i}`}>
                    <Button variant="outline" size="sm" className="text-xs">
                      <MapPin className="w-3 h-3 mr-1.5" />
                      Entrümpelung {city.name}
                    </Button>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        title={`Jetzt kostenlose Entrümpelung in ${cityName} anfragen`}
        subtitle={`Kontaktieren Sie uns für ein kostenloses und unverbindliches Angebot für Ihre Entrümpelung in ${cityName}. Wir beraten Sie gerne — schnell, fair und zuverlässig.`}
      />

    </PageLayout>
  );
}
