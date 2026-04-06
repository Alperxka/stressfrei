import { useEffect } from "react";
import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { PageLayout, PageHero, CTASection, BlogArticleCTA } from "@/components/layout";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  CheckCircle2,
  Heart,
  AlertTriangle,
  Euro,
  ShieldCheck,
  HelpCircle,
  PhoneCall,
  Scale,
  Clock,
  Users,
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const schritte = [
  {
    nr: "01",
    titel: "Rechtliche Klärung vorab",
    text: "Klären Sie mit einem Anwalt oder der Rechtsberatung, wer welche Gegenstände behalten darf. Gemeinsames Eigentum muss getrennt werden — am besten schriftlich festhalten.",
  },
  {
    nr: "02",
    titel: "Inventar gemeinsam erstellen",
    text: "Erstellen Sie eine Liste aller Haushaltsgeräte, Möbel und Wertsachen. Fotos helfen bei späteren Uneinigkeiten. Ohne Inventar entstehen häufig Streitigkeiten.",
  },
  {
    nr: "03",
    titel: "Aufteilung verhandeln oder Mediator einschalten",
    text: "Können Sie sich nicht einigen, hilft ein Mediator. Alternativ übernimmt ein Anwalt die Abstimmung. Teure Streitereien lohnen sich selten — oft ist Einigkeit billiger.",
  },
  {
    nr: "04",
    titel: "Entrümpelungsfirma beauftragen",
    text: "Alles was keiner will: Möbel, Elektrogeräte, Hausrat — wird professionell entsorgt oder mit Wertanrechnung verrechnet. Sie müssen nicht alles selbst wegschaffen.",
  },
  {
    nr: "05",
    titel: "Umzug organisieren",
    text: "Wer auszieht, braucht einen Umzugstermin. Ein erfahrenes Unternehmen erledigt Entrümpelung und Umzug aus einer Hand — spart Zeit und Nerven.",
  },
  {
    nr: "06",
    titel: "Wohnungsübergabe vorbereiten",
    text: "Besenreine Übergabe an den Vermieter — wenn beide Partner in eine Mietwohnung gelebt haben, sind beide für den Zustand haftbar.",
  },
];

const tipps = [
  { text: "Beauftragen Sie die Entrümpelung neutral — beide Partner sollten zustimmen." },
  { text: "Wertgegenstände (Schmuck, Kunst, Antiquitäten) schätzen lassen — vor der Aufteilung." },
  { text: "Wertanrechnung prüfen: Wertsachen können Entrümpelungskosten senken." },
  { text: "Nicht alles wegwerfen — gut erhaltene Möbel an Sozialkaufhäuser oder Ebay Kleinanzeigen." },
  { text: "Kinder schützen: Entrümpelung möglichst ohne Kinder im Haus durchführen." },
  { text: "Versicherungsschutz prüfen: Einige Hausratsversicherungen greifen auch bei Trennung." },
];

const kostenTabelle = [
  {
    leistung: "Wohnungsauflösung 1–2 Zimmer",
    preisvon: "500 €",
    preisbis: "1.500 €",
    hinweis: "Je nach Menge und Etage",
  },
  {
    leistung: "Wohnungsauflösung 3–4 Zimmer",
    preisvon: "1.200 €",
    preisbis: "3.000 €",
    hinweis: "Inkl. Entsorgung und Abtransport",
  },
  {
    leistung: "Haushaltsauflösung Haus (5+ Zi.)",
    preisvon: "2.000 €",
    preisbis: "5.500 €",
    hinweis: "Bei viel Hausrat evtl. mehr",
  },
  {
    leistung: "Umzug (Wohnung → neue Wohnung)",
    preisvon: "400 €",
    preisbis: "1.800 €",
    hinweis: "Abhängig von Entfernung & Volumen",
  },
  {
    leistung: "Kombi: Auflösung + Umzug",
    preisvon: "1.500 €",
    preisbis: "4.500 €",
    hinweis: "Günstiger als getrennte Beauftragung",
  },
];

const faqs = [
  {
    frage: "Wer zahlt die Haushaltsauflösung bei einer Trennung?",
    antwort:
      "Grundsätzlich tragen beide Partner die Kosten gemeinsam, da der Hausrat gemeinsames Eigentum ist. Wenn ein Partner allein das gemeinsame Heim verlässt und nichts mitnimmt, kann der verbleibende Partner mehr tragen. Im Streitfall entscheidet ein Gericht.",
  },
  {
    frage: "Kann ich die Wohnung auch ohne Zustimmung des Ex-Partners entrümpeln lassen?",
    antwort:
      "Bei gemeinsamen Gegenständen brauchen Sie rechtlich die Zustimmung des anderen. Handeln Sie eigenmächtig, riskieren Sie rechtliche Konsequenzen. Besser: gemeinsam beauftragen oder zunächst eine neutrale Inventarliste erstellen.",
  },
  {
    frage: "Wie schnell kann eine Haushaltsauflösung nach Trennung durchgeführt werden?",
    antwort:
      "Bei Stressfrei Entrümpelungen & Umzüge sind wir oft schon innerhalb von 3–7 Werktagen vor Ort — bei Dringlichkeit auch schneller. Die eigentliche Durchführung dauert je nach Größe 1–2 Tage.",
  },
  {
    frage: "Können Wertsachen den Entrümpelungspreis senken?",
    antwort:
      "Ja. Im Rhein-Erft-Kreis und NRW prüfen wir bei der kostenlosen Besichtigung, welche Gegenstände einen Wiederverkaufswert haben. Dieser Wert wird direkt vom Auftragspreis abgezogen — das nennt sich Wertanrechnung.",
  },
  {
    frage: "Was passiert mit Sachen, über die wir uns nicht einigen können?",
    antwort:
      "Streitige Gegenstände werden zunächst eingelagert. Alternativ hilft ein Mediator oder Anwalt. Einige Paare beauftragen auch einen neutralen Sachverständigen, der strittige Wertgegenstände schätzt.",
  },
  {
    frage: "Macht Ihr auch den Umzug nach der Auflösung?",
    antwort:
      "Ja. Wir bieten Haushaltsauflösung und Umzug aus einer Hand an. Das spart Koordinationsaufwand und ist oft günstiger als zwei getrennte Beauftragungen.",
  },
];

export default function HaushaltsaufloesungBeiTrennungPage() {
  useEffect(() => {
    document.title =
      "Haushaltsauflösung bei Trennung & Scheidung NRW | Stressfrei";
    const desc = document.querySelector('meta[name="description"]');
    if (desc)
      desc.setAttribute(
        "content",
        "Haushaltsauflösung bei Trennung oder Scheidung im Rhein-Erft-Kreis & NRW: Schritt für Schritt Ablauf, Kostenübersicht, rechtliche Tipps und warum ein Profi hilft."
      );
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://stressfreientruempelungen.de/haushaltsaufloesung-bei-trennung";
  }, []);

  return (
    <>
      <PageLayout>
        <PageHero
          badge="Ratgeber"
          title="Haushaltsauflösung bei Trennung & Scheidung"
          subtitle="Schritt für Schritt durch eine emotional schwierige Situation — mit professioneller Unterstützung im Rhein-Erft-Kreis & NRW"
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
                src="/images/haushaltsaufloesung-trennung-scheidung.png"
                alt="Haushaltsauflösung bei Trennung und Scheidung — leere Wohnung mit Umzugskartons"
                className="w-full object-cover max-h-80"
                loading="lazy"
              />
            </motion.div>

            <motion.div {...fadeIn} className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Eine Trennung oder Scheidung gehört zu den belastendsten Lebensereignissen. Zu dem
                emotionalen Stress kommt die praktische Frage: Was passiert mit dem gemeinsamen
                Hausrat? Wer bekommt was — und wer kümmert sich um den Rest? Dieser Ratgeber zeigt
                Ihnen den Weg durch die Haushaltsauflösung nach einer Trennung im Rhein-Erft-Kreis
                und ganz NRW.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-10 sm:py-14 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.h2 {...fadeIn} className="text-2xl font-bold text-foreground mb-2">
              Die 6 Schritte zur Haushaltsauflösung bei Trennung
            </motion.h2>
            <motion.p {...fadeIn} className="text-muted-foreground mb-8">
              Schritt für Schritt — ohne unnötigen Streit und mit klarem Ablauf.
            </motion.p>
            <div className="space-y-4">
              {schritte.map((s) => (
                <motion.div key={s.nr} {...fadeIn}>
                  <Card className="p-5 flex gap-5 items-start">
                    <span className="text-3xl font-black text-primary/20 shrink-0 leading-none">
                      {s.nr}
                    </span>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{s.titel}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{s.text}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-10 sm:py-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.h2 {...fadeIn} className="text-2xl font-bold text-foreground mb-6">
              Was kostet eine Haushaltsauflösung bei Trennung?
            </motion.h2>
            <motion.div {...fadeIn} className="overflow-x-auto rounded-xl border">
              <table className="w-full text-sm">
                <thead className="bg-muted/60">
                  <tr>
                    <th className="text-left p-4 font-semibold text-foreground">Leistung</th>
                    <th className="text-left p-4 font-semibold text-foreground">ab</th>
                    <th className="text-left p-4 font-semibold text-foreground">bis</th>
                    <th className="text-left p-4 font-semibold text-foreground hidden sm:table-cell">Hinweis</th>
                  </tr>
                </thead>
                <tbody>
                  {kostenTabelle.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-muted/20"}>
                      <td className="p-4 font-medium text-foreground">{row.leistung}</td>
                      <td className="p-4 text-green-700 font-semibold">{row.preisvon}</td>
                      <td className="p-4 text-foreground">{row.preisbis}</td>
                      <td className="p-4 text-muted-foreground hidden sm:table-cell text-xs">{row.hinweis}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
            <motion.p {...fadeIn} className="text-xs text-muted-foreground mt-3">
              * Preise sind Richtwerte für den Rhein-Erft-Kreis & NRW. Kostenloses Angebot nach
              kostenloser Besichtigung — oft günstiger durch Wertanrechnung.
            </motion.p>
          </div>
        </section>

        <section className="py-10 sm:py-14 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.h2 {...fadeIn} className="text-2xl font-bold text-foreground mb-6">
              <Heart className="inline w-6 h-6 text-primary mr-2" />
              Praktische Tipps für die Trennung
            </motion.h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {tipps.map((t, i) => (
                <motion.div key={i} {...fadeIn}>
                  <Card className="p-4 flex gap-3 items-start h-full">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">{t.text}</p>
                  </Card>
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
                    Warum ein Profi bei der Trennung hilft
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Bei einer emotionalen Ausnahmesituation wie Trennung oder Scheidung ist eine
                    neutrale, professionelle Unterstützung Gold wert. Wir entrümpeln diskret,
                    schnell und ohne Partei zu ergreifen. Sie geben uns die Wohnung — wir machen
                    alles klar.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Transparentes Festpreisangebot nach kostenloser Besichtigung",
                      "Wertanrechnung: Verwertbare Sachen senken Ihren Preis",
                      "Besenreine Übergabe an den Vermieter inklusive",
                      "Diskreter Umgang mit persönlichen Gegenständen",
                      "Umzug aus einer Hand — kein zweiter Dienstleister nötig",
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
                    { label: "Haushaltsauflösung vorbereiten", href: "/haushaltsaufloesung-vorbereiten" },
                    { label: "Haushaltsauflösung Checkliste", href: "/haushaltsaufloesung-checkliste" },
                    { label: "Wertanrechnung: So sparen Sie", href: "/wertanrechnung-bei-der-entruempelung" },
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
            headline: "Haushaltsauflösung bei Trennung & Scheidung NRW — Schritt für Schritt",
            description:
              "Haushaltsauflösung bei Trennung oder Scheidung im Rhein-Erft-Kreis & NRW: Schritt für Schritt Ablauf, Kostenübersicht, rechtliche Tipps.",
            image: "https://stressfreientruempelungen.de/images/haushaltsaufloesung-dienstleistung-nrw.webp",
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
              "https://stressfreientruempelungen.de/haushaltsaufloesung-bei-trennung",
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
