import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PageLayout, PageHero, CTASection, InternalLinksSection } from "@/components/layout";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Phone,
  Star,
  Shield,
  Clock,
  HeadphonesIcon,
  CheckCircle2,
  XCircle,
  Armchair,
  Recycle,
  Timer,
  MapPin,
  Package,
  Paintbrush,
  Truck,
  Hammer,
  Sparkles,
  Camera,
  Calculator,
  CalendarCheck,
  ChevronDown,
  ChevronUp,
  CircleDollarSign,
  Scale,
  FileText,
  Users,
  ArrowRight,
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const benefits = [
  {
    icon: Armchair,
    title: "Sie müssen nichts tragen",
    description:
      "Unsere Mitarbeiter entrümpeln alles, was Sie loswerden wollen. Lehnen Sie sich entspannt zurück.",
  },
  {
    icon: Recycle,
    title: "Fachgerechte Entsorgung",
    description:
      "Wir entsorgen den gesamten Ballast fachgerecht beim Wertstoffhof. Neben Sperrmüll auch Sondermüll und viele Schadstoffarten.",
  },
  {
    icon: Timer,
    title: "Sie sparen Zeit",
    description:
      "Die allermeisten unserer Entrümpelungen erledigen wir innerhalb eines Tages. Ihre Räumlichkeiten bekommen Sie abends besenrein übergeben.",
  },
  {
    icon: CircleDollarSign,
    title: "Faire Festpreise",
    description:
      "Keine versteckten Kosten. Sie erhalten vorab ein transparentes Angebot zum garantierten Festpreis.",
  },
  {
    icon: Scale,
    title: "Wertanrechnung",
    description:
      "Wertgegenstände wie Antiquitäten, Schmuck oder Altmetall werden bewertet und auf den Preis angerechnet.",
  },
  {
    icon: Shield,
    title: "Vollversichert",
    description:
      "Ihre Immobilie und Ihr Eigentum sind während der gesamten Entrümpelung durch unsere Haftpflichtversicherung geschützt.",
  },
];

const leistungenStandard = [
  "Komplette Räumung aller Gegenstände",
  "Demontage von Möbeln & Einbauten",
  "Fachgerechte Entsorgung (Sperrmüll, Sondermüll, Schadstoffe)",
  "Besenreine Übergabe der Räumlichkeiten",
  "Wertanrechnung für verwertbare Gegenstände",
  "Transport & Verladung inklusive",
  "Entrümpelung an einem Tag (bei Standardobjekten)",
];

const leistungenZusatz = [
  { title: "Malerarbeiten", desc: "Wände streichen und Löcher verspachteln nach der Entrümpelung", icon: Paintbrush },
  { title: "Bodenbeläge entfernen", desc: "Teppich, PVC oder Laminat fachgerecht entfernen und entsorgen", icon: Hammer },
  { title: "Grundreinigung", desc: "Professionelle Endreinigung für sofortige Neuvermietung", icon: Sparkles },
  { title: "Schrottankauf", desc: "Altmetall und Schrott werden angekauft und auf den Preis angerechnet", icon: Scale },
  { title: "Einlagerung", desc: "Gegenstände, die Sie behalten möchten, werden zwischengelagert", icon: Package },
  { title: "Umzug kombinieren", desc: "Entrümpelung und Umzug in einem — sparen Sie Zeit und Geld", icon: Truck },
];

const ablaufSchritte = [
  {
    step: "1",
    title: "Erstgespräch",
    desc: "Kontaktieren Sie uns per Telefon, WhatsApp oder Kontaktformular. Wir besprechen Ihr Anliegen und nehmen die wichtigsten Eckdaten auf.",
    icon: Phone,
  },
  {
    step: "2",
    title: "Besichtigung & Angebot",
    desc: "Wir begutachten das Entrümpelungsvolumen — vor Ort oder per Fotos/Video. In der Regel erhalten Sie noch am selben Tag ein Festpreis-Angebot per E-Mail.",
    icon: Camera,
  },
  {
    step: "3",
    title: "Terminvereinbarung",
    desc: "Passt das Angebot? Dann vereinbaren wir einen Wunschtermin. Oft ist eine Entrümpelung schon innerhalb weniger Tage möglich.",
    icon: CalendarCheck,
  },
  {
    step: "4",
    title: "Entrümpelung & Übergabe",
    desc: "Unser Team räumt alles aus, entsorgt fachgerecht und übergibt Ihnen die Räumlichkeiten besenrein — meist an nur einem Tag.",
    icon: Sparkles,
  },
];

const kostenTabelle = [
  { typ: "Keller / Dachboden", von: "ab 350", bis: "800" },
  { typ: "Garage", von: "ab 400", bis: "900" },
  { typ: "1-Zimmer-Wohnung", von: "ab 600", bis: "1.500" },
  { typ: "2-Zimmer-Wohnung", von: "ab 800", bis: "2.200" },
  { typ: "3-Zimmer-Wohnung", von: "ab 1.200", bis: "3.500" },
  { typ: "Einfamilienhaus", von: "ab 1.500", bis: "5.000+" },
  { typ: "Gewerbe / Büro", von: "ab 1.000", bis: "individuell" },
];

const comparisons = [
  {
    title: "Immobilienschutz",
    bad: "Türrahmen werden beim Entrümpeln oft beschädigt und Wände zerkratzt.",
    good: "Möbel und Gerümpel werden mit äußerster Sorgfalt entrümpelt. Ihre Immobilien sind versichert.",
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
    bad: "Keine Organisation und Planung der Entrümpelung, wodurch es zu Problemen kommen kann.",
    good: "Wir organisieren und planen Ihre Entrümpelung sorgfältig. Sie bekommen individuelle Angebote zum Festpreis.",
    icon: HeadphonesIcon,
  },
];

const reviews = [
  {
    name: "M. Meinke",
    text: "Schnell einen Termin bekommen, pünktlich, freundlich und unkompliziert wurde meine Garage und mein Keller geräumt. Schränke wurden demontiert, besenrein hinterlassen.",
  },
  {
    name: "Klarabella",
    text: "Ganz toller Service, Terminvergabe schnell und unkompliziert per WhatsApp, sehr sympathisches Team, haben alles mitgenommen und richtig gut gearbeitet.",
  },
  {
    name: "Katy S.",
    text: "Super Entrümpelungsteam! Sie kamen pünktlich, waren höflich und haben die Arbeit effizient erledigt. Ich kann diesen Entrümpelungsservice nur weiterempfehlen.",
  },
];

const faqs = [
  {
    q: "Wie viel kostet eine Entrümpelung?",
    a: "Die Kosten richten sich nach Raumgröße, Füllgrad, Stockwerk und Art des Materials. Eine Kellerentrümpelung beginnt ab ca. 350 €, eine komplette Wohnungsauflösung ab ca. 800 €. Sie erhalten immer einen transparenten Festpreis — ohne versteckte Kosten.",
  },
  {
    q: "Wie lange dauert eine Entrümpelung?",
    a: "Die meisten Entrümpelungen erledigen wir innerhalb eines Tages. Bei größeren Objekten wie Einfamilienhäusern oder stark gefüllten Räumen kann es 2–3 Tage dauern. Den genauen Zeitrahmen erfahren Sie im Angebot.",
  },
  {
    q: "Wie läuft der Entrümpelungstag ab?",
    a: "Unser Team kommt zum vereinbarten Termin, räumt alle zu entsorgenden Gegenstände aus, sortiert nach Wertstoffen und Sperrmüll, entsorgt alles fachgerecht und übergibt Ihnen die Räumlichkeiten besenrein.",
  },
  {
    q: "Wie funktioniert die Wertanrechnung?",
    a: "Bei der Besichtigung bewerten wir Gegenstände, die noch einen Wert haben — z. B. Antiquitäten, Schmuck, Elektronik oder Altmetall. Dieser Wert wird direkt vom Entrümpelungspreis abgezogen und erscheint transparent im Kostenvoranschlag.",
  },
  {
    q: "Ist eine kostenlose Entrümpelung möglich?",
    a: "In seltenen Fällen ja — wenn der Wert der verwertbaren Gegenstände die Entrümpelungskosten übersteigt. Das kommt bei großen Mengen Altmetall, hochwertigen Möbeln oder Antiquitäten vor. Wir prüfen das gerne für Sie.",
  },
  {
    q: "Was bedeutet besenreine Übergabe?",
    a: "Nach der Entrümpelung sind alle Räume leer und grob gereinigt — Böden gefegt, grobe Verschmutzungen entfernt. Für eine Feinreinigung (z. B. für Neuvermietung) bieten wir optional eine professionelle Grundreinigung an.",
  },
  {
    q: "Können Räume jeder Art entrümpelt werden?",
    a: "Ja — wir entrümpeln Wohnungen, Häuser, Keller, Dachböden, Garagen, Büros, Geschäfte, Lagerhallen und mehr. Auch Messie-Wohnungen und Sonderfälle übernehmen wir professionell und diskret.",
  },
  {
    q: "Kann ich Entrümpelung und Umzug kombinieren?",
    a: "Absolut! Viele unserer Kunden kombinieren die Entrümpelung mit einem Umzug. Das spart Zeit, Kosten und Sie haben alles aus einer Hand. Sprechen Sie uns einfach an.",
  },
  {
    q: "Wie schnell kann die Entrümpelung stattfinden?",
    a: "In dringenden Fällen sind wir oft schon innerhalb von 24–48 Stunden vor Ort. Regulär vereinbaren wir einen Termin innerhalb weniger Tage, der zu Ihrem Zeitplan passt.",
  },
  {
    q: "Kann man eine Entrümpelung von der Steuer absetzen?",
    a: "Ja, unter bestimmten Voraussetzungen. Entrümpelungskosten können als haushaltsnahe Dienstleistung steuerlich geltend gemacht werden — bis zu 20 % der Arbeitskosten (max. 4.000 € pro Jahr). Wir stellen Ihnen eine entsprechende Rechnung aus.",
  },
];

const ratgeberLinks = [
  { title: "Kellerentrümpelung", href: "/kellerentruempelung", desc: "Keller professionell räumen lassen — Ablauf, Kosten & Tipps" },
  { title: "Was kostet Sperrmüll?", href: "/was-kostet-sperrmuell", desc: "Preise, Tipps & Vergleich für den Rhein-Erft-Kreis" },
  { title: "Entrümpelungstipps", href: "/entruempelungstipps", desc: "Praktische Tipps für Ihre Entrümpelung" },
  { title: "Entrümpelung Kosten", href: "/kosten-entruempelung", desc: "Detaillierte Kostenübersicht und Preisfaktoren" },
  { title: "Entrümpelung Rhein-Erft-Kreis", href: "/entruempelung-rhein-erft-kreis-preise", desc: "Regionale Preise und Leistungen" },
  { title: "Pflegekasse & Entrümpelung", href: "/kostenuebernahme-durch-die-pflegekasse-bei-entruempelung-und-umzug-fuer-senioren", desc: "Kostenübernahme für Senioren" },
];

function FAQItem({ faq, index }: { faq: { q: string; a: string }; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div {...fadeIn} transition={{ duration: 0.4, delay: index * 0.04 }}>
      <Card
        className="overflow-hidden cursor-pointer"
        onClick={() => setOpen(!open)}
        data-testid={`card-faq-${index}`}
      >
        <div className="p-5 flex items-center justify-between gap-3">
          <h3 className="font-medium text-foreground text-sm">{faq.q}</h3>
          {open ? (
            <ChevronUp className="w-4 h-4 text-muted-foreground shrink-0" />
          ) : (
            <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0" />
          )}
        </div>
        {open && (
          <div className="px-5 pb-5 -mt-2">
            <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
          </div>
        )}
      </Card>
    </motion.div>
  );
}

export default function EntruempelungPage() {
  useEffect(() => {
    document.title = "Professionelle Entrümpelung zum Festpreis | Stressfrei Entrümpelungen";
    let _canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!_canonical) { _canonical = document.createElement("link"); _canonical.setAttribute("rel", "canonical"); document.head.appendChild(_canonical); }
    _canonical.setAttribute("href", "https://stressfreientruempelungen.de/entruempelung");
    const _setOgMeta = (prop: string, val: string) => { let m = document.querySelector(`meta[property="${prop}"]`) as HTMLMetaElement | null; if (!m) { m = document.createElement("meta"); m.setAttribute("property", prop); document.head.appendChild(m); } m.setAttribute("content", val); };
    _setOgMeta("og:url", "https://stressfreientruempelungen.de/entruempelung");
    _setOgMeta("og:image", "https://stressfreientruempelungen.de/images/professionelle-entruempelung-service-rhein-erft-kreis.webp");
    _setOgMeta("og:locale", "de_DE");
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Entrümpelung im Rhein-Erft-Kreis & NRW zum garantierten Festpreis. Besenreine Übergabe, Wertanrechnung, fachgerechte Entsorgung. Jetzt kostenloses Angebot anfordern!");
    }
  }, []);

  return (
    <>
    <PageLayout>
      <PageHero
        title="Professionelle Entrümpelungen"
        subtitle="Faire, transparente Angebote und Festpreise. Platz für Neues schaffen — wir kümmern uns um alles."
        highlight="Entrümpelung"
      />

      <section className="pb-8 sm:pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeIn}>
            <img
              src="/images/professionelle-entruempelung-service-rhein-erft-kreis.webp"
              alt="Entrümpler am Entrümpeln - Stressfrei Entrümpelungen"
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
              Stressfrei Entrümpeln
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Ob Haushaltsauflösung, Wohnungsentrümpelung oder Kellerräumung — wir bieten Ihnen eine zuverlässige,
              transparente und professionelle Lösung für den Rhein-Erft-Kreis und ganz NRW.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

      <section className="py-20 sm:py-28 bg-card/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div className="text-center mb-14" {...fadeIn}>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3" data-testid="text-leistungen-title">
              Leistungen für Ihre Entrümpelung
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Unser Stressfrei-Paket deckt alles ab, was Sie brauchen. Optional buchen Sie Zusatzleistungen dazu.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div {...fadeIn}>
              <Card className="p-6 h-full border-primary/20">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                    <Package className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Stressfrei-Paket</h3>
                    <p className="text-xs text-muted-foreground">Immer inklusive</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {leistungenStandard.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>

            <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.1 }}>
              <Card className="p-6 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Zusatzleistungen</h3>
                    <p className="text-xs text-muted-foreground">Optional zubuchbar</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {leistungenZusatz.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-md bg-muted/50 flex items-center justify-center shrink-0">
                          <Icon className="w-4 h-4 text-muted-foreground" />
                        </div>
                        <div>
                          <span className="text-sm font-medium text-foreground">{item.title}</span>
                          <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div className="text-center mb-14" {...fadeIn}>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3" data-testid="text-ablauf-title">
              Der einfache Weg zur Entrümpelung
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              In nur 4 Schritten von der Anfrage bis zur besenreinen Übergabe.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ablaufSchritte.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div key={s.step} {...fadeIn} transition={{ duration: 0.5, delay: i * 0.1 }}>
                  <div className="relative text-center">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="absolute -top-1 -right-1 sm:right-4 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
                      {s.step}
                    </div>
                    <h3 className="font-semibold text-foreground mb-2" data-testid={`text-ablauf-${i}`}>{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div className="text-center mt-12" {...fadeIn}>
            <a href="tel:+4922715880940" className="block w-full sm:w-auto sm:inline-block">
              <Button size="lg" className="w-full sm:w-auto !whitespace-normal h-auto py-3" data-testid="button-ablauf-call">
                <Phone className="w-4 h-4 mr-2" />
                Jetzt kostenlos beraten lassen
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-card/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div className="text-center mb-14" {...fadeIn}>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3" data-testid="text-kosten-title">
              Was kostet eine Entrümpelung?
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Orientierungspreise für typische Entrümpelungen. Der tatsächliche Preis hängt von Füllgrad, Stockwerk und Sondermüll ab.
            </p>
          </motion.div>

          <motion.div {...fadeIn}>
            <Card className="overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full" data-testid="table-kosten">
                  <thead>
                    <tr className="border-b bg-muted/30">
                      <th className="text-left text-sm font-semibold text-foreground p-4">Raumtyp</th>
                      <th className="text-left text-sm font-semibold text-foreground p-4">Preisspanne</th>
                    </tr>
                  </thead>
                  <tbody>
                    {kostenTabelle.map((row, i) => (
                      <tr key={i} className="border-b last:border-0" data-testid={`row-kosten-${i}`}>
                        <td className="p-4 text-sm text-foreground font-medium">{row.typ}</td>
                        <td className="p-4 text-sm text-primary font-semibold">{row.von} – {row.bis} €</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </motion.div>

          <motion.div className="mt-8 text-center" {...fadeIn}>
            <p className="text-sm text-muted-foreground mb-4">
              Exakter Preis nur nach individueller Besichtigung möglich. Wertanrechnung kann den Preis deutlich reduzieren.
            </p>
            <Link href="/kosten-entruempelung">
              <Button variant="outline" data-testid="link-kosten-detail">
                <Calculator className="w-4 h-4 mr-2" />
                Detaillierte Kostenübersicht
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div className="text-center mb-14" {...fadeIn}>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3" data-testid="text-comparison-title">
              Selbst entrümpeln oder vom Profi machen lassen?
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Warum sich eine professionelle Entrümpelung lohnt — und unsere Kunden so zufrieden sind.
            </p>
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
                          <div className="text-xs font-medium text-destructive mb-1">Selbst entrümpeln</div>
                          <p className="text-sm text-muted-foreground">{item.bad}</p>
                        </div>
                      </div>
                      <div className="flex gap-3 p-4 rounded-md bg-primary/5">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <div>
                          <div className="text-xs font-medium text-primary mb-1">Stressfrei Entrümpelung</div>
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

      <section className="py-20 sm:py-28 bg-card/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div className="text-center mb-14" {...fadeIn}>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3" data-testid="text-reviews-title">
              Mehr als 500 zufriedene Kunden
            </h2>
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-accent fill-current" />
              ))}
            </div>
            <p className="text-muted-foreground text-sm">5.0 Sterne bei Google · 90+ Bewertungen</p>
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

      <section className="py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div className="text-center mb-14" {...fadeIn}>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3" data-testid="text-ueber-title">
              Die Entrümpler, die Ihren Kunden einen Wow-Effekt bieten
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Wir sind ein eingespieltes Team aus dem Rhein-Erft-Kreis — zuverlässig, schnell und mit Herz bei der Sache.
            </p>
          </motion.div>
          <motion.div {...fadeIn}>
            <Card className="p-6 sm:p-8">
              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  Bei <strong className="text-foreground">Stressfrei Entrümpelungen & Umzüge</strong> wissen wir, dass eine Entrümpelung
                  oft mit emotionalen Momenten verbunden ist — sei es ein Umzug, eine Haushaltsauflösung nach einem Trauerfall oder
                  einfach der Wunsch nach einem Neuanfang.
                </p>
                <p>
                  Deshalb arbeiten wir nicht nur professionell und effizient, sondern auch mit Respekt und Einfühlungsvermögen.
                  Unser Team besteht aus erfahrenen Entrümplern, die sorgfältig mit Ihrem Eigentum umgehen und Ihre Immobilie schützen.
                </p>
                <p>
                  Mit über <strong className="text-foreground">500 durchgeführten Aufträgen</strong> und einer durchschnittlichen
                  Google-Bewertung von <strong className="text-foreground">5.0 Sternen</strong> können Sie sich auf uns verlassen.
                  Wir stehen für Festpreise ohne Überraschungen, pünktliche Termine und eine besenreine Übergabe.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 mt-6">
                <Link href="/ueber-uns">
                  <Button variant="outline" size="sm" data-testid="link-ueber-uns">
                    <Users className="w-4 h-4 mr-2" />
                    Über uns
                  </Button>
                </Link>
                <Link href="/kontakt">
                  <Button variant="outline" size="sm" data-testid="link-kontakt">
                    <Phone className="w-4 h-4 mr-2" />
                    Kontakt aufnehmen
                  </Button>
                </Link>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-card/50" data-testid="section-staedte">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div {...fadeIn} className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">Entrümpelung in Ihrer Stadt</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Wir sind im gesamten Rhein-Erft-Kreis und darüber hinaus für Sie im Einsatz. Finden Sie Ihren Standort:
            </p>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              { label: "Entrümpelung Bergheim", href: "/entruempelung-bergheim" },
              { label: "Entrümpelung Kerpen", href: "/entruempelung-kerpen" },
              { label: "Entrümpelung Frechen", href: "/entruempelung-frechen" },
              { label: "Entrümpelung Hürth", href: "/entruempelung-huerth" },
              { label: "Entrümpelung Pulheim", href: "/entruempelung-pulheim" },
              { label: "Entrümpelung Erftstadt", href: "/entruempelung-erftstadt" },
              { label: "Entrümpelung Bedburg", href: "/entruempelung-bedburg" },
              { label: "Entrümpelung Elsdorf", href: "/entruempelung-elsdorf" },
              { label: "Entrümpelung Rommerskirchen", href: "/entruempelung-rommerskirchen" },
              { label: "Entrümpelung Grevenbroich", href: "/entruempelung-grevenbroich" },
              { label: "Entrümpelung Brühl", href: "/entruempelung-bruehl" },
              { label: "Entrümpelung Wesseling", href: "/entruempelung-wesseling" },
              { label: "Entrümpelung Rhein-Erft-Kreis", href: "/entruempelung-rhein-erft-kreis" },
              { label: "Entrümpelung in der Nähe", href: "/entruempelung-in-der-naehe" },
            ].map((city, i) => (
              <motion.div key={city.href} {...fadeIn} transition={{ duration: 0.4, delay: i * 0.04 }}>
                <Link href={city.href} style={{ textDecoration: "none" }}>
                  <Card className="p-3 hover:border-primary/40 hover:bg-primary/5 transition-colors cursor-pointer h-full" data-testid={`link-stadt-${i}`}>
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

      <section className="py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div className="text-center mb-14" {...fadeIn}>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3" data-testid="text-faq-title">
              Ihre Fragen — unsere Antworten
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Alles Wichtige rund um Entrümpelung, Kosten, Ablauf und Wertanrechnung.
            </p>
          </motion.div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-card/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div className="text-center mb-10" {...fadeIn}>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3" data-testid="text-ratgeber-title">
              Entrümpelungsratgeber
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Weiterführende Artikel und Tipps rund um das Thema Entrümpelung.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ratgeberLinks.map((item, i) => (
              <motion.div key={item.href} {...fadeIn} transition={{ duration: 0.4, delay: i * 0.05 }}>
                <Link href={item.href} style={{ textDecoration: "none" }}>
                  <Card className="p-5 h-full hover:border-primary/40 hover:bg-primary/5 transition-colors cursor-pointer" data-testid={`link-ratgeber-${i}`}>
                    <div className="flex items-start gap-3">
                      <FileText className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <h3 className="text-sm font-semibold text-foreground mb-1">{item.title}</h3>
                        <p className="text-xs text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-primary text-xs font-medium mt-3 ml-8">
                      Weiterlesen <ArrowRight className="w-3 h-3" />
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <InternalLinksSection pageKey="entruempelung" />
      <CTASection />
    </PageLayout>
    </>
  );
}
