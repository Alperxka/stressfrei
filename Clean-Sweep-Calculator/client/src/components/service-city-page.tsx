import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PageLayout, PageHero, CTASection } from "@/components/layout";
import { Link } from "wouter";
import { useEffect, useState } from "react";
import {
  Phone, Star, CheckCircle2, Trash2, Home, Truck, MapPin,
  ChevronDown, ChevronUp, Shield, Euro, Zap, Recycle,
  ArrowRight, Package, Archive, Layers,
} from "lucide-react";
import { FadeIn } from "@/components/fade-in";


export type ServiceType = "haushaltsaufloesung" | "wohnungsaufloesung" | "kellerentruempelung";

interface FAQ { question: string; answer: string; }
export interface ServiceCityBeispiel {
  objektTyp: string;
  flaeche: string;
  dauer: string;
  preis: string;
  details: string;
  kundenzitat: string;
  kundenName: string;
}

export interface ServiceCityData {
  cityName: string;
  slug: string;
  plz: string;
  einwohner: string;
  metaDescription: string;
  introText: string[];
  localInfo?: string;
  highlights: string[];
  faqs: FAQ[];
  beispiel: ServiceCityBeispiel;
  neighborCities: { name: string; slug: string }[];
}

const serviceConfig = {
  haushaltsaufloesung: {
    urlPrefix: "haushaltsaufloesung",
    label: "Haushaltsauflösung",
    heroTitle: (city: string) => `Haushaltsauflösung in ${city}`,
    heroSub: (city: string) =>
      `Professionelle Haushaltsauflösung in ${city} — diskret, vollständig und zu fairen Festpreisen. Wertanrechnung inklusive.`,
    ablauf: [
      { step: "1", title: "Kostenlose Besichtigung", desc: "Wir begutachten Ihre Immobilie vor Ort – kostenlos und unverbindlich." },
      { step: "2", title: "Festpreis-Angebot", desc: "Sie erhalten ein verbindliches Angebot inkl. Wertanrechnung für verwertbare Gegenstände." },
      { step: "3", title: "Terminvereinbarung", desc: "Wunschtermin flexibel – auch kurzfristig innerhalb weniger Tage möglich." },
      { step: "4", title: "Vollständige Räumung", desc: "Unser Team räumt alles leer – Möbel, Elektrogeräte, Kleidung, Sperrmüll und mehr." },
      { step: "5", title: "Besenreine Übergabe", desc: "Übergabe besenrein an Eigentümer oder Vermieter – sofort zur weiteren Nutzung bereit." },
    ],
    usps: [
      { icon: Zap, title: "Schnell & diskret", desc: "Vollständige Haushaltsauflösung oft innerhalb 1–2 Tagen – vertraulich und respektvoll." },
      { icon: Euro, title: "Wertanrechnung", desc: "Wertgegenstände werden auf den Preis angerechnet – Sie sparen deutlich." },
      { icon: Shield, title: "Versichert & legal", desc: "Fachgerechte Entsorgung nach gesetzlichen Vorschriften. Vollständig versichert." },
      { icon: Recycle, title: "Alles aus einer Hand", desc: "Von der Räumung bis zur Entsorgung – kein Koordinationsaufwand für Sie." },
    ],
    crossService: "/haushaltsaufloesung",
    faqTitle: (city: string) => `Häufige Fragen zur Haushaltsauflösung in ${city}`,
    kostenTitle: (city: string) => `Was kostet eine Haushaltsauflösung in ${city}?`,
    kostenIntro: (city: string) =>
      `Die Kosten einer Haushaltsauflösung in ${city} hängen von der Größe des Objekts, der Menge der Gegenstände und dem Aufwand ab. Wir erstellen Ihnen nach einer kostenlosen Besichtigung ein verbindliches Festpreisangebot. Durch Wertanrechnung von Möbeln, Elektrogeräten und Wertsachen kann sich der Preis deutlich reduzieren.`,
    neighborLabel: "Haushaltsauflösung",
    neighborSlugPrefix: "haushaltsaufloesung",
    schemaServiceType: "Haushaltsauflösung",
    sectionLabel: "Haushaltsauflösungen",
  },
  wohnungsaufloesung: {
    urlPrefix: "wohnungsaufloesung",
    label: "Wohnungsauflösung",
    heroTitle: (city: string) => `Wohnungsauflösung in ${city}`,
    heroSub: (city: string) =>
      `Professionelle Wohnungsauflösung in ${city} – vollständig, termingerecht und mit besenreiner Übergabe für Vermieter und Mieter.`,
    ablauf: [
      { step: "1", title: "Kostenlose Besichtigung", desc: "Wir besichtigen die Wohnung kostenfrei – auch kurzfristig vor der Übergabe." },
      { step: "2", title: "Transparentes Angebot", desc: "Festpreis inklusive aller Kosten – keine Nachzahlungen, keine bösen Überraschungen." },
      { step: "3", title: "Termingerechte Räumung", desc: "Wir richten uns nach Ihrem Übergabetermin – pünktlich und zuverlässig." },
      { step: "4", title: "Vollständige Räumung", desc: "Alle Möbel, Einrichtungsgegenstände und Abfälle werden fachgerecht entfernt und entsorgt." },
      { step: "5", title: "Übergabe & Reinigung", desc: "Besenreine Übergabe an Vermieter – auf Wunsch mit Schlüsselübergabe." },
    ],
    usps: [
      { icon: Zap, title: "Termingerecht", desc: "Wir richten uns nach Ihrem Übergabetermin – auch kurzfristig innerhalb 24h." },
      { icon: Euro, title: "Kaution schützen", desc: "Besenreine Übergabe schützt Ihre Mietkaution – wir räumen vollständig und sauber." },
      { icon: Shield, title: "Rechtssicher entsorgt", desc: "Alle Gegenstände werden legal und fachgerecht entsorgt – keine versteckten Kosten." },
      { icon: Recycle, title: "Wertanrechnung möglich", desc: "Verwertbare Möbel und Elektrogeräte können den Preis senken." },
    ],
    crossService: "/wohnungsaufloesung",
    faqTitle: (city: string) => `Häufige Fragen zur Wohnungsauflösung in ${city}`,
    kostenTitle: (city: string) => `Was kostet eine Wohnungsauflösung in ${city}?`,
    kostenIntro: (city: string) =>
      `Die Kosten einer Wohnungsauflösung in ${city} richten sich nach Wohnungsgröße und Füllgrad. Typische 3-Zimmer-Wohnungen werden ab ca. 450 € aufgelöst. Nach kostenloser Besichtigung erhalten Sie ein verbindliches Festpreisangebot. Wertanrechnung für brauchbare Möbel ist möglich.`,
    neighborLabel: "Wohnungsauflösung",
    neighborSlugPrefix: "wohnungsaufloesung",
    schemaServiceType: "Wohnungsauflösung",
    sectionLabel: "Wohnungsauflösungen",
  },
  kellerentruempelung: {
    urlPrefix: "kellerentruempelung",
    label: "Kellerentrümpelung",
    heroTitle: (city: string) => `Kellerentrümpelung in ${city}`,
    heroSub: (city: string) =>
      `Ihr Keller in ${city} wird professionell entrümpelt – schnell, gründlich und zu einem fairen Festpreis ohne versteckte Kosten.`,
    ablauf: [
      { step: "1", title: "Kostenlose Besichtigung", desc: "Wir schauen uns Ihren Keller vor Ort an – kostenlos und ohne Verpflichtung." },
      { step: "2", title: "Festpreisangebot", desc: "Klares Angebot nach Volumen und Aufwand – keine Überraschungen hinterher." },
      { step: "3", title: "Terminwahl", desc: "Flexibler Termin nach Ihrem Wunsch – oft schon am nächsten Werktag möglich." },
      { step: "4", title: "Professionelle Räumung", desc: "Alles wird herausgeräumt, sortiert und fachgerecht entsorgt – auch Sperrmüll und Sondermüll." },
      { step: "5", title: "Besenreiner Keller", desc: "Ihr Keller wird besenrein hinterlassen – sofort nutzbar für Lagerung oder Umbau." },
    ],
    usps: [
      { icon: Zap, title: "Schnell & gründlich", desc: "Auch große Keller werden innerhalb eines Tages vollständig geräumt." },
      { icon: Euro, title: "Faire Festpreise", desc: "Transparente Preise nach Volumen – keine versteckten Zuschläge." },
      { icon: Shield, title: "Sondermüll kein Problem", desc: "Farben, Lacke, alte Elektrogeräte – wir entsorgen alles rechtssicher." },
      { icon: Recycle, title: "Wertanrechnung", desc: "Schrott, Metall und verwertbare Gegenstände werden auf den Preis angerechnet." },
    ],
    crossService: "/kellerentruempelung",
    faqTitle: (city: string) => `Häufige Fragen zur Kellerentrümpelung in ${city}`,
    kostenTitle: (city: string) => `Was kostet eine Kellerentrümpelung in ${city}?`,
    kostenIntro: (city: string) =>
      `Die Kosten einer Kellerentrümpelung in ${city} hängen vom Volumen und vom Inhalt ab. Kleine Keller ab ca. 150 €, größere Keller mit Sondermüll oder Sperrmüll entsprechend mehr. Nach der kostenlosen Besichtigung erhalten Sie ein verbindliches Festpreisangebot.`,
    neighborLabel: "Kellerentrümpelung",
    neighborSlugPrefix: "kellerentruempelung",
    schemaServiceType: "Kellerentrümpelung",
    sectionLabel: "Kellerentrümpelungen",
  },
} as const;

const reviews = [
  {
    name: "S. Fischer",
    text: "Haushaltsauflösung meiner Mutter nach dem Heimeinzug – sehr einfühlsam, alles diskret erledigt. Preis-Leistung top. Klare Empfehlung!",
  },
  {
    name: "M. Meinke",
    text: "Schnell einen Termin bekommen, pünktlich, freundlich und unkompliziert wurde meine Garage und mein Keller geräumt. Schränke wurden demontiert, besenrein hinterlassen.",
  },
  {
    name: "Katy S.",
    text: "Super Team! Sie kamen pünktlich, waren höflich und haben die Arbeit effizient erledigt. Ich kann diesen Service nur weiterempfehlen.",
  },
];

function FAQItem({ faq, index }: { faq: FAQ; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border/50 rounded-lg overflow-hidden" data-testid={`faq-item-${index}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-4 sm:p-5 text-left hover:bg-card/80 transition-colors"
        data-testid={`faq-toggle-${index}`}
      >
        <span className="font-medium text-foreground text-sm sm:text-base">{faq.question}</span>
        {open ? <ChevronUp className="w-4 h-4 text-muted-foreground shrink-0" /> : <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0" />}
      </button>
      {open && (
        <div className="px-4 sm:px-5 pb-4 sm:pb-5">
          <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
        </div>
      )}
    </div>
  );
}

interface ServiceCityPageProps {
  serviceType: ServiceType;
  data: ServiceCityData;
}

export default function ServiceCityPage({ serviceType, data }: ServiceCityPageProps) {
  const cfg = serviceConfig[serviceType];
  const {
    cityName, slug, plz, einwohner, metaDescription,
    introText, localInfo, highlights, faqs, beispiel, neighborCities,
  } = data;

  const canonicalUrl = `https://stressfreientruempelungen.de/${cfg.urlPrefix}-${slug}`;
  const pageTitle = `${cfg.label} ${cityName} | Stressfrei Entrümpelungen & Umzüge`;

  useEffect(() => {
    document.title = pageTitle;

    const setMeta = (attr: string, attrVal: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${attrVal}"]`) as HTMLMetaElement | null;
      if (el) { el.content = content; } else {
        el = document.createElement("meta"); el.setAttribute(attr, attrVal); el.content = content; document.head.appendChild(el);
      }
    };

    setMeta("name", "description", metaDescription);
    setMeta("property", "og:title", pageTitle);
    setMeta("property", "og:description", metaDescription);
    setMeta("property", "og:url", canonicalUrl);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:image", "https://stressfreientruempelungen.de/images/professionelle-entruempelung-service-rhein-erft-kreis.webp");
    setMeta("property", "og:locale", "de_DE");
    setMeta("property", "og:site_name", "Stressfrei Entrümpelungen & Umzüge");

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (canonical) { canonical.href = canonicalUrl; } else {
      canonical = document.createElement("link"); canonical.rel = "canonical"; canonical.href = canonicalUrl; document.head.appendChild(canonical);
    }

    const removeOldLd = (attr: string) => { const el = document.querySelector(`script[${attr}]`); if (el) el.remove(); };
    removeOldLd("data-svc-city-ld");
    removeOldLd("data-svc-faq-ld");
    removeOldLd("data-svc-bc-ld");

    const ldScript = document.createElement("script");
    ldScript.type = "application/ld+json";
    ldScript.setAttribute("data-svc-city-ld", "true");
    ldScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://stressfreientruempelungen.de/#organization",
      name: `Stressfrei Entrümpelungen & Umzüge – ${cfg.label} ${cityName}`,
      description: metaDescription,
      url: canonicalUrl,
      telephone: "+4922715880940",
      email: "info@stressfreientruempelungen.de",
      image: "https://stressfreientruempelungen.de/images/professionelle-entruempelung-service-rhein-erft-kreis.webp",
      logo: "https://stressfreientruempelungen.de/images/logo.webp",
      address: { "@type": "PostalAddress", addressLocality: cityName, postalCode: plz, addressRegion: "Nordrhein-Westfalen", addressCountry: "DE" },
      areaServed: [
        { "@type": "AdministrativeArea", "name": "Rhein-Erft-Kreis" },
        { "@type": "City", "name": cityName },
      ],
      aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "84", bestRating: "5", worstRating: "1" },
      priceRange: "€€",
      openingHoursSpecification: [
        { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "08:00", closes: "18:00" },
        { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "14:00" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: cfg.label,
        itemListElement: [{ "@type": "Offer", itemOffered: { "@type": "Service", name: `${cfg.label} in ${cityName}`, serviceType: cfg.schemaServiceType } }],
      },
    });
    document.head.appendChild(ldScript);

    if (faqs.length > 0) {
      const faqScript = document.createElement("script");
      faqScript.type = "application/ld+json";
      faqScript.setAttribute("data-svc-faq-ld", "true");
      faqScript.textContent = JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: faqs.map(faq => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })),
      });
      document.head.appendChild(faqScript);
    }

    const bcScript = document.createElement("script");
    bcScript.type = "application/ld+json";
    bcScript.setAttribute("data-svc-bc-ld", "true");
    bcScript.textContent = JSON.stringify({
      "@context": "https://schema.org", "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Startseite", item: "https://stressfreientruempelungen.de" },
        { "@type": "ListItem", position: 2, name: cfg.label, item: `https://stressfreientruempelungen.de/${cfg.crossService}` },
        { "@type": "ListItem", position: 3, name: `${cfg.label} ${cityName}`, item: canonicalUrl },
      ],
    });
    document.head.appendChild(bcScript);

    return () => {
      removeOldLd("data-svc-city-ld");
      removeOldLd("data-svc-faq-ld");
      removeOldLd("data-svc-bc-ld");
    };
  }, [cityName, slug, metaDescription, serviceType]);

  return (
    <PageLayout>
      <PageHero
        title={cfg.heroTitle(cityName)}
        subtitle={cfg.heroSub(cityName)}
      />

      {/* Intro */}
      <section className="py-14 sm:py-18">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            <FadeIn>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4" data-testid="text-intro-title">
                {cfg.label} in {cityName} — schnell & professionell
              </h2>
              <div className="text-sm text-muted-foreground leading-relaxed space-y-3 mb-6">
                {introText.map((p, i) => <p key={i}>{p}</p>)}
              </div>
              {localInfo && (
                <div className="text-sm text-muted-foreground leading-relaxed border-l-2 border-primary/40 pl-4 italic mt-4">
                  {localInfo}
                </div>
              )}
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="tel:+4922715880940" data-testid="link-phone-intro">
                  <Button size="sm" className="gap-2">
                    <Phone className="w-4 h-4" />
                    02271 / 5880940
                  </Button>
                </a>
                <Link href="/kontakt" data-testid="link-kontakt-intro">
                  <Button variant="outline" size="sm">Kostenlos anfragen</Button>
                </Link>
              </div>
            </FadeIn>
            <FadeIn delayMs={100}>
              <Card className="p-6">
                <h3 className="font-semibold text-foreground mb-4 text-sm">Unsere Stärken auf einen Blick</h3>
                <ul className="space-y-3">
                  {highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm" data-testid={`highlight-${i}`}>
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{h}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 p-3 bg-primary/5 rounded-lg border border-primary/20">
                  <p className="text-xs text-muted-foreground">
                    <strong className="text-foreground">Einwohner {cityName}:</strong> {einwohner} | <strong className="text-foreground">PLZ:</strong> {plz} | <strong className="text-foreground">Kreis:</strong> Rhein-Erft-Kreis
                  </p>
                </div>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* USPs */}
      <section className="py-14 sm:py-18 bg-card/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeIn className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3" data-testid="text-usp-title">
              Warum Stressfrei für Ihre {cfg.label} in {cityName}?
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto text-sm">
              Über 84 zufriedene Kunden vertrauen uns — auch in {cityName} und im gesamten Rhein-Erft-Kreis.
            </p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {cfg.usps.map((usp, i) => {
              const Icon = usp.icon;
              return (
                <FadeIn key={i} delayMs={i * 80}>
                  <Card className="p-5 h-full text-center" data-testid={`card-usp-${i}`}>
                    <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground text-sm mb-1.5">{usp.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{usp.desc}</p>
                  </Card>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ablauf */}
      <section className="py-14 sm:py-18" data-testid="section-ablauf">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeIn className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3" data-testid="text-ablauf-title">
              Ablauf Ihrer {cfg.label} in {cityName}
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto text-sm">
              In 5 einfachen Schritten zu Ihrer stressfreien {cfg.label} — transparent, fair und professionell.
            </p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {cfg.ablauf.map((item, i) => (
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

      {/* Kosten + Beispiel */}
      <section className="py-14 sm:py-18 bg-card/50" data-testid="section-kosten">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
            <FadeIn>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4" data-testid="text-kosten-title">
                {cfg.kostenTitle(cityName)}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {cfg.kostenIntro(cityName)}
              </p>
              <div className="space-y-3">
                {[
                  ["1–2 Zimmer / kleiner Keller", "ab ca. 150–350 €"],
                  ["3–4 Zimmer / mittlere Wohnung", "ab ca. 400–800 €"],
                  ["5+ Zimmer / Haus / großer Keller", "ab ca. 800–2.500 €"],
                  ["Wertanrechnung möglich", "bis zu –40 % Rabatt"],
                ].map(([label, value], i) => (
                  <div key={i} className="flex items-center justify-between gap-4 p-3 bg-background rounded-lg border border-border/50" data-testid={`kosten-row-${i}`}>
                    <span className="text-sm text-muted-foreground">{label}</span>
                    <span className="text-sm font-semibold text-primary">{value}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-4">* Preise sind Richtwerte. Kostenlose Besichtigung & verbindlicher Festpreis vor Auftragsbeginn.</p>
            </FadeIn>
            <FadeIn className="space-y-4" delayMs={100}>
              <h3 className="font-semibold text-foreground mb-2">Praxisbeispiel aus {cityName}</h3>
              <Card className="p-5" data-testid="card-beispiel">
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {[
                    ["Objekt", beispiel.objektTyp],
                    ["Fläche", beispiel.flaeche],
                    ["Dauer", beispiel.dauer],
                    ["Preis", beispiel.preis],
                  ].map(([k, v], i) => (
                    <div key={i} className="bg-card/80 rounded p-2.5" data-testid={`beispiel-${k}`}>
                      <p className="text-xs text-muted-foreground mb-0.5">{k}</p>
                      <p className="text-sm font-semibold text-foreground">{v}</p>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{beispiel.details}</p>
              </Card>
              <Card className="p-5">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-3.5 h-3.5 text-accent fill-current" />)}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed italic mb-3" data-testid="text-zitat">
                  "{beispiel.kundenzitat}"
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-xs font-semibold text-primary">{beispiel.kundenName.charAt(0)}</span>
                  </div>
                  <span className="text-xs font-medium text-foreground">{beispiel.kundenName}</span>
                </div>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 sm:py-18" data-testid="section-faq">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeIn className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3" data-testid="text-faq-title">
              {cfg.faqTitle(cityName)}
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

      {/* Reviews */}
      <section className="py-14 sm:py-18 bg-card/50" data-testid="section-reviews">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeIn className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3" data-testid="text-reviews-title">
              Kundenstimmen aus {cityName} & Umgebung
            </h2>
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-accent fill-current" />)}
            </div>
            <p className="text-sm text-muted-foreground">5,0 Sterne aus 84+ Google Bewertungen</p>
          </FadeIn>
          <div className="grid sm:grid-cols-3 gap-5">
            {reviews.map((review, i) => (
              <FadeIn key={review.name} delayMs={i * 80}>
                <Card className="p-5 h-full" data-testid={`card-review-${i}`}>
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, j) => <Star key={j} className="w-3.5 h-3.5 text-accent fill-current" />)}
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
          </div>
        </div>
      </section>

      {/* Weitere Leistungen */}
      <section className="py-14 sm:py-18" data-testid="section-cross">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeIn className="text-center mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
              Weitere Leistungen in {cityName}
            </h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Trash2, label: "Entrümpelung", href: `/entruempelung-${slug}`, desc: "Wohnungen, Häuser, Dachböden" },
              { icon: Home, label: "Haushaltsauflösung", href: `/haushaltsaufloesung-${slug}`, desc: "Komplett aus einer Hand" },
              { icon: Archive, label: "Wohnungsauflösung", href: `/wohnungsaufloesung-${slug}`, desc: "Inkl. besenreiner Übergabe" },
              { icon: Layers, label: "Kellerentrümpelung", href: `/kellerentruempelung-${slug}`, desc: "Keller schnell & gründlich leer" },
            ].filter(s => !s.href.includes(`/${cfg.urlPrefix}-`)).map((s, i) => {
              const Icon = s.icon;
              return (
                <FadeIn key={i} delayMs={i * 60}>
                  <Link href={s.href} style={{ textDecoration: "none" }} data-testid={`link-cross-${i}`}>
                    <Card className="p-4 hover-elevate cursor-pointer h-full">
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <h3 className="font-semibold text-sm text-foreground mb-1">{s.label} {cityName}</h3>
                      <p className="text-xs text-muted-foreground">{s.desc}</p>
                    </Card>
                  </Link>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Nachbarstädte */}
      {neighborCities.length > 0 && (
        <section className="py-12 bg-card/50" data-testid="section-neighbors">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <FadeIn className="text-center mb-8">
              <h2 className="text-xl font-bold text-foreground mb-2" data-testid="text-neighbors-title">
                {cfg.label} auch in der Nähe von {cityName}
              </h2>
              <p className="text-sm text-muted-foreground max-w-lg mx-auto">
                Wir sind im gesamten Rhein-Erft-Kreis für Sie im Einsatz.
              </p>
            </FadeIn>
            <div className="flex flex-wrap justify-center gap-3">
              {neighborCities.map((city, i) => (
                <FadeIn key={city.slug} delayMs={i * 40}>
                  <Link href={`/${cfg.urlPrefix}-${city.slug}`} style={{ textDecoration: "none" }} data-testid={`link-neighbor-${i}`}>
                    <Button variant="outline" size="sm" className="text-xs">
                      <MapPin className="w-3 h-3 mr-1.5" />
                      {cfg.label} {city.name}
                    </Button>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        title={`Jetzt ${cfg.label} in ${cityName} anfragen`}
        subtitle={`Kostenlose Besichtigung und verbindliches Festpreisangebot für Ihre ${cfg.label} in ${cityName}. Rufen Sie uns an oder schreiben Sie uns — wir antworten schnell.`}
      />
    </PageLayout>
  );
}
