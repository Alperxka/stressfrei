import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { PageLayout, PageHero } from "@/components/layout";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  BookOpen,
  Banknote,
  Calculator,
  AlertTriangle,
  Search,
  Lightbulb,
  Trash2,
  ArrowRight,
  Warehouse,
  Gem,
  ClipboardList,
  Heart,
  Recycle,
  Truck,
  Home,
  Scale,
  Users,
  Euro,
  Key,
  Package,
  Leaf,
  Sparkles,
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const articles = [
  {
    icon: Euro,
    title: "Haushaltsauflösung Kosten 2026 — Was zahlen Sie wirklich?",
    description:
      "Aktuelle Preistabelle 2026 für Haushaltsauflösungen nach Wohnungsgröße. Mit Rechenbeispiel, Spartipps und Informationen zur Wertanrechnung — transparent und verständlich erklärt.",
    image: "/images/professionelle-entruempelung-service-rhein-erft-kreis.webp",
    href: "/haushaltsaufloesung-kosten-2026",
  },
  {
    icon: Banknote,
    title: "Kostenübernahme durch die Pflegekasse",
    description:
      "Erfahren Sie, wann und wie die Pflegekasse die Kosten für eine Entrümpelung oder Haushaltsauflösung übernehmen kann. Wir erklären die Voraussetzungen und den Antragsprozess.",
    image: "/images/pflegekasse-senioren-entruempelung-kostenuebernahme.webp",
    href: "/kostenuebernahme-durch-die-pflegekasse-bei-entruempelung-und-umzug-fuer-senioren",
  },
  {
    icon: Calculator,
    title: "Entrümpelung Rhein-Erft-Kreis Preise",
    description:
      "Ein detaillierter Überblick über die Kosten einer Entrümpelung im Rhein-Erft-Kreis. Erfahren Sie, welche Faktoren den Preis beeinflussen und wie Sie Kosten sparen können.",
    image: "/images/entruempelung-ratgeber-haus-raeumen.webp",
    href: "/entruempelung-rhein-erft-kreis-preise",
  },
  {
    icon: AlertTriangle,
    title: "Missverständnisse zum Thema Entrümpelung",
    description:
      "Wir räumen mit den häufigsten Mythen und Missverständnissen rund um das Thema Entrümpelung auf. Was stimmt wirklich und was ist nur ein Gerücht?",
    image: "/images/messie-wohnung-entruempelung-ratgeber.webp",
    href: "/missverstaendnisse-zum-thema-entruempelung",
  },
  {
    icon: Search,
    title: "Wie man eine professionelle Entrümpelungsfirma engagiert",
    description:
      "Worauf Sie bei der Auswahl einer Entrümpelungsfirma achten sollten. Tipps zur Erkennung seriöser Anbieter und Warnsignale bei unseriösen Unternehmen.",
    image: "/images/umzug-umzugskartons-stressfrei-rhein-erft-kreis.webp",
    href: "/wie-man-eine-professionelle-entruempelungsfirma-engagiert",
  },
  {
    icon: Lightbulb,
    title: "Effektive Entrümpelung: Tipps und Tricks",
    description:
      "Praktische Tipps für eine effektive Entrümpelung - ob Sie selbst entrümpeln oder einen Profi beauftragen möchten. So sparen Sie Zeit, Geld und Nerven.",
    image: "/images/entruempelung-ratgeber-haus-raeumen.webp",
    href: "/entruempelungstipps",
  },
  {
    icon: Trash2,
    title: "Was kostet Sperrmüll? Alle Kosten im Überblick",
    description:
      "Kommunale Abholung, Container oder private Entsorgung — was kostet Sperrmüll wirklich? Alle Preise, Spartipps und lokale Infos für den Rhein-Erft-Kreis.",
    image: "/images/sperrmuell-kosten-entsorgung-rhein-erft-kreis.webp",
    href: "/was-kostet-sperrmuell",
  },
  {
    icon: Warehouse,
    title: "Kellerentrümpelung — Ablauf, Kosten & Tipps",
    description:
      "Alles zur professionellen Kellerentrümpelung: Was kostet es, wie läuft es ab und wie können Sie durch Wertanrechnung sparen? Inkl. Preistabelle.",
    image: "/images/professionelle-entruempelung-service-rhein-erft-kreis.webp",
    href: "/kellerentruempelung",
  },
  {
    icon: Gem,
    title: "Wertanrechnung bei der Entrümpelung: So sparen Sie bis zu 40 %",
    description:
      "Was ist Wertanrechnung, welche Gegenstände sind wertvoll und wie funktioniert der Prozess? Alles mit Rechenbeispiel, Tipps und FAQ — für Entrümpelung und Haushaltsauflösung.",
    image: "/images/blog/wertanrechnung-entruempelung-wertvoll-gegenstaende.webp",
    href: "/wertanrechnung-bei-der-entruempelung",
  },
  {
    icon: ClipboardList,
    title: "Umzugscheckliste 2026: Schritt für Schritt zum stressfreien Umzug",
    description:
      "Die vollständige interaktive Umzugscheckliste mit über 40 Aufgaben — von 8 Wochen vorher bis nach dem Einzug. Abhaken, nichts vergessen, stressfrei umziehen.",
    image: "/images/umzugscheckliste-hero.webp",
    href: "/umzugscheckliste",
  },
  {
    icon: Heart,
    title: "Entrümpelung nach Todesfall: Leitfaden für Angehörige",
    description:
      "Was tun nach einem Todesfall? Wer ist für die Wohnung zuständig, wer zahlt, wie läuft eine Nachlassauflösung ab? Vollständiger Ratgeber mit Checkliste für Angehörige.",
    image: "/images/entruepelung-nach-todesfall-hero.webp",
    href: "/entruempelung-nach-todesfall",
  },
  {
    icon: Recycle,
    title: "Entsorgungsguide: Was darf in den Sperrmüll? Kosten & Tipps",
    description:
      "Sperrmüll, Elektroschrott, Sondermüll, Asbest — was darf wohin und was kostet die Entsorgung? Vollständiger Ratgeber mit Kostentabelle für den Rhein-Erft-Kreis.",
    image: "/images/entsorgungsguide-hero.webp",
    href: "/entsorgungsguide",
  },
  {
    icon: Truck,
    title: "Umzugshelfer oder Umzugsunternehmen? Kosten & Vergleich",
    description:
      "Freunde fragen oder Profis beauftragen? Wir zeigen ehrlich die Kosten, Versicherungsrisiken und den Unterschied — mit Vergleichstabelle und Entscheidungshilfe.",
    image: "/images/umzug-umzugskartons-stressfrei-rhein-erft-kreis.webp",
    href: "/umzugshelfer-tipps",
  },
  {
    icon: Home,
    title: "Haushaltsauflösung vorbereiten: Schritt für Schritt",
    description:
      "Was ist vor, während und nach der Haushaltsauflösung zu tun? Mit vollständiger Checkliste, Kostenübersicht und Tipps zur Pflegekassen-Kostenübernahme.",
    image: "/images/entruempelung-ratgeber-haus-raeumen.webp",
    href: "/haushaltsaufloesung-vorbereiten",
  },
  {
    icon: AlertTriangle,
    title: "Messie Entrümpelung NRW: Professionelle & diskrete Hilfe",
    description:
      "Wie läuft eine Messie-Räumung ab? Kosten, Ablauf, rechtliche Fragen und wann professionelle Hilfe unbedingt nötig ist — diskret und ohne Wertung.",
    image: "/images/messie-wohnung-entruempelung-ratgeber.webp",
    href: "/messie-entruempelung-nrw",
  },
  {
    icon: Trash2,
    title: "Sperrmüll Rhein-Erft-Kreis 2025: Anmelden, Kosten & Alternativen",
    description:
      "Sperrmüll beim AWB Rhein-Erft anmelden: Alle Infos zu Freimengen, Wartezeiten je Stadt und wann eine Entrümpelungsfirma die bessere Wahl ist.",
    image: "/images/professionelle-entruempelung-service-rhein-erft-kreis.webp",
    href: "/sperrmull-rhein-erft-kreis",
  },
  {
    icon: ClipboardList,
    title: "Haushaltsauflösung Checkliste 2025: Schritt für Schritt",
    description:
      "Interaktive Checkliste für die Haushaltsauflösung — von 6 Wochen vorher bis zur Wohnungsübergabe. Mit Steuertipps und Kostenübersicht.",
    image: "/images/entruempelung-ratgeber-haus-raeumen.webp",
    href: "/haushaltsaufloesung-checkliste",
  },
  {
    icon: Scale,
    title: "Wohnungsauflösung: Selbst machen oder Firma beauftragen?",
    description:
      "Ehrlicher Kosten- und Zeitvergleich: Wann lohnt sich Eigenregie, wann eine Firma? Mit Checkliste, Vor-/Nachteilen und konkreten Preisbeispielen.",
    image: "/images/wohnungsaufloesung-dienstleistung-nrw.webp",
    href: "/wohnungsaufloesung-selbst-oder-firma",
  },
  {
    icon: Heart,
    title: "Haushaltsauflösung bei Trennung & Scheidung NRW",
    description:
      "Schritt für Schritt durch eine schwierige Situation: Wer zahlt, wie wird aufgeteilt, was kostet die Auflösung — und wie hilft ein Profi im Rhein-Erft-Kreis?",
    image: "/images/haushaltsaufloesung-trennung-scheidung.png",
    href: "/haushaltsaufloesung-bei-trennung",
  },
  {
    icon: Truck,
    title: "Umzugskosten Rhein-Erft-Kreis 2025: Was kostet ein Umzug?",
    description:
      "Preistabelle, Kostenfaktoren und Spartipps für Ihren Umzug in Bergheim, Kerpen, Pulheim, Frechen, Hürth und dem gesamten Rhein-Erft-Kreis.",
    image: "/images/umzugskosten-rhein-erft-kreis.png",
    href: "/umzugskosten-rhein-erft-kreis",
  },
  {
    icon: Home,
    title: "Küche entrümpeln & entsorgen: Kosten, Ablauf & Tipps",
    description:
      "Was kostet es, eine Einbauküche zu entrümpeln? Was darf in den Sperrmüll, was nicht? Schritt-für-Schritt-Anleitung für NRW mit Preisübersicht.",
    image: "/images/kueche-entruempeln-entsorgen.jpg",
    href: "/kueche-entruempeln",
  },
  {
    icon: Key,
    title: "Wohnungsübergabe nach Haushaltsauflösung: Checkliste & Tipps",
    description:
      "Raum-für-Raum-Checkliste, häufige Fehler und Profi-Tipps für eine reibungslose, besenreine Übergabe an den Vermieter im Rhein-Erft-Kreis.",
    image: "/images/wohnungsuebergabe-haushaltsaufloesung.jpg",
    href: "/wohnungsuebergabe-nach-haushaltsaufloesung",
  },
  {
    icon: Users,
    title: "Senioren Umzug NRW: Altersgerechter Umzug mit Profis",
    description:
      "Einfühlsam und professionell: Ablauf, Kosten und Pflegekasse-Beratung für den Seniorenumzug ins betreute Wohnen oder Pflegeheim im Rhein-Erft-Kreis.",
    image: "/images/senioren-umzug-nrw.png",
    href: "/senioren-umzug-nrw",
  },
  {
    icon: Trash2,
    title: "Was gehört zum Sperrmüll? Komplette Liste NRW 2025",
    description:
      "Welche Möbel, Geräte und Gegenstände dürfen in den Sperrmüll — und was absolut nicht? Die vollständige Liste für NRW und den Rhein-Erft-Kreis inkl. Anmeldeinfos.",
    image: "/images/sperrmuell-liste-nrw.png",
    href: "/was-gehoert-zum-sperrmuell",
  },
  {
    icon: Package,
    title: "Wer kauft Sachen aus einer Haushaltsauflösung? 5 Wege",
    description:
      "Kleinanzeigen, Sozialkaufhaus, Antikmarkt, Schrotthändler oder Wertanrechnung — die 5 besten Wege, um Sachen aus einer Haushaltsauflösung zu verkaufen oder zu spenden.",
    image: "/images/sachen-haushaltsaufloesung-verkaufen.png",
    href: "/sachen-aus-haushaltsaufloesung-verkaufen",
  },
  {
    icon: Leaf,
    title: "Was kostet Grünschnitt entsorgen? Preise & Tipps NRW",
    description:
      "Wertstoffhof, Häckseldienst, Container oder Entsorgungsfirma — alle Wege zur Grünschnitt-Entsorgung im Rhein-Erft-Kreis im Vergleich mit konkreten Preisen.",
    image: "/images/gruenschnitt-entsorgen.png",
    href: "/gruenschnitt-entsorgen-kosten",
  },
  {
    icon: Sparkles,
    title: "Upcycling nach der Entrümpelung: Kreative Ideen 2025",
    description:
      "Aus Alt wird Neu: Die besten Upcycling-Ideen für Möbel, Kleidung, Haushaltsgegenstände und den Garten — nachhaltig, günstig und mit persönlichem Charakter.",
    image: "/images/upcycling-entruempelung.png",
    href: "/upcycling-nach-entruempelung",
  },
  {
    icon: Truck,
    title: "Umzugstransporter richtig beladen: Profi-Tipps & Checkliste",
    description:
      "Schritt für Schritt, die richtige Reihenfolge, Do & Don't und welche Transportergröße Sie brauchen — alles was Sie für einen sicheren und effizienten Umzug wissen müssen.",
    image: "/images/umzugstransporter-beladen.png",
    href: "/umzugstransporter-beladen",
  },
];

export default function RatgeberPage() {
  useEffect(() => {
    document.title = "Ratgeber & Tipps | Entrümpelung, Umzug & Kosten | Stressfrei";
    let _canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!_canonical) { _canonical = document.createElement("link"); _canonical.setAttribute("rel", "canonical"); document.head.appendChild(_canonical); }
    _canonical.setAttribute("href", "https://stressfreientruempelungen.de/ratgeber");
    const _setOgMeta = (prop: string, val: string) => { let m = document.querySelector(`meta[property="${prop}"]`) as HTMLMetaElement | null; if (!m) { m = document.createElement("meta"); m.setAttribute("property", prop); document.head.appendChild(m); } m.setAttribute("content", val); };
    _setOgMeta("og:url", "https://stressfreientruempelungen.de/ratgeber");
    _setOgMeta("og:image", "https://stressfreientruempelungen.de/images/professionelle-entruempelung-service-rhein-erft-kreis.webp");
    _setOgMeta("og:locale", "de_DE");
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Nützliche Ratgeber-Artikel rund um Entrümpelung, Haushaltsauflösung und Umzug. Tipps zu Kosten, Ablauf, Pflegekasse und mehr.");
    }
  }, []);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Ratgeber & Tipps zu Entrümpelung und Umzug",
        "description": "Nützliche Ratgeber-Artikel rund um Entrümpelung, Haushaltsauflösung und Umzug.",
        "url": "https://stressfreientruempelungen.de/ratgeber",
        "itemListElement": articles.map((a, i) => ({
          "@type": "ListItem",
          "position": i + 1,
          "name": a.title,
          "description": a.description,
          "url": `https://stressfreientruempelungen.de${a.href}`
        }))
      }) }} />
    <PageLayout>
      <PageHero
        title="Ratgeber & Tipps"
        subtitle="Nützliche Informationen und praktische Tipps rund um Entrümpelung, Haushaltsauflösung und Umzug."
        highlight="Blog & Ratgeber"
      />

      <section className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div className="text-center mb-14" {...fadeIn}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
              <BookOpen className="w-3 h-3" />
              Unsere Artikel
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3" data-testid="text-articles-title">
              Wissen & Ratgeber
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Informieren Sie sich über wichtige Themen rund um Entrümpelung und Haushaltsauflösung.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, i) => {
              const Icon = article.icon;
              return (
                <motion.div key={article.title} {...fadeIn} transition={{ duration: 0.5, delay: i * 0.1 }}>
                  <Link href={article.href} data-testid={`link-article-${i}`}>
                    <Card className="overflow-visible h-full cursor-pointer hover:shadow-lg transition-shadow group" data-testid={`card-article-${i}`}>
                      <div className="aspect-video w-full overflow-hidden rounded-t-md">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          data-testid={`img-article-${i}`}
                        />
                      </div>
                      <div className="p-5">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center">
                            <Icon className="w-4 h-4 text-primary" />
                          </div>
                          <span className="text-xs text-muted-foreground">Ratgeber</span>
                        </div>
                        <h3 className="font-semibold text-foreground mb-2 leading-snug group-hover:text-primary transition-colors" data-testid={`text-article-title-${i}`}>
                          {article.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                          {article.description}
                        </p>
                        <span className="inline-flex items-center gap-1 text-primary text-sm font-medium">
                          Weiterlesen <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </PageLayout>
    </>
  );
}
