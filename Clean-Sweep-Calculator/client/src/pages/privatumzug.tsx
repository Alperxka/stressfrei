import { useEffect } from "react";
import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PageLayout, PageHero, CTASection, InternalLinksSection } from "@/components/layout";
import { motion } from "framer-motion";
import {
  Phone,
  CheckCircle2,
  Truck,
  ShieldCheck,
  Clock,
  PackageCheck,
  Wrench,
  Route,
  Box,
  MapPin,
  Star,
} from "lucide-react";

const reviews = [
  {
    name: "Sandra M., Bergheim",
    text: "Von der Anfrage bis zum letzten Karton wirklich stressfrei. Das Team war pünktlich, sehr freundlich und hat alles sorgfältig eingepackt und transportiert. Keine einzige Beschädigung!",
    rating: 5,
  },
  {
    name: "Thomas K., Hürth",
    text: "Wir haben einen 4-Zimmer-Haushalt umgezogen und waren rundum zufrieden. Festpreis wie versprochen, alles sauber verpackt und die Möbel wurden tadellos auf- und abgebaut. Jederzeit wieder!",
    rating: 5,
  },
  {
    name: "Martina H., Pulheim",
    text: "Sehr professionell und entspannt. Die Jungs haben meinen schweren Schrank über drei Etagen gebracht, ohne zu klagen. Ich hätte das nie alleine geschafft. Klare Empfehlung!",
    rating: 5,
  },
];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const highlights = [
  "Kostenlose Besichtigung vor Ort",
  "Top-Bewertungen",
  "Kompetente Beratung",
  "NRW-weit tätig",
];

const benefits = [
  {
    icon: Truck,
    title: "Sie müssen nichts tragen",
    description:
      "Unsere Mitarbeiter transportieren alles, was Ihnen lieb ist – lehnen Sie sich entspannt zurück.",
  },
  {
    icon: ShieldCheck,
    title: "Ihre Habseligkeiten sind geschützt",
    description:
      "Wir sorgen dafür, dass Ihre Wertgegenstände sicher und unbeschädigt an ihrem neuen Ziel ankommen. Mit professioneller Verpackung, geschultem Personal und zuverlässigem Transport schützen wir Ihre Habseligkeiten vor Schäden.",
  },
  {
    icon: Clock,
    title: "Sie sparen Zeit",
    description:
      "Die allermeisten unserer Umzüge erledigen wir innerhalb eines Tages. Ihre Räumlichkeiten bekommen Sie abends besenrein übergeben.",
  },
];

const services = [
  {
    icon: Truck,
    title: "Umzugstransport",
    description:
      "Wir bringen Ihre geschätzten Möbel und Güter sicher und schnell von A nach B. Mit unserem Fuhrpark können wir all Ihre Möbel transportieren.",
  },
  {
    icon: Wrench,
    title: "Möbel De- & Montage",
    description:
      "Schränke, Küchen und andere Möbelstücke werden von unseren erfahrenen Mitarbeitern fachgerecht ab- und wieder aufgebaut.",
  },
  {
    icon: PackageCheck,
    title: "Packservice",
    description:
      "Auf Wunsch übernehmen wir auch das Ein- und Auspacken Ihrer Habseligkeiten sicher und sorgfältig.",
  },
  {
    icon: Route,
    title: "Halteverbotszone",
    description:
      "Wir kümmern uns um die Einrichtung von Halteverbotszonen und alle behördlichen Vorgaben für Ihren Umzug.",
  },
  {
    icon: ShieldCheck,
    title: "Versicherung",
    description:
      "Ihre Habseligkeiten sind während des gesamten Umzugs durch uns versichert. Für maximale Sicherheit.",
  },
  {
    icon: Box,
    title: "Entrümpelung & Umzug",
    description:
      "Kombination aus Umzug und Entrümpelung: Nicht benötigte Gegenstände werden entsorgt, der Rest sicher transportiert.",
  },
];

export default function PrivatumzugPage() {
  useEffect(() => {
    document.title = "Privatumzug zum Festpreis | Stressfrei Umzüge Rhein-Erft-Kreis";
    let _canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!_canonical) { _canonical = document.createElement("link"); _canonical.setAttribute("rel", "canonical"); document.head.appendChild(_canonical); }
    _canonical.setAttribute("href", "https://stressfreientruempelungen.de/privatumzug");
    const _setOgMeta = (prop: string, val: string) => { let m = document.querySelector(`meta[property="${prop}"]`) as HTMLMetaElement | null; if (!m) { m = document.createElement("meta"); m.setAttribute("property", prop); document.head.appendChild(m); } m.setAttribute("content", val); };
    _setOgMeta("og:url", "https://stressfreientruempelungen.de/privatumzug");
    _setOgMeta("og:image", "https://stressfreientruempelungen.de/images/privatumzug-stressfrei-rhein-erft-kreis.webp");
    _setOgMeta("og:locale", "de_DE");
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Privatumzug im Rhein-Erft-Kreis & NRW zum Festpreis. Ein- und Auspacken, Möbelmontage, Transport — wir kümmern uns um alles. Jetzt Angebot einholen!");
    }
  }, []);

  return (
    <>
    <PageLayout>
      <PageHero
        title="Stressfrei Umziehen"
        subtitle="Egal, ob im Raum NRW und Rheinland oder in der Region Köln/Bonn – wir sind Ihr Umzugsunternehmen für Ihren Privatumzug!"
        highlight="Privatumzug"
      />

      <section className="pb-8 sm:pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeIn}>
            <img
              src="/images/privatumzug-stressfrei-rhein-erft-kreis.webp"
              alt="Privatumzug im Rhein-Erft-Kreis – zuverlässiger Umzugsservice von Stressfrei"
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
              Stressfrei: Ihr Experte für Privatumzüge
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Suchen Sie eine Umzugsfirma für Ihren Privatumzug? Ihre Suche ist nun beendet!
              Wir sind ein professionelles Umzugsunternehmen und haben im NRW-Gebiet schon zahlreiche Umzüge
              erfolgreich durchgeführt, sowohl im privaten als auch im geschäftlichen Bereich. Wir sind im Rheinland
              und in der Region Köln/Bonn vertreten und gewährleisten einen stressfreien, routinierten Umzugsablauf.
            </p>
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed mt-4">
              Wollen Sie sich vor dem Umzug von altem Ballast trennen und entrümpeln? Das stellt für uns ebenfalls
              kein Problem dar. Wir offerieren Ihnen eine Kombination aus Umzug und Entrümpelung in Ihrer Nähe:
              Nicht mehr benötigte Gegenstände werden fachgerecht entsorgt, während Ihre restlichen Habseligkeiten
              sicher und unversehrt an Ihren neuen Wohnort gebracht werden!
            </p>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {highlights.map((h) => (
              <div key={h} className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-primary/5 border text-sm text-foreground" data-testid={`badge-highlight-${h.toLowerCase().replace(/\s+/g, "-")}`}>
                <CheckCircle2 className="w-4 h-4 text-primary" />
                {h}
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button size="lg" className="gap-2 w-full sm:w-auto !whitespace-normal h-auto py-3" asChild data-testid="button-angebot-einholen">
              <a href="tel:+4922715880940">
                <Phone className="w-4 h-4" />
                Angebot unverbindlich einholen
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-card/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div className="text-center mb-14" {...fadeIn}>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3" data-testid="text-benefits-title">
              Stressfrei umziehen
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Ihr Unternehmen für Privatumzüge
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-3 gap-8">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <motion.div key={b.title} {...fadeIn} transition={{ duration: 0.5, delay: i * 0.1 }}>
                  <Card className="p-6 h-full text-center" data-testid={`card-benefit-${i}`}>
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{b.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{b.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Button size="lg" className="gap-2 w-full sm:w-auto !whitespace-normal h-auto py-3" asChild data-testid="button-angebot-einholen-2">
              <a href="tel:+4922715880940">
                <Phone className="w-4 h-4" />
                Angebot unverbindlich einholen
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div className="text-center mb-14" {...fadeIn}>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3" data-testid="text-services-title">
              Unsere Leistungen für Ihren Privatumzug
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Von Transport bis Montage – alles aus einer Hand.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div key={s.title} {...fadeIn} transition={{ duration: 0.5, delay: i * 0.1 }}>
                  <Card className="p-6 h-full" data-testid={`card-service-${i}`}>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{s.title}</h3>
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
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">Das sagen unsere Kunden</h2>
            <p className="text-muted-foreground">Echte Erfahrungen von Menschen, die mit uns umgezogen sind.</p>
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
                  <p className="text-sm font-medium text-foreground">{r.name}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-card/50" data-testid="section-staedte">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div {...fadeIn} className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">Privatumzug in Ihrer Stadt</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Wir führen Privatumzüge im gesamten Rhein-Erft-Kreis und Großraum Köln durch. Finden Sie Ihren Standort:
            </p>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              { label: "Privatumzug Bergheim", href: "/umzugsunternehmen-bergheim" },
              { label: "Privatumzug Kerpen", href: "/umzugsunternehmen-kerpen" },
              { label: "Privatumzug Frechen", href: "/umzugsunternehmen-frechen" },
              { label: "Privatumzug Hürth", href: "/umzugsunternehmen-huerth" },
              { label: "Privatumzug Pulheim", href: "/umzugsunternehmen-pulheim" },
              { label: "Privatumzug Erftstadt", href: "/umzugsunternehmen-erftstadt" },
              { label: "Privatumzug Bedburg", href: "/umzugsunternehmen-bedburg" },
              { label: "Privatumzug Elsdorf", href: "/umzugsunternehmen-elsdorf" },
              { label: "Privatumzug Rommerskirchen", href: "/umzugsunternehmen-rommerskirchen" },
              { label: "Privatumzug Grevenbroich", href: "/umzugsunternehmen-grevenbroich" },
              { label: "Privatumzug Köln", href: "/umzugsunternehmen-koeln" },
              { label: "Privatumzug Düsseldorf", href: "/umzugsunternehmen-duesseldorf" },
              { label: "Privatumzug Aachen", href: "/umzugsunternehmen-aachen" },
              { label: "Alle Standorte", href: "/standorte" },
            ].map((city, i) => (
              <motion.div key={city.href} {...fadeIn} transition={{ duration: 0.4, delay: i * 0.04 }}>
                <Link href={city.href} style={{ textDecoration: "none" }}>
                  <Card className="p-3 hover:border-primary/40 hover:bg-primary/5 transition-colors cursor-pointer h-full" data-testid={`link-privat-stadt-${i}`}>
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
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">Häufige Fragen zum Privatumzug</h2>
          </motion.div>
          <div className="space-y-4">
            {[
              { q: "Was kostet ein Privatumzug?", a: "Ein lokaler Privatumzug (unter 30 km) für eine 2-Zimmer-Wohnung kostet typischerweise zwischen 700 und 1.400 €. Der genaue Preis hängt von Wohnungsgröße, Etage und Entfernung ab. Nach kostenloser Besichtigung erhalten Sie einen verbindlichen Festpreis ohne versteckte Kosten." },
              { q: "Wie lange im Voraus muss ich buchen?", a: "Wir empfehlen 2–4 Wochen im Voraus zu buchen, besonders im Sommer und zu Monatsanfang/-ende. Bei kurzfristigen Anfragen helfen wir jedoch fast immer — rufen Sie uns einfach an." },
              { q: "Sind meine Möbel während des Umzugs versichert?", a: "Ja, alle Ihre Gegenstände sind während des gesamten Umzugs versichert. Im Schadensfall haften wir. Auf Wunsch erklären wir Ihnen den Versicherungsschutz im Detail." },
              { q: "Helfen Sie auch beim Einpacken?", a: "Ja, auf Wunsch übernehmen wir das komplette Einpacken Ihres Haushalts. Wir bringen hochwertiges Verpackungsmaterial mit und kennzeichnen alle Kartons für eine geordnete Auslieferung." },
              { q: "Bauen Sie Möbel auch ab und auf?", a: "Ja, Ab- und Aufbau von Möbeln ist Teil unseres Services. Schränke, Betten und Regale werden fachgerecht demontiert und am neuen Ort wieder aufgebaut." },
            ].map((faq, i) => (
              <motion.div key={i} {...fadeIn} transition={{ duration: 0.4, delay: i * 0.06 }}>
                <Card className="p-5" data-testid={`faq-privatumzug-${i}`}>
                  <h3 className="font-semibold mb-2 text-foreground">{faq.q}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <InternalLinksSection pageKey="privatumzug" />
      <CTASection />
    </PageLayout>
    </>
  );
}
