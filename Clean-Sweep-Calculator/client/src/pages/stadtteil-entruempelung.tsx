import { useRoute, Link } from "wouter";
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PageLayout, PageHero, CTASection } from "@/components/layout";
import { motion } from "framer-motion";
import {
  Phone,
  Star,
  CheckCircle2,
  Trash2,
  Home,
  Truck,
  MapPin,
  ChevronDown,
  ChevronUp,
  Shield,
  Euro,
  Recycle,
  ArrowRight,
  Users,
} from "lucide-react";
import { stadtteile } from "@/data/stadtteile";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

function buildServices(parentSlug: string) {
  return [
    {
      icon: Trash2,
      title: "Entrümpelung",
      description: "Professionelle Entrümpelung von Wohnungen, Häusern, Kellern und Dachböden. Schnell, sauber und zu fairen Festpreisen.",
      href: `/entruempelung-${parentSlug}`,
    },
    {
      icon: Home,
      title: "Haushaltsauflösung",
      description: "Komplette Haushaltsauflösungen mit Wertanrechnung. Wir kümmern uns um alles — von der Räumung bis zur besenreinen Übergabe.",
      href: `/haushaltsaufloesung-${parentSlug}`,
    },
    {
      icon: Truck,
      title: "Kellerentrümpelung",
      description: "Keller, Garage und Dachboden professionell räumen lassen. Festpreis, besenrein, Wertanrechnung möglich.",
      href: `/kellerentruempelung-${parentSlug}`,
    },
    {
      icon: Recycle,
      title: "Schrottankauf",
      description: "Wir kaufen Ihren Schrott zu fairen Tagespreisen an. Altmetall, Kupfer, Messing und mehr — Abholung inklusive.",
      href: "/schrottankauf",
    },
  ];
}

const reviews = [
  { name: "M. Meinke", text: "Schnell einen Termin bekommen, pünktlich, freundlich und unkompliziert wurde meine Garage und mein Keller geräumt. Schränke wurden demontiert, besenrein hinterlassen." },
  { name: "Klarabella", text: "Ganz toller Service, Terminvergabe schnell und unkompliziert per WhatsApp, sehr sympathisches Team, haben alles mitgenommen und richtig gut gearbeitet." },
  { name: "Katy S.", text: "Super Entrümpelungsteam! Sie kamen pünktlich, waren höflich und haben die Arbeit effizient erledigt. Ich kann diesen Entrümpelungsservice nur weiterempfehlen." },
];

function FAQItem({ faq, index }: { faq: { question: string; answer: string }; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-lg overflow-hidden" data-testid={`faq-item-${index}`}>
      <button
        className="w-full flex items-center justify-between p-4 text-left hover:bg-muted/50 transition-colors"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        data-testid={`faq-toggle-${index}`}
      >
        <span className="font-semibold text-foreground pr-4">{faq.question}</span>
        {open ? <ChevronUp className="w-5 h-5 text-primary shrink-0" /> : <ChevronDown className="w-5 h-5 text-primary shrink-0" />}
      </button>
      {open && (
        <div className="p-4 pt-0 text-muted-foreground border-t border-border" data-testid={`faq-answer-${index}`}>
          <p className="leading-relaxed">{faq.answer}</p>
        </div>
      )}
    </div>
  );
}

export default function StadtteilEntruempelungPage() {
  const [, params] = useRoute("/entruempelung-:stadtteil");
  const slug = params?.stadtteil ?? "";
  const data = stadtteile[slug];

  useEffect(() => {
    if (!data) return;
    const canonicalUrl = `https://stressfreientruempelungen.de/entruempelung-${slug}`;
    const pageTitle = `Entrümpelung ${data.name} (${data.parentCity}) | Stressfrei Entrümpelungen & Umzüge`;

    document.title = pageTitle;

    const setMeta = (name: string, content: string, prop?: boolean) => {
      const sel = prop ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let el = document.querySelector(sel) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        prop ? el.setAttribute("property", name) : el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.content = content;
    };

    setMeta("description", data.metaDescription);
    setMeta("robots", "index, follow");
    setMeta("og:title", pageTitle, true);
    setMeta("og:description", data.metaDescription, true);
    setMeta("og:url", canonicalUrl, true);
    setMeta("og:type", "website", true);
    setMeta("og:image", "https://stressfreientruempelungen.de/images/og-image.jpg", true);
    setMeta("og:image:width", "1200", true);
    setMeta("og:image:height", "630", true);
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", pageTitle);
    setMeta("twitter:description", data.metaDescription);

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    const breadcrumb = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Startseite", item: "https://stressfreientruempelungen.de" },
        { "@type": "ListItem", position: 2, name: `Entrümpelung ${data.parentCity}`, item: `https://stressfreientruempelungen.de/entruempelung-${data.parentSlug}` },
        { "@type": "ListItem", position: 3, name: `Entrümpelung ${data.name}`, item: canonicalUrl },
      ],
    };

    const localBusiness = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: `Stressfrei Entrümpelungen & Umzüge – ${data.name}`,
      description: data.metaDescription,
      url: canonicalUrl,
      telephone: "+4922715880940",
      email: "info@stressfreientruempelungen.de",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Hauptstraße 26",
        addressLocality: "Bergheim",
        postalCode: "50126",
        addressCountry: "DE",
      },
      areaServed: [
        { "@type": "City", name: data.name },
        { "@type": "City", name: data.parentCity },
      ],
      openingHoursSpecification: [
        { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "07:00", closes: "20:00" },
        { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday"], opens: "08:00", closes: "16:00" },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: "84",
        bestRating: "5",
        worstRating: "1",
      },
      priceRange: "€€",
    };

    const faqSchema = data.faqs.length > 0 ? {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: data.faqs.map(f => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    } : null;

    const schemas = [breadcrumb, localBusiness, ...(faqSchema ? [faqSchema] : [])];
    schemas.forEach((schema, i) => {
      const id = `stadtteil-schema-${i}`;
      let el = document.getElementById(id) as HTMLScriptElement | null;
      if (!el) {
        el = document.createElement("script");
        el.type = "application/ld+json";
        el.id = id;
        document.head.appendChild(el);
      }
      el.textContent = JSON.stringify(schema);
    });

    return () => {
      schemas.forEach((_, i) => {
        document.getElementById(`stadtteil-schema-${i}`)?.remove();
      });
    };
  }, [data, slug]);

  if (!data) {
    return (
      <PageLayout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Seite nicht gefunden</h1>
          <p className="text-muted-foreground mb-6">Diese Stadtteil-Seite existiert noch nicht.</p>
          <Link href="/entruempelung">
            <Button>Zur Entrümpelung-Übersicht</Button>
          </Link>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <PageHero
        title={`Entrümpelung ${data.name}`}
        subtitle={`${data.parentCity} · Rhein-Erft-Kreis`}
        highlight={data.name}
      >
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 mt-6 justify-center items-center">
          <Button size="lg" asChild className="w-full sm:w-auto" data-testid="button-hero-angebot">
            <a href="tel:+4922715880940">
              <Phone className="w-4 h-4 mr-2" /> Jetzt anrufen
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild className="w-full sm:w-auto" data-testid="button-hero-whatsapp">
            <a href="https://wa.me/4915258177453" target="_blank" rel="noopener noreferrer">
              Kostenlos anfragen
            </a>
          </Button>
        </div>
      </PageHero>

      {/* Breadcrumb */}
      <nav aria-label="Brotkrumenpfad" className="bg-muted/30 border-b border-border">
        <div className="container mx-auto px-4 py-2">
          <ol className="flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
            <li><Link href="/" className="hover:text-primary transition-colors">Startseite</Link></li>
            <li>/</li>
            <li><Link href={`/entruempelung-${data.parentSlug}`} className="hover:text-primary transition-colors">Entrümpelung {data.parentCity}</Link></li>
            <li>/</li>
            <li className="text-foreground font-medium">Entrümpelung {data.name}</li>
          </ol>
        </div>
      </nav>

      {/* Intro Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <motion.div {...fadeIn}>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Ihr Entrümpelungsservice in {data.name}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">{data.intro}</p>
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.1 }}>
              <p className="text-muted-foreground leading-relaxed">{data.localInfo}</p>
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.15 }}>
              <p className="text-muted-foreground leading-relaxed">
                Als regionaler Dienstleister mit Sitz in{" "}
                <Link href="/entruempelung-bergheim" className="text-primary hover:underline font-medium">Bergheim</Link>{" "}
                sind wir in {data.name} und dem gesamten{" "}
                <Link href="/entruempelung-rhein-erft-kreis" className="text-primary hover:underline font-medium">Rhein-Erft-Kreis</Link>{" "}
                tätig. Ob{" "}
                <Link href="/entruempelung" className="text-primary hover:underline font-medium">Entrümpelung</Link>,{" "}
                <Link href="/haushaltsaufloesung" className="text-primary hover:underline font-medium">Haushaltsauflösung</Link> oder{" "}
                <Link href="/kellerentruempelung" className="text-primary hover:underline font-medium">Kellerentrümpelung</Link>{" "}
                — wir erledigen alles aus einer Hand zu fairen Festpreisen.
              </p>
            </motion.div>

            {/* Quick info badges */}
            <div className="flex flex-wrap gap-3">
              {data.plz && (
                <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary text-sm font-medium px-3 py-1.5 rounded-full">
                  <MapPin className="w-3.5 h-3.5" /> PLZ {data.plz}
                </span>
              )}
              {data.population && (
                <span className="inline-flex items-center gap-1.5 bg-muted text-muted-foreground text-sm px-3 py-1.5 rounded-full">
                  <Users className="w-3.5 h-3.5" /> {data.population} Einwohner
                </span>
              )}
              <span className="inline-flex items-center gap-1.5 bg-muted text-muted-foreground text-sm px-3 py-1.5 rounded-full">
                <MapPin className="w-3.5 h-3.5" /> Rhein-Erft-Kreis
              </span>
            </div>
          </div>

          {/* Sidebar CTA */}
          <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
            <Card className="p-6 bg-primary text-primary-foreground sticky top-24">
              <h3 className="font-bold text-xl mb-4">Kostenlos anfragen</h3>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Kostenlose Besichtigung</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Verbindlicher Festpreis</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Oft 24–48h Ausführung</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Besenreine Übergabe</span>
                </div>
              </div>
              <a href="tel:+4922715880940" className="block" data-testid="button-sidebar-anrufen">
                <Button variant="secondary" size="lg" className="w-full mb-3">
                  <Phone className="w-4 h-4 mr-2" /> 02271 / 5880940
                </Button>
              </a>
              <a href="https://wa.me/4915258177453" target="_blank" rel="noopener noreferrer" className="block" data-testid="link-sidebar-whatsapp">
                <Button variant="outline" size="lg" className="w-full border-primary-foreground/30 hover:bg-primary-foreground/10 text-primary-foreground">
                  WhatsApp anfragen
                </Button>
              </a>
              <p className="text-xs mt-4 text-primary-foreground/70 text-center">Mo–Fr 7–20 Uhr · Sa 8–16 Uhr</p>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-muted/30 border-y border-border py-12">
        <div className="container mx-auto px-4">
          <motion.h2 {...fadeIn} className="text-2xl font-bold text-center mb-8">
            Warum wir in {data.name}?
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.highlights.map((h, i) => (
              <motion.div
                key={i}
                {...fadeIn}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-3 bg-background rounded-lg p-4 border border-border"
                data-testid={`highlight-item-${i}`}
              >
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-foreground font-medium">{h}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="container mx-auto px-4 py-12">
        <motion.h2 {...fadeIn} className="text-2xl font-bold text-center mb-2">
          Unsere Leistungen in {data.name}
        </motion.h2>
        <motion.p {...fadeIn} className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
          Als Ihr lokaler Partner im {data.parentCity}er Raum bieten wir das komplette Spektrum rund um Entrümpelung, Haushaltsauflösung und Umzug.
        </motion.p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {buildServices(data.parentSlug).map((s, i) => (
            <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.07 }}>
              <Link href={s.href}>
                <Card className="p-5 h-full hover:border-primary hover:shadow-md transition-all cursor-pointer group" data-testid={`service-card-${i}`}>
                  <s.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
                  <div className="flex items-center gap-1 mt-3 text-primary text-sm font-medium">
                    Mehr erfahren <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Ablauf */}
      <section className="bg-muted/30 border-y border-border py-12">
        <div className="container mx-auto px-4">
          <motion.h2 {...fadeIn} className="text-2xl font-bold text-center mb-8">
            So läuft Ihre Entrümpelung in {data.name} ab
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { step: "1", icon: Phone, title: "Kontakt aufnehmen", text: "Rufen Sie uns an oder schreiben Sie per WhatsApp. Wir antworten schnell." },
              { step: "2", icon: Euro, title: "Festpreis erhalten", text: "Nach Fotos oder einer kurzen Besichtigung erhalten Sie ein verbindliches Angebot." },
              { step: "3", icon: Trash2, title: "Termin vereinbaren", text: "Wir einigen uns auf einen Termin — oft noch am gleichen oder nächsten Tag." },
              { step: "4", icon: Shield, title: "Besenrein übergeben", text: "Wir räumen alles aus und übergeben besenrein. Fertig!" },
            ].map((item, i) => (
              <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.1 }} className="text-center" data-testid={`step-${i + 1}`}>
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-3">
                  {item.step}
                </div>
                <item.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Preisbeispiele */}
      <section className="container mx-auto px-4 py-12">
        <motion.h2 {...fadeIn} className="text-2xl font-bold text-center mb-2">
          Was kostet eine Entrümpelung in {data.name}?
        </motion.h2>
        <motion.p {...fadeIn} className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
          Unsere Festpreise gelten auch in {data.name} — keine versteckten Kosten, kein Stundenrisiko.
        </motion.p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-6">
          {[
            { type: "Keller / Garage", from: "ab 150 €", detail: "ca. 10–30 m²" },
            { type: "2–3 Zimmer Wohnung", from: "ab 350 €", detail: "inkl. Abtransport" },
            { type: "Einfamilienhaus", from: "ab 800 €", detail: "komplett geräumt" },
            { type: "Dachboden", from: "ab 200 €", detail: "je nach Füllgrad" },
          ].map((item, i) => (
            <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.08 }}>
              <Card className="p-5 text-center border-2 hover:border-primary transition-colors" data-testid={`price-card-${i}`}>
                <p className="text-sm text-muted-foreground mb-1">{item.type}</p>
                <p className="text-2xl font-bold text-primary mb-1">{item.from}</p>
                <p className="text-xs text-muted-foreground">{item.detail}</p>
              </Card>
            </motion.div>
          ))}
        </div>
        <motion.div {...fadeIn} className="max-w-5xl mx-auto bg-muted/40 border border-border rounded-xl p-5">
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-muted-foreground justify-center">
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-primary" /> Kostenlose Besichtigung vor Ort</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-primary" /> Verbindlicher Festpreis — kein Stundenrisiko</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-primary" /> Wertanrechnung möglich</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-primary" /> Entsorgungskosten inklusive</span>
          </div>
          <p className="text-center mt-4 text-xs text-muted-foreground">
            Endgültige Preise nach kostenloser Besichtigung oder Fotobewertung. Gilt auch für {data.name} und Umgebung.{" "}
            <Link href="/entruempelung-rhein-erft-kreis-preise" className="text-primary hover:underline">Detaillierte Preisübersicht →</Link>
          </p>
        </motion.div>
      </section>

      {/* Reviews */}
      <section className="bg-muted/30 border-y border-border py-12">
        <div className="container mx-auto px-4">
        <motion.h2 {...fadeIn} className="text-2xl font-bold text-center mb-2">
          Das sagen unsere Kunden
        </motion.h2>
        <motion.div {...fadeIn} className="flex items-center justify-center gap-2 mb-8">
          <div className="flex">
            {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
          </div>
          <span className="font-bold text-foreground">5,0</span>
          <span className="text-muted-foreground">· 84 Bewertungen bei Google</span>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {reviews.map((r, i) => (
            <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.1 }}>
              <Card className="p-5" data-testid={`review-card-${i}`}>
                <div className="flex mb-3">
                  {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-sm text-muted-foreground italic mb-3">„{r.text}"</p>
                <p className="text-sm font-semibold text-foreground">{r.name}</p>
              </Card>
            </motion.div>
          ))}
        </div>
        </div>
      </section>

      {/* Nearby Areas */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <motion.h2 {...fadeIn} className="text-2xl font-bold text-center mb-2">
            Auch in der Nähe von {data.name}
          </motion.h2>
          <motion.p {...fadeIn} className="text-muted-foreground text-center mb-8">
            Wir sind in {data.name} und allen umliegenden Stadtteilen und Gemeinden aktiv.
          </motion.p>
          <div className="flex flex-wrap justify-center gap-3">
            {data.nearbyAreas.map((area, i) => (
              <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.05 }}>
                <Link href={`/entruempelung-${area.slug}`}>
                  <Button variant="outline" className="hover:border-primary hover:text-primary transition-colors" data-testid={`nearby-link-${i}`}>
                    <MapPin className="w-4 h-4 mr-1.5" /> Entrümpelung {area.name}
                  </Button>
                </Link>
              </motion.div>
            ))}
            <motion.div {...fadeIn} transition={{ delay: data.nearbyAreas.length * 0.05 }}>
              <Link href="/standorte">
                <Button variant="outline" className="hover:border-primary hover:text-primary transition-colors" data-testid="link-all-locations">
                  <MapPin className="w-4 h-4 mr-1.5" /> Alle Standorte
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted/30 border-y border-border py-12">
        <div className="container mx-auto px-4">
          <motion.h2 {...fadeIn} className="text-2xl font-bold text-center mb-2">
            Häufige Fragen zur Entrümpelung in {data.name}
          </motion.h2>
          <motion.p {...fadeIn} className="text-muted-foreground text-center mb-8">
            Antworten auf die wichtigsten Fragen zu unserem Service in {data.name} und Umgebung
          </motion.p>
          <div className="max-w-3xl mx-auto space-y-3">
            {data.faqs.map((faq, i) => (
              <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.07 }}>
                <FAQItem faq={faq} index={i} />
              </motion.div>
            ))}
            {[
              {
                question: `Wie schnell können Sie in ${data.name} eine Entrümpelung durchführen?`,
                answer: `In den meisten Fällen können wir die Entrümpelung in ${data.name} bereits innerhalb von 24 bis 48 Stunden nach Ihrer Anfrage durchführen. Bei dringenden Fällen — zum Beispiel nach einem Todesfall oder vor einem Wohnungsübergabetermin — versuchen wir, noch am gleichen Tag zu reagieren. Rufen Sie uns einfach an unter 02271 / 5880940.`,
              },
              {
                question: `Nehmen Sie in ${data.name} auch einzelne Möbelstücke oder kleine Mengen mit?`,
                answer: `Ja, wir kommen auch für kleinere Aufträge in ${data.name} — zum Beispiel einzelne Möbel, eine Couch, einen Kühlschrank oder ein paar Kartons Sperrmüll. Sprechen Sie uns einfach an und schildern Sie Ihren Bedarf. Wir finden immer eine faire Lösung.`,
              },
              {
                question: `Ist eine Wertanrechnung in ${data.name} möglich?`,
                answer: `Ja. Wenn bei der Entrümpelung in ${data.name} verwertbare Gegenstände vorhanden sind — etwa Antiquitäten, Elektrogeräte, Werkzeug, Möbel in gutem Zustand oder Metalle — rechnen wir deren Wert auf den Gesamtpreis an. Das kann Ihre Kosten spürbar reduzieren.`,
              },
            ].map((faq, i) => (
              <motion.div key={`generic-${i}`} {...fadeIn} transition={{ delay: (data.faqs.length + i) * 0.07 }}>
                <FAQItem faq={faq} index={data.faqs.length + i} />
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/faq" className="text-primary hover:underline font-medium">
              Alle häufigen Fragen ansehen →
            </Link>
          </div>
        </div>
      </section>

      {/* Parent city link */}
      <section className="container mx-auto px-4 pb-8">
        <motion.div {...fadeIn} className="bg-muted/30 border border-border rounded-xl p-6 text-center">
          <p className="text-muted-foreground mb-3">
            {data.name} gehört zur Stadt{" "}
            <Link href={`/entruempelung-${data.parentSlug}`} className="text-primary hover:underline font-semibold">
              {data.parentCity}
            </Link>{" "}
            im Rhein-Erft-Kreis. Alle Informationen zu unserem Service in {data.parentCity} finden Sie auf der Stadtseite.
          </p>
          <Link href={`/entruempelung-${data.parentSlug}`}>
            <Button variant="outline" data-testid="link-parent-city">
              <ArrowRight className="w-4 h-4 mr-2" /> Entrümpelung {data.parentCity} — Alle Infos
            </Button>
          </Link>
        </motion.div>
      </section>

      <CTASection />
    </PageLayout>
  );
}
