import { useEffect } from "react";
import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { PageLayout, PageHero, CTASection, InternalLinksSection } from "@/components/layout";
import { motion } from "framer-motion";
import {
  Star, CheckCircle2, Clock, ShieldCheck, Users, Award, Shield, Truck, Package, MapPin, Navigation, Phone as PhoneIcon,
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
    icon: Navigation,
    title: "Deutschlandweiter Transport",
    description: "Wir ziehen Sie von NRW in jedes Bundesland — oder umgekehrt. Mit unserer eigenen Fahrzeugflotte und erfahrenen Fahrern erreichen wir jeden Zielort in Deutschland termingerecht.",
  },
  {
    icon: Package,
    title: "Professionelles Einpacken",
    description: "Für einen Fernumzug zählt besonders sichere Verpackung. Wir verpacken Möbel, Elektronik, Kunstgegenstände und empfindliche Waren so, dass sie auch eine lange Fahrt unbeschädigt überstehen.",
  },
  {
    icon: Truck,
    title: "Komplettservice Fernumzug",
    description: "Abbau am alten Standort, sicherer Transport, Aufbau am neuen Wohnort — alles aus einer Hand. Keine Koordination mehrerer Dienstleister, kein Stress.",
  },
  {
    icon: MapPin,
    title: "Besichtigung & Festpreis",
    description: "Vor dem Fernumzug besichtigen wir kostenfrei Ihren Hausstand. Sie erhalten einen verbindlichen Festpreis — egal wie lang die Strecke ist oder wie lange der Transport dauert.",
  },
  {
    icon: ShieldCheck,
    title: "Vollversichert auf langer Strecke",
    description: "Ihr gesamtes Umzugsgut ist auf der gesamten Transportstrecke vollständig versichert. Im seltenen Fall eines Schadens sind Sie optimal abgesichert.",
  },
  {
    icon: PhoneIcon,
    title: "Persönliche Begleitung",
    description: "Ein fester Ansprechpartner begleitet Sie durch den gesamten Fernumzug. Von der ersten Anfrage bis zum letzten aufgebauten Möbelstück am Zielort.",
  },
];

const highlights = [
  "Deutschland­weit verfügbar",
  "Festpreisgarantie",
  "Kostenlose Besichtigung",
  "Vollversichert",
];

const reviews = [
  {
    name: "Lisa M., Umzug NRW → München",
    text: "Der Fernumzug von Bergheim nach München war perfekt organisiert. Alles pünktlich geliefert, kein einziger Schaden. Wir sind sehr dankbar für den professionellen Service!",
    rating: 5,
  },
  {
    name: "Patrick D., Umzug Hamburg → NRW",
    text: "Umzug von Hamburg nach Köln — das Team war top vorbereitet, hat alles sorgfältig verpackt und pünktlich geliefert. Günstiger Festpreis und absolut zuverlässig.",
    rating: 5,
  },
  {
    name: "Julia K., Umzug NRW → Berlin",
    text: "Ich war skeptisch wegen der langen Strecke, aber der Umzug lief besser als erwartet. Alle Möbel heile, Aufbau inklusive, und der Preis war absolut fair.",
    rating: 5,
  },
];

export default function FernumzugPage() {
  useEffect(() => {
    document.title = "Fernumzug NRW | Deutschlandweit umziehen | Stressfrei Umzüge";
    let _canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!_canonical) { _canonical = document.createElement("link"); _canonical.setAttribute("rel", "canonical"); document.head.appendChild(_canonical); }
    _canonical.setAttribute("href", "https://stressfreientruempelungen.de/fernumzug");
    const _setOgMeta = (prop: string, val: string) => { let m = document.querySelector(`meta[property="${prop}"]`) as HTMLMetaElement | null; if (!m) { m = document.createElement("meta"); m.setAttribute("property", prop); document.head.appendChild(m); } m.setAttribute("content", val); };
    _setOgMeta("og:url", "https://stressfreientruempelungen.de/fernumzug");
    _setOgMeta("og:image", "https://stressfreientruempelungen.de/images/bueroumzug-firmenumzug-dienstleistung-nrw.webp");
    _setOgMeta("og:locale", "de_DE");
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Fernumzug NRW – deutschlandweit umziehen zum Festpreis. Von NRW in jedes Bundesland und zurück. Komplett-Service, vollversichert. Jetzt Angebot: ☎ 02271 5880940");
    }
  }, []);

  return (
    <>
    <PageLayout>
      <PageHero
        title="Fernumzug NRW – Deutschlandweit zum Festpreis"
        subtitle="Von NRW in jedes Bundesland oder umgekehrt — wir realisieren Ihren Fernumzug professionell, vollversichert und zum verbindlichen Festpreis."
        highlight="Fernumzug"
      />

      <section className="pb-8 sm:pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeIn}>
            <img
              src="/images/bueroumzug-firmenumzug-dienstleistung-nrw.webp"
              alt="Fernumzug NRW – deutschlandweiter Umzugsservice von Stressfrei"
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
              Fernumzug aus NRW – professionell, fair und stressfrei
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ein Fernumzug stellt besondere Anforderungen: Sorgfältige Verpackung für die lange Strecke,
              präzise Terminplanung für Übergaben und Einzug, und ein verlässlicher Partner, der auch auf
              500 km Entfernung für Sie erreichbar ist. Wir bieten all das — mit eigenem Fuhrpark, erfahrenen
              Umzugsprofis und einem Festpreis, der verbindlich ist und bleibt. Ob Sie von Bergheim nach
              Berlin, von Köln nach München oder von Bayern nach NRW ziehen — wir sind dabei.
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
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">Unser Versprechen beim Fernumzug</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Drei Garantien für einen stressfreien Fernumzug.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Navigation, title: "Ihr Umzug wird präzise geplant", text: "Langstrecken erfordern besonders sorgfältige Koordination. Wir planen Route, Fahrzeuge und Zeitfenster im Voraus — damit Ihr Hab und Gut planmäßig und ohne Zwischenfälle ankommt." },
              { icon: ShieldCheck, title: "Ihr Gut kommt unbeschadet an — egal wie weit", text: "Professionelles Einpacken, gesicherter Transport, Vollversicherung. Egal ob 100 oder 1.000 Kilometer — Ihre Möbel und Gegenstände werden so transportiert, als wären es unsere eigenen." },
              { icon: Clock, title: "Pünktliche Zustellung garantiert", text: "Wir halten uns an vereinbarte Zeitfenster. Kein Warten, keine Überraschungen. Sie erhalten klare Informationen, wann Ihre Sachen ankommen — und wir halten dieses Versprechen." },
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
              Unsere Leistungen beim Fernumzug
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Kompletter Fernumzug-Service — von der Planung bis zur Ankunft am Zielort.
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
            <p className="text-muted-foreground">Zufriedene Kunden aus ganz Deutschland.</p>
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
                alt="Team Stressfrei Entrümpelungen NRW – Fernumzug Deutschland"
                className="w-full rounded-2xl shadow-lg object-cover"
                width={1200}
                height={575}
                loading="lazy"
              />
            </motion.div>
            <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.15 }}>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Ihr Fernumzug-Partner mit Sitz in NRW
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Wir sind ein lokales Unternehmen mit regionalem Wurzeln im Rhein-Erft-Kreis — aber mit der
                Reichweite und dem Know-how für Fernumzüge durch ganz Deutschland. Unser Team kennt die
                Herausforderungen langer Umzugsstrecken und meistert sie mit Routine, Sorgfalt und dem
                richtigen Equipment.
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
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">Häufige Fragen zum Fernumzug</h2>
          </motion.div>
          <div className="space-y-4">
            {[
              { q: "Was kostet ein Fernumzug aus NRW?", a: "Die Kosten hängen von Hausstandsgröße, Entfernung und gewünschten Leistungen ab. Eine 3-Zimmer-Wohnung von NRW nach München kostet in der Regel zwischen 2.500 und 5.000 €. Nach kostenloser Besichtigung gibt es einen verbindlichen Festpreis." },
              { q: "Wie lange dauert ein Fernumzug?", a: "Bei kurzen bis mittleren Strecken (bis 400 km) ist der Fernumzug oft an einem Tag abgeschlossen. Bei größeren Entfernungen kann es bis zu zwei Tage dauern. Wir planen immer so, dass Sie am Folgetag einziehen können." },
              { q: "Können Sie auch Möbel vorher einlagern, wenn Einzugstermine nicht übereinstimmen?", a: "Ja, in Kombination mit unserem Einlagerungsservice können wir Ihren Hausstand zwischenlagern, bis Ihre neue Wohnung bezugsfertig ist. Flexible Laufzeiten, faire Preise." },
              { q: "Was passiert, wenn beim Fernumzug etwas beschädigt wird?", a: "Ihr Umzugsgut ist vollständig versichert. Im sehr seltenen Fall eines Schadens ist er über unsere Umzugsversicherung abgedeckt. Wir dokumentieren auf Wunsch den Zustand aller Gegenstände vor dem Transport." },
              { q: "Können Sie auch nach Deutschland einziehen (Umzug aus dem Ausland)?", a: "Ja, wir helfen auch bei Umzügen aus dem europäischen Ausland nach NRW. Sprechen Sie uns auf Ihre spezifische Situation an — wir finden eine Lösung." },
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
              <h2 className="text-xl sm:text-2xl font-bold text-foreground">Fernumzug ab Ihrer Stadt im Rhein-Erft-Kreis</h2>
            </div>
            <p className="text-muted-foreground">Wir starten Ihren Fernumzug aus dem gesamten Rhein-Erft-Kreis und der Region Köln — deutschlandweit.</p>
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

      <InternalLinksSection pageKey="fernumzug" />
      <CTASection />
    </PageLayout>
    </>
  );
}
