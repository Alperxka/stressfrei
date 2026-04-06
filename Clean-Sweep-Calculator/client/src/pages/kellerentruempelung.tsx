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
  CheckCircle2,
  XCircle,
  Armchair,
  Recycle,
  Timer,
  MapPin,
  Package,
  Paintbrush,
  Hammer,
  Sparkles,
  Camera,
  CalendarCheck,
  ChevronDown,
  ChevronUp,
  CircleDollarSign,
  Scale,
  FileText,
  ArrowRight,
  AlertTriangle,
  Droplets,
  Bug,
  Trash2,
  Warehouse,
  Lightbulb,
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const kellerTypen = [
  {
    title: "Privatkeller",
    desc: "Alter Hausrat, Möbel, Kartons, Kleidung, Spielzeug — alles, was sich über Jahre angesammelt hat.",
    icon: Warehouse,
  },
  {
    title: "Lagerkeller & Abstellräume",
    desc: "Werkzeuge, Baumaterialien, alte Farben, Reifen und sperrige Gegenstände werden professionell entsorgt.",
    icon: Package,
  },
  {
    title: "Keller mit Sondermüll",
    desc: "Öle, Lacke, Chemikalien, Elektroschrott — wir entsorgen auch Schadstoffe fachgerecht und gesetzeskonform.",
    icon: AlertTriangle,
  },
  {
    title: "Feuchte & verschimmelte Keller",
    desc: "Auch bei Feuchtigkeit oder Schimmelbefall räumen wir sicher und gründlich. Auf Wunsch mit anschließender Grundreinigung.",
    icon: Droplets,
  },
];

const ablaufSchritte = [
  {
    step: "1",
    title: "Anfrage stellen",
    desc: "Kontaktieren Sie uns per Telefon, WhatsApp oder Kontaktformular. Beschreiben Sie kurz den Keller (Größe, Füllgrad) oder senden Sie Fotos.",
    icon: Phone,
  },
  {
    step: "2",
    title: "Besichtigung & Festpreis",
    desc: "Wir begutachten den Keller — vor Ort oder per Foto/Video — und erstellen ein transparentes Festpreis-Angebot. Kostenlos und unverbindlich.",
    icon: Camera,
  },
  {
    step: "3",
    title: "Termin vereinbaren",
    desc: "Sie wählen den Wunschtermin. In dringenden Fällen sind wir oft schon innerhalb von 24–48 Stunden vor Ort.",
    icon: CalendarCheck,
  },
  {
    step: "4",
    title: "Räumung & Übergabe",
    desc: "Unser Team räumt den Keller komplett, entsorgt alles fachgerecht und übergibt besenrein — in der Regel an einem Tag.",
    icon: Sparkles,
  },
];

const leistungenInklusive = [
  "Komplette Räumung des Kellers inkl. Nebenräume",
  "Demontage von Regalen, Schränken und Einbauten",
  "Sortierung nach Wertstoffen, Sperrmüll und Sondermüll",
  "Fachgerechte Entsorgung beim Wertstoffhof",
  "Wertanrechnung für Altmetall, Kupfer & Co.",
  "Transport und Verladung inklusive",
  "Besenreine Übergabe am selben Tag",
];

const zusatzleistungen = [
  { title: "Schrottankauf", desc: "Altmetall, Kupfer, Messing werden angekauft und auf den Preis angerechnet", icon: Scale },
  { title: "Grundreinigung", desc: "Professionelle Reinigung nach der Räumung — ideal bei Neuvermietung", icon: Sparkles },
  { title: "Schädlingsbefall", desc: "Räumung auch bei Schädlings- oder Ungezieferbefall sicher und diskret", icon: Bug },
  { title: "Malerarbeiten", desc: "Wände streichen und Löcher verspachteln nach der Kellerentrümpelung", icon: Paintbrush },
  { title: "Bodenbeläge entfernen", desc: "PVC, Teppich oder alte Fliesen fachgerecht entfernen und entsorgen", icon: Hammer },
  { title: "Sperrmüllentsorgung", desc: "Auch große, schwere oder sperrige Gegenstände transportieren wir ab", icon: Trash2 },
];

const kostenTabelle = [
  { typ: "Kleiner Keller (bis 10 m²)", fuellgrad: "wenig gefüllt", preis: "ab 250 €" },
  { typ: "Kleiner Keller (bis 10 m²)", fuellgrad: "voll gefüllt", preis: "ab 450 €" },
  { typ: "Mittlerer Keller (10–20 m²)", fuellgrad: "wenig gefüllt", preis: "ab 350 €" },
  { typ: "Mittlerer Keller (10–20 m²)", fuellgrad: "voll gefüllt", preis: "ab 600 €" },
  { typ: "Großer Keller (20–40 m²)", fuellgrad: "wenig gefüllt", preis: "ab 500 €" },
  { typ: "Großer Keller (20–40 m²)", fuellgrad: "voll gefüllt", preis: "ab 800 €" },
  { typ: "Keller + Dachboden (Kombi)", fuellgrad: "individuell", preis: "ab 600 €" },
];

const comparisons = [
  {
    title: "Kosten & Aufwand",
    bad: "Containermiete, Entsorgungsgebühren, Fahrtkosten zum Wertstoffhof und mehrere Tage Arbeit — oft teurer als gedacht.",
    good: "Ein transparenter Festpreis für alles: Räumung, Transport, Entsorgung und besenreine Übergabe — meist an einem Tag erledigt.",
    icon: CircleDollarSign,
  },
  {
    title: "Sondermüll & Schadstoffe",
    bad: "Alte Farben, Öle und Chemikalien dürfen nicht in den Sperrmüll. Die richtige Entsorgung ist aufwändig und kostet extra.",
    good: "Wir kennen die Vorschriften und entsorgen alle Schadstoffarten fachgerecht. Alles im Festpreis enthalten.",
    icon: AlertTriangle,
  },
  {
    title: "Schwere Gegenstände",
    bad: "Waschmaschinen, alte Öfen oder schwere Werkbänke aus dem Keller zu tragen ist gefährlich und erfordert mehrere Helfer.",
    good: "Unser erfahrenes Team ist ausgerüstet und versichert. Schwere Gegenstände werden sicher abtransportiert.",
    icon: Shield,
  },
];

const reviews = [
  {
    name: "M. Meinke",
    text: "Schnell einen Termin bekommen, pünktlich, freundlich und unkompliziert wurde meine Garage und mein Keller geräumt. Schränke wurden demontiert, besenrein hinterlassen.",
  },
  {
    name: "Thomas R.",
    text: "Keller war bis oben voll mit alten Möbeln und Gerümpel. Das Team hat alles in wenigen Stunden geräumt. Top Preis-Leistung!",
  },
  {
    name: "Katy S.",
    text: "Super Entrümpelungsteam! Sie kamen pünktlich, waren höflich und haben die Arbeit effizient erledigt. Kann ich nur weiterempfehlen.",
  },
];

const faqs = [
  {
    q: "Was kostet eine Kellerentrümpelung?",
    a: "Die Kosten hängen von der Kellergröße, dem Füllgrad, dem Stockwerk und der Art des Materials ab. Ein kleiner, wenig gefüllter Keller beginnt ab ca. 250 €. Sie erhalten immer einen verbindlichen Festpreis — ohne versteckte Kosten.",
  },
  {
    q: "Wie lange dauert eine Kellerentrümpelung?",
    a: "Die meisten Kellerentrümpelungen erledigen wir innerhalb von 2–4 Stunden. Bei sehr großen oder stark gefüllten Kellern kann es einen halben bis ganzen Tag dauern. Nach der Räumung übergeben wir besenrein.",
  },
  {
    q: "Werden auch Schadstoffe aus dem Keller entsorgt?",
    a: "Ja. Wir entsorgen auch Sondermüll wie alte Farben, Lacke, Öle, Lösungsmittel, Elektroschrott und Batterien fachgerecht und gesetzeskonform. Diese Materialien werden gesondert gesammelt und beim Schadstoffmobil oder Wertstoffhof abgegeben.",
  },
  {
    q: "Kann ich Wertgegenstände aus dem Keller anrechnen lassen?",
    a: "Ja. Altmetall, Kupferrohre, Messing, funktionierende Elektrogeräte und andere verwertbare Gegenstände werden bewertet und direkt vom Entrümpelungspreis abgezogen. Das kann den Preis deutlich reduzieren.",
  },
  {
    q: "Muss ich beim Kellerentrümpeln dabei sein?",
    a: "Nicht unbedingt. Nach einer Besichtigung und klarer Absprache können wir die Kellerentrümpelung auch ohne Ihre Anwesenheit durchführen — z. B. mit Schlüsselübergabe. Zur Endabnahme sollten Sie idealerweise vor Ort sein.",
  },
  {
    q: "Räumt ihr auch feuchte oder verschimmelte Keller?",
    a: "Ja. Unser Team ist erfahren im Umgang mit feuchten Kellern und Schimmelbefall. Wir räumen sicher und gründlich. Auf Wunsch bieten wir anschließend eine professionelle Grundreinigung an.",
  },
  {
    q: "Ist eine Kellerentrümpelung auch kurzfristig möglich?",
    a: "Ja. In dringenden Fällen sind wir oft schon innerhalb von 24–48 Stunden bei Ihnen vor Ort. Kontaktieren Sie uns einfach und wir finden schnell einen Termin.",
  },
  {
    q: "Brauche ich einen Container für die Kellerentrümpelung?",
    a: "Nein. Wir bringen alle nötigen Transportmittel mit und entsorgen alles direkt. Sie müssen keinen Container mieten oder sich um die Logistik kümmern.",
  },
  {
    q: "Was passiert mit den alten Möbeln aus dem Keller?",
    a: "Gut erhaltene Möbel werden nach Möglichkeit gespendet oder weiterverwendet. Der Rest wird fachgerecht als Sperrmüll entsorgt. Wir achten auf eine möglichst umweltfreundliche Entsorgung.",
  },
  {
    q: "Kann man eine Kellerentrümpelung von der Steuer absetzen?",
    a: "Ja, unter bestimmten Voraussetzungen. Kellerentrümpelungen gelten als haushaltsnahe Dienstleistung — bis zu 20 % der Arbeitskosten (max. 4.000 € pro Jahr) können steuerlich geltend gemacht werden. Wir stellen eine entsprechende Rechnung aus.",
  },
];

const tipps = [
  {
    title: "Vorher sortieren spart Geld",
    desc: "Wenn Sie vorab Dinge aussortieren, die Sie behalten oder selbst entsorgen möchten, reduziert sich der Umfang — und damit der Preis.",
  },
  {
    title: "Fotos für schnelles Angebot",
    desc: "Schicken Sie uns Fotos des Kellers per WhatsApp. So können wir oft schon ohne Vor-Ort-Besichtigung ein Angebot erstellen.",
  },
  {
    title: "Wertgegenstände markieren",
    desc: "Kennzeichnen Sie Gegenstände, die angerechnet werden sollen (Kupfer, Messing, Elektrogeräte). Das beschleunigt die Bewertung.",
  },
  {
    title: "Termin rechtzeitig planen",
    desc: "Planen Sie die Kellerentrümpelung rechtzeitig vor einem Umzug oder Verkauf. So vermeiden Sie Zeitdruck und haben mehr Flexibilität.",
  },
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

export default function KellerentruempelungPage() {
  useEffect(() => {
    document.title = "Kellerentrümpelung zum Festpreis | Stressfrei Entrümpelungen";
    let _canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!_canonical) { _canonical = document.createElement("link"); _canonical.setAttribute("rel", "canonical"); document.head.appendChild(_canonical); }
    _canonical.setAttribute("href", "https://stressfreientruempelungen.de/kellerentruempelung");
    const _setOgMeta = (prop: string, val: string) => { let m = document.querySelector(`meta[property="${prop}"]`) as HTMLMetaElement | null; if (!m) { m = document.createElement("meta"); m.setAttribute("property", prop); document.head.appendChild(m); } m.setAttribute("content", val); };
    _setOgMeta("og:url", "https://stressfreientruempelungen.de/kellerentruempelung");
    _setOgMeta("og:image", "https://stressfreientruempelungen.de/images/professionelle-entruempelung-service-rhein-erft-kreis.webp");
    _setOgMeta("og:locale", "de_DE");
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Professionelle Kellerentrümpelung im Rhein-Erft-Kreis & NRW. Festpreis, besenreine Übergabe, Wertanrechnung. Auch Sondermüll & Schadstoffe. Jetzt Angebot anfordern!");
    }
  }, []);

  return (
    <PageLayout>
      <PageHero
        title="Kellerentrümpelung zum Festpreis"
        subtitle="Keller voll? Wir räumen komplett, entsorgen fachgerecht und übergeben besenrein — meist an einem Tag. Faire Festpreise, keine versteckten Kosten."
        highlight="Kellerentrümpelung"
      />

      <section className="pb-8 sm:pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeIn}>
            <img
              src="/images/professionelle-entruempelung-service-rhein-erft-kreis.webp"
              alt="Kellerentrümpelung - Stressfrei Entrümpelungen räumt Ihren Keller"
              className="w-full rounded-2xl shadow-lg object-cover aspect-[16/9]"
              width={1200}
              height={675}
              loading="eager"
              data-testid="img-keller-hero"
            />
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeIn}>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6" data-testid="text-intro-title">
              Keller entrümpeln lassen — schnell, sauber, stressfrei
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Im Laufe der Jahre sammelt sich in jedem Keller eine Menge an: alte Möbel, Kartons, Werkzeuge, Elektroschrott,
                Farbreste und vieles mehr. Irgendwann ist der Keller so voll, dass man kaum noch durchkommt. Spätestens bei
                einem Umzug, einer Renovierung oder einem Immobilienverkauf muss der Keller geräumt werden.
              </p>
              <p>
                Als professioneller Entrümpelungsdienst im <strong className="text-foreground">Rhein-Erft-Kreis und ganz NRW</strong> übernehmen
                wir die komplette Kellerentrümpelung für Sie — vom Ausräumen über die fachgerechte Entsorgung bis zur besenreinen
                Übergabe. <strong className="text-foreground">Sie müssen nichts tun</strong> außer uns den Schlüssel zu geben.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-card/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div className="text-center mb-14" {...fadeIn}>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3" data-testid="text-kellertypen-title">
              Welche Keller entrümpeln wir?
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Egal wie groß, wie voll oder wie schwierig — wir haben die passende Lösung für Ihren Keller.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-6">
            {kellerTypen.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.title} {...fadeIn} transition={{ duration: 0.5, delay: i * 0.08 }}>
                  <Card className="p-6 h-full hover-elevate" data-testid={`card-kellertyp-${i}`}>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div className="text-center mb-14" {...fadeIn}>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3" data-testid="text-leistungen-title">
              Was ist bei der Kellerentrümpelung inklusive?
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Unser Stressfrei-Paket deckt alles ab. Optional buchen Sie Zusatzleistungen dazu.
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
                  {leistungenInklusive.map((item, i) => (
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
                  {zusatzleistungen.map((item, i) => {
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

      <section className="py-16 sm:py-24 bg-card/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div className="text-center mb-14" {...fadeIn}>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3" data-testid="text-ablauf-title">
              So läuft Ihre Kellerentrümpelung ab
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              In 4 einfachen Schritten zum leeren Keller — schnell und unkompliziert.
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

      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div className="text-center mb-14" {...fadeIn}>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3" data-testid="text-kosten-title">
              Was kostet eine Kellerentrümpelung?
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Orientierungspreise für typische Kellerentrümpelungen. Der genaue Preis hängt von Füllgrad, Zugänglichkeit und Sondermüll ab.
            </p>
          </motion.div>

          <motion.div {...fadeIn}>
            <Card className="overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full" data-testid="table-kosten">
                  <thead>
                    <tr className="border-b bg-muted/30">
                      <th className="text-left text-sm font-semibold text-foreground p-4">Kellergröße</th>
                      <th className="text-left text-sm font-semibold text-foreground p-4">Füllgrad</th>
                      <th className="text-left text-sm font-semibold text-foreground p-4">Preis</th>
                    </tr>
                  </thead>
                  <tbody>
                    {kostenTabelle.map((row, i) => (
                      <tr key={i} className="border-b last:border-0" data-testid={`row-kosten-${i}`}>
                        <td className="p-4 text-sm text-foreground font-medium">{row.typ}</td>
                        <td className="p-4 text-sm text-muted-foreground">{row.fuellgrad}</td>
                        <td className="p-4 text-sm text-primary font-semibold">{row.preis}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </motion.div>

          <motion.div className="mt-6 grid sm:grid-cols-2 gap-4" {...fadeIn}>
            <Card className="p-4 bg-primary/5 border-primary/20">
              <div className="flex items-start gap-3">
                <Scale className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-1">Wertanrechnung spart Geld</h4>
                  <p className="text-xs text-muted-foreground">Altmetall, Kupfer, Messing und andere verwertbare Materialien werden angerechnet und reduzieren den Preis.</p>
                </div>
              </div>
            </Card>
            <Card className="p-4 bg-primary/5 border-primary/20">
              <div className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-1">Steuerlich absetzbar</h4>
                  <p className="text-xs text-muted-foreground">Kellerentrümpelungen können als haushaltsnahe Dienstleistung steuerlich geltend gemacht werden (bis 20 % der Arbeitskosten).</p>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div className="mt-8 text-center" {...fadeIn}>
            <Link href="/kosten-entruempelung">
              <Button variant="outline" data-testid="link-kosten-detail">
                <CircleDollarSign className="w-4 h-4 mr-2" />
                Detaillierte Kostenübersicht
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-card/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div className="text-center mb-14" {...fadeIn}>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3" data-testid="text-comparison-title">
              Keller selbst entrümpeln oder vom Profi machen lassen?
            </h2>
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

      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div className="text-center mb-14" {...fadeIn}>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3" data-testid="text-reviews-title">
              Kundenstimmen zur Kellerentrümpelung
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

      <section className="py-16 sm:py-24 bg-card/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div className="text-center mb-10" {...fadeIn}>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3" data-testid="text-tipps-title">
              Tipps für Ihre Kellerentrümpelung
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              So bereiten Sie die Kellerentrümpelung optimal vor und sparen dabei Geld.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-5">
            {tipps.map((tipp, i) => (
              <motion.div key={i} {...fadeIn} transition={{ duration: 0.4, delay: i * 0.08 }}>
                <Card className="p-5 h-full" data-testid={`card-tipp-${i}`}>
                  <div className="flex items-start gap-3">
                    <Lightbulb className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-semibold text-foreground mb-1">{tipp.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{tipp.desc}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" data-testid="section-staedte">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div {...fadeIn} className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">Kellerentrümpelung in Ihrer Stadt</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Wir sind im gesamten Rhein-Erft-Kreis und darüber hinaus für Sie im Einsatz.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              { label: "Kellerentrümpelung Bergheim", href: "/kellerentruempelung-bergheim" },
              { label: "Kellerentrümpelung Kerpen", href: "/kellerentruempelung-kerpen" },
              { label: "Kellerentrümpelung Frechen", href: "/kellerentruempelung-frechen" },
              { label: "Kellerentrümpelung Hürth", href: "/kellerentruempelung-huerth" },
              { label: "Kellerentrümpelung Pulheim", href: "/kellerentruempelung-pulheim" },
              { label: "Kellerentrümpelung Erftstadt", href: "/kellerentruempelung-erftstadt" },
              { label: "Kellerentrümpelung Bedburg", href: "/kellerentruempelung-bedburg" },
              { label: "Kellerentrümpelung Elsdorf", href: "/kellerentruempelung-elsdorf" },
              { label: "Kellerentrümpelung Rommerskirchen", href: "/kellerentruempelung-rommerskirchen" },
              { label: "Kellerentrümpelung Grevenbroich", href: "/kellerentruempelung-grevenbroich" },
              { label: "Kellerentrümpelung Brühl", href: "/kellerentruempelung-bruehl" },
              { label: "Kellerentrümpelung Wesseling", href: "/kellerentruempelung-wesseling" },
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

      <section className="py-16 sm:py-24 bg-card/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div className="text-center mb-14" {...fadeIn}>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3" data-testid="text-faq-title">
              Häufige Fragen zur Kellerentrümpelung
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Alles Wichtige rund um Ablauf, Kosten, Sondermüll und Wertanrechnung bei der Kellerentrümpelung.
            </p>
          </motion.div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div className="text-center mb-10" {...fadeIn}>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3" data-testid="text-ratgeber-title">
              Weitere Themen rund um Entrümpelung
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Entrümpelung", href: "/entruempelung", desc: "Alle Infos zur professionellen Entrümpelung" },
              { title: "Was kostet Sperrmüll?", href: "/was-kostet-sperrmuell", desc: "Preise & Tipps für den Rhein-Erft-Kreis" },
              { title: "Entrümpelung Kosten", href: "/kosten-entruempelung", desc: "Detaillierte Kostenübersicht" },
              { title: "Haushaltsauflösung", href: "/haushaltsaufloesung", desc: "Komplette Haushalte auflösen" },
              { title: "Schrottankauf", href: "/schrottankauf", desc: "Altmetall verkaufen & Preis senken" },
              { title: "Messie-Wohnung räumen", href: "/messie-wohnung", desc: "Diskrete und professionelle Hilfe" },
            ].map((item, i) => (
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

      <InternalLinksSection pageKey="kellerentruempelung" />
      <CTASection />

    </PageLayout>
  );
}
