import { useEffect } from "react";
import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { PageLayout, PageHero, CTASection, BlogArticleCTA } from "@/components/layout";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  CheckCircle2,
  XCircle,
  Clock,
  Euro,
  Truck,
  Wrench,
  ShieldCheck,
  HelpCircle,
  Lightbulb,
  Scale,
  AlertTriangle,
  PhoneCall,
  Star,
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const selbstVorteile = [
  { text: "Keine Fremdkosten für Arbeitsstunden" },
  { text: "Volle Kontrolle über jeden Gegenstand" },
  { text: "Eigenes Tempo, keine Termine" },
  { text: "Persönliche Auswahl was bleibt und was geht" },
];

const selbstNachteile = [
  { text: "Extrem zeitaufwändig: 1–3 Wochen für eine 3-Zimmer-Wohnung" },
  { text: "Schwere Möbel erfordern Helfer und geeignetes Fahrzeug" },
  { text: "Entsorgungskosten (Container, Sperrmüll) fallen trotzdem an" },
  { text: "Körperlich sehr belastend — Rückenschäden sind häufig" },
  { text: "Emotionale Belastung, besonders nach einem Todesfall" },
  { text: "Ohne Erfahrung werden Wertsachen oft übersehen oder falsch entsorgt" },
];

const firmaVorteile = [
  { text: "Komplette Abwicklung in 1–2 Tagen" },
  { text: "Erfahrenes Team mit Fahrzeugen und Werkzeug" },
  { text: "Fachgerechte und legale Entsorgung inklusive" },
  { text: "Wertanrechnung kann die Kosten erheblich senken" },
  { text: "Emotional entlastend: kein direkter Kontakt mit allem" },
  { text: "Besenreine Übergabe an Vermieter möglich" },
];

const firmaNachteile = [
  { text: "Kosten je nach Umfang zwischen 500 und 4.000 €" },
  { text: "Vertrauen in den Anbieter erforderlich" },
  { text: "Buchungsvorlauf von 1–3 Wochen ratsam" },
];

const kostenVergleich = [
  {
    groesse: "1–2-Zimmer-Wohnung",
    selbst: "200–600 €",
    firma: "500–1.500 €",
    hinweis: "Zeitaufwand selbst: ~40–80 Std.",
  },
  {
    groesse: "3–4-Zimmer-Wohnung",
    selbst: "500–1.200 €",
    firma: "1.200–2.800 €",
    hinweis: "Zeitaufwand selbst: ~80–160 Std.",
  },
  {
    groesse: "Haus (5+ Zimmer)",
    selbst: "1.000–3.000 €",
    firma: "2.000–5.000 €",
    hinweis: "Zeitaufwand selbst: 2–6 Wochen",
  },
];

const wannFirma = [
  { icon: Clock, text: "Sie haben wenig Zeit (z. B. enge Rückgabefrist der Wohnung)" },
  { icon: AlertTriangle, text: "Die Auflösung erfolgt nach einem Trauerfall" },
  { icon: Wrench, text: "Große Möbel, Keller, Dachboden oder Garage sind betroffen" },
  { icon: Euro, text: "Wertgegenstände sollen durch Wertanrechnung die Kosten senken" },
  { icon: ShieldCheck, text: "Sie möchten eine rechtssichere, fachgerechte Entsorgung" },
  { icon: Truck, text: "Kein eigenes Fahrzeug oder keine körperliche Belastbarkeit" },
];

const wannSelbst = [
  { icon: CheckCircle2, text: "Wohnung ist klein und wenig Möbel vorhanden" },
  { icon: CheckCircle2, text: "Sie haben ausreichend Zeit (mehrere Wochen)" },
  { icon: CheckCircle2, text: "Helfer (Familie, Freunde) stehen bereit" },
  { icon: CheckCircle2, text: "Geeignetes Fahrzeug (Transporter) ist verfügbar" },
  { icon: CheckCircle2, text: "Es handelt sich um keine emotional belastende Situation" },
];

const firmaCheckliste = [
  "Kostenlose Besichtigung vor Ort wird angeboten",
  "Festpreisangebot ohne versteckte Posten",
  "Schriftlicher Auftrag und Leistungsbeschreibung",
  "Nachweis für fachgerechte Entsorgung (Entsorgungsnachweis)",
  "Wertanrechnung für verwertbare Gegenstände",
  "Positive Google-Bewertungen mit echten Kundenreaktionen",
  "Besenreine Übergabe der Wohnung inklusive",
  "Versicherung für Schäden während der Arbeit",
];

const faqs = [
  {
    frage: "Wie viel kostet eine Wohnungsauflösung durch eine Firma?",
    antwort:
      "Die Kosten variieren stark je nach Wohnungsgröße, Menge der Gegenstände und Region. Für eine 2-Zimmer-Wohnung rechnen Sie mit ca. 500–1.500 €, für ein volleingerichtetes Haus mit 2.000–5.000 €. Durch Wertanrechnung (Möbel, Metalle, Antiquitäten) lassen sich die Kosten deutlich reduzieren — manchmal bis zu 50 %.",
  },
  {
    frage: "Was bedeutet Wertanrechnung und wie viel spare ich dabei?",
    antwort:
      "Bei einer Wertanrechnung prüft das Unternehmen, welche Gegenstände wiederverkauft, weiterverwendet oder als Rohstoffe verwertet werden können (z. B. Metalle, Kupfer, gut erhaltene Möbel, Antiquitäten). Der ermittelte Wert wird direkt vom Rechnungsbetrag abgezogen. Je nach Inhalt können so Hunderte bis Tausende Euro gespart werden.",
  },
  {
    frage: "Wie lange dauert eine Wohnungsauflösung durch ein Unternehmen?",
    antwort:
      "Ein professionelles Team schafft eine 3-Zimmer-Wohnung typischerweise an einem einzigen Tag. Bei größeren Wohnungen oder Häusern mit viel Inhalt sind es 2–3 Tage. Im Vergleich: Selbst machen dauert oft 3–6 Wochen — auch mit Helfern.",
  },
  {
    frage: "Muss ich bei der Auflösung anwesend sein?",
    antwort:
      "Nein. Sie können vorher alles Persönliche (Fotos, Dokumente, Schmuck) entnehmen und dem Team eine Vollmacht erteilen. Seriöse Anbieter übergeben alle persönlichen Unterlagen und Fundstücke vollständig und dokumentiert.",
  },
  {
    frage: "Was passiert mit den Sachen, die ich nicht mehr brauche?",
    antwort:
      "Gut erhaltene Möbel und Gegenstände werden verkauft, gespendet oder dem Secondhand-Markt zugeführt. Was nicht verwertbar ist, wird fachgerecht und umweltgerecht entsorgt — mit Entsorgungsnachweis.",
  },
  {
    frage: "Übernimmt die Pflegekasse oder das Sozialamt die Kosten?",
    antwort:
      "In bestimmten Fällen ja: Wenn die Wohnungsauflösung im Zusammenhang mit einem Heimeinzug oder Krankenhausaufenthalt steht, können Pflegekasse oder Sozialamt die Kosten ganz oder teilweise übernehmen. Sprechen Sie uns an — wir helfen bei der Kostenübernahme.",
  },
];

export default function WohnungsaufloesungSelbstOderFirmaPage() {
  useEffect(() => {
    document.title =
      "Wohnungsauflösung: Selbst machen oder Firma? | Kosten & Vergleich | Stressfrei";
    let _canonical = document.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement | null;
    if (!_canonical) {
      _canonical = document.createElement("link");
      _canonical.setAttribute("rel", "canonical");
      document.head.appendChild(_canonical);
    }
    _canonical.setAttribute(
      "href",
      "https://stressfreientruempelungen.de/wohnungsaufloesung-selbst-oder-firma"
    );
    const _setOgMeta = (prop: string, val: string) => {
      let m = document.querySelector(
        `meta[property="${prop}"]`
      ) as HTMLMetaElement | null;
      if (!m) {
        m = document.createElement("meta");
        m.setAttribute("property", prop);
        document.head.appendChild(m);
      }
      m.setAttribute("content", val);
    };
    _setOgMeta(
      "og:url",
      "https://stressfreientruempelungen.de/wohnungsaufloesung-selbst-oder-firma"
    );
    _setOgMeta(
      "og:image",
      "https://stressfreientruempelungen.de/images/wohnungsaufloesung-dienstleistung-nrw.webp"
    );
    _setOgMeta("og:locale", "de_DE");
    _setOgMeta("og:type", "article");
    const meta = document.querySelector(
      'meta[name="description"]'
    ) as HTMLMetaElement | null;
    if (meta) {
      meta.setAttribute(
        "content",
        "Wohnungsauflösung selbst machen oder Firma beauftragen? Ehrlicher Kosten- und Zeitvergleich, Vor- & Nachteile, Checkliste und FAQ. Jetzt informieren."
      );
    }
  }, []);

  return (
    <>
      <PageLayout>
        <PageHero
          title="Wohnungsauflösung: Selbst machen oder Firma beauftragen?"
          subtitle="Ein ehrlicher Vergleich mit Kosten, Zeitaufwand und einer klaren Entscheidungshilfe — damit Sie die richtige Wahl treffen."
          highlight="Ratgeber"
        />

        <section className="py-10 sm:py-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.div {...fadeIn}>
              <Link href="/blog" style={{ textDecoration: "none" }}>
                <span className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8 cursor-pointer">
                  <ArrowLeft className="w-4 h-4" />
                  Zurück zum Blog
                </span>
              </Link>
            </motion.div>

            <motion.div {...fadeIn} className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Eine Wohnungsauflösung ist eine der größten logistischen Herausforderungen, die im
                Laufe des Lebens anfallen können — ob nach einem Todesfall, einem Umzug ins
                Pflegeheim, einer Scheidung oder einfach bei einem Neustart. Die entscheidende Frage
                stellt sich fast immer: <strong>Packe ich das selbst an — oder beauftrage ich ein
                Unternehmen?</strong>
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Dieser Artikel gibt Ihnen einen ehrlichen, vollständigen Überblick: Was kostet
                welche Option wirklich? Wo liegen die versteckten Risiken? Und wann lohnt sich was?
                Mit konkreten Zahlen, Checklisten und einer klaren Entscheidungshilfe.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="pb-10 sm:pb-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.div {...fadeIn}>
              <img
                src="/images/wohnungsaufloesung-dienstleistung-nrw.webp"
                alt="Wohnungsauflösung NRW – professionell und stressfrei mit Stressfrei Entrümpelungen"
                className="w-full rounded-2xl shadow-lg object-cover aspect-[16/9]"
                width={1200}
                height={675}
                loading="eager"
                fetchpriority="high"
                decoding="async"
              />
              <p className="text-xs text-muted-foreground text-center mt-2">
                Eine vollständige Wohnungsauflösung kann Tage bis Wochen dauern — je nachdem, wie Sie vorgehen.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-14 sm:py-20 bg-card/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.div {...fadeIn} className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Was gehört zu einer Wohnungsauflösung?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Eine Wohnungsauflösung umfasst mehr als nur ein paar Kartons packen. Je nach Situation
                können folgende Aufgaben anfallen:
              </p>
              <ul className="space-y-3">
                {[
                  "Sichten und Sortieren aller Gegenstände (behalten, verkaufen, spenden, entsorgen)",
                  "Demontage von Möbeln, Einbauschränken und Küchen",
                  "Transport aller Gegenstände zu Lager, Secondhand oder Wertstoffhof",
                  "Fachgerechte Entsorgung von Sperrmüll, Elektroschrott und Sondermüll",
                  "Reinigung und besenreine Übergabe der Wohnung",
                  "Dokumentation für Vermieter, Erben oder Pflegekasse",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div {...fadeIn} className="bg-primary/5 border rounded-xl p-5">
              <div className="flex gap-3 items-start">
                <Lightbulb className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Gut zu wissen:</strong> Der Zeitaufwand für
                  eine durchschnittliche 3-Zimmer-Wohnung liegt bei Eigenregie bei 80–160
                  Arbeitsstunden — auch mit mehreren Helfern. Ein professionelles Team erledigt
                  dieselbe Aufgabe oft an einem einzigen Tag.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-14 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.div {...fadeIn} className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                Option 1: Wohnungsauflösung selbst durchführen
              </h2>
              <p className="text-muted-foreground mb-8">
                Eigenregie bedeutet volle Kontrolle — aber auch volle Verantwortung für Zeit,
                Kosten und körperliche Belastung.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-6">
              <motion.div {...fadeIn}>
                <Card className="p-6 h-full border-green-200/60 bg-green-50/30 dark:bg-green-950/10 dark:border-green-900/30">
                  <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    Vorteile
                  </h3>
                  <ul className="space-y-3">
                    {selbstVorteile.map((v, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                        {v.text}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
              <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.1 }}>
                <Card className="p-6 h-full border-red-200/60 bg-red-50/30 dark:bg-red-950/10 dark:border-red-900/30">
                  <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <XCircle className="w-5 h-5 text-red-500" />
                    Nachteile
                  </h3>
                  <ul className="space-y-3">
                    {selbstNachteile.map((n, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                        {n.text}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-6 pb-14 sm:pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.div {...fadeIn} className="grid sm:grid-cols-2 gap-6 items-end">
              <div>
                <img
                  src="/images/galerie-wohnung-vorher.webp"
                  alt="Wohnung vor der Auflösung – vollgestellt mit Möbeln und Gegenständen"
                  className="w-full rounded-2xl shadow object-cover aspect-[4/3]"
                  width={800}
                  height={600}
                  loading="lazy"
                />
                <p className="text-xs text-muted-foreground text-center mt-2">Vorher: vollgestellt und unübersichtlich</p>
              </div>
              <div>
                <img
                  src="/images/galerie-wohnung-nachher.webp"
                  alt="Wohnung nach der Auflösung – leer und besenrein übergeben"
                  className="w-full rounded-2xl shadow object-cover aspect-[4/3]"
                  width={800}
                  height={600}
                  loading="lazy"
                />
                <p className="text-xs text-muted-foreground text-center mt-2">Nachher: leer, sauber, übergabebereit</p>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-14 sm:py-20 bg-card/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.div {...fadeIn} className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                Option 2: Firma mit der Wohnungsauflösung beauftragen
              </h2>
              <p className="text-muted-foreground mb-8">
                Ein erfahrenes Unternehmen bringt Werkzeug, Fahrzeuge und Know-how mit — und
                erledigt in Stunden, wofür Sie Wochen brauchen würden.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-6">
              <motion.div {...fadeIn}>
                <Card className="p-6 h-full border-green-200/60 bg-green-50/30 dark:bg-green-950/10 dark:border-green-900/30">
                  <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    Vorteile
                  </h3>
                  <ul className="space-y-3">
                    {firmaVorteile.map((v, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                        {v.text}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
              <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.1 }}>
                <Card className="p-6 h-full border-red-200/60 bg-red-50/30 dark:bg-red-950/10 dark:border-red-900/30">
                  <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <XCircle className="w-5 h-5 text-red-500" />
                    Nachteile
                  </h3>
                  <ul className="space-y-3">
                    {firmaNachteile.map((n, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                        {n.text}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.div {...fadeIn} className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                Kostenvergleich: Was kostet was wirklich?
              </h2>
              <p className="text-muted-foreground mb-2">
                Beim Selbermachen entstehen Kosten oft unterschätzt: Mietauto, Containergebühren,
                Wertstoffhof-Annahme, Helfer-Bewirtung und Ihre eigene Arbeitszeit summieren sich
                schnell.
              </p>
              <p className="text-sm text-muted-foreground mb-8">
                Die folgende Tabelle zeigt Richtwerte — Wertanrechnung beim Profi kann die Firmenkosten
                nochmals erheblich senken.
              </p>
            </motion.div>

            <motion.div {...fadeIn} className="overflow-x-auto rounded-xl border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="text-left p-4 font-semibold text-foreground">Wohnungsgröße</th>
                    <th className="text-left p-4 font-semibold text-foreground">Selbst machen</th>
                    <th className="text-left p-4 font-semibold text-foreground">Firma beauftragen</th>
                    <th className="text-left p-4 font-semibold text-foreground hidden sm:table-cell">Hinweis</th>
                  </tr>
                </thead>
                <tbody>
                  {kostenVergleich.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                      <td className="p-4 font-medium text-foreground">{row.groesse}</td>
                      <td className="p-4 text-muted-foreground">{row.selbst}</td>
                      <td className="p-4 text-muted-foreground">{row.firma}</td>
                      <td className="p-4 text-muted-foreground hidden sm:table-cell text-xs">{row.hinweis}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>

            <motion.div {...fadeIn} className="mt-5 bg-primary/5 border rounded-xl p-5">
              <div className="flex gap-3 items-start">
                <Star className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Tipp Wertanrechnung:</strong> Bei einem
                  Profi werden verwertbare Gegenstände (Kupfer, Möbel, Antiquitäten, Elektroschrott)
                  direkt vom Preis abgezogen. In vielen Fällen reduziert das die Kosten um 20–50 %.
                  Lassen Sie sich immer ein Angebot mit Wertanrechnung erstellen, bevor Sie
                  entscheiden.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-14 sm:py-20 bg-card/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.div {...fadeIn} className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                Wann lohnt sich welche Option?
              </h2>
              <p className="text-muted-foreground mb-8">
                Hier ist eine einfache Entscheidungshilfe — ehrlich und ohne Verkaufsabsicht.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-8">
              <motion.div {...fadeIn}>
                <h3 className="font-semibold text-foreground mb-5 flex items-center gap-2 text-lg">
                  <Scale className="w-5 h-5 text-primary" />
                  Selbst machen — wenn…
                </h3>
                <ul className="space-y-3">
                  {wannSelbst.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <li key={i} className="flex items-start gap-3">
                        <Icon className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{item.text}</span>
                      </li>
                    );
                  })}
                </ul>
              </motion.div>

              <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.1 }}>
                <h3 className="font-semibold text-foreground mb-5 flex items-center gap-2 text-lg">
                  <Truck className="w-5 h-5 text-primary" />
                  Firma beauftragen — wenn…
                </h3>
                <ul className="space-y-3">
                  {wannFirma.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <li key={i} className="flex items-start gap-3">
                        <Icon className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{item.text}</span>
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.div {...fadeIn}>
              <img
                src="/images/professionelle-entruempelung-service-rhein-erft-kreis.webp"
                alt="Professionelles Team bei der Wohnungsauflösung im Rhein-Erft-Kreis"
                className="w-full rounded-2xl shadow-lg object-cover aspect-[16/9]"
                width={1200}
                height={675}
                loading="lazy"
              />
              <p className="text-xs text-muted-foreground text-center mt-2">
                Unser Team im Einsatz bei einer Wohnungsauflösung im Rhein-Erft-Kreis
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-14 sm:py-20 bg-card/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.div {...fadeIn} className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                Wenn Sie eine Firma beauftragen: Auf diese 8 Punkte müssen Sie achten
              </h2>
              <p className="text-muted-foreground mb-6">
                Leider gibt es am Markt auch unseriöse Anbieter. Mit dieser Checkliste schützen Sie
                sich vor bösen Überraschungen.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-3">
              {firmaCheckliste.map((punkt, i) => (
                <motion.div
                  key={i}
                  {...fadeIn}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-background border"
                >
                  <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{punkt}</span>
                </motion.div>
              ))}
            </div>

            <motion.div {...fadeIn} className="mt-8 bg-primary/5 border rounded-xl p-5">
              <div className="flex gap-3 items-start">
                <AlertTriangle className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-foreground mb-1">Warnsignal: Kein schriftliches Angebot</p>
                  <p className="text-sm text-muted-foreground">
                    Wenn ein Unternehmen keinen schriftlichen Festpreis nennen möchte oder die
                    Besichtigung ablehnt, ist Vorsicht geboten. Seriöse Anbieter gehen immer zuerst
                    vor Ort — und geben Ihnen ein klares Angebot ohne versteckte Kosten.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-14 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.div {...fadeIn} className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2 flex items-center gap-3">
                <HelpCircle className="w-7 h-7 text-primary" />
                Häufige Fragen zur Wohnungsauflösung
              </h2>
            </motion.div>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  {...fadeIn}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                >
                  <Card className="p-5">
                    <h3 className="font-semibold mb-2 text-foreground">{faq.frage}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{faq.antwort}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-10 sm:py-14 bg-card/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.div {...fadeIn}>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                Fazit: Was empfehlen wir?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Wenn Ihre Wohnung klein ist und Sie Zeit, Helfer und ein geeignetes Fahrzeug haben,
                kann Eigenregie sinnvoll sein. In allen anderen Fällen — besonders bei emotionalen
                Situationen, großen Wohnungen oder engem Zeitrahmen — lohnt sich eine Firma fast
                immer.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Der entscheidende Faktor, den viele vergessen: Ihre eigene Zeit hat einen Wert.
                Wenn 80 Stunden Eigenarbeit die Firmenkosten um 30 % reduzieren, ist das kein
                Sparerfolg — das ist ein schlechtes Tauschgeschäft.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Holen Sie sich ein kostenloses Angebot mit Wertanrechnung ein — erst dann können
                Sie die Entscheidung wirklich informiert treffen. Wir kommen zur kostenlosen
                Besichtigung direkt zu Ihnen nach Hause.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-10 sm:py-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.div {...fadeIn} className="flex items-center gap-3 p-5 bg-muted/40 rounded-xl border">
              <PhoneCall className="w-6 h-6 text-primary shrink-0" />
              <div>
                <p className="font-semibold text-foreground text-sm mb-0.5">Weiterlesen: Verwandte Ratgeber</p>
                <div className="flex flex-wrap gap-3 mt-2">
                  {[
                    { label: "Entrümpelung nach Todesfall", href: "/entruempelung-nach-todesfall" },
                    { label: "Haushaltsauflösung vorbereiten", href: "/haushaltsaufloesung-vorbereiten" },
                    { label: "Was kostet eine Wohnungsauflösung?", href: "/wohnungsaufloesung" },
                    { label: "Wertanrechnung: So sparen Sie", href: "/wertanrechnung-bei-entruempelung" },
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

        <BlogArticleCTA topic="Wohnungsauflösung" />
      <CTASection />
      </PageLayout>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Wohnungsauflösung: Selbst machen oder Firma beauftragen? Kosten & Vergleich",
            description:
              "Ehrlicher Kosten- und Zeitvergleich für Wohnungsauflösung in Eigenregie vs. professionelle Firma. Checkliste, FAQ und Entscheidungshilfe.",
            image:
              "https://stressfreientruempelungen.de/images/wohnungsaufloesung-dienstleistung-nrw.webp",
            author: {
              "@type": "Organization",
              name: "Stressfrei Entrümpelungen & Umzüge",
              url: "https://stressfreientruempelungen.de",
            },
            publisher: {
              "@type": "Organization",
              name: "Stressfrei Entrümpelungen & Umzüge",
              logo: {
                "@type": "ImageObject",
                url: "https://stressfreientruempelungen.de/favicon.webp",
              },
            },
            datePublished: "2025-03-25",
            dateModified: "2025-03-25",
            mainEntityOfPage:
              "https://stressfreientruempelungen.de/wohnungsaufloesung-selbst-oder-firma",
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.frage,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.antwort,
              },
            })),
          }),
        }}
      />
    </>
  );
}
