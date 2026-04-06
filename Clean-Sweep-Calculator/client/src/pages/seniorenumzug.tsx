import { useEffect } from "react";
import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PageLayout, PageHero, CTASection, InternalLinksSection } from "@/components/layout";
import { motion } from "framer-motion";
import {
  Phone,
  Star,
  CheckCircle2,
  Heart,
  HandHeart,
  ShieldCheck,
  MessageCircle,
  Users,
  Award,
  Clock,
  Shield,
  Eye,
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
    icon: Heart,
    title: "Stressfrei",
    description: "Wir nehmen Ihnen den gesamten Umzugsstress ab und sorgen für einen reibungslosen Ablauf - damit Sie sich auf das Wesentliche konzentrieren können.",
  },
  {
    icon: HandHeart,
    title: "Alles aus einer Hand",
    description: "Von der Planung über das Packen bis zum Aufbau der Möbel in der neuen Wohnung - wir kümmern uns um alles.",
  },
  {
    icon: ShieldCheck,
    title: "Sicher & Zuverlässig",
    description: "Ihre Habseligkeiten sind bei uns vollversichert. Unser erfahrenes Team geht sorgfältig und respektvoll mit Ihrem Eigentum um.",
  },
  {
    icon: MessageCircle,
    title: "Persönliche Beratung",
    description: "Wir nehmen uns Zeit für eine ausführliche, persönliche Beratung und gehen auf Ihre individuellen Bedürfnisse und Wünsche ein.",
  },
];

const costFactors = [
  "Umfang des Haushalts",
  "Möbel De- und Montage",
  "Länge der Fahrtstrecke",
  "Einrichtung einer Halteverbotszone",
  "Packservice",
  "Besondere Anforderungen (z.B. Treppenhaus, Aufzug)",
];

const highlights = [
  { icon: Eye, label: "Kostenlose Besichtigung" },
  { icon: Star, label: "Top-Bewertungen" },
  { icon: MessageCircle, label: "Kompetente Beratung" },
  { icon: MapPin, label: "NRW-weit tätig" },
];

const reviews = [
  {
    name: "Helga M.",
    text: "Ein wunderbar einfühlsames Team. Sie haben meinen Umzug ins betreute Wohnen komplett organisiert. Ich musste mich um nichts kümmern!",
    rating: 5,
  },
  {
    name: "Klaus W.",
    text: "Sehr professionell und geduldig. Die Mitarbeiter haben sich viel Zeit genommen und alles ordentlich auf- und abgebaut.",
    rating: 5,
  },
  {
    name: "Ingrid S.",
    text: "Pünktlich, freundlich und zuverlässig. Der Umzug meiner Mutter verlief absolut stressfrei. Vielen Dank!",
    rating: 5,
  },
];

export default function SeniorenumzugPage() {
  useEffect(() => {
    document.title = "Seniorenumzug mit Herz | Stressfrei Umzüge Rhein-Erft-Kreis";
    let _canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!_canonical) { _canonical = document.createElement("link"); _canonical.setAttribute("rel", "canonical"); document.head.appendChild(_canonical); }
    _canonical.setAttribute("href", "https://stressfreientruempelungen.de/seniorenumzug");
    const _setOgMeta = (prop: string, val: string) => { let m = document.querySelector(`meta[property="${prop}"]`) as HTMLMetaElement | null; if (!m) { m = document.createElement("meta"); m.setAttribute("property", prop); document.head.appendChild(m); } m.setAttribute("content", val); };
    _setOgMeta("og:url", "https://stressfreientruempelungen.de/seniorenumzug");
    _setOgMeta("og:image", "https://stressfreientruempelungen.de/images/seniorenumzug-dienstleistung-nrw.webp");
    _setOgMeta("og:locale", "de_DE");
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Einfühlsamer Seniorenumzug im Rhein-Erft-Kreis & NRW. Komplettservice vom Einpacken bis zum Einrichten. Auf Wunsch mit Entrümpelung & Pflegekasse.");
    }
  }, []);

  return (
    <>
    <PageLayout>
      <PageHero
        title="Seniorenumzug - Einfühlsam & Professionell"
        subtitle="Wir begleiten Sie oder Ihre Angehörigen beim Umzug mit besonderer Sorgfalt, Geduld und Erfahrung. Stressfrei und rundum versorgt."
        highlight="Seniorenumzug"
      />

      <section className="pb-8 sm:pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeIn}>
            <img
              src="/images/seniorenumzug-professionell-rhein-erft-kreis.webp"
              alt="Seniorenumzug im Rhein-Erft-Kreis – einfühlsamer Umzugsservice von Stressfrei"
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
              Ihr Seniorenumzug in guten Händen
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ein Umzug im Alter stellt besondere Anforderungen. Ob der Wechsel in eine kleinere Wohnung,
              ins betreute Wohnen oder in ein Pflegeheim - wir verstehen die emotionale Bedeutung und gehen
              mit besonderer Sensibilität vor. Unser erfahrenes Team kümmert sich um alle Details, damit
              Sie oder Ihre Angehörigen sich keine Sorgen machen müssen.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-card/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div className="text-center mb-14" {...fadeIn}>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3" data-testid="text-benefits-title">
              Unsere Vorteile beim Seniorenumzug
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Wir machen Ihren Umzug so angenehm wie möglich.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <motion.div key={b.title} {...fadeIn} transition={{ duration: 0.5, delay: i * 0.08 }}>
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

      <section className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4" data-testid="text-pricing-title">
                Preise und Kostenfaktoren
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Die Kosten für einen Seniorenumzug hängen von verschiedenen Faktoren ab. Wir erstellen
                Ihnen nach einer kostenlosen Besichtigung ein transparentes Festpreisangebot - ohne versteckte Kosten.
              </p>
              <a href="tel:+4922715880940" data-testid="link-pricing-call">
                <Button size="lg" data-testid="button-pricing-call">
                  <Phone className="w-4 h-4 mr-2" />
                  Jetzt beraten lassen
                </Button>
              </a>
            </motion.div>
            <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.15 }}>
              <Card className="p-6">
                <h3 className="font-semibold text-foreground mb-4">Kostenfaktoren</h3>
                <div className="space-y-3">
                  {costFactors.map((f, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-sm text-muted-foreground">{f}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
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
                Unser einfühlsames Team
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Unsere Mitarbeiter sind speziell für Seniorenumzüge geschult. Wir gehen mit Geduld und
                Verständnis auf die besonderen Bedürfnisse älterer Menschen ein. Von der ersten Beratung bis
                zum Einrichten der neuen Wohnung stehen wir Ihnen zur Seite.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {highlights.map((item) => {
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

      <section className="py-16 bg-card/50" data-testid="section-staedte">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div {...fadeIn} className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">Seniorenumzug in Ihrer Stadt</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Wir begleiten Senioren bei Umzügen im gesamten Rhein-Erft-Kreis — einfühlsam und professionell. Wählen Sie Ihren Standort:
            </p>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              { label: "Seniorenumzug Bergheim", href: "/entruempelung-bergheim" },
              { label: "Seniorenumzug Kerpen", href: "/entruempelung-kerpen" },
              { label: "Seniorenumzug Frechen", href: "/entruempelung-frechen" },
              { label: "Seniorenumzug Hürth", href: "/entruempelung-huerth" },
              { label: "Seniorenumzug Pulheim", href: "/entruempelung-pulheim" },
              { label: "Seniorenumzug Erftstadt", href: "/entruempelung-erftstadt" },
              { label: "Seniorenumzug Bedburg", href: "/entruempelung-bedburg" },
              { label: "Seniorenumzug Elsdorf", href: "/entruempelung-elsdorf" },
              { label: "Seniorenumzug Rommerskirchen", href: "/entruempelung-rommerskirchen" },
              { label: "Seniorenumzug Grevenbroich", href: "/entruempelung-grevenbroich" },
              { label: "Seniorenumzug Rhein-Erft-Kreis", href: "/entruempelung-rhein-erft-kreis" },
              { label: "Alle Standorte", href: "/entruempelung-in-der-naehe" },
            ].map((city, i) => (
              <motion.div key={city.href} {...fadeIn} transition={{ duration: 0.4, delay: i * 0.04 }}>
                <Link href={city.href} style={{ textDecoration: "none" }}>
                  <Card className="p-3 hover:border-primary/40 hover:bg-primary/5 transition-colors cursor-pointer h-full" data-testid={`link-senioren-stadt-${i}`}>
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

      <section className="py-14 sm:py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeIn} className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">Häufige Fragen zum Seniorenumzug</h2>
          </motion.div>
          <div className="space-y-4">
            {[
              { q: "Was kostet ein Seniorenumzug?", a: "Die Kosten für einen Seniorenumzug hängen von der Wohnungsgröße, der Entfernung und dem Umfang der Leistungen ab. Als Richtwert: eine 2-Zimmer-Wohnung kostet ca. 800–1.800 €. Nach kostenloser Besichtigung erhalten Sie einen verbindlichen Festpreis." },
              { q: "Kann die Pflegekasse den Seniorenumzug bezahlen?", a: "Ja, unter bestimmten Voraussetzungen kann die Pflegekasse bis zu 4.180 € für einen pflegebedingten Umzug übernehmen. Wir beraten Sie dazu und helfen bei der Antragstellung." },
              { q: "Wie lange dauert ein Seniorenumzug?", a: "Ein normaler Seniorenumzug dauert je nach Umfang 4–8 Stunden. Bei größeren Wohnungen und weiten Entfernungen kann es auch ein bis zwei Tage sein. Wir planen die Zeit großzügig und ohne Hektik." },
              { q: "Helfen Sie auch beim Einrichten in der neuen Wohnung?", a: "Ja, unser Service endet nicht beim Abladen. Wir bauen Möbel auf, räumen auf Wunsch ein und sorgen dafür, dass Sie sich in der neuen Wohnung sofort wohlfühlen." },
              { q: "Wie weit im Voraus soll ich einen Seniorenumzug buchen?", a: "Wir empfehlen 2–4 Wochen im Voraus zu buchen. Bei kurzfristigen Anfragen, z.B. bei einem schnellen Pflegeheimeinzug, finden wir fast immer eine Lösung." },
            ].map((faq, i) => (
              <motion.div key={i} {...fadeIn} transition={{ duration: 0.4, delay: i * 0.06 }}>
                <Card className="p-5" data-testid={`faq-seniorenumzug-${i}`}>
                  <h3 className="font-semibold mb-2 text-foreground">{faq.q}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <InternalLinksSection pageKey="seniorenumzug" />
      <CTASection />
    </PageLayout>
    </>
  );
}
