import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageLayout, CTASection } from "@/components/layout";
import { Link } from "wouter";
import {
  Phone,
  CheckCircle2,
  ArrowRight,
  Star,
  ChevronDown,
  ChevronUp,
  BadgeCheck,
  Zap,
  Euro,
  ThumbsUp,
  Quote,
} from "lucide-react";
import { useState } from "react";
import { FadeIn } from "@/components/fade-in";

function IconWhatsapp({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.555 4.118 1.528 5.847L0 24l6.335-1.652A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.013-1.376l-.36-.214-3.732.973.998-3.643-.235-.374A9.818 9.818 0 0112 2.182c5.427 0 9.818 4.391 9.818 9.818S17.427 21.818 12 21.818z"/>
    </svg>
  );
}

const DEFAULT_REVIEWS = [
  { text: "Schnelle Terminvereinbarung, professionelle Durchführung — genau wie versprochen. Kein Stress, kein Ärger. Sehr empfehlenswert!", name: "Thomas K." },
  { text: "Fairer Festpreis, pünktliches Team, alles sauber hinterlassen. Keine versteckten Kosten. Gerne wieder!", name: "Sabine M." },
  { text: "Innerhalb von 2 Tagen Termin bekommen. Das Team war freundlich und extrem effizient. Absolut top!", name: "Andreas B." },
];

export interface ServiceDetailData {
  slug: string;
  pageName: string;
  title: string;
  subtitle: string;
  badge: string;
  heroImage: string;
  heroImageAlt: string;
  metaDescription: string;
  intro: string;
  benefits: { icon: React.ElementType; title: string; desc: string }[];
  ablauf: { step: string; title: string; desc: string }[];
  faqs: { question: string; answer: string }[];
  priceHint: string;
  relatedLinks?: { label: string; href: string }[];
  reviews?: { text: string; name: string }[];
  pricingRows?: { label: string; price: string; note?: string }[];
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-muted/50 transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span className="font-medium text-foreground text-sm pr-4">{question}</span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-primary shrink-0" />
        ) : (
          <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0" />
        )}
      </button>
      {open && (
        <div className="px-5 pb-4">
          <p className="text-sm text-muted-foreground leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

function ServiceQuickForm({ serviceName }: { serviceName: string }) {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  if (sent) {
    return (
      <div className="text-center py-6">
        <CheckCircle2 className="w-10 h-10 text-primary mx-auto mb-3" />
        <p className="font-semibold text-foreground">Anfrage erhalten!</p>
        <p className="text-sm text-muted-foreground mt-1">Wir melden uns innerhalb von 24h bei Ihnen.</p>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const fd = new FormData(e.currentTarget);
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formName: "service_inline_quick",
          name: fd.get("name"),
          phone: fd.get("phone"),
          message: `Schnellanfrage: ${serviceName}`,
        }),
      });
    } catch {}
    setSent(true);
    setSending(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3 mt-2">
      <div className="grid sm:grid-cols-2 gap-3">
        <input
          name="name"
          placeholder="Ihr Name *"
          required
          className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
        />
        <input
          name="phone"
          type="tel"
          placeholder="Telefonnummer *"
          required
          className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
        />
      </div>
      <Button type="submit" size="lg" className="w-full" disabled={sending}>
        {sending ? "Wird gesendet…" : "Kostenloses Angebot anfordern →"}
      </Button>
      <p className="text-xs text-center text-muted-foreground">
        Kostenlos & unverbindlich · Antwort in 24h · Kein Spam
      </p>
    </form>
  );
}

export default function ServiceDetailPage({ data }: { data: ServiceDetailData }) {
  const reviews = data.reviews ?? DEFAULT_REVIEWS;

  return (
    <PageLayout pageName={data.pageName}>
      {/* Hero */}
      <section className="relative pt-28 pb-0 sm:pt-36 bg-gradient-to-b from-primary/5 via-background to-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center pb-16 sm:pb-20">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium mb-5">
                {data.badge}
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight mb-4">
                {data.title}
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
                {data.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="tel:+4922715880940" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full sm:w-auto">
                    <Phone className="w-4 h-4 mr-2" />
                    02271 / 5880940
                  </Button>
                </a>
                <a href="https://wa.me/4915258177453?text=Hallo%2C%20ich%20m%C3%B6chte%20ein%20kostenloses%20Angebot%20anfragen." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-[#25D366] text-[#25D366] hover:bg-[#25D366]/10">
                    <IconWhatsapp className="w-4 h-4 mr-2" />
                    Per WhatsApp anfragen
                  </Button>
                </a>
              </div>
              <div className="flex flex-wrap gap-x-5 gap-y-2 mt-6">
                {["Festpreisgarantie", "Kostenlose Besichtigung", "Vollversichert"].map((item) => (
                  <div key={item} className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delayMs={150}>
              <div className="rounded-2xl overflow-hidden shadow-xl aspect-video bg-muted">
                <img
                  src={data.heroImage}
                  alt={data.heroImageAlt}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Trust Bar ── */}
      <section className="border-b border-border/50 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                ))}
              </div>
              <span className="text-sm font-semibold text-foreground">5,0</span>
              <span className="text-sm text-muted-foreground">· 90+ Google-Bewertungen</span>
            </div>
            <div className="hidden sm:block w-px h-5 bg-border" />
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <BadgeCheck className="w-4 h-4 text-primary shrink-0" />
              <span>Versichert & legal</span>
            </div>
            <div className="hidden sm:block w-px h-5 bg-border" />
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Zap className="w-4 h-4 text-primary shrink-0" />
              <span>Termin in 24–48h</span>
            </div>
            <div className="hidden sm:block w-px h-5 bg-border" />
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Euro className="w-4 h-4 text-primary shrink-0" />
              <span>Kostenlose Besichtigung</span>
            </div>
            <div className="hidden sm:block w-px h-5 bg-border" />
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <ThumbsUp className="w-4 h-4 text-primary shrink-0" />
              <span>Festpreis ohne Nachzahlung</span>
            </div>
            <div className="hidden sm:block w-px h-5 bg-border" />
            <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <Euro className="w-4 h-4 text-primary shrink-0" />
              <span>ab 299 €</span>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 sm:py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeIn className="text-base sm:text-lg text-muted-foreground leading-relaxed text-center">
            {data.intro}
          </FadeIn>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeIn className="text-center mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3">
              Ihre Vorteile
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Warum Stressfrei wählen?
            </h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <FadeIn key={b.title} delayMs={i * 80}>
                  <Card className="p-6 h-full hover:shadow-md transition-shadow">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{b.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                  </Card>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Preistabelle (optional) ── */}
      {data.pricingRows && data.pricingRows.length > 0 && (
        <section className="py-16 sm:py-20 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <FadeIn className="text-center mb-10">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3">
                Transparente Preise
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                Typische Preisbeispiele
              </h2>
              <p className="text-muted-foreground mt-3 text-sm">
                Alle Preise als Festpreis · Kostenlose Besichtigung vor Ort · Keine versteckten Kosten
              </p>
            </FadeIn>
            <FadeIn>
              <div className="rounded-2xl border border-border overflow-hidden bg-background shadow-sm">
                <div className="grid grid-cols-3 bg-primary/5 border-b border-border px-5 py-3">
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Leistung</span>
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide text-center">Preis</span>
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide text-right">Hinweis</span>
                </div>
                {data.pricingRows.map((row, i) => (
                  <div
                    key={row.label}
                    className={`grid grid-cols-3 px-5 py-4 items-center gap-2 ${i < data.pricingRows!.length - 1 ? "border-b border-border/50" : ""}`}
                  >
                    <span className="text-sm font-medium text-foreground">{row.label}</span>
                    <span className="text-sm font-bold text-primary text-center">{row.price}</span>
                    <span className="text-xs text-muted-foreground text-right">{row.note ?? "Festpreis"}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-center text-muted-foreground mt-4">
                * Endgültiger Preis nach kostenloser Besichtigung. Günstigerer Preis durch Wertanrechnung möglich.
              </p>
            </FadeIn>
            <FadeIn className="mt-8 text-center">
              <p className="text-muted-foreground text-sm mb-4">Ihr Auftrag passt nicht in die Tabelle? Kein Problem — wir erstellen Ihnen ein individuelles Angebot.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="tel:+4922715880940">
                  <Button size="lg">
                    <Phone className="w-4 h-4 mr-2" />
                    Jetzt anrufen
                  </Button>
                </a>
                <a href="https://wa.me/4915258177453?text=Hallo%2C%20ich%20m%C3%B6chte%20ein%20Angebot%20anfragen." target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="border-[#25D366] text-[#25D366] hover:bg-[#25D366]/10">
                    <IconWhatsapp className="w-4 h-4 mr-2" />
                    Per WhatsApp anfragen
                  </Button>
                </a>
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {/* Ablauf */}
      <section className={`py-16 sm:py-24 ${data.pricingRows ? "" : "bg-muted/30"}`}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <FadeIn className="text-center mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3">
              So läuft es ab
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Einfach, transparent, stressfrei
            </h2>
          </FadeIn>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden sm:block" />
            <div className="space-y-8">
              {data.ablauf.map((step, i) => (
                <FadeIn key={step.step} className="flex gap-5 items-start" delayMs={i * 100}>
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm shrink-0 relative z-10">
                    {step.step}
                  </div>
                  <div className="pt-2">
                    <h3 className="font-semibold text-foreground mb-1">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Kundenbewertungen ── */}
      <section className={`py-16 sm:py-20 ${data.pricingRows ? "bg-muted/30" : ""}`}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <FadeIn className="text-center mb-10">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3">
              Kundenstimmen
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Was unsere Kunden sagen
            </h2>
            <div className="flex items-center justify-center gap-1 mt-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
              ))}
              <span className="ml-2 text-sm text-muted-foreground font-medium">5,0 · 90+ Google-Bewertungen</span>
            </div>
          </FadeIn>
          <div className="grid sm:grid-cols-3 gap-5">
            {reviews.map((review, i) => (
              <FadeIn key={review.name} delayMs={i * 100}>
                <Card className="p-6 h-full flex flex-col">
                  <div className="flex items-center gap-0.5 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 text-amber-400 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-primary/30 mb-2" />
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1 italic">
                    "{review.text}"
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">
                      {review.name.charAt(0)}
                    </div>
                    <span className="text-sm font-semibold text-foreground">{review.name}</span>
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Inline-Anfrageformular + Preis-CTA ── */}
      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <FadeIn className="rounded-2xl bg-primary/5 border border-primary/20 p-6 sm:p-10">
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
              ))}
              <span className="ml-2 text-sm text-muted-foreground">5,0 · 90+ Google Bewertungen</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2 text-center">
              Jetzt kostenloses Angebot anfordern
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base mb-1 text-center">
              {data.priceHint}
            </p>
            <p className="text-xs text-muted-foreground mb-6 text-center">
              Kostenlose Besichtigung · Festpreis · Keine versteckten Kosten
            </p>

            <ServiceQuickForm serviceName={data.pageName} />

            <div className="mt-5 flex items-center gap-3">
              <div className="flex-1 h-px bg-border" />
              <span className="text-xs text-muted-foreground">oder direkt</span>
              <div className="flex-1 h-px bg-border" />
            </div>
            <div className="mt-4 flex flex-col sm:flex-row gap-3">
              <a href="tel:+4922715880940" className="flex-1">
                <Button size="default" variant="outline" className="w-full">
                  <Phone className="w-4 h-4 mr-2" />
                  02271 / 5880940
                </Button>
              </a>
              <a href="https://wa.me/4915258177453?text=Hallo%2C%20ich%20m%C3%B6chte%20ein%20kostenloses%20Angebot%20anfragen." target="_blank" rel="noopener noreferrer" className="flex-1">
                <Button size="default" variant="outline" className="w-full border-[#25D366] text-[#25D366] hover:bg-[#25D366]/10">
                  <IconWhatsapp className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <FadeIn className="text-center mb-10">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3">
              FAQ
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Häufig gestellte Fragen
            </h2>
          </FadeIn>
          <div className="space-y-3">
            {data.faqs.map((faq) => (
              <FadeIn key={faq.question}>
                <FAQItem question={faq.question} answer={faq.answer} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      {data.relatedLinks && data.relatedLinks.length > 0 && (
        <section className="py-12 bg-muted/30">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <FadeIn>
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-4">
                Weitere Leistungen
              </h3>
              <div className="flex flex-wrap gap-3">
                {data.relatedLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    style={{ textDecoration: "none" }}
                  >
                    <Button variant="outline" size="sm" className="gap-1.5">
                      {link.label} <ArrowRight className="w-3.5 h-3.5" />
                    </Button>
                  </Link>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      <CTASection />
    </PageLayout>
  );
}
