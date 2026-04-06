import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { PageLayout, PageHero, CTASection, BlogArticleCTA } from "@/components/layout";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Target, LayoutGrid, Layers3, Box, RefreshCw } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const tipps = [
  {
    icon: Target,
    title: "Setzen Sie sich klare Ziele",
    text: "Bevor Sie mit der Entrümpelung beginnen, ist es wichtig, sich klare Ziele zu setzen. Überlegen Sie, welche Bereiche Ihres Hauses Sie entrümpeln möchten und welches Ergebnis Sie erreichen möchten. Möchten Sie mehr Platz schaffen, die Organisation verbessern oder einfach nur überflüssige Gegenstände loswerden? Indem Sie Ihre Ziele definieren, können Sie Ihre Bemühungen gezielt lenken und motiviert bleiben.",
  },
  {
    icon: LayoutGrid,
    title: "Arbeiten Sie sich Raum für Raum vor",
    text: "Es kann überwältigend sein, das gesamte Haus auf einmal zu entrümpeln. Stattdessen ist es ratsam, sich Raum für Raum vorzuarbeiten. Beginnen Sie beispielsweise mit einem kleineren Bereich wie einem Schrank oder einer Schublade und arbeiten Sie sich dann zu größeren Räumen vor. Auf diese Weise behalten Sie den Überblick und können Ihre Fortschritte besser verfolgen.",
  },
  {
    icon: Layers3,
    title: "Verwenden Sie die 3-Stapel-Methode",
    text: "Eine bewährte Methode bei der Entrümpelung ist die 3-Stapel-Methode. Gehen Sie durch Ihre Besitztümer und teilen Sie sie in drei Stapel auf: Behalten, Entsorgen und Spenden. Behalten Sie nur die Gegenstände, die Sie wirklich benötigen oder die Ihnen Freude bereiten. Alles andere kann entweder entsorgt oder gespendet werden. Diese Methode hilft Ihnen dabei, sich von überflüssigen Dingen zu trennen und Platz für das Wesentliche zu schaffen.",
  },
  {
    icon: Box,
    title: "Nutzen Sie Aufbewahrungslösungen",
    text: "Um Ihr Zuhause ordentlich zu halten, ist es wichtig, über geeignete Aufbewahrungslösungen zu verfügen. Investieren Sie in Aufbewahrungsboxen, Regale, Körbe oder andere Organisationssysteme, um Ihre Gegenstände ordentlich zu verstauen. Stellen Sie sicher, dass Sie Ihre Aufbewahrungslösungen sinnvoll nutzen und diese regelmäßig aufräumen, um Unordnung zu vermeiden.",
  },
  {
    icon: RefreshCw,
    title: "Bleiben Sie konsequent",
    text: "Die Entrümpelung ist keine einmalige Aufgabe, sondern ein fortlaufender Prozess. Um langfristig ein ordentliches Zuhause zu erhalten, ist es wichtig, konsequent zu bleiben. Nehmen Sie sich regelmäßig Zeit, um Ihre Besitztümer zu überprüfen und gegebenenfalls zu entrümpeln. Auf diese Weise vermeiden Sie, dass sich wieder Unordnung ansammelt, und können dauerhaft von einem aufgeräumten Zuhause profitieren.",
  },
];

export default function EntruempelungstippsPage() {
  useEffect(() => {
    document.title = "Entrümpelungstipps: Effektiv entrümpeln | Stressfrei Entrümpelungen";
    let _canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!_canonical) { _canonical = document.createElement("link"); _canonical.setAttribute("rel", "canonical"); document.head.appendChild(_canonical); }
    _canonical.setAttribute("href", "https://stressfreientruempelungen.de/entruempelungstipps");
    const _setOgMeta = (prop: string, val: string) => { let m = document.querySelector(`meta[property="${prop}"]`) as HTMLMetaElement | null; if (!m) { m = document.createElement("meta"); m.setAttribute("property", prop); document.head.appendChild(m); } m.setAttribute("content", val); };
    _setOgMeta("og:url", "https://stressfreientruempelungen.de/entruempelungstipps");
    _setOgMeta("og:image", "https://stressfreientruempelungen.de/images/professionelle-entruempelung-service-rhein-erft-kreis.webp");
    _setOgMeta("og:locale", "de_DE");
    _setOgMeta("og:type", "article");
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Praktische Tipps für eine effektive Entrümpelung. Ob selbst entrümpeln oder Profi beauftragen — so sparen Sie Zeit, Geld und Nerven.");
    }
    const schemaId = "schema-entruempelungstipps";
    let el = document.getElementById(schemaId) as HTMLScriptElement | null;
    if (!el) { el = document.createElement("script"); el.type = "application/ld+json"; el.id = schemaId; document.head.appendChild(el); }
    el.textContent = JSON.stringify({"@context":"https://schema.org","@type":"Article","headline":"Entrümpelungstipps: Effektiv und stressfrei entrümpeln","description":"Praktische Tipps für eine effektive Entrümpelung. So sparen Sie Zeit, Geld und Nerven.","url":"https://stressfreientruempelungen.de/entruempelungstipps","datePublished":"2024-10-15","dateModified":"2026-03-17","author":{"@type":"Organization","name":"Stressfrei Entrümpelungen & Umzüge","url":"https://stressfreientruempelungen.de"},"publisher":{"@type":"Organization","name":"Stressfrei Entrümpelungen & Umzüge","logo":{"@type":"ImageObject","url":"https://stressfreientruempelungen.de/favicon.webp"}},"image":"https://stressfreientruempelungen.de/images/professionelle-entruempelung-service-rhein-erft-kreis.webp","mainEntityOfPage":{"@type":"WebPage","@id":"https://stressfreientruempelungen.de/entruempelungstipps"}});
    return () => { document.getElementById(schemaId)?.remove(); };
  }, []);

  return (
    <PageLayout>
      <PageHero
        title="Effektive Entrümpelung: Tipps und Tricks"
        subtitle="Praktische Tipps für eine erfolgreiche Entrümpelung – ob selbst gemacht oder mit professioneller Hilfe."
        highlight="Ratgeber"
      />

      <section className="pb-8 sm:pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeIn}>
            <img
              src="/images/entruempelung-dienstleistung-nrw.webp"
              alt="Effektive Entrümpelung Tipps und Tricks"
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
              Eine Entrümpelung muss weder stressig noch überwältigend sein. Mit den richtigen Strategien und einer guten Planung können Sie Ihr Zuhause Schritt für Schritt in eine angenehme und organisierte Umgebung verwandeln. Hier sind unsere fünf besten Tipps.
            </p>
          </motion.div>

          <div className="space-y-8">
            {tipps.map((tipp, i) => {
              const Icon = tipp.icon;
              return (
                <motion.div key={i} {...fadeIn} transition={{ duration: 0.5, delay: i * 0.1 }}>
                  <Card className="p-6 sm:p-8" data-testid={`card-tipp-${i}`}>
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <div className="relative">
                          <Icon className="w-5 h-5 text-primary" />
                          <span className="absolute -top-3 -right-3 w-5 h-5 rounded-full bg-primary text-white text-xs flex items-center justify-center font-bold">
                            {i + 1}
                          </span>
                        </div>
                      </div>
                      <h2 className="text-xl font-bold text-foreground pt-2" data-testid={`text-tipp-title-${i}`}>
                        {tipp.title}
                      </h2>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{tipp.text}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.5 }}>
            <Card className="p-6 sm:p-8 mt-10 bg-primary/5 border-primary/20">
              <h2 className="text-xl font-bold text-foreground mb-4" data-testid="text-fazit">Fazit</h2>
              <p className="text-muted-foreground leading-relaxed">
                Mit diesen Tipps und Tricks sollte Ihnen die Entrümpelung Ihres Zuhauses leichter fallen. Erinnern Sie sich daran, dass es keine eilige Aufgabe ist und dass kleine Schritte große Fortschritte bedeuten können. Nehmen Sie sich Zeit, um Ihre Besitztümer zu überprüfen und schaffen Sie so eine angenehme und organisierte Umgebung in Ihrem Zuhause.
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
