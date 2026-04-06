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
  Briefcase,
  Leaf,
  Zap,
  Phone,
  Eye,
  CalendarCheck,
  AlertTriangle,
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
    icon: Briefcase,
    title: "Professionell",
    description:
      "Wir lösen Ihre Firma oder Ihr Büro professionell auf. Von der Demontage bis zur fachgerechten Entsorgung - alles aus einer Hand.",
  },
  {
    icon: Zap,
    title: "Schnell",
    description:
      "Dank unserer erfahrenen Teams und effizienten Abläufe führen wir Ihre Firmenauflösung schnell und termingerecht durch.",
  },
  {
    icon: Leaf,
    title: "Klimaschonend",
    description:
      "Wir setzen auf nachhaltige Entsorgung und recyceln so viel wie möglich. Brauchbare Gegenstände werden gespendet oder weiterverkauft.",
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
      "Wir besichtigen Ihre Geschäftsräume vor Ort und erstellen Ihnen ein faires Festpreis-Angebot.",
  },
  {
    number: "03",
    icon: CalendarCheck,
    title: "Stressfreie Durchführung",
    description:
      "An Ihrem Wunschtermin führen wir die Firmenauflösung professionell durch und hinterlassen alles besenrein.",
  },
];

const comparisons = [
  {
    title: "Immobilienschutz",
    bad: "Türrahmen werden beim Entrümpeln oft beschädigt und Wände zerkratzt.",
    good: "Büromöbel und Inventar werden mit äußerster Sorgfalt geräumt. Ihre Immobilien sind versichert.",
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
    bad: "Keine Organisation und Planung der Auflösung, wodurch es zu Betriebsstörungen kommen kann.",
    good: "Wir organisieren und planen Ihre Firmenauflösung sorgfältig. Sie bekommen individuelle Angebote zum Festpreis.",
    icon: HeadphonesIcon,
  },
];

const reviews = [
  {
    name: "M. Meinke",
    text: "Schnell einen Termin bekommen, pünktlich, freundlich und unkompliziert wurde alles geräumt. Schränke wurden demontiert, besenrein hinterlassen.",
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

export default function FirmenaufloesungPage() {
  useEffect(() => {
    document.title = "Firmenauflösung & Geschäftsauflösung | Stressfrei Entrümpelungen";
    let _canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!_canonical) { _canonical = document.createElement("link"); _canonical.setAttribute("rel", "canonical"); document.head.appendChild(_canonical); }
    _canonical.setAttribute("href", "https://stressfreientruempelungen.de/firmenaufloesung");
    const _setOgMeta = (prop: string, val: string) => { let m = document.querySelector(`meta[property="${prop}"]`) as HTMLMetaElement | null; if (!m) { m = document.createElement("meta"); m.setAttribute("property", prop); document.head.appendChild(m); } m.setAttribute("content", val); };
    _setOgMeta("og:url", "https://stressfreientruempelungen.de/firmenaufloesung");
    _setOgMeta("og:image", "https://stressfreientruempelungen.de/images/firmenaufloesung-gewerbe-raeumung-service.webp");
    _setOgMeta("og:locale", "de_DE");
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Professionelle Firmenauflösung im Rhein-Erft-Kreis & NRW. Büroräumung, Lagerauflösung und Gewerbeentrümpelung. Diskret, schnell und zum Festpreis.");
    }
  }, []);

  return (
    <>
    <PageLayout>
      <PageHero
        title="Professionelle Firmenauflösung & Büroauflösung"
        subtitle="Wir lösen Ihre Geschäftsräume schnell, professionell und klimaschonend auf. Faire Festpreise und besenreine Übergabe."
        highlight="Firmenauflösung"
      />

      <section className="pb-8 sm:pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeIn}>
            <img
              src="/images/firmenaufloesung-gewerbe-raeumung-service.webp"
              alt="Professionelle Firmenauflösung & Gewerberäumung in NRW – Stressfrei Entrümpelungen"
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
              Stressfrei Firma auflösen
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Ob Büroauflösung, Geschäftsaufgabe oder Standortwechsel - wir übernehmen die komplette Auflösung
              Ihrer Geschäftsräume im Rhein-Erft-Kreis und ganz NRW.
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
              Experten für Firmen- und Büroauflösungen
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Eine Firmenauflösung oder Büroauflösung erfordert Erfahrung und Planung. Wir kümmern uns um die
              fachgerechte Demontage von Büromöbeln, die Entsorgung von Akten und Elektrogeräten sowie die
              besenreine Übergabe Ihrer Räumlichkeiten. Brauchbare Gegenstände werden von uns gespendet oder
              weiterverkauft, um Kosten zu senken und die Umwelt zu schonen.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div className="text-center mb-14" {...fadeIn}>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3" data-testid="text-steps-title">
              In 3 Schritten zur Stressfrei Firmenauflösung
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
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3" data-testid="text-beachten-title">
              Was ist bei einer Firmenauflösung zu beachten?
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: AlertTriangle,
                title: "Datenschutz",
                text: "Akten, Festplatten und sensible Unterlagen müssen datenschutzkonform vernichtet werden. Wir kümmern uns um die fachgerechte Aktenvernichtung.",
              },
              {
                icon: Shield,
                title: "Mietvertrag & Fristen",
                text: "Beachten Sie die Kündigungsfristen Ihres Mietvertrags. Wir stimmen den Räumungstermin optimal mit Ihnen ab.",
              },
              {
                icon: Leaf,
                title: "Nachhaltige Entsorgung",
                text: "Elektrogeräte, Möbel und Sondermüll müssen fachgerecht entsorgt werden. Wir sorgen für umweltgerechtes Recycling.",
              },
              {
                icon: Briefcase,
                title: "Inventarverzeichnis",
                text: "Erstellen Sie vorab ein Inventarverzeichnis. Wir helfen Ihnen bei der Bewertung und Wertanrechnung brauchbarer Gegenstände.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.title} {...fadeIn} transition={{ duration: 0.5, delay: i * 0.1 }}>
                  <Card className="p-6 h-full" data-testid={`card-beachten-${i}`}>
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

      <section className="py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div className="text-center mb-10" {...fadeIn}>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3" data-testid="text-dauer-title">
              Wie lange dauert eine Firmenauflösung?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Die Dauer hängt von der Größe der Geschäftsräume und dem Umfang des Inventars ab. Kleine
              Büroauflösungen erledigen wir oft innerhalb eines Tages. Größere Firmenauflösungen können
              2-5 Werktage dauern. Nach der kostenlosen Besichtigung erhalten Sie einen genauen Zeitplan.
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
                    Kleine Büros: ca. 1 Tag. Mittelgroße Firmen: 2-3 Tage. Große Betriebe: 3-5 Tage.
                    Wir arbeiten effizient und termingerecht, damit Ihr Geschäftsbetrieb so wenig wie möglich gestört wird.
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
                          <div className="text-xs font-medium text-destructive mb-1">Eigene Auflösung</div>
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

      <section className="py-14 sm:py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeIn} className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">Häufige Fragen zur Firmenauflösung</h2>
          </motion.div>
          <div className="space-y-4">
            {[
              { q: "Was kostet eine Firmenauflösung?", a: "Die Kosten hängen stark von der Größe der Räumlichkeiten und dem Inventar ab. Kleine Büros starten ab ca. 800 €, größere Gewerbeobjekte können mehrere tausend Euro kosten. Nach kostenloser Besichtigung erhalten Sie einen verbindlichen Festpreis." },
              { q: "Wie schnell kann eine Firmenauflösung durchgeführt werden?", a: "Kleinere Büros räumen wir oft innerhalb eines Tages. Größere Objekte planen wir gemeinsam — für dringende Fälle sind wir flexibel und finden innerhalb von 48–72 Stunden einen Termin." },
              { q: "Was passiert mit alten Büromöbeln und Geräten?", a: "Verwertbare Gegenstände werden weiterverkauft oder gespendet — und der Erlös wird mit Ihren Kosten verrechnet (Wertanrechnung). Alles andere wird fachgerecht und umweltgerecht entsorgt." },
              { q: "Ist die Abwicklung diskret?", a: "Ja, wir behandeln jeden Auftrag vertraulich. Unsere Fahrzeuge tragen kein auffälliges Branding und wir kommunizieren nur mit den von Ihnen benannten Ansprechpartnern." },
              { q: "Räumen Sie auch Produktionshallen und Lagerhallen?", a: "Ja, wir übernehmen Gewerbeimmobilien jeder Art — von Büros über Produktionsstätten bis zu Lagerhallen. Auch Sondereinrichtungen wie Tresoranlagen oder schwere Maschinen sind kein Problem." },
            ].map((faq, i) => (
              <motion.div key={i} {...fadeIn} transition={{ duration: 0.4, delay: i * 0.06 }}>
                <Card className="p-5" data-testid={`faq-firmenaufloesung-${i}`}>
                  <h3 className="font-semibold mb-2 text-foreground">{faq.q}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <InternalLinksSection pageKey="firmenaufloesung" />
      <CTASection />
    </PageLayout>
    </>
  );
}