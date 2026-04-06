import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { PageLayout, PageHero, CTASection, BlogArticleCTA } from "@/components/layout";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowLeft,
  BadgeEuro,
  Home,
  CheckCircle2,
  Receipt,
  PiggyBank,
  Trash2,
  Recycle,
  Sofa,
  Cpu,
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const kostenTabelle = [
  { art: "1-Zimmer-Wohnung (ca. 30–40 m²)", preis: "ca. 600 € – 1.800 €", beschreibung: "Wenig Mobiliar, einfacher Zugang" },
  { art: "2–3-Zimmer-Wohnung (50–80 m²)", preis: "ca. 1.200 € – 3.500 €", beschreibung: "Typischer Umfang für eine Haushaltsauflösung" },
  { art: "Einfamilienhaus (100–150 m²)", preis: "ca. 2.500 € – 6.000 €", beschreibung: "Inkl. Keller, Dachboden und Garage" },
  { art: "Großes Haus mit viel Inhalt (150 m²+)", preis: "ca. 4.000 € – 10.000 €+", beschreibung: "Jahrzehntelanger Hausstand, Sonderentsorgung" },
  { art: "Nur Keller oder Dachboden", preis: "ca. 350 € – 1.200 €", beschreibung: "Isolierte Teilräumung" },
];

const beispielKalkulation = [
  { position: "Personal (3 Mitarbeiter, 7 Stunden)", beschreibung: "Komplette Räumung Wohnung + Keller", kosten: "840 €" },
  { position: "Container & Entsorgung", beschreibung: "Sperrmüll, Elektronik, Holz", kosten: "950 €" },
  { position: "Anfahrt & Kraftstoff", beschreibung: "Bergheim – Kerpen ca. 20 km", kosten: "55 €" },
  { position: "Wertanrechnung Möbel", beschreibung: "Sideboard + Esstisch verwertbar", kosten: "– 145 €" },
  { position: "Gesamtpreis (Festpreis)", beschreibung: "", kosten: "1.700 €" },
];

const faktoren = [
  { title: "Wohnungsgröße und Füllgrad", text: "Je mehr Quadratmeter und Gegenstände, desto höher der Aufwand. Ein fast leerer Raum kostet deutlich weniger als ein vollgestopfter." },
  { title: "Stockwerk und Zugänglichkeit", text: "Liegt die Wohnung im 4. OG ohne Aufzug oder ist der Hof sehr eng, steigt der Zeitaufwand spürbar — und damit der Preis." },
  { title: "Art des Hausrats und Entsorgungskosten", text: "Sperrmüll ist günstiger zu entsorgen als Elektronik oder Sonderabfall. Viele Elektrogeräte, Kühlschränke oder alte Farben erhöhen den Preis." },
  { title: "Wertanrechnung", text: "Wenn Möbel, Schmuck oder Haushaltsgeräte noch verwertbar sind, kaufen wir sie an — und ziehen den Betrag direkt vom Gesamtpreis ab." },
  { title: "Zusatzleistungen", text: "Besenreine Übergabe, Grundreinigung, Tapetenentfernung oder Renovierungsvorbereitung erhöhen den Gesamtpreis — aber Ihren Aufwand deutlich." },
  { title: "Region und Entsorgungsgebühren", text: "Im Rhein-Erft-Kreis sind die Entsorgungsgebühren stabil. Wir arbeiten mit lokalen Entsorgern und geben diese Preisvorteile weiter." },
];

const spartipps = [
  "Wertgegenstände vor der Räumung identifizieren lassen — reduziert den Preis durch Wertanrechnung",
  "Angebote vergleichen, aber auf Festpreisgarantie achten — Stundenlohn-Angebote werden meist teurer",
  "Klären Sie vorab, ob Wohnungsauflösung durch Pflegekasse oder Sozialamt bezuschusst werden kann",
  "Fotos vom Inhalt machen und per WhatsApp schicken — das spart eine teure Vor-Ort-Besichtigung",
  "Samstags-Termine anfragen — bei manchen Firmen günstiger als unter der Woche",
  "Keller und Dachboden separat beauftragen, wenn diese weniger voll sind — spart Pauschalaufschläge",
];

export default function HaushaltsaufloesungKosten2026Page() {
  useEffect(() => {
    document.title = "Haushaltsauflösung Kosten 2026 | Was zahlen Sie wirklich?";
    let _canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!_canonical) { _canonical = document.createElement("link"); _canonical.setAttribute("rel", "canonical"); document.head.appendChild(_canonical); }
    _canonical.setAttribute("href", "https://stressfreientruempelungen.de/haushaltsaufloesung-kosten-2026");
    const _setOgMeta = (prop: string, val: string) => { let m = document.querySelector(`meta[property="${prop}"]`) as HTMLMetaElement | null; if (!m) { m = document.createElement("meta"); m.setAttribute("property", prop); document.head.appendChild(m); } m.setAttribute("content", val); };
    _setOgMeta("og:url", "https://stressfreientruempelungen.de/haushaltsaufloesung-kosten-2026");
    _setOgMeta("og:image", "https://stressfreientruempelungen.de/images/professionelle-entruempelung-service-rhein-erft-kreis.webp");
    _setOgMeta("og:locale", "de_DE");
    _setOgMeta("og:type", "article");
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Haushaltsauflösung Kosten 2026: Aktuelle Preise, Einflussfaktoren und Spartipps. Was kostet eine Haushaltsauflösung im Rhein-Erft-Kreis wirklich?");
    }
    const schemaId = "schema-haushaltsaufloesung-kosten-2026";
    let el = document.getElementById(schemaId) as HTMLScriptElement | null;
    if (!el) { el = document.createElement("script"); el.type = "application/ld+json"; el.id = schemaId; document.head.appendChild(el); }
    el.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Haushaltsauflösung Kosten 2026 — Was zahlen Sie wirklich?",
      "description": "Aktuelle Preise und Kostenübersicht für Haushaltsauflösungen 2026 im Rhein-Erft-Kreis.",
      "url": "https://stressfreientruempelungen.de/haushaltsaufloesung-kosten-2026",
      "datePublished": "2026-01-15",
      "dateModified": "2026-03-27",
      "author": { "@type": "Organization", "name": "Stressfrei Entrümpelungen & Umzüge", "url": "https://stressfreientruempelungen.de" },
      "publisher": { "@type": "Organization", "name": "Stressfrei Entrümpelungen & Umzüge", "logo": { "@type": "ImageObject", "url": "https://stressfreientruempelungen.de/favicon.webp" } },
      "image": "https://stressfreientruempelungen.de/images/professionelle-entruempelung-service-rhein-erft-kreis.webp",
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://stressfreientruempelungen.de/haushaltsaufloesung-kosten-2026" },
      "mainEntity": {
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "Was kostet eine Haushaltsauflösung 2026?", "acceptedAnswer": { "@type": "Answer", "text": "Eine Haushaltsauflösung kostet 2026 je nach Wohnungsgröße zwischen 600 € und 6.000 €. Eine 2–3-Zimmer-Wohnung liegt typischerweise bei 1.200–3.500 €." } },
          { "@type": "Question", "name": "Was beeinflusst den Preis einer Haushaltsauflösung?", "acceptedAnswer": { "@type": "Answer", "text": "Wohnungsgröße, Füllgrad, Stockwerk, Art des Hausrats, Entsorgungskosten und Wertanrechnung sind die Hauptfaktoren." } },
        ]
      }
    });
    return () => { document.getElementById(schemaId)?.remove(); };
  }, []);

  return (
    <PageLayout>
      <PageHero
        title="Haushaltsauflösung Kosten 2026"
        subtitle="Was zahlen Sie wirklich? Aktuelle Preise, Kostenbeispiele und Spartipps aus dem Rhein-Erft-Kreis."
        highlight="Ratgeber"
      />

      <section className="pb-8 sm:pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeIn}>
            <div className="flex items-center gap-2 mb-6">
              <Link href="/ratgeber-und-tipps" className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors">
                <ArrowLeft className="w-4 h-4" />
                Zurück zum Ratgeber
              </Link>
            </div>
            <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed space-y-4">
              <p>
                Eine <strong className="text-foreground">Haushaltsauflösung</strong> ist eine der häufigsten Leistungen, die wir im Rhein-Erft-Kreis erbringen — ob nach einem Todesfall, bei einem Umzug ins Pflegeheim oder beim Verkauf eines Hauses. Die Frage, die uns Kunden 2026 am häufigsten stellen: <em>„Was kostet das?"</em>
              </p>
              <p>
                Die ehrliche Antwort: Es hängt von mehreren Faktoren ab. In diesem Ratgeber erklären wir transparent, was den Preis beeinflusst, was Sie 2026 realistisch erwarten können — und wie Sie Kosten sparen.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-8 sm:py-12 bg-card/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeIn} className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <BadgeEuro className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Kostenübersicht 2026</h2>
            </div>
            <p className="text-muted-foreground text-sm">Richtwerte für Haushaltsauflösungen im Rhein-Erft-Kreis. Preise inklusive Arbeitszeit, Transport und Entsorgung (ohne Wertanrechnung).</p>
          </motion.div>
          <motion.div {...fadeIn} className="overflow-x-auto rounded-xl border border-border/50">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary/5 border-b border-border/50">
                  <th className="text-left p-4 font-semibold text-foreground">Objekt / Größe</th>
                  <th className="text-left p-4 font-semibold text-foreground">Kosten 2026</th>
                  <th className="text-left p-4 font-semibold text-foreground hidden sm:table-cell">Hinweis</th>
                </tr>
              </thead>
              <tbody>
                {kostenTabelle.map((row, i) => (
                  <tr key={i} className={`border-b border-border/30 ${i % 2 === 0 ? "bg-background" : "bg-card/30"}`}>
                    <td className="p-4 font-medium text-foreground">{row.art}</td>
                    <td className="p-4 text-primary font-semibold">{row.preis}</td>
                    <td className="p-4 text-muted-foreground hidden sm:table-cell">{row.beschreibung}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
          <motion.p {...fadeIn} className="text-xs text-muted-foreground mt-3">
            * Alle Preise sind Richtwerte. Ein verbindliches Angebot erhalten Sie nach Fotos oder Besichtigung — kostenlos und unverbindlich.
          </motion.p>
        </div>
      </section>

      <section className="py-10 sm:py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeIn} className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Receipt className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Preisbeispiel: 3-Zimmer-Wohnung</h2>
            </div>
            <p className="text-muted-foreground text-sm">So setzt sich ein typischer Festpreis für eine Haushaltsauflösung zusammen — transparent und nachvollziehbar.</p>
          </motion.div>
          <motion.div {...fadeIn}>
            <Card className="overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-muted/40 border-b border-border/50">
                      <th className="text-left p-4 font-semibold text-foreground">Position</th>
                      <th className="text-left p-4 font-semibold text-foreground hidden sm:table-cell">Details</th>
                      <th className="text-right p-4 font-semibold text-foreground">Kosten</th>
                    </tr>
                  </thead>
                  <tbody>
                    {beispielKalkulation.map((row, i) => (
                      <tr key={i} className={`border-b border-border/30 ${i === beispielKalkulation.length - 1 ? "bg-primary/5 font-bold" : ""}`}>
                        <td className="p-4 text-foreground">{row.position}</td>
                        <td className="p-4 text-muted-foreground hidden sm:table-cell">{row.beschreibung}</td>
                        <td className={`p-4 text-right font-semibold ${row.kosten.startsWith("–") ? "text-green-600" : "text-foreground"}`}>{row.kosten}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="py-10 sm:py-14 bg-card/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeIn} className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Home className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Was beeinflusst den Preis?</h2>
            </div>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {faktoren.map((f, i) => (
              <motion.div key={i} {...fadeIn} transition={{ duration: 0.5, delay: i * 0.07 }}>
                <Card className="p-5 h-full">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 text-sm">{f.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{f.text}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeIn} className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <PiggyBank className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">6 Spartipps für 2026</h2>
            </div>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-4">
            {spartipps.map((tipp, i) => (
              <motion.div key={i} {...fadeIn} transition={{ duration: 0.5, delay: i * 0.06 }}>
                <div className="flex items-start gap-3 p-4 rounded-xl border border-border/40 bg-card/50">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">{i + 1}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{tipp}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-14 bg-card/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeIn} className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Recycle className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Wertanrechnung: So sparen Sie automatisch</h2>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-3xl">
              Viele Haushalte enthalten Gegenstände mit echtem Restwert — und viele Haushaltsaufteiler wissen das nicht. Gut erhaltene Möbel, Vintage-Stücke, funktionierende Haushaltsgeräte, Werkzeug oder Antiquitäten können direkt angerechnet werden. Was wir annehmen, verrechnen wir vom Gesamtpreis. Das kann mehrere hundert Euro ausmachen.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { icon: Sofa, title: "Möbel & Einrichtung", text: "Gut erhaltene Sofas, Schränke, Tische, Stühle und Regale finden einen neuen Besitzer — statt im Container zu landen." },
              { icon: Cpu, title: "Elektrogeräte", text: "Funktionierende Kühlschränke, Waschmaschinen, Fernseher und Kleingeräte werden angerechnet, wenn sie noch verwertbar sind." },
              { icon: Trash2, title: "Altmetall & Schrott", text: "Kupfer, Messing, Aluminium und Eisenschrott kaufen wir direkt an — das reduziert Ihren Preis spürbar." },
            ].map((item, i) => (
              <motion.div key={i} {...fadeIn} transition={{ duration: 0.5, delay: i * 0.08 }}>
                <Card className="p-5 h-full">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 text-sm">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.text}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeIn} className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <BadgeEuro className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Festpreis oder Stundenlohn — was ist besser?</h2>
            </div>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                Viele Anbieter rechnen nach Stundenlohn ab — das klingt zunächst fair, führt aber oft zu bösen Überraschungen: Je länger das Team arbeitet, desto teurer wird es für Sie. Wenn Schwierigkeiten auftauchen (volle Keller, schwere Möbel, kein Aufzug), explodiert der Preis.
              </p>
              <p>
                Wir arbeiten ausschließlich mit <strong className="text-foreground">verbindlichen Festpreisen</strong>. Sie wissen vor dem Auftrag genau, was Sie bezahlen — egal wie lang die Arbeit dauert. Das gibt Ihnen Planungssicherheit und schützt vor unerwarteten Mehrkosten.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mt-6">
                <Card className="p-4 border-destructive/30 bg-destructive/5">
                  <h4 className="font-semibold text-foreground mb-2 text-sm">Stundenlohn — Risiken</h4>
                  <ul className="space-y-1 text-xs text-muted-foreground">
                    <li>• Preis unklar vor Auftragsbeginn</li>
                    <li>• Jede Stunde mehr erhöht die Rechnung</li>
                    <li>• Motivation für schnelles Arbeiten fehlt</li>
                    <li>• Schwierigkeiten = höhere Kosten für Sie</li>
                  </ul>
                </Card>
                <Card className="p-4 border-primary/30 bg-primary/5">
                  <h4 className="font-semibold text-foreground mb-2 text-sm">Festpreis — Vorteile</h4>
                  <ul className="space-y-1 text-xs text-muted-foreground">
                    <li>• Klare Kalkulation vor Auftrag</li>
                    <li>• Kein Risiko für Sie bei Verzögerungen</li>
                    <li>• Wertanrechnung inklusive</li>
                    <li>• Vertrauen durch Transparenz</li>
                  </ul>
                </Card>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <BlogArticleCTA topic="Haushaltsauflösung" />
      <CTASection
        title="Kostenlose Preisschätzung für Ihre Haushaltsauflösung"
        subtitle="Schicken Sie uns einfach ein paar Fotos per WhatsApp oder rufen Sie uns an. Wir erstellen Ihnen innerhalb von 24 Stunden ein verbindliches Festpreisangebot — kostenlos und unverbindlich."
      />
    </PageLayout>
  );
}
