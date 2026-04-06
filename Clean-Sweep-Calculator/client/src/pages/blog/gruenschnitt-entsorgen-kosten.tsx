import { useEffect } from "react";
import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { PageLayout, PageHero, CTASection, BlogArticleCTA } from "@/components/layout";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  CheckCircle2,
  Euro,
  HelpCircle,
  PhoneCall,
  Leaf,
  Trash2,
  Clock,
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const wege = [
  {
    titel: "Biotonne / Grünschnitt-Tonne",
    kosten: "Kostenlos (im Haushalt-Abo enthalten)",
    geeignet: "Kleine Mengen, Rasenschnitt, Laub, Gartenabfälle",
    nachteil: "Nur begrenzte Menge, keine Äste über 10 cm",
  },
  {
    titel: "Wertstoffhof / Recyclinghof",
    kosten: "Oft kostenlos bis 1 m³ — dann ca. 5–15 € pro 100 kg",
    geeignet: "Äste, Hecken, größere Grünmengen",
    nachteil: "Selbst anliefern — Transport organisieren",
  },
  {
    titel: "Häckseldienst der Gemeinde",
    kosten: "Ca. 30–80 € je nach Einsatz und Gemeinde",
    geeignet: "Große Mengen Äste und Hecken vor Ort",
    nachteil: "Terminvergabe nötig, nicht alle Gemeinden bieten das an",
  },
  {
    titel: "Container / Mulde mieten",
    kosten: "100–250 € für 3–5 m³ Grünschnitt-Container",
    geeignet: "Sehr große Gärten, nach starkem Rückschnitt",
    nachteil: "Genehmigung für öffentliche Straße nötig",
  },
  {
    titel: "Entrümpelungsfirma / Entsorgungsdienst",
    kosten: "Ab ca. 80 € — kommt direkt zu Ihnen",
    geeignet: "Wenn keine Zeit oder kein Fahrzeug vorhanden",
    nachteil: "Teurer als Selbstanlieferung, aber bequemer",
  },
];

const kostenTabelle = [
  { menge: "Kleiner Garten (bis 50 m²)", preis: "40–120 €", methode: "Wertstoffhof oder Häckseldienst" },
  { menge: "Mittelgroßer Garten (50–200 m²)", preis: "80–250 €", methode: "Container oder mehrere Wertstoffhof-Fahrten" },
  { menge: "Großer Garten / Grundstück", preis: "200–600 €", methode: "Container + Entsorgungsfirma" },
  { menge: "Baumfällung (1 Baum)", preis: "150–400 €", methode: "Häcksler + Entsorgung" },
  { menge: "Hecke (10 m, 2 m hoch)", preis: "60–200 €", methode: "Container oder Entsorgungsdienst" },
];

const tipps = [
  "Grünschnitt trocknen lassen — trockenes Material wiegt weniger und kostet weniger beim Wertstoffhof.",
  "Äste hacken / zerkleinern: Kleineres Material passt besser in die Tonne und auf den Anhänger.",
  "Kompostierbare Mengen kompostieren: Was kleingehäckselt ist, lässt sich gut kompostieren.",
  "Nachbarn koordinieren: Gemeinsame Anlieferung zum Wertstoffhof spart Fahrten.",
  "Häcksler mieten: Im Baumarkt günstig mieten — spart Container-Kosten bei Ästen.",
  "Frühlingsschnitt rechtzeitig planen: Brutzeit der Vögel (März–September) einhalten.",
];

const faqs = [
  {
    frage: "Was kostet Grünschnitt entsorgen im Rhein-Erft-Kreis?",
    antwort:
      "Im Rhein-Erft-Kreis können Sie Grünschnitt kostenlos (bis zu einer bestimmten Menge) beim Wertstoffhof abgeben. Größere Mengen kosten ca. 5–15 € pro 100 kg. Einen Häckseldienst buchen kostet ca. 30–80 € je nach Gemeinde. Container für große Mengen kosten ab ca. 100 €.",
  },
  {
    frage: "Darf ich Grünschnitt einfach verbrennen?",
    antwort:
      "In NRW ist das Verbrennen von Gartenabfällen grundsätzlich verboten — auch im eigenen Garten. Ausnahmen existieren nur mit besonderer Genehmigung und außerhalb von Wohngebieten. Verstöße können mit Bußgeldern bis zu 5.000 € geahndet werden.",
  },
  {
    frage: "Nimmt der Wertstoffhof Bergheim Grünschnitt kostenlos an?",
    antwort:
      "Ja — Privathaushalte können Grünschnitt in begrenzter Menge kostenlos am Wertstoffhof abgeben. Für größere Mengen wird ein Entgelt erhoben. Bitte aktuelle Öffnungszeiten und Konditionen direkt beim Rhein-Erft-Kreis erfragen, da diese variieren.",
  },
  {
    frage: "Kann ich Grünschnitt auch einfach liegen lassen?",
    antwort:
      "Kleinere Mengen Rasenschnitt können als natürliche Mulchschicht im Garten bleiben — das ist sogar gut für den Boden. Größere Mengen Äste und Hecken sollten jedoch ordentlich entsorgt werden, da sie Schädlingen und Pilzen Lebensraum bieten.",
  },
  {
    frage: "Wie kann ich Grünschnitt selbst kompostieren?",
    antwort:
      "Grünschnitt lässt sich im eigenen Kompostbehälter verarbeiten. Ideal ist eine Mischung aus feuchten Grünabfällen (Rasenschnitt) und trockenem Material (Äste, Laub). Zu feiner Grünschnitt allein fault und stinkt — immer mit grobem Material mischen.",
  },
  {
    frage: "Nimmt eine Entrümpelungsfirma auch Grünschnitt mit?",
    antwort:
      "Ja — wenn bei einer Haushaltsauflösung oder Gartenentrümpelung auch Grünschnitt anfällt, nehmen wir das mit. Sprechen Sie uns bei der Besichtigung darauf an, wir kalkulieren es im Gesamtangebot.",
  },
];

export default function GruenschnittEntsorgenKostenPage() {
  useEffect(() => {
    document.title = "Was kostet Grünschnitt entsorgen? Preise & Tipps NRW | Stressfrei";
    const desc = document.querySelector('meta[name="description"]');
    if (desc)
      desc.setAttribute(
        "content",
        "Was kostet Grünschnitt entsorgen im Rhein-Erft-Kreis und NRW? Alle Wege im Vergleich: Wertstoffhof, Häckseldienst, Container & Entsorgungsfirma mit Preisen."
      );
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://stressfreientruempelungen.de/gruenschnitt-entsorgen-kosten";
  }, []);

  return (
    <>
      <PageLayout>
        <PageHero
          badge="Ratgeber"
          title="Was kostet Grünschnitt entsorgen?"
          subtitle="Alle Wege im Vergleich für den Rhein-Erft-Kreis & NRW — Preise, Tipps und was erlaubt ist"
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
                src="/images/gruenschnitt-entsorgen.png"
                alt="Grünschnitt im Garten entsorgen — Äste und Gartenabfälle"
                className="w-full object-cover max-h-80"
                loading="lazy"
              />
            </motion.div>

            <motion.div {...fadeIn}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Frühjahrsputz im Garten — und dann stehen Berge von Ästen, Heckenresten und
                Rasenschnitt vor einem. Die Frage ist: Wohin damit? Dieser Ratgeber zeigt alle
                Wege zur Grünschnitt-Entsorgung im Rhein-Erft-Kreis, was sie kosten und wie Sie
                am günstigsten vorgehen.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-10 sm:py-14 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.h2 {...fadeIn} className="text-2xl font-bold text-foreground mb-6">
              5 Wege zur Grünschnitt-Entsorgung im Vergleich
            </motion.h2>
            <div className="space-y-4">
              {wege.map((w, i) => (
                <motion.div key={i} {...fadeIn}>
                  <Card className="p-5">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-3">
                      <Leaf className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1">{w.titel}</h3>
                        <div className="grid sm:grid-cols-3 gap-2 text-xs text-muted-foreground">
                          <div><span className="font-medium text-foreground">Kosten: </span>{w.kosten}</div>
                          <div><span className="font-medium text-foreground">Geeignet: </span>{w.geeignet}</div>
                          <div><span className="font-medium text-foreground">Nachteil: </span>{w.nachteil}</div>
                        </div>
                      </div>
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
              <Euro className="inline w-6 h-6 text-primary mr-2" />
              Kostenübersicht nach Gartengröße
            </motion.h2>
            <motion.div {...fadeIn} className="overflow-x-auto rounded-xl border">
              <table className="w-full text-sm">
                <thead className="bg-muted/60">
                  <tr>
                    <th className="text-left p-4 font-semibold text-foreground">Menge / Fläche</th>
                    <th className="text-left p-4 font-semibold text-foreground">Kosten ca.</th>
                    <th className="text-left p-4 font-semibold text-foreground hidden sm:table-cell">Empfohlene Methode</th>
                  </tr>
                </thead>
                <tbody>
                  {kostenTabelle.map((r, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-muted/20"}>
                      <td className="p-4 font-medium text-foreground">{r.menge}</td>
                      <td className="p-4 text-green-700 font-semibold">{r.preis}</td>
                      <td className="p-4 text-muted-foreground hidden sm:table-cell text-xs">{r.methode}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </div>
        </section>

        <section className="py-10 sm:py-14 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.h2 {...fadeIn} className="text-2xl font-bold text-foreground mb-6">
              6 Spartipps für die Grünschnitt-Entsorgung
            </motion.h2>
            <div className="space-y-3">
              {tipps.map((t, i) => (
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
                    { label: "Was gehört zum Sperrmüll?", href: "/was-gehoert-zum-sperrmuell" },
                    { label: "Entsorgungsguide NRW", href: "/entsorgungsguide" },
                    { label: "Kellerentrümpelung Kosten", href: "/kellerentruempelung" },
                    { label: "Was kostet Sperrmüll?", href: "/was-kostet-sperrmuell" },
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

        <BlogArticleCTA topic="Entsorgung" />
      <CTASection />
      </PageLayout>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Was kostet Grünschnitt entsorgen? Preise & Tipps NRW",
        description: "Was kostet Grünschnitt entsorgen im Rhein-Erft-Kreis und NRW? Alle Wege im Vergleich: Wertstoffhof, Häckseldienst, Container & Entsorgungsfirma.",
        image: "https://stressfreientruempelungen.de/images/gruenschnitt-entsorgen.png",
        author: { "@type": "Organization", name: "Stressfrei Entrümpelungen & Umzüge", url: "https://stressfreientruempelungen.de" },
        publisher: { "@type": "Organization", name: "Stressfrei Entrümpelungen & Umzüge", logo: { "@type": "ImageObject", url: "https://stressfreientruempelungen.de/favicon.webp" } },
        datePublished: "2026-03-25",
        dateModified: "2026-03-25",
        mainEntityOfPage: "https://stressfreientruempelungen.de/gruenschnitt-entsorgen-kosten",
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.frage, acceptedAnswer: { "@type": "Answer", text: faq.antwort } })),
      }) }} />
    </>
  );
}
