import { useEffect } from "react";
import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { PageLayout, PageHero, CTASection, BlogArticleCTA } from "@/components/layout";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, XCircle, AlertTriangle, Users, Truck, Shield, Euro, Clock, HelpCircle } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const vergleich = [
  {
    kriterium: "Kosten (2-Zimmer-Wohnung, lokal)",
    helfer: "200–400 €",
    unternehmen: "500–900 €",
    hinweis: "Helfer günstiger, aber ohne Equipment",
  },
  {
    kriterium: "Versicherungsschutz",
    helfer: "Privathaftpflicht (oft unzureichend)",
    unternehmen: "Betriebshaftpflicht inklusive",
    hinweis: "Unternehmen klar im Vorteil",
  },
  {
    kriterium: "Möbelmontage/-demontage",
    helfer: "Nur wenn Helfer es können",
    unternehmen: "Inklusive oder buchbar",
    hinweis: "Unternehmen bietet Garantie",
  },
  {
    kriterium: "LKW und Ausrüstung",
    helfer: "Mietwagen nötig (extra Kosten)",
    unternehmen: "Eigene Fahrzeuge und Ausrüstung",
    hinweis: "Unternehmen hat Profi-Equipment",
  },
  {
    kriterium: "Zuverlässigkeit",
    helfer: "Absagen möglich (privat)",
    unternehmen: "Vertragliche Bindung",
    hinweis: "Unternehmen verbindlicher",
  },
  {
    kriterium: "Zeitaufwand für Koordination",
    helfer: "Hoch (mehrere Personen koordinieren)",
    unternehmen: "Gering (ein Ansprechpartner)",
    hinweis: "Unternehmen einfacher",
  },
  {
    kriterium: "Verpackungsmaterial",
    helfer: "Selbst beschaffen",
    unternehmen: "Auf Wunsch inklusive",
    hinweis: "Unternehmen bietet Komplettservice",
  },
  {
    kriterium: "Flexibilität bei kurzfristigen Änderungen",
    helfer: "Oft schwierig",
    unternehmen: "Koordination über Ansprechpartner",
    hinweis: "Je nach Unternehmen variabel",
  },
];

const wannHelfer = [
  "Kleiner Umzug (1–2 Zimmer) mit wenig schweren Möbeln",
  "Umzug innerhalb desselben Hauses oder kurze Distanz",
  "Verfügbares Netzwerk aus zuverlässigen Freunden/Bekannten",
  "Mietwagen ist vorhanden oder günstig mietbar",
  "Kein hochwertiges Inventar, das besondere Sorgfalt erfordert",
  "Niedriges Budget und viel Eigenleistung möglich",
];

const wannUnternehmen = [
  "Größerer Haushalt (3+ Zimmer) oder viele schwere Möbel",
  "Weiter Umzug (mehrere Stunden Fahrt oder Fernumzug)",
  "Wertvolle Gegenstände wie Klavier, Kunstwerke oder Antiquitäten",
  "Seniorenumzug mit besonderem Einfühlungsvermögen",
  "Zeitkritischer Umzug ohne Ausfallrisiko",
  "Büro- oder Firmenumzug mit Gewerbeausstattung",
  "Möbelmontage/-demontage erforderlich (Küche, Schränke)",
  "Halteverbotszonen oder schwieriger Zugang (Altbau, Treppe, kein Aufzug)",
];

const faqs = [
  {
    frage: "Brauche ich für Umzugshelfer einen Vertrag?",
    antwort: "Für private Freunde und Bekannte gibt es keinen formellen Vertrag. Bei gewerblichen Helfervermittlungsplattformen (z.B. Movinga oder lokale Plattformen) gibt es meist AGBs. Wichtig: Klären Sie vorab, ob Versicherungsschutz besteht — der private Helfer ist über seine Privathaftpflicht nur begrenzt abgesichert.",
  },
  {
    frage: "Was kostet eine Haftpflichtversicherung beim Umzug?",
    antwort: "Professionelle Umzugsunternehmen haben eine Betriebshaftpflichtversicherung, die bei Schäden greift — ohne Aufpreis für Sie. Bei Umzugshelfern greift die private Haftpflicht des Helfers, die aber oft Helfertätigkeiten bei bezahlten Jobs ausschließt. Im Schadensfall kann das zu Problemen führen.",
  },
  {
    frage: "Kann ich Umzugshelfer steuerlich absetzen?",
    antwort: "Ja, Umzugskosten können unter bestimmten Voraussetzungen steuerlich abgesetzt werden — sowohl für Umzugsunternehmen als auch für Helfer (als haushaltsnahe Dienstleistung). Wichtig: Nur offiziell abgerechnete Leistungen mit Rechnung sind absetzbar. Barzahlungen ohne Quittung sind nicht anrechenbar.",
  },
  {
    frage: "Wie viele Umzugshelfer brauche ich für eine 3-Zimmer-Wohnung?",
    antwort: "Für eine 3-Zimmer-Wohnung (ca. 70–90 m²) brauchen Sie in der Regel 3–4 Helfer plus 1 Fahrer für den LKW. Ein professionelles Umzugsunternehmen schickt typischerweise 2–3 Mitarbeiter, die durch ihre Erfahrung und Ausrüstung effizienter als eine größere Gruppe von Laien arbeiten.",
  },
  {
    frage: "Was ist, wenn ein Umzugshelfer etwas beschädigt?",
    antwort: "Bei privaten Freunden: Die Privathaftpflicht greift theoretisch, aber viele Policen schließen 'gefälligkeitsbedingte Tätigkeiten' aus. Beim Umzugsunternehmen: Die Betriebshaftpflicht greift direkt, das Unternehmen ist zur Schadensregulierung verpflichtet. Das ist einer der größten Vorteile eines professionellen Services.",
  },
];

export default function UmzugshelferTippsPage() {
  useEffect(() => {
    document.title = "Umzugshelfer oder Umzugsunternehmen? Kosten & Vergleich | Stressfrei";

    const setMeta = (attr: string, val: string, content: string) => {
      let m = document.querySelector(`meta[${attr}="${val}"]`) as HTMLMetaElement | null;
      if (!m) { m = document.createElement("meta"); m.setAttribute(attr, val); document.head.appendChild(m); }
      m.content = content;
    };

    setMeta("name", "description", "Umzugshelfer oder Umzugsunternehmen buchen? Kosten-Vergleich, Vor- & Nachteile, Versicherung und Checkliste — wann sich was lohnt.");
    setMeta("property", "og:title", "Umzugshelfer oder Umzugsunternehmen? Kosten & Vergleich");
    setMeta("property", "og:description", "Umzugshelfer oder Umzugsunternehmen buchen? Kosten-Vergleich, Vor- & Nachteile, Versicherung und Checkliste — wann sich was lohnt.");
    setMeta("property", "og:url", "https://stressfreientruempelungen.de/umzugshelfer-tipps");
    setMeta("property", "og:image", "https://stressfreientruempelungen.de/images/umzug-umzugskartons-stressfrei-rhein-erft-kreis.webp");
    setMeta("property", "og:locale", "de_DE");
    setMeta("property", "og:type", "article");

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) { canonical = document.createElement("link"); canonical.rel = "canonical"; document.head.appendChild(canonical); }
    canonical.href = "https://stressfreientruempelungen.de/umzugshelfer-tipps";

    const existingLd = document.querySelector('script[data-blog-ld]');
    if (existingLd) existingLd.remove();
    const ldScript = document.createElement("script");
    ldScript.type = "application/ld+json";
    ldScript.setAttribute("data-blog-ld", "true");
    ldScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Umzugshelfer oder Umzugsunternehmen? Kosten, Vor- & Nachteile im Vergleich",
      description: "Umzugshelfer oder Umzugsunternehmen buchen? Kosten-Vergleich, Vor- & Nachteile, Versicherung und Checkliste — wann sich was lohnt.",
      url: "https://stressfreientruempelungen.de/umzugshelfer-tipps",
      image: "https://stressfreientruempelungen.de/images/umzug-umzugskartons-stressfrei-rhein-erft-kreis.webp",
      author: { "@type": "Organization", name: "Stressfrei Entrümpelungen & Umzüge" },
      publisher: {
        "@type": "Organization",
        name: "Stressfrei Entrümpelungen & Umzüge",
        logo: { "@type": "ImageObject", url: "https://stressfreientruempelungen.de/images/logo.webp" },
      },
      datePublished: "2026-03-01",
      dateModified: new Date().toISOString().split("T")[0],
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Startseite", item: "https://stressfreientruempelungen.de" },
          { "@type": "ListItem", position: 2, name: "Ratgeber", item: "https://stressfreientruempelungen.de/ratgeber" },
          { "@type": "ListItem", position: 3, name: "Umzugshelfer Tipps", item: "https://stressfreientruempelungen.de/umzugshelfer-tipps" },
        ],
      },
    });
    document.head.appendChild(ldScript);

    return () => {
      const ld = document.querySelector('script[data-blog-ld]');
      if (ld) ld.remove();
    };
  }, []);

  return (
    <PageLayout>
      <PageHero
        title="Umzugshelfer oder Umzugsunternehmen?"
        subtitle="Kosten, Vor- & Nachteile, Versicherung und Entscheidungshilfe — damit Ihr Umzug wirklich stressfrei wird."
        highlight="Ratgeber Umzug"
      />

      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeIn} className="mb-6">
            <Link href="/ratgeber" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Zurück zum Ratgeber
            </Link>
          </motion.div>

          <motion.div {...fadeIn} className="max-w-none mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Wer umzieht, steht früh vor der Frage: Freunde und Familie um Hilfe bitten — oder lieber ein professionelles <Link href="/umzug" className="text-primary hover:underline font-medium">Umzugsunternehmen</Link> beauftragen? Beide Optionen haben ihre Berechtigung. Dieser Ratgeber zeigt ehrlich die Kosten, Risiken und den richtigen Zeitpunkt für jede Entscheidung.
            </p>
          </motion.div>

          <motion.div {...fadeIn} className="mb-14">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <Euro className="w-6 h-6 text-primary shrink-0" />
              Kostenvergleich im Überblick
            </h2>
            <div className="overflow-x-auto rounded-xl border border-border/50">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary/10 border-b border-border/50">
                    <th className="text-left p-3 sm:p-4 font-semibold text-foreground">Kriterium</th>
                    <th className="text-left p-3 sm:p-4 font-semibold text-primary">Umzugshelfer</th>
                    <th className="text-left p-3 sm:p-4 font-semibold text-foreground">Umzugsunternehmen</th>
                  </tr>
                </thead>
                <tbody>
                  {vergleich.map((row, i) => (
                    <tr key={i} className={`border-b border-border/30 ${i % 2 === 0 ? "bg-background" : "bg-card/30"}`}>
                      <td className="p-3 sm:p-4 font-medium text-foreground">{row.kriterium}</td>
                      <td className="p-3 sm:p-4 text-muted-foreground">{row.helfer}</td>
                      <td className="p-3 sm:p-4 text-muted-foreground">{row.unternehmen}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 mb-14">
            <motion.div {...fadeIn}>
              <Card className="p-6 border-green-500/30 bg-green-50/30 dark:bg-green-950/10 h-full">
                <div className="flex items-center gap-2 mb-4">
                  <Users className="w-5 h-5 text-green-600" />
                  <h3 className="font-bold text-foreground text-lg">Wann lohnen sich Umzugshelfer?</h3>
                </div>
                <ul className="space-y-2">
                  {wannHelfer.map((punkt, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                      {punkt}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
            <motion.div {...fadeIn}>
              <Card className="p-6 border-primary/30 bg-primary/5 h-full">
                <div className="flex items-center gap-2 mb-4">
                  <Truck className="w-5 h-5 text-primary" />
                  <h3 className="font-bold text-foreground text-lg">Wann ist ein Umzugsunternehmen besser?</h3>
                </div>
                <ul className="space-y-2">
                  {wannUnternehmen.map((punkt, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      {punkt}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          </div>

          <motion.div {...fadeIn} className="mb-14">
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
              <Shield className="w-6 h-6 text-primary shrink-0" />
              Das wichtigste Argument: Versicherung
            </h2>
            <Card className="p-6 border-amber-500/30 bg-amber-50/30 dark:bg-amber-950/10">
              <div className="flex items-start gap-3 mb-4">
                <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-1" />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Achtung:</strong> Viele Menschen unterschätzen das Versicherungsthema. Beim Privatumzug mit Freunden greift deren Privathaftpflicht — aber nur, wenn keine "entgeltliche Tätigkeit" vorliegt. Wer Freunde mit Geld oder Sachleistungen entlohnt, bewegt sich rechtlich in einer Grauzone.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                    <XCircle className="w-4 h-4 text-red-500" /> Umzugshelfer (privat)
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Privathaftpflicht oft begrenzt</li>
                    <li>• Ausschluss bei "gewerblicher Tätigkeit"</li>
                    <li>• Im Schadensfall Rechtstreit möglich</li>
                    <li>• Wertvolle Gegenstände schlecht abgesichert</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" /> Umzugsunternehmen
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Betriebshaftpflicht deckt Schäden ab</li>
                    <li>• Gilt für alle Mitarbeiter</li>
                    <li>• Schadensregulierung vertraglich geregelt</li>
                    <li>• Auch für Wertgegenstände absicherbar</li>
                  </ul>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div {...fadeIn} className="mb-14">
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
              <Clock className="w-6 h-6 text-primary shrink-0" />
              Was kostet was? — Realistische Preisbeispiele
            </h2>
            <div className="space-y-4">
              {[
                {
                  szenario: "1-Zimmer-Wohnung, lokal (bis 10 km)",
                  helfer: "150–300 € (+ Mietwagen ca. 80 €)",
                  unternehmen: "350–600 €",
                  empfehlung: "Helfer oft sinnvoll, wenn zuverlässige Personen verfügbar",
                },
                {
                  szenario: "2-Zimmer-Wohnung, lokal (bis 30 km)",
                  helfer: "250–450 € (+ Mietwagen ca. 100 €)",
                  unternehmen: "500–900 €",
                  empfehlung: "Grenzfall — Unternehmen hat Komfortvorteil",
                },
                {
                  szenario: "3-Zimmer-Wohnung, regional (30–80 km)",
                  helfer: "400–700 € (+ LKW-Miete)",
                  unternehmen: "800–1.500 €",
                  empfehlung: "Unternehmen empfohlen — Effizienz und Versicherung",
                },
                {
                  szenario: "Seniorenumzug (jede Größe)",
                  helfer: "Nicht empfohlen",
                  unternehmen: "600–1.400 € je nach Umfang",
                  empfehlung: "Immer Unternehmen — Einfühlungsvermögen und Erfahrung nötig",
                },
                {
                  szenario: "Büroumzug / Firmenumzug",
                  helfer: "Nicht geeignet",
                  unternehmen: "1.200–5.000 € je nach Größe",
                  empfehlung: "Immer Unternehmen — Haftung und Zuverlässigkeit entscheidend",
                },
              ].map((row, i) => (
                <Card key={i} className="p-4">
                  <p className="font-semibold text-foreground mb-2">{row.szenario}</p>
                  <div className="grid sm:grid-cols-3 gap-2 text-sm">
                    <div>
                      <span className="text-muted-foreground text-xs block mb-1">Umzugshelfer</span>
                      <span className="text-foreground">{row.helfer}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground text-xs block mb-1">Umzugsunternehmen</span>
                      <span className="text-foreground">{row.unternehmen}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground text-xs block mb-1">Empfehlung</span>
                      <span className="text-primary text-xs">{row.empfehlung}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeIn} className="mb-14">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <HelpCircle className="w-6 h-6 text-primary shrink-0" />
              Häufige Fragen zum Umzugshelfer
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <Card key={i} className="p-5">
                  <p className="font-semibold text-foreground mb-2">{faq.frage}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.antwort}</p>
                </Card>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeIn} className="mb-14">
            <Card className="p-6 bg-primary/5 border-primary/20">
              <h2 className="text-xl font-bold text-foreground mb-3">Unser Fazit</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Umzugshelfer sind eine gute Wahl für kleine, unkomplizierte Umzüge mit wenig Risiko — wenn Sie ein zuverlässiges Netzwerk haben und selbst mitanpacken können. Für alles darüber hinaus lohnt sich ein professionelles Umzugsunternehmen: Sie sparen Zeit, schlafen bei der Versicherungsfrage ruhiger und bekommen einen Ansprechpartner für alles.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Wir bei <strong>Stressfrei Entrümpelungen & Umzüge</strong> bieten außerdem flexible Pakete an — von reiner Arbeitskraft (als professionelle Umzugshelfer mit Versicherung) bis zum kompletten Umzugsservice. So haben Sie das Beste aus beiden Welten.
              </p>
            </Card>
          </motion.div>

          <motion.div {...fadeIn} className="flex flex-wrap gap-3 text-sm text-muted-foreground">
            <span>Weitere Ratgeber:</span>
            <Link href="/umzugscheckliste" className="text-primary hover:underline">Umzugscheckliste</Link>
            <Link href="/kosten-umzug" className="text-primary hover:underline">Umzugskosten berechnen</Link>
            <Link href="/seniorenumzug" className="text-primary hover:underline">Seniorenumzug</Link>
            <Link href="/haushaltsaufloesung-vorbereiten" className="text-primary hover:underline">Haushaltsauflösung vorbereiten</Link>
            <Link href="/entruempelung" className="text-primary hover:underline">Entrümpelung</Link>
          </motion.div>
        </div>
      </section>

      <BlogArticleCTA topic="Umzug" />
      <CTASection />
    </PageLayout>
  );
}
