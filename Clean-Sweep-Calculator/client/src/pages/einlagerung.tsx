import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PageLayout, PageHero, CTASection, InternalLinksSection } from "@/components/layout";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Phone,
  Star,
  CheckCircle2,
  Package,
  Truck,
  Warehouse,
  RotateCcw,
  ArrowRight,
  Shield,
  Users,
  Award,
  Clock,
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const steps = [
  {
    icon: Package,
    step: "1",
    title: "Verpackung",
    description: "Wir verpacken Ihre Gegenstände fachgerecht und sicher, damit nichts beschädigt wird.",
  },
  {
    icon: Truck,
    step: "2",
    title: "Transport",
    description: "Ihre Habseligkeiten werden sicher zu unserem Lager transportiert.",
  },
  {
    icon: Warehouse,
    step: "3",
    title: "Einlagerung",
    description: "In unserem trockenen und sicheren Lager werden Ihre Sachen sorgfältig aufbewahrt.",
  },
  {
    icon: RotateCcw,
    step: "4",
    title: "Rücktransport",
    description: "Wenn Sie Ihre Gegenstände wieder benötigen, liefern wir sie direkt zu Ihnen zurück.",
  },
];

const linkedServices = [
  {
    title: "Entrümpelung",
    description: "Professionelle Entrümpelung von Wohnungen, Häusern und Kellern.",
    href: "/entruempelung",
  },
  {
    title: "Haushaltsauflösung",
    description: "Komplette Auflösung von Haushalten mit Wertanrechnung.",
    href: "/haushaltsaufloesung",
  },
  {
    title: "Umzüge",
    description: "Zuverlässiger Umzugsservice im Raum NRW und darüber hinaus.",
    href: "/umzug",
  },
];

const reviews = [
  {
    name: "Petra H.",
    text: "Während unseres Hausumbaus haben wir unsere Möbel einlagern lassen. Alles wurde perfekt verpackt und nach 3 Monaten unbeschädigt zurückgeliefert.",
    rating: 5,
  },
  {
    name: "Andreas B.",
    text: "Super Service! Schnelle Abholung, sichere Lagerung und unkomplizierter Rücktransport. Preis-Leistung stimmt absolut.",
    rating: 5,
  },
  {
    name: "Marion K.",
    text: "Sehr freundliches Team. Die Einlagerung hat reibungslos geklappt. Kann ich nur weiterempfehlen!",
    rating: 5,
  },
];

export default function EinlagerungPage() {
  useEffect(() => {
    document.title = "Einlagerung & Möbellagerung | Stressfrei Entrümpelungen Rhein-Erft-Kreis";
    let _canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!_canonical) { _canonical = document.createElement("link"); _canonical.setAttribute("rel", "canonical"); document.head.appendChild(_canonical); }
    _canonical.setAttribute("href", "https://stressfreientruempelungen.de/einlagerung-rhein-erft-kreis");
    const _setOgMeta = (prop: string, val: string) => { let m = document.querySelector(`meta[property="${prop}"]`) as HTMLMetaElement | null; if (!m) { m = document.createElement("meta"); m.setAttribute("property", prop); document.head.appendChild(m); } m.setAttribute("content", val); };
    _setOgMeta("og:url", "https://stressfreientruempelungen.de/einlagerung-rhein-erft-kreis");
    _setOgMeta("og:image", "https://stressfreientruempelungen.de/images/einlagerung-moebel-lagerung-rhein-erft-kreis.webp");
    _setOgMeta("og:locale", "de_DE");
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Sichere Einlagerung im Rhein-Erft-Kreis. Möbel, Hausrat und Gewerbe zwischenlagern. Flexible Laufzeiten, trockene Lagerräume, Abholung inklusive.");
    }
  }, []);

  return (
    <>
    <PageLayout>
      <PageHero
        title="Einlagerung im Rhein-Erft-Kreis"
        subtitle="Sichere und trockene Lagerung für Ihre Möbel und Gegenstände. Inklusive Verpackung, Transport und Rücktransport."
        highlight="Einlagerung"
      />

      <section className="pb-8 sm:pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeIn}>
            <img
              src="/images/einlagerung-moebel-lagerung-rhein-erft-kreis.webp"
              alt="Sichere Einlagerung & Lagerservice im Rhein-Erft-Kreis – Stressfrei Entrümpelungen"
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
              Einlagerung - Sicher & Unkompliziert
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ob während eines Umzugs, einer Renovierung oder bei Platzmangel - manchmal braucht man einfach
              zusätzlichen Stauraum. Wir bieten Ihnen eine sichere Einlagerung Ihrer Möbel und Gegenstände
              im Rhein-Erft-Kreis. Unser Komplett-Service umfasst Verpackung, Transport, Lagerung und
              Rücktransport - alles aus einer Hand.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-card/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div className="text-center mb-14" {...fadeIn}>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3" data-testid="text-process-title">
              So funktioniert die Einlagerung
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              In vier einfachen Schritten zu Ihrer sicheren Einlagerung.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div key={s.title} {...fadeIn} transition={{ duration: 0.5, delay: i * 0.08 }}>
                  <Card className="p-6 h-full text-center hover-elevate">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                      {s.step}
                    </div>
                    <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2" data-testid={`text-step-${i}`}>
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
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4" data-testid="text-why-title">
                Warum bei uns einlagern?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Unsere Lagerhallen sind trocken, sicher und videoüberwacht. Ihre Gegenstände sind bei uns
                in besten Händen. Ob kurz- oder langfristige Einlagerung - wir bieten flexible Lösungen
                zu fairen Preisen.
              </p>
              <div className="space-y-3 mb-6">
                {[
                  "Trockene und sichere Lagerhallen",
                  "Videoüberwachung rund um die Uhr",
                  "Flexible Laufzeiten",
                  "Fachgerechte Verpackung inklusive",
                  "Transport und Rücktransport inklusive",
                  "Faire und transparente Preise",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <a href="tel:+4922715880940" data-testid="link-why-call">
                <Button size="lg" data-testid="button-why-call">
                  <Phone className="w-4 h-4 mr-2" />
                  Jetzt beraten lassen
                </Button>
              </a>
            </motion.div>
            <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.15 }}>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: Shield, label: "Vollversichert" },
                  { icon: Award, label: "Top bewertet" },
                  { icon: Users, label: "Erfahrenes Team" },
                  { icon: Clock, label: "Flexibel" },
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

      <section className="py-20 sm:py-28 bg-card/50">
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

      <section className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div className="text-center mb-14" {...fadeIn}>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3" data-testid="text-related-title">
              Weitere Leistungen
            </h2>
            <p className="text-muted-foreground">Entdecken Sie unsere weiteren Services.</p>
          </motion.div>
          <div className="grid sm:grid-cols-3 gap-6">
            {linkedServices.map((s, i) => (
              <motion.div key={s.title} {...fadeIn} transition={{ duration: 0.5, delay: i * 0.08 }}>
                <Link href={s.href} style={{ textDecoration: "none" }} data-testid={`link-service-${i}`}>
                  <Card className="p-6 h-full hover-elevate">
                    <h3 className="text-lg font-semibold text-foreground mb-2">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.description}</p>
                    <div className="flex items-center gap-1 text-sm text-primary font-medium">
                      Mehr erfahren
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <InternalLinksSection pageKey="einlagerung" />
      <CTASection />
    </PageLayout>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Einlagerung & Lagerservice",
      "serviceType": "Einlagerung",
      "description": "Flexible Einlagerung von Möbeln, Hausrat und Gewerbeware im Rhein-Erft-Kreis. Sichere, günstige Lagerräume mit kurzen Kündigungsfristen.",
      "provider": { "@type": "LocalBusiness", "name": "Stressfrei Entrümpelungen & Umzüge", "telephone": "+4922715880940", "url": "https://stressfreientruempelungen.de" },
      "areaServed": { "@type": "AdministrativeArea", "name": "Rhein-Erft-Kreis, NRW" },
      "url": "https://stressfreientruempelungen.de/einlagerung-rhein-erft-kreis",
      "offers": { "@type": "Offer", "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "EUR", "description": "Preis nach Lagerbedarf und Laufzeit" } }
    }) }} />
    </>
  );
}
