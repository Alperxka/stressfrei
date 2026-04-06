import { useEffect } from "react";
import { Link } from "wouter";
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
  Armchair,
  Heart,
  Timer,
  Phone,
  Eye,
  CalendarCheck,
  Home,
  Building2,
  HeartHandshake,
  MapPin,
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const benefits = [
  {
    icon: Armchair,
    title: "Sie müssen nichts tragen",
    description:
      "Unsere Mitarbeiter entrümpeln alles, was Sie loswerden wollen. Lehnen Sie sich entspannt zurück.",
  },
  {
    icon: Heart,
    title: "Emotionale Entlastung",
    description:
      "Wenn der Verlust eines geliebten Menschen der Grund für eine Haushaltsauflösung ist, kann die Beauftragung von Profis eine große Erleichterung sein.",
  },
  {
    icon: Timer,
    title: "Sie sparen Zeit",
    description:
      "Die allermeisten unserer Haushaltsauflösungen erledigen wir innerhalb eines Tages. Besenreine Übergabe am Abend.",
  },
];

const reasons = [
  {
    icon: Home,
    title: "Umzug ins Pflegeheim",
    description: "Ein Umzug in ein Alten- oder Pflegeheim ist oft mit der Auflösung der Wohnung verbunden. In der neuen Wohnung ist oft kein Platz für alle Erinnerungsstücke.",
  },
  {
    icon: HeartHandshake,
    title: "Todesfall in der Familie",
    description: "Eine Wohnung nach einem Todesfall auflösen zu müssen ist belastend. Wir übernehmen diese Aufgabe einfühlsam und respektvoll.",
  },
  {
    icon: Building2,
    title: "Wohnungswechsel",
    description: "Ob Umzug, Verkleinerung oder Neuanfang - wir helfen Ihnen, sich professionell und schnell von nicht mehr benötigten Gegenständen zu trennen.",
  },
];

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Kontakt aufnehmen",
    description: "Rufen Sie uns an oder schreiben Sie uns. Wir besprechen Ihr Anliegen und vereinbaren einen Besichtigungstermin.",
  },
  {
    number: "02",
    icon: Eye,
    title: "Kostenlose Besichtigung",
    description: "Wir besichtigen das Objekt vor Ort oder per Video und erstellen Ihnen ein faires Festpreis-Angebot.",
  },
  {
    number: "03",
    icon: CalendarCheck,
    title: "Stressfreie Durchführung",
    description: "An Ihrem Wunschtermin führen wir die Haushaltsauflösung professionell durch und hinterlassen alles besenrein.",
  },
];

const comparisons = [
  {
    title: "Immobilienschutz",
    bad: "Türrahmen werden beim Entrümpeln oft beschädigt und Wände zerkratzt.",
    good: "Möbel und Gerümpel werden mit äußerster Sorgfalt entrümpelt. Ihre Immobilien sind versichert.",
    icon: Shield,
  },
  {
    title: "Zuverlässigkeit",
    bad: "Es finden sich keine Arbeiter und Termine werden nicht eingehalten.",
    good: "Pünktlichkeit und Zuverlässigkeit bilden bei uns die Essenz unseres Stressfrei Service.",
    icon: Clock,
  },
  {
    title: "Kundenservice",
    bad: "Keine Organisation und Planung, wodurch es zu Problemen kommen kann.",
    good: "Wir organisieren und planen Ihre Haushaltsauflösung sorgfältig. Sie bekommen individuelle Angebote zum Festpreis.",
    icon: HeadphonesIcon,
  },
];

const reviews = [
  {
    name: "M. Meinke",
    text: "Schnell einen Termin bekommen, pünktlich, freundlich und unkompliziert. Schränke wurden demontiert, besenrein hinterlassen. Sehr zufrieden.",
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

export default function HaushaltsaufloesungPage() {
  useEffect(() => {
    document.title = "Haushaltsauflösung zum Festpreis | Stressfrei Entrümpelungen";
    let _canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!_canonical) { _canonical = document.createElement("link"); _canonical.setAttribute("rel", "canonical"); document.head.appendChild(_canonical); }
    _canonical.setAttribute("href", "https://stressfreientruempelungen.de/haushaltsaufloesung");
    const _setOgMeta = (prop: string, val: string) => { let m = document.querySelector(`meta[property="${prop}"]`) as HTMLMetaElement | null; if (!m) { m = document.createElement("meta"); m.setAttribute("property", prop); document.head.appendChild(m); } m.setAttribute("content", val); };
    _setOgMeta("og:url", "https://stressfreientruempelungen.de/haushaltsaufloesung");
    _setOgMeta("og:image", "https://stressfreientruempelungen.de/images/haushaltsaufloesung-komplett-service.webp");
    _setOgMeta("og:locale", "de_DE");
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Komplette Haushaltsauflösung im Rhein-Erft-Kreis & NRW. Wir räumen, entsorgen und übergeben besenrein. Wertanrechnung inklusive. Jetzt unverbindlich anfragen!");
    }
  }, []);

  return (
    <>
    <PageLayout>
      <PageHero
        title="Professionelle Haushaltsauflösungen"
        subtitle="Stressfrei und professionell Ihren Haushalt auflösen. Schnell, effizient und einfühlsam - überzeugen Sie sich selbst."
        highlight="Haushaltsauflösung"
      />

      <section className="pb-8 sm:pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeIn}>
            <img
              src="/images/haushaltsaufloesung-komplett-service.webp"
              alt="Professionelle Haushaltsauflösung im Rhein-Erft-Kreis – Stressfrei Entrümpelungen"
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
              Ihre Haushaltsauflösung
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Möchten Sie Ihren Haushalt auflösen? Wir übernehmen Haushalts- und Wohnungsauflösungen in jeder Größe
              und stehen für klare Abläufe und professionelle Abwicklung.
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
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3" data-testid="text-reasons-title">
              Warum macht eine Haushaltsauflösung Sinn?
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Haushaltsauflösungen können aus verschiedenen Gründen notwendig werden, die nicht selten mit einer hohen Belastung einhergehen.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {reasons.map((r, i) => {
              const Icon = r.icon;
              return (
                <motion.div key={r.title} {...fadeIn} transition={{ duration: 0.5, delay: i * 0.1 }}>
                  <Card className="p-6 h-full">
                    <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2" data-testid={`text-reason-${i}`}>
                      {r.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{r.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div className="text-center mb-14" {...fadeIn}>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3" data-testid="text-steps-title">
              In 3 Schritten zur Stressfrei Haushaltsauflösung
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div key={step.number} className="relative text-center" {...fadeIn} transition={{ duration: 0.5, delay: i * 0.15 }}>
                  <div className="relative inline-flex mb-6">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                      {step.number}
                    </div>
                  </div>
                  {i < 2 && (
                    <div className="hidden md:block absolute top-8 left-[60%] w-[80%] border-t-2 border-dashed border-border" />
                  )}
                  <h3 className="font-semibold text-foreground mb-2" data-testid={`text-step-${i}`}>{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-card/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div className="text-center mb-14" {...fadeIn}>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
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
                          <div className="text-xs font-medium text-destructive mb-1">Private Auflösung</div>
                          <p className="text-sm text-muted-foreground">{item.bad}</p>
                        </div>
                      </div>
                      <div className="flex gap-3 p-4 rounded-md bg-primary/5">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <div className="text-xs font-medium text-primary mb-1">Stressfrei Auflösung</div>
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

      <section className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div className="text-center mb-14" {...fadeIn}>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
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

      <section className="py-16 bg-card/50" data-testid="section-staedte">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div {...fadeIn} className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">Haushaltsauflösung in Ihrer Stadt</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Wir bieten professionelle Haushaltsauflösungen im gesamten Rhein-Erft-Kreis. Wählen Sie Ihren Standort:
            </p>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              { label: "Haushaltsauflösung Bergheim", href: "/haushaltsaufloesung-bergheim" },
              { label: "Haushaltsauflösung Kerpen", href: "/haushaltsaufloesung-kerpen" },
              { label: "Haushaltsauflösung Frechen", href: "/haushaltsaufloesung-frechen" },
              { label: "Haushaltsauflösung Hürth", href: "/haushaltsaufloesung-huerth" },
              { label: "Haushaltsauflösung Pulheim", href: "/haushaltsaufloesung-pulheim" },
              { label: "Haushaltsauflösung Erftstadt", href: "/haushaltsaufloesung-erftstadt" },
              { label: "Haushaltsauflösung Bedburg", href: "/haushaltsaufloesung-bedburg" },
              { label: "Haushaltsauflösung Elsdorf", href: "/haushaltsaufloesung-elsdorf" },
              { label: "Haushaltsauflösung Rommerskirchen", href: "/haushaltsaufloesung-rommerskirchen" },
              { label: "Haushaltsauflösung Grevenbroich", href: "/haushaltsaufloesung-grevenbroich" },
              { label: "Haushaltsauflösung Brühl", href: "/haushaltsaufloesung-bruehl" },
              { label: "Haushaltsauflösung Wesseling", href: "/haushaltsaufloesung-wesseling" },
            ].map((city, i) => (
              <motion.div key={city.href} {...fadeIn} transition={{ duration: 0.4, delay: i * 0.04 }}>
                <Link href={city.href} style={{ textDecoration: "none" }}>
                  <Card className="p-3 hover:border-primary/40 hover:bg-primary/5 transition-colors cursor-pointer h-full" data-testid={`link-haushalts-stadt-${i}`}>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm font-medium">{city.label}</span>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <InternalLinksSection pageKey="haushaltsaufloesung" />
      <CTASection />
    </PageLayout>
    </>
  );
}
