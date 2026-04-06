import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { PageLayout, PageHero, CTASection, BlogArticleCTA } from "@/components/layout";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowLeft,
  CheckCircle2,
  CheckSquare,
  ClipboardList,
  Clock,
  Euro,
  FileText,
  Heart,
  Home,
  Phone,
  Square,
  Trash2,
  Truck,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const checklistPhasen = [
  {
    phase: "4–6 Wochen vorher",
    icon: Clock,
    items: [
      "Zuständigkeiten klären: Wer ist Erbe, wer hat Zugang zur Wohnung?",
      "Testament und Erbschein prüfen — wichtig für Befugnis zur Auflösung",
      "Mietvertrag kündigen oder Vermietung informieren (Übergabetermin festlegen)",
      "Überblick über den Umfang verschaffen: Wohnfläche, Etagen, Keller, Dachboden",
      "Angebote von Entrümpelungsfirmen einholen (mindestens 2–3 Vergleiche)",
      "Wertgegenstände identifizieren: Schmuck, Antiquitäten, Bargeld, Dokumente",
      "Digitale Konten und Abonnements (Streaming, Strom, Internet) kündigen",
    ],
  },
  {
    phase: "2–4 Wochen vorher",
    icon: ClipboardList,
    items: [
      "Familienmitglieder koordinieren: Wer möchte welche Gegenstände behalten?",
      "Spenden: Kleidung, Bücher, Möbel zu Sozialkaufhäusern oder Caritas bringen",
      "Verkauf: Ebay Kleinanzeigen, Flohmarkt oder Antiquitätenhändler kontaktieren",
      "Behörden informieren: Einwohnermeldeamt, Rentenversicherung, Versicherungen",
      "Post umleiten oder Nachsendeauftrag bei der Post einrichten",
      "Schlüssel organisieren: Alle Kopien sammeln für Übergabe",
      "Elektro- und Gasanbieter: Zählerstand ablesen, Kündigung vorbereiten",
    ],
  },
  {
    phase: "1 Woche vorher",
    icon: Home,
    items: [
      "Termin mit Entrümpelungsfirma bestätigen",
      "Persönliche Dokumente sicherstellen: Pass, Geburtsurkunde, Sparbücher, Versicherungen",
      "Kühlschrank und Gefriertruhe leeren und abtauen",
      "Eigene Entnahmen abschließend erledigen",
      "Fahrzeug oder Zugangsmöglichkeiten für die Firma klären",
      "Nachbarn informieren (besonders bei gemeinschaftlichen Bereichen wie Keller/Garage)",
    ],
  },
  {
    phase: "Am Räumungstag",
    icon: Trash2,
    items: [
      "Ansprechperson vor Ort sein oder Schlüssel übergeben",
      "Räume freigeben und Zugang zu Keller, Dachboden, Garage sicherstellen",
      "Wertgegenstände vorher entnehmen und sichern",
      "Übergabe besenrein dokumentieren (Fotos!)",
      "Protokoll und Rechnung entgegennehmen",
    ],
  },
  {
    phase: "Nach der Haushaltsauflösung",
    icon: FileText,
    items: [
      "Wohnungsübergabe an Vermieter mit Schlüsselübergabe",
      "Endabrechnung Strom, Gas, Wasser veranlassen",
      "Bankkonten des Verstorbenen auflösen (Erbschein nötig)",
      "Steuerliche Pflichten prüfen (ggf. letzte Steuererklärung)",
      "Kosten der Haushaltsauflösung steuerlich absetzen (als Werbungskosten oder haushaltsnahe Dienstleistung)",
      "Abschließende Konten und Abos checken",
    ],
  },
];

const kostenFactors = [
  { factor: "Wohnfläche", desc: "Der wichtigste Kostentreiber. Je größer, desto mehr Arbeitszeit und Entsorgungsvolumen." },
  { factor: "Füllgrad", desc: "Stark möblierte oder vermüllte Wohnungen kosten mehr als bereits ausgeräumte." },
  { factor: "Stockwerk & Aufzug", desc: "4. OG ohne Aufzug = mehr Arbeitszeit = höhere Kosten." },
  { factor: "Sondermüll", desc: "Asbest, Altöl, Farben und Elektroschrott erfordern aufwändigere Entsorgung." },
  { factor: "Wertanrechnung", desc: "Verwertbare Möbel, Antiquitäten, Metalle können den Preis deutlich reduzieren." },
];

const faqs = [
  {
    q: "Wer darf eine Haushaltsauflösung beauftragen?",
    a: "In der Regel die gesetzlichen Erben, der Testamentsvollstrecker oder Bevollmächtigte. Bei einer gemieteten Wohnung benötigen Sie die Zustimmung des Vermieters oder einen entsprechenden Mietvertrag. Mit einem Erbschein können Sie die meisten Behörden und Dienstleister problemlos beauftragen.",
  },
  {
    q: "Kann man die Kosten einer Haushaltsauflösung von der Steuer absetzen?",
    a: "Ja. Als haushaltsnahe Dienstleistung können Sie 20 % der Lohnkosten (max. 4.000 €/Jahr) steuerlich geltend machen. Bei Erbschaftssteuer können die Kosten der Nachlassregelung als Nachlassverbindlichkeiten abgezogen werden. Lassen Sie sich von uns eine ordentliche Rechnung ausstellen.",
  },
  {
    q: "Was passiert mit Gegenständen, die noch einen Wert haben?",
    a: "Wir prüfen im Rahmen der Wertanrechnung, welche Gegenstände noch verwertbar sind — Möbel, Antiquitäten, Schmuck, Altmetall, Elektrogeräte. Der ermittelte Wert wird direkt vom Entrümpelungspreis abgezogen. So kann eine Haushaltsauflösung deutlich günstiger werden.",
  },
  {
    q: "Wie lange dauert eine komplette Haushaltsauflösung?",
    a: "Eine durchschnittliche 3-Zimmer-Wohnung räumen wir mit einem 3-Mann-Team innerhalb eines Tages aus. Größere Objekte (Einfamilienhaus, Mehrfamilienhaus) können 2–3 Tage dauern. Sie bekommen von uns eine genaue Einschätzung nach der Besichtigung.",
  },
  {
    q: "Wie läuft die Zusammenarbeit mit einer Entrümpelungsfirma ab?",
    a: "Nach Ihrer Anfrage kommen wir zur kostenlosen Besichtigung, schätzen den Umfang und geben Ihnen ein verbindliches Festpreisangebot. Nach Ihrer Zusage vereinbaren wir einen Termin — oft innerhalb von 1–2 Tagen. Am Räumungstag erledigen wir alles: Ausräumen, Sortieren, Entsorgen und besenreine Übergabe.",
  },
];

export default function HaushaltsaufloesungChecklistePage() {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

  const toggleItem = (key: string) => {
    setCheckedItems(prev => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key); else next.add(key);
      return next;
    });
  };

  useEffect(() => {
    document.title = "Haushaltsauflösung Checkliste 2026 | Schritt-für-Schritt | Stressfrei";

    const setMeta = (name: string, content: string, prop?: boolean) => {
      const sel = prop ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let el = document.querySelector(sel) as HTMLMetaElement | null;
      if (!el) { el = document.createElement("meta"); prop ? el.setAttribute("property", name) : el.setAttribute("name", name); document.head.appendChild(el); }
      el.content = content;
    };
    const desc = "Haushaltsauflösung Checkliste: Alle Schritte — von 6 Wochen vorher bis zur Wohnungsübergabe. Kostenübersicht, Steuertipps & professionelle Hilfe im Rhein-Erft-Kreis.";
    setMeta("description", desc);
    setMeta("robots", "index, follow");
    setMeta("og:title", "Haushaltsauflösung Checkliste 2026 | Schritt-für-Schritt Anleitung", true);
    setMeta("og:description", desc, true);
    setMeta("og:url", "https://stressfreientruempelungen.de/haushaltsaufloesung-checkliste", true);
    setMeta("og:type", "article", true);
    setMeta("og:image", "https://stressfreientruempelungen.de/images/og-image.jpg", true);
    setMeta("og:image:width", "1200", true);
    setMeta("og:image:height", "630", true);
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", "Haushaltsauflösung Checkliste 2026");
    setMeta("twitter:description", desc);

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) { canonical = document.createElement("link"); canonical.rel = "canonical"; document.head.appendChild(canonical); }
    canonical.href = "https://stressfreientruempelungen.de/haushaltsaufloesung-checkliste";

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    };
    const howToSchema = {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: "Haushaltsauflösung: Schritt für Schritt",
      description: "Wie Sie eine Haushaltsauflösung professionell planen und durchführen",
      step: checklistPhasen.map((p, i) => ({
        "@type": "HowToStep",
        position: i + 1,
        name: p.phase,
        itemListElement: p.items.map(item => ({ "@type": "HowToDirection", text: item })),
      })),
    };
    [faqSchema, howToSchema].forEach((schema, i) => {
      const id = `checkliste-schema-${i}`;
      let el = document.getElementById(id) as HTMLScriptElement | null;
      if (!el) { el = document.createElement("script"); el.type = "application/ld+json"; el.id = id; document.head.appendChild(el); }
      el.textContent = JSON.stringify(schema);
    });
    return () => { [0, 1].forEach(i => document.getElementById(`checkliste-schema-${i}`)?.remove()); };
  }, []);

  const totalItems = checklistPhasen.reduce((sum, p) => sum + p.items.length, 0);
  const checkedCount = checkedItems.size;
  const progress = Math.round((checkedCount / totalItems) * 100);

  return (
    <PageLayout>
      <PageHero
        title="Haushaltsauflösung Checkliste"
        subtitle="Schritt-für-Schritt-Anleitung für eine stressfreie Haushaltsauflösung — 2026"
        highlight="Checkliste"
      >
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 mt-6 justify-center items-center">
          <Button size="lg" asChild className="w-full sm:w-auto !whitespace-normal h-auto py-3" data-testid="button-hero-call">
            <a href="tel:+4922715880940"><Phone className="w-4 h-4 mr-2" /> Professionelle Hilfe anfragen</a>
          </Button>
        </div>
      </PageHero>

      <nav aria-label="Brotkrumenpfad" className="bg-muted/30 border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-2">
          <ol className="flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
            <li><Link href="/">Startseite</Link></li><li>/</li>
            <li><Link href="/ratgeber">Ratgeber</Link></li><li>/</li>
            <li className="text-foreground font-medium">Haushaltsauflösung Checkliste</li>
          </ol>
        </div>
      </nav>

      {/* Intro */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeIn}>
            <Link href="/ratgeber" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors" data-testid="link-back">
              <ArrowLeft className="w-4 h-4" /> Zurück zum Ratgeber
            </Link>
            <h2 className="text-2xl font-bold text-foreground mb-4">So gelingt die Haushaltsauflösung ohne Stress</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Eine <Link href="/haushaltsaufloesung" className="text-primary hover:underline">Haushaltsauflösung</Link> ist oft mit emotionalem Stress verbunden — sei es nach einem Todesfall, einem Umzug ins Pflegeheim oder einem Wohnungswechsel. Mit der richtigen Planung und klaren Schritten lässt sich die Aufgabe strukturiert und ohne Chaos bewältigen.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Diese interaktive Checkliste führt Sie durch alle Phasen — von 6 Wochen vor der Auflösung bis zur finalen Übergabe. Haken Sie erledigte Punkte direkt ab.
            </p>
            <div className="flex items-center gap-4 p-4 bg-primary/5 border border-primary/20 rounded-xl">
              <div className="flex-1">
                <div className="flex items-center justify-between text-sm mb-1">
                  <span className="font-medium text-foreground">Ihr Fortschritt</span>
                  <span className="text-primary font-bold">{checkedCount}/{totalItems} erledigt ({progress}%)</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary transition-all duration-300" style={{ width: `${progress}%` }} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interaktive Checkliste */}
      <section className="pb-12 sm:pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="space-y-8">
            {checklistPhasen.map((phase, pi) => (
              <motion.div key={pi} {...fadeIn} transition={{ delay: pi * 0.1 }}>
                <Card className="p-6" data-testid={`phase-card-${pi}`}>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <phase.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">{phase.phase}</h3>
                  </div>
                  <div className="space-y-2.5">
                    {phase.items.map((item, ii) => {
                      const key = `${pi}-${ii}`;
                      const checked = checkedItems.has(key);
                      return (
                        <button
                          key={ii}
                          onClick={() => toggleItem(key)}
                          className={`w-full flex items-start gap-3 text-left p-3 rounded-lg border transition-colors ${checked ? "bg-primary/5 border-primary/20" : "border-transparent hover:bg-muted/50"}`}
                          data-testid={`checklist-item-${pi}-${ii}`}
                        >
                          {checked
                            ? <CheckSquare className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                            : <Square className="w-5 h-5 text-muted-foreground mt-0.5 shrink-0" />
                          }
                          <span className={`text-sm ${checked ? "text-muted-foreground line-through" : "text-foreground"}`}>{item}</span>
                        </button>
                      );
                    })}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Kostenfaktoren */}
      <section className="py-12 bg-muted/30 border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeIn}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Euro className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-xl font-bold text-foreground">Kosten einer Haushaltsauflösung — was zählt?</h2>
            </div>
            <div className="space-y-4">
              {kostenFactors.map((f, i) => (
                <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.07 }} className="flex items-start gap-3" data-testid={`cost-factor-${i}`}>
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">{f.factor}</p>
                    <p className="text-sm text-muted-foreground">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <Card className="p-4 mt-6 bg-primary/5 border-primary/20">
              <p className="text-sm text-muted-foreground">
                Detaillierte Preise und Beispielkalkulationen finden Sie in unserem{" "}
                <Link href="/entruempelung-rhein-erft-kreis-preise" className="text-primary hover:underline">Preisratgeber für den Rhein-Erft-Kreis</Link>.
              </p>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.h2 {...fadeIn} className="text-2xl font-bold text-foreground mb-8">Häufige Fragen zur Haushaltsauflösung</motion.h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.07 }}>
                <Card className="p-5" data-testid={`faq-item-${i}`}>
                  <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Regionale Links */}
      <section className="py-10 bg-muted/30 border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeIn}>
            <h2 className="text-lg font-bold text-foreground mb-3">Haushaltsauflösung in Ihrer Stadt im Rhein-Erft-Kreis</h2>
            <div className="flex flex-wrap gap-2">
              {[
                { name: "Bergheim", slug: "bergheim" }, { name: "Kerpen", slug: "kerpen" }, { name: "Pulheim", slug: "pulheim" },
                { name: "Frechen", slug: "frechen" }, { name: "Hürth", slug: "huerth" }, { name: "Erftstadt", slug: "erftstadt" },
                { name: "Elsdorf", slug: "elsdorf" }, { name: "Grevenbroich", slug: "grevenbroich" },
                { name: "Brühl", slug: "bruehl" }, { name: "Wesseling", slug: "wesseling" },
              ].map(city => (
                <Link key={city.slug} href={`/entruempelung-${city.slug}`} className="text-sm bg-background border border-border hover:border-primary hover:text-primary px-3 py-1.5 rounded-full transition-colors" data-testid={`link-city-${city.slug}`}>
                  {city.name}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <BlogArticleCTA topic="Haushaltsauflösung" />
      <CTASection />
    </PageLayout>
  );
}
