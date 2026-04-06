import { useEffect } from "react";
import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { PageLayout, PageHero, CTASection, BlogArticleCTA } from "@/components/layout";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  CheckCircle2,
  HelpCircle,
  PhoneCall,
  Lightbulb,
  Heart,
  Recycle,
  Sparkles,
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const ideen = [
  {
    kategorie: "Möbel",
    icon: "🪑",
    items: [
      { titel: "Alte Kommode neu lackieren", beschreibung: "Grundieren, Schleifpapier, neue Farbe — fertig ist ein modernes Möbelstück im Vintage-Look." },
      { titel: "Palletten-Sofa", beschreibung: "Europaletten mit Schaumstoff und Stoff belegen — trendy und günstig für Terrasse oder Wohnzimmer." },
      { titel: "Leiter als Regal", beschreibung: "Eine alte Holzleiter hochkant stellen — perfektes Dekoregal für Bücher, Pflanzen und Deko." },
      { titel: "Koffertisch", beschreibung: "Alter Koffer auf Rollen montieren = einzigartiger Couchtisch mit Stauraum." },
    ],
  },
  {
    kategorie: "Kleidung & Textilien",
    icon: "👕",
    items: [
      { titel: "Jeans zu Shorts", beschreibung: "Alte Jeans abschneiden, fransieren und weiß waschen — klassischer Sommer-Look." },
      { titel: "Hemden zu Kissen", beschreibung: "Karierten Hemden auftrennen und als Kissenbezug nähen — gemütlich und individuell." },
      { titel: "Wollpullover zu Topflappen", beschreibung: "Eingelaufene Wollpulli zu Topflappen verarbeiten — praktisch und nachhaltig." },
    ],
  },
  {
    kategorie: "Haushaltsgegenstände",
    icon: "🏺",
    items: [
      { titel: "Konservengläser als Vasen", beschreibung: "Mit Schnur umwickeln, bemalen oder bekleben — wunderschöne Vintage-Vasen." },
      { titel: "Weinflaschen als Lampen", beschreibung: "Mit einem LED-Lichterketten-Set — einzigartiges Ambiente-Licht." },
      { titel: "Alte Bilderrahmen als Pinnwand", beschreibung: "Masking-Tape oder Maschendraht einspannen — perfekte DIY-Pinnwand." },
      { titel: "Holzkisten als Blumenkästen", beschreibung: "Weinkisten oder alte Obstkisten mit Folie auskleiden und bepflanzen." },
    ],
  },
  {
    kategorie: "Garten & Außenbereich",
    icon: "🌿",
    items: [
      { titel: "Badewanne als Hochbeet", beschreibung: "Alte Gusseisenbadewanne im Garten aufstellen — unschlagbares Hochbeet mit Nostalgie-Charme." },
      { titel: "Fahrrad als Pflanzenständer", beschreibung: "Altes Fahrrad im Garten, Körbe mit Blumen befüllt — romantisch und kreativ." },
      { titel: "Fensterrahmen als Spiegel", beschreibung: "Alten Holzrahmen mit Spiegel bekleben — wohnlicher Vintage-Spiegel für Flur oder Garten." },
    ],
  },
];

const vorteile = [
  "Spart Geld: Kein Neukauf nötig — aus Alt wird Neu.",
  "Nachhaltigkeit: Weniger Müll, weniger Produktion, weniger CO₂.",
  "Einzigartig: Kein Möbelhaus verkauft dasselbe Stück.",
  "Kreativ: Neue Hobbys entdecken — Freude am Selbermachen.",
  "Sentimental: Erinnerungsstücke bleiben erhalten und bekommen eine neue Funktion.",
  "Social Media: Upcycling-Projekte sind auf Instagram und Pinterest sehr beliebt.",
];

const faqs = [
  {
    frage: "Was ist der Unterschied zwischen Upcycling und Recycling?",
    antwort:
      "Recycling bedeutet, Materialien einzuschmelzen oder chemisch zu verarbeiten, um neues Rohmaterial zu gewinnen (z.B. Glasflaschen → neues Glas). Upcycling bedeutet, einen Gegenstand direkt kreativ weiterzuverwenden — ohne Zerstörung des Materials. Upcycling ist in der Regel energieeffizienter.",
  },
  {
    frage: "Welche Gegenstände aus einer Haushaltsauflösung eignen sich am besten für Upcycling?",
    antwort:
      "Besonders gut: Holzmöbel (robust und bearbeitbar), Glas und Keramik, alte Koffer und Truhen, Holzleitern, Weinkisten, Bilderrahmen, Stoffe und Textilien, Gartenmöbel und Metallgegenstände.",
  },
  {
    frage: "Kann ich Upcycling-Ideen auf Social Media finden?",
    antwort:
      "Ja — Pinterest und Instagram sind die besten Quellen. Suchen Sie nach #Upcycling, #DIY, #Möbelupcycling oder #Vintage. YouTube bietet dazu viele Schritt-für-Schritt-Anleitungen.",
  },
  {
    frage: "Lohnt sich Upcycling wirtschaftlich?",
    antwort:
      "Für viele Projekte ja — ein neuer Anstrich für eine Kommode kostet 15–30 €, ein Neukauf eines vergleichbaren Möbels 150–400 €. Upcycled Möbel werden auch gerne auf Märkten verkauft und erzielen oft gute Preise.",
  },
  {
    frage: "Was mache ich, wenn nicht alles sich zum Upcycling eignet?",
    antwort:
      "Nicht jeder Gegenstand lässt sich sinnvoll verwerten. Was wirklich nicht mehr zu gebrauchen ist, gehört zur fachgerechten Entsorgung. Wir helfen bei der Haushaltsauflösung dabei zu unterscheiden: Was hat Wert? Was kann gespendet werden? Was muss entsorgt werden?",
  },
];

export default function UpcyclingNachEntruempelungPage() {
  useEffect(() => {
    document.title = "Upcycling nach der Entrümpelung: Kreative Ideen für Möbel & Deko | Stressfrei";
    const desc = document.querySelector('meta[name="description"]');
    if (desc)
      desc.setAttribute(
        "content",
        "Upcycling nach der Entrümpelung: Kreative Ideen für Möbel, Kleidung, Haushaltsgegenstände und den Garten. Aus Alt wird Neu — nachhaltig und günstig."
      );
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://stressfreientruempelungen.de/upcycling-nach-entruempelung";
  }, []);

  return (
    <>
      <PageLayout>
        <PageHero
          badge="Ratgeber"
          title="Upcycling nach der Entrümpelung"
          subtitle="Kreative Ideen für Möbel, Kleidung, Haushalt & Garten — aus Alt wird Neu, nachhaltig und mit Persönlichkeit"
        />

        <section className="py-10 sm:py-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <Link href="/ratgeber">
              <span className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary cursor-pointer mb-8">
                <ArrowLeft className="w-4 h-4" /> Zurück zum Ratgeber
              </span>
            </Link>

            <motion.div {...fadeIn} className="rounded-2xl overflow-hidden mb-8 shadow-sm">
              <img
                src="/images/upcycling-entruempelung.png"
                alt="Upcycling nach Entrümpelung — kreative Möbel und Deko aus alten Gegenständen"
                className="w-full object-cover max-h-80"
                loading="lazy"
              />
            </motion.div>

            <motion.div {...fadeIn}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nach einer Entrümpelung bleibt oft mehr zurück als man denkt. Nicht alles was alt
                ist, verdient den Weg zur Entsorgung. Mit ein bisschen Kreativität werden aus alten
                Möbeln, Haushaltssachen und Klamotten einzigartige neue Lieblingsstücke. Hier sind
                die besten Upcycling-Ideen — einfach, günstig und nachhaltig.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-10 sm:py-14 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.h2 {...fadeIn} className="text-2xl font-bold text-foreground mb-2">
              Warum Upcycling nach der Entrümpelung?
            </motion.h2>
            <div className="grid sm:grid-cols-2 gap-3 mt-6">
              {vorteile.map((v, i) => (
                <motion.div key={i} {...fadeIn} className="flex items-start gap-3 p-4 bg-white border rounded-xl">
                  <Recycle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">{v}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {ideen.map((gruppe, gi) => (
          <section key={gi} className={`py-10 sm:py-14 ${gi % 2 === 0 ? "" : "bg-muted/30"}`}>
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
              <motion.h2 {...fadeIn} className="text-2xl font-bold text-foreground mb-6">
                {gruppe.icon} Upcycling-Ideen: {gruppe.kategorie}
              </motion.h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {gruppe.items.map((item, ii) => (
                  <motion.div key={ii} {...fadeIn}>
                    <Card className="p-5 h-full">
                      <div className="flex items-start gap-2 mb-2">
                        <Sparkles className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <h3 className="font-semibold text-foreground text-sm">{item.titel}</h3>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">{item.beschreibung}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        ))}

        <section className="py-10 sm:py-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.h2 {...fadeIn} className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-primary" /> Häufig gestellte Fragen
            </motion.h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <motion.div key={i} {...fadeIn}>
                  <Card className="p-5">
                    <h3 className="font-semibold text-foreground mb-2">{faq.frage}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{faq.antwort}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-10 sm:py-14 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.div {...fadeIn} className="flex items-center gap-3 p-5 bg-muted/40 rounded-xl border">
              <PhoneCall className="w-6 h-6 text-primary shrink-0" />
              <div>
                <p className="font-semibold text-foreground text-sm mb-0.5">Weiterlesen: Verwandte Ratgeber</p>
                <div className="flex flex-wrap gap-3 mt-2">
                  {[
                    { label: "Wer kauft Sachen aus Haushaltsauflösung?", href: "/sachen-aus-haushaltsaufloesung-verkaufen" },
                    { label: "Haushaltsauflösung vorbereiten", href: "/haushaltsaufloesung-vorbereiten" },
                    { label: "Wertanrechnung: So sparen Sie", href: "/wertanrechnung-bei-der-entruempelung" },
                    { label: "Entsorgungsguide NRW", href: "/entsorgungsguide" },
                  ].map((l) => (
                    <Link key={l.href} href={l.href} style={{ textDecoration: "none" }}>
                      <span className="text-sm text-primary hover:underline cursor-pointer">{l.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <BlogArticleCTA />
      <CTASection />
      </PageLayout>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Upcycling nach der Entrümpelung: Kreative Ideen für Möbel, Kleidung & Deko",
        description: "Upcycling nach der Entrümpelung: Kreative Ideen für Möbel, Kleidung, Haushalt und Garten. Aus Alt wird Neu — nachhaltig und günstig.",
        image: "https://stressfreientruempelungen.de/images/upcycling-entruempelung.png",
        author: { "@type": "Organization", name: "Stressfrei Entrümpelungen & Umzüge", url: "https://stressfreientruempelungen.de" },
        publisher: { "@type": "Organization", name: "Stressfrei Entrümpelungen & Umzüge", logo: { "@type": "ImageObject", url: "https://stressfreientruempelungen.de/favicon.webp" } },
        datePublished: "2026-03-25",
        dateModified: "2026-03-25",
        mainEntityOfPage: "https://stressfreientruempelungen.de/upcycling-nach-entruempelung",
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.frage, acceptedAnswer: { "@type": "Answer", text: faq.antwort } })),
      }) }} />
    </>
  );
}
