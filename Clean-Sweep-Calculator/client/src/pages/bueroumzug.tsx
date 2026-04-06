import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PageLayout, PageHero, CTASection, InternalLinksSection } from "@/components/layout";
import { motion } from "framer-motion";
import {
  Phone,
  Star,
  CheckCircle2,
  Building2,
  Monitor,
  Clock,
  Wrench,
  ShieldCheck,
  Users,
  Award,
  Shield,
  MapPin,
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const services = [
  {
    icon: Building2,
    title: "Büromöbel Transport",
    description: "Schreibtische, Schränke, Konferenztische und weitere Büromöbel werden sicher transportiert und am neuen Standort aufgebaut.",
  },
  {
    icon: Monitor,
    title: "IT & Technik",
    description: "Wir kümmern uns um den sicheren Transport Ihrer IT-Infrastruktur, Server, Computer und Monitore.",
  },
  {
    icon: Wrench,
    title: "De- & Montage",
    description: "Professioneller Ab- und Aufbau aller Büromöbel durch unser erfahrenes Team.",
  },
  {
    icon: Clock,
    title: "Minimale Ausfallzeit",
    description: "Wir planen den Umzug so, dass Ihre Geschäftstätigkeit möglichst wenig beeinträchtigt wird - auch am Wochenende.",
  },
  {
    icon: ShieldCheck,
    title: "Vollversichert",
    description: "Ihr gesamtes Inventar ist während des Transports durch uns umfassend versichert.",
  },
  {
    icon: Users,
    title: "Erfahrenes Team",
    description: "Unsere Mitarbeiter haben langjährige Erfahrung mit Büro- und Firmenumzügen jeder Größe.",
  },
];

const highlights = [
  "Kostenlose Besichtigung vor Ort",
  "Top-Bewertungen",
  "Kompetente Beratung",
  "NRW-weit tätig",
];

const reviews = [
  {
    name: "Thomas K.",
    text: "Unser Büroumzug wurde perfekt organisiert. Am Montag konnten wir direkt weiterarbeiten. Sehr professionell!",
    rating: 5,
  },
  {
    name: "Sandra L.",
    text: "Schnell, zuverlässig und sorgfältig. Alle Möbel und die gesamte IT-Technik wurden einwandfrei transportiert.",
    rating: 5,
  },
  {
    name: "Michael R.",
    text: "Top Service! Das Team hat am Wochenende gearbeitet, damit wir unter der Woche keinen Ausfall hatten. Sehr empfehlenswert.",
    rating: 5,
  },
];

export default function BueroumzugPage() {
  useEffect(() => {
    document.title = "Büroumzug & Firmenumzug | Stressfrei Umzüge Rhein-Erft-Kreis";
    let _canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!_canonical) { _canonical = document.createElement("link"); _canonical.setAttribute("rel", "canonical"); document.head.appendChild(_canonical); }
    _canonical.setAttribute("href", "https://stressfreientruempelungen.de/bueroumzug");
    const _setOgMeta = (prop: string, val: string) => { let m = document.querySelector(`meta[property="${prop}"]`) as HTMLMetaElement | null; if (!m) { m = document.createElement("meta"); m.setAttribute("property", prop); document.head.appendChild(m); } m.setAttribute("content", val); };
    _setOgMeta("og:url", "https://stressfreientruempelungen.de/bueroumzug");
    _setOgMeta("og:image", "https://stressfreientruempelungen.de/images/bueroumzug-firmenumzug-dienstleistung-nrw.webp");
    _setOgMeta("og:locale", "de_DE");
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Professioneller Büroumzug im Rhein-Erft-Kreis & NRW. Minimale Ausfallzeiten, sichere IT-Transporte, Möbelmontage. Festpreis und termingerechte Umsetzung.");
    }
  }, []);

  return (
    <>
    <PageLayout>
      <PageHero
        title="Büroumzug - Professionell & Effizient"
        subtitle="Minimale Ausfallzeiten, maximale Sorgfalt. Wir planen und realisieren Ihren Büroumzug termingerecht und zuverlässig."
        highlight="Büroumzug"
      />

      <section className="pb-8 sm:pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeIn}>
            <img
              src="/images/bueroumzug-firmenumzug-dienstleistung-nrw.webp"
              alt="Büroumzug & Firmenumzug in NRW – professioneller Umzugsservice von Stressfrei"
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
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3" data-testid="text-intro-title">
              Ihr Büroumzug mit Stressfrei
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ein Büroumzug erfordert sorgfältige Planung und professionelle Durchführung. Wir sorgen dafür,
              dass Ihr Unternehmen schnellstmöglich am neuen Standort arbeitsfähig ist. Von der Demontage der
              Büromöbel über den Transport bis hin zum Aufbau am neuen Standort - wir übernehmen alles.
            </p>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {highlights.map((h) => (
              <div key={h} className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-primary/5 border text-sm text-foreground">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                {h}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-card/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div className="text-center mb-14" {...fadeIn}>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3" data-testid="text-services-title">
              Unsere Leistungen beim Büroumzug
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Alles aus einer Hand für Ihren reibungslosen Büroumzug.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div key={s.title} {...fadeIn} transition={{ duration: 0.5, delay: i * 0.08 }}>
                  <Card className="p-6 h-full hover-elevate">
                    <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2" data-testid={`text-service-${i}`}>
                      {s.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
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
              Das sagen unsere Kunden
            </h2>
            <p className="text-muted-foreground">Vertrauen Sie auf die Erfahrungen zufriedener Kunden.</p>
          </motion.div>
          <div className="grid sm:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <motion.div key={i} {...fadeIn} transition={{ duration: 0.5, delay: i * 0.08 }}>
                <Card className="p-6 h-full">
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: r.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">"{r.text}"</p>
                  <p className="text-sm font-medium text-foreground" data-testid={`text-review-name-${i}`}>{r.name}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-card/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeIn}>
              <img
                src="/images/stressfrei-entruempelungen-team-rhein-erft-kreis.webp"
                alt="Das Team von Stressfrei Entrümpelungen"
                className="w-full rounded-2xl shadow-lg object-cover"
                width={1200}
                height={575}
                loading="lazy"
                data-testid="img-team"
              />
            </motion.div>
            <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.15 }}>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4" data-testid="text-team-title">
                Unser professionelles Team
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Mit langjähriger Erfahrung im Bereich Büroumzüge wissen wir genau, worauf es ankommt.
                Unser geschultes Team arbeitet effizient und sorgfältig, damit Ihr Unternehmen schnell
                wieder einsatzbereit ist.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: Shield, label: "Vollversichert" },
                  { icon: Award, label: "Top bewertet" },
                  { icon: Users, label: "Erfahrenes Team" },
                  { icon: Clock, label: "Termingerecht" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-center gap-3 p-3 rounded-md bg-card border text-sm font-medium text-foreground">
                      <Icon className="w-4 h-4 text-primary shrink-0" />
                      {item.label}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeIn} className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">Häufige Fragen zum Büroumzug</h2>
          </motion.div>
          <div className="space-y-4">
            {[
              { q: "Was kostet ein Büroumzug?", a: "Die Kosten hängen von der Bürogröße, Entfernung und Leistungsumfang ab. Kleine Büros (bis 5 Mitarbeiter) liegen oft zwischen 1.500 und 3.500 €. Größere Umzüge werden individuell kalkuliert. Kostenlos besichtigen — verbindlicher Festpreis." },
              { q: "Wie wird ein Büroumzug geplant?", a: "Wir beginnen mit einer kostenlosen Begehung. Danach erhalten Sie einen detaillierten Plan mit Zeitrahmen, Verantwortlichkeiten und Festpreis. Wir koordinieren alles, damit Ihr Betrieb minimal unterbrochen wird." },
              { q: "Können wir am Wochenende umziehen, um den Betrieb nicht zu unterbrechen?", a: "Ja, wir führen Büroumzüge auch am Wochenende und an Feiertagen durch — damit der Betrieb am Montag wie gewohnt startet." },
              { q: "Helfen Sie auch beim Ab- und Aufbau von Büromöbeln?", a: "Ja, unser Team demontiert Schreibtische, Regalsysteme und Trennwände fachgerecht und baut sie am neuen Standort wieder auf — inklusive Kennzeichnung für eine geordnete Wiedermontage." },
              { q: "Wie gehen Sie mit IT-Equipment um?", a: "IT-Equipment wird sorgfältig verpackt und gesichert transportiert. Wir empfehlen jedoch, den An- und Abbau der IT durch Ihre IT-Abteilung oder einen Fachbetrieb vornehmen zu lassen." },
            ].map((faq, i) => (
              <motion.div key={i} {...fadeIn} transition={{ duration: 0.4, delay: i * 0.06 }}>
                <Card className="p-5" data-testid={`faq-bueroumzug-${i}`}>
                  <h3 className="font-semibold mb-2 text-foreground">{faq.q}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <InternalLinksSection pageKey="bueroumzug" />
      <CTASection />
    </PageLayout>
    </>
  );
}
