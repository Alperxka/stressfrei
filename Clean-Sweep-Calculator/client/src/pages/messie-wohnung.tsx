import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { PageLayout, PageHero, CTASection, InternalLinksSection } from "@/components/layout";
import { motion } from "framer-motion";
import {
  Star,
  Shield,
  Clock,
  HeadphonesIcon,
  CheckCircle2,
  XCircle,
  EyeOff,
  Leaf,
  Briefcase,
  AlertTriangle,
  Bug,
  Flame,
  Timer,
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const benefits = [
  {
    icon: EyeOff,
    title: "Diskretion",
    description:
      "Wir arbeiten absolut diskret. Unsere Fahrzeuge sind neutral beschriftet und unser Team geht respektvoll und einfühlsam mit der Situation um.",
  },
  {
    icon: Leaf,
    title: "Klimaschonend",
    description:
      "Wir setzen auf nachhaltige Entsorgung und recyceln so viel wie möglich. Brauchbare Gegenstände werden gespendet oder weiterverkauft.",
  },
  {
    icon: Briefcase,
    title: "Professionalität",
    description:
      "Unser erfahrenes Team ist auf die Räumung von Messie-Wohnungen spezialisiert und arbeitet effizient, gründlich und hygienisch.",
  },
];

const problems = [
  {
    icon: AlertTriangle,
    title: "Gesundheitsgefährdung",
    text: "In Messie-Wohnungen können sich gesundheitsgefährdende Stoffe wie Schimmel, verdorbene Lebensmittel und Bakterien ansammeln. Eine professionelle Reinigung ist unerlässlich.",
  },
  {
    icon: Bug,
    title: "Schädlingsbefall",
    text: "Durch angesammelten Müll und Lebensmittelreste kann es zu Schädlingsbefall kommen. Unser Team arbeitet in Zusammenarbeit mit Schädlingsbekämpfern.",
  },
  {
    icon: Flame,
    title: "Brandgefahr",
    text: "Übermäßig angehäuftes Material stellt ein erhöhtes Brandrisiko dar. Eine zeitnahe Entrümpelung reduziert diese Gefahr erheblich.",
  },
  {
    icon: Shield,
    title: "Gebäudeschäden",
    text: "Feuchtigkeit und Schimmel können zu schweren Schäden an der Bausubstanz führen. Je früher gehandelt wird, desto geringer sind die Folgeschäden.",
  },
];

const comparisons = [
  {
    title: "Immobilienschutz",
    bad: "Ohne Erfahrung werden Wände und Böden bei der Räumung oft zusätzlich beschädigt.",
    good: "Wir arbeiten sorgfältig und schützen Ihre Immobilie. Alle Arbeiten sind versichert.",
    icon: Shield,
  },
  {
    title: "Zuverlässigkeit",
    bad: "Private Helfer sind oft überfordert von Ausmaß und Zustand einer Messie-Wohnung.",
    good: "Unser Team ist erfahren im Umgang mit Messie-Wohnungen und arbeitet professionell und diskret.",
    icon: Clock,
  },
  {
    title: "Kundenservice",
    bad: "Keine fachgerechte Entsorgung von Sondermüll und gesundheitsgefährdenden Materialien.",
    good: "Wir entsorgen alles fachgerecht und hygienisch. Sie bekommen ein individuelles Festpreis-Angebot.",
    icon: HeadphonesIcon,
  },
];

const reviews = [
  {
    name: "M. Meinke",
    text: "Schnell einen Termin bekommen, pünktlich, freundlich und unkompliziert wurde alles geräumt. Absolut diskret und professionell.",
  },
  {
    name: "Klarabella",
    text: "Ganz toller Service, Terminvergabe schnell und unkompliziert per WhatsApp, sehr sympathisches Team, haben alles mitgenommen und richtig gut gearbeitet.",
  },
  {
    name: "Katy S.",
    text: "Super Team! Sie kamen pünktlich, waren höflich und haben die Arbeit effizient erledigt. Kann ich nur weiterempfehlen.",
  },
];

export default function MessieWohnungPage() {
  useEffect(() => {
    document.title = "Messie-Wohnung entrümpeln | Diskret & professionell | Stressfrei";
    let _canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!_canonical) { _canonical = document.createElement("link"); _canonical.setAttribute("rel", "canonical"); document.head.appendChild(_canonical); }
    _canonical.setAttribute("href", "https://stressfreientruempelungen.de/messie-wohnung");
    const _setOgMeta = (prop: string, val: string) => { let m = document.querySelector(`meta[property="${prop}"]`) as HTMLMetaElement | null; if (!m) { m = document.createElement("meta"); m.setAttribute("property", prop); document.head.appendChild(m); } m.setAttribute("content", val); };
    _setOgMeta("og:url", "https://stressfreientruempelungen.de/messie-wohnung");
    _setOgMeta("og:image", "https://stressfreientruempelungen.de/images/messie-wohnung-professionelle-raeumung.webp");
    _setOgMeta("og:locale", "de_DE");
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Messie-Wohnung professionell räumen lassen. Diskrete und einfühlsame Entrümpelung im Rhein-Erft-Kreis & NRW. Festpreis, besenreine Übergabe, Grundreinigung optional.");
    }
  }, []);

  return (
    <>
    <PageLayout>
      <PageHero
        title="Messie-Wohnung Entrümpelung"
        subtitle="Diskret, professionell und einfühlsam. Wir räumen Messie-Wohnungen schnell und gründlich - mit Respekt und Verständnis."
        highlight="Messie-Wohnung"
      />

      <section className="pb-8 sm:pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeIn}>
            <img
              src="/images/messie-entruempelung-hero.webp"
              alt="Messie-Wohnung Entrümpelung im Rhein-Erft-Kreis – diskreter Service von Stressfrei"
              className="w-full rounded-2xl shadow-lg object-cover aspect-[16/9]"
              width={1200}
              height={675}
              loading="eager"
              fetchpriority="high"
              decoding="async"
              data-testid="img-service-hero"
            />
          </motion.div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div className="text-center mb-14" {...fadeIn}>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3" data-testid="text-benefits-title">
              Stressfrei Messie-Wohnung räumen
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Die Räumung einer Messie-Wohnung erfordert Erfahrung, Einfühlungsvermögen und Professionalität.
              Wir stehen Ihnen diskret und zuverlässig zur Seite.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <motion.div key={b.title} {...fadeIn} transition={{ duration: 0.5, delay: i * 0.1 }}>
                  <Card className="p-6 h-full hover-elevate">
                    <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2" data-testid={`text-benefit-${i}`}>
                      {b.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{b.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-card/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div className="text-center mb-14" {...fadeIn}>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3" data-testid="text-expert-title">
              Verständnis für das Messie-Syndrom
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Das Messie-Syndrom ist eine ernstzunehmende Erkrankung, bei der Betroffene Schwierigkeiten haben,
              sich von Gegenständen zu trennen. Dies führt zu einer übermäßigen Ansammlung von Dingen in der
              Wohnung, die den Alltag und die Lebensqualität stark beeinträchtigen kann. Wir begegnen Betroffenen
              mit Verständnis und Respekt. Unsere Mitarbeiter sind geschult im einfühlsamen Umgang mit
              dieser besonderen Situation.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div className="text-center mb-14" {...fadeIn}>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3" data-testid="text-problems-title">
              Probleme bei einer Messie Wohnung
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Eine Messie-Wohnung bringt verschiedene Herausforderungen mit sich, die professionell angegangen werden müssen.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {problems.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.title} {...fadeIn} transition={{ duration: 0.5, delay: i * 0.1 }}>
                  <Card className="p-6 h-full" data-testid={`card-problem-${i}`}>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-card/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div className="text-center mb-10" {...fadeIn}>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3" data-testid="text-dauer-title">
              Wie lange dauert die Räumung einer Messie-Wohnung?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Die Dauer hängt vom Ausmaß der Vermüllung und der Größe der Wohnung ab. Kleinere Wohnungen
              können innerhalb von 1-2 Tagen geräumt werden. Bei stark vermüllten Wohnungen kann die
              Räumung 3-5 Tage oder länger dauern. Nach der kostenlosen Besichtigung erhalten Sie einen
              genauen Zeitplan und ein verbindliches Festpreisangebot.
            </p>
          </motion.div>
          <motion.div {...fadeIn}>
            <Card className="p-6" data-testid="card-dauer-info">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                  <Timer className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Individuelle Zeitplanung</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Leichte Fälle: 1-2 Tage. Mittlere Fälle: 2-4 Tage. Schwere Fälle: 4-7 Tage.
                    Inklusive Grundreinigung und hygienischer Aufbereitung der Räumlichkeiten.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div className="text-center mb-14" {...fadeIn}>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3" data-testid="text-comparison-title">
              Wieso unsere Kunden so zufrieden sind
            </h2>
          </motion.div>
          <div className="space-y-6">
            {comparisons.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.title} {...fadeIn} transition={{ duration: 0.5, delay: i * 0.1 }}>
                  <Card className="p-6" data-testid={`card-comparison-${i}`}>
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex gap-3 p-4 rounded-md bg-destructive/5">
                        <XCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                        <div>
                          <div className="text-xs font-medium text-destructive mb-1">Private Räumung</div>
                          <p className="text-sm text-muted-foreground">{item.bad}</p>
                        </div>
                      </div>
                      <div className="flex gap-3 p-4 rounded-md bg-primary/5">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <div className="text-xs font-medium text-primary mb-1">Stressfrei Räumung</div>
                          <p className="text-sm text-muted-foreground">{item.good}</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-card/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div className="text-center mb-14" {...fadeIn}>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3" data-testid="text-reviews-title">
              Unsere zufriedenen Kunden
            </h2>
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-accent fill-current" />
              ))}
            </div>
          </motion.div>
          <div className="grid sm:grid-cols-3 gap-5">
            {reviews.map((review, i) => (
              <motion.div key={review.name} {...fadeIn} transition={{ duration: 0.5, delay: i * 0.08 }}>
                <Card className="p-5 h-full" data-testid={`card-review-${i}`}>
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-3.5 h-3.5 text-accent fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">"{review.text}"</p>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-xs font-semibold text-primary">{review.name.charAt(0)}</span>
                      </div>
                      <span className="text-sm font-medium text-foreground">{review.name}</span>
                    </div>
                    <img loading="lazy" src="/images/google-icon.svg" alt="Google" width="20" height="20" className="w-5 h-5" />
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <InternalLinksSection pageKey="messie-wohnung" />
      <CTASection />
    </PageLayout>
    </>
  );
}