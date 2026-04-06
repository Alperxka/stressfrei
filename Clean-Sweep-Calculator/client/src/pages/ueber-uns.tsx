import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PhoneInput } from "@/components/phone-input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { PageLayout, PageHero, CTASection } from "@/components/layout";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  Star,
  Send,
  Users,
  Award,
  CheckCircle2,
  MapPin,
  Quote,
} from "lucide-react";

function IconWhatsapp({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.555 4.118 1.528 5.847L0 24l6.335-1.652A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.013-1.376l-.36-.214-3.732.973.998-3.643-.235-.374A9.818 9.818 0 0112 2.182c5.427 0 9.818 4.391 9.818 9.818S17.427 21.818 12 21.818z"/>
    </svg>
  );
}

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const highlights = [
  { icon: Award, label: "5.0 Sterne auf Google" },
  { icon: Star, label: "90+ Bewertungen" },
  { icon: CheckCircle2, label: "500+ Aufträge" },
  { icon: MapPin, label: "NRW-weit tätig" },
];

export default function UeberUnsPage() {
  useEffect(() => {
    document.title = "Über uns | Stressfrei Entrümpelungen & Umzüge – Ihr Team im Rhein-Erft-Kreis";
    let _canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!_canonical) { _canonical = document.createElement("link"); _canonical.setAttribute("rel", "canonical"); document.head.appendChild(_canonical); }
    _canonical.setAttribute("href", "https://stressfreientruempelungen.de/ueber-uns");
    const _setOgMeta = (prop: string, val: string) => { let m = document.querySelector(`meta[property="${prop}"]`) as HTMLMetaElement | null; if (!m) { m = document.createElement("meta"); m.setAttribute("property", prop); document.head.appendChild(m); } m.setAttribute("content", val); };
    _setOgMeta("og:url", "https://stressfreientruempelungen.de/ueber-uns");
    _setOgMeta("og:image", "https://stressfreientruempelungen.de/images/stressfrei-entruempelungen-team-rhein-erft-kreis.webp");
    _setOgMeta("og:locale", "de_DE");
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Lernen Sie das Team von Stressfrei Entrümpelungen & Umzüge kennen. Erfahrene Entrümpler aus dem Rhein-Erft-Kreis mit über 500 zufriedenen Kunden.");
    }
  }, []);

  return (
    <PageLayout>
      <PageHero
        title="Über uns"
        subtitle="Lernen Sie das Team hinter Stressfrei Entrümpelungen & Umzüge kennen - ehrlich, fair und zuverlässig."
        highlight="Stressfrei Entrümpelungen & Umzüge"
      />

      <section className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4" data-testid="text-about-story-title">
                Unsere Geschichte
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Die Idee zur Gründung von Stressfrei Entrümpelungen & Umzüge kam Oskar und Alper,
                als Oskar das Haus seines Großvaters entrümpeln musste. Während dieser Zeit erlebte
                er, wie mehrere unseriöse Anbieter das Haus betraten, teure Angebote machten und
                letztlich eine enttäuschende Arbeit leisteten.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Diese Erfahrung hinterließ einen bleibenden Eindruck - und die Entscheidung, es
                anders und besser zu machen. Heute steht unser Name für ehrliche Arbeit, faire
                Preise und echten Kundenservice.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Unser Ziel ist es, jedem Kunden eine stressfreie Erfahrung zu bieten - vom ersten
                Anruf bis zur besenreinen Übergabe. Wir behandeln jedes Projekt, als wäre es unser
                eigenes, und legen größten Wert auf Sorgfalt, Pünktlichkeit und Transparenz.
              </p>
            </motion.div>
            <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.2 }}>
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/10 rounded-2xl blur-2xl" />
                <img
                  src="/images/stressfrei-entruempelungen-team-rhein-erft-kreis.webp"
                  alt="Das Team von Stressfrei Entrümpelungen"
                  className="relative w-full rounded-2xl shadow-lg object-cover"
                  width={1200}
                  height={575}
                  loading="lazy"
                  data-testid="img-team"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 border-y bg-card/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {highlights.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.label} className="text-center" {...fadeIn} transition={{ duration: 0.5, delay: i * 0.1 }}>
                  <Icon className="w-5 h-5 text-primary mx-auto mb-2" />
                  <div className="text-sm font-medium text-foreground" data-testid={`text-highlight-${i}`}>{item.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div {...fadeIn}>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4" data-testid="text-team-title">
                Unser Team
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Unser engagiertes Team besteht aus erfahrenen Fachkräften, die mit Leidenschaft
                und Sorgfalt arbeiten. Jeder Mitarbeiter wird sorgfältig ausgewählt und geschult,
                um Ihnen den bestmöglichen Service zu bieten.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">O</span>
                  </div>
                  <div>
                    <div className="font-medium text-foreground" data-testid="text-founder-oskar">Oskar</div>
                    <div className="text-sm text-muted-foreground">Gründer & Geschäftsführer</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">A</span>
                  </div>
                  <div>
                    <div className="font-medium text-foreground" data-testid="text-founder-alper">Alper</div>
                    <div className="text-sm text-muted-foreground">Gründer & Geschäftsführer</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.2 }}>
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2" data-testid="text-contact-form-title">
                  Kontaktieren Sie uns
                </h3>
                <div className="flex gap-3 mb-5">
                  <a href="tel:+4922715880940" className="flex-1">
                    <button className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg border border-primary text-primary text-sm font-semibold hover:bg-primary/5 transition-colors">
                      <Phone className="w-4 h-4" />
                      Anrufen
                    </button>
                  </a>
                  <a href="https://wa.me/4915258177453?text=Hallo%2C%20ich%20habe%20eine%20Frage%20und%20m%C3%B6chte%20ein%20Angebot%20anfragen." target="_blank" rel="noopener noreferrer" className="flex-1">
                    <button className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg border border-[#25D366] text-[#25D366] text-sm font-semibold hover:bg-[#25D366]/5 transition-colors">
                      <IconWhatsapp className="w-4 h-4" />
                      WhatsApp
                    </button>
                  </a>
                </div>
                <form className="space-y-4" data-testid="form-contact">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Ihr Name" required data-testid="input-contact-name" />
                  </div>
                  <div>
                    <Label htmlFor="email">E-Mail</Label>
                    <Input id="email" type="email" placeholder="Ihre E-Mail-Adresse" required data-testid="input-contact-email" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Telefon</Label>
                    <PhoneInput name="phone" placeholder="Telefonnummer" required data-testid="input-contact-phone" />
                  </div>
                  <div>
                    <Label htmlFor="message">Nachricht</Label>
                    <Textarea id="message" placeholder="Ihre Nachricht" rows={4} required data-testid="input-contact-message" />
                  </div>
                  <Button type="submit" className="w-full" data-testid="button-contact-submit">
                    <Send className="w-4 h-4 mr-2" />
                    Nachricht senden
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-card/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div className="text-center mb-14" {...fadeIn}>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3" data-testid="text-reviews-title">
              Was unsere Kunden sagen
            </h2>
            <p className="text-muted-foreground">Echte Bewertungen von zufriedenen Kunden aus dem Rhein-Erft-Kreis.</p>
          </motion.div>

          <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.1 }}>
            <Card className="max-w-md mx-auto p-6 mb-12 text-center" data-testid="card-google-badge">
              <div className="flex items-center justify-center gap-3 mb-3">
                <img loading="lazy" src="/images/google-icon.svg" alt="Google" width="32" height="32" className="h-8" />
                <div className="text-left">
                  <p className="text-sm font-semibold text-foreground">Google Bewertungen</p>
                  <div className="flex items-center gap-1.5">
                    <span className="text-2xl font-bold text-foreground">5.0</span>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">Basierend auf über 90 Bewertungen</p>
            </Card>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Maria S.",
                location: "Bergheim",
                text: "Super nettes und zuverlässiges Team! Die Entrümpelung unserer Wohnung lief schnell und unkompliziert ab. Alles wurde besenrein hinterlassen. Absolut empfehlenswert!",
                date: "vor 2 Monaten",
              },
              {
                name: "Thomas K.",
                location: "Kerpen",
                text: "Wir haben Stressfrei für den Umzug meiner Mutter ins Seniorenheim beauftragt. Das Team war einfühlsam und professionell. Auch bei der Antragsstellung für die Pflegekasse wurde uns geholfen.",
                date: "vor 3 Monaten",
              },
              {
                name: "Sandra L.",
                location: "Hürth",
                text: "Faire Preise und top Leistung! Die Haushaltsauflösung wurde termingerecht erledigt. Verwertbare Gegenstände wurden sogar angerechnet. Vielen Dank!",
                date: "vor 1 Monat",
              },
              {
                name: "Peter M.",
                location: "Frechen",
                text: "Von der Besichtigung bis zur besenreinen Übergabe alles perfekt. Keine versteckten Kosten, der Preis war fair und transparent. Gerne wieder!",
                date: "vor 2 Wochen",
              },
              {
                name: "Andrea W.",
                location: "Pulheim",
                text: "Unser Keller war komplett vollgestellt. Das Team hat alles professionell entrümpelt und entsorgt. Die Kommunikation war super und der Termin wurde eingehalten.",
                date: "vor 4 Monaten",
              },
              {
                name: "Michael R.",
                location: "Elsdorf",
                text: "Kann Stressfrei nur weiterempfehlen! Büroauflösung mit viel Sondermüll – alles fachgerecht entsorgt. Schnell, sauber und freundlich. Top-Service!",
                date: "vor 3 Wochen",
              },
            ].map((review, i) => (
              <motion.div key={i} {...fadeIn} transition={{ duration: 0.5, delay: i * 0.08 }}>
                <Card className="p-5 h-full flex flex-col" data-testid={`card-review-${i}`}>
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <span className="text-primary font-bold text-sm">{review.name.charAt(0)}</span>
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-foreground text-sm" data-testid={`text-reviewer-${i}`}>{review.name}</p>
                      <p className="text-xs text-muted-foreground">{review.location} · {review.date}</p>
                    </div>
                  </div>
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-3.5 h-3.5 text-amber-400 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-4 h-4 text-primary/30 mb-1" />
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{review.text}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </PageLayout>
  );
}
