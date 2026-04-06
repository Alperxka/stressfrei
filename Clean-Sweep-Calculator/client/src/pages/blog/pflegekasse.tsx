import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { PageLayout, PageHero, CTASection, BlogArticleCTA } from "@/components/layout";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Euro,
  ClipboardCheck,
  FileText,
  Building2,
  Handshake,
  CheckCircle2,
  ExternalLink,
  ArrowLeft,
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const krankenkassen = [
  { name: "Techniker Krankenkasse", url: "https://www.tk.de/techniker/pflegeversicherung/ueberblick-pflegeleistungen-pflegegrade/zu-hause-gepflegt/wohnumfeldverbesserung/wie-stelle-ich-einen-antrag-auf-wohnumfeldverbesserung-2008586" },
  { name: "AOK Rheinland/Hamburg", url: "https://www.aok.de/pk/versichertenservice/wohnumfeldverbessernde-massnahmen-antrag/" },
  { name: "Barmer", url: "https://www.barmer.de/resource/blob/1026366/f7d0d88f89b17f4cd35e03ebc665ed7a/antrag-auf-wohnumfeldverbesserung-44190-data.pdf" },
  { name: "DAK", url: "https://www.dak.de/dak/ihr-anliegen/pflege/wohnraumanpassung-beantragen_13884" },
  { name: "Knappschaft", url: "https://www.knappschaft.de/shareddocs/downloads/formulare/antrag-wohnumfeld-15975.pdf?__blob=publicationFile" },
];

export default function PflegekassePage() {
  useEffect(() => {
    document.title = "Pflegekasse: Kostenübernahme bei Entrümpelung & Umzug für Senioren";
    let _canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!_canonical) { _canonical = document.createElement("link"); _canonical.setAttribute("rel", "canonical"); document.head.appendChild(_canonical); }
    _canonical.setAttribute("href", "https://stressfreientruempelungen.de/kostenuebernahme-durch-die-pflegekasse-bei-entruempelung-und-umzug-fuer-senioren");
    const _setOgMeta = (prop: string, val: string) => { let m = document.querySelector(`meta[property="${prop}"]`) as HTMLMetaElement | null; if (!m) { m = document.createElement("meta"); m.setAttribute("property", prop); document.head.appendChild(m); } m.setAttribute("content", val); };
    _setOgMeta("og:url", "https://stressfreientruempelungen.de/kostenuebernahme-durch-die-pflegekasse-bei-entruempelung-und-umzug-fuer-senioren");
    _setOgMeta("og:image", "https://stressfreientruempelungen.de/images/pflegekasse-senioren-entruempelung-kostenuebernahme.webp");
    _setOgMeta("og:locale", "de_DE");
    _setOgMeta("og:type", "article");
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Erfahren Sie, wann die Pflegekasse Kosten für Entrümpelung oder Umzug übernimmt. Voraussetzungen, Antragsprozess und Tipps für Senioren und Angehörige.");
    }
    const schemaId = "schema-pflegekasse";
    let el = document.getElementById(schemaId) as HTMLScriptElement | null;
    if (!el) { el = document.createElement("script"); el.type = "application/ld+json"; el.id = schemaId; document.head.appendChild(el); }
    el.textContent = JSON.stringify({"@context":"https://schema.org","@type":"Article","headline":"Pflegekasse: Kostenübernahme bei Entrümpelung & Umzug für Senioren","description":"Wann die Pflegekasse Kosten für Entrümpelung oder Umzug übernimmt.","url":"https://stressfreientruempelungen.de/kostenuebernahme-durch-die-pflegekasse-bei-entruempelung-und-umzug-fuer-senioren","datePublished":"2024-12-01","dateModified":"2026-03-17","author":{"@type":"Organization","name":"Stressfrei Entrümpelungen & Umzüge","url":"https://stressfreientruempelungen.de"},"publisher":{"@type":"Organization","name":"Stressfrei Entrümpelungen & Umzüge","logo":{"@type":"ImageObject","url":"https://stressfreientruempelungen.de/favicon.webp"}},"image":"https://stressfreientruempelungen.de/images/professionelle-entruempelung-service-rhein-erft-kreis.webp","mainEntityOfPage":{"@type":"WebPage","@id":"https://stressfreientruempelungen.de/kostenuebernahme-durch-die-pflegekasse-bei-entruempelung-und-umzug-fuer-senioren"}});
    return () => { document.getElementById(schemaId)?.remove(); };
  }, []);

  return (
    <PageLayout>
      <PageHero
        title="Kostenübernahme durch die Pflegekasse"
        subtitle="Erfahren Sie, wie die Pflegekasse bei Entrümpelung und Umzug für Senioren bis zu 4.180 € Zuschuss gewähren kann."
        highlight="Ratgeber"
      />

      <section className="pb-8 sm:pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeIn}>
            <img
              src="/images/seniorenumzug-dienstleistung-nrw.webp"
              alt="Kostenübernahme durch die Pflegekasse bei Entrümpelung und Umzug"
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

          <motion.div {...fadeIn} className="max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8" data-testid="text-intro">
              Ein Umzug oder eine Entrümpelung im Alter ist häufig mit körperlicher, emotionaler und finanzieller Belastung verbunden. Was viele Betroffene und Angehörige nicht wissen: <strong>Unter bestimmten Voraussetzungen kann die Pflegekasse Kosten für einen Seniorenumzug oder eine Entrümpelung übernehmen.</strong>
            </p>
          </motion.div>

          <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.1 }}>
            <Card className="p-6 sm:p-8 mb-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Euro className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-2" data-testid="text-section-zuschuss">
                    Zuschuss der Pflegekasse: Wohnumfeldverbessernde Maßnahmen
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Die Pflegekasse kann gemäß <strong>§ 40 Abs. 4 SGB XI</strong> Zuschüsse von <strong>bis zu 4.180 Euro je Maßnahme</strong> gewähren, wenn es sich um sogenannte <em>wohnumfeldverbessernde Maßnahmen</em> handelt.
                  </p>
                </div>
              </div>

              <h3 className="font-semibold text-foreground mb-3">Voraussetzungen für die Kostenübernahme</h3>
              <p className="text-muted-foreground mb-3">Ein Zuschuss ist möglich, wenn folgende Bedingungen erfüllt sind:</p>
              <ul className="space-y-2 mb-4">
                {[
                  "Es liegt ein anerkannter Pflegegrad (1–5) vor",
                  "Die Maßnahme ermöglicht oder erleichtert die häusliche Pflege",
                  "Der Umzug oder die Entrümpelung fördert die selbstständige Lebensführung",
                  "Der Pflegeaufwand wird reduziert",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-1 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-muted-foreground">
                Typische Beispiele sind der Umzug in eine barrierefreie Wohnung, näher zu Angehörigen oder der Wechsel in eine kleinere, besser geeignete Wohnsituation.
              </p>
            </Card>
          </motion.div>

          <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.15 }}>
            <Card className="p-6 sm:p-8 mb-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <ClipboardCheck className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-2" data-testid="text-section-entruempelung">
                    Kostenübernahme bei Entrümpelungen
                  </h2>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">Eine Entrümpelung bzw. Haushaltsauflösung umfasst in der Regel:</p>
              <ul className="space-y-2 mb-6">
                {["Räumen und Sortieren des Hausrats", "Entsorgung von Möbeln und Gegenständen", "Weitergabe, Verkauf oder Spende verwertbarer Inhalte"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-1 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground mb-3">Solche Maßnahmen werden häufig notwendig bei:</p>
              <ul className="space-y-2">
                {["Umzug ins Pflegeheim", "Umzug zu Angehörigen", "Verkleinerung des Wohnraums", "Todesfall"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-primary">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>

          <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.2 }}>
            <Card className="p-6 sm:p-8 mb-10">
              <h2 className="text-xl font-bold text-foreground mb-4" data-testid="text-section-wann">
                Wann übernimmt die Pflegekasse Entrümpelungskosten?
              </h2>
              <p className="text-muted-foreground mb-4">
                Entrümpelungskosten werden <strong>nicht automatisch</strong>, aber <strong>unter bestimmten Voraussetzungen</strong> übernommen:
              </p>
              <ul className="space-y-2 mb-4">
                {[
                  "Die Entrümpelung gilt als wohnumfeldverbessernde Maßnahme",
                  "Sie erleichtert die Pflege oder ermöglicht ein selbstständiges Wohnen",
                  "Ein Antrag mit Begründung und Kostenvoranschlag wird vor Beginn eingereicht",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-1 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-muted-foreground italic">
                Jeder Antrag wird individuell geprüft – eine pauschale Zusage gibt es nicht.
              </p>
            </Card>
          </motion.div>

          <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.25 }}>
            <Card className="p-6 sm:p-8 mb-10">
              <h2 className="text-xl font-bold text-foreground mb-4" data-testid="text-section-umzugskosten">
                Welche Umzugskosten können übernommen werden?
              </h2>
              <p className="text-muted-foreground mb-4">
                Wird der Umzug als notwendig anerkannt, können unter anderem folgende Kosten bezuschusst werden:
              </p>
              <ul className="space-y-2 mb-4">
                {[
                  "Transport von Möbeln und Hausrat",
                  "Verpackungsmaterial und Fahrtkosten",
                  "Umzugshelfer oder Umzugsunternehmen",
                  "Doppelte Mietkosten (bis zu 3 Monate)",
                  "Entrümpelung und fachgerechte Entsorgung",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-1 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-amber-600 font-medium">
                Wichtig: Die Kosten müssen vorab beantragt und genehmigt werden.
              </p>
            </Card>
          </motion.div>

          <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.3 }}>
            <Card className="p-6 sm:p-8 mb-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-2" data-testid="text-section-antrag">
                    Antragstellung bei der Pflegekasse
                  </h2>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">Für eine Kostenübernahme sind in der Regel erforderlich:</p>
              <ul className="space-y-2 mb-6">
                {[
                  "Schriftlicher Antrag bei der Pflegekasse",
                  "Begründung der Notwendigkeit",
                  "Kostenvoranschlag eines Fachunternehmens",
                  "Ggf. ärztliches Attest oder pflegerische Stellungnahme",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-1 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-muted-foreground mb-6">
                Es empfiehlt sich, vorab Rücksprache mit der Pflegekasse zu halten.
              </p>

              <h3 className="font-semibold text-foreground mb-4">Links zu den Anträgen der größten Krankenkassen</h3>
              <div className="space-y-2">
                {krankenkassen.map((kk, i) => (
                  <a
                    key={i}
                    href={kk.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:underline text-sm"
                    data-testid={`link-krankenkasse-${i}`}
                  >
                    <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                    {kk.name}
                  </a>
                ))}
              </div>
            </Card>
          </motion.div>

          <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.35 }}>
            <Card className="p-6 sm:p-8 mb-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Building2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-2" data-testid="text-section-sozialamt">
                    Kostenübernahme durch das Sozialamt
                  </h2>
                  <p className="text-sm text-muted-foreground">Wenn die Pflegekasse nicht zahlt</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                Übernimmt die Pflegekasse die Kosten nicht oder nur teilweise, kann unter bestimmten Voraussetzungen das <strong>Sozialamt</strong> einspringen.
              </p>
              <h3 className="font-semibold text-foreground mb-3">Voraussetzungen für eine Unterstützung durch das Sozialamt</h3>
              <ul className="space-y-2">
                {[
                  "Nachweisliche finanzielle Bedürftigkeit (z. B. Grundsicherung, ALG II)",
                  "Notwendigkeit der Entrümpelung aus gesundheitlichen oder sozialen Gründen",
                  "Vollständiger Antrag mit Nachweisen zu Einkommen, Vermögen und Wohnsituation",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-1 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-muted-foreground mt-3 italic">Auch hier erfolgt eine Einzelfallprüfung.</p>
            </Card>
          </motion.div>

          <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.4 }}>
            <Card className="p-6 sm:p-8 mb-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Handshake className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-2" data-testid="text-section-unterstuetzung">
                    Unterstützung bei Antrag & Durchführung
                  </h2>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                Wir von <strong>Stressfrei Entrümpelungen & Umzügen</strong> können nicht nur die Arbeiten übernehmen, sondern auch:
              </p>
              <ul className="space-y-2">
                {[
                  "Einen aussagekräftigen Kostenvoranschlag erstellen",
                  "Bei der Antragsstellung unterstützen",
                  "Die Maßnahme pflegekassengerecht dokumentieren",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-1 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>

          <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.45 }}>
            <Card className="p-6 sm:p-8 bg-primary/5 border-primary/20">
              <h2 className="text-xl font-bold text-foreground mb-4" data-testid="text-section-fazit">Fazit</h2>
              <p className="text-muted-foreground leading-relaxed">
                Eine Entrümpelung oder ein Seniorenumzug muss keine finanzielle Überforderung sein. <strong>Mit dem richtigen Antrag und einer guten Begründung sind Zuschüsse von bis zu 4.180 Euro möglich.</strong> Eine frühzeitige Beratung bei zum Beispiel Stressfrei Entrümpelungen & Umzüge erhöht die Erfolgschancen deutlich.
              </p>
            </Card>
          </motion.div>
        </div>
      </section>

      <BlogArticleCTA topic="Haushaltsauflösung" />
      <CTASection />
    </PageLayout>
  );
}
