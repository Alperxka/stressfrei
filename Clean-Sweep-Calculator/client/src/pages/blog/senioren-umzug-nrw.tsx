import { useEffect } from "react";
import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { PageLayout, PageHero, CTASection, BlogArticleCTA } from "@/components/layout";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  CheckCircle2,
  Euro,
  Heart,
  HelpCircle,
  PhoneCall,
  ShieldCheck,
  Clock,
  MapPin,
  Users,
  Star,
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const besonderheiten = [
  {
    icon: <Heart className="w-5 h-5 text-primary" />,
    titel: "Emotionale Begleitung",
    text: "Ein Seniorenumzug ist oft mit dem Abschied von einem langjährigen Zuhause verbunden. Wir nehmen uns Zeit, hören zu und arbeiten in Ihrem Tempo.",
  },
  {
    icon: <Clock className="w-5 h-5 text-primary" />,
    titel: "Flexibler Zeitplan",
    text: "Keine Hetze — wir planen gemeinsam, wann was passiert. Auch mehrtägige Umzüge mit Pausen sind möglich.",
  },
  {
    icon: <Users className="w-5 h-5 text-primary" />,
    titel: "Möbelmontage & Aufbau",
    text: "Wir bauen Möbel ab und im neuen Zuhause wieder auf — damit Sie sofort in Ihre neue Wohnung einziehen können, ohne Chaos.",
  },
  {
    icon: <MapPin className="w-5 h-5 text-primary" />,
    titel: "Lokale Expertise NRW",
    text: "Rhein-Erft-Kreis, Köln, Düsseldorf, Aachen — wir kennen die Region und alle lokalen Besonderheiten beim Umzug in Seniorenheime und betreutes Wohnen.",
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-primary" />,
    titel: "Vollversichert",
    text: "Alle Transporte sind vollversichert. Ihre Erinnerungsstücke und wertvollen Möbel sind bei uns in sicheren Händen.",
  },
  {
    icon: <Euro className="w-5 h-5 text-primary" />,
    titel: "Pflegekasse & Sozialhilfe",
    text: "In bestimmten Fällen übernimmt die Pflegekasse oder das Sozialamt die Umzugskosten. Wir beraten Sie dazu und stellen alle nötigen Dokumente aus.",
  },
];

const schritte = [
  {
    nr: "01",
    titel: "Beratungsgespräch & Besichtigung",
    text: "Kostenlos und unverbindlich kommen wir zu Ihnen nach Hause — oder zu Ihren Angehörigen. Wir schauen gemeinsam, was umzieht, was gelagert, verschenkt oder entsorgt wird.",
  },
  {
    nr: "02",
    titel: "Festpreisangebot erstellen",
    text: "Sie erhalten ein schriftliches Festpreisangebot. Keine Stundenabrechnungen, keine Überraschungen. Was wir anbieten, gilt.",
  },
  {
    nr: "03",
    titel: "Einpackservice & Vorbereitung",
    text: "Auf Wunsch packen wir alles sorgfältig ein — mit speziellem Schutz für Porzellan, Antiquitäten und persönliche Erinnerungsstücke.",
  },
  {
    nr: "04",
    titel: "Transport ins neue Zuhause",
    text: "Mit modernen Fahrzeugen und erfahrenen Möbelpackern transportieren wir Ihren Hausrat sicher ans Ziel — Seniorenheim, betreutes Wohnen oder neue Wohnung.",
  },
  {
    nr: "05",
    titel: "Aufbau & Einrichtung",
    text: "Möbel aufbauen, Bilder aufhängen, Kartons auspacken — wir sorgen dafür, dass Sie sich vom ersten Tag an zu Hause fühlen.",
  },
  {
    nr: "06",
    titel: "Alte Wohnung auflösen",
    text: "Was nicht mitkommt: Wir entrümpeln, entsorgen fachgerecht und übergeben die alte Wohnung besenrein an den Vermieter.",
  },
];

const kostenTabelle = [
  {
    leistung: "Seniorenumzug 1-Zimmer-Wohnung",
    von: "400 €",
    bis: "800 €",
    hinweis: "Inkl. Möbelaufbau",
  },
  {
    leistung: "Seniorenumzug 2-Zimmer-Wohnung",
    von: "700 €",
    bis: "1.400 €",
    hinweis: "Inkl. Einpackservice optional",
  },
  {
    leistung: "Seniorenumzug 3-Zimmer-Wohnung",
    von: "1.100 €",
    bis: "2.200 €",
    hinweis: "2–3 Helfer",
  },
  {
    leistung: "Kombi: Umzug + Wohnungsauflösung",
    von: "1.500 €",
    bis: "4.000 €",
    hinweis: "Alles aus einer Hand",
  },
  {
    leistung: "Nur Wohnungsauflösung Senioren",
    von: "500 €",
    bis: "2.500 €",
    hinweis: "Wertanrechnung möglich",
  },
];

const bewertungen = [
  {
    name: "Monika K., Bergheim",
    text: "Unglaublich einfühlsam und professionell. Meine Mutter ist 82 und der Umzug ins Seniorenheim war für uns alle schwer. Das Team hat alles aufgebaut und sogar Bilder aufgehängt. Danke!",
    sterne: 5,
  },
  {
    name: "Hans-Werner T., Pulheim",
    text: "Von der Besichtigung bis zur Übergabe der alten Wohnung — alles aus einer Hand. Festpreis eingehalten, keine Überraschungen. Kann ich jedem empfehlen.",
    sterne: 5,
  },
  {
    name: "Familie Linden, Kerpen",
    text: "Wir haben den Umzug und die Entrümpelung des Elternhauses gemeinsam gebucht. Sehr strukturiert, sehr freundlich. Die Pflegekasse hat einen Teil übernommen — dazu gab's gute Beratung.",
    sterne: 5,
  },
];

const faqs = [
  {
    frage: "Übernimmt die Pflegekasse die Kosten für einen Seniorenumzug?",
    antwort:
      "Die Pflegekasse kann unter bestimmten Voraussetzungen Umzugskosten übernehmen — z.B. wenn der Umzug pflegebedingt notwendig ist (z.B. Umzug in eine Pflegeeinrichtung oder altersgerechte Wohnung). Sprechen Sie uns an — wir helfen bei der Antragstellung.",
  },
  {
    frage: "Wir organisieren den Umzug für unsere Eltern — was müssen wir beachten?",
    antwort:
      "Am wichtigsten: Frühzeitig planen. Mindestens 4–6 Wochen Vorlauf sind ideal. Klären Sie, was mitkommt, was in die neue Wohnung passt und was aufgelöst wird. Wir beraten Sie gerne kostenlos bei einem Vor-Ort-Termin.",
  },
  {
    frage: "Was kostet ein Seniorenumzug im Rhein-Erft-Kreis?",
    antwort:
      "Je nach Größe der Wohnung und Leistungsumfang zwischen ca. 400 und 4.000 €. Kombinationsangebote aus Umzug und Wohnungsauflösung sind oft günstiger als Einzelbuchungen.",
  },
  {
    frage: "Könnt Ihr auch Antiquitäten und wertvolle Möbel sicher transportieren?",
    antwort:
      "Ja. Wir setzen Spezialverpackung für empfindliche Gegenstände ein. Kunstgegenstände, Porzellan, Antiquitäten und wertvolle Möbel werden mit besonderer Sorgfalt behandelt.",
  },
  {
    frage: "Was passiert mit Sachen, die ins neue Zuhause nicht passen?",
    antwort:
      "Wir sortieren gemeinsam: Was kann verschenkt werden? Was hat Wiederverkaufswert? Was muss entsorgt werden? Verwertbare Gegenstände werden angerechnet — das senkt Ihren Gesamtpreis (Wertanrechnung).",
  },
  {
    frage: "Macht Ihr auch Seniorenumzüge nach Köln, Düsseldorf oder Aachen?",
    antwort:
      "Ja. Wir sind im gesamten Rheinland aktiv — von unserem Standort im Rhein-Erft-Kreis fahren wir nach Köln, Düsseldorf, Aachen, Bonn und darüber hinaus.",
  },
];

export default function SeniorenUmzugNrwPage() {
  useEffect(() => {
    document.title =
      "Senioren Umzug NRW: Altersgerechter Umzug mit Profis | Stressfrei";
    const desc = document.querySelector('meta[name="description"]');
    if (desc)
      desc.setAttribute(
        "content",
        "Seniorenumzug im Rhein-Erft-Kreis & NRW: Einfühlsam, professionell und mit Festpreis. Alles aus einer Hand — Umzug, Wohnungsauflösung und Pflegekasse-Beratung."
      );
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://stressfreientruempelungen.de/senioren-umzug-nrw";
  }, []);

  return (
    <>
      <PageLayout>
        <PageHero
          badge="Umzugsratgeber"
          title="Senioren Umzug NRW"
          subtitle="Altersgerechter Umzug mit Profis — einfühlsam, sicher und zu einem fairen Festpreis im Rhein-Erft-Kreis & ganz NRW"
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
                src="/images/senioren-umzug-nrw.png"
                alt="Senioren Umzug NRW — Professionelle Möbelpacker helfen älterem Ehepaar beim Umzug"
                className="w-full object-cover max-h-80"
                loading="lazy"
              />
            </motion.div>

            <motion.div {...fadeIn} className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ein Seniorenumzug ist keine normale Logistikaufgabe. Hinter jedem Karton stecken
                Jahrzehnte an Erinnerungen. Ob Umzug ins betreute Wohnen, ins Seniorenheim oder
                einfach in eine kleinere altersgerechte Wohnung — wir begleiten Sie und Ihre
                Familie im Rhein-Erft-Kreis und ganz NRW mit Einfühlungsvermögen und
                Professionalität.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-10 sm:py-14 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.h2 {...fadeIn} className="text-2xl font-bold text-foreground mb-6">
              Was einen Seniorenumzug besonders macht
            </motion.h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {besonderheiten.map((b, i) => (
                <motion.div key={i} {...fadeIn}>
                  <Card className="p-5 h-full">
                    <div className="flex items-center gap-2 mb-2">
                      {b.icon}
                      <h3 className="font-semibold text-foreground text-sm">{b.titel}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{b.text}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-10 sm:py-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.h2 {...fadeIn} className="text-2xl font-bold text-foreground mb-2">
              Ablauf: So läuft ein Seniorenumzug mit uns ab
            </motion.h2>
            <motion.p {...fadeIn} className="text-muted-foreground mb-8">
              Schritt für Schritt — transparent, verlässlich und in Ihrem Tempo.
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

        <section className="py-10 sm:py-14 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.h2 {...fadeIn} className="text-2xl font-bold text-foreground mb-2">
              <Euro className="inline w-6 h-6 text-primary mr-2" />
              Was kostet ein Seniorenumzug in NRW?
            </motion.h2>
            <motion.p {...fadeIn} className="text-muted-foreground mb-6">
              Richtwerte für den Rhein-Erft-Kreis — inkl. Möbelaufbau, exkl. Fernumzüge.
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
              * Richtwerte — genaues Festpreisangebot nach kostenloser Besichtigung. Pflegekasse
              kann unter Umständen einen Teil übernehmen.
            </motion.p>
          </div>
        </section>

        <section className="py-10 sm:py-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.h2 {...fadeIn} className="text-2xl font-bold text-foreground mb-6">
              Was unsere Kunden sagen
            </motion.h2>
            <div className="space-y-4">
              {bewertungen.map((b, i) => (
                <motion.div key={i} {...fadeIn}>
                  <Card className="p-5">
                    <div className="flex mb-2">
                      {Array.from({ length: b.sterne }).map((_, j) => (
                        <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-2 italic">
                      "{b.text}"
                    </p>
                    <p className="text-xs font-semibold text-foreground">{b.name}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-10 sm:py-14 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.h2 {...fadeIn} className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-primary" />
              Häufig gestellte Fragen zum Seniorenumzug
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
                    { label: "Kostenübernahme durch die Pflegekasse", href: "/kostenuebernahme-durch-die-pflegekasse-bei-entruempelung-und-umzug-fuer-senioren" },
                    { label: "Umzugscheckliste 2025", href: "/umzugscheckliste" },
                    { label: "Umzugskosten Rhein-Erft-Kreis", href: "/umzugskosten-rhein-erft-kreis" },
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

        <BlogArticleCTA topic="Umzug" />
      <CTASection />
      </PageLayout>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Senioren Umzug NRW: Altersgerechter Umzug mit Profis",
            description:
              "Seniorenumzug im Rhein-Erft-Kreis & NRW: Einfühlsam, professionell und mit Festpreis. Alles aus einer Hand — Umzug, Wohnungsauflösung und Pflegekasse-Beratung.",
            image:
              "https://stressfreientruempelungen.de/images/seniorenumzug-professionell-rhein-erft-kreis.webp",
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
              "https://stressfreientruempelungen.de/senioren-umzug-nrw",
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
