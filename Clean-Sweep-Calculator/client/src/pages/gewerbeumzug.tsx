import { useEffect } from "react";
import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { PageLayout, PageHero, CTASection, InternalLinksSection } from "@/components/layout";
import { motion } from "framer-motion";
import {
  Star, CheckCircle2, Building2, Clock, ShieldCheck, Users, Award, Shield, Truck, Package, Wrench, MapPin, ClipboardList,
} from "lucide-react";

const cityLinks = [
  { label: "Bergheim", href: "/umzugsunternehmen-bergheim" },
  { label: "Kerpen", href: "/umzugsunternehmen-kerpen" },
  { label: "Frechen", href: "/umzugsunternehmen-frechen" },
  { label: "Hürth", href: "/umzugsunternehmen-huerth" },
  { label: "Pulheim", href: "/umzugsunternehmen-pulheim" },
  { label: "Erftstadt", href: "/umzugsunternehmen-erftstadt" },
  { label: "Bedburg", href: "/umzugsunternehmen-bedburg" },
  { label: "Elsdorf", href: "/umzugsunternehmen-elsdorf" },
];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const services = [
  {
    icon: Building2,
    title: "Lager- & Hallentransporte",
    description: "Wir transportieren Ladeneinrichtungen, Lagerregale, Produktionsmaschinen und Gewerbeinventar sicher an den neuen Standort — mit passenden Fahrzeugen und Transporthilfen.",
  },
  {
    icon: Wrench,
    title: "Auf- & Abbau von Gewerbeinventar",
    description: "Regalsysteme, Ladentheken, Vitrinen und Einbauten werden fachgerecht demontiert, transportiert und am neuen Standort wieder aufgebaut.",
  },
  {
    icon: Package,
    title: "Professionelles Verpacken",
    description: "Empfindliche Waren, Elektronik und hochwertige Ausstellungsstücke werden individuell verpackt und gesichert. Wir stellen geeignetes Verpackungsmaterial bereit.",
  },
  {
    icon: Truck,
    title: "Schwer- & Sondertransporte",
    description: "Schwere Gewerbegeräte, Maschinen oder übergroße Ausstattungen sind kein Problem. Wir verfügen über das Equipment für anspruchsvolle Gewerbeumzüge.",
  },
  {
    icon: Clock,
    title: "Termingerechte Übergabe",
    description: "Wir halten Ihre Umzugstermine ein — damit Neuvermietung, Mietende oder die Neueröffnung Ihres Gewerbes termingerecht stattfinden kann.",
  },
  {
    icon: ShieldCheck,
    title: "Vollversichert & faire Preise",
    description: "Ihr Gewerbeinventar ist während des gesamten Transports versichert. Transparente Festpreise — keine Überraschungen auf der Rechnung.",
  },
];

const highlights = [
  "Kostenlose Besichtigung",
  "Festpreisgarantie",
  "Auch für große Flächen",
  "NRW-weit tätig",
];

const reviews = [
  {
    name: "Ralf M., Einzelhändler",
    text: "Unser Ladenlokal wurde über ein Wochenende komplett umgezogen. Regale, Vitrinen und Warenbestände — alles am neuen Standort perfekt aufgestellt. Sehr empfehlenswert!",
    rating: 5,
  },
  {
    name: "Andrea H., Gastronomin",
    text: "Der Umzug unserer Küche und des Gastraums war anspruchsvoll. Das Team hat jedes Gerät sorgfältig behandelt und termingerecht geliefert. Sehr professionell.",
    rating: 5,
  },
  {
    name: "Stefan K., Lagerleiter",
    text: "Lagerregale, Gabelstapler und schwere Paletten — alles kein Problem für dieses Team. Schnell, zuverlässig und zu einem fairen Festpreis. Gerne wieder.",
    rating: 5,
  },
];

export default function GewerbeumzugPage() {
  useEffect(() => {
    document.title = "Gewerbeumzug NRW | Laden, Lager & Betrieb umziehen | Stressfrei";
    let _canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!_canonical) { _canonical = document.createElement("link"); _canonical.setAttribute("rel", "canonical"); document.head.appendChild(_canonical); }
    _canonical.setAttribute("href", "https://stressfreientruempelungen.de/gewerbeumzug");
    const _setOgMeta = (prop: string, val: string) => { let m = document.querySelector(`meta[property="${prop}"]`) as HTMLMetaElement | null; if (!m) { m = document.createElement("meta"); m.setAttribute("property", prop); document.head.appendChild(m); } m.setAttribute("content", val); };
    _setOgMeta("og:url", "https://stressfreientruempelungen.de/gewerbeumzug");
    _setOgMeta("og:image", "https://stressfreientruempelungen.de/images/bueroumzug-firmenumzug-dienstleistung-nrw.webp");
    _setOgMeta("og:locale", "de_DE");
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Gewerbeumzug NRW – Laden, Lager, Werkstatt oder Praxis umziehen. Professionell, termingerecht und zum Festpreis. Kostenlose Besichtigung: ☎ 02271 5880940");
    }
  }, []);

  return (
    <>
    <PageLayout>
      <PageHero
        title="Gewerbeumzug NRW – Laden, Lager & Betrieb"
        subtitle="Ob Ladenlokal, Werkstatt, Lager oder Arztpraxis – wir planen und realisieren Ihren Gewerbeumzug in NRW termingerecht und professionell."
        highlight="Gewerbeumzug"
      />

      <section className="pb-8 sm:pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeIn}>
            <img
              src="/images/bueroumzug-firmenumzug-dienstleistung-nrw.webp"
              alt="Gewerbeumzug NRW – Stressfrei Entrümpelungen & Umzüge"
              className="w-full rounded-2xl shadow-lg object-cover aspect-[16/9]"
              width={1200}
              height={675}
              loading="eager"
              fetchpriority="high"
              decoding="async"
            />
          </motion.div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div className="text-center mb-14" {...fadeIn}>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
              Gewerbeumzug in NRW – Ihr Betrieb in guten Händen
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ein Gewerbeumzug stellt andere Anforderungen als ein normaler Büroumzug. Schwere Geräte,
              empfindliche Ladenausstattungen, volle Lagerregale oder technische Einrichtungen erfordern
              Erfahrung, das richtige Equipment und sorgfältige Planung. Wir haben das Know-how und die
              Mittel, um jeden Gewerbeumzug in Nordrhein-Westfalen professionell umzusetzen — zum
              vereinbarten Festpreis.
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

      <section className="py-16 sm:py-20 bg-primary/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div className="text-center mb-12" {...fadeIn}>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">Unser Versprechen beim Gewerbeumzug</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Drei Garantien, auf die Sie sich verlassen können.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: ClipboardList, title: "Ihr Umzug wird bis ins Detail geplant", text: "Bevor der erste Handgriff erfolgt, steht ein klarer Ablaufplan. Wir koordinieren Zeitfenster, Fahrzeuge und Personal — damit Ihr Gewerbebetrieb so kurz wie möglich stillsteht." },
              { icon: ShieldCheck, title: "Ihre Einrichtung kommt unbeschadet an", text: "Ladentheken, Regalsysteme, technische Geräte — alles wird professionell verpackt und gesichert transportiert. Vollversichert und mit größter Sorgfalt." },
              { icon: Clock, title: "Ihr Betrieb läuft schnell weiter", text: "Wir arbeiten auf Wunsch auch außerhalb der Geschäftszeiten, damit Sie am nächsten Morgen ohne Einschränkungen weitermachen können. Schnell, leise, zuverlässig." },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={i} {...fadeIn} transition={{ duration: 0.5, delay: i * 0.1 }} className="flex gap-5 p-6 bg-background rounded-2xl border">
                  <div className="w-11 h-11 rounded-md bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                  </div>
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
              Unsere Leistungen beim Gewerbeumzug
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Komplettservice für jeden Gewerbetyp — vom kleinen Ladenlokal bis zur großen Lagerhalle.
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
                    <h3 className="text-lg font-semibold text-foreground mb-2">{s.title}</h3>
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
            <p className="text-muted-foreground">Gewerbetreibende aus NRW vertrauen uns.</p>
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

      <section className="py-20 sm:py-28 bg-card/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeIn}>
              <img
                src="/images/stressfrei-entruempelungen-team-rhein-erft-kreis.webp"
                alt="Team Stressfrei Entrümpelungen NRW – Gewerbeumzug"
                className="w-full rounded-2xl shadow-lg object-cover"
                width={1200}
                height={575}
                loading="lazy"
              />
            </motion.div>
            <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.15 }}>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Erfahren in allen Arten von Gewerbeumzügen
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Von der Zahnarztpraxis über den Fachhandel bis zur Logistikhalle — wir kennen die
                unterschiedlichen Anforderungen gewerblicher Umzüge in NRW. Mit eigenem Fuhrpark,
                erfahrenen Fachkräften und bewährten Abläufen sorgen wir dafür, dass Ihr neuer
                Standort schnell betriebsbereit ist.
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
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">Häufige Fragen zum Gewerbeumzug</h2>
          </motion.div>
          <div className="space-y-4">
            {[
              { q: "Was kostet ein Gewerbeumzug in NRW?", a: "Die Kosten variieren stark je nach Art des Gewerbes, Größe der Fläche und Umfang der Leistungen. Wir besichtigen kostenlos und erstellen ein individuelles Festpreisangebot — transparent und ohne versteckte Kosten." },
              { q: "Können Sie auch schwere Maschinen und Geräte transportieren?", a: "Ja, wir haben das Equipment und die Erfahrung für Schwertransporte gewerblicher Maschinen und Geräte. Sprechen Sie uns einfach auf Ihre spezifischen Anforderungen an." },
              { q: "Wie minimieren Sie die Betriebsunterbrechung?", a: "Wir planen den Umzug in Absprache mit Ihnen so, dass möglichst wenige Betriebsstunden verloren gehen. Samstags- und Sonntagsumzüge sind auf Wunsch möglich." },
              { q: "Helfen Sie auch bei der Einrichtung am neuen Standort?", a: "Ja, wir bauen Regalsysteme, Ladeneinbauten und Möbel am neuen Standort wieder auf — nach Ihrem Einrichtungsplan oder in Absprache mit Ihnen." },
              { q: "Übernehmen Sie auch die Entsorgung von Gewerbeabfall?", a: "Ja, als kombinierter Entrümpelungs- und Umzugsdienstleister können wir nicht mehr benötigtes Inventar direkt fachgerecht entsorgen oder verwerten — auf Wunsch mit Wertanrechnung." },
            ].map((faq, i) => (
              <motion.div key={i} {...fadeIn} transition={{ duration: 0.4, delay: i * 0.06 }}>
                <Card className="p-5">
                  <h3 className="font-semibold mb-2 text-foreground">{faq.q}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-card/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeIn} className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <MapPin className="w-5 h-5 text-primary" />
              <h2 className="text-xl sm:text-2xl font-bold text-foreground">Gewerbeumzug in Ihrer Stadt im Rhein-Erft-Kreis</h2>
            </div>
            <p className="text-muted-foreground">Wir sind NRW-weit für Sie da — mit besonderer Expertise im Rhein-Erft-Kreis und der Region Köln.</p>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {cityLinks.map((c) => (
              <Link key={c.href} href={c.href} style={{ textDecoration: "none" }}>
                <div className="flex items-center gap-2 px-4 py-3 rounded-lg border border-border/50 text-sm text-muted-foreground hover:bg-primary/5 hover:text-primary hover:border-primary/30 transition-colors cursor-pointer">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-primary" />
                  Umzug {c.label}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <InternalLinksSection pageKey="gewerbeumzug" />
      <CTASection />
    </PageLayout>
    </>
  );
}
