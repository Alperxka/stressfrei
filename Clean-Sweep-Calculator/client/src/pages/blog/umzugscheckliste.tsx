import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { PageLayout, PageHero, CTASection, BlogArticleCTA } from "@/components/layout";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  CheckCircle2,
  CheckSquare,
  Square,
  Calendar,
  Truck,
  Home,
  Phone,
  FileText,
  Package,
  Lightbulb,
  HelpCircle,
  ClipboardList,
  Download,
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const phasen = [
  {
    titel: "8 Wochen vor dem Umzug",
    icon: Calendar,
    farbe: "bg-blue-500",
    aufgaben: [
      "Umzugsfirmen vergleichen & Angebote einholen",
      "Wunschtermin festlegen und Urlaub beantragen",
      "Wohnung / Haus kündigen (Kündigungsfristen prüfen!)",
      "Neue Wohnung absichern (Schlüssel, Übergabetermin)",
      "Einlagerungsmöglichkeiten prüfen (bei Zeitlücke zwischen Alt- und Neuwohnung)",
      "Inventarliste erstellen: Was kommt mit, was wird entsorgt?",
      "Sperrmüll-/Entrümpelung frühzeitig beauftragen",
    ],
  },
  {
    titel: "4 Wochen vor dem Umzug",
    icon: Package,
    farbe: "bg-amber-500",
    aufgaben: [
      "Ummeldung bei der Stadt vormerken (frühestens 1 Woche vorher möglich)",
      "Nachsendeauftrag bei der Post einrichten",
      "Strom, Gas, Internet am neuen Standort ummelden / anmelden",
      "Bank, Versicherungen, Arbeitgeber über neue Adresse informieren",
      "Kita, Schule, Arzt über Wohnortwechsel informieren",
      "Umzugskartons besorgen (ca. 1 Karton pro m² Wohnfläche)",
      "Verpackungsmaterial besorgen: Luftpolsterfolie, Packpapier, Klebeband",
      "Schwere und sperrige Möbel messen und in Grundriss der neuen Wohnung einplanen",
    ],
  },
  {
    titel: "2 Wochen vor dem Umzug",
    icon: Home,
    farbe: "bg-violet-500",
    aufgaben: [
      "Mit dem Einpacken beginnen (mit selten genutzten Zimmern starten)",
      "Kartons beschriften: Raum + kurze Inhaltsbeschreibung + Handlinghinweis (zerbrechlich!)",
      "Halteverbotszone beim Ordnungsamt beantragen (Umzugs-LKW braucht Platz)",
      "Kinderbetreuung und Tierhüter für den Umzugstag organisieren",
      "Helfer koordinieren (falls kein Vollservice gebucht)",
      "Kühlschrank leeren und abtauen lassen",
      "Pflanzen umtopfen, empfindliche Pflanzen besonders verpacken",
      "Arzneimittel, Dokumente, Wertsachen gesondert einpacken",
    ],
  },
  {
    titel: "Am Tag vor dem Umzug",
    icon: Truck,
    farbe: "bg-orange-500",
    aufgaben: [
      "Letzte Kartons packen und versiegeln",
      "Persönliche Tasche für den Umzugstag packen (Wichtiges griffbereit halten)",
      "Wertvolle Gegenstände und Dokumente persönlich transportieren",
      "Zählerstände in der alten Wohnung ablesen und fotografieren",
      "Halteverbotszone prüfen (Schilder aufgestellt?)",
      "Umzugsfirma nochmals bestätigen",
      "Snacks und Getränke für den Umzugstag vorbereiten",
    ],
  },
  {
    titel: "Am Umzugstag",
    icon: CheckCircle2,
    farbe: "bg-green-500",
    aufgaben: [
      "Umzugsfirma empfangen und Wohnung zeigen",
      "Besonders wertvolle / zerbrechliche Stücke kennzeichnen",
      "Zählerstände in der neuen Wohnung fotografieren",
      "Möbel und Kartons in richtige Räume dirigieren (Beschriftung nutzen!)",
      "Schlüsselübergabe alte Wohnung durchführen — Übergabeprotokoll erstellen",
      "Alte Wohnung übergeben: Endzustand dokumentieren (Fotos!)",
      "Besenreine Übergabe sicherstellen (oder Reinigung beauftragen)",
    ],
  },
  {
    titel: "Nach dem Umzug",
    icon: FileText,
    farbe: "bg-primary",
    aufgaben: [
      "Ummeldung beim Einwohnermeldeamt (Pflicht innerhalb von 2 Wochen!)",
      "Führerschein und Fahrzeugpapiere neue Adresse eintragen lassen",
      "Rundfunkbeitrag (GEZ) Adressänderung melden",
      "Finanzamt über Umzug informieren",
      "Rechnungen, Abonnements auf neue Adresse aktualisieren",
      "Neue Wohnung auf Schäden prüfen und protokollieren",
      "Internet-/Telefonanschluss in Betrieb nehmen",
      "Notfallnummern für neue Umgebung abspeichern",
    ],
  },
];

const tipps = [
  {
    titel: "Früh starten lohnt sich",
    text: "Wer 8 Wochen vorher anfängt, spart sich Stress, kann günstigere Umzugsfirmen finden und hat Zeit für alles Unerwartete.",
  },
  {
    titel: "Kartons richtig beschriften",
    text: "Schreiben Sie immer den Zielraum nach oben. Optional: eine Zahl auf jeden Karton und eine Liste, was drin ist. Das spart beim Auspacken enorm Zeit.",
  },
  {
    titel: "Selten benutzte Sachen zuerst",
    text: "Starten Sie mit Büchern, Weihnachtsdekoraion, Keller und Abstellkammer. So können Sie täglich ein wenig packen, ohne im Chaos zu leben.",
  },
  {
    titel: "Halteverbot rechtzeitig beantragen",
    text: "Ein Halteverbot braucht 3–7 Werktage Vorlaufzeit. Ohne reservierten Parkplatz muss der LKW manchmal weit entfernt halten — das kostet viel Zeit.",
  },
  {
    titel: "Fotos beim Auszug machen",
    text: "Fotografieren Sie jeden Raum der alten Wohnung beim Auszug. Das schützt Sie bei Streitigkeiten über Schäden mit dem Vermieter.",
  },
  {
    titel: "Kühlschrank 24h vorher abtauen",
    text: "Ein nicht aufgetauter Kühlschrank kann beim Transport auslaufen und Schäden an anderen Möbeln verursachen.",
  },
];

const faqs = [
  {
    frage: "Wie viele Umzugskartons brauche ich?",
    antwort: "Als Faustregel gilt: etwa 1 Karton pro m² Wohnfläche. Für eine 60m²-Wohnung also ca. 60 Kartons. Bücher benötigen mehr (schwere, kleine Kartons), Kleidung weniger.",
  },
  {
    frage: "Wie früh muss ich Umzugsfirmen anfragen?",
    antwort: "Im Idealfall 4–6 Wochen vorher. In der Hochsaison (April–Oktober, besonders Monatsende) sind gute Firmen schnell ausgebucht. Je früher, desto besser — und oft günstiger.",
  },
  {
    frage: "Muss ich mich ummelden, wenn ich innerhalb derselben Stadt ziehe?",
    antwort: "Ja! Auch bei einem Umzug innerhalb derselben Stadt müssen Sie sich beim Einwohnermeldeamt ummelden. Die Frist beträgt 2 Wochen nach dem Einzug.",
  },
  {
    frage: "Was gehört in die persönliche Tasche für den Umzugstag?",
    antwort: "Wichtige Dokumente, Medikamente, Ladekabel, Wechselkleidung, Toilettenartikel, Snacks & Getränke, und alles, was Sie in den ersten 24 Stunden in der neuen Wohnung brauchen.",
  },
  {
    frage: "Kann ich Umzug und Entrümpelung kombinieren?",
    antwort: "Ja, und das lohnt sich! Wenn Sie vor dem Umzug entrümpeln, haben die Möbelpacker weniger zu transportieren — das spart Geld. Wir bieten Kombi-Pakete aus Entrümpelung und Umzug an.",
  },
];

export default function UmzugschecklistePage() {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

  const toggleItem = (key: string) => {
    setCheckedItems((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  const totalItems = phasen.reduce((s, p) => s + p.aufgaben.length, 0);
  const checkedCount = checkedItems.size;
  const progress = Math.round((checkedCount / totalItems) * 100);

  useEffect(() => {
    document.title = "Umzugscheckliste 2026: Schritt für Schritt zum stressfreien Umzug | Stressfrei";
    let _canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!_canonical) { _canonical = document.createElement("link"); _canonical.setAttribute("rel", "canonical"); document.head.appendChild(_canonical); }
    _canonical.setAttribute("href", "https://stressfreientruempelungen.de/umzugscheckliste");
    const _setOgMeta = (prop: string, val: string) => { let m = document.querySelector(`meta[property="${prop}"]`) as HTMLMetaElement | null; if (!m) { m = document.createElement("meta"); m.setAttribute("property", prop); document.head.appendChild(m); } m.setAttribute("content", val); };
    _setOgMeta("og:url", "https://stressfreientruempelungen.de/umzugscheckliste");
    _setOgMeta("og:image", "https://stressfreientruempelungen.de/images/umzugscheckliste-hero.webp");
    _setOgMeta("og:locale", "de_DE");
    _setOgMeta("og:type", "article");
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Kostenlose Umzugscheckliste 2026 mit 40+ Aufgaben in 6 Phasen — von 8 Wochen vorher bis nach dem Umzug. Interaktiv abhaken, nichts vergessen.");
    const su1Id = "schema-umzug-1";
    let su1 = document.getElementById(su1Id) as HTMLScriptElement | null;
    if (!su1) { su1 = document.createElement("script"); su1.type = "application/ld+json"; su1.id = su1Id; document.head.appendChild(su1); }
    su1.textContent = JSON.stringify({"@context":"https://schema.org","@type":"HowTo","name":"Umzugscheckliste: So planen Sie Ihren Umzug Schritt für Schritt","description":"Vollständige Umzugscheckliste mit allen Aufgaben von 8 Wochen vorher bis nach dem Umzug.","url":"https://stressfreientruempelungen.de/umzugscheckliste","image":"https://stressfreientruempelungen.de/images/umzugscheckliste-hero.webp","totalTime":"PT8W","step":phasen.map((p,i)=>({"@type":"HowToStep","position":i+1,"name":p.titel,"itemListElement":p.aufgaben.map((a,j)=>({"@type":"HowToDirection","position":j+1,"text":a}))})),"author":{"@type":"Organization","name":"Stressfrei Entrümpelungen & Umzüge"}});
    const su2Id = "schema-umzug-2";
    let su2 = document.getElementById(su2Id) as HTMLScriptElement | null;
    if (!su2) { su2 = document.createElement("script"); su2.type = "application/ld+json"; su2.id = su2Id; document.head.appendChild(su2); }
    su2.textContent = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":faqs.map(f=>({"@type":"Question","name":f.frage,"acceptedAnswer":{"@type":"Answer","text":f.antwort}}))});
    return () => { [su1Id, su2Id].forEach(id => document.getElementById(id)?.remove()); };
  }, []);

  return (
    <PageLayout>
        <PageHero
          title="Umzugscheckliste 2026"
          subtitle="Alle Aufgaben von 8 Wochen vorher bis nach dem Umzug — interaktiv abhaken, nichts vergessen."
          highlight="Ratgeber"
        />

        <section className="py-4 sm:py-6">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-primary transition-colors" style={{ textDecoration: "none" }}>Startseite</Link>
              <span>/</span>
              <Link href="/ratgeber" className="hover:text-primary transition-colors" style={{ textDecoration: "none" }}>Ratgeber</Link>
              <span>/</span>
              <span className="text-foreground font-medium">Umzugscheckliste</span>
            </nav>
          </div>
        </section>

        <section className="pb-6 sm:pb-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div {...fadeIn}>
              <img
                src="/images/umzugscheckliste-hero.webp"
                alt="Umzugscheckliste — organisierter Umzug mit Kartons und Checkliste"
                className="w-full rounded-2xl shadow-lg object-cover aspect-[16/9]"
                width={1200} height={675} loading="eager"
                data-testid="img-checkliste-hero"
              />
            </motion.div>
          </div>
        </section>

        {/* Fortschrittsanzeige */}
        <section className="py-6 sm:py-8 bg-card/50 sticky top-16 z-30 border-b border-border/50 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <ClipboardList className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-foreground">Ihr Fortschritt</p>
                  <p className="text-xs text-muted-foreground">{checkedCount} von {totalItems} Aufgaben erledigt</p>
                </div>
              </div>
              <div className="flex-1 max-w-xs">
                <div className="h-2.5 bg-border rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                    data-testid="progress-bar"
                  />
                </div>
              </div>
              <span className="text-sm font-bold text-primary flex-shrink-0" data-testid="text-progress">{progress}%</span>
            </div>
          </div>
        </section>

        {/* Phasen */}
        <section className="py-10 sm:py-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
            {phasen.map((phase, pi) => {
              const Icon = phase.icon;
              const phaseChecked = phase.aufgaben.filter((_, ai) => checkedItems.has(`${pi}-${ai}`)).length;
              return (
                <motion.div key={pi} {...fadeIn} transition={{ duration: 0.5, delay: pi * 0.06 }}>
                  <Card className="overflow-hidden" data-testid={`card-phase-${pi}`}>
                    <div className={`${phase.farbe} px-5 py-4 flex items-center justify-between`}>
                      <div className="flex items-center gap-3">
                        <Icon className="w-5 h-5 text-white" />
                        <h2 className="text-white font-bold text-base sm:text-lg">{phase.titel}</h2>
                      </div>
                      <span className="text-white/80 text-sm font-medium">{phaseChecked}/{phase.aufgaben.length}</span>
                    </div>
                    <div className="divide-y divide-border/50">
                      {phase.aufgaben.map((aufgabe, ai) => {
                        const key = `${pi}-${ai}`;
                        const done = checkedItems.has(key);
                        return (
                          <button
                            key={key}
                            onClick={() => toggleItem(key)}
                            className={`w-full flex items-start gap-3 px-5 py-3.5 text-left hover:bg-muted/30 transition-colors ${done ? "bg-green-50 dark:bg-green-950/20" : ""}`}
                            data-testid={`item-${key}`}
                            aria-pressed={done}
                          >
                            {done
                              ? <CheckSquare className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                              : <Square className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                            }
                            <span className={`text-sm leading-relaxed ${done ? "line-through text-muted-foreground" : "text-foreground"}`}>
                              {aufgabe}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Tipps */}
        <section className="py-12 sm:py-16 bg-card/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div {...fadeIn} className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">Profi-Tipps für einen reibungslosen Umzug</h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {tipps.map((t, i) => (
                <motion.div key={i} {...fadeIn} transition={{ duration: 0.4, delay: i * 0.07 }}>
                  <Card className="p-5 h-full" data-testid={`card-tipp-${i}`}>
                    <div className="flex items-start gap-3">
                      <Lightbulb className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-1 text-sm">{t.titel}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{t.text}</p>
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
            <motion.div {...fadeIn} className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 flex items-center justify-center gap-2">
                <HelpCircle className="w-6 h-6 text-primary" />
                Häufige Fragen zum Umzug
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
            <motion.div {...fadeIn} className="text-center mb-6">
              <h2 className="text-xl font-bold text-foreground mb-2">Weiterführende Informationen</h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                { label: "Umzugskosten berechnen", href: "/kosten-umzug", desc: "Kostenrechner für Ihren Umzug" },
                { label: "Privatumzug", href: "/privatumzug", desc: "Professionelle Umzugshilfe" },
                { label: "Seniorenumzug", href: "/seniorenumzug", desc: "Seniorengerechter Umzugsservice" },
                { label: "Entrümpelung vorher", href: "/entruempelung", desc: "Vor dem Umzug ausmisten" },
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

        <BlogArticleCTA topic="Umzug" />
      <CTASection title="Umzug planen — wir helfen!" subtitle="Kostenloses Angebot für Ihren Umzug im Rhein-Erft-Kreis — inkl. Entrümpelung auf Wunsch." />
      </PageLayout>
  );
}
