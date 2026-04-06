import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { PageLayout, PageHero, CTASection, BlogArticleCTA } from "@/components/layout";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowLeft,
  Building,
  Home,
  Briefcase,
  Hammer,
  BadgeEuro,
  Search,
  ThumbsUp,
  CheckCircle2,
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const kostenTabelle = [
  { raum: "Kellerraum/Garage (10–20 m²)", gering: "300 € – 500 €", mittel: "500 € – 800 €", hoch: "800 € – 1.200 €" },
  { raum: "Wohnung/Büro (50–100 m²)", gering: "700 € – 900 €", mittel: "1.500 € – 3.000 €", hoch: "3.000 € – 5.000 €" },
  { raum: "Haus/Gewerbe (100 m² und größer)", gering: "2.500 € – 3.500 €", mittel: "3.500 € – 5.000 €", hoch: "5.000 € – 8.000 €" },
];

const checklist = [
  "Guter erster Eindruck",
  "Vertrauenswürdiger und authentischer Webauftritt",
  "Positive Kundenbewertungen",
  "Ausreichendes Leistungsspektrum",
  "Unkomplizierte Kontaktaufnahme",
  "Kompetente Beratung",
  "Möglichkeit zur Besichtigung",
  "Versicherung bzw. Haftung bei Beschädigungen",
  "Vollständige Preiskalkulationen mit sämtlichen wichtigen Leistungen",
  "Schriftliches Angebot für eine fachmännische Umsetzung",
  "Besenreine Übergabe",
];

const sections = [
  {
    icon: Building,
    title: "Immobilienentrümpelung",
    text: "Wenn Sie ein Haus verkaufen, ist es nicht möglich, es mit Müll- und Unratschichten zu bedecken. Auf diese Weise werden Sie keinen guten Eindruck machen und Ihre Einnahmen und Ihre Verkaufschancen verringern. Es ist am einfachsten und kostengünstigsten, eine Entrümpelungsfirma zu engagieren, um das Erscheinungsbild Ihrer Immobilie zu verbessern. Darüber hinaus werden sie sicherstellen, dass der Rest des Hauses nicht beschädigt wird.",
  },
  {
    icon: Home,
    title: "Wohn-, Keller- und Garagen-Entrümpelung",
    text: "Sie brauchen nicht auf den Frühling zu warten, um eine gründliche Reinigung und Entrümpelung vorzunehmen. Ein ordentlich gepflegtes Haus strahlt Ruhe, Gelassenheit und Wohlbefinden aus. Eine ganze Wohnung kann manchmal nur von einem kleinen Team von Entrümpelungshelfern gereinigt werden. Nach dem Entfernen von zwei oder drei großen Gegenständen fühlt sich Ihr Zuhause normalerweise geräumiger und heller an! Haben Sie sich überlegt, ob Sie das volle Potenzial Ihres Hauses nutzen können? Eine professionelle Entrümpelungsfirma ist in der Lage, Keller, Dachböden und Garagen zu reinigen.",
  },
  {
    icon: Briefcase,
    title: "Büroentrümpelung",
    text: "Wenn Sie mit einem Büroauszug begonnen haben, werden Sie bemerken, dass es viel Gerümpel gibt, das nicht mehr im Büro willkommen ist. Es wird empfohlen, einen möglichst aufgeräumten und minimalistischen Stil zu wählen, um die Arbeitsatmosphäre zu verbessern. Scanner, klobige Schreibtische, kaputte Schreibtischstühle und vieles mehr können von professionellen Reinigungsfirmen entfernt werden. Wir von Stressfrei Entrümpelungen recyceln so viel Müll wie möglich, um auch etwas Gutes für die Umwelt zu tun!",
  },
  {
    icon: Hammer,
    title: "Haus Renovierung",
    text: "Eine Renovierung verwandelt ein Haus in ein Zuhause und erhöht dabei seine Wertschöpfung. Der Schutt und Entsorgungsmüll aus Sanierungen oder Renovierungen sind nicht zu unterschätzen. Beim Abtransport des Müllcontainers nimmt eine professionelle Entrümpelungsfirma ihn mit auf eine Deponie, wo er nach Gegenständen sortiert wird, die möglicherweise wiederverwertet werden können.",
  },
];

export default function EntruempelungsfirmaPage() {
  useEffect(() => {
    document.title = "Professionelle Entrümpelungsfirma finden | Tipps & Warnsignale | Stressfrei";
    let _canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!_canonical) { _canonical = document.createElement("link"); _canonical.setAttribute("rel", "canonical"); document.head.appendChild(_canonical); }
    _canonical.setAttribute("href", "https://stressfreientruempelungen.de/wie-man-eine-professionelle-entruempelungsfirma-engagiert");
    const _setOgMeta = (prop: string, val: string) => { let m = document.querySelector(`meta[property="${prop}"]`) as HTMLMetaElement | null; if (!m) { m = document.createElement("meta"); m.setAttribute("property", prop); document.head.appendChild(m); } m.setAttribute("content", val); };
    _setOgMeta("og:url", "https://stressfreientruempelungen.de/wie-man-eine-professionelle-entruempelungsfirma-engagiert");
    _setOgMeta("og:image", "https://stressfreientruempelungen.de/images/professionelle-entruempelung-service-rhein-erft-kreis.webp");
    _setOgMeta("og:locale", "de_DE");
    _setOgMeta("og:type", "article");
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Worauf Sie bei der Auswahl einer Entrümpelungsfirma achten sollten. Tipps zur Erkennung seriöser Anbieter, Warnsignale und was ein gutes Angebot ausmacht.");
    }
    const schemaId = "schema-entruempelungsfirma";
    let el = document.getElementById(schemaId) as HTMLScriptElement | null;
    if (!el) { el = document.createElement("script"); el.type = "application/ld+json"; el.id = schemaId; document.head.appendChild(el); }
    el.textContent = JSON.stringify({"@context":"https://schema.org","@type":"Article","headline":"Professionelle Entrümpelungsfirma finden – Tipps & Warnsignale","description":"Worauf Sie bei der Auswahl einer Entrümpelungsfirma achten sollten. Tipps zur Erkennung seriöser Anbieter und Warnsignale.","url":"https://stressfreientruempelungen.de/wie-man-eine-professionelle-entruempelungsfirma-engagiert","datePublished":"2024-11-01","dateModified":"2026-03-17","author":{"@type":"Organization","name":"Stressfrei Entrümpelungen & Umzüge","url":"https://stressfreientruempelungen.de"},"publisher":{"@type":"Organization","name":"Stressfrei Entrümpelungen & Umzüge","logo":{"@type":"ImageObject","url":"https://stressfreientruempelungen.de/favicon.webp"}},"image":"https://stressfreientruempelungen.de/images/professionelle-entruempelung-service-rhein-erft-kreis.webp","mainEntityOfPage":{"@type":"WebPage","@id":"https://stressfreientruempelungen.de/wie-man-eine-professionelle-entruempelungsfirma-engagiert"}});
    return () => { document.getElementById(schemaId)?.remove(); };
  }, []);

  return (
    <PageLayout>
      <PageHero
        title="Wie man eine professionelle Entrümpelungsfirma engagiert"
        subtitle="Alles, was Sie über das Thema Entrümpelungsfirma engagieren wissen müssen."
        highlight="Ratgeber"
      />

      <section className="pb-8 sm:pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeIn}>
            <img
              src="/images/wohnungsaufloesung-dienstleistung-nrw.webp"
              alt="Professionelle Entrümpelungsfirma engagieren"
              className="w-full rounded-2xl shadow-lg object-cover aspect-[16/9]"
              width={1200}
              height={675}
              loading="eager"
              data-testid="img-service-hero"
            />
          </motion.div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Link href="/ratgeber" className="inline-flex items-center gap-2 text-primary hover:underline mb-8 text-sm" data-testid="link-back-ratgeber">
            <ArrowLeft className="w-4 h-4" /> Zurück zum Ratgeber
          </Link>

          <motion.div {...fadeIn}>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10" data-testid="text-intro">
              Möchten Sie Ihren Hausrat reduzieren und Möbel und Dinge, die Sie nicht mehr brauchen, entfernen? Eine gute Wahl! Manchmal kann eine Entrümpelung Wunder vollbringen. Um sicherzustellen, dass Sie nicht alleine mit einer solchen Entrümpelung umgehen müssen, finden Sie im folgenden Artikel alles Wichtige.
            </p>
          </motion.div>

          <div className="space-y-8 mb-10">
            {sections.map((section, i) => {
              const Icon = section.icon;
              return (
                <motion.div key={i} {...fadeIn} transition={{ duration: 0.5, delay: i * 0.1 }}>
                  <Card className="p-6 sm:p-8" data-testid={`card-section-${i}`}>
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <h2 className="text-xl font-bold text-foreground" data-testid={`text-section-title-${i}`}>
                        {section.title}
                      </h2>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{section.text}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.4 }}>
            <Card className="p-6 sm:p-8 mb-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <BadgeEuro className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-bold text-foreground" data-testid="text-section-kosten">
                  Grobe Kosten bei einer Entrümpelung
                </h2>
              </div>
              <p className="text-muted-foreground mb-6">
                Bei der Anstellung einer professionellen Entrümpelungsfirma bekommen Sie in den meisten Fällen keinen Pauschalpreis. Die Kosten hängen von verschiedenen Faktoren ab: Größe des Raumes, Menge der Gegenstände und wie diese entsorgt oder eingelagert werden sollen.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm" data-testid="table-kosten">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 pr-4 font-semibold text-foreground">Räumlichkeit</th>
                      <th className="text-left py-3 pr-4 font-semibold text-foreground">Geringe Menge</th>
                      <th className="text-left py-3 pr-4 font-semibold text-foreground">Mittlere Menge</th>
                      <th className="text-left py-3 font-semibold text-foreground">Hohe Menge</th>
                    </tr>
                  </thead>
                  <tbody>
                    {kostenTabelle.map((row, i) => (
                      <tr key={i} className="border-b border-border/50 last:border-0">
                        <td className="py-3 pr-4 text-foreground font-medium">{row.raum}</td>
                        <td className="py-3 pr-4 text-muted-foreground whitespace-nowrap">{row.gering}</td>
                        <td className="py-3 pr-4 text-muted-foreground whitespace-nowrap">{row.mittel}</td>
                        <td className="py-3 text-muted-foreground whitespace-nowrap">{row.hoch}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </motion.div>

          <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.45 }}>
            <Card className="p-6 sm:p-8 mb-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Search className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-bold text-foreground" data-testid="text-section-finden">
                  Geeignete Entrümpelungsfirma finden: Was man beachten sollte
                </h2>
              </div>
              <p className="text-muted-foreground mb-4">
                Wenn Sie gerade eine Entrümpelungsfirma einstellen wollen, sollten Sie definitiv die nachfolgenden Punkte berücksichtigen:
              </p>
              <ul className="space-y-2">
                {checklist.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-1 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>

          <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.5 }}>
            <Card className="p-6 sm:p-8 bg-primary/5 border-primary/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <ThumbsUp className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-bold text-foreground" data-testid="text-section-lohnenswert">
                  Deshalb ist eine Entrümpelungsfirma lohnenswert
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Eine Entrümpelung bringt oft emotionale Momente mit sich. Es ist nicht immer einfach, sich von Dingen, die man einst liebte, zu trennen. Die Angestellten einer Entrümpelungsfirma können Ihnen helfen und den Abschied erleichtern. Außerdem kümmern sie sich um die gesamte Abwicklung von Anfang bis Ende, damit Sie möglichst wenig Stress erleben.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Eine Entrümpelungsfirma kann bei Ihnen eine <strong>Wertanrechnung</strong> durchführen, wenn sich unter Ihren aussortierten Dingen Güter mit einem hohen finanziellen Wert befinden. Bestenfalls können Sie bei der Entrümpelung sogar noch Geld verdienen! Der Restmüll wird ordnungsgemäß getrennt und entsorgt oder recycelt.
              </p>
            </Card>
          </motion.div>
        </div>
      </section>

      <BlogArticleCTA />
      <CTASection />
    </PageLayout>
  );
}
