import { useEffect } from "react";
import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { PageLayout, PageHero, CTASection, BlogArticleCTA } from "@/components/layout";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  CheckCircle2,
  XCircle,
  Euro,
  Trash2,
  HelpCircle,
  PhoneCall,
  ShieldCheck,
  AlertTriangle,
  Clock,
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
    titel: "Inventur machen — was kommt mit?",
    text: "Bevor irgendetwas raus kommt: Entscheiden Sie, welche Geräte, Töpfe und Geschirr mit in die neue Wohnung kommen. Kleben Sie Aufkleber oder machen Sie Fotos zur Orientierung.",
  },
  {
    nr: "02",
    titel: "Elektrogeräte fachgerecht entfernen",
    text: "Einbaugeräte (Herd, Kühlschrank, Spülmaschine) müssen sachkundig ausgebaut werden. Gasanschlüsse nur vom Fachmann! Elektroanschlüsse vor dem Ausbau sichern.",
  },
  {
    nr: "03",
    titel: "Küchenmöbel demontieren",
    text: "Hängeschränke, Unterschränke und die Arbeitsplatte werden abgebaut und ausgebaut. Wände und Boden prüfen — oft sind Schäden oder Schimmel dahinter verborgen.",
  },
  {
    nr: "04",
    titel: "Entsorgung organisieren",
    text: "Elektrogeräte zur Elektroschrott-Sammelstelle, Möbel zum Sperrmüll oder in die Entrümpelung. Scharfes Besteck, Glasbruch und Chemikalien separat entsorgen.",
  },
  {
    nr: "05",
    titel: "Wertsachen prüfen & verkaufen",
    text: "Hochwertige Töpfe, Markenporzella oder neuwertige Geräte haben Wiederverkaufswert. Ebay Kleinanzeigen oder Sozialkaufhäuser sind gute Anlaufstellen.",
  },
  {
    nr: "06",
    titel: "Reinigung & Übergabe",
    text: "Fettablagerungen, Kalk und Schimmelreste gründlich entfernen. Für eine besenreine Übergabe an den Vermieter ist die Küche oft der aufwändigste Raum.",
  },
];

const wasReinDarf = [
  "Töpfe und Pfannen ohne Antihaftbeschichtung → Metall-Wertstoff",
  "Keramik und Porzellan → Restmüll oder Sperrmüll",
  "Glasgeschirr ohne Verpackung → Restmüll",
  "Holzmöbel → Sperrmüll oder Holzcontainer",
  "Plastikbehälter → gelbe Tonne / Recyclinghof",
];

const wasNichtReinDarf = [
  "Kühlschränke → Elektroschrott-Rücknahme (kostenlos beim Händler oder Wertstoffhof)",
  "Backöfen und Herde → Elektroschrott-Sammlung",
  "Spülmaschinen → Elektroschrott",
  "Lebensmittelreste → Bioabfall, nie in die Kanalisation",
  "Chemische Reinigungsmittel → Schadstoffmobil",
  "Fette und Öle → Schadstoffmobil, nie in den Ausguss",
];

const kostenTabelle = [
  {
    leistung: "Kleiner Küchenabbau (2–3 m Küchenzeile)",
    von: "300 €",
    bis: "700 €",
    hinweis: "Inkl. Entsorgung",
  },
  {
    leistung: "Standard-Einbauküche (4–6 m)",
    von: "600 €",
    bis: "1.400 €",
    hinweis: "Inkl. Elektrogeräte",
  },
  {
    leistung: "Große Küche oder Wohnküche",
    von: "1.000 €",
    bis: "2.500 €",
    hinweis: "Je nach Ausbau",
  },
  {
    leistung: "Demontage ohne Entsorgung",
    von: "150 €",
    bis: "450 €",
    hinweis: "Abtransport durch Sie",
  },
  {
    leistung: "Nur Entsorgung (ohne Demontage)",
    von: "100 €",
    bis: "350 €",
    hinweis: "Bereits ausgebaut",
  },
];

const faqs = [
  {
    frage: "Was kostet es, eine Einbauküche zu entrümpeln und zu entsorgen?",
    antwort:
      "Eine Standard-Einbauküche (4–6 m) kostet inklusive Demontage und Entsorgung ca. 600–1.400 €. Der genaue Preis hängt vom Zustand, der Größe und dem Aufwand für Elektrogeräte ab.",
  },
  {
    frage: "Muss ein Elektriker die Einbaugeräte ausbauen?",
    antwort:
      "Elektrische Einbaugeräte (Herd, Backofen, Spülmaschine) können in der Regel vom Entrümpler ausgebaut werden — nach Abschaltung durch einen Elektriker. Gasanschlüsse müssen immer von einem Fachmann gelöst werden.",
  },
  {
    frage: "Wohin mit alten Elektrogeräten aus der Küche?",
    antwort:
      "Kühlschränke, Backöfen, Spülmaschinen und andere Elektrogeräte müssen zu einem Elektroschrott-Rücknahmepunkt. Im Rhein-Erft-Kreis gibt es kostenlose Annahmestellen beim Wertstoffhof. Händler sind verpflichtet, alte Geräte beim Kauf kostenlos zurückzunehmen.",
  },
  {
    frage: "Kann ich die alte Küche verkaufen statt zu entsorgen?",
    antwort:
      "Ja — gut erhaltene Einbauküchen haben durchaus einen Wiederverkaufswert. Plattformen wie Ebay Kleinanzeigen oder lokale Sozialkaufhäuser nehmen funktionstüchtige Küchen oft an. Alternativ können wir bei der kostenlosen Besichtigung den Wert einschätzen.",
  },
  {
    frage: "Wie lange dauert die Küchenentleerung?",
    antwort:
      "Eine kleine Küche ist in 2–4 Stunden ausgebaut und abtransportiert. Größere Einbauküchen mit vielen Geräten können einen halben bis ganzen Tag dauern.",
  },
  {
    frage: "Macht Ihr auch den Abbau und die Entsorgung im Rhein-Erft-Kreis?",
    antwort:
      "Ja. Wir sind in Bergheim, Kerpen, Pulheim, Frechen, Hürth, Erftstadt und dem gesamten Rhein-Erft-Kreis aktiv. Küche entrümpeln, abbauen und entsorgen — alles aus einer Hand.",
  },
];

export default function KuecheEntruempelnPage() {
  useEffect(() => {
    document.title =
      "Küche entrümpeln & entsorgen: Kosten, Ablauf & Tipps NRW | Stressfrei";
    const desc = document.querySelector('meta[name="description"]');
    if (desc)
      desc.setAttribute(
        "content",
        "Küche entrümpeln und entsorgen im Rhein-Erft-Kreis & NRW: Kosten, Ablauf Schritt für Schritt, was in den Sperrmüll darf und wie Sie die Übergabe schaffen."
      );
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://stressfreientruempelungen.de/kueche-entruempeln";
  }, []);

  return (
    <>
      <PageLayout>
        <PageHero
          badge="Ratgeber"
          title="Küche entrümpeln & entsorgen"
          subtitle="Ablauf, Kosten und was in den Sperrmüll darf — für Mietwohnungen und Häuser im Rhein-Erft-Kreis & NRW"
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
                src="/images/kueche-entruempeln-entsorgen.jpg"
                alt="Küche entrümpeln und entsorgen — Einbauküche wird abgebaut"
                className="w-full object-cover max-h-80"
                loading="lazy"
              />
            </motion.div>

            <motion.div {...fadeIn} className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Die Küche ist oft der aufwändigste Raum bei einer Haushaltsauflösung oder einem
                Umzug. Schwere Einbaugeräte, Fettablagerungen, Chemikalien und Sondermüll — hier
                braucht es einen klaren Plan. Dieser Ratgeber zeigt Ihnen, wie Sie eine Küche
                systematisch entrümpeln, was entsorgt werden darf und was es kostet.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-10 sm:py-14 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.h2 {...fadeIn} className="text-2xl font-bold text-foreground mb-2">
              Schritt für Schritt: Küche entrümpeln
            </motion.h2>
            <motion.p {...fadeIn} className="text-muted-foreground mb-8">
              In dieser Reihenfolge läuft eine professionelle Küchenentrümpelung ab.
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
            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <motion.h2 {...fadeIn} className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" /> Was darf in den Sperrmüll?
                </motion.h2>
                <div className="space-y-2">
                  {wasReinDarf.map((t, i) => (
                    <motion.div key={i} {...fadeIn} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                      {t}
                    </motion.div>
                  ))}
                </div>
              </div>
              <div>
                <motion.h2 {...fadeIn} className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-red-500" /> Was NICHT in den Sperrmüll darf
                </motion.h2>
                <div className="space-y-2">
                  {wasNichtReinDarf.map((t, i) => (
                    <motion.div key={i} {...fadeIn} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      {t}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 sm:py-14 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.h2 {...fadeIn} className="text-2xl font-bold text-foreground mb-2">
              <Euro className="inline w-6 h-6 text-primary mr-2" />
              Was kostet eine Küchenentrümpelung?
            </motion.h2>
            <motion.p {...fadeIn} className="text-muted-foreground mb-6">
              Richtwerte für den Rhein-Erft-Kreis — inkl. Demontage und Entsorgung.
            </motion.p>
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
                      <td className="p-4 text-green-700 font-semibold">{row.von}</td>
                      <td className="p-4 text-foreground">{row.bis}</td>
                      <td className="p-4 text-muted-foreground hidden sm:table-cell text-xs">{row.hinweis}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
            <motion.p {...fadeIn} className="text-xs text-muted-foreground mt-3">
              * Richtwerte — kostenloses Angebot nach Besichtigung. Oft günstiger durch
              Wertanrechnung verwertbarer Geräte.
            </motion.p>
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
                    Küche entrümpeln mit Stressfrei — was wir mitbringen
                  </h2>
                  <ul className="space-y-2">
                    {[
                      "Werkzeug für Küchendemontage inklusive",
                      "Fachgerechte Entsorgung von Elektroschrott & Sperrmüll",
                      "Wertanrechnung: Intakte Geräte senken Ihren Preis",
                      "Besenreine Übergabe an den Vermieter auf Wunsch",
                      "Einsatz im gesamten Rhein-Erft-Kreis — Bergheim, Kerpen, Pulheim & Co.",
                      "Festpreisangebot — keine versteckten Stundenkosten",
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
                    { label: "Entsorgungsguide NRW", href: "/entsorgungsguide" },
                    { label: "Was kostet Sperrmüll?", href: "/was-kostet-sperrmuell" },
                    { label: "Haushaltsauflösung vorbereiten", href: "/haushaltsaufloesung-vorbereiten" },
                    { label: "Wohnungsauflösung: Selbst oder Firma?", href: "/wohnungsaufloesung-selbst-oder-firma" },
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

        <BlogArticleCTA />
      <CTASection />
      </PageLayout>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Küche entrümpeln & entsorgen: Kosten, Ablauf & Tipps NRW",
            description:
              "Küche entrümpeln und entsorgen im Rhein-Erft-Kreis & NRW: Kosten, Ablauf, was in den Sperrmüll darf und wie Sie die Wohnungsübergabe schaffen.",
            image: "https://stressfreientruempelungen.de/images/entruempelung-dienstleistung-nrw.webp",
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
            mainEntityOfPage: "https://stressfreientruempelungen.de/kueche-entruempeln",
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
