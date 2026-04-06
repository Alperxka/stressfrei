import { useEffect, useState, type FormEvent } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PageLayout, PageHero, CTASection, InternalLinksSection } from "@/components/layout";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { UmzugsRechner } from "@/components/umzugs-rechner";
import {
  Phone,
  Euro,
  Home,
  Building2,
  Truck,
  TrendingDown,
  CheckCircle2,
  HelpCircle,
  ArrowRight,
  MapPin,
  Users,
  Package,
  Mail,
  Send,
} from "lucide-react";

function IconWhatsapp({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.555 4.118 1.528 5.847L0 24l6.335-1.652A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.013-1.376l-.36-.214-3.732.973.998-3.643-.235-.374A9.818 9.818 0 0112 2.182c5.427 0 9.818 4.391 9.818 9.818S17.427 21.818 12 21.818z"/>
    </svg>
  );
}

function UmzugQuickForm() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  if (sent) {
    return (
      <div className="text-center py-6">
        <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-3" />
        <p className="font-semibold text-foreground text-lg">Anfrage erhalten!</p>
        <p className="text-sm text-muted-foreground mt-1">Wir melden uns innerhalb weniger Stunden bei Ihnen.</p>
      </div>
    );
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const fd = new FormData(e.currentTarget);
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formName: "kosten_umzug_cta",
          name: fd.get("name"),
          phone: fd.get("phone"),
          message: "Anfrage über Kostenseite Umzug",
        }),
      });
    } catch {}
    setSent(true);
    setSending(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
      <input
        name="name"
        placeholder="Ihr Name *"
        required
        className="flex-1 rounded-lg border border-border bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
      />
      <input
        name="phone"
        type="tel"
        placeholder="Telefonnummer *"
        required
        className="flex-1 rounded-lg border border-border bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
      />
      <Button type="submit" disabled={sending} className="shrink-0 px-6">
        <Send className="w-4 h-4 mr-2" />
        {sending ? "Wird gesendet …" : "Kostenloses Angebot"}
      </Button>
    </form>
  );
}

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const priceRanges = [
  { icon: Home, type: "1-Zimmer-Wohnung", range: "400 – 800 €", note: "Lokal, unter 30km" },
  { icon: Home, type: "2-Zimmer-Wohnung", range: "700 – 1.400 €", note: "Durchschnittlicher Umzug" },
  { icon: Home, type: "3-Zimmer-Wohnung", range: "1.100 – 2.200 €", note: "Mit Möbelabbau" },
  { icon: Building2, type: "4+ Zimmer / Haus", range: "1.800 – 4.000 €", note: "Großer Haushalt" },
  { icon: Building2, type: "Büroumzug", range: "1.500 – 6.000 €", note: "Abhängig von Ausstattung" },
  { icon: Truck, type: "Fernumzug (100+ km)", range: "2.500 – 7.000 €", note: "Entfernungsabhängig" },
];

const costFactors = [
  {
    title: "Wohnungsgröße & Zimmeranzahl",
    description: "Mehr Zimmer bedeuten mehr Möbel, mehr Kartons und mehr Arbeitszeit für den Umzug.",
  },
  {
    title: "Entfernung zwischen Start & Ziel",
    description: "Jeder Kilometer kostet extra. Lokale Umzüge sind deutlich günstiger als Fernumzüge.",
  },
  {
    title: "Stockwerk & Aufzug",
    description: "Kein Aufzug? Pro Stockwerk steigt der Aufwand. Ein Aufzug spart Zeit und senkt die Kosten.",
  },
  {
    title: "Möbel De- & Montage",
    description: "Schränke, Küchen und Betten müssen ab- und wieder aufgebaut werden — das kostet extra.",
  },
  {
    title: "Halteverbotszone",
    description: "Wenn vor dem Haus keine Parkmöglichkeit besteht, muss eine Halteverbotszone beantragt werden.",
  },
  {
    title: "Zusatzleistungen",
    description: "Packservice, Einlagerung, Entrümpelung oder Endreinigung können hinzugebucht werden.",
  },
];

const savingTips = [
  "Kartons selbst packen – spart den Packservice",
  "Kleine Möbel und Kartons vorab selbst abbauen / vorbereiten",
  "Umzugstermin unter der Woche wählen (günstiger als am Wochenende)",
  "Nicht mehr benötigte Sachen vorher verkaufen oder entsorgen",
  "Entrümpelung + Umzug kombinieren für Paketrabatt",
];

export default function KostenUmzugPage() {
  useEffect(() => {
    document.title = "Umzug Kosten 2025 – Preise & Kostenrechner | Stressfrei";
    const _setOgMeta = (prop: string, val: string) => { let m = document.querySelector(`meta[property="${prop}"]`) as HTMLMetaElement | null; if (!m) { m = document.createElement("meta"); m.setAttribute("property", prop); document.head.appendChild(m); } m.setAttribute("content", val); };
    _setOgMeta("og:url", "https://stressfreientruempelungen.de/kosten-umzug");
    _setOgMeta("og:image", "https://stressfreientruempelungen.de/images/umzug-umzugskartons-stressfrei-rhein-erft-kreis.webp");
    _setOgMeta("og:locale", "de_DE");
    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"], meta[property="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        if (name.startsWith("og:")) el.setAttribute("property", name);
        else el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };
    setMeta("description", "Was kostet ein Umzug 2025? Preisübersicht für Privatumzüge und Büroumzüge im Rhein-Erft-Kreis. Kostenloser Online-Rechner für Ihre individuelle Kalkulation.");
    setMeta("og:title", "Umzug Kosten 2025 – Preisübersicht & Rechner");
    setMeta("og:description", "Faire Festpreise für Umzüge. Berechnen Sie Ihre Kosten online oder fordern Sie ein kostenloses Angebot an.");
    setMeta("og:type", "website");
    setMeta("og:url", "https://stressfreientruempelungen.de/kosten-umzug");
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://stressfreientruempelungen.de/kosten-umzug");
  }, []);

  return (
    <>
    <PageLayout>
      <PageHero
        title="Umzug Kosten"
        subtitle="Was kostet ein Umzug 2025? Transparente Preise und kostenloser Online-Rechner für Ihre individuelle Kalkulation."
        showCTA={false}
      />

      <section className="py-16 bg-background" data-testid="section-price-overview">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div {...fadeIn} className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Preisübersicht Umzug 2025</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Die folgenden Preise sind Richtwerte für Umzüge im Rhein-Erft-Kreis und NRW.
              Ihr tatsächlicher Preis hängt von Entfernung, Stockwerk und Umfang ab – nutzen Sie unseren Kostenrechner für eine genauere Schätzung.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {priceRanges.map((item, i) => (
              <motion.div key={item.type} {...fadeIn} transition={{ duration: 0.5, delay: i * 0.08 }}>
                <Card className="p-5 h-full" data-testid={`card-price-${i}`}>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm">{item.type}</h3>
                      <p className="text-xl font-bold text-primary mt-1" data-testid={`text-price-range-${i}`}>{item.range}</p>
                      <p className="text-xs text-muted-foreground mt-1">{item.note}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.p {...fadeIn} className="text-center text-sm text-muted-foreground mt-6">
            Alle Preise inkl. MwSt., Transport, Möbelmontage und Versicherung. Keine versteckten Kosten.
          </motion.p>
        </div>
      </section>

      <section className="py-16 bg-muted/30" data-testid="section-calculator" id="rechner">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div {...fadeIn} className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Kostenrechner Umzug</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Berechnen Sie die voraussichtlichen Kosten Ihres Umzugs in wenigen Schritten.
              Am Ende können Sie direkt ein unverbindliches Angebot anfordern.
            </p>
          </motion.div>
          <UmzugsRechner />
        </div>
      </section>

      <section className="py-16 bg-background" data-testid="section-cost-factors">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div {...fadeIn} className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Was beeinflusst die Umzugskosten?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Diese sechs Faktoren bestimmen den Preis Ihres Umzugs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {costFactors.map((factor, i) => (
              <motion.div key={factor.title} {...fadeIn} transition={{ duration: 0.5, delay: i * 0.08 }}>
                <Card className="p-5 h-full" data-testid={`card-factor-${i}`}>
                  <div className="flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-sm mb-1">{factor.title}</h3>
                      <p className="text-sm text-muted-foreground">{factor.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30" data-testid="section-saving-tips">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl font-bold mb-4">So sparen Sie beim Umzug</h2>
              <p className="text-muted-foreground mb-6">
                Mit diesen Tipps können Sie die Kosten Ihres Umzugs spürbar senken:
              </p>
              <div className="space-y-3">
                {savingTips.map((tip, i) => (
                  <div key={i} className="flex items-start gap-3" data-testid={`tip-${i}`}>
                    <TrendingDown className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm">{tip}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.2 }}>
              <Card className="p-6 bg-primary/5 border-primary/20">
                <h3 className="font-bold text-lg mb-3">Unser Rundum-Sorglos-Paket</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Wir bieten Ihnen einen Komplettumzug zum fairen Festpreis — von der Verpackung bis zum Aufbau am Zielort.
                </p>
                <div className="space-y-2">
                  {["Kostenlose Besichtigung vor Ort", "Verbindlicher Festpreis", "Möbel De- & Montage inklusive", "Transportversicherung inklusive", "Besenreine Übergabe"].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card/50" data-testid="section-preisbeispiele">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div {...fadeIn} className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">Preisbeispiele aus der Praxis</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Typische Umzugsaufträge aus dem Rhein-Erft-Kreis — für eine realistische Kostenschätzung.</p>
          </motion.div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm" data-testid="table-preisbeispiele">
              <thead>
                <tr className="bg-primary/10 border-b border-border/60">
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Auftrag</th>
                  <th className="text-left px-4 py-3 font-semibold text-foreground hidden sm:table-cell">Details</th>
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Preis</th>
                  <th className="text-left px-4 py-3 font-semibold text-foreground hidden md:table-cell">Inkludiert</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40">
                {[
                  { auftrag: "1-Zimmer-Wohnung lokal", details: "ca. 35 m², Kerpen → Bergheim (18 km)", preis: "550 €", hinweis: "Transport, 2 Mann, 3 Std." },
                  { auftrag: "Seniorenumzug", details: "2-Zimmer, Kerpen → Köln (25 km)", preis: "950 €", hinweis: "Möbelabbau & -aufbau inklusive" },
                  { auftrag: "2-Zimmer-Wohnung", details: "60 m², Frechen → Hürth (12 km)", preis: "1.100 €", hinweis: "Kartonservice & Einpacken" },
                  { auftrag: "3-Zimmer-Wohnung", details: "80 m², Bergheim → Köln (30 km)", preis: "1.400 €", hinweis: "Inkl. De-/Montage Möbel" },
                  { auftrag: "Einfamilienhaus", details: "120 m², Pulheim → Düsseldorf (45 km)", preis: "3.200 €", hinweis: "Komplettservice, 4 Mann" },
                  { auftrag: "Büroumzug", details: "8 Arbeitsplätze, Kerpen → Köln", preis: "2.800 €", hinweis: "Wochenend-Termin, Einzel-IT" },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-muted/30 transition-colors" data-testid={`row-preis-${i}`}>
                    <td className="px-4 py-3 font-medium text-foreground">{row.auftrag}</td>
                    <td className="px-4 py-3 text-muted-foreground hidden sm:table-cell">{row.details}</td>
                    <td className="px-4 py-3 font-bold text-primary">{row.preis}</td>
                    <td className="px-4 py-3 text-muted-foreground hidden md:table-cell">{row.hinweis}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-3 text-center">Alle Preise sind Richtwerte. Ihr verbindlicher Festpreis wird nach kostenloser Besichtigung genannt.</p>
        </div>
      </section>

      <section className="py-16 bg-background" data-testid="section-faq">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div {...fadeIn} className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Häufige Fragen zu Umzugskosten</h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                q: "Was kostet ein lokaler Umzug im Rhein-Erft-Kreis?",
                a: "Ein lokaler Umzug (unter 30km) für eine 2-Zimmer-Wohnung kostet typischerweise zwischen 700 und 1.400 €. Nutzen Sie unseren Kostenrechner oben für eine genauere Schätzung.",
              },
              {
                q: "Ist der Festpreis wirklich verbindlich?",
                a: "Ja. Nach der kostenlosen Besichtigung erhalten Sie einen verbindlichen Festpreis. Es kommen keine Nachzahlungen oder versteckte Kosten auf Sie zu.",
              },
              {
                q: "Sind meine Möbel während des Umzugs versichert?",
                a: "Ja, alle Ihre Habseligkeiten sind während des gesamten Umzugs durch uns versichert. Im unwahrscheinlichen Schadensfall sind Sie abgesichert.",
              },
              {
                q: "Kann ich Entrümpelung und Umzug kombinieren?",
                a: "Ja, das ist sogar günstiger! Wenn Sie Entrümpelung und Umzug zusammen buchen, profitieren Sie von einem Paketrabatt.",
              },
              {
                q: "Wie weit im Voraus sollte ich den Umzug buchen?",
                a: "Idealerweise 2-4 Wochen im Voraus. Bei kurzfristigen Anfragen finden wir aber fast immer eine Lösung.",
              },
            ].map((faq, i) => (
              <motion.div key={i} {...fadeIn} transition={{ duration: 0.5, delay: i * 0.06 }}>
                <Card className="p-5" data-testid={`faq-${i}`}>
                  <h3 className="font-semibold mb-2">{faq.q}</h3>
                  <p className="text-sm text-muted-foreground">{faq.a}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeIn} className="text-center mt-8">
            <Link href="/faq">
              <Button variant="outline" data-testid="link-faq-page">
                Alle FAQ ansehen <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-primary/5 border-y border-border/30" data-testid="section-umzug-cta">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div {...fadeIn} className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-xs font-semibold mb-4">
              <Mail className="w-3.5 h-3.5" />
              Kostenloses Angebot — in 60 Sekunden
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
              Ihr persönlicher Festpreis für den Umzug
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm">
              Name und Telefonnummer angeben — wir melden uns schnellstmöglich mit einem unverbindlichen Festpreisangebot für Ihren Umzug.
            </p>
          </motion.div>
          <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.1 }}>
            <Card className="p-6 sm:p-8">
              <UmzugQuickForm />
              <div className="flex flex-col sm:flex-row items-center gap-4 mt-5 pt-5 border-t border-border/50">
                <a href="tel:+4922715880940" className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors">
                  <Phone className="w-4 h-4 text-primary" />
                  02271 / 5880940
                </a>
                <span className="hidden sm:block text-border">|</span>
                <a
                  href="https://wa.me/4915258177453?text=Hallo%2C%20ich%20m%C3%B6chte%20ein%20Angebot%20f%C3%BCr%20meinen%20Umzug%20anfragen."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold text-[#25D366] hover:opacity-80 transition-opacity"
                >
                  <IconWhatsapp className="w-4 h-4" />
                  Per WhatsApp anfragen
                </a>
                <span className="hidden sm:block text-border">|</span>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  Kostenloser Umzugscheck · Festpreis garantiert
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      <CTASection />
      <InternalLinksSection pageKey="kosten-umzug" />
    </PageLayout>
    </>
  );
}
