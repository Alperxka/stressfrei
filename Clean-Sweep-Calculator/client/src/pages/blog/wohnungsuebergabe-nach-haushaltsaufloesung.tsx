import { useEffect } from "react";
import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { PageLayout, PageHero, CTASection, BlogArticleCTA } from "@/components/layout";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  CheckCircle2,
  XCircle,
  HelpCircle,
  PhoneCall,
  ShieldCheck,
  Key,
  Home,
  AlertTriangle,
  ClipboardList,
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const checklistRaeume = [
  {
    raum: "Küche",
    punkte: [
      "Alle Einbaugeräte ausgebaut oder vollständig vorhanden (je nach Mietvertrag)",
      "Fett- und Kalkablagerungen entfernt",
      "Schränke innen und außen gereinigt",
      "Abflüsse und Spüle sauber",
      "Herd und Backofen entfettet",
    ],
  },
  {
    raum: "Bad & WC",
    punkte: [
      "Kalk an Armaturen, Dusche und Wanne entfernt",
      "Fugen gereinigt — bei Schimmel: fachmännisch behandeln",
      "Spiegel sauber",
      "Toilette und Bidet gereinigt",
      "Abflüsse frei",
    ],
  },
  {
    raum: "Wohnräume",
    punkte: [
      "Wände auf Dübellöcher, Flecken oder Schäden prüfen",
      "Böden sauber — Teppich gesaugt, Parkett gepflegt",
      "Fenster innen geputzt",
      "Heizkörper abgewischt",
      "Decken und Lampen geprüft",
    ],
  },
  {
    raum: "Keller & Dachboden",
    punkte: [
      "Vollständig geleert (kein Sperrmüll zurücklassen!)",
      "Boden gefegt",
      "Schlüssel für Kellerabteil übergeben",
    ],
  },
  {
    raum: "Allgemein",
    punkte: [
      "Alle Schlüssel vollständig zurückgeben",
      "Zählerstände (Strom, Gas, Wasser) ablesen und dokumentieren",
      "Protokoll gemeinsam mit Vermieter erstellen",
      "Fotos als Beweissicherung machen",
    ],
  },
];

const haeufigeFehler = [
  "Sperrmüll in Keller oder Garage zurücklassen — das kostet Nachzahlungen.",
  "Dübellöcher nicht schließen — entsteht oft Streit beim Übergabeprotokoll.",
  "Schimmel einfach überstreichen — Vermieter erkennt das und kann klagen.",
  "Zählerstände vergessen — führt zu falschen Nachzahlungen.",
  "Schlüssel nicht vollständig zurückgeben — jeder fehlende Schlüssel kostet.",
  "Keine Fotos beim Auszug machen — ohne Beweis haben Sie keine Handhabe.",
];

const profitipps = [
  "Buchen Sie die Entrümpelung mindestens 1 Woche vor der geplanten Übergabe.",
  "Beantragen Sie frühzeitig die Abmeldung aller Versorger (Strom, Gas, Internet).",
  "Lassen Sie besenreine Übergabe explizit im Entrümpelungsauftrag festhalten.",
  "Stellen Sie Schönheitsreparaturen vor der Übergabe fertig — oder verhandeln Sie.",
  "Checken Sie Ihren Mietvertrag: Müssen Küchengeräte bleiben oder mitgenommen werden?",
  "Einigen Sie sich vorab mit dem Vermieter auf einen Übergabetermin mit Protokoll.",
];

const faqs = [
  {
    frage: "Was bedeutet 'besenrein' bei der Wohnungsübergabe?",
    antwort:
      "Besenrein bedeutet: Die Wohnung ist vollständig leer, gefegt und grob gereinigt. Nicht blitzsauber — aber frei von Müll, Möbeln und grobem Schmutz. Fenster müssen nicht geputzt, Böden nicht auf Hochglanz gebracht werden, außer der Mietvertrag schreibt etwas anderes vor.",
  },
  {
    frage: "Wer haftet für Schäden, wenn eine Haushaltsauflösung stattgefunden hat?",
    antwort:
      "Für Schäden am Mietobjekt haftet grundsätzlich der Mieter — auch wenn eine Entrümpelungsfirma beauftragt wurde. Seriöse Firmen wie Stressfrei Entrümpelungen & Umzüge sind vollversichert und haften für Schäden, die durch ihre Mitarbeiter entstehen.",
  },
  {
    frage: "Muss die Wohnung nach einer Haushaltsauflösung renoviert werden?",
    antwort:
      "Das hängt vom Mietvertrag ab. Schönheitsreparaturklauseln sind in vielen älteren Verträgen unwirksam. Im Zweifel Rechtsberatung suchen. Was immer gilt: Schäden (z.B. Löcher in Wänden, beschädigte Böden) müssen behoben werden.",
  },
  {
    frage: "Können Sie die Wohnungsübergabe besenrein sicherstellen?",
    antwort:
      "Ja. Unsere Haushaltsauflösungen enden auf Wunsch mit einer besenreinen Übergabe. Das heißt: Wohnung vollständig geleert, Böden gefegt, grobe Reinigung inklusive. Auf Wunsch koordinieren wir auch eine Reinigungsfirma für Grundreinigung.",
  },
  {
    frage: "Was passiert mit dem Sperrmüll nach der Haushaltsauflösung?",
    antwort:
      "Wir transportieren alles fachgerecht ab — zur Wertstoffanlage, zum Recyclinghof oder zur Entsorgungsanlage. Illegal auf der Straße abzustellen ist verboten und teuer. Sie erhalten auf Wunsch einen Entsorgungsnachweis.",
  },
  {
    frage: "Wie früh vor der Übergabe sollte die Haushaltsauflösung stattfinden?",
    antwort:
      "Idealerweise 1–2 Wochen vor der offiziellen Übergabe. So bleibt Zeit für Reinigung, Schönheitsreparaturen und eventuelle Nacharbeiten. In dringenden Fällen sind wir im Rhein-Erft-Kreis oft schon innerhalb von 3–5 Werktagen vor Ort.",
  },
];

export default function WohnungsuebergabeNachHaushaltsaufloesungPage() {
  useEffect(() => {
    document.title =
      "Wohnungsübergabe nach Haushaltsauflösung: Checkliste & Tipps | Stressfrei";
    const desc = document.querySelector('meta[name="description"]');
    if (desc)
      desc.setAttribute(
        "content",
        "Wohnungsübergabe nach Haushaltsauflösung im Rhein-Erft-Kreis: Komplette Checkliste, häufige Fehler & Profi-Tipps für eine reibungslose Übergabe an den Vermieter."
      );
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href =
      "https://stressfreientruempelungen.de/wohnungsuebergabe-nach-haushaltsaufloesung";
  }, []);

  return (
    <>
      <PageLayout>
        <PageHero
          badge="Ratgeber"
          title="Wohnungsübergabe nach Haushaltsauflösung"
          subtitle="Checkliste, häufige Fehler und Profi-Tipps für eine reibungslose Übergabe an den Vermieter — im Rhein-Erft-Kreis & NRW"
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
                src="/images/wohnungsuebergabe-haushaltsaufloesung.jpg"
                alt="Wohnungsübergabe nach Haushaltsauflösung — Schlüsselübergabe an Vermieter"
                className="w-full object-cover max-h-80"
                loading="lazy"
              />
            </motion.div>

            <motion.div {...fadeIn} className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nach einer Haushaltsauflösung steht die Wohnungsübergabe an den Vermieter an — und
                dieser Moment entscheidet über Kaution und Nachzahlungen. Mit der richtigen
                Vorbereitung vermeiden Sie Streit und übergeben die Wohnung sauber und vollständig.
                Dieser Ratgeber ist speziell für Mieter im Rhein-Erft-Kreis und NRW.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-10 sm:py-14 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.h2 {...fadeIn} className="text-2xl font-bold text-foreground mb-2 flex items-center gap-2">
              <ClipboardList className="w-6 h-6 text-primary" />
              Übergabe-Checkliste: Raum für Raum
            </motion.h2>
            <motion.p {...fadeIn} className="text-muted-foreground mb-8">
              Gehen Sie jeden Raum durch — diese Punkte prüft der Vermieter beim Übergabeprotokoll.
            </motion.p>
            <div className="space-y-5">
              {checklistRaeume.map((r, i) => (
                <motion.div key={i} {...fadeIn}>
                  <Card className="p-5">
                    <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Home className="w-4 h-4 text-primary" /> {r.raum}
                    </h3>
                    <ul className="space-y-1.5">
                      {r.punkte.map((p, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-10 sm:py-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.h2 {...fadeIn} className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 text-amber-500" />
              Die 6 häufigsten Fehler bei der Übergabe
            </motion.h2>
            <div className="space-y-3">
              {haeufigeFehler.map((f, i) => (
                <motion.div key={i} {...fadeIn} className="flex items-start gap-3 p-4 bg-red-50 border border-red-100 rounded-xl">
                  <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">{f}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-10 sm:py-14 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.h2 {...fadeIn} className="text-2xl font-bold text-foreground mb-6">
              Profi-Tipps für die Übergabe
            </motion.h2>
            <div className="space-y-3">
              {profitipps.map((t, i) => (
                <motion.div key={i} {...fadeIn} className="flex items-start gap-3 p-4 bg-muted/40 border rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">{t}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-10 sm:py-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.div
              {...fadeIn}
              className="rounded-2xl bg-primary/5 border border-primary/20 p-6 sm:p-8"
            >
              <div className="flex items-start gap-4">
                <ShieldCheck className="w-8 h-8 text-primary shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-3">
                    Besenreine Übergabe mit Stressfrei
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Wir entrümpeln Ihre Wohnung vollständig und hinterlassen sie besenrein — auf
                    Wunsch inkl. Koordination einer Reinigungsfirma. So gehen Sie sorgenfrei in die
                    Übergabe.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Vollständige Leerung aller Räume, Keller und Dachboden",
                      "Besenreine Übergabe inklusive",
                      "Entsorgungsnachweis auf Anfrage",
                      "Wertanrechnung: Verwertbare Sachen senken Ihren Preis",
                      "Einsatz in Bergheim, Kerpen, Pulheim, Frechen, Hürth und dem gesamten Rhein-Erft-Kreis",
                    ].map((p, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-10 sm:py-14 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.h2 {...fadeIn} className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-primary" />
              Häufig gestellte Fragen
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

        <section className="py-10 sm:py-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.div {...fadeIn} className="flex items-center gap-3 p-5 bg-muted/40 rounded-xl border">
              <PhoneCall className="w-6 h-6 text-primary shrink-0" />
              <div>
                <p className="font-semibold text-foreground text-sm mb-0.5">Weiterlesen: Verwandte Ratgeber</p>
                <div className="flex flex-wrap gap-3 mt-2">
                  {[
                    { label: "Haushaltsauflösung Checkliste", href: "/haushaltsaufloesung-checkliste" },
                    { label: "Wohnungsauflösung: Selbst oder Firma?", href: "/wohnungsaufloesung-selbst-oder-firma" },
                    { label: "Haushaltsauflösung vorbereiten", href: "/haushaltsaufloesung-vorbereiten" },
                    { label: "Entrümpelung nach Todesfall", href: "/entruempelung-nach-todesfall" },
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

        <BlogArticleCTA topic="Haushaltsauflösung" />
      <CTASection />
      </PageLayout>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Wohnungsübergabe nach Haushaltsauflösung: Checkliste & Tipps",
            description:
              "Wohnungsübergabe nach Haushaltsauflösung im Rhein-Erft-Kreis: Komplette Checkliste, häufige Fehler & Profi-Tipps für eine reibungslose Übergabe an den Vermieter.",
            image:
              "https://stressfreientruempelungen.de/images/haushaltsaufloesung-komplett-service.webp",
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
            datePublished: "2026-03-25",
            dateModified: "2026-03-25",
            mainEntityOfPage:
              "https://stressfreientruempelungen.de/wohnungsuebergabe-nach-haushaltsaufloesung",
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
