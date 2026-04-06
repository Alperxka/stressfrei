import { useEffect } from "react";
import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { PageLayout, PageHero, CTASection, BlogArticleCTA } from "@/components/layout";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, XCircle, AlertTriangle, Info, Recycle, Trash2, HelpCircle, Lightbulb } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const kategorien = [
  {
    titel: "Sperrmüll (kostenlos / günstig)",
    farbe: "border-green-500/40 bg-green-50/50 dark:bg-green-950/20",
    iconFarbe: "text-green-600",
    icon: CheckCircle2,
    items: [
      { name: "Möbel & Sofas", hinweis: "Bis 2m³ oft kostenlos bei kommunalem Sperrmüll" },
      { name: "Matratzen", hinweis: "1 Stück oft im Sperrmüll inbegriffen" },
      { name: "Kleingeräte ohne Motor (Töpfe, Geschirr)", hinweis: "Über Wertstoffhof oder Sperrmüll" },
      { name: "Holzmöbel ohne Schadstoffe", hinweis: "Sperrmüll oder Wertstoffhof" },
      { name: "Spielzeug ohne Elektrik", hinweis: "Sperrmüll oder Secondhand-Laden" },
      { name: "Kleidung & Textilien", hinweis: "Kleidercontainer, DRK, Caritas — kostenlos" },
    ],
  },
  {
    titel: "Elektroschrott (kostenloser Rückgabe)",
    farbe: "border-blue-500/40 bg-blue-50/50 dark:bg-blue-950/20",
    iconFarbe: "text-blue-600",
    icon: Recycle,
    items: [
      { name: "Kühlschränke & Gefriergeräte", hinweis: "Kostenlose Rücknahme beim Handel ab 25cm Kantenlänge" },
      { name: "Waschmaschinen & Trockner", hinweis: "Kostenlose Rücknahme beim Handel" },
      { name: "TV & Monitore", hinweis: "Wertstoffhof kostenlos oder Händler-Rücknahme" },
      { name: "Computer, Laptops, Tablets", hinweis: "Wertstoffhof oder Hersteller-Rücknahme" },
      { name: "Handys & Smartphones", hinweis: "Händlerrücknahme, Sammelboxen im Handel" },
      { name: "Leuchten & Leuchtmittel", hinweis: "Wertstoffhof, Sammelboxen im Handel" },
    ],
  },
  {
    titel: "Sondermüll (Kosten variieren)",
    farbe: "border-amber-500/40 bg-amber-50/50 dark:bg-amber-950/20",
    iconFarbe: "text-amber-600",
    icon: AlertTriangle,
    items: [
      { name: "Farben, Lacke, Lösungsmittel", hinweis: "Schadstoffmobil oder Wertstoffhof (meist kostenlos, 1× jährlich)" },
      { name: "Altöl & Motoröl", hinweis: "Wertstoffhof oder Tankstelle — kostenlos bis 5 Liter" },
      { name: "Chemikalien & Reinigungsmittel", hinweis: "Schadstoffmobil des Kreises — kostenlos" },
      { name: "Alte Medikamente", hinweis: "Apotheke (in D kostenlos)" },
      { name: "Batterien & Akkus", hinweis: "Sammelboxen im Handel — kostenlos" },
      { name: "Feuerlöscher", hinweis: "Feuerwehr oder Fachbetrieb — gering kostenpflichtig" },
    ],
  },
  {
    titel: "Nicht im Sperrmüll — kostenpflichtige Entsorgung",
    farbe: "border-red-500/40 bg-red-50/50 dark:bg-red-950/20",
    iconFarbe: "text-red-600",
    icon: XCircle,
    items: [
      { name: "Asbest (alte Dachplatten, Isolierungen)", hinweis: "Fachbetrieb zwingend erforderlich — 200–1.000 €" },
      { name: "Altreifen", hinweis: "Reifenhändler oder Wertstoffhof — ca. 3–5 € pro Reifen" },
      { name: "Gasflaschen (gefüllt)", hinweis: "Rückgabe beim Händler, nie im Sperrmüll!" },
      { name: "Bauschutt & Beton", hinweis: "Container-Entsorgung — ca. 150–350 € pro m³" },
      { name: "Dämmstoffe mit Schadstoffen", hinweis: "Fachentsorgung — Preis nach Menge" },
      { name: "Quecksilberhaltige Geräte (alte Thermometer)", hinweis: "Wertstoffhof oder Apotheke" },
    ],
  },
];

const kosten = [
  { leistung: "Kommunaler Sperrmüll (bis 2m³)", kosten: "Kostenlos", hinweis: "Terminkontingent begrenzt" },
  { leistung: "Zusätzlicher Sperrmüll (je m³)", kosten: "ca. 20–50 €", hinweis: "Je nach Gemeinde" },
  { leistung: "Wertstoffhof Anlieferung", kosten: "Kostenlos (Kleinmengen)", hinweis: "Öffnungszeiten beachten" },
  { leistung: "Sperrmüll-Container (5m³)", kosten: "150–350 €", hinweis: "Inkl. Lieferung und Abholung" },
  { leistung: "Kühlschrank / Großgerät Entsorgung", kosten: "25–60 € / Stück", hinweis: "Via Händler oft kostenlos" },
  { leistung: "Matratze Entsorgung", kosten: "15–40 € / Stück", hinweis: "Sperrmüll 1 Stück oft frei" },
  { leistung: "Elektronikartikel > 25cm", kosten: "Kostenlos (Händler)", hinweis: "Neues Gerät nicht nötig" },
  { leistung: "Schadstoffmobil (Chemikalien etc.)", kosten: "Kostenlos", hinweis: "Termine beim Kreis anfragen" },
];

const faqs = [
  {
    frage: "Was passiert, wenn ich Sperrmüll falsch entsorge?",
    antwort: "Illegale Müllentsorgung ist eine Ordnungswidrigkeit und kann mit Bußgeldern bis zu 2.500 € geahndet werden. Im Rhein-Erft-Kreis werden Ablagerungen aktiv verfolgt.",
  },
  {
    frage: "Wie beantrage ich Sperrmüll im Rhein-Erft-Kreis?",
    antwort: "Beim AWB Rhein-Erft (Abfallwirtschaftsbetrieb) telefonisch oder online. Es gibt feste Abholtermine pro Adresse im Jahr. Alternativ kann Sperrmüll am Wertstoffhof direkt abgegeben werden.",
  },
  {
    frage: "Kann eine Entrümpelungsfirma alles entsorgen?",
    antwort: "Eine gute Entrümpelungsfirma kann nahezu alles entsorgen — inklusive Sonderabfälle, Elektroschrott und Schadstoffe. Der Unterschied: Die Fachbetriebe haben entsprechende Entsorgungsnachweise und arbeiten mit zertifizierten Entsorgern zusammen. Das ist günstiger als Sie denken, da Buntmetalle und Wertstoffe gegengerechnet werden.",
  },
  {
    frage: "Wie erkenne ich Asbest in alten Baustoffen?",
    antwort: "Asbest wurde bis 1993 in Deutschland verbaut — vor allem in Wellplatten, Fliesen, Rohren und Dämmplatten. Im Zweifel immer einen Fachmann zurate ziehen und nie selbst schleifen oder brechen.",
  },
  {
    frage: "Was kostet eine professionelle Sondermüll-Entrümpelung?",
    antwort: "Für eine durchschnittliche Wohnung mit normalen Haushaltschemikalien entstehen kaum Mehrkosten. Nur bei größeren Mengen von Schadstoffen (z.B. voller Keller mit Farben und Lacken) kommen Zuschläge von 50–200 € hinzu.",
  },
];

export default function EntsorgungsGuidePage() {
  useEffect(() => {
    document.title = "Entsorgungsguide: Was darf in den Sperrmüll? Kosten & Tipps | Stressfrei";
    let _canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!_canonical) { _canonical = document.createElement("link"); _canonical.setAttribute("rel", "canonical"); document.head.appendChild(_canonical); }
    _canonical.setAttribute("href", "https://stressfreientruempelungen.de/entsorgungsguide");
    const _setOgMeta = (prop: string, val: string) => { let m = document.querySelector(`meta[property="${prop}"]`) as HTMLMetaElement | null; if (!m) { m = document.createElement("meta"); m.setAttribute("property", prop); document.head.appendChild(m); } m.setAttribute("content", val); };
    _setOgMeta("og:url", "https://stressfreientruempelungen.de/entsorgungsguide");
    _setOgMeta("og:image", "https://stressfreientruempelungen.de/images/entsorgungsguide-hero.webp");
    _setOgMeta("og:locale", "de_DE");
    _setOgMeta("og:type", "article");
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Was darf in den Sperrmüll, was nicht? Elektroschrott, Sondermüll, Asbest, Möbel — vollständiger Entsorgungsguide mit Kosten für den Rhein-Erft-Kreis.");
    const schemaIds = ["schema-entsorg-1", "schema-entsorg-2", "schema-entsorg-3"];
    const schemaBodies = [
      JSON.stringify({"@context":"https://schema.org","@type":"Article","headline":"Entsorgungsguide: Was darf in den Sperrmüll? Kosten und Tipps","description":"Vollständiger Entsorgungsguide — Sperrmüll, Elektroschrott, Sondermüll, Preise und was ins Entrümpelungsangebot eingeschlossen ist.","url":"https://stressfreientruempelungen.de/entsorgungsguide","datePublished":"2026-03-19","dateModified":"2026-03-19","author":{"@type":"Organization","name":"Stressfrei Entrümpelungen & Umzüge","url":"https://stressfreientruempelungen.de"},"publisher":{"@type":"Organization","name":"Stressfrei Entrümpelungen & Umzüge","logo":{"@type":"ImageObject","url":"https://stressfreientruempelungen.de/favicon.webp"}},"image":"https://stressfreientruempelungen.de/images/entsorgungsguide-hero.webp"}),
      JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":faqs.map(f => ({"@type":"Question","name":f.frage,"acceptedAnswer":{"@type":"Answer","text":f.antwort}}))}),
      JSON.stringify({"@context":"https://schema.org","@type":"HowTo","name":"Entsorgungsguide: Was gehört wohin?","description":"Schritt-für-Schritt-Anleitung zur korrekten Entsorgung von Sperrmüll, Elektroschrott, Sondermüll und mehr im Rhein-Erft-Kreis.","url":"https://stressfreientruempelungen.de/entsorgungsguide","step":[{"@type":"HowToStep","name":"Sperrmüll identifizieren","text":"Bestimmen Sie, welche Gegenstände als Sperrmüll gelten: Möbel, Matratzen, große Haushaltsgeräte. Kleine Gegenstände, die in eine Restmülltonne passen, gehören nicht dazu."},{"@type":"HowToStep","name":"Sperrmüll anmelden","text":"Melden Sie den Sperrmüll bei Ihrem zuständigen Entsorger (z.B. AWA im Rhein-Erft-Kreis) telefonisch oder online an. Terminabholung ist kostenlos."},{"@type":"HowToStep","name":"Elektroschrott separieren","text":"Elektroschrott (Kühlschränke, Fernseher, Kleingeräte) muss getrennt vom Sperrmüll entsorgt werden. Bringen Sie ihn zum Wertstoffhof oder fragen Sie beim Händler nach kostenloser Rücknahme."},{"@type":"HowToStep","name":"Sondermüll fachgerecht entsorgen","text":"Farben, Lacke, Chemikalien und Batterien sind Sondermüll und müssen zum Schadstoffmobil oder Wertstoffhof gebracht werden. Niemals in den Hausmüll!"},{"@type":"HowToStep","name":"Professionelle Entrümpelung beauftragen","text":"Bei größeren Mengen lohnt sich die Beauftragung eines professionellen Entrümpelungsunternehmens. Alles wird fachgerecht sortiert und entsorgt — zum Festpreis."}]}),
    ];
    schemaIds.forEach((id, i) => {
      let s = document.getElementById(id) as HTMLScriptElement | null;
      if (!s) { s = document.createElement("script"); s.type = "application/ld+json"; s.id = id; document.head.appendChild(s); }
      s.textContent = schemaBodies[i];
    });
    return () => { schemaIds.forEach(id => document.getElementById(id)?.remove()); };
  }, []);

  return (
    <PageLayout>
        <PageHero title="Entsorgungsguide" subtitle="Was darf in den Sperrmüll, was kostet was — alles Wichtige zur korrekten Entsorgung im Rhein-Erft-Kreis." highlight="Ratgeber" />

        <section className="py-4 sm:py-6">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-primary transition-colors" style={{ textDecoration: "none" }}>Startseite</Link>
              <span>/</span>
              <Link href="/ratgeber" className="hover:text-primary transition-colors" style={{ textDecoration: "none" }}>Ratgeber</Link>
              <span>/</span>
              <span className="text-foreground font-medium">Entsorgungsguide</span>
            </nav>
          </div>
        </section>

        <section className="pb-8 sm:pb-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div {...fadeIn}>
              <img src="/images/entsorgungsguide-hero.webp" alt="Entsorgungsguide — Recycling und Abfalltrennung richtig gemacht" className="w-full rounded-2xl shadow-lg object-cover aspect-[16/9]" width={1200} height={675} loading="eager" data-testid="img-guide-hero" />
            </motion.div>
          </div>
        </section>

        <section className="py-6 sm:py-10">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <motion.div {...fadeIn} className="bg-primary/5 border border-primary/20 rounded-xl p-5 flex gap-3">
              <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-sm text-foreground leading-relaxed">
                <strong>Auf einen Blick:</strong> Was und wie viel in den kostenlosen Sperrmüll passt, ist je nach Gemeinde unterschiedlich. Im Rhein-Erft-Kreis übernimmt der <strong>AWB Rhein-Erft</strong> die Entsorgung. Professionelle{" "}
                <Link href="/entruempelung" className="text-primary hover:underline font-medium">Entrümpelungsunternehmen</Link> übernehmen auch Sondermüll und Schadstoffe — günstig durch <Link href="/wertanrechnung-bei-der-entruempelung" className="text-primary hover:underline font-medium">Wertanrechnung</Link>.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Kategorien */}
        <section className="py-10 sm:py-14">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div {...fadeIn} className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">Was darf wohin?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Die wichtigsten Kategorien auf einen Blick — von kostenlos bis kostenpflichtig.</p>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-6">
              {kategorien.map((kat, ki) => {
                const Icon = kat.icon;
                return (
                  <motion.div key={ki} {...fadeIn} transition={{ duration: 0.5, delay: ki * 0.08 }}>
                    <Card className={`p-5 h-full border-2 ${kat.farbe}`} data-testid={`card-kat-${ki}`}>
                      <div className="flex items-center gap-2 mb-4">
                        <Icon className={`w-5 h-5 ${kat.iconFarbe} flex-shrink-0`} />
                        <h3 className="font-bold text-foreground">{kat.titel}</h3>
                      </div>
                      <div className="space-y-2.5">
                        {kat.items.map((item, ii) => (
                          <div key={ii} className="flex items-start gap-2">
                            <div className="w-1 h-1 rounded-full bg-muted-foreground flex-shrink-0 mt-2" />
                            <div>
                              <span className="text-sm font-medium text-foreground">{item.name}</span>
                              <span className="text-xs text-muted-foreground block">{item.hinweis}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Kostentabelle */}
        <section className="py-12 sm:py-16 bg-card/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.div {...fadeIn} className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">Entsorgungskosten im Überblick</h2>
              <p className="text-muted-foreground">Typische Preise für den Rhein-Erft-Kreis (Stand 2026)</p>
            </motion.div>
            <Card className="overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm" data-testid="table-kosten">
                  <thead>
                    <tr className="bg-primary/10 border-b border-border/60">
                      <th className="text-left px-4 py-3 font-semibold text-foreground">Leistung</th>
                      <th className="text-left px-4 py-3 font-semibold text-foreground">Kosten</th>
                      <th className="text-left px-4 py-3 font-semibold text-foreground hidden sm:table-cell">Hinweis</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/40">
                    {kosten.map((k, i) => (
                      <tr key={i} className="hover:bg-muted/30 transition-colors">
                        <td className="px-4 py-3 text-foreground">{k.leistung}</td>
                        <td className="px-4 py-3 font-medium text-primary">{k.kosten}</td>
                        <td className="px-4 py-3 text-muted-foreground hidden sm:table-cell">{k.hinweis}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
            <motion.div {...fadeIn} className="mt-5 flex gap-3 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/40 rounded-xl p-4">
              <Lightbulb className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-foreground leading-relaxed">
                <strong>Tipp:</strong> Bei einer professionellen{" "}
                <Link href="/entruempelung" className="text-primary hover:underline font-medium">Entrümpelung</Link> oder{" "}
                <Link href="/kellerentruempelung" className="text-primary hover:underline font-medium">Kellerentrümpelung</Link> sind alle Entsorgungskosten im Festpreis enthalten — auch Sonderabfälle. Durch{" "}
                <Link href="/wertanrechnung-bei-der-entruempelung" className="text-primary hover:underline font-medium">Wertanrechnung</Link> kann der Gesamtpreis deutlich günstiger sein als Selbstentsorgung.
              </p>
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 sm:py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <motion.div {...fadeIn} className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 flex items-center justify-center gap-2">
                <HelpCircle className="w-6 h-6 text-primary" />
                Häufige Fragen zur Entsorgung
              </h2>
            </motion.div>
            <div className="space-y-4">
              {faqs.map((f, i) => (
                <motion.div key={i} {...fadeIn} transition={{ duration: 0.4, delay: i * 0.06 }}>
                  <Card className="p-5" data-testid={`card-faq-${i}`}>
                    <h3 className="font-semibold text-foreground mb-2 flex items-start gap-2">
                      <span className="text-primary font-bold flex-shrink-0">F:</span>{f.frage}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed pl-5">{f.antwort}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Interne Links */}
        <section className="py-10 bg-card/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                { label: "Sperrmüll Kosten", href: "/was-kostet-sperrmuell", desc: "Alle Kosten für Sperrmüll erklärt" },
                { label: "Entrümpelung beauftragen", href: "/entruempelung", desc: "Professionell & günstig durch Wertanrechnung" },
                { label: "Kellerentrümpelung", href: "/kellerentruempelung", desc: "Keller, Dachboden, Garage leer räumen" },
                { label: "Wertanrechnung", href: "/wertanrechnung-bei-der-entruempelung", desc: "So sparen Sie bis zu 40% der Kosten" },
              ].map((l, i) => (
                <motion.div key={l.href} {...fadeIn} transition={{ duration: 0.3, delay: i * 0.05 }}>
                  <Link href={l.href} style={{ textDecoration: "none" }}>
                    <Card className="p-4 hover:border-primary/40 hover:bg-primary/5 transition-colors cursor-pointer h-full" data-testid={`link-intern-${i}`}>
                      <p className="text-sm font-semibold text-foreground mb-1">{l.label}</p>
                      <p className="text-xs text-muted-foreground">{l.desc}</p>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-6">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <Link href="/ratgeber" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors" style={{ textDecoration: "none" }} data-testid="link-back">
              <ArrowLeft className="w-4 h-4" /> Zurück zum Ratgeber
            </Link>
          </div>
        </section>

        <BlogArticleCTA topic="Entsorgung" />
      <CTASection title="Entrümpelung inklusive Entsorgung" subtitle="Wir übernehmen alles — Sperrmüll, Sondermüll, Elektroschrott. Kostenlos besichtigen lassen." />
      </PageLayout>
  );
}
