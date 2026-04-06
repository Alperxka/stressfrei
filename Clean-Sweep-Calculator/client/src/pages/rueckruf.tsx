import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PageLayout } from "@/components/layout";
import { motion } from "framer-motion";
import {
  Phone,
  CheckCircle2,
  Clock,
  Shield,
  Zap,
  Send,
  Loader2,
  CalendarDays,
} from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { trackConversion } from "@/lib/gtag";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const zeitslots = [
  "Morgens (8–12 Uhr)",
  "Mittags (12–15 Uhr)",
  "Nachmittags (15–18 Uhr)",
  "Abends (18–20 Uhr)",
  "Jederzeit — so schnell wie möglich",
];

const services = [
  "Entrümpelung",
  "Haushaltsauflösung",
  "Nachlassauflösung",
  "Wohnungsauflösung",
  "Kellerentrümpelung",
  "Messie-Wohnung",
  "Privatumzug",
  "Seniorenumzug",
  "Firmenauflösung / Büroumzug",
  "Schrottankauf",
  "Sonstiges",
];

const vorteile = [
  { icon: Zap, text: "Rückruf innerhalb von 2 Stunden (Mo–Sa 8–20 Uhr)" },
  { icon: Shield, text: "Kostenlos & unverbindlich — kein Verkaufsgespräch" },
  { icon: Clock, text: "Festpreisangebot nach Besichtigung" },
  { icon: CheckCircle2, text: "Zertifiziertes Entsorgungsfachunternehmen" },
];

export default function RueckrufPage() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [service, setService] = useState("");
  const [zeitslot, setZeitslot] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    document.title = "Rückruf anfordern | Stressfrei Entrümpelungen & Umzüge";
    let _canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!_canonical) { _canonical = document.createElement("link"); _canonical.setAttribute("rel", "canonical"); document.head.appendChild(_canonical); }
    _canonical.setAttribute("href", "https://stressfreientruempelungen.de/rueckruf");
    const _setOgMeta = (prop: string, val: string) => { let m = document.querySelector(`meta[property="${prop}"]`) as HTMLMetaElement | null; if (!m) { m = document.createElement("meta"); m.setAttribute("property", prop); document.head.appendChild(m); } m.setAttribute("content", val); };
    _setOgMeta("og:url", "https://stressfreientruempelungen.de/rueckruf");
    _setOgMeta("og:locale", "de_DE");
    const _robots = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null ?? (() => { const m = document.createElement('meta'); m.name = 'robots'; document.head.appendChild(m); return m; })();
    _robots.content = 'noindex, nofollow';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Rückruf anfordern — wir melden uns innerhalb von 2 Stunden. Kostenlose Beratung für Entrümpelung, Haushaltsauflösung und Umzug im Rhein-Erft-Kreis.");
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSending(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const phone = data.get("phone") as string;

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formName: "rueckruf",
          name,
          phone,
          message: `Rückruf gewünscht: ${zeitslot || "Jederzeit"}\nLeistung: ${service || "Nicht angegeben"}`,
        }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Fehler beim Senden");
      }
      setSent(true);
      trackConversion("rueckruf_angefordert", { phone });
    } catch (err: any) {
      setError(err.message || "Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.");
    } finally {
      setSending(false);
    }
  };

  return (
    <PageLayout>
      <section className="py-12 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-10 items-start">

            <motion.div {...fadeIn}>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
                <Phone className="w-3.5 h-3.5" />
                Kostenloser Rückruf
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 leading-tight" data-testid="text-page-title">
                Wir rufen Sie zurück —<br />
                <span className="text-primary">innerhalb von 2 Stunden</span>
              </h1>
              <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                Füllen Sie das kurze Formular aus und einer unserer Experten meldet sich persönlich bei Ihnen. Kostenlos, unverbindlich und ohne Warteschlange.
              </p>

              <div className="space-y-4 mb-8">
                {vorteile.map((v, i) => {
                  const Icon = v.icon;
                  return (
                    <motion.div key={i} {...fadeIn} transition={{ duration: 0.4, delay: i * 0.08 }} className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-sm text-foreground">{v.text}</span>
                    </motion.div>
                  );
                })}
              </div>

              <div className="border-t border-border/50 pt-6">
                <p className="text-sm text-muted-foreground mb-3">Lieber direkt schreiben?</p>
                <a
                  href="https://wa.me/4915258177453"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white font-medium px-5 py-2.5 rounded-lg hover:bg-[#22c55e] transition-colors"
                  data-testid="link-whatsapp"
                >
                  <SiWhatsapp className="w-5 h-5" />
                  WhatsApp schreiben
                </a>
              </div>
            </motion.div>

            <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.12 }}>
              {sent ? (
                <Card className="p-8 text-center" data-testid="card-success">
                  <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </div>
                  <h2 className="text-xl font-bold text-foreground mb-2">Anfrage erhalten!</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Vielen Dank! Wir melden uns in Kürze telefonisch bei Ihnen. Montag–Samstag sind wir von 8–20 Uhr erreichbar.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Sie können uns auch direkt anrufen:{" "}
                    <a href="tel:+4922715880940" className="text-primary font-semibold hover:underline">
                      02271 / 5880940
                    </a>
                  </p>
                </Card>
              ) : (
                <Card className="p-6 sm:p-8" data-testid="card-form">
                  <div className="flex items-center gap-2 mb-6">
                    <CalendarDays className="w-5 h-5 text-primary" />
                    <h2 className="text-lg font-bold text-foreground">Rückruf anfordern</h2>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-5" data-testid="form-rueckruf">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label htmlFor="name">Ihr Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Max Mustermann"
                          required
                          data-testid="input-name"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="phone">Telefonnummer *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="02271 / ..."
                          required
                          data-testid="input-phone"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="rueckruf-zeitslot">Gewünschte Rückrufzeit</Label>
                      <Select value={zeitslot} onValueChange={setZeitslot}>
                        <SelectTrigger id="rueckruf-zeitslot" data-testid="select-zeitslot">
                          <SelectValue placeholder="Wann dürfen wir Sie anrufen?" />
                        </SelectTrigger>
                        <SelectContent>
                          {zeitslots.map((z) => (
                            <SelectItem key={z} value={z}>{z}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="rueckruf-service">Worum geht es? (optional)</Label>
                      <Select value={service} onValueChange={setService}>
                        <SelectTrigger id="rueckruf-service" data-testid="select-service">
                          <SelectValue placeholder="Leistung auswählen …" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((s) => (
                            <SelectItem key={s} value={s}>{s}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {error && (
                      <p className="text-sm text-red-600 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800/40 rounded-lg p-3" data-testid="text-error">
                        {error}
                      </p>
                    )}

                    <Button
                      type="submit"
                      className="w-full"
                      size="lg"
                      disabled={sending}
                      data-testid="btn-submit"
                    >
                      {sending ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin mr-2" />
                          Wird gesendet …
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Jetzt Rückruf anfordern
                        </>
                      )}
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      Kein Spam, kein Verkaufsdruck — nur ein freundliches Gespräch.
                    </p>
                  </form>
                </Card>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
