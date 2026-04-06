import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { PageLayout, PageHero, CTASection, BlogArticleCTA } from "@/components/layout";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowLeft,
  CheckCircle2,
  Euro,
  Gem,
  HelpCircle,
  Info,
  Lightbulb,
  ListChecks,
  Package,
  Recycle,
  ShieldCheck,
  Sparkles,
  TrendingDown,
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const wertvollItems = [
  {
    kategorie: "Metalle & Schrott",
    items: ["Kupfer (Leitungen, Rohre, Kabel)", "Messing (Armaturen, Beschläge)", "Aluminium (Profile, Fensterrahmen)", "Edelstahl (Töpfe, Werkzeug)", "Blei (alte Rohre)"],
    wert: "Hoch",
    farbe: "text-green-600",
  },
  {
    kategorie: "Antiquitäten & Möbel",
    items: ["Massivholzmöbel (Eiche, Kirsche, Nuss)", "Designermöbel (Bauhaus, Thonet, Vitra)", "Antike Uhren und Standuhren", "Vitrinenschränke & Kommoden (Gründerzeit)", "Gemälde & Grafiken in Originalrahmen"],
    wert: "Mittel–Hoch",
    farbe: "text-yellow-600",
  },
  {
    kategorie: "Sammlerstücke",
    items: ["Porzellan & Meissener Geschirr", "Silberbesteck und Silberwaren", "Briefmarken- und Münzsammlungen", "Vintage-Spielzeug (Märklin, LEGO alt)", "Schallplattensammlungen"],
    wert: "Mittel",
    farbe: "text-yellow-600",
  },
  {
    kategorie: "Elektro & Technik",
    items: ["Alte Waschmaschinen & Kühlschränke (Schrottankauf)", "Kupferhaltiger Elektromotoren", "Vintage Hi-Fi-Anlagen (Thorens, Dual)", "Alte Kameras und Fotoapparate", "Werkzeug und Maschinen"],
    wert: "Niedrig–Mittel",
    farbe: "text-blue-600",
  },
  {
    kategorie: "Gold, Silber & Schmuck",
    items: ["Goldschmuck (Ringe, Ketten, Broschen)", "Silberschmuck und Tafelsilber", "Uhren (mechanisch, Markenuhr)", "Goldmünzen und Silbermünzen", "Zahngold"],
    wert: "Sehr hoch",
    farbe: "text-emerald-600",
  },
];

const ablaufSchritte = [
  {
    schritt: "1",
    titel: "Kontakt & Terminvereinbarung",
    text: "Sie melden sich telefonisch oder per Formular. Wir vereinbaren einen kostenlosen Besichtigungstermin bei Ihnen vor Ort — meist innerhalb von 24 Stunden.",
    icon: Euro,
  },
  {
    schritt: "2",
    titel: "Kostenlose Besichtigung",
    text: "Unser erfahrener Mitarbeiter besichtigt Ihre Immobilie und begutachtet alle vorhandenen Gegenstände sorgfältig. Dabei werden verwertbare Dinge identifiziert und bewertet.",
    icon: ListChecks,
  },
  {
    schritt: "3",
    titel: "Werteinschätzung",
    text: "Antiquitäten, Metalle, Schmuck und weitere werthaltige Gegenstände werden bewertet. Der ermittelte Marktwert wird transparent dokumentiert und offen kommuniziert.",
    icon: Gem,
  },
  {
    schritt: "4",
    titel: "Verbindliches Festpreisangebot",
    text: "Sie erhalten ein schriftliches Festpreisangebot, in dem der angerechnete Wert bereits abgezogen ist. Keine versteckten Kosten, keine Überraschungen.",
    icon: ShieldCheck,
  },
  {
    schritt: "5",
    titel: "Professionelle Durchführung",
    text: "Am Ausführungstag entrümpeln wir Ihre Immobilie komplett, sichern werthaltige Gegenstände fachgerecht und entsorgen alles andere umweltkonform.",
    icon: Package,
  },
  {
    schritt: "6",
    titel: "Besenreine Übergabe",
    text: "Nach Abschluss übergeben wir die Immobilie besenrein. Eventuelle Fundgegenstände werden selbstverständlich zurückgegeben — Transparenz ist uns wichtig.",
    icon: CheckCircle2,
  },
];

const faqs = [
  {
    frage: "Wie funktioniert die Wertanrechnung genau?",
    antwort: "Bei der Wertanrechnung bewerten wir vor der Entrümpelung alle noch verwertbaren Gegenstände — Antiquitäten, Metalle, Möbel, Schmuck usw. Der geschätzte Wiederverkaufswert dieser Dinge wird direkt vom Entrümpelungspreis abgezogen. Sie zahlen also weniger, weil wir mit den Erlösen aus den verwertbaren Gegenständen quersubventionieren.",
  },
  {
    frage: "Kann die Entrümpelung durch Wertanrechnung kostenlos werden?",
    antwort: "In seltenen Fällen ja — wenn sehr wertvolle Gegenstände vorhanden sind (z.B. hochwertige Antiquitäten, Gold, viel Buntmetall), kann der Wert die Entrümpelungskosten vollständig decken. Das ist jedoch die Ausnahme. In der Regel reduziert die Wertanrechnung Ihre Kosten um 10–40%.",
  },
  {
    frage: "Welche Gegenstände sind besonders wertvoll?",
    antwort: "Besonders werthaltig sind Buntmetalle (Kupfer, Messing, Bronze), Edelmetalle (Gold, Silber), hochwertige Antiquitäten, Meissener Porzellan, Designermöbel, Sammlermünzen und -briefmarken sowie funktionierende ältere Werkzeuge und Maschinen.",
  },
  {
    frage: "Muss ich wissen, was in meiner Wohnung noch wertvoll ist?",
    antwort: "Nein, das ist genau unsere Aufgabe. Unsere erfahrenen Mitarbeiter erkennen werthaltige Gegenstände häufig auf den ersten Blick. Viele Kunden sind überrascht, was am Ende einen Wert hat — oft Dinge, die vermeintlich 'alt und wertlos' aussehen.",
  },
  {
    frage: "Ist die Wertanrechnung seriös?",
    antwort: "Ja, wenn sie transparent und schriftlich im Angebot ausgewiesen wird. Seriöse Anbieter wie wir dokumentieren, welche Gegenstände welchen Wert haben und wie dieser Wert berechnet wurde. Lassen Sie sich immer ein schriftliches Festpreisangebot ausstellen.",
  },
  {
    frage: "Kann ich eigene Gegenstände vorher selbst verkaufen?",
    antwort: "Selbstverständlich! Sie können wertvolle Gegenstände jederzeit vor unserer Besichtigung selbst verkaufen (z.B. über eBay Kleinanzeigen). Das mindert die Grundlage für die Wertanrechnung, kann aber trotzdem sinnvoll sein, wenn Sie höhere Preise erzielen. Wir beraten Sie gerne, was sich lohnt.",
  },
  {
    frage: "Funktioniert Wertanrechnung auch bei Kellerentrümpelungen?",
    antwort: "Ja, auch beim Keller finden sich regelmäßig werthaltige Gegenstände: alte Werkzeuge, Kupferleitungen, Elektroschrott mit Buntmetallanteil oder alte Fahrräder. Die Wertanrechnung gilt für alle unsere Leistungen — Wohnungsentrümpelung, Kellerentrümpelung, Haushaltsauflösung oder Hofräumung.",
  },
  {
    frage: "Was passiert mit Gegenständen, deren Wert ich nicht einschätzen kann?",
    antwort: "Wenn Sie unsicher sind, ob etwas wertvoll ist (z.B. alte Gemälde, unbekannte Porzellanmarken), empfehlen wir, diese Gegenstände separat von einem Fachmann schätzen zu lassen, bevor wir mit der Entrümpelung beginnen. Wir helfen Ihnen dabei und haben ein Netzwerk an Sachverständigen.",
  },
];

const rechenbeispiel = {
  objektTyp: "3-Zimmer-Wohnung, 80 m²",
  entrümpelungskosten: 1800,
  gefundeneWerte: [
    { gegenstand: "Kupferleitungen (alte Heizung)", wert: 120 },
    { gegenstand: "Silberbesteck (12-teilig)", wert: 180 },
    { gegenstand: "Massivholzkommode (Gründerzeit)", wert: 250 },
    { gegenstand: "Vintage Werkzeugkoffer (komplett)", wert: 90 },
    { gegenstand: "Meissener Porzellanset", wert: 310 },
  ],
};

const gesamtWert = rechenbeispiel.gefundeneWerte.reduce((s, i) => s + i.wert, 0);
const endpreis = rechenbeispiel.entrümpelungskosten - gesamtWert;

export default function WertanrechnungPage() {
  useEffect(() => {
    document.title = "Wertanrechnung bei der Entrümpelung: So sparen Sie bis zu 40% | Stressfrei Entrümpelungen";
    let _canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!_canonical) { _canonical = document.createElement("link"); _canonical.setAttribute("rel", "canonical"); document.head.appendChild(_canonical); }
    _canonical.setAttribute("href", "https://stressfreientruempelungen.de/wertanrechnung-bei-der-entruempelung");
    const _setOgMeta = (prop: string, val: string) => { let m = document.querySelector(`meta[property="${prop}"]`) as HTMLMetaElement | null; if (!m) { m = document.createElement("meta"); m.setAttribute("property", prop); document.head.appendChild(m); } m.setAttribute("content", val); };
    _setOgMeta("og:title", "Wertanrechnung bei der Entrümpelung: So sparen Sie bis zu 40%");
    _setOgMeta("og:url", "https://stressfreientruempelungen.de/wertanrechnung-bei-der-entruempelung");
    _setOgMeta("og:image", "https://stressfreientruempelungen.de/images/blog/wertanrechnung-entruempelung-wertvoll-gegenstaende.webp");
    _setOgMeta("og:locale", "de_DE");
    _setOgMeta("og:type", "article");
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Wertanrechnung bei Entrümpelung & Haushaltsauflösung ✓ So funktioniert es ✓ Welche Gegenstände sind wertvoll ✓ Rechenbeispiel ✓ Bis zu 40% sparen ✓ Kostenlos anfragen");
    }
    const sw1Id = "schema-wert-1";
    let sw1 = document.getElementById(sw1Id) as HTMLScriptElement | null;
    if (!sw1) { sw1 = document.createElement("script"); sw1.type = "application/ld+json"; sw1.id = sw1Id; document.head.appendChild(sw1); }
    sw1.textContent = JSON.stringify({"@context":"https://schema.org","@type":"Article","headline":"Wertanrechnung bei der Entrümpelung: Wie Sie mit alten Schätzen bares Geld sparen","description":"Alles Wissenswerte zur Wertanrechnung bei Entrümpelung und Haushaltsauflösung. Welche Gegenstände sind wertvoll, wie läuft der Prozess ab und wie viel können Sie sparen?","url":"https://stressfreientruempelungen.de/wertanrechnung-bei-der-entruempelung","datePublished":"2026-03-19","dateModified":"2026-03-19","author":{"@type":"Organization","name":"Stressfrei Entrümpelungen & Umzüge","url":"https://stressfreientruempelungen.de"},"publisher":{"@type":"Organization","name":"Stressfrei Entrümpelungen & Umzüge","logo":{"@type":"ImageObject","url":"https://stressfreientruempelungen.de/favicon.webp"}},"image":"https://stressfreientruempelungen.de/images/blog/wertanrechnung-entruempelung-wertvoll-gegenstaende.webp","mainEntityOfPage":{"@type":"WebPage","@id":"https://stressfreientruempelungen.de/wertanrechnung-bei-der-entruempelung"},"keywords":"Wertanrechnung Entrümpelung, Wertanrechnung Haushaltsauflösung, Entrümpelung kostenlos, wertvolle Gegenstände Entrümpelung, Ankauf Entrümpelung","articleBody":"Wertanrechnung bedeutet: Verwertbare Gegenstände in Ihrem Haushalt werden vor der Entrümpelung bewertet und ihr Marktwert direkt vom Entrümpelungspreis abgezogen."});
    const sw2Id = "schema-wert-2";
    let sw2 = document.getElementById(sw2Id) as HTMLScriptElement | null;
    if (!sw2) { sw2 = document.createElement("script"); sw2.type = "application/ld+json"; sw2.id = sw2Id; document.head.appendChild(sw2); }
    sw2.textContent = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":faqs.map(f=>({"@type":"Question","name":f.frage,"acceptedAnswer":{"@type":"Answer","text":f.antwort}}))});
    return () => { [sw1Id, sw2Id].forEach(id => document.getElementById(id)?.remove()); };
  }, []);

  return (
    <PageLayout>
        <PageHero
          title="Wertanrechnung bei der Entrümpelung"
          subtitle="Wie alte Schätze Ihre Entrümpelungskosten senken — alles was Sie wissen müssen."
          highlight="Ratgeber"
        />

        {/* Breadcrumb */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-6 pb-2">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-primary transition-colors" style={{ textDecoration: "none" }}>Startseite</Link>
            <span>/</span>
            <Link href="/ratgeber" className="hover:text-primary transition-colors" style={{ textDecoration: "none" }}>Ratgeber</Link>
            <span>/</span>
            <span className="text-foreground font-medium">Wertanrechnung</span>
          </nav>
        </div>

        {/* Hero Image */}
        <section className="pb-8 sm:pb-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div {...fadeIn}>
              <img
                src="/images/blog/wertanrechnung-entruempelung-wertvoll-gegenstaende.webp"
                alt="Team bewertet wertvolle Gegenstände bei der Entrümpelung — Wertanrechnung erklärt"
                className="w-full rounded-2xl shadow-lg object-cover aspect-[16/9]"
                width={1200}
                height={675}
                loading="eager"
                data-testid="img-wertanrechnung-hero"
              />
            </motion.div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-10 sm:py-14">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <motion.div {...fadeIn} className="max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Viele Menschen fragen sich: <strong className="text-foreground">„Muss eine Entrümpelung wirklich so viel kosten?"</strong> Die gute Nachricht: Nein — denn in vielen Haushalten schlummern wertvolle Gegenstände, die den Preis deutlich senken können. Das Stichwort heißt <strong className="text-foreground">Wertanrechnung</strong>.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                In diesem ausführlichen Ratgeber erklären wir, wie die Wertanrechnung bei der{" "}
                <Link href="/entruempelung" className="text-primary hover:underline font-medium">Entrümpelung</Link> und{" "}
                <Link href="/haushaltsaufloesung" className="text-primary hover:underline font-medium">Haushaltsauflösung</Link> funktioniert, welche Gegenstände typischerweise angerechnet werden und wie Sie durch eine gute Vorbereitung noch mehr sparen können.
              </p>
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 flex gap-3">
                <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-foreground leading-relaxed m-0">
                  <strong>Auf einen Blick:</strong> Wertanrechnung bedeutet, dass der Marktwert noch verwertbarer Gegenstände direkt vom Entrümpelungspreis abgezogen wird. In der Praxis sparen unsere Kunden damit im Durchschnitt <strong>10–40 %</strong> der Gesamtkosten.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Was ist Wertanrechnung */}
        <section className="py-12 sm:py-16 bg-card/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div {...fadeIn} className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3" data-testid="text-was-ist">
                Was ist die Wertanrechnung?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Eine der häufigsten Fragen, die uns gestellt werden — und eine der wichtigsten Antworten, die wir geben können.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div {...fadeIn}>
                <div className="space-y-5 text-muted-foreground leading-relaxed">
                  <p>
                    Bei einer <strong className="text-foreground">Entrümpelung oder Haushaltsauflösung</strong> fallen nicht nur Kosten an — gleichzeitig befinden sich in den Räumen häufig Gegenstände, die noch einen Geldwert haben: alte Möbel, Metalle, Antiquitäten, Schmuck oder Sammlerstücke.
                  </p>
                  <p>
                    Die <strong className="text-foreground">Wertanrechnung</strong> ist das Prinzip, diesen Restmarktwert zu ermitteln und direkt von der Rechnung abzuziehen. Das professionelle Entrümpelungsunternehmen übernimmt die Verwertung dieser Gegenstände und gibt den erzielten (oder erwarteten) Erlös an den Kunden weiter — in Form eines günstigeren Preises.
                  </p>
                  <p>
                    Das ist kein Trick, sondern <strong className="text-foreground">eine faire und transparente Praxis</strong>: Der Entrümpler spart sich Entsorgungskosten, weil er werthaltige Dinge verkaufen kann — diesen Vorteil teilt er mit dem Kunden.
                  </p>
                  <p>
                    Im Unterschied zum reinen <strong className="text-foreground">Ankauf</strong> (bei dem Sie die Gegenstände einzeln verkaufen) erfolgt bei der Wertanrechnung alles in einem Schritt: Die Bewertung passiert vor Ort, der Abzug steht schriftlich im Angebot, und die Entrümpelung wird trotzdem vollständig durchgeführt.
                  </p>
                </div>
              </motion.div>
              <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.15 }}>
                <img
                  src="/images/blog/wertanrechnung-wertgegenstaende-ankauf.webp"
                  alt="Wertvolle Gegenstände bei der Haushaltsauflösung — Silberbesteck, Antiquitäten, Schmuck"
                  className="w-full rounded-xl shadow-md object-cover aspect-[4/3]"
                  width={600}
                  height={450}
                  loading="lazy"
                  data-testid="img-wertgegenstände"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Wertvoll Gegenstände */}
        <section className="py-12 sm:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div {...fadeIn} className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3" data-testid="text-wertvoll-title">
                Diese Gegenstände werden typischerweise angerechnet
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Die Bandbreite ist größer als die meisten erwarten. Hier sind die häufigsten Kategorien mit werthaltigen Gegenständen.
              </p>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {wertvollItems.map((item, i) => (
                <motion.div key={item.kategorie} {...fadeIn} transition={{ duration: 0.5, delay: i * 0.08 }}>
                  <Card className="p-5 h-full" data-testid={`card-wert-${i}`}>
                    <div className="flex items-center gap-2 mb-3">
                      <Gem className="w-5 h-5 text-primary flex-shrink-0" />
                      <h3 className="font-semibold text-foreground">{item.kategorie}</h3>
                    </div>
                    <ul className="space-y-1.5 mb-4">
                      {item.items.map((it) => (
                        <li key={it} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                          {it}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center gap-2 mt-auto pt-3 border-t border-border/50">
                      <span className="text-xs text-muted-foreground">Typischer Wert:</span>
                      <span className={`text-xs font-semibold ${item.farbe}`}>{item.wert}</span>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
            <motion.div {...fadeIn} className="mt-8 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/40 rounded-xl p-5 flex gap-3">
              <Lightbulb className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-foreground mb-1">Tipp: Nicht selbst entscheiden, was wertlos ist</p>
                <p className="text-sm text-muted-foreground">
                  Viele Kunden räumen werthaltige Dinge vorab weg, weil sie denken, diese seien nichts wert. Lassen Sie unser erfahrenes Team zuerst alles begutachten. Ein alter Kupfertopf, ein unscheinbares Silberbesteck oder ein angestaubtes Gemälde können mehr wert sein als gedacht.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Rechenbeispiel */}
        <section className="py-12 sm:py-16 bg-card/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <motion.div {...fadeIn}>
                <img
                  src="/images/blog/wertanrechnung-bewertung-ersparnisse.webp"
                  alt="Wertanrechnung Beispielrechnung — Bewertung und Ersparnis bei der Entrümpelung"
                  className="w-full rounded-xl shadow-md object-cover aspect-[4/3]"
                  width={600}
                  height={450}
                  loading="lazy"
                  data-testid="img-rechenbeispiel"
                />
              </motion.div>
              <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.15 }}>
                <div className="flex items-center gap-2 mb-4">
                  <Euro className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground" data-testid="text-beispiel-title">
                    Rechenbeispiel Wertanrechnung
                  </h2>
                </div>
                <p className="text-muted-foreground mb-5 leading-relaxed">
                  So sieht die Wertanrechnung in der Praxis aus — am Beispiel einer vollständigen{" "}
                  <Link href="/haushaltsaufloesung" className="text-primary hover:underline font-medium">Haushaltsauflösung</Link> einer 3-Zimmer-Wohnung im Rhein-Erft-Kreis:
                </p>
                <Card className="p-5">
                  <div className="text-sm font-medium text-muted-foreground mb-3">{rechenbeispiel.objektTyp}</div>
                  <div className="flex justify-between py-2 border-b border-border/50">
                    <span className="text-sm text-foreground">Reguläre Entrümpelungskosten</span>
                    <span className="text-sm font-semibold text-foreground">{rechenbeispiel.entrümpelungskosten.toLocaleString("de-DE")} €</span>
                  </div>
                  {rechenbeispiel.gefundeneWerte.map((item, i) => (
                    <div key={i} className="flex justify-between py-2 border-b border-border/30">
                      <span className="text-xs text-muted-foreground flex-1 pr-2">{item.gegenstand}</span>
                      <span className="text-xs font-medium text-green-600 flex-shrink-0">− {item.wert} €</span>
                    </div>
                  ))}
                  <div className="flex justify-between py-3 mt-1 bg-primary/5 rounded-lg px-3">
                    <span className="text-sm font-bold text-foreground flex items-center gap-1.5">
                      <TrendingDown className="w-4 h-4 text-green-600" />
                      Ihr Endpreis nach Wertanrechnung
                    </span>
                    <span className="text-lg font-bold text-primary">{endpreis.toLocaleString("de-DE")} €</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3 text-center">
                    Ersparnis: <strong className="text-green-600">{gesamtWert} € ({Math.round((gesamtWert / rechenbeispiel.entrümpelungskosten) * 100)} %)</strong>
                  </p>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Ablauf */}
        <section className="py-12 sm:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div {...fadeIn} className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3" data-testid="text-ablauf-title">
                So läuft die Wertanrechnung bei uns ab
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Von der ersten Anfrage bis zur besenreinen Übergabe — transparent, fair und stressfrei in 6 Schritten.
              </p>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {ablaufSchritte.map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.div key={s.schritt} {...fadeIn} transition={{ duration: 0.5, delay: i * 0.08 }}>
                    <Card className="p-5 h-full" data-testid={`card-ablauf-${i}`}>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0">
                          {s.schritt}
                        </div>
                        <h3 className="font-semibold text-foreground text-sm leading-snug">{s.titel}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{s.text}</p>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Vorher Nachher Bild */}
        <section className="py-6 sm:py-10 bg-card/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div {...fadeIn}>
              <img
                src="/images/blog/wertanrechnung-vorher-nachher-entruempelung.webp"
                alt="Vorher und nachher: Dachboden vor und nach der Entrümpelung mit Wertanrechnung"
                className="w-full rounded-2xl shadow-lg object-cover aspect-[16/9]"
                width={1200}
                height={675}
                loading="lazy"
                data-testid="img-vorher-nachher"
              />
              <p className="text-center text-xs text-muted-foreground mt-3">
                Vorher und nachher: Ein vollständig entrümpelter Dachboden nach professioneller Haushaltsauflösung mit Wertanrechnung
              </p>
            </motion.div>
          </div>
        </section>

        {/* Wertanrechnung vs Ankauf */}
        <section className="py-12 sm:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div {...fadeIn} className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3" data-testid="text-vergleich-title">
                Wertanrechnung vs. Ankauf: Was ist besser?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Beide Wege haben ihre Berechtigung — hier die Vor- und Nachteile im Vergleich.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div {...fadeIn}>
                <Card className="p-6 h-full border-primary/30 bg-primary/5" data-testid="card-wertanrechnung">
                  <div className="flex items-center gap-2 mb-4">
                    <Recycle className="w-6 h-6 text-primary" />
                    <h3 className="text-lg font-bold text-foreground">Wertanrechnung beim Entrümpler</h3>
                  </div>
                  <ul className="space-y-3">
                    {[
                      "Alles aus einer Hand — ein Ansprechpartner",
                      "Kein Aufwand für den Kunden",
                      "Schnelle Abwicklung in einem Termin",
                      "Festpreis inklusive Wertabzug — keine Überraschungen",
                      "Auch für schwer verkäufliche Gegenstände",
                      "Besenreine Übergabe garantiert",
                    ].map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{p}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
              <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.1 }}>
                <Card className="p-6 h-full" data-testid="card-ankauf">
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="w-6 h-6 text-accent" />
                    <h3 className="text-lg font-bold text-foreground">Selbst verkaufen (Ankauf / eBay)</h3>
                  </div>
                  <ul className="space-y-3">
                    {[
                      "Potenziell höhere Erlöse bei sehr wertvollen Stücken",
                      "Volle Kontrolle über den Verkaufspreis",
                      "Zeit und Aufwand: Fotografieren, Inserieren, Versand",
                      "Ungeeignet für viele Gegenstände (sperrig, wenig Nachfrage)",
                      "Entrümpelung separat beauftragen nötig",
                      "Kein Festpreis — Unsicherheit bis zum Schluss",
                    ].map((p, i) => (
                      <li key={p} className={`flex items-start gap-2 text-sm ${i >= 1 ? "text-muted-foreground" : "text-foreground"}`}>
                        {i === 0 ? (
                          <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        ) : (
                          <Info className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                        )}
                        {p}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            </div>
            <motion.div {...fadeIn} className="mt-6 bg-card border rounded-xl p-5 max-w-3xl mx-auto text-center">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Unser Tipp:</strong> Verkaufen Sie vorab nur Dinge, bei denen Sie sicher einen deutlich höheren Preis als den Schätzwert erzielen können (z.B. seltene Sammlerstücke mit Liebhaber-Community). Für den Rest gilt: Wertanrechnung spart Zeit, Nerven und oft sogar mehr Geld als erwartet.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Tipps zur Vorbereitung */}
        <section className="py-12 sm:py-16 bg-card/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div {...fadeIn} className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3" data-testid="text-tipps-title">
                So bereiten Sie sich optimal vor
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Mit diesen Tipps holen Sie das Maximum aus Ihrer Wertanrechnung heraus.
              </p>
            </motion.div>
            <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
              {[
                {
                  nr: "01",
                  titel: "Nichts vorher wegwerfen oder verschenken",
                  text: "Der häufigste Fehler: Kunden verschenken oder entsorgen Gegenstände vorab, die einen Wert gehabt hätten. Lassen Sie alles liegen, bis unser Team es begutachtet hat.",
                },
                {
                  nr: "02",
                  titel: "Zugang zu allen Räumen ermöglichen",
                  text: "Keller, Dachboden, Garage, Abstellräume — überall können Schätze schlummern. Sorgen Sie dafür, dass alle Bereiche zugänglich sind, wenn wir zur Besichtigung kommen.",
                },
                {
                  nr: "03",
                  titel: "Fragen Sie nach Zertifikaten und Herkunftsnachweisen",
                  text: "Haben Sie Unterlagen zu Antiquitäten, Gemälden oder Schmuck? Echtheits- und Herkunftsnachweise erhöhen den Wert erheblich. Suchen Sie diese rechtzeitig heraus.",
                },
                {
                  nr: "04",
                  titel: "Informieren Sie sich über offensichtlich Wertvolles",
                  text: "Wenn Sie ein bestimmtes Stück für besonders wertvoll halten (z.B. ein Gemälde eines bekannten Künstlers), lassen Sie es im Zweifelsfall vor der Entrümpelung separat schätzen.",
                },
                {
                  nr: "05",
                  titel: "Vergleichen Sie Angebote",
                  text: "Holen Sie bei teuren Objekten zwei bis drei Angebote ein. Unterschiedliche Unternehmen können denselben Gegenstand unterschiedlich bewerten. Das schützt Sie vor unfairen Einschätzungen.",
                },
                {
                  nr: "06",
                  titel: "Bestehen Sie auf ein schriftliches Angebot",
                  text: "Seriöse Anbieter listen im Angebot transparent auf, welche Gegenstände mit welchem Wert angerechnet wurden. Akzeptieren Sie keine mündlichen Zusagen — alles schriftlich!",
                },
              ].map((tipp, i) => (
                <motion.div key={tipp.nr} {...fadeIn} transition={{ duration: 0.5, delay: i * 0.07 }}>
                  <Card className="p-5 h-full" data-testid={`card-tipp-${i}`}>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl font-black text-primary/20 leading-none flex-shrink-0">{tipp.nr}</span>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{tipp.titel}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{tipp.text}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 sm:py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <motion.div {...fadeIn} className="text-center mb-10">
              <div className="inline-flex items-center gap-2 mb-3">
                <HelpCircle className="w-6 h-6 text-primary" />
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground" data-testid="text-faq-title">
                  Häufige Fragen zur Wertanrechnung
                </h2>
              </div>
              <p className="text-muted-foreground">
                Alles was Sie wissen müssen — beantwortet von unseren Experten.
              </p>
            </motion.div>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <motion.div key={i} {...fadeIn} transition={{ duration: 0.4, delay: i * 0.06 }}>
                  <Card className="p-5" data-testid={`card-faq-${i}`}>
                    <h3 className="font-semibold text-foreground mb-2 flex items-start gap-2">
                      <span className="text-primary font-bold flex-shrink-0">F:</span>
                      {faq.frage}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed pl-5">{faq.antwort}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Interne Links */}
        <section className="py-10 sm:py-14 bg-card/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div {...fadeIn} className="text-center mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2">Weiterführende Informationen</h2>
              <p className="text-muted-foreground">Alles rund um Entrümpelung und Haushaltsauflösung</p>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {[
                { label: "Entrümpelung — Leistungen & Preise", href: "/entruempelung", desc: "Alle Leistungen, Preise und Ablauf auf einen Blick" },
                { label: "Haushaltsauflösung", href: "/haushaltsaufloesung", desc: "Komplette Auflösung von Haushalten aller Größen" },
                { label: "Kellerentrümpelung", href: "/kellerentruempelung", desc: "Keller, Dachboden, Garage — besenrein geräumt" },
                { label: "Wohnungsauflösung", href: "/wohnungsaufloesung", desc: "Professionelle Auflösung mit besenreiner Übergabe" },
                { label: "Kosten & Rechner", href: "/kosten-entruempelung", desc: "Berechnen Sie Ihren ungefähren Preis online" },
                { label: "Schrottankauf", href: "/schrottankauf", desc: "Metall- und Schrottankauf zu fairen Tagespreisen" },
              ].map((link, i) => (
                <motion.div key={link.href} {...fadeIn} transition={{ duration: 0.4, delay: i * 0.05 }}>
                  <Link href={link.href} style={{ textDecoration: "none" }}>
                    <Card className="p-4 hover:border-primary/40 hover:bg-primary/5 transition-colors cursor-pointer h-full" data-testid={`link-intern-${i}`}>
                      <p className="text-sm font-semibold text-foreground mb-1">{link.label}</p>
                      <p className="text-xs text-muted-foreground">{link.desc}</p>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Zurück & CTA */}
        <section className="py-8 sm:py-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 flex justify-start">
            <Link
              href="/ratgeber"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              style={{ textDecoration: "none" }}
              data-testid="link-back-ratgeber"
            >
              <ArrowLeft className="w-4 h-4" />
              Zurück zum Ratgeber
            </Link>
          </div>
        </section>

        <BlogArticleCTA />
      <CTASection
          title="Kostenlose Werteinschätzung anfragen"
          subtitle="Lassen Sie Ihre Immobilie kostenlos besichtigen und erfahren Sie, wie viel Ihre Gegenstände wert sind — und wie viel Sie durch Wertanrechnung sparen können."
        />
      </PageLayout>
  );
}
