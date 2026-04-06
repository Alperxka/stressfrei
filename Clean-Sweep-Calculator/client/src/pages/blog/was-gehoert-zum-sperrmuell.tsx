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
  Trash2,
  AlertTriangle,
  Info,
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const sperrmuellJa = [
  { item: "Möbel", beispiel: "Sofas, Schränke, Tische, Stühle, Regale, Betten" },
  { item: "Matratzen", beispiel: "Alle Größen — max. 1 Stück pro Abholung (je nach Gemeinde)" },
  { item: "Teppiche", beispiel: "Gerollt und gebunden — max. 2 m Länge" },
  { item: "Holzmöbel & Holzreste", beispiel: "Bretter, Regale, alte Türen" },
  { item: "Kinderwagen & Fahrräder", beispiel: "Ohne Elektronik" },
  { item: "Gartengeräte (ohne Motor)", beispiel: "Rechen, Schaufeln, Gießkannen" },
  { item: "Badspiegel", beispiel: "Ohne Rahmen aus Metall oder Kunststoff" },
  { item: "Spielzeug (Kunststoff/Holz)", beispiel: "Rutschen, Schaukeln — ohne Elektronik" },
  { item: "Sanitärkeramik", beispiel: "Waschbecken, Toilettenschüsseln, Badewannen" },
  { item: "Jalousien & Rollläden", beispiel: "Ohne Motor" },
];

const sperrmuellNein = [
  { item: "Elektrogeräte", grund: "Müssen zur Elektroschrott-Sammelstelle (z.B. Wertstoffhof)" },
  { item: "Kühlschränke & Gefriergeräte", grund: "Sondermüll wegen FCKW — kostenlose Rücknahme beim Händler" },
  { item: "Fernseher & Monitore", grund: "Elektroschrott — Wertstoffhof oder Händlerrücknahme" },
  { item: "Farben & Lacke", grund: "Schadstoff — nur beim Schadstoffmobil" },
  { item: "Chemikalien & Reinigungsmittel", grund: "Schadstoff — Schadstoffmobil oder Wertstoffhof" },
  { item: "Reifen", grund: "Reifenhändler oder kostenpflichtige Entsorgung" },
  { item: "Asbest-Materialien", grund: "Sondermüll — Fachentsorgung notwendig" },
  { item: "Bauschutt & Ziegelsteine", grund: "Zum Bauschutt-Container oder Wertstoffhof" },
  { item: "Batterien & Akkus", grund: "In Rücknahmeboxen im Handel" },
  { item: "Lebensmittel & Gartenabfälle", grund: "Biotonne oder Kompostanlage" },
];

const gemeinden = [
  { name: "Bergheim", info: "Sperrmüll auf Anfrage beim Rhein-Erft-Kreis anmelden" },
  { name: "Kerpen", info: "Telefonische Anmeldung bei der AVG / GEM erforderlich" },
  { name: "Pulheim", info: "Online-Anmeldung möglich auf der Stadtseite Pulheim" },
  { name: "Frechen", info: "Termin über die Stadtentsorgung Frechen buchen" },
  { name: "Hürth", info: "Sperrmüll-App der Stadt Hürth oder telefonisch" },
  { name: "Erftstadt", info: "Anmeldung beim ZEK (Zweckverband Entsorgungsregion Köln)" },
  { name: "Grevenbroich", info: "Über die GAV (Gemeinschaftsanlage Vollrather Höhe)" },
  { name: "Köln", info: "AWB Köln — Onlineanmeldung oder Telefon" },
];

const faqs = [
  {
    frage: "Wie viel Sperrmüll darf ich beim Rhein-Erft-Kreis anmelden?",
    antwort:
      "Im Rhein-Erft-Kreis ist i.d.R. ein Abholtermin pro Haushalt und Jahr kostenlos. Die genaue Menge (Kubikmeter) hängt von der Gemeinde ab — meist 2–4 m³. Wer mehr hat, zahlt einen Aufpreis oder muss einen Container beauftragen.",
  },
  {
    frage: "Darf ich Sperrmüll einfach auf die Straße stellen?",
    antwort:
      "Nein — Sperrmüll darf nur am offiziellen Abholtermin und maximal 24 Stunden vorher bereitgestellt werden. Wer Möbel einfach auf dem Gehweg lässt, riskiert eine Ordnungswidrigkeit und muss die Entsorgungskosten selbst tragen.",
  },
  {
    frage: "Was kostet es, wenn ich zu viel Sperrmüll habe?",
    antwort:
      "Übermengen kosten im Rhein-Erft-Kreis je nach Gemeinde ca. 15–30 € pro weiterer Kubikmeterpauschale. Alternativ: Container mieten (ca. 150–400 € je nach Größe) oder Entrümpelungsfirma beauftragen.",
  },
  {
    frage: "Können Möbel auch gespendet werden statt Sperrmüll?",
    antwort:
      "Ja! Gut erhaltene Möbel nehmen viele Sozialkaufhäuser und Möbelbörsen im Rhein-Erft-Kreis kostenlos oder gegen kleine Gebühr ab. Das schont die Umwelt und spart Sperrmüll-Kapazitäten. Häufig holen die Einrichtungen sogar ab.",
  },
  {
    frage: "Was passiert mit dem Sperrmüll nach der Abholung?",
    antwort:
      "Sperrmüll wird zunächst sortiert. Verwertbare Materialien (Metall, Holz, Kunststoff) werden recycelt. Der Rest wird thermisch verwertet (Müllverbrennung zur Energieerzeugung). Gut erhaltene Gegenstände landen manchmal in Sozialkaufhäusern.",
  },
  {
    frage: "Kann ich Sperrmüll auch selbst zum Wertstoffhof bringen?",
    antwort:
      "Ja. Die Wertstoffhöfe im Rhein-Erft-Kreis nehmen Sperrmüll zu den Öffnungszeiten an — häufig bis zu einer gewissen Menge kostenlos. Das ist flexibler als auf den Abholtermin zu warten.",
  },
];

export default function WasGehoertZumSperrmuellPage() {
  useEffect(() => {
    document.title = "Was gehört zum Sperrmüll? Komplette Liste NRW 2025 | Stressfrei";
    const desc = document.querySelector('meta[name="description"]');
    if (desc)
      desc.setAttribute(
        "content",
        "Was darf in den Sperrmüll — und was nicht? Komplette Liste für NRW und den Rhein-Erft-Kreis 2025: Möbel, Elektrogeräte, Matratzen, Chemikalien & mehr."
      );
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://stressfreientruempelungen.de/was-gehoert-zum-sperrmuell";
  }, []);

  return (
    <>
      <PageLayout>
        <PageHero
          badge="Ratgeber"
          title="Was gehört zum Sperrmüll?"
          subtitle="Die komplette Liste für NRW 2025 — was darf rein, was nicht, und wie melde ich Sperrmüll im Rhein-Erft-Kreis an"
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
                src="/images/sperrmuell-liste-nrw.png"
                alt="Sperrmüll vor einem Wohnhaus — alte Möbel und Hausrat"
                className="w-full object-cover max-h-80"
                loading="lazy"
              />
            </motion.div>

            <motion.div {...fadeIn} className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Sperrmüll ist nicht einfach „alles, was zu groß für die Tonne ist". Es gibt klare
                Regeln, was rein darf und was nicht — und wer das falsch macht, riskiert Bußgelder
                oder bleibt auf seinen Sachen sitzen. Diese Liste gibt Ihnen einen vollständigen
                Überblick für NRW und den Rhein-Erft-Kreis.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-10 sm:py-14 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <motion.h2 {...fadeIn} className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Das darf in den Sperrmüll
                </motion.h2>
                <div className="space-y-2">
                  {sperrmuellJa.map((s, i) => (
                    <motion.div key={i} {...fadeIn}>
                      <Card className="p-3">
                        <p className="font-semibold text-foreground text-sm">{s.item}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{s.beispiel}</p>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div>
                <motion.h2 {...fadeIn} className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-red-500" />
                  Das gehört NICHT in den Sperrmüll
                </motion.h2>
                <div className="space-y-2">
                  {sperrmuellNein.map((s, i) => (
                    <motion.div key={i} {...fadeIn}>
                      <Card className="p-3 border-red-100">
                        <p className="font-semibold text-foreground text-sm">{s.item}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{s.grund}</p>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 sm:py-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.h2 {...fadeIn} className="text-2xl font-bold text-foreground mb-6">
              Sperrmüll anmelden im Rhein-Erft-Kreis
            </motion.h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {gemeinden.map((g, i) => (
                <motion.div key={i} {...fadeIn}>
                  <Card className="p-4">
                    <p className="font-semibold text-foreground text-sm mb-1">{g.name}</p>
                    <p className="text-xs text-muted-foreground">{g.info}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-10 sm:py-14 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.div {...fadeIn} className="rounded-2xl bg-amber-50 border border-amber-200 p-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Zu viel Sperrmüll? Wir helfen schneller
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Wenn Sie nach einer Haushaltsauflösung, einem Todesfall oder einem Umzug große
                    Mengen loswerden müssen, ist der nächste Sperrmüll-Termin oft zu weit weg. Wir
                    kommen innerhalb von 3–5 Werktagen — fachgerecht, versichert und mit
                    Wertanrechnung. Oft günstiger als Sie denken.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-10 sm:py-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.h2 {...fadeIn} className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-primary" />
              Häufig gestellte Fragen zum Sperrmüll NRW
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
                    { label: "Sperrmüll Rhein-Erft-Kreis 2025", href: "/sperrmull-rhein-erft-kreis" },
                    { label: "Was kostet Sperrmüll?", href: "/was-kostet-sperrmuell" },
                    { label: "Entsorgungsguide NRW", href: "/entsorgungsguide" },
                    { label: "Haushaltsauflösung vorbereiten", href: "/haushaltsaufloesung-vorbereiten" },
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
        headline: "Was gehört zum Sperrmüll? Komplette Liste NRW 2025",
        description: "Was darf in den Sperrmüll — und was nicht? Komplette Liste für NRW und den Rhein-Erft-Kreis 2025.",
        image: "https://stressfreientruempelungen.de/images/sperrmuell-liste-nrw.png",
        author: { "@type": "Organization", name: "Stressfrei Entrümpelungen & Umzüge", url: "https://stressfreientruempelungen.de" },
        publisher: { "@type": "Organization", name: "Stressfrei Entrümpelungen & Umzüge", logo: { "@type": "ImageObject", url: "https://stressfreientruempelungen.de/favicon.webp" } },
        datePublished: "2026-03-25",
        dateModified: "2026-03-25",
        mainEntityOfPage: "https://stressfreientruempelungen.de/was-gehoert-zum-sperrmuell",
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.frage, acceptedAnswer: { "@type": "Answer", text: faq.antwort } })),
      }) }} />
    </>
  );
}
