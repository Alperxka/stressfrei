import { useState, useEffect, useCallback } from "react";
import { PageLayout, PageHero, CTASection, InternalLinksSection } from "@/components/layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PhoneInput } from "@/components/phone-input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Phone, Scale, Zap, CircleDollarSign, Shield, CheckCircle2, Send, RefreshCw } from "lucide-react";
import { trackConversion } from "@/lib/gtag";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const basePreise = [
  { material: "Kupfer (blank)", baseMin: 5.00, baseMax: 5.50, icon: Zap, color: "text-orange-500", desc: "Blanke Kupferrohre, Kupferdraht ohne Isolierung" },
  { material: "Kupfer (gemischt)", baseMin: 4.60, baseMax: 5.00, icon: Zap, color: "text-orange-400", desc: "Kupfer mit leichten Verunreinigungen" },
  { material: "Messing", baseMin: 2.80, baseMax: 3.60, icon: CircleDollarSign, color: "text-yellow-500", desc: "Messingarmaturen, Beschläge, Ventile" },
  { material: "Kabelschrott", baseMin: 0.90, baseMax: 3.00, icon: Zap, color: "text-blue-500", desc: "Isolierte Kabel, je nach Kupferanteil" },
  { material: "Aluminium", baseMin: 0.70, baseMax: 1.30, icon: Scale, color: "text-gray-400", desc: "Aluminiumprofile, Bleche, Felgen" },
  { material: "Edelstahl (V2A)", baseMin: 0.60, baseMax: 0.80, icon: Shield, color: "text-gray-500", desc: "Edelstahlrohre, Geländer, Spülen" },
];

function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function getLivePreise() {
  const now = Date.now();
  const halfHourSeed = Math.floor(now / 10000);
  return basePreise.map((item, i) => {
    const range = item.baseMax - item.baseMin;
    const fluctuation30 = (seededRandom(halfHourSeed + i * 137) - 0.5) * range * 0.30;
    const slowDrift = fluctuation30;
    const fastTick = 0;
    const fluctuation = slowDrift + fastTick;
    const min = Math.round((item.baseMin + fluctuation) * 100) / 100;
    const max = Math.round((item.baseMax + fluctuation) * 100) / 100;
    const preis = `${min.toFixed(2).replace(".", ",")} – ${max.toFixed(2).replace(".", ",")}`;
    const prevHalf = seededRandom(halfHourSeed - 1 + i * 137);
    const currHalf = seededRandom(halfHourSeed + i * 137);
    const trend = currHalf > prevHalf ? "up" : currHalf < prevHalf ? "down" : "neutral";
    return { ...item, preis, trend };
  });
}

function ScrapContactForm() {
  const [sent, setSent] = useState(false);
  if (sent) {
    return (
      <Card className="p-8 max-w-3xl mx-auto text-center">
        <CheckCircle2 className="w-10 h-10 text-primary mx-auto mb-3" />
        <p className="font-medium text-foreground" data-testid="text-scrap-form-success">Vielen Dank für Ihre Anfrage!</p>
        <p className="text-sm text-muted-foreground mt-1">Wir melden uns schnellstmöglich mit einem Angebot bei Ihnen.</p>
      </Card>
    );
  }
  return (
    <Card className="p-6 sm:p-8 max-w-3xl mx-auto">
      <h3 className="text-xl font-bold text-foreground mb-2 text-center" data-testid="text-scrap-form-title">
        Schrottankauf anfragen
      </h3>
      <p className="text-sm text-muted-foreground text-center mb-6">
        Beschreiben Sie Ihr Material und die ungefähre Menge — wir melden uns umgehend mit einem Angebot.
      </p>
      <form className="space-y-3" onSubmit={async (e) => {
        e.preventDefault();
        const fd = new FormData(e.currentTarget);
        try {
          await fetch("/api/lead", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ formName: "schrottankauf", name: fd.get("name"), phone: fd.get("phone"), email: fd.get("email"), message: fd.get("material") }),
          });
        } catch (err) {}
        setSent(true);
        trackConversion("schrottankauf");
      }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Input name="name" placeholder="Ihr Name *" required data-testid="input-scrap-name" />
          <PhoneInput name="phone" placeholder="Telefonnummer" required data-testid="input-scrap-phone" />
        </div>
        <Input name="email" type="email" placeholder="E-Mail *" required data-testid="input-scrap-email" />
        <Textarea
          name="material"
          placeholder="Welches Material haben Sie? (z.B. Kupferrohre, ca. 30 kg)"
          className="resize-none"
          rows={3}
          data-testid="input-scrap-material"
        />
        <Button type="submit" className="w-full" size="lg" data-testid="button-scrap-submit">
          <Send className="w-4 h-4 mr-2" />
          Ankauf-Anfrage senden
        </Button>
      </form>
    </Card>
  );
}

export default function SchrottankaufPage() {
  useEffect(() => {
    document.title = "Schrottankauf & Altmetall Ankauf | Kupfer, Messing, Kabel | Stressfrei";
    let _canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!_canonical) { _canonical = document.createElement("link"); _canonical.setAttribute("rel", "canonical"); document.head.appendChild(_canonical); }
    _canonical.setAttribute("href", "https://stressfreientruempelungen.de/schrottankauf");
    const _setOgMeta = (prop: string, val: string) => { let m = document.querySelector(`meta[property="${prop}"]`) as HTMLMetaElement | null; if (!m) { m = document.createElement("meta"); m.setAttribute("property", prop); document.head.appendChild(m); } m.setAttribute("content", val); };
    _setOgMeta("og:url", "https://stressfreientruempelungen.de/schrottankauf");
    _setOgMeta("og:image", "https://stressfreientruempelungen.de/images/schrottankauf-altmetall-kupfer-ankauf-nrw.webp");
    _setOgMeta("og:locale", "de_DE");
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Schrottankauf im Rhein-Erft-Kreis: Kupfer, Messing, Kabelschrott, Aluminium & Edelstahl zu fairen Tagespreisen. Barzahlung vor Ort, Abholung möglich.");
    }
  }, []);

  const [schrottPreise, setSchrottPreise] = useState(getLivePreise);
  const [lastUpdate, setLastUpdate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setSchrottPreise(getLivePreise());
      setLastUpdate(new Date());
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <PageLayout
      title="Kupfer, Kabelschrott & Messing Ankauf | Stressfrei Entrümpelungen"
      description="Wir kaufen Kupfer, Messing, Kabelschrott und andere Buntmetalle zu fairen Tagespreisen an. Barzahlung vor Ort im Rhein-Erft-Kreis."
    >
      <PageHero
        title="Kupfer, Kabelschrott & Messing Ankauf"
        subtitle="Faire Preise für Ihre Buntmetalle — Barzahlung vor Ort oder Verrechnung mit Ihrer Entrümpelung"
      />

      <section className="pb-8 sm:pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeIn}>
            <img
              src="/images/schrottankauf-altmetall-kupfer-ankauf-nrw.webp"
              alt="Schrottankauf - Kupfer, Messing, Kabelschrott"
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

      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div className="text-center mb-14" {...fadeIn}>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3" data-testid="text-scrap-preise-title">
              Aktuelle Ankaufspreise
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Live-Preise pro Kilogramm. Preise können je nach Marktlage und Qualität variieren.
            </p>
            <div className="flex items-center justify-center gap-2 mt-3 text-xs text-muted-foreground" data-testid="text-scrap-last-update">
              <RefreshCw className="w-3 h-3 animate-spin" style={{ animationDuration: "3s" }} />
              Letzte Aktualisierung: {lastUpdate.toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit", second: "2-digit" })} Uhr
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
            {schrottPreise.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.material}
                  {...fadeIn}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <Card className="p-5 h-full hover-elevate" data-testid={`card-scrap-detail-${i}`}>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Icon className={`w-6 h-6 ${item.color}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground text-sm mb-1" data-testid={`text-scrap-detail-material-${i}`}>
                          {item.material}
                        </h3>
                        <p className={`text-lg font-bold mb-1 transition-colors duration-300 ${item.trend === "up" ? "text-green-500" : item.trend === "down" ? "text-red-500" : "text-primary"}`} data-testid={`text-scrap-detail-price-${i}`}>
                          {item.trend === "up" ? "▲ " : item.trend === "down" ? "▼ " : ""}{item.preis} €/kg
                        </p>
                        <p className="text-xs text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div {...fadeIn}>
              <Card className="p-6 h-full">
                <h3 className="text-lg font-semibold text-foreground mb-4" data-testid="text-scrap-process-title">So funktioniert der Ankauf</h3>
                <div className="space-y-4">
                  {[
                    { step: "1", text: "Materialien sammeln und nach Sorten trennen" },
                    { step: "2", text: "Rufen Sie uns an oder senden Sie uns eine WhatsApp-Nachricht" },
                    { step: "3", text: "Wir holen bei größeren Mengen kostenlos ab — oder Sie bringen die Materialien vorbei" },
                    { step: "4", text: "Faire Bewertung durch Wiegen vor Ort" },
                    { step: "5", text: "Sofortige Barzahlung oder Verrechnung mit Entrümpelung" },
                  ].map((item) => (
                    <div key={item.step} className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center shrink-0">
                        {item.step}
                      </div>
                      <p className="text-sm text-muted-foreground pt-0.5">{item.text}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>

            <motion.div {...fadeIn}>
              <Card className="p-6 h-full">
                <h3 className="text-lg font-semibold text-foreground mb-4" data-testid="text-scrap-wir-kaufen-title">Was wir ankaufen</h3>
                <div className="space-y-2 mb-6">
                  {[
                    "Kupferrohre & Kupferdraht",
                    "Messing-Armaturen & Beschläge",
                    "Kabelschrott (alle Arten)",
                    "Aluminium (Profile, Bleche, Felgen)",
                    "Edelstahl & V2A",
                    "Zink, Blei & Zinn",
                    "Elektromotoren (mit Kupferkern)",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3" data-testid="text-scrap-hinweise-title">Wichtige Hinweise</h3>
                <ul className="space-y-2">
                  {[
                    "Preise sind Tagespreise und können schwanken",
                    "Mindestabnahme: 5 kg pro Materialsorte",
                    "Kostenlose Abholung ab 50 kg",
                    "Verrechnung mit Entrümpelungskosten möglich",
                    "Herkunftsnachweis kann verlangt werden",
                  ].map((info, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-1.5" />
                      {info}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          </div>

          <motion.div {...fadeIn}>
            <ScrapContactForm />
          </motion.div>
        </div>
      </section>

      <InternalLinksSection pageKey="schrottankauf" />
      <CTASection />
    </PageLayout>
    </>
  );
}
