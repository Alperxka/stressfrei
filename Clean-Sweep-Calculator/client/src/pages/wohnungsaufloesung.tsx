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
  Recycle,
  Timer,
  Phone,
  Eye,
  CalendarCheck,
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
      "Unsere Mitarbeiter räumen alles, was Sie loswerden wollen. Lehnen Sie sich entspannt zurück.",
  },
  {
    icon: Recycle,
    title: "Fachgerechte Entsorgung",
    description:
      "Wir entsorgen den gesamten Hausrat fachgerecht beim Wertstoffhof. Neben Sperrmüll auch Sondermüll und viele Schadstoffarten.",
  },
  {
    icon: Timer,
    title: "Sie sparen Zeit",
    description:
      "Die allermeisten unserer Wohnungsauflösungen erledigen wir innerhalb eines Tages. Besenreine Übergabe am Abend.",
  },
];

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Kontakt aufnehmen",
    description:
      "Rufen Sie uns an oder schreiben Sie uns. Wir besprechen Ihr Anliegen und vereinbaren einen Besichtigungstermin.",
  },
  {
    number: "02",
    icon: Eye,
    title: "Kostenlose Besichtigung",
    description:
      "Wir besichtigen die Wohnung vor Ort oder per Video und erstellen Ihnen ein faires Festpreis-Angebot.",
  },
  {
    number: "03",
    icon: CalendarCheck,
    title: "Stressfreie Durchführung",
    description:
      "An Ihrem Wunschtermin führen wir die Wohnungsauflösung professionell durch und hinterlassen alles besenrein.",
  },
];

const reasons = [
  {
    title: "Umzug in eine kleinere Wohnung",
    text: "Bei einem Umzug in eine kleinere Wohnung muss oft viel Hausrat entsorgt werden. Wir helfen Ihnen dabei, sich professionell und schnell von nicht mehr benötigten Gegenständen zu trennen.",
  },
  {
    title: "Todesfall in der Familie",
    text: "Eine Wohnung nach einem Todesfall auflösen zu müssen ist belastend. Wir übernehmen diese Aufgabe einfühlsam und respektvoll für Sie.",
  },
  {
    title: "Umzug ins Pflegeheim",
    text: "Ein Umzug in ein Alten- oder Pflegeheim ist oft mit der Auflösung der Wohnung verbunden. Wir übernehmen die komplette Räumung.",
  },
  {
    title: "Mieter hinterlässt Wohnung",
    text: "Manchmal hinterlassen Mieter die Wohnung in einem desolaten Zustand. Wir räumen die Wohnung professionell und übergeben sie besenrein.",
  },
];

const comparisons = [
  {
    title: "Immobilienschutz",
    bad: "Türrahmen werden beim Räumen oft beschädigt und Wände zerkratzt.",
    good: "Möbel und Hausrat werden mit äußerster Sorgfalt geräumt. Ihre Immobilien sind versichert.",
    icon: Shield,
  },
  {
    title: "Zuverlässigkeit",
    bad: "Es finden sich keine Helfer und Termine werden nicht eingehalten.",
    good: "Pünktlichkeit und Zuverlässigkeit bilden bei uns die Essenz unseres Stressfrei Service.",
    icon: Clock,
  },
  {
    title: "Kundenservice",
    bad: "Keine Organisation und Planung der Wohnungsauflösung, wodurch es zu Problemen kommen kann.",
    good: "Wir organisieren und planen Ihre Wohnungsauflösung sorgfältig. Sie bekommen individuelle Angebote zum Festpreis.",
    icon: HeadphonesIcon,
  },
];

const reviews = [
  {
    name: "M. Meinke",
    text: "Schnell einen Termin bekommen, pünktlich, freundlich und unkompliziert wurde meine Wohnung geräumt. Schränke wurden demontiert, besenrein hinterlassen.",
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

export default function WohnungsaufloesungPage() {
  useEffect(() => {
    document.title = "Wohnungsauflösung zum Festpreis | Stressfrei Entrümpelungen";
    let _canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!_canonical) { _canonical = document.createElement("link"); _canonical.setAttribute("rel", "canonical"); document.head.appendChild(_canonical); }
    _canonical.setAttribute("href", "https://stressfreientruempelungen.de/wohnungsaufloesung");
    const _setOgMeta = (prop: string, val: string) => { let m = document.querySelector(`meta[property="${prop}"]`) as HTMLMetaElement | null; if (!m) { m = document.createElement("meta"); m.setAttribute("property", prop); document.head.appendChild(m); } m.setAttribute("content", val); };
    _setOgMeta("og:url", "https://stressfreientruempelungen.de/wohnungsaufloesung");
    _setOgMeta("og:image", "https://stressfreientruempelungen.de/images/haushaltsaufloesung-komplett-service.webp");
    _setOgMeta("og:locale", "de_DE");
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Professionelle Wohnungsauflösung im Rhein-Erft-Kreis & NRW. Komplette Räumung, fachgerechte Entsorgung und besenreine Übergabe zum fairen Festpreis.");
    }
  }, []);

  return (
    <>
    <PageLayout>
      <PageHero
        title="Professionelle Wohnungsauflösung"
        subtitle="Stressfrei und professionell Ihre Wohnung auflösen. Schnell, effizient und zu fairen Festpreisen."
        highlight="Wohnungsauflösung"
      />

      <section className="pb-8 sm:pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeIn}>
            <img
              src="/images/wohnungsaufloesung-professionell-service.webp"
              alt="Professionelle Wohnungsauflösung im Rhein-Erft-Kreis – Stressfrei Entrümpelungen"
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
              Stressfrei Wohnung auflösen
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Wir übernehmen Ihre komplette Wohnungsauflösung - von der Entrümpelung bis zur besenreinen Übergabe.
              Professionell, schnell und zu fairen Preisen.
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
              Experten für Wohnungsauflösungen
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Eine Wohnungsauflösung kann aus verschiedenen Gründen notwendig werden. Ob Umzug, Todesfall oder
              Verkleinerung - wir stehen Ihnen professionell und einfühlsam zur Seite. Unser erfahrenes Team
              kümmert sich um die komplette Räumung, fachgerechte Entsorgung und besenreine Übergabe.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div className="text-center mb-14" {...fadeIn}>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3" data-testid="text-reasons-title">
              Gründe für eine Wohnungsauflösung
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {reasons.map((reason, i) => (
              <motion.div key={reason.title} {...fadeIn} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <Card className="p-6 h-full" data-testid={`card-reason-${i}`}>
                  <h3 className="font-semibold text-foreground mb-2">{reason.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{reason.text}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-card/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div className="text-center mb-14" {...fadeIn}>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3" data-testid="text-steps-title">
              In 3 Schritten zur Stressfrei Wohnungsauflösung
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

      <section className="py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div className="text-center mb-10" {...fadeIn}>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3" data-testid="text-dauer-title">
              Wie lange dauert eine Wohnungsauflösung?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Die Dauer hängt von der Größe der Wohnung und dem Umfang des Hausrats ab. Eine durchschnittliche
              Wohnungsauflösung erledigen wir in der Regel innerhalb eines Tages. Größere Objekte können
              2-3 Tage dauern. Nach der kostenlosen Besichtigung erhalten Sie einen genauen Zeitplan.
            </p>
          </motion.div>
          <motion.div {...fadeIn}>
            <Card className="p-6" data-testid="card-dauer-info">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                  <Timer className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Schnelle Durchführung</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    1-2 Zimmer: ca. 4-6 Stunden. 3-4 Zimmer: ca. 1 Tag. Größere Wohnungen: 1-3 Tage.
                    Besenreine Übergabe am selben Tag bei den meisten Wohnungsauflösungen.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-card/50">
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

      <section className="py-16 bg-card/50" data-testid="section-staedte">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div {...fadeIn} className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">Wohnungsauflösung in Ihrer Stadt</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Wir führen professionelle Wohnungsauflösungen im gesamten Rhein-Erft-Kreis durch. Wählen Sie Ihren Standort:
            </p>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              { label: "Wohnungsauflösung Bergheim", href: "/wohnungsaufloesung-bergheim" },
              { label: "Wohnungsauflösung Kerpen", href: "/wohnungsaufloesung-kerpen" },
              { label: "Wohnungsauflösung Frechen", href: "/wohnungsaufloesung-frechen" },
              { label: "Wohnungsauflösung Hürth", href: "/wohnungsaufloesung-huerth" },
              { label: "Wohnungsauflösung Pulheim", href: "/wohnungsaufloesung-pulheim" },
              { label: "Wohnungsauflösung Erftstadt", href: "/wohnungsaufloesung-erftstadt" },
              { label: "Wohnungsauflösung Bedburg", href: "/wohnungsaufloesung-bedburg" },
              { label: "Wohnungsauflösung Elsdorf", href: "/wohnungsaufloesung-elsdorf" },
              { label: "Wohnungsauflösung Rommerskirchen", href: "/wohnungsaufloesung-rommerskirchen" },
              { label: "Wohnungsauflösung Grevenbroich", href: "/wohnungsaufloesung-grevenbroich" },
              { label: "Wohnungsauflösung Brühl", href: "/wohnungsaufloesung-bruehl" },
              { label: "Wohnungsauflösung Wesseling", href: "/wohnungsaufloesung-wesseling" },
            ].map((city, i) => (
              <motion.div key={city.href} {...fadeIn} transition={{ duration: 0.4, delay: i * 0.04 }}>
                <Link href={city.href} style={{ textDecoration: "none" }}>
                  <Card className="p-3 hover:border-primary/40 hover:bg-primary/5 transition-colors cursor-pointer h-full" data-testid={`link-wohnungs-stadt-${i}`}>
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

      <InternalLinksSection pageKey="wohnungsaufloesung" />
      <CTASection />
    </PageLayout>
    </>
  );
}