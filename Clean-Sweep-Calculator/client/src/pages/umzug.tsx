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
  Truck,
  PackageCheck,
  Wrench,
  Route,
  ShieldCheck,
  Box,
  MapPin,
  Users,
  Award,
  Clock,
  Shield,
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const services = [
  {
    icon: Truck,
    title: "Umzugstransport",
    description: "Wir bringen Ihre geschätzten Möbel und Güter sicher und schnell von A nach B. Mit unserem Fuhrpark können wir all Ihre Möbel transportieren.",
  },
  {
    icon: Wrench,
    title: "Möbel De- & Montage",
    description: "Schränke, Küchen und andere Möbelstücke werden von unseren erfahrenen Mitarbeitern fachgerecht ab- und wieder aufgebaut.",
  },
  {
    icon: PackageCheck,
    title: "Packservice",
    description: "Auf Wunsch übernehmen wir auch das Ein- und Auspacken Ihrer Habseligkeiten sicher und sorgfältig.",
  },
  {
    icon: Route,
    title: "Halteverbotszone",
    description: "Wir kümmern uns um die Einrichtung von Halteverbotszonen und alle behördlichen Vorgaben für Ihren Umzug.",
  },
  {
    icon: ShieldCheck,
    title: "Versicherung",
    description: "Ihre Habseligkeiten sind während des gesamten Umzugs durch uns versichert. Für maximale Sicherheit.",
  },
  {
    icon: Box,
    title: "Entrümpelung & Umzug",
    description: "Kombination aus Umzug und Entrümpelung: Nicht benötigte Gegenstände werden entsorgt, der Rest sicher transportiert.",
  },
];

const costFactors = [
  "Umzugs- bzw. Entrümpelungsgutmenge",
  "Möbel De- und Montage",
  "Länge der Fahrtstrecke",
  "Einrichtung einer Halteverbotszone",
  "Packservice",
  "Schwerlasttransporte",
];

const highlights = [
  "Kostenlose Besichtigung vor Ort",
  "Top-Bewertungen",
  "Kompetente Beratung",
  "NRW-weit tätig",
];

export default function UmzugPage() {
  useEffect(() => {
    document.title = "Umzugsunternehmen Rhein-Erft-Kreis | Stressfrei Umzüge zum Festpreis";
    let _canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!_canonical) { _canonical = document.createElement("link"); _canonical.setAttribute("rel", "canonical"); document.head.appendChild(_canonical); }
    _canonical.setAttribute("href", "https://stressfreientruempelungen.de/umzug");
    const _setOgMeta = (prop: string, val: string) => { let m = document.querySelector(`meta[property="${prop}"]`) as HTMLMetaElement | null; if (!m) { m = document.createElement("meta"); m.setAttribute("property", prop); document.head.appendChild(m); } m.setAttribute("content", val); };
    _setOgMeta("og:url", "https://stressfreientruempelungen.de/umzug");
    _setOgMeta("og:image", "https://stressfreientruempelungen.de/images/umzug-umzugskartons-stressfrei-rhein-erft-kreis.webp");
    _setOgMeta("og:locale", "de_DE");
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Stressfreie Umzüge im Rhein-Erft-Kreis & NRW. Privatumzug, Seniorenumzug oder Büroumzug — alles aus einer Hand zum garantierten Festpreis.");
    }
  }, []);

  return (
    <>
    <PageLayout>
      <PageHero
        title="Ihr Umzugsunternehmen in der Nähe"
        subtitle="Egal ob im Raum NRW und Rheinland oder in der Region Köln/Bonn - wir sind Ihr zuverlässiges Umzugsunternehmen."
        highlight="Umzüge"
      />

      <section className="pb-8 sm:pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeIn}>
            <img
              src="/images/umzug-dienstleistung-rhein-erft-kreis-nrw.png"
              alt="Professioneller Umzugsservice im Rhein-Erft-Kreis – Stressfrei Entrümpelungen & Umzüge"
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
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3" data-testid="text-about-title">
              Stressfrei: Ihr Umzugsunternehmen
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Wir sind ein professionelles Umzugsunternehmen und haben im NRW-Gebiet schon zahlreiche Umzüge
              erfolgreich durchgeführt, sowohl im privaten als auch im geschäftlichen Bereich.
              Wir gewährleisten einen stressfreien, routinierten Umzugsablauf.
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
              Unsere Umzugsleistungen
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Von Transport bis Montage - alles aus einer Hand.
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
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4" data-testid="text-pricing-title">
                Preise und Kosten
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Die Kosten für einen Umzug können nicht allgemein beziffert werden. Bei der Berechnung des Preises
                sind unterschiedliche Faktoren von Bedeutung. Für ein genaues Angebot kommen wir gerne persönlich vorbei
                oder führen eine Video-Besichtigung durch.
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
                Umzugshelfer in Ihrer Nähe
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Die Idee zur Gründung von Stressfrei Entrümpelungen & Umzüge kam Oskar und Alper,
                als Oskar das Haus seines Großvaters entrümpeln musste. Die Erfahrung mit unseriösen
                Anbietern hinterließ einen bleibenden Eindruck - und die Entscheidung, es anders und
                besser zu machen.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: Shield, label: "Vollversichert" },
                  { icon: Award, label: "Top bewertet" },
                  { icon: Users, label: "Erfahrenes Team" },
                  { icon: Clock, label: "Pünktlich" },
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

      <section className="py-16 bg-card/50" data-testid="section-staedte">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div className="text-center mb-10" {...fadeIn}>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3" data-testid="text-areas-title">
              Umzug in Ihrer Stadt
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Wir führen Umzüge im gesamten Rhein-Erft-Kreis, Großraum Köln und NRW durch. Wählen Sie Ihren Standort:
            </p>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              { label: "Umzug Bergheim", href: "/entruempelung-bergheim" },
              { label: "Umzug Kerpen", href: "/entruempelung-kerpen" },
              { label: "Umzug Frechen", href: "/entruempelung-frechen" },
              { label: "Umzug Hürth", href: "/entruempelung-huerth" },
              { label: "Umzug Pulheim", href: "/entruempelung-pulheim" },
              { label: "Umzug Erftstadt", href: "/entruempelung-erftstadt" },
              { label: "Umzug Bedburg", href: "/entruempelung-bedburg" },
              { label: "Umzug Elsdorf", href: "/entruempelung-elsdorf" },
              { label: "Umzug Rommerskirchen", href: "/umzugsunternehmen-rommerskirchen" },
              { label: "Umzug Grevenbroich", href: "/umzugsunternehmen-grevenbroich" },
              { label: "Umzug Brühl", href: "/entruempelung-bruehl" },
              { label: "Umzug Köln", href: "/umzugsunternehmen-koeln" },
              { label: "Umzug Düsseldorf", href: "/umzugsunternehmen-duesseldorf" },
              { label: "Umzug Aachen", href: "/umzugsunternehmen-aachen" },
              { label: "Umzug Rhein-Erft-Kreis", href: "/umzugsunternehmen-rhein-erft-kreis" },
              { label: "Alle Standorte", href: "/standorte" },
            ].map((city, i) => (
              <motion.div key={city.href} {...fadeIn} transition={{ duration: 0.4, delay: i * 0.04 }}>
                <Link href={city.href} style={{ textDecoration: "none" }}>
                  <Card className="p-3 hover:border-primary/40 hover:bg-primary/5 transition-colors cursor-pointer h-full" data-testid={`link-umzug-stadt-${i}`}>
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

      <InternalLinksSection pageKey="umzug" />
      <CTASection />
    </PageLayout>
    </>
  );
}
