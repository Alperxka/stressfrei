import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageLayout, PageHero, CTASection } from "@/components/layout";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Trash2,
  Home,
  Building2,
  Package,
  PackageOpen,
  Truck,
  Users,
  Archive,
  Recycle,
  ArrowRight,
  Phone,
  CheckCircle2,
  Layers,
  Heart,
  Star,
  Wrench,
  Shield,
  CreditCard,
  Video,
  MapPin,
  Eye,
  Sparkles,
  Paintbrush,
  ArrowUpDown,
  Weight,
  MessageSquare,
} from "lucide-react";
import { SiGoogle } from "react-icons/si";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const entruempelungServices = [
  {
    icon: Trash2,
    title: "Entrümpelung",
    desc: "Professionelle Entrümpelung von Häusern, Wohnungen, Kellern und Dachböden — schnell, sauber und zum Festpreis.",
    href: "/entruempelung",
    highlights: ["Festpreisgarantie", "Komplettservice", "Same-Day möglich"],
  },
  {
    icon: Home,
    title: "Haushaltsauflösung",
    desc: "Komplette Auflösung von Haushalten aller Größen — inklusive Wertanrechnung verwertbarer Gegenstände.",
    href: "/haushaltsaufloesung",
    highlights: ["Wertanrechnung", "Besenrein", "Diskret & zuverlässig"],
  },
  {
    icon: Building2,
    title: "Wohnungsauflösung",
    desc: "Schnelle und gründliche Wohnungsauflösung für Vermieter, Erben oder beim Umzug ins Pflegeheim.",
    href: "/wohnungsaufloesung",
    highlights: ["Termintreu", "Übergabebereit", "Alle Etagen"],
  },
  {
    icon: Package,
    title: "Kellerentrümpelung",
    desc: "Entrümpelung von Kellern, Abstellräumen und Garagen — auch bei engem Zugang und vielen Stockwerken.",
    href: "/kellerentruempelung",
    highlights: ["Enge Zugänge kein Problem", "Sofort buchbar", "Festpreis"],
  },
  {
    icon: Layers,
    title: "Firmen- & Betriebsauflösung",
    desc: "Gewerbliche Auflösungen und Betriebsräumungen — diskret, schnell und mit korrekter Entsorgung.",
    href: "/firmenaufloesung",
    highlights: ["Gewerblich versiert", "Datenschutz", "Kurze Vorlaufzeit"],
  },
  {
    icon: Heart,
    title: "Nachlassauflösung",
    desc: "Einfühlsame Auflösung von Nachlässen — wir behandeln jeden Gegenstand mit Respekt und Sorgfalt.",
    href: "/nachlassaufloesung",
    highlights: ["Einfühlsam", "Wertgegenstände gesichert", "Diskret"],
  },
  {
    icon: Users,
    title: "Messie-Entrümpelung",
    desc: "Spezialisierte Entrümpelung von Messie-Wohnungen — ohne Wertung, mit Erfahrung und auf Wunsch anonym.",
    href: "/messie-wohnung",
    highlights: ["Erfahrenes Team", "Anonym", "Geruchsneutral"],
  },
  {
    icon: Recycle,
    title: "Schrottankauf",
    desc: "Ankauf von Schrott und Metallen — wir holen ab, zahlen faire Preise und sorgen für umweltgerechte Verwertung.",
    href: "/schrottankauf",
    highlights: ["Faire Preise", "Abholung inklusive", "Alle Metalle"],
  },
];

const umzugServices = [
  {
    icon: Truck,
    title: "Privatumzug",
    desc: "Stressfreier Privatumzug mit professionellem Team — vom Karton packen bis zur Möbelmontage am Zielort.",
    href: "/privatumzug",
    highlights: ["Vollservice möglich", "Möbelmontage", "Festpreis"],
  },
  {
    icon: Heart,
    title: "Seniorenumzug",
    desc: "Besonders behutsamer Umzug für Senioren — wir nehmen uns Zeit und kümmern uns um alles.",
    href: "/seniorenumzug",
    highlights: ["Geduldig & fürsorglich", "Pflegeheim-Umzüge", "Komplettservice"],
  },
  {
    icon: Building2,
    title: "Büro- & Firmenumzug",
    desc: "Schnelle und sichere Büroumzüge — auch am Wochenende, damit Ihr Betrieb kaum Ausfallzeit hat.",
    href: "/bueroumzug",
    highlights: ["Auch am Wochenende", "IT-Sicherheit", "Kurze Ausfallzeit"],
  },
  {
    icon: Archive,
    title: "Einlagerung",
    desc: "Sicherer Einlagerungsservice im Rhein-Erft-Kreis — flexibel mietbar, trocken und videoüberwacht.",
    href: "/einlagerung-rhein-erft-kreis",
    highlights: ["Videoüberwacht", "Trocken & sicher", "Flexibel kündbar"],
  },
];

const zusatzServices = [
  {
    icon: Package,
    title: "Einpackservice",
    desc: "Wir packen Ihren gesamten Hausrat fachgerecht ein — sicher verpackt, nichts vergessen, kein Stress für Sie.",
    href: "/einpackservice",
    highlights: ["Professionelles Material", "Bruchsicher", "Auf Wunsch vollständig"],
  },
  {
    icon: PackageOpen,
    title: "Auspackservice",
    desc: "Nach dem Umzug räumen wir alles ein und stellen Möbel auf — damit Sie sofort in Ihrem neuen Zuhause leben können.",
    href: "/auspackservice",
    highlights: ["Komplett aufräumen", "Kartons entsorgen", "Nach Ihren Wünschen"],
  },
  {
    icon: Wrench,
    title: "Möbelmontage",
    desc: "Demontage am alten und Montage am neuen Standort — inklusive Einbauküchen, Schränken und Betten.",
    href: "/moebelmontagedienst",
    highlights: ["Alle Hersteller", "Werkzeug inklusive", "Mit Erfahrung"],
  },
  {
    icon: Truck,
    title: "Anfahrt, Abfahrt & Transport",
    desc: "Eigene Fahrzeuge in verschiedenen Größen — vom Transporter bis zum 7,5-Tonner. Alles aus einer Hand.",
    href: "/umzugstransport",
    highlights: ["Eigener Fuhrpark", "Verschiedene Fahrzeuggrößen", "Pünktlich & zuverlässig"],
  },
  {
    icon: MapPin,
    title: "Halteverbotszonen",
    desc: "Wir beantragen und organisieren Halteverbotszonen vor Ort — damit der Umzugswagen direkt vor der Tür steht.",
    href: "/halteverbotszone",
    highlights: ["Offiziell beantragt", "Für Sie erledigt", "Keine Behördengänge"],
  },
  {
    icon: Weight,
    title: "Schwerlasttransport",
    desc: "Transport von besonders schweren oder sperrigen Gegenständen — Tresore, Klaviere, Maschinen und mehr.",
    href: "/schwerlasttransport",
    highlights: ["Bis mehrere Tonnen", "Spezialequipment", "Versichert"],
  },
  {
    icon: ArrowUpDown,
    title: "Außenlifteinsatz",
    desc: "Wenn der Treppenweg nicht möglich ist: Außenlift für Möbel und Umzugsgut — schonend, schnell und sicher.",
    href: "/aussenlifteinsatz",
    highlights: ["Bis ins 10. OG", "Kein Kratzer", "Schonend für Mobiliar"],
  },
];

const reinigungServices = [
  {
    icon: Layers,
    title: "Tapeten entfernen",
    desc: "Professionelles Ablösen von Tapeten — auch bei mehrschichtiger Belegung oder schwierigen Untergründen.",
    href: "/tapeten-entfernen",
    highlights: ["Alle Tapetentypen", "Wandschonend", "Schnell & sauber"],
  },
  {
    icon: Sparkles,
    title: "Grundreinigung",
    desc: "Tiefenreinigung von Wohnungen und Häusern — ideal nach Entrümpelung, vor Übergabe oder Neubezug.",
    href: "/grundreinigung",
    highlights: ["Inkl. Sanitär & Küche", "Übergabebereit", "Alle Böden"],
  },
  {
    icon: Building2,
    title: "Gebäudereinigung",
    desc: "Gewerbliche und private Gebäudereinigung — Treppenhäuser, Flure, Außenbereiche und Gemeinschaftsflächen.",
    href: "/gebaeudereinigung",
    highlights: ["Regelmäßig oder einmalig", "Innen & Außen", "Gewerblich & privat"],
  },
  {
    icon: Paintbrush,
    title: "Leichte Renovierungen",
    desc: "Kleine Renovierungsarbeiten nach Entrümpelung oder Umzug — Streichen, Spachteln, Kleinreparaturen.",
    href: "/renovierungsservice",
    highlights: ["Wände & Decken", "Kleine Schäden beheben", "Auf Anfrage"],
  },
];

const serviceItems = [
  {
    icon: MessageSquare,
    title: "Persönliche Beratung",
    desc: "Wir nehmen uns Zeit für Sie — telefonisch, per WhatsApp oder direkt vor Ort. Ehrliche Einschätzung, keine Verkaufsdrücker.",
    highlights: ["Kostenlos", "Ohne Verpflichtung", "Tel. & WhatsApp"],
  },
  {
    icon: Eye,
    title: "Vor-Ort-Besichtigung",
    desc: "Kostenlose Besichtigung zur genauen Aufwandsschätzung — damit Sie ein verlässliches Festpreisangebot erhalten.",
    highlights: ["Kostenlos & unverbindlich", "Festpreisangebot", "Kurzfristig buchbar"],
  },
  {
    icon: Video,
    title: "Video-Besichtigung",
    desc: "Nicht immer vor Ort möglich? Kein Problem — wir besichtigen per Video-Call und erstellen trotzdem ein genaues Angebot.",
    highlights: ["Bequem von zu Hause", "WhatsApp oder Zoom", "Genaues Angebot"],
  },
  {
    icon: Shield,
    title: "Versicherung",
    desc: "Alle unsere Leistungen sind vollumfänglich versichert — Ihr Eigentum ist während des gesamten Auftrags geschützt.",
    highlights: ["Haftpflicht inklusive", "Transportversicherung", "Vollumfänglich"],
  },
  {
    icon: Recycle,
    title: "Fachgerechte Entsorgung",
    desc: "Umweltgerechte Entsorgung auf zugelassenen Entsorgungsbetrieben — mit offiziellem Entsorgungsnachweis auf Wunsch.",
    highlights: ["Umweltgerecht", "Zugelassene Betriebe", "Nachweis möglich"],
  },
  {
    icon: CreditCard,
    title: "Transparente Bezahlung",
    desc: "Keine versteckten Kosten, keine Nachforderungen — Sie zahlen genau den vereinbarten Festpreis. Bar oder Überweisung.",
    highlights: ["Festpreisgarantie", "Bar oder Überweisung", "Quittung inklusive"],
  },
];

const reviews = [
  {
    name: "Sebastian K.",
    text: "Top-Service! Die Entrümpelung verlief schnell, professionell und zuverlässig. Das Team war pünktlich, freundlich und hat alles sauber hinterlassen. Preis-Leistung ist absolut fair!",
    service: "Entrümpelung",
  },
  {
    name: "Feniajulia",
    text: "Vom ersten Kontakt an war das Team äußerst professionell und freundlich. Sie kamen pünktlich, hatten alles Nötige dabei und arbeiteten zügig und effizient. Der Name ist Programm!",
    service: "Haushaltsauflösung",
  },
  {
    name: "Michaela M.",
    text: "Schnell einen Termin bekommen, pünktlich, freundlich und unkompliziert wurde meine Garage und mein Keller geräumt. Schränke wurden demontiert, besenrein hinterlassen.",
    service: "Kellerentrümpelung",
  },
  {
    name: "Klarabella",
    text: "Ganz toller Service, Terminvergabe schnell und unkompliziert per WhatsApp, sehr sympathisches Team, haben alles mitgenommen und richtig gut gearbeitet.",
    service: "Wohnungsauflösung",
  },
  {
    name: "Tamara K.",
    text: "Haushaltsauflösung lief super. Schneller Termin, professionelle Durchführung und fairer Preis. Ich bin sehr zufrieden und kann die Firma nur wärmstens empfehlen!",
    service: "Haushaltsauflösung",
  },
  {
    name: "Angelika B.",
    text: "Schnell, zuverlässig, freundlich und immer hilfsbereit. Preis-Leistungsverhältnis vollkommen in Ordnung. Das Team konnte mir eine große Last abnehmen.",
    service: "Umzug",
  },
];

const trustItems = [
  { icon: Star, text: "Über 500 zufriedene Kunden" },
  { icon: CheckCircle2, text: "Festpreisgarantie — keine Überraschungen" },
  { icon: Phone, text: "Kostenloser Vor-Ort-Termin" },
  { icon: Truck, text: "Eigene Fahrzeuge & geschultes Team" },
];

function ServiceCard({
  icon: Icon,
  title,
  desc,
  highlights,
  href,
}: {
  icon: React.ElementType;
  title: string;
  desc: string;
  highlights: string[];
  href?: string;
}) {
  return (
    <Card className="h-full flex flex-col p-6 hover:shadow-md transition-shadow border-border">
      <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 shrink-0">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <h3 className="font-semibold text-foreground text-base mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{desc}</p>
      <ul className="space-y-1 mb-5">
        {highlights.map((h) => (
          <li key={h} className="flex items-center gap-2 text-xs text-muted-foreground">
            <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
            {h}
          </li>
        ))}
      </ul>
      <Link href={href ?? "/kontakt"} style={{ textDecoration: "none" }}>
        <Button variant="outline" size="sm" className="w-full gap-1.5">
          {href ? "Mehr erfahren" : "Jetzt anfragen"} <ArrowRight className="w-3.5 h-3.5" />
        </Button>
      </Link>
    </Card>
  );
}

function SectionHeader({
  badge,
  title,
  desc,
}: {
  badge: string;
  title: string;
  desc: string;
}) {
  return (
    <motion.div className="mb-12" {...fadeIn}>
      <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3">
        {badge}
      </span>
      <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">{title}</h2>
      <p className="text-muted-foreground max-w-2xl leading-relaxed">{desc}</p>
    </motion.div>
  );
}

export default function LeistungenPage() {
  return (
    <PageLayout pageName="Leistungen">
      <PageHero
        title="Unsere Leistungen"
        subtitle="Alles aus einer Hand — von der Entrümpelung über den Umzug bis zur Grundreinigung. Professionell, fair und stressfrei im Rhein-Erft-Kreis und ganz NRW."
        highlight="Stressfrei Entrümpelungen & Umzüge"
      />

      {/* Trust-Bar */}
      <section className="py-6 border-y border-border bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {trustItems.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.text} className="flex items-center gap-2.5">
                  <Icon className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-sm text-muted-foreground">{item.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Entrümpelung & Auflösung */}
      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="Entrümpelung & Auflösung"
            title="Professionelle Entrümpelung — für jeden Bedarf"
            desc="Ob einzelner Keller oder komplette Haushaltsauflösung — wir übernehmen das für Sie. Zum Festpreis, termingerecht und besenrein."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {entruempelungServices.map((s, i) => (
              <motion.div key={s.title} {...fadeIn} transition={{ duration: 0.5, delay: i * 0.07 }}>
                <ServiceCard {...s} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Umzüge & Transport */}
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="Umzüge & Transport"
            title="Ihr Umzug in guten Händen"
            desc="Ob privater Hausumzug, Seniorenumzug oder Büroumzug — wir planen, packen und transportieren. Mit eigenem Fuhrpark und erfahrenem Team."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {umzugServices.map((s, i) => (
              <motion.div key={s.title} {...fadeIn} transition={{ duration: 0.5, delay: i * 0.08 }}>
                <ServiceCard {...s} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Umzug-Zusatzleistungen */}
      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="Umzug-Zusatzleistungen"
            title="Mehr als nur Transport"
            desc="Wir übernehmen jeden Schritt — vom Einpacken über die Möbelmontage bis zum Außenlifteinsatz. Damit Sie keinen Finger rühren müssen."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {zusatzServices.map((s, i) => (
              <motion.div key={s.title} {...fadeIn} transition={{ duration: 0.5, delay: i * 0.07 }}>
                <ServiceCard {...s} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reinigung & Renovierung */}
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="Reinigung & Renovierung"
            title="Sauber & übergabebereit"
            desc="Nach der Entrümpelung oder dem Umzug sorgen wir dafür, dass Ihre Immobilie makellos ist — bereit für die Übergabe oder den Neubezug."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {reinigungServices.map((s, i) => (
              <motion.div key={s.title} {...fadeIn} transition={{ duration: 0.5, delay: i * 0.08 }}>
                <ServiceCard {...s} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service & Sicherheit */}
      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="Service & Sicherheit"
            title="Transparent, versichert und ehrlich"
            desc="Von der ersten Beratung bis zur finalen Rechnung — wir legen Wert auf klare Kommunikation, faire Preise und vollständigen Versicherungsschutz."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {serviceItems.map((s, i) => (
              <motion.div key={s.title} {...fadeIn} transition={{ duration: 0.5, delay: i * 0.08 }}>
                <ServiceCard {...s} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Kundenstimmen */}
      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div className="text-center mb-14" {...fadeIn}>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3">
              Kundenstimmen
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
              Das sagen unsere Kunden
            </h2>
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-muted-foreground text-sm">
              5,0 Sterne · über 80 Google Bewertungen
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {reviews.map((review, i) => (
              <motion.div
                key={review.name}
                {...fadeIn}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Card className="p-5 h-full flex flex-col">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-3.5 h-3.5 text-yellow-400 fill-current" />
                    ))}
                    <span className="ml-2 text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                      {review.service}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                    „{review.text}"
                  </p>
                  <div className="flex items-center justify-between gap-3 pt-3 border-t border-border">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <span className="text-xs font-semibold text-primary">
                          {review.name.charAt(0)}
                        </span>
                      </div>
                      <span className="text-sm font-medium text-foreground">{review.name}</span>
                    </div>
                    <SiGoogle className="w-4 h-4 text-muted-foreground shrink-0" />
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div className="mt-10 text-center" {...fadeIn} transition={{ duration: 0.5, delay: 0.5 }}>
            <a
              href="https://g.co/kgs/yNcmMs9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <SiGoogle className="w-4 h-4" />
              Alle Bewertungen auf Google ansehen
            </a>
          </motion.div>
        </div>
      </section>

      {/* Ablauf */}
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div className="text-center mb-12" {...fadeIn}>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3">
              So einfach geht's
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
              In 3 Schritten zum stressfreien Ergebnis
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Kostenlos anfragen",
                desc: "Rufen Sie uns an oder senden Sie eine Anfrage — wir melden uns innerhalb von 24 Stunden.",
              },
              {
                step: "02",
                title: "Vor-Ort- oder Video-Besichtigung",
                desc: "Wir besichtigen kostenlos — vor Ort oder per Video — und erstellen ein verbindliches Festpreisangebot.",
              },
              {
                step: "03",
                title: "Wir erledigen alles",
                desc: "Ihr Termin, unser Job. Wir kommen, arbeiten und hinterlassen alles besenrein — ohne Überraschungen.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                {...fadeIn}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary">{item.step}</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div className="mt-12 text-center" {...fadeIn} transition={{ duration: 0.5, delay: 0.35 }}>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <a href="tel:+4922715880940" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto">
                  <Phone className="w-4 h-4 mr-2" />
                  02271 / 5880940
                </Button>
              </a>
              <Link href="/kontakt" style={{ textDecoration: "none" }} className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Kostenlos anfragen
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </PageLayout>
  );
}
