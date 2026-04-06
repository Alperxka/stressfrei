import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PhoneInput } from "@/components/phone-input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PageLayout } from "@/components/layout";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  Star,
  Clock,
  Shield,
  Zap,
  Users,
  ClipboardList,
  Eye,
  FileText,
  Truck,
  Key,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { trackConversion } from "@/lib/gtag";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const services = [
  "Entrümpelung",
  "Haushaltsauflösung",
  "Wohnungsauflösung",
  "Firmenauflösung",
  "Messie-Wohnung",
  "Privatumzug",
  "Seniorenumzug",
  "Büroumzug",
  "Einlagerung",
  "Schrottankauf",
  "Sonstiges",
];

const reviews = [
  { name: "Maria S.", location: "Bergheim", text: "Super schnell und sauber gearbeitet. Das Team war sehr freundlich und hat alles tadellos hinterlassen. Sehr zu empfehlen!", stars: 5 },
  { name: "Thomas K.", location: "Kerpen", text: "Pünktlich, freundlich und faire Preise. Das Angebot kam noch am gleichen Tag. Absolut top — werde sie definitiv weiterempfehlen!", stars: 5 },
  { name: "Andrea B.", location: "Pulheim", text: "Alles stressfrei abgelaufen, genau wie der Name verspricht. Die Wohnung meiner Mutter wurde professionell und diskret geräumt. Danke!", stars: 5 },
  { name: "Klaus M.", location: "Frechen", text: "Nachlass meines Vaters musste aufgelöst werden. Das Team war unglaublich einfühlsam. Faire Wertanrechnung, super Ergebnis.", stars: 5 },
  { name: "Sabine H.", location: "Erftstadt", text: "Vom ersten Anruf bis zur Übergabe alles reibungslos. Festpreis eingehalten, Wohnung besenrein übergeben. 100% empfehlenswert.", stars: 5 },
  { name: "Michael R.", location: "Hürth", text: "Sehr professioneller Büroumzug. Alles termingerecht und ohne einen einzigen Schaden. Klare Empfehlung für Geschäftskunden!", stars: 5 },
];

const steps = [
  { icon: ClipboardList, step: "1", title: "Anfrage stellen", desc: "Formular ausfüllen, anrufen oder WhatsApp-Nachricht senden — ganz wie es Ihnen passt." },
  { icon: Eye, step: "2", title: "Kostenlose Besichtigung", desc: "Wir begutachten das Objekt vor Ort oder per Foto/Video und nehmen alle Details auf." },
  { icon: FileText, step: "3", title: "Unverbindliches Angebot", desc: "Innerhalb weniger Stunden erhalten Sie ein transparentes Festpreisangebot — keine versteckten Kosten." },
  { icon: Truck, step: "4", title: "Durchführung", desc: "Unser Team arbeitet schnell, sorgfältig und respektvoll — in der Regel an einem Tag fertig." },
  { icon: Key, step: "5", title: "Übergabe", desc: "Das Objekt wird besenrein übergeben. Auf Wunsch erhalten Sie ein Entsorgungsprotokoll." },
];

const faqs = [
  {
    q: "Wie schnell bekomme ich ein Angebot?",
    a: "In der Regel erhalten Sie Ihr Angebot noch am gleichen Tag der Besichtigung — spätestens innerhalb von 24 Stunden. Für einfachere Aufträge genügen uns oft Fotos oder Videos, um sofort ein Angebot zu erstellen.",
  },
  {
    q: "Ist die Besichtigung wirklich 100% kostenlos?",
    a: "Ja, absolut. Die Besichtigung ist vollkommen kostenlos und unverbindlich — egal ob wir danach den Auftrag erhalten oder nicht. Sie gehen keinerlei Verpflichtung ein.",
  },
  {
    q: "Muss ich beim Termin anwesend sein?",
    a: "Nein. Es genügt, wenn Sie uns Zugang zum Objekt ermöglichen. Viele unserer Kunden hinterlegen einen Schlüssel oder beauftragen einen Nachbarn. Nach Fertigstellung übergeben wir besenrein.",
  },
  {
    q: "Wie kurzfristig kann ich einen Termin buchen?",
    a: "Wir versuchen auch kurzfristige Anfragen zu erfüllen. Rufen Sie uns einfach an — oft finden wir noch am selben oder nächsten Werktag einen Termin. Wir sind Mo–Sa von 07:00–20:00 Uhr erreichbar.",
  },
  {
    q: "In welchen Städten sind Sie tätig?",
    a: "Wir sind im gesamten Rhein-Erft-Kreis tätig: Bergheim, Kerpen, Bedburg, Pulheim, Frechen, Hürth, Erftstadt, Elsdorf, Grevenbroich und Rommerskirchen. Auch Köln, Düsseldorf, Aachen und Bonn gehören zu unserem Einzugsgebiet.",
  },
];

function FaqItem({ item, index }: { item: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <Card
      className="cursor-pointer"
      onClick={() => setOpen(!open)}
      data-testid={`card-kontakt-faq-${index}`}
    >
      <div className="p-5 flex items-start justify-between gap-4">
        <h3 className="font-medium text-foreground text-sm sm:text-base">{item.q}</h3>
        <div className="shrink-0 mt-0.5">
          {open ? <ChevronUp className="w-4 h-4 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
        </div>
      </div>
      {open && (
        <div className="px-5 pb-5 pt-0">
          <p className="text-sm text-muted-foreground leading-relaxed">{item.a}</p>
        </div>
      )}
    </Card>
  );
}

export default function KontaktPage() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [service, setService] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    const pageTitle = "Kontakt & Angebot anfordern | Stressfrei Entrümpelungen & Umzüge";
    const pageDesc = "Kostenloses Angebot für Entrümpelung, Haushaltsauflösung oder Umzug im Rhein-Erft-Kreis anfordern. Festpreisgarantie ✓ Antwort in 24h ✓ ☎ 02271 / 5880940";
    document.title = pageTitle;
    let _canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!_canonical) { _canonical = document.createElement("link"); _canonical.setAttribute("rel", "canonical"); document.head.appendChild(_canonical); }
    _canonical.setAttribute("href", "https://stressfreientruempelungen.de/kontakt");
    const _setOgMeta = (prop: string, val: string) => { let m = document.querySelector(`meta[property="${prop}"]`) as HTMLMetaElement | null; if (!m) { m = document.createElement("meta"); m.setAttribute("property", prop); document.head.appendChild(m); } m.setAttribute("content", val); };
    _setOgMeta("og:url", "https://stressfreientruempelungen.de/kontakt");
    _setOgMeta("og:image", "https://stressfreientruempelungen.de/images/professionelle-entruempelung-service-rhein-erft-kreis.webp");
    _setOgMeta("og:locale", "de_DE");
    _setOgMeta("og:title", pageTitle);
    _setOgMeta("og:description", pageDesc);
    _setOgMeta("og:type", "website");
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", pageDesc);

    const existingLd = document.querySelector('script[data-kontakt-ld]');
    if (existingLd) existingLd.remove();
    const ldScript = document.createElement("script");
    ldScript.type = "application/ld+json";
    ldScript.setAttribute("data-kontakt-ld", "true");
    ldScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Kontakt & Angebot | Stressfrei Entrümpelungen & Umzüge",
      "url": "https://stressfreientruempelungen.de/kontakt",
      "description": pageDesc,
      "mainEntity": {
        "@type": "LocalBusiness",
        "name": "Stressfrei Entrümpelungen & Umzüge",
        "telephone": "+4922715880940",
        "email": "info@stressfreientruempelungen.de",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Hauptstraße 26",
          "addressLocality": "Bergheim",
          "postalCode": "50126",
          "addressCountry": "DE"
        },
        "openingHoursSpecification": [
          { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], "opens": "07:00", "closes": "20:00" }
        ],
        "hasMap": "https://maps.google.com/?q=Hauptstraße+26,+50126+Bergheim"
      }
    });
    document.head.appendChild(ldScript);

    return () => {
      const ld = document.querySelector('script[data-kontakt-ld]');
      if (ld) ld.remove();
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setError(false);
    const fd = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formName: "kontakt_seite",
          name: fd.get("name"),
          phone: fd.get("phone"),
          email: fd.get("email"),
          message: `Service: ${service || "Nicht angegeben"}\nOrt: ${fd.get("ort") || "Nicht angegeben"}\n\n${fd.get("message")}`,
        }),
      });
      if (!res.ok) throw new Error("Server error");
      setSent(true);
      trackConversion("kontakt_seite", {
        phone: fd.get("phone") as string,
        email: fd.get("email") as string,
      });
    } catch {
      setError(true);
    }
    setSending(false);
  };

  return (
    <PageLayout>

      {/* Hero */}
      <section className="relative pt-24 pb-10 sm:pt-32 sm:pb-14 bg-gradient-to-b from-primary/5 via-background to-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium mb-6">
            Kostenlos & unverbindlich
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight mb-4" data-testid="text-kontakt-title">
            Kostenloses Angebot anfordern
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-6" data-testid="text-kontakt-subtitle">
            Beschreiben Sie uns Ihr Anliegen und erhalten Sie innerhalb von 24 Stunden ein unverbindliches Festpreisangebot. Keine versteckten Kosten.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span>Kostenlose Besichtigung</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span>Festpreisgarantie</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span>Antwort in 24h</span>
            </div>
          </div>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="py-10 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-5 gap-8 items-start">

            <div className="lg:col-span-3">
              <motion.div {...fadeIn}>
                <Card className="p-6 sm:p-8" data-testid="card-kontakt-form">
                  <h2 className="text-xl font-bold text-foreground mb-1" data-testid="text-form-heading">
                    Ihre Anfrage
                  </h2>
                  <p className="text-sm text-muted-foreground mb-6">
                    Füllen Sie das Formular aus — wir melden uns schnellstmöglich bei Ihnen.
                  </p>

                  {sent ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                      data-testid="kontakt-success"
                    >
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2">Vielen Dank für Ihre Anfrage!</h3>
                      <p className="text-muted-foreground max-w-sm mx-auto">
                        Wir haben Ihre Nachricht erhalten und melden uns innerhalb von 24 Stunden bei Ihnen — meistens sogar noch am selben Tag.
                      </p>
                      <div className="mt-6 flex flex-wrap justify-center gap-3">
                        <a href="tel:+4922715880940" style={{ textDecoration: "none" }}>
                          <Button variant="outline" size="sm" data-testid="link-success-call">
                            <Phone className="w-4 h-4 mr-2" />
                            Direkt anrufen
                          </Button>
                        </a>
                        <a href="https://wa.me/4915258177453" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                          <Button variant="outline" size="sm" data-testid="link-success-whatsapp">
                            <SiWhatsapp className="w-4 h-4 mr-2" />
                            WhatsApp
                          </Button>
                        </a>
                      </div>
                    </motion.div>
                  ) : (
                    <form className="space-y-4" onSubmit={handleSubmit} data-testid="form-kontakt">
                      {error && (
                        <div className="p-3 rounded-md bg-destructive/10 text-destructive text-sm" role="alert" aria-live="assertive" data-testid="text-kontakt-error">
                          Leider ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder rufen Sie uns direkt an.
                        </div>
                      )}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="kontakt-name" className="text-sm text-muted-foreground mb-1.5 block">Name *</Label>
                          <Input id="kontakt-name" name="name" placeholder="Ihr vollständiger Name" required data-testid="input-kontakt-name" />
                        </div>
                        <div>
                          <Label htmlFor="kontakt-phone" className="text-sm text-muted-foreground mb-1.5 block">Telefon *</Label>
                          <PhoneInput id="kontakt-phone" name="phone" placeholder="Telefonnummer" required data-testid="input-kontakt-phone" />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="kontakt-email" className="text-sm text-muted-foreground mb-1.5 block">E-Mail *</Label>
                        <Input id="kontakt-email" name="email" type="email" placeholder="Ihre E-Mail-Adresse" required data-testid="input-kontakt-email" />
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="kontakt-service" className="text-sm text-muted-foreground mb-1.5 block">Gewünschte Leistung</Label>
                          <Select value={service} onValueChange={setService}>
                            <SelectTrigger id="kontakt-service" data-testid="select-kontakt-service">
                              <SelectValue placeholder="Leistung wählen" />
                            </SelectTrigger>
                            <SelectContent>
                              {services.map((s) => (
                                <SelectItem key={s} value={s}>{s}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="kontakt-ort" className="text-sm text-muted-foreground mb-1.5 block">Ort / PLZ</Label>
                          <Input id="kontakt-ort" name="ort" placeholder="z.B. 50126 Bergheim" data-testid="input-kontakt-ort" />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="kontakt-message" className="text-sm text-muted-foreground mb-1.5 block">Ihre Nachricht *</Label>
                        <Textarea
                          id="kontakt-message"
                          name="message"
                          placeholder="Beschreiben Sie Ihr Anliegen: Was soll entrümpelt/umgezogen werden? Wie groß ist die Fläche? Gibt es Besonderheiten?"
                          rows={5}
                          className="resize-none"
                          required
                          data-testid="input-kontakt-message"
                        />
                      </div>

                      <Button type="submit" className="w-full" size="lg" disabled={sending} data-testid="button-kontakt-submit">
                        <Send className="w-4 h-4 mr-2" />
                        {sending ? "Wird gesendet..." : "Kostenloses Angebot anfordern"}
                      </Button>

                      <p className="text-xs text-center text-muted-foreground">
                        Mit dem Absenden stimmen Sie unserer{" "}
                        <a href="/datenschutz" className="text-primary hover:underline">Datenschutzerklärung</a> zu.
                        Ihre Daten werden vertraulich behandelt.
                      </p>
                    </form>
                  )}
                </Card>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-4">
              <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.1 }}>
                <Card className="p-5" data-testid="card-kontakt-phone">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Lieber telefonisch?</p>
                      <a href="tel:+4922715880940" className="font-bold text-foreground hover:text-primary transition-colors" data-testid="link-kontakt-phone">
                        02271 / 5880940
                      </a>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 shrink-0" /> Mo–Sa 07:00–20:00 Uhr
                  </p>
                </Card>
              </motion.div>

              <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.15 }}>
                <Card className="p-5" data-testid="card-kontakt-whatsapp">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-[#25D366]/10 flex items-center justify-center shrink-0">
                      <SiWhatsapp className="w-5 h-5 text-[#25D366]" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Per WhatsApp</p>
                      <a href="https://wa.me/4915258177453" target="_blank" rel="noopener noreferrer" className="font-bold text-foreground hover:text-[#25D366] transition-colors" data-testid="link-kontakt-whatsapp">
                        Jetzt schreiben
                      </a>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">Auch abends & am Wochenende</p>
                </Card>
              </motion.div>

              <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.2 }}>
                <Card className="p-5" data-testid="card-kontakt-email">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Per E-Mail</p>
                      <a href="mailto:info@stressfreientruempelungen.de" className="font-bold text-sm text-foreground hover:text-primary transition-colors" data-testid="link-kontakt-email">
                        info@stressfreientruempel<wbr />ungen.de
                      </a>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.25 }}>
                <Card className="p-5" data-testid="card-kontakt-adresse">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-0.5">Unser Standort</p>
                      <p className="font-bold text-sm text-foreground">Hauptstraße 26</p>
                      <p className="text-sm text-muted-foreground">50126 Bergheim</p>
                      <a
                        href="https://maps.google.com/?q=Hauptstraße+26,+50126+Bergheim"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-primary hover:underline mt-1 inline-block"
                        data-testid="link-kontakt-maps"
                      >
                        In Google Maps öffnen →
                      </a>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.3 }}>
                <Card className="p-5 bg-primary/5 border-primary/20" data-testid="card-kontakt-bewertung">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-accent fill-current" />
                    ))}
                    <span className="text-sm font-bold text-foreground ml-1.5">4,9 / 5</span>
                  </div>
                  <p className="text-sm font-medium text-foreground mb-1">84 zufriedene Kunden</p>
                  <p className="text-xs text-muted-foreground">
                    Bestbewertet auf Google im Rhein-Erft-Kreis.
                  </p>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Ablauf */}
      <section className="py-12 sm:py-16 bg-muted/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeIn}>
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3" data-testid="text-ablauf-heading">
                So läuft Ihre Anfrage ab
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
                Von der ersten Nachricht bis zur besenreinen Übergabe — transparent und ohne Überraschungen.
              </p>
            </div>
            <div className="grid sm:grid-cols-5 gap-4 relative">
              {steps.map((s, i) => (
                <div key={i} className="flex flex-col items-center text-center" data-testid={`card-step-${i}`}>
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-3 shrink-0 shadow-md">
                    <s.icon className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">Schritt {s.step}</p>
                  <h3 className="font-semibold text-foreground text-sm mb-1">{s.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <a href="tel:+4922715880940" style={{ textDecoration: "none" }}>
                <Button size="lg" data-testid="button-ablauf-call">
                  <Phone className="w-4 h-4 mr-2" />
                  Jetzt Termin vereinbaren
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust */}
      <section className="py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeIn}>
            <h2 className="text-2xl font-bold text-foreground text-center mb-8" data-testid="text-vorteile-heading">
              Warum Kunden uns vertrauen
            </h2>
            <div className="grid sm:grid-cols-4 gap-5">
              <Card className="p-5 text-center">
                <Zap className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground text-sm mb-1">Schnelle Reaktion</h3>
                <p className="text-xs text-muted-foreground">Antwort innerhalb von 24 Stunden, oft am selben Tag.</p>
              </Card>
              <Card className="p-5 text-center">
                <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground text-sm mb-1">Festpreisgarantie</h3>
                <p className="text-xs text-muted-foreground">Der vereinbarte Preis gilt — keine Überraschungen.</p>
              </Card>
              <Card className="p-5 text-center">
                <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground text-sm mb-1">Erfahrenes Team</h3>
                <p className="text-xs text-muted-foreground">Geschulte Mitarbeiter mit jahrelanger Erfahrung.</p>
              </Card>
              <Card className="p-5 text-center">
                <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground text-sm mb-1">Flexible Termine</h3>
                <p className="text-xs text-muted-foreground">Mo–Sa verfügbar. Auch kurzfristige Einsätze möglich.</p>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-12 sm:py-16 bg-muted/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeIn}>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-2" data-testid="text-bewertungen-heading">
                Das sagen unsere Kunden
              </h2>
              <p className="text-sm text-muted-foreground">84 Bewertungen · Ø 4,9 Sterne auf Google</p>
            </div>
            <div className="grid sm:grid-cols-3 gap-5">
              {reviews.map((review, i) => (
                <Card key={i} className="p-5" data-testid={`card-review-${i}`}>
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(review.stars)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 text-accent fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mb-3 italic">"{review.text}"</p>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{review.name}</p>
                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {review.location}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeIn}>
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4" data-testid="text-standort-heading">
                  Unser Standort in Bergheim
                </h2>
                <p className="text-muted-foreground mb-5 text-sm sm:text-base">
                  Wir sind im gesamten Rhein-Erft-Kreis und der Region NRW für Sie im Einsatz. Von unserem Hauptsitz in Bergheim aus erreichen wir Köln, Düsseldorf, Aachen, Bonn und alle umliegenden Städte schnell und zuverlässig.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-sm">
                    <MapPin className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-foreground font-medium">Hauptstraße 26, 50126 Bergheim</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Phone className="w-4 h-4 text-primary shrink-0" />
                    <a href="tel:+4922715880940" className="text-foreground hover:text-primary transition-colors font-medium" data-testid="link-standort-phone">02271 / 5880940</a>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Mail className="w-4 h-4 text-primary shrink-0" />
                    <a href="mailto:info@stressfreientruempelungen.de" className="text-foreground hover:text-primary transition-colors font-medium" data-testid="link-standort-email">info@stressfreientruempelungen.de</a>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Clock className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-foreground">Montag – Samstag, 07:00 – 20:00 Uhr</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                  {["Bergheim", "Kerpen", "Bedburg", "Pulheim", "Frechen", "Hürth", "Erftstadt", "Köln", "Düsseldorf"].map(city => (
                    <span key={city} className="px-2.5 py-1 rounded-full bg-muted font-medium">{city}</span>
                  ))}
                  <Link href="/standorte" className="px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium hover:bg-primary/20 transition-colors" style={{ textDecoration: "none" }} data-testid="link-alle-standorte">
                    Alle Standorte →
                  </Link>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden border border-border shadow-sm" style={{ height: 360 }}>
                <iframe
                  title="Stressfrei Entrümpelungen & Umzüge – Standort Bergheim"
                  src="https://maps.google.com/maps?q=Hauptstra%C3%9Fe+26,+50126+Bergheim,+Deutschland&output=embed&z=15"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  aria-label="Google Maps: Stressfrei Entrümpelungen & Umzüge, Hauptstraße 26, 50126 Bergheim"
                  data-testid="iframe-google-maps"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-16 bg-muted/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeIn}>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-2" data-testid="text-faq-kontakt-heading">
                Häufige Fragen zum Kontakt & Ablauf
              </h2>
              <p className="text-sm text-muted-foreground">Alle Antworten zu Angebot, Besichtigung und Buchung.</p>
            </div>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <FaqItem key={i} item={faq} index={i} />
              ))}
            </div>
            <p className="text-center text-sm text-muted-foreground mt-6">
              Weitere Fragen?{" "}
              <Link href="/faq" className="text-primary hover:underline" style={{ textDecoration: "none" }} data-testid="link-faq-alle">
                Alle FAQ ansehen →
              </Link>
            </p>
          </motion.div>
        </div>
      </section>

    </PageLayout>
  );
}
