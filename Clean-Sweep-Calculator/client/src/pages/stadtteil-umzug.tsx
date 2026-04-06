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
  Truck,
  Home,
  MapPin,
  ChevronDown,
  ChevronUp,
  Shield,
  Euro,
  Package,
  ArrowRight,
  Users,
  Trash2,
  Clock,
} from "lucide-react";
import { stadtteile } from "@/data/stadtteile";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

function buildUmzugHighlights(character: string): string[] {
  const base = [
    "Kostenlose Besichtigung und verbindliches Festpreisangebot",
    "Möbeldemontage und -montage auf Wunsch inklusive",
    "Vollständig versicherter Transport",
    "Umzug am Wunschtermin — auch samstags",
    "Verpackungsmaterial auf Anfrage inklusive",
    "Kurze Anfahrtszeit aus Bergheim — schnelle Reaktion",
  ];
  if (character.toLowerCase().includes("einfamilien") || character.toLowerCase().includes("ländlich")) {
    base[1] = "Einfamilienhaus-Umzüge mit Keller, Garage und Garten";
  }
  if (character.toLowerCase().includes("mehrfamilien") || character.toLowerCase().includes("bergarbeiter")) {
    base[1] = "Erfahrung mit Mehrfamilienhäusern und engen Treppenhäusern";
  }
  if (character.toLowerCase().includes("senior") || character.toLowerCase().includes("alt")) {
    base[3] = "Seniorenumzüge mit besonderer Sorgfalt und Geduld";
  }
  return base;
}

function buildUmzugFaqs(name: string, parentCity: string, parentSlug: string) {
  return [
    {
      question: `Was kostet ein Umzug in ${name}?`,
      answer: `Die Kosten richten sich nach Wohnungsgröße, Stockwerk, Entfernung und Leistungsumfang. Ein Umzug aus einer 2-Zimmer-Wohnung in ${name} startet typischerweise ab ca. 500–900 €. Nach einer kostenlosen Besichtigung oder Bildbeschreibung erhalten Sie von uns einen verbindlichen Festpreis — ohne Überraschungen.`,
    },
    {
      question: `Wie lange im Voraus sollte ich den Umzug in ${name} planen?`,
      answer: `Idealerweise 2–4 Wochen im Voraus. Da wir in Bergheim ansässig sind und ${name} gut erreichbar ist, können wir bei freien Kapazitäten aber auch kurzfristig — manchmal innerhalb weniger Tage — einen Termin anbieten. Sprechen Sie uns einfach an.`,
    },
    {
      question: `Bieten Sie auch Möbeldemontage und -aufbau in ${name} an?`,
      answer: `Ja. Unsere Umzugshelfer demontieren Schränke, Betten, Küchen und andere Möbel am alten Standort und bauen sie nach dem Umzug am neuen Ort wieder auf. Dieser Service ist im Festpreis enthalten oder kann flexibel dazugebucht werden.`,
    },
    {
      question: `Sind meine Möbel während des Umzugs aus ${name} versichert?`,
      answer: `Ja, alle Umzüge sind über unsere Betriebshaftpflichtversicherung abgedeckt. Ihr Hab und Gut ist während des gesamten Transports geschützt. Bei wertvollen oder empfindlichen Gegenständen empfehlen wir eine zusätzliche Transportversicherung — sprechen Sie uns an.`,
    },
    {
      question: `Wie läuft ein Umzug mit Ihnen in ${name} ab?`,
      answer: `Nach Ihrer Anfrage besichtigen wir die Wohnung oder werten Fotos aus — Sie erhalten anschließend einen verbindlichen Festpreis. Am Umzugstag erscheint unser Team pünktlich, verpackt und sichert alle Gegenstände professionell und transportiert alles zuverlässig an den Zielort. Auf Wunsch bauen wir Möbel direkt auf.`,
    },
    {
      question: `Führen Sie auch Seniorenumzüge in ${name} durch?`,
      answer: `Ja, Seniorenumzüge sind eine unserer Spezialitäten. Wir arbeiten in eigenem Tempo, helfen beim Aussortieren und unterstützen bei der Organisation. Ob Umzug ins Seniorenheim, in eine kleinere Wohnung oder zum Kind — wir begleiten Sie persönlich und geduldig durch den gesamten Prozess.`,
    },
  ];
}

function buildUmzugServices(parentSlug: string) {
  return [
    {
      icon: Truck,
      title: "Privatumzug",
      description: "Komplette Privatumzüge aus Ein- und Mehrfamilienhäusern, Wohnungen und Reihenhäusern — sicher, pünktlich und zu fairen Festpreisen.",
      href: `/umzugsunternehmen-${parentSlug}`,
    },
    {
      icon: Home,
      title: "Seniorenumzug",
      description: "Einfühlsamer Umzugsservice für ältere Menschen — vom Beratungsgespräch bis zur Einrichtung am neuen Wohnort. Wir haben Zeit für Sie.",
      href: `/umzugsunternehmen-${parentSlug}`,
    },
    {
      icon: Package,
      title: "Büroumzug",
      description: "Professionelle Büro- und Betriebsumzüge mit minimierten Ausfallzeiten — auch am Wochenende und außerhalb der Geschäftszeiten.",
      href: `/umzugsunternehmen-${parentSlug}`,
    },
    {
      icon: Trash2,
      title: "Entrümpelung",
      description: "Kombinieren Sie Umzug und Entrümpelung zu einem Termin. Wir nehmen mit, was Sie brauchen, und entsorgen den Rest.",
      href: `/entruempelung-${parentSlug}`,
    },
  ];
}

const reviews = [
  { name: "Sandra K.", text: "Super Team! Pünktlich, schnell und sehr freundlich. Die Möbel wurden perfekt verpackt und nichts ist beim Transport zu Schaden gekommen. Klare Empfehlung!" },
  { name: "Thomas B.", text: "Sehr professioneller Umzug — alles lief nach Plan. Das Team hat sogar die Küche ab- und wieder aufgebaut. Festpreis wurde eingehalten." },
  { name: "Maria L.", text: "Meine Mutter wurde von Stressfrei bei ihrem Seniorenumzug begleitet. Das Team war unglaublich geduldig und fürsorglich. Herzlichen Dank!" },
];

function FAQItem({ faq, index }: { faq: { question: string; answer: string }; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-lg overflow-hidden">
      <button
        className="w-full flex items-center justify-between p-4 text-left hover:bg-muted/50 transition-colors"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-semibold text-foreground pr-4">{faq.question}</span>
        {open ? <ChevronUp className="w-5 h-5 text-primary shrink-0" /> : <ChevronDown className="w-5 h-5 text-primary shrink-0" />}
      </button>
      {open && (
        <div className="p-4 pt-0 text-muted-foreground border-t border-border">
          <p className="leading-relaxed">{faq.answer}</p>
        </div>
      )}
    </div>
  );
}

export default function StadtteilUmzugPage() {
  const [, params] = useRoute("/umzugsunternehmen-:stadtteil");
  const slug = params?.stadtteil ?? "";
  const data = stadtteile[slug];

  useEffect(() => {
    if (!data) return;
    const canonicalUrl = `https://stressfreientruempelungen.de/umzugsunternehmen-${slug}`;
    const pageTitle = `Umzugsunternehmen ${data.name} (${data.parentCity}) | Stressfrei Entrümpelungen & Umzüge`;
    const metaDesc = `Umzugsunternehmen ${data.name} ✓ ${data.parentCity} ✓ Privatumzug ✓ Seniorenumzug ✓ Festpreis ✓ Besenrein ✓ Schnell vor Ort ☎ 02271 / 5880940`;

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

    setMeta("description", metaDesc);
    setMeta("robots", "index, follow");
    setMeta("og:title", pageTitle, true);
    setMeta("og:description", metaDesc, true);
    setMeta("og:url", canonicalUrl, true);
    setMeta("og:type", "website", true);
    setMeta("og:image", "https://stressfreientruempelungen.de/images/og-image.jpg", true);
    setMeta("og:image:width", "1200", true);
    setMeta("og:image:height", "630", true);
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", pageTitle);
    setMeta("twitter:description", metaDesc);

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
        { "@type": "ListItem", position: 2, name: `Umzugsunternehmen ${data.parentCity}`, item: `https://stressfreientruempelungen.de/umzugsunternehmen-${data.parentSlug}` },
        { "@type": "ListItem", position: 3, name: `Umzugsunternehmen ${data.name}`, item: canonicalUrl },
      ],
    };

    const localBusiness = {
      "@context": "https://schema.org",
      "@type": "MovingCompany",
      name: `Stressfrei Entrümpelungen & Umzüge – ${data.name}`,
      description: metaDesc,
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

    const generatedFaqs = buildUmzugFaqs(data.name, data.parentCity, data.parentSlug);
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: generatedFaqs.map(f => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    };

    const schemas = [breadcrumb, localBusiness, faqSchema];
    schemas.forEach((schema, i) => {
      const id = `stadtteil-umzug-schema-${i}`;
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
        document.getElementById(`stadtteil-umzug-schema-${i}`)?.remove();
      });
    };
  }, [data, slug]);

  if (!data) {
    return (
      <PageLayout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Seite nicht gefunden</h1>
          <p className="text-muted-foreground mb-6">Diese Stadtteil-Umzugsseite existiert noch nicht.</p>
          <Link href="/umzugsunternehmen-bergheim">
            <Button>Zu den Umzugsleistungen</Button>
          </Link>
        </div>
      </PageLayout>
    );
  }

  const highlights = buildUmzugHighlights(data.character);
  const faqs = buildUmzugFaqs(data.name, data.parentCity, data.parentSlug);
  const services = buildUmzugServices(data.parentSlug);

  return (
    <PageLayout>
      <PageHero
        title={`Umzugsunternehmen ${data.name}`}
        subtitle={`${data.parentCity} · Rhein-Erft-Kreis`}
        highlight={data.name}
      >
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 mt-6 justify-center items-center">
          <Button size="lg" asChild className="w-full sm:w-auto">
            <a href="tel:+4922715880940">
              <Phone className="w-4 h-4 mr-2" /> Jetzt anrufen
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild className="w-full sm:w-auto">
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
            <li><Link href={`/umzugsunternehmen-${data.parentSlug}`} className="hover:text-primary transition-colors">Umzugsunternehmen {data.parentCity}</Link></li>
            <li>/</li>
            <li className="text-foreground font-medium">Umzugsunternehmen {data.name}</li>
          </ol>
        </div>
      </nav>

      {/* Intro Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <motion.div {...fadeIn}>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Ihr Umzugsunternehmen in {data.name}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {data.parentCity === "Bergheim"
                  ? `Als Umzugsunternehmen direkt aus Bergheim sind wir in ${data.name} besonders schnell vor Ort. ${data.intro.replace(/[Ee]ntrümpelung(en)?/g, "Umzug").replace(/[Hh]aushaltsauflösung(en)?/g, "Umzug").split(".")[0]}.`
                  : `Als Umzugsunternehmen mit Sitz in Bergheim sind wir für Umzüge in ${data.name} (${data.parentCity}) bestens aufgestellt. Dank unserer zentralen Lage im Rhein-Erft-Kreis erreichen wir Sie schnell und zuverlässig.`}
              </p>
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.1 }}>
              <p className="text-muted-foreground leading-relaxed">
                {data.localInfo} Ob kleiner Wohnungswechsel, großer Haushaltsumzug oder ein Seniorenumzug in eine betreute Einrichtung — wir planen Ihren Umzug von {data.name} individuell und transparent.
              </p>
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.15 }}>
              <p className="text-muted-foreground leading-relaxed">
                Als regionaler Dienstleister mit Sitz in{" "}
                <Link href="/umzugsunternehmen-bergheim" className="text-primary hover:underline font-medium">Bergheim</Link>{" "}
                sind wir in {data.name} und dem gesamten{" "}
                <Link href="/umzugsunternehmen-rhein-erft-kreis" className="text-primary hover:underline font-medium">Rhein-Erft-Kreis</Link>{" "}
                tätig. Ob{" "}
                <Link href="/umzugsunternehmen-bergheim" className="text-primary hover:underline font-medium">Privatumzug</Link>,{" "}
                <Link href="/umzugsunternehmen-bergheim" className="text-primary hover:underline font-medium">Seniorenumzug</Link> oder{" "}
                <Link href="/umzugsunternehmen-bergheim" className="text-primary hover:underline font-medium">Büroumzug</Link>{" "}
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
              <span className="inline-flex items-center gap-1.5 bg-muted text-muted-foreground text-sm px-3 py-1.5 rounded-full">
                <Clock className="w-3.5 h-3.5" /> Oft Termin in 24–48 h
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
                  <span>Möbeldemontage & -aufbau</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Vollständig versichert</span>
                </div>
              </div>
              <a href="tel:+4922715880940" className="block">
                <Button variant="secondary" size="lg" className="w-full mb-3">
                  <Phone className="w-4 h-4 mr-2" /> 02271 / 5880940
                </Button>
              </a>
              <a href="https://wa.me/4915258177453" target="_blank" rel="noopener noreferrer" className="block">
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
            Warum Stressfrei für Ihren Umzug in {data.name}?
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {highlights.map((h, i) => (
              <motion.div
                key={i}
                {...fadeIn}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-3 bg-background rounded-lg p-4 border border-border"
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
          Unsere Umzugsleistungen in {data.name}
        </motion.h2>
        <motion.p {...fadeIn} className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
          Als Ihr lokaler Umzugspartner im {data.parentCity}er Raum bieten wir das komplette Spektrum — vom Privatumzug bis zur Kombination mit Entrümpelung.
        </motion.p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.07 }}>
              <Link href={s.href}>
                <Card className="p-5 h-full hover:border-primary hover:shadow-md transition-all cursor-pointer group">
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
            So läuft Ihr Umzug in {data.name} ab
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { step: "1", icon: Phone, title: "Anfrage stellen", text: `Rufen Sie uns an oder schreiben Sie per WhatsApp. Wir beraten Sie kostenlos zu Ihrem Umzug in ${data.name}.` },
              { step: "2", icon: Euro, title: "Festpreis erhalten", text: "Nach Besichtigung oder Fotos erhalten Sie ein verbindliches Festpreisangebot — transparent, ohne versteckte Kosten." },
              { step: "3", icon: Package, title: "Packen & Vorbereiten", text: "Auf Wunsch packt unser Team Ihre Sachen sicher ein. Wir stellen Kartons und Verpackungsmaterial bereit." },
              { step: "4", icon: Shield, title: "Sicher ankommen", text: "Wir transportieren Ihre Möbel und bauen sie am neuen Ort auf. Vollständig versichert — Sie müssen sich um nichts kümmern." },
            ].map((item, i) => (
              <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.1 }} className="text-center">
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
          Was kostet ein Umzug in {data.name}?
        </motion.h2>
        <motion.p {...fadeIn} className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
          Unsere Festpreise gelten auch in {data.name} — kein Stundenrisiko, keine Überraschungen.
        </motion.p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-6">
          {[
            { type: "1-Zimmer-Wohnung", from: "ab 400 €", detail: "bis 40 m² · lokal" },
            { type: "2-3 Zimmer Wohnung", from: "ab 700 €", detail: "inkl. Möbelmontage" },
            { type: "Einfamilienhaus", from: "ab 1.200 €", detail: "komplett inkl. Keller" },
            { type: "Seniorenumzug", from: "ab 500 €", detail: "mit besonderer Betreuung" },
          ].map((item, i) => (
            <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.08 }}>
              <Card className="p-5 text-center border-2 hover:border-primary transition-colors">
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
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-primary" /> Vollständig versichert</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-primary" /> Möbeldemontage & -aufbau inklusive</span>
          </div>
          <p className="text-center mt-4 text-xs text-muted-foreground">
            Endgültige Preise nach kostenloser Besichtigung oder Fotobewertung. Gilt auch für {data.name} und Umgebung.
          </p>
        </motion.div>
      </section>

      {/* Beispiel-Umzug */}
      <section className="bg-muted/30 border-y border-border py-12">
        <div className="container mx-auto px-4">
          <motion.h2 {...fadeIn} className="text-2xl font-bold text-center mb-8">
            Praxisbeispiel: Umzug aus {data.name}
          </motion.h2>
          <div className="max-w-3xl mx-auto">
            <Card className="p-6 border-2 border-primary/20">
              <div className="grid sm:grid-cols-2 gap-4 mb-5">
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span><strong>Von:</strong> {data.name}, {data.parentCity}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span><strong>Nach:</strong> Köln / Umgebung</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Home className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span><strong>Objekt:</strong> 3-Zimmer-Wohnung, ca. 75 m²</span>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>Möbeldemontage & -aufbau</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>Einpackservice mit Kartons</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>Vollständig versicherter Transport</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 bg-primary/10 rounded-lg mb-5">
                <span className="font-semibold text-foreground">Gesamtpreis (Festpreis):</span>
                <span className="text-2xl font-bold text-primary">ab 1.100 €</span>
              </div>
              <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground text-sm">
                „Alles lief reibungslos — das Team war pünktlich, hat alle Möbel sorgfältig eingepackt und am neuen Ort perfekt aufgebaut. Sehr empfehlenswert!"
                <footer className="mt-2 not-italic font-semibold text-foreground text-xs">— Zufriedener Kunde aus {data.name}</footer>
              </blockquote>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="container mx-auto px-4 py-12">
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
              <Card className="p-5">
                <div className="flex mb-3">
                  {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-sm text-muted-foreground italic mb-3">„{r.text}"</p>
                <p className="text-sm font-semibold text-foreground">{r.name}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Nearby Areas */}
      <section className="bg-muted/30 border-y border-border py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.h2 {...fadeIn} className="text-2xl font-bold text-center mb-2">
              Auch in der Nähe von {data.name}
            </motion.h2>
            <motion.p {...fadeIn} className="text-muted-foreground text-center mb-8">
              Wir führen Umzüge in {data.name} und allen umliegenden Stadtteilen und Gemeinden durch.
            </motion.p>
            <div className="flex flex-wrap justify-center gap-3">
              {data.nearbyAreas.map((area, i) => (
                <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.05 }}>
                  <Link href={`/umzugsunternehmen-${area.slug}`}>
                    <Button variant="outline" className="hover:border-primary hover:text-primary transition-colors">
                      <Truck className="w-4 h-4 mr-1.5" /> Umzug {area.name}
                    </Button>
                  </Link>
                </motion.div>
              ))}
              <motion.div {...fadeIn} transition={{ delay: data.nearbyAreas.length * 0.05 }}>
                <Link href={`/entruempelung-${slug}`}>
                  <Button variant="outline" className="hover:border-primary hover:text-primary transition-colors">
                    <Trash2 className="w-4 h-4 mr-1.5" /> Entrümpelung {data.name}
                  </Button>
                </Link>
              </motion.div>
              <motion.div {...fadeIn} transition={{ delay: (data.nearbyAreas.length + 1) * 0.05 }}>
                <Link href="/standorte">
                  <Button variant="outline" className="hover:border-primary hover:text-primary transition-colors">
                    <MapPin className="w-4 h-4 mr-1.5" /> Alle Standorte
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <motion.h2 {...fadeIn} className="text-2xl font-bold text-center mb-2">
            Häufige Fragen zum Umzug in {data.name}
          </motion.h2>
          <motion.p {...fadeIn} className="text-muted-foreground text-center mb-8">
            Antworten auf die wichtigsten Fragen zu unserem Umzugsservice in {data.name} und Umgebung
          </motion.p>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.07 }}>
                <FAQItem faq={faq} index={i} />
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

      <CTASection
        title={`Umzug in ${data.name} — jetzt anfragen`}
        subtitle={`Wir sind Ihr zuverlässiges Umzugsunternehmen in ${data.name} und dem gesamten Rhein-Erft-Kreis. Kostenlose Besichtigung, verbindlicher Festpreis, termingerechte Ausführung.`}
      />
    </PageLayout>
  );
}
