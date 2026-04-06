import { useEffect } from "react";
import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { PageLayout, PageHero, CTASection, InternalLinksSection } from "@/components/layout";
import { motion } from "framer-motion";
import {
  Phone, Star, CheckCircle2, Building2, Clock, ShieldCheck, Users, Award, Shield, Truck, ClipboardList, Headphones, MapPin,
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
    icon: ClipboardList,
    title: "Individuelle Umzugsplanung",
    description: "Jeder Firmenumzug ist einzigartig. Wir analysieren Ihre Anforderungen, erstellen einen detaillierten Ablaufplan und koordinieren alle Beteiligten für einen reibungslosen Ablauf.",
  },
  {
    icon: Building2,
    title: "Komplette Möbellogistik",
    description: "Demontage, Transport und Montage aller Büromöbel, Regalsysteme und Trennwände. Jedes Teil wird gekennzeichnet, damit am neuen Standort alles seinen richtigen Platz findet.",
  },
  {
    icon: Truck,
    title: "Eigene Fahrzeugflotte",
    description: "Mit unserer modernen Fahrzeugflotte transportieren wir Ihr komplettes Firmeninventar sicher und termingerecht — egal ob kleines Büro oder großes Unternehmen.",
  },
  {
    icon: Clock,
    title: "Minimale Betriebsunterbrechung",
    description: "Wir planen Ihren Firmenumzug so, dass Ihre Geschäftstätigkeit so wenig wie möglich beeinträchtigt wird. Umzüge am Wochenende oder nachts sind möglich.",
  },
  {
    icon: ShieldCheck,
    title: "Vollversichert & sicher",
    description: "Ihr gesamtes Firmeninventar — vom Schreibtisch bis zum Server — ist während des gesamten Transports umfassend versichert. Festpreise ohne versteckte Kosten.",
  },
  {
    icon: Headphones,
    title: "Persönliche Betreuung",
    description: "Sie erhalten einen festen Ansprechpartner, der Sie vom ersten Gespräch bis zum letzten aufgestellten Möbelstück begleitet. Erreichbar auch kurzfristig.",
  },
];

const highlights = [
  "Kostenlose Besichtigung vor Ort",
  "Festpreisgarantie",
  "Auch am Wochenende",
  "NRW-weit tätig",
];

const reviews = [
  {
    name: "Bernd W., Geschäftsführer",
    text: "Unser Firmenumzug lief absolut professionell ab. Das Team hat an einem Wochenende alles umgezogen — montags waren wir direkt wieder arbeitsfähig. Top Leistung!",
    rating: 5,
  },
  {
    name: "Kathrin S., Büroleitung",
    text: "Sehr strukturierter Ablauf, jeder Karton war beschriftet und am richtigen Ort. Keine Schäden, keine Verzögerungen. Klare Empfehlung für Firmenumzüge.",
    rating: 5,
  },
  {
    name: "Marcus F., IT-Leiter",
    text: "Das Umzugsteam war pünktlich, freundlich und äußerst sorgfältig. Unser IT-Equipment wurde mit größter Sorgfalt behandelt. Werden wir bei jedem Umzug wieder buchen.",
    rating: 5,
  },
];

export default function FirmenumzugPage() {
  useEffect(() => {
    document.title = "Firmenumzug NRW | Professionell & Termingerecht | Stressfrei Umzüge";
    let _canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!_canonical) { _canonical = document.createElement("link"); _canonical.setAttribute("rel", "canonical"); document.head.appendChild(_canonical); }
    _canonical.setAttribute("href", "https://stressfreientruempelungen.de/firmenumzug");
    const _setOgMeta = (prop: string, val: string) => { let m = document.querySelector(`meta[property="${prop}"]`) as HTMLMetaElement | null; if (!m) { m = document.createElement("meta"); m.setAttribute("property", prop); document.head.appendChild(m); } m.setAttribute("content", val); };
    _setOgMeta("og:url", "https://stressfreientruempelungen.de/firmenumzug");
    _setOgMeta("og:image", "https://stressfreientruempelungen.de/images/bueroumzug-firmenumzug-dienstleistung-nrw.webp");
    _setOgMeta("og:locale", "de_DE");
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Firmenumzug in NRW – professionell, termingerecht und mit Festpreisgarantie. Komplettservice vom Abbau bis zum Aufbau. Kostenlose Besichtigung: ☎ 02271 5880940");
    }
  }, []);

  return (
    <>
    <PageLayout>
      <PageHero
        title="Firmenumzug NRW – Professionell & Termingerecht"
        subtitle="Ihr Unternehmen zieht um — wir sorgen dafür, dass der Betrieb so schnell wie möglich wieder läuft. Komplettservice aus einer Hand, NRW-weit."
        highlight="Firmenumzug"
      />

      <section className="pb-8 sm:pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeIn}>
            <img
              src="/images/bueroumzug-firmenumzug-dienstleistung-nrw.webp"
              alt="Firmenumzug NRW – professioneller Umzugsservice von Stressfrei Entrümpelungen"
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
              Firmenumzug in NRW – alles aus einer Hand
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ein Firmenumzug ist weit mehr als nur Möbel von A nach B transportieren. Er erfordert präzise
              Planung, erfahrene Fachkräfte und klare Kommunikation. Wir begleiten Ihren Umzug von der ersten
              Besichtigung bis zum letzten aufgestellten Stuhl — damit Ihr Unternehmen schnellstmöglich wieder
              voll einsatzbereit ist. NRW-weit, zu fairen Festpreisen.
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
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">Unser Versprechen beim Firmenumzug</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Drei Garantien, auf die Sie sich verlassen können.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: ClipboardList, title: "Bis ins letzte Detail geplant", text: "Bevor ein einziges Möbelstück bewegt wird, steht ein klarer Plan. Zeitrahmen, Verantwortlichkeiten, Abläufe — wir koordinieren alles, damit nichts dem Zufall überlassen wird." },
              { icon: ShieldCheck, title: "Ihr Inventar kommt unbeschadet an", text: "Schreibtische, Technik, Regale — alles wird fachgerecht verpackt, gekennzeichnet und gesichert transportiert. Vollversichert. Keine unangenehmen Überraschungen." },
              { icon: Clock, title: "Ihr Betrieb läuft schnell weiter", text: "Unser Ziel: Ihr Unternehmen ist so schnell wie möglich am neuen Standort arbeitsfähig. Wir arbeiten auch am Wochenende, damit der Montag reibungslos startet." },
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
              Unsere Leistungen beim Firmenumzug
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Wir übernehmen die gesamte Koordination — von der Planung bis zur Umsetzung.
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
            <p className="text-muted-foreground">Vertrauen Sie auf die Erfahrungen zufriedener Unternehmen.</p>
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
                alt="Das Team von Stressfrei Entrümpelungen & Umzüge NRW"
                className="w-full rounded-2xl shadow-lg object-cover"
                width={1200}
                height={575}
                loading="lazy"
              />
            </motion.div>
            <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.15 }}>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Ihr verlässlicher Partner für Firmenumzüge in NRW
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Seit Jahren führen wir Firmenumzüge in Nordrhein-Westfalen durch — von kleinen Büros mit
                wenigen Mitarbeitern bis hin zu mittelständischen Unternehmen mit mehreren Etagen. Unser
                erfahrenes Team kennt die Herausforderungen eines Firmenumzugs und arbeitet strukturiert,
                schnell und mit größter Sorgfalt.
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
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">Häufige Fragen zum Firmenumzug</h2>
          </motion.div>
          <div className="space-y-4">
            {[
              { q: "Was kostet ein Firmenumzug in NRW?", a: "Die Kosten richten sich nach Unternehmensgröße, Stockwerk, Entfernung und gewünschten Leistungen. Kleine Büros (bis 10 Mitarbeiter) liegen oft zwischen 2.000 und 6.000 €. Nach einer kostenlosen Besichtigung erhalten Sie einen verbindlichen Festpreis." },
              { q: "Wie lange dauert ein Firmenumzug?", a: "Das hängt von der Unternehmensgröße ab. Kleine Büros bewegen wir oft in ein bis zwei Tagen. Größere Unternehmen planen wir in Phasen, um den Betrieb so wenig wie möglich zu unterbrechen." },
              { q: "Können wir den Firmenumzug auf ein Wochenende legen?", a: "Ja, das ist sogar empfehlenswert. Wir arbeiten auf Wunsch am Wochenende oder nach Feierabend, damit Ihr Team montags am neuen Standort direkt loslegen kann." },
              { q: "Übernehmen Sie auch Demontage und Montage von Büromöbeln?", a: "Ja, wir demontieren sämtliche Büromöbel, kennzeichnen alle Teile und montieren sie am neuen Standort fachgerecht wieder. Das gilt auch für Regalsysteme, Schrankwände und Trennwände." },
              { q: "Was ist beim Transport von Akten und sensiblen Unterlagen zu beachten?", a: "Wir verpacken und transportieren Akten in verschlossenen Umzugsboxen. Für besonders sensible Unterlagen empfehlen wir gesonderte Sicherungsmaßnahmen — sprechen Sie uns darauf an." },
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
              <h2 className="text-xl sm:text-2xl font-bold text-foreground">Firmenumzug in Ihrer Stadt im Rhein-Erft-Kreis</h2>
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

      <InternalLinksSection pageKey="firmenumzug" />
      <CTASection />
    </PageLayout>
    </>
  );
}
