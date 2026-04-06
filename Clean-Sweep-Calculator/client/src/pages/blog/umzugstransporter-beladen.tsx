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
  Truck,
  AlertTriangle,
  Package,
  ShieldCheck,
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const reihenfolge = [
  { schritt: "1", titel: "Schwere, stabile Möbel zuerst", text: "Kühlschrank, Waschmaschine, Herd und massive Schränke kommen als erstes in den Transporter — direkt an die Fahrerkabine. Schwerste Ladung immer vorne und unten." },
  { schritt: "2", titel: "Große Möbel stehend oder liegend", text: "Schränke und Regale wenn möglich stehend laden — das spart Platz. Matratzen an die Seitenwände lehnen. Sofas je nach Form aufkanten oder flach legen." },
  { schritt: "3", titel: "Kartons systematisch stapeln", text: "Schwere Kartons unten, leichte oben. Niemals höher stapeln als die Seitenwand des Transporters. Kartons beschriften — Inhalt und welches Zimmer." },
  { schritt: "4", titel: "Hohlräume füllen", text: "Kissen, Decken, Kleidung und Polster in Hohlräume stopfen — das verhindert, dass Kartons und Möbel während der Fahrt verrutschen oder umfallen." },
  { schritt: "5", titel: "Empfindliches obenauf", text: "Pflanzen, Lampen, Spiegel und zerbrechliche Gegenstände kommen ganz nach oben oder separat ins Auto. Nie unter schweren Gegenständen verstauen." },
  { schritt: "6", titel: "Sichern mit Zurrgurten", text: "Alles mit Spanngurten (Zurrgurten) fixieren — das ist Pflicht! Ungesicherte Ladung ist eine Ordnungswidrigkeit und kann teuer werden. Spanngurte quer durch den Laderaum spannen." },
];

const doList = [
  "Möbel vor dem Laden demontieren (Beine, Türen, Schubläden raus)",
  "Möbelfüße und Kanten mit Umzugsdecken schützen",
  "Alle Kartons vor dem Laden beschriften",
  "Zerbrechliches separat einpacken (Zeitungspapier, Luftpolsterfolie)",
  "Kühlschrank 24 Stunden vor dem Umzug ausschalten und abtauen",
  "Schränke leeren — schwere volle Schränke können den Boden beschädigen",
  "Spanngurte mitbringen — im Transporter oft nicht dabei",
  "Gewicht gleichmäßig verteilen (links / rechts ausgewogen)",
];

const dontList = [
  "Schwerste Sachen hinten laden — Gefahr des Kippens beim Bremsen",
  "Kartons ohne Beschriftung einladen — führt zu Chaos beim Ausladen",
  "Matratzen zwischen Möbel klemmen — sie verbiegen dauerhaft",
  "Pflanzenerde im Auto mitfahren — verschüttet sofort und stinkt",
  "Leere Schubladen einladen — öffnen sich und beschädigen andere Sachen",
  "Zu viel in einen Karton — mehr als 20 kg pro Karton überfordert den Rücken",
];

const transporter = [
  { groesse: "Kleintransporter (3,5 t)", volumen: "6–8 m³", geeignet: "1–2-Zimmer-Wohnung" },
  { groesse: "Mittlerer Transporter (7,5 t)", volumen: "20–30 m³", geeignet: "3–4-Zimmer-Wohnung" },
  { groesse: "Großer LKW (12–15 t)", volumen: "35–50 m³", geeignet: "4–5-Zimmer oder Haus" },
  { groesse: "Sattelzug (ab 18 t)", volumen: "über 60 m³", geeignet: "Große Büro- oder Firmenumzüge" },
];

const faqs = [
  {
    frage: "Was muss ich beachten, wenn ich einen Mietransporter belade?",
    antwort:
      "Wichtigste Punkte: Schweres zuerst und vorne laden, mit Zurrgurten sichern, Möbel mit Decken schützen, Kartons nicht überladen. Ungesicherte Ladung ist eine Ordnungswidrigkeit — mindestens 60 € Bußgeld, bei Unfall kann die Versicherung verweigern.",
  },
  {
    frage: "Wie groß muss der Transporter für meinen Umzug sein?",
    antwort:
      "Faustregel: Pro Zimmer ca. 5–8 m³. Eine 3-Zimmer-Wohnung braucht etwa 20–25 m³ — das entspricht einem 7,5-Tonner. Bei einem Umzugsunternehmen wählen wir die richtige Fahrzeuggröße nach Besichtigung.",
  },
  {
    frage: "Darf ich auch mit dem Kleintransporter auf der Autobahn fahren?",
    antwort:
      "Kleintransporter bis 3,5 t dürfen bis 100 km/h. Ab 7,5 t gilt Tempo 80 und teilweise Wochenendfahrverbote. Für Mietfahrzeuge über 3,5 t ist ein C1-Führerschein oder höher erforderlich.",
  },
  {
    frage: "Wie sichere ich Bilder und Spiegel im Transporter?",
    antwort:
      "Bilder und Spiegel immer senkrecht (stehend) transportieren — nie flach legen. In Luftpolsterfolie einwickeln und an eine Polsterwand lehnen oder zwischen weiche Polster klemmen. Nie unter anderen Gegenständen.",
  },
  {
    frage: "Was kostet ein Mietransporter in NRW?",
    antwort:
      "Kleintransporter (bis 3,5 t) kostet ca. 40–80 € pro Tag. Größere Transporter (7,5 t) ca. 80–150 €. Dazu kommen Treibstoff, Kaution und eventuelle Kilometer-Pakete. Vergleichen Sie mehrere Anbieter — Preise schwanken stark.",
  },
  {
    frage: "Lohnt sich ein Umzugsunternehmen statt Selbstumzug?",
    antwort:
      "Für eine 3-Zimmer-Wohnung kann ein Umzugsunternehmen günstiger als gedacht sein: Transporter + Freunde-Helfer + Treibstoff + Pizzen + ggf. Schäden kommen schnell auf 400–600 €. Ein professioneller Umzug startet bei ähnlichen Preisen — ohne Stress und mit Versicherung.",
  },
];

export default function UmzugstransporterBeladenPage() {
  useEffect(() => {
    document.title = "Umzugstransporter richtig beladen: Profi-Tipps & Checkliste | Stressfrei";
    const desc = document.querySelector('meta[name="description"]');
    if (desc)
      desc.setAttribute(
        "content",
        "Umzugstransporter richtig beladen: Schritt für Schritt Anleitung, Do & Don't Liste, richtige Reihenfolge und welche Transportergröße Sie brauchen — Profi-Tipps für NRW."
      );
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://stressfreientruempelungen.de/umzugstransporter-beladen";
  }, []);

  return (
    <>
      <PageLayout>
        <PageHero
          badge="Umzugsratgeber"
          title="Umzugstransporter richtig beladen"
          subtitle="Schritt für Schritt, Do & Don't und die richtige Transportergröße — Profi-Tipps für Ihren Umzug in NRW"
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
                src="/images/umzugstransporter-beladen.png"
                alt="Umzugstransporter richtig beladen — Möbelpacker laden Kartons in LKW"
                className="w-full object-cover max-h-80"
                loading="lazy"
              />
            </motion.div>

            <motion.div {...fadeIn}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Wer seinen Umzugstransporter falsch belädt, riskiert Schäden an Möbeln, Bußgelder
                für ungesicherte Ladung und einen kaputten Rücken. Die gute Nachricht: Mit der
                richtigen Reihenfolge und ein paar Profi-Kniffen geht es erstaunlich einfach.
                Dieser Ratgeber zeigt Ihnen wie.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-10 sm:py-14 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.h2 {...fadeIn} className="text-2xl font-bold text-foreground mb-2">
              Die richtige Reihenfolge beim Beladen
            </motion.h2>
            <motion.p {...fadeIn} className="text-muted-foreground mb-8">In dieser Reihenfolge laden Profis — Schritt für Schritt.</motion.p>
            <div className="space-y-4">
              {reihenfolge.map((r) => (
                <motion.div key={r.schritt} {...fadeIn}>
                  <Card className="p-5 flex gap-5 items-start">
                    <span className="text-3xl font-black text-primary/20 shrink-0 leading-none">{r.schritt}</span>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{r.titel}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{r.text}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-10 sm:py-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <motion.h2 {...fadeIn} className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" /> Das sollten Sie tun
                </motion.h2>
                <div className="space-y-2">
                  {doList.map((d, i) => (
                    <motion.div key={i} {...fadeIn} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" /> {d}
                    </motion.div>
                  ))}
                </div>
              </div>
              <div>
                <motion.h2 {...fadeIn} className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-red-500" /> Das sollten Sie NICHT tun
                </motion.h2>
                <div className="space-y-2">
                  {dontList.map((d, i) => (
                    <motion.div key={i} {...fadeIn} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /> {d}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 sm:py-14 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.h2 {...fadeIn} className="text-2xl font-bold text-foreground mb-6">
              Welche Transportergröße brauche ich?
            </motion.h2>
            <motion.div {...fadeIn} className="overflow-x-auto rounded-xl border">
              <table className="w-full text-sm">
                <thead className="bg-muted/60">
                  <tr>
                    <th className="text-left p-4 font-semibold text-foreground">Fahrzeug</th>
                    <th className="text-left p-4 font-semibold text-foreground">Volumen</th>
                    <th className="text-left p-4 font-semibold text-foreground">Geeignet für</th>
                  </tr>
                </thead>
                <tbody>
                  {transporter.map((t, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-muted/20"}>
                      <td className="p-4 font-medium text-foreground">{t.groesse}</td>
                      <td className="p-4 text-primary font-semibold">{t.volumen}</td>
                      <td className="p-4 text-muted-foreground">{t.geeignet}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </div>
        </section>

        <section className="py-10 sm:py-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.h2 {...fadeIn} className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-primary" /> Häufig gestellte Fragen
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

        <section className="py-10 sm:py-14 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.div {...fadeIn} className="flex items-center gap-3 p-5 bg-muted/40 rounded-xl border">
              <PhoneCall className="w-6 h-6 text-primary shrink-0" />
              <div>
                <p className="font-semibold text-foreground text-sm mb-0.5">Weiterlesen: Verwandte Ratgeber</p>
                <div className="flex flex-wrap gap-3 mt-2">
                  {[
                    { label: "Umzugscheckliste 2025", href: "/umzugscheckliste" },
                    { label: "Umzugshelfer vs. Umzugsunternehmen", href: "/umzugshelfer-tipps" },
                    { label: "Umzugskosten Rhein-Erft-Kreis", href: "/umzugskosten-rhein-erft-kreis" },
                    { label: "Privatumzug NRW", href: "/privatumzug" },
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

        <BlogArticleCTA topic="Umzug" />
      <CTASection />
      </PageLayout>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Umzugstransporter richtig beladen: Profi-Tipps & Checkliste",
        description: "Umzugstransporter richtig beladen: Schritt für Schritt Anleitung, Do & Don't Liste und richtige Reihenfolge — Profi-Tipps für NRW.",
        image: "https://stressfreientruempelungen.de/images/umzugstransporter-beladen.png",
        author: { "@type": "Organization", name: "Stressfrei Entrümpelungen & Umzüge", url: "https://stressfreientruempelungen.de" },
        publisher: { "@type": "Organization", name: "Stressfrei Entrümpelungen & Umzüge", logo: { "@type": "ImageObject", url: "https://stressfreientruempelungen.de/favicon.webp" } },
        datePublished: "2026-03-25",
        dateModified: "2026-03-25",
        mainEntityOfPage: "https://stressfreientruempelungen.de/umzugstransporter-beladen",
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.frage, acceptedAnswer: { "@type": "Answer", text: faq.antwort } })),
      }) }} />
    </>
  );
}
