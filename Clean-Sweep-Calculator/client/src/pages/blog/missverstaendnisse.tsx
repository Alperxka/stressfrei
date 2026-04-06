import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { PageLayout, PageHero, CTASection, BlogArticleCTA } from "@/components/layout";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft, Lightbulb } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const myths = [
  {
    title: "Entrümpelung ist nur für Messiehaushalte",
    text: "Ein weit verbreitetes Missverständnis ist, dass Entrümpelung ausschließlich für Menschen notwendig ist, die unter extremer Unordnung leiden. Doch das Gegenteil ist der Fall: Entrümpelung kann jedem helfen, überflüssigen Ballast loszuwerden und mehr Raum für die wichtigen Dinge im Leben zu schaffen.",
    tipp: "Regelmäßiges Ausmisten verhindert, dass sich Chaos ansammelt und überwältigend wird.",
  },
  {
    title: "Man braucht viel Zeit, um richtig zu entrümpeln",
    text: "Viele denken, dass Entrümpelung ein riesiges Projekt ist, das Tage oder sogar Wochen in Anspruch nimmt. Zwar kann eine große Entrümpelung zeitaufwändig sein, aber mit der richtigen Strategie sind auch kleine Schritte möglich.",
    tipp: "Fangen Sie mit einem Bereich an, z. B. einem Schrank. Kleine Erfolge motivieren!",
  },
  {
    title: "Alles muss sofort weggeworfen werden",
    text: "Nicht alles, was aussortiert wird, muss im Müll landen. Oft gibt es Gegenstände, die noch einen Wert haben und verschenkt, gespendet oder verkauft werden können.",
    tipp: "Teilen Sie Ihre Gegenstände in drei Kategorien: Behalten, Spenden/Verkaufen und Entsorgen.",
  },
  {
    title: "Professionelle Entrümpelungsfirmen sind zu teuer",
    text: "Die Kosten für professionelle Hilfe wirken auf den ersten Blick hoch, aber oft spart man damit viel Zeit, Stress und Energie. Zudem bieten viele Unternehmen flexible Lösungen an, die individuell angepasst werden können.",
    tipp: "Verschenken Sie manche Möbel, so können Sie Entsorgungskosten sparen.",
  },
  {
    title: "Entrümpelung löst alle Probleme",
    text: "Eine Entrümpelung kann vieles erleichtern, aber sie ist kein Allheilmittel. Um langfristig Ordnung zu halten, sind neue Routinen notwendig.",
    tipp: "Setzen Sie auf Minimalismus und hinterfragen Sie künftige Anschaffungen kritisch.",
  },
];

export default function MissverstaendnissePage() {
  useEffect(() => {
    document.title = "Häufige Missverständnisse bei Entrümpelungen | Stressfrei Entrümpelungen";
    let _canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!_canonical) { _canonical = document.createElement("link"); _canonical.setAttribute("rel", "canonical"); document.head.appendChild(_canonical); }
    _canonical.setAttribute("href", "https://stressfreientruempelungen.de/missverstaendnisse-zum-thema-entruempelung");
    const _setOgMeta = (prop: string, val: string) => { let m = document.querySelector(`meta[property="${prop}"]`) as HTMLMetaElement | null; if (!m) { m = document.createElement("meta"); m.setAttribute("property", prop); document.head.appendChild(m); } m.setAttribute("content", val); };
    _setOgMeta("og:url", "https://stressfreientruempelungen.de/missverstaendnisse-zum-thema-entruempelung");
    _setOgMeta("og:image", "https://stressfreientruempelungen.de/images/professionelle-entruempelung-service-rhein-erft-kreis.webp");
    _setOgMeta("og:locale", "de_DE");
    _setOgMeta("og:type", "article");
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Die häufigsten Mythen und Missverständnisse rund um Entrümpelung. Was stimmt wirklich und worauf sollten Sie achten?");
    }
    const schemaId = "schema-missverstaendnisse";
    let el = document.getElementById(schemaId) as HTMLScriptElement | null;
    if (!el) { el = document.createElement("script"); el.type = "application/ld+json"; el.id = schemaId; document.head.appendChild(el); }
    el.textContent = JSON.stringify({"@context":"https://schema.org","@type":"Article","headline":"Häufige Missverständnisse bei Entrümpelungen","description":"Die häufigsten Mythen rund um Entrümpelung – was stimmt wirklich?","url":"https://stressfreientruempelungen.de/missverstaendnisse-zum-thema-entruempelung","datePublished":"2024-09-20","dateModified":"2026-03-17","author":{"@type":"Organization","name":"Stressfrei Entrümpelungen & Umzüge","url":"https://stressfreientruempelungen.de"},"publisher":{"@type":"Organization","name":"Stressfrei Entrümpelungen & Umzüge","logo":{"@type":"ImageObject","url":"https://stressfreientruempelungen.de/favicon.webp"}},"image":"https://stressfreientruempelungen.de/images/professionelle-entruempelung-service-rhein-erft-kreis.webp","mainEntityOfPage":{"@type":"WebPage","@id":"https://stressfreientruempelungen.de/missverstaendnisse-zum-thema-entruempelung"}});
    return () => { document.getElementById(schemaId)?.remove(); };
  }, []);

  return (
    <PageLayout>
      <PageHero
        title="Missverständnisse zum Thema Entrümpelung"
        subtitle="Wir räumen mit den häufigsten Mythen und Missverständnissen rund um das Thema Entrümpelung auf."
        highlight="Ratgeber"
      />

      <section className="pb-8 sm:pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeIn}>
            <img
              src="/images/haushaltsaufloesung-dienstleistung-nrw.webp"
              alt="Missverständnisse zum Thema Entrümpelung"
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
              Entrümpelung ist ein Thema, das oft falsch verstanden wird. Dabei ist eine effektive Entrümpelung nicht nur für ein ordentliches Zuhause entscheidend, sondern auch für das eigene Wohlbefinden. In diesem Artikel klären wir die häufigsten Missverständnisse auf und geben hilfreiche Tipps für einen erfolgreichen Neustart.
            </p>
          </motion.div>

          <div className="space-y-8">
            {myths.map((myth, i) => (
              <motion.div key={i} {...fadeIn} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <Card className="p-6 sm:p-8" data-testid={`card-myth-${i}`}>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <span className="text-primary font-bold">{i + 1}</span>
                    </div>
                    <h2 className="text-xl font-bold text-foreground" data-testid={`text-myth-title-${i}`}>
                      {myth.title}
                    </h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">{myth.text}</p>
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-primary/5 border border-primary/10">
                    <Lightbulb className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" />
                    <p className="text-sm text-foreground">
                      <strong>Tipp:</strong> {myth.tipp}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.5 }}>
            <Card className="p-6 sm:p-8 mt-10 bg-primary/5 border-primary/20">
              <h2 className="text-xl font-bold text-foreground mb-4" data-testid="text-fazit">Fazit</h2>
              <p className="text-muted-foreground leading-relaxed">
                Entrümpelung ist mehr als nur das Entfernen von alten Gegenständen – sie ist ein wichtiger Schritt zu einem organisierten und stressfreien Leben. Lassen Sie sich nicht von Missverständnissen abhalten und nutzen Sie die Vorteile einer klaren und strukturierten Umgebung.
              </p>
              <p className="text-muted-foreground mt-4">
                <strong>Haben Sie weitere Fragen oder benötigen Sie professionelle Hilfe?</strong> Kontaktieren Sie uns gerne – wir stehen Ihnen mit Rat und Tat zur Seite!
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
