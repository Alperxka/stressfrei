import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PageLayout, PageHero, CTASection } from "@/components/layout";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { useEffect, useState } from "react";
import {
  Phone,
  Star,
  CheckCircle2,
  Truck,
  Package,
  Home,
  Building2,
  Users,
  MapPin,
  Clock,
  ChevronDown,
  ChevronUp,
  Shield,
  Euro,
  Zap,
  ArrowRight,
  Heart,
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const services = [
  {
    icon: Home,
    title: "Privatumzug",
    description:
      "Kompletter Umzugsservice für Ihren privaten Umzug. Einpacken, Transport, Auspacken — alles aus einer Hand.",
    href: "/privatumzug",
  },
  {
    icon: Heart,
    title: "Seniorenumzug",
    description:
      "Einfühlsamer Umzugsservice speziell für Senioren. Wir kümmern uns um alles — mit Geduld und Sorgfalt.",
    href: "/seniorenumzug",
  },
  {
    icon: Building2,
    title: "Büroumzug",
    description:
      "Professionelle Büro- und Firmenumzüge mit minimaler Ausfallzeit. Ihr Betrieb läuft schnell weiter.",
    href: "/bueroumzug",
  },
  {
    icon: Package,
    title: "Einlagerung",
    description:
      "Sichere Zwischenlagerung für Ihre Möbel und Kartons. Trockene, bewachte Lagerräume im Rhein-Erft-Kreis.",
    href: "/einlagerung-rhein-erft-kreis",
  },
];

const reviews = [
  {
    name: "Sandra K.",
    text: "Unser Umzug von Bergheim nach Köln lief reibungslos. Das Team war pünktlich, freundlich und hat alles sicher transportiert. Absolute Empfehlung!",
  },
  {
    name: "Thomas M.",
    text: "Super Umzugsservice! Die Jungs haben sogar die Küche ab- und wieder aufgebaut. Alles heile angekommen. Sehr faire Preise.",
  },
  {
    name: "Petra W.",
    text: "Seniorenumzug meiner Mutter war perfekt organisiert. Sehr einfühlsames Team, hat sich um alles gekümmert. Vielen Dank!",
  },
];

function IconWhatsapp({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function SidebarQuickForm({ cityName }: { cityName: string }) {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  if (sent) {
    return (
      <div className="text-center py-4 mt-3">
        <CheckCircle2 className="w-8 h-8 text-primary mx-auto mb-2" />
        <p className="text-sm font-medium text-foreground">Anfrage erhalten!</p>
        <p className="text-xs text-muted-foreground mt-1">Wir melden uns so schnell wie möglich.</p>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const fd = new FormData(e.currentTarget);
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formName: "sidebar_umzug_quick",
          name: fd.get("name"),
          phone: fd.get("phone"),
          message: `Schnellanfrage Umzug ${cityName}`,
        }),
      });
    } catch {}
    setSent(true);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-3 space-y-2">
      <input
        name="name"
        placeholder="Ihr Name"
        required
        className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
      />
      <input
        name="phone"
        type="tel"
        placeholder="Ihre Telefonnummer"
        required
        className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
      />
      <Button type="submit" className="w-full" size="sm" disabled={sending}>
        {sending ? "Wird gesendet…" : "Kostenloses Angebot →"}
      </Button>
    </form>
  );
}

interface MovingFAQ {
  question: string;
  answer: string;
}

interface Einzugsgebiet {
  name: string;
  slug: string;
  type: "entruempelung" | "umzug";
}

interface StadtteilDetail {
  name: string;
  text: string;
}

interface UmzugBeispiel {
  startOrt?: string;
  zielOrt?: string;
  objektTyp?: string;
  flaeche?: string;
  entfernung?: string;
  preis: string;
  leistungen: string[];
  kundenzitat?: string;
  kundenName?: string;
  stadtteil?: string;
  vonOrt?: string;
  nachOrt?: string;
  etage?: string;
  dauer?: string;
  team?: string;
  vonTyp?: string;
}

interface MovingTrustStats {
  umzuege: string;
  reaktionszeit: string;
  erfahrung: string;
  kundenzitat?: string;
  kundenName?: string;
}

interface MovingLocationPageProps {
  cityName: string;
  slug: string;
  description: string;
  metaDescription: string;
  introText: string;
  highlights: string[];
  faqs: MovingFAQ[];
  neighborCities?: { name: string; slug: string }[];
  einzugsgebiete: Einzugsgebiet[];
  localInfo?: string;
  plz?: string;
  einwohner?: string;
  kreis?: string;
  stadtteile?: string[];
  stadtteileDetail?: StadtteilDetail[];
  beispiel?: UmzugBeispiel;
  mapEmbed?: string;
  trustStats?: MovingTrustStats;
}

function FAQItem({ faq, index }: { faq: MovingFAQ; index: number }) {
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

export default function MovingLocationPage({
  cityName,
  slug,
  description,
  metaDescription,
  introText,
  highlights,
  faqs,
  neighborCities,
  einzugsgebiete,
  localInfo,
  plz,
  einwohner,
  kreis,
  stadtteile,
  stadtteileDetail,
  beispiel,
  mapEmbed,
  trustStats,
}: MovingLocationPageProps) {
  useEffect(() => {
    const canonicalUrl = `https://stressfreientruempelungen.de/umzugsunternehmen-${slug}`;
    const pageTitle = `Umzugsunternehmen ${cityName} | Stressfrei Entrümpelungen & Umzüge`;

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
      "@type": "MovingCompany",
      "@id": "https://stressfreientruempelungen.de/#organization",
      name: `Stressfrei Entrümpelungen & Umzüge – Umzugsunternehmen ${cityName}`,
      description: metaDescription,
      url: canonicalUrl,
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
        reviewCount: "80",
        bestRating: "5",
        worstRating: "1",
      },
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
        { "@type": "ListItem", position: 2, name: "Umzüge", item: "https://stressfreientruempelungen.de/umzug" },
        { "@type": "ListItem", position: 3, name: `Umzugsunternehmen ${cityName}`, item: `https://stressfreientruempelungen.de/umzugsunternehmen-${slug}` },
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
        title={`Umzugsunternehmen ${cityName}`}
        subtitle={description}
        highlight={cityName}
      />

      <section className="py-3 sm:py-4 bg-primary/5 border-b border-border/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs sm:text-sm">
            <div className="flex items-center gap-1.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-current" />
              ))}
              <span className="font-semibold text-foreground ml-0.5">5,0</span>
              <span className="text-muted-foreground">&nbsp;· 90+ Google Bewertungen</span>
            </div>
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
              <span>Kostenlose Besichtigung</span>
            </div>
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <Shield className="w-3.5 h-3.5 text-primary shrink-0" />
              <span>Vollversichert</span>
            </div>
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <Euro className="w-3.5 h-3.5 text-primary shrink-0" />
              <span>Festpreis-Garantie</span>
            </div>
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <Clock className="w-3.5 h-3.5 text-primary shrink-0" />
              <span>Mo–Sa 08–19 Uhr erreichbar</span>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-8 sm:pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeIn} className="lg:max-w-[50%] mx-auto">
            <img
              src="/images/umzug-umzugskartons-stressfrei-rhein-erft-kreis.webp"
              alt={`Umzugsunternehmen in ${cityName} – Stressfrei Entrümpelungen & Umzüge`}
              className="w-full rounded-2xl shadow-lg object-cover h-56 sm:h-72 lg:h-80 object-center"
              width={1200}
              height={320}
              loading="eager"
              fetchpriority="high"
              decoding="async"
              data-testid="img-service-hero"
            />
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            <motion.div className="lg:col-span-2" {...fadeIn}>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4" data-testid="text-intro-title">
                Ihr Umzugsunternehmen in {cityName} — zuverlässig & stressfrei
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
            </motion.div>

            <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.15 }}>
              <Card className="p-5 sm:p-6 sticky top-24" data-testid="card-contact-sidebar">
                <h3 className="font-semibold text-foreground mb-1">Umzug in {cityName} anfragen</h3>
                <p className="text-xs text-muted-foreground mb-4">Kostenlos & unverbindlich · Mo–Sa 08–19 Uhr</p>
                <div className="space-y-2 mb-4">
                  <a href="tel:+4922715880940" style={{ textDecoration: "none" }} className="block" data-testid="link-call-sidebar">
                    <Button className="w-full" size="sm">
                      <Phone className="w-4 h-4 mr-2" />
                      02271 / 5880940
                    </Button>
                  </a>
                  <a
                    href={`https://wa.me/4915258177453?text=Hallo%2C%20ich%20m%C3%B6chte%20ein%20Angebot%20f%C3%BCr%20einen%20Umzug%20in%20${encodeURIComponent(cityName)}%20anfragen.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                    data-testid="link-whatsapp-sidebar"
                  >
                    <Button variant="outline" className="w-full border-[#25D366] text-[#25D366] hover:bg-[#25D366]/10" size="sm">
                      <IconWhatsapp className="w-4 h-4 mr-2" />
                      WhatsApp schreiben
                    </Button>
                  </a>
                </div>
                <div className="relative mb-1">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-border/50" />
                  </div>
                  <div className="relative flex justify-center text-xs">
                    <span className="bg-card px-2 text-muted-foreground">oder Rückruf anfordern</span>
                  </div>
                </div>
                <SidebarQuickForm cityName={cityName} />
                {(plz || einwohner || kreis) && (
                  <div className="mt-4 pt-4 border-t border-border/50 space-y-1.5 text-xs text-muted-foreground">
                    {kreis && <div><span className="font-medium text-foreground">Kreis:</span> {kreis}</div>}
                    {plz && <div><span className="font-medium text-foreground">PLZ:</span> {plz}</div>}
                    {einwohner && <div><span className="font-medium text-foreground">Einwohner:</span> {einwohner}</div>}
                  </div>
                )}
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div className="text-center mb-12" {...fadeIn}>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3" data-testid="text-why-title">
              Warum mit Stressfrei umziehen in {cityName}?
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Über 90+ zufriedene Kunden vertrauen auf unseren Umzugsservice — auch in {cityName}.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Zap, title: "Schnell & termingerecht", desc: `Wir planen Ihren Umzug in ${cityName} effizient und halten jeden Termin zuverlässig ein.` },
              { icon: Euro, title: "Faire Festpreise", desc: "Transparente Umzugskosten ohne versteckte Gebühren. Kostenlose Besichtigung vorab." },
              { icon: Shield, title: "Versichert & sicher", desc: "Ihr Hab und Gut ist während des gesamten Umzugs vollständig versichert." },
              { icon: Users, title: "Erfahrenes Team", desc: "Geschulte Umzugshelfer mit jahrelanger Erfahrung. Sorgfältig und professionell." },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={i} {...fadeIn} transition={{ duration: 0.5, delay: i * 0.08 }}>
                  <Card className="p-5 h-full text-center" data-testid={`card-benefit-${i}`}>
                    <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground text-sm mb-1.5">{item.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-card/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div className="text-center mb-12" {...fadeIn}>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3" data-testid="text-services-title">
              Unsere Umzugsleistungen in {cityName}
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Vom Privatumzug über Seniorenumzug bis zum Büroumzug — wir bieten den passenden Service für Ihren Umzug in {cityName}.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div key={s.title} {...fadeIn} transition={{ duration: 0.5, delay: i * 0.08 }}>
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
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20" data-testid="section-ablauf">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div className="text-center mb-12" {...fadeIn}>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3" data-testid="text-ablauf-title">
              Ablauf eines Umzugs in {cityName}
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              In 5 einfachen Schritten zu Ihrem stressfreien Umzug — transparent, fair und professionell.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { step: "1", title: "Kostenlose Besichtigung", desc: `Wir besichtigen Ihren Haushalt in ${cityName} kostenlos und unverbindlich vor Ort.` },
              { step: "2", title: "Festpreis-Angebot", desc: "Sie erhalten ein verbindliches Festpreisangebot — ohne versteckte Kosten oder Nachzahlungen." },
              { step: "3", title: "Terminvereinbarung", desc: "Wir vereinbaren einen Wunschtermin, der in Ihren Zeitplan passt. Oft schon innerhalb weniger Tage." },
              { step: "4", title: "Professioneller Umzug", desc: "Unser erfahrenes Team verpackt, transportiert und liefert alles sicher an den neuen Standort." },
              { step: "5", title: "Besenreine Übergabe", desc: "Möbel werden aufgebaut, Kartons platziert und die alte Wohnung besenrein übergeben." },
            ].map((item, i) => (
              <motion.div key={i} {...fadeIn} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <div className="text-center" data-testid={`step-${i}`}>
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 text-sm">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-card/50" data-testid="section-kosten">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
            <motion.div {...fadeIn}>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4" data-testid="text-kosten-title">
                Was kostet ein Umzug in {cityName}?
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Die Umzugskosten in {cityName} hängen von mehreren Faktoren ab. Hier finden Sie eine Preisübersicht als Orientierung — Ihren genauen Festpreis erhalten Sie nach einer kostenlosen Besichtigung.
              </p>
              <div className="rounded-lg border border-border overflow-hidden mb-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-primary/5">
                      <th className="text-left font-semibold p-3 text-foreground">Wohnungsgröße</th>
                      <th className="text-left font-semibold p-3 text-foreground">Preis (lokal)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { size: "1-Zimmer-Wohnung", price: "ab 400 €" },
                      { size: "2-Zimmer-Wohnung", price: "ab 700 €" },
                      { size: "3-Zimmer-Wohnung", price: "ab 1.100 €" },
                      { size: "4-Zimmer-Wohnung", price: "ab 1.800 €" },
                      { size: "Einfamilienhaus", price: "ab 2.500 €" },
                      { size: "Büro / Gewerbe", price: "ab 1.500 €" },
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
                Alle Preise inkl. MwSt., Transport, Möbelmontage und Versicherung. Verbindlicher Festpreis nach Besichtigung.
              </p>
            </motion.div>

            <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.15 }}>
              <h3 className="font-bold text-foreground text-lg mb-4">Der Preis hängt ab von:</h3>
              <div className="space-y-4">
                {[
                  { icon: Package, title: "Menge & Umfang des Hausrats", desc: "Mehr Zimmer, mehr Möbel und mehr Kartons bedeuten mehr Arbeitszeit und Transportkapazität." },
                  { icon: ArrowRight, title: "Etage / Stockwerk", desc: "Ohne Aufzug steigt der Trageaufwand mit jedem Stockwerk — sowohl am Start- als auch am Zielort." },
                  { icon: Zap, title: "Aufzug vorhanden?", desc: "Ein Aufzug an Start und Ziel erleichtert den Transport erheblich und senkt die Kosten." },
                  { icon: MapPin, title: "Entfernung zwischen Start & Ziel", desc: "Jeder Kilometer kostet extra. Lokale Umzüge sind deutlich günstiger als Fernumzüge." },
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
                <Link href="/kosten-umzug" style={{ textDecoration: "none" }} data-testid="link-kostenrechner">
                  <Button variant="outline" size="sm" className="text-xs">
                    Kostenrechner nutzen
                    <ArrowRight className="w-3 h-3 ml-1.5" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {beispiel && (
        <section className="py-16 sm:py-20" data-testid="section-beispiel">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div className="text-center mb-10" {...fadeIn}>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3" data-testid="text-beispiel-title">
                Preisbeispiel: Umzug in {cityName}
              </h2>
              <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
                Ein konkretes Beispiel aus unserer täglichen Arbeit — damit Sie eine realistische Vorstellung der Kosten bekommen.
              </p>
            </motion.div>
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <motion.div {...fadeIn}>
                <Card className="p-6 border-primary/20" data-testid="card-beispiel">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0">
                      <Truck className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-foreground">Reales Umzugsbeispiel</h3>
                  </div>
                  <div className="space-y-3 text-sm mb-5">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium text-foreground">Von:</span>{" "}
                        <span className="text-muted-foreground">{beispiel.startOrt}</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium text-foreground">Nach:</span>{" "}
                        <span className="text-muted-foreground">{beispiel.zielOrt}</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-3 pt-2">
                      <div className="rounded-lg bg-muted/40 p-3 text-center">
                        <div className="text-xs text-muted-foreground mb-1">Objekt</div>
                        <div className="font-semibold text-foreground text-xs">{beispiel.objektTyp}</div>
                      </div>
                      <div className="rounded-lg bg-muted/40 p-3 text-center">
                        <div className="text-xs text-muted-foreground mb-1">Fläche</div>
                        <div className="font-semibold text-foreground text-xs">{beispiel.flaeche}</div>
                      </div>
                      <div className="rounded-lg bg-muted/40 p-3 text-center">
                        <div className="text-xs text-muted-foreground mb-1">Entfernung</div>
                        <div className="font-semibold text-foreground text-xs">{beispiel.entfernung}</div>
                      </div>
                    </div>
                    <div className="pt-2">
                      <div className="text-xs text-muted-foreground mb-2 font-medium">Inklusive Leistungen:</div>
                      <div className="flex flex-wrap gap-1.5">
                        {beispiel.leistungen.map((l, i) => (
                          <span key={i} className="text-xs bg-primary/10 text-primary rounded-full px-2.5 py-1 font-medium" data-testid={`tag-leistung-${i}`}>{l}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg bg-primary/5 border border-primary/20 p-4 flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">Festpreis gesamt:</span>
                    <span className="text-2xl font-bold text-primary" data-testid="text-beispiel-preis">{beispiel.preis}</span>
                  </div>
                </Card>
              </motion.div>
              <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.15 }}>
                {beispiel.kundenzitat && (
                  <Card className="p-5 mb-5 bg-card/60" data-testid="card-kundenzitat">
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="w-3.5 h-3.5 text-accent fill-current" />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed italic mb-3">
                      „{beispiel.kundenzitat}"
                    </p>
                    {beispiel.kundenName && (
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-xs font-semibold text-primary">{beispiel.kundenName.charAt(0)}</span>
                        </div>
                        <span className="text-xs font-medium text-foreground">{beispiel.kundenName}, {cityName}</span>
                      </div>
                    )}
                  </Card>
                )}
                <div className="rounded-xl border border-border/50 p-5 bg-card/40">
                  <h4 className="font-semibold text-foreground mb-3 text-sm">Ihr Umzugsangebot in 3 Schritten</h4>
                  <div className="space-y-3">
                    {[
                      { n: "1", t: "Kostenlose Besichtigung", d: `Wir kommen zu Ihnen nach ${cityName} — kostenlos und unverbindlich.` },
                      { n: "2", t: "Verbindliches Festpreisangebot", d: "Kein Stundenlohn, keine versteckten Kosten. Ein Preis, fertig." },
                      { n: "3", t: "Umzug durchführen lassen", d: "Unser Team kümmert sich um alles — Sie entspannen sich." },
                    ].map((s) => (
                      <div key={s.n} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">{s.n}</div>
                        <div>
                          <div className="text-sm font-medium text-foreground">{s.t}</div>
                          <div className="text-xs text-muted-foreground">{s.d}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <a href="tel:+4922715880940" className="mt-4 block" data-testid="link-beispiel-cta">
                    <Button className="w-full mt-1" size="sm">
                      <Phone className="w-3.5 h-3.5 mr-2" />
                      Jetzt Festpreis anfragen
                    </Button>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div className="text-center mb-12" {...fadeIn}>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3" data-testid="text-faq-title">
              Häufige Fragen zum Umzug in {cityName}
            </h2>
          </motion.div>
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <motion.div key={i} {...fadeIn} transition={{ duration: 0.5, delay: i * 0.05 }}>
                <FAQItem faq={faq} index={i} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {trustStats && (
        <section className="py-10 sm:py-12 bg-primary/5 border-y border-border/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div className="text-center mb-6" {...fadeIn}>
              <h2 className="text-lg sm:text-xl font-bold text-foreground">
                Stressfrei umziehen in {cityName} — das sagen unsere Zahlen
              </h2>
            </motion.div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
              {[
                { value: trustStats.umzuege, label: `Umzüge aus/nach ${cityName}` },
                { value: trustStats.reaktionszeit, label: "Reaktionszeit" },
                { value: "5,0 ★", label: "Google-Bewertung" },
                { value: trustStats.erfahrung, label: "Im Einsatz" },
              ].map((stat, i) => (
                <motion.div key={i} {...fadeIn} transition={{ duration: 0.4, delay: i * 0.08 }}>
                  <div className="text-center p-4 sm:p-5 rounded-xl bg-background border border-border/40 shadow-sm">
                    <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-xs text-muted-foreground leading-tight">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
            {trustStats.kundenzitat && (
              <motion.div className="mt-6 max-w-2xl mx-auto" {...fadeIn} transition={{ duration: 0.5, delay: 0.32 }}>
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
              </motion.div>
            )}
          </div>
        </section>
      )}

      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div className="text-center mb-12" {...fadeIn}>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3" data-testid="text-reviews-title">
              Kundenbewertungen aus {cityName} & Umgebung
            </h2>
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-accent fill-current" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">5.0 Sterne aus über 90+ Google Bewertungen</p>
          </motion.div>
          <div className="grid sm:grid-cols-3 gap-5">
            {reviews.map((review, i) => (
              <motion.div key={review.name} {...fadeIn} transition={{ duration: 0.5, delay: i * 0.08 }}>
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {stadtteile && stadtteile.length > 0 && (
        <section className="py-16 sm:py-20 bg-card/50" data-testid="section-stadtteile">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div className="text-center mb-10" {...fadeIn}>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3" data-testid="text-stadtteile-title">
                Umzugsunternehmen in allen Stadtteilen von {cityName}
              </h2>
              <p className="text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Wir sind Ihr Umzugsunternehmen für alle Stadtteile von {cityName}. Egal ob Privatumzug, Seniorenumzug oder Büroumzug — wir kommen direkt zu Ihnen. Kurze Anfahrtswege bedeuten günstige Preise für Sie.
              </p>
            </motion.div>
            <div className={`grid gap-3 sm:gap-4 ${stadtteileDetail && stadtteileDetail.length > 0 ? "sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"}`}>
              {stadtteile.map((stadtteil, i) => {
                const detail = stadtteileDetail?.find((d) => d.name === stadtteil);
                return (
                  <motion.div key={stadtteil} {...fadeIn} transition={{ duration: 0.4, delay: i * 0.04 }}>
                    <Card className={`hover:border-primary/30 transition-colors h-full ${detail ? "p-5" : "p-4 text-center"}`} data-testid={`card-stadtteil-${i}`}>
                      <div className={`w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center mb-2.5 ${detail ? "" : "mx-auto"}`}>
                        <MapPin className="w-4 h-4 text-primary" />
                      </div>
                      <h3 className={`font-semibold text-sm text-foreground mb-1 ${detail ? "" : ""}`}>
                        Umzug {stadtteil}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {detail ? detail.text : `Ihr Umzugsunternehmen für ${cityName}-${stadtteil}. Stressfrei & zum Festpreis.`}
                      </p>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
            <motion.div className="text-center mt-8" {...fadeIn}>
              <p className="text-sm text-muted-foreground mb-4">
                Sie wohnen in einem anderen Stadtteil von {cityName}? Kein Problem — wir sind überall in {cityName} für Sie da!
              </p>
              <a href="tel:+4922715880940" data-testid="link-stadtteile-phone">
                <Button size="sm" className="text-xs">
                  <Phone className="w-3 h-3 mr-1.5" />
                  Jetzt anrufen: 02271 / 5880940
                </Button>
              </a>
            </motion.div>
          </div>
        </section>
      )}

      {einzugsgebiete.length > 0 && (
        <section className="py-16 sm:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div className="text-center mb-12" {...fadeIn}>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3" data-testid="text-einzugsgebiete-title">
                Einzugsgebiete rund um {cityName}
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Neben {cityName} sind wir auch in den umliegenden Städten und Gemeinden für Umzüge und Entrümpelungen im Einsatz. Klicken Sie auf eine Stadt, um mehr zu erfahren.
              </p>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {einzugsgebiete.map((gebiet, i) => {
                const href = gebiet.type === "umzug"
                  ? `/umzugsunternehmen-${gebiet.slug}`
                  : `/entruempelung-${gebiet.slug}`;
                const label = gebiet.type === "umzug"
                  ? `Umzugsunternehmen ${gebiet.name}`
                  : `Entrümpelung ${gebiet.name}`;
                return (
                  <motion.div key={gebiet.slug + gebiet.type} {...fadeIn} transition={{ duration: 0.4, delay: i * 0.04 }}>
                    <Link href={href} style={{ textDecoration: "none" }} data-testid={`link-einzugsgebiet-${i}`}>
                      <Card className="p-4 hover-elevate cursor-pointer h-full">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                            {gebiet.type === "umzug" ? (
                              <Truck className="w-4 h-4 text-primary" />
                            ) : (
                              <MapPin className="w-4 h-4 text-primary" />
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-medium text-foreground truncate">{label}</div>
                            <div className="text-xs text-muted-foreground">{gebiet.type === "umzug" ? "Umzugsservice" : "Entrümpelungsservice"}</div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-muted-foreground shrink-0" />
                        </div>
                      </Card>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {mapEmbed && (
        <section className="py-16 sm:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div className="text-center mb-10" {...fadeIn}>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3" data-testid="text-map-title">
                Umzugsunternehmen {cityName} — Unser Standort
              </h2>
              <p className="text-sm text-muted-foreground max-w-lg mx-auto">
                Finden Sie uns ganz einfach — wir sind schnell bei Ihnen in {cityName} vor Ort.
              </p>
            </motion.div>
            <motion.div {...fadeIn} className="rounded-xl overflow-hidden border border-border/50 shadow-sm">
              <iframe
                src={mapEmbed}
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Google Maps — Umzugsunternehmen ${cityName}`}
                data-testid="map-embed"
              />
            </motion.div>
          </div>
        </section>
      )}

      {(neighborCities?.length ?? 0) > 0 && (
        <section className="py-16 sm:py-20 bg-card/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div className="text-center mb-10" {...fadeIn}>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3" data-testid="text-neighbors-title">
                Umzugsunternehmen auch in der Nähe von {cityName}
              </h2>
              <p className="text-sm text-muted-foreground max-w-lg mx-auto">
                Wir sind Ihr Umzugsunternehmen im gesamten Rhein-Erft-Kreis und darüber hinaus.
              </p>
            </motion.div>
            <div className="flex flex-wrap justify-center gap-3">
              {(neighborCities ?? []).map((city, i) => (
                <motion.div key={city.slug} {...fadeIn} transition={{ duration: 0.4, delay: i * 0.04 }}>
                  <Link href={`/umzugsunternehmen-${city.slug}`} style={{ textDecoration: "none" }} data-testid={`link-neighbor-${i}`}>
                    <Button variant="outline" size="sm" className="text-xs">
                      <Truck className="w-3 h-3 mr-1.5" />
                      Umzug {city.name}
                    </Button>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        title={`Jetzt kostenlosen Umzug in ${cityName} anfragen`}
        subtitle={`Kontaktieren Sie uns für ein kostenloses und unverbindliches Angebot für Ihren Umzug in ${cityName}. Wir beraten Sie gerne — schnell, fair und zuverlässig.`}
      />

    </PageLayout>
  );
}
