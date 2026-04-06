import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { PageLayout, PageHero, CTASection, BlogArticleCTA } from "@/components/layout";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  AlertTriangle,
  ArrowLeft,
  CheckCircle2,
  ClipboardList,
  Heart,
  Home,
  Phone,
  Shield,
  Trash2,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const phasen = [
  {
    icon: ClipboardList,
    title: "Phase 1: Erstgespräch & Besichtigung",
    text: "Wir kommen diskret zu Ihnen und besichtigen die Räume ohne Wertung. Sie erhalten ein unverbindliches Festpreisangebot — ohne Verpflichtung.",
  },
  {
    icon: Heart,
    title: "Phase 2: Gemeinsame Planung",
    text: "Wir klären, welche Gegenstände wichtig sind, was entsorgt werden kann und welche Wertsachen gesichert werden sollen. Ihr Wunsch steht im Mittelpunkt.",
  },
  {
    icon: Trash2,
    title: "Phase 3: Professionelle Räumung",
    text: "Unser erfahrenes Team räumt strukturiert — von oben nach unten, Raum für Raum. Wir trennen sorgfältig: Sperrmüll, Elektroschrott, Wertstoffe, Sondermüll.",
  },
  {
    icon: Shield,
    title: "Phase 4: Besenreine Übergabe",
    text: "Nach der Räumung übergeben wir die Immobilie besenrein. Auf Wunsch organisieren wir auch eine Grundreinigung oder Renovierungsvorbereitung.",
  },
];

const warnsignale = [
  "Gänge und Durchgänge sind zugestellt oder kaum begehbar",
  "Küche oder Sanitärräume kaum noch nutzbar",
  "Gerüche dringen nach außen (Nachbarbeschwerden)",
  "Schädlingsbefall oder Schimmelbildung sichtbar",
  "Kündigung der Wohnung oder Räumungsklage droht",
  "Bezahlung von Leistungen (z.B. Pflege) durch Gegenstände",
];

const faqs = [
  {
    q: "Was kostet eine Messie-Entrümpelung?",
    a: "Die Kosten hängen stark vom Grad der Vermüllung, der Wohnfläche und der Art des Mülls (Sondermüll, Biomüll, Elektroschrott) ab. Kleine Wohnungen beginnen ab ca. 800–1.500 €, stark verwahrloste Häuser können 3.000–8.000 € kosten. Nach der kostenlosen Besichtigung erhalten Sie einen verbindlichen Festpreis.",
  },
  {
    q: "Wie diskret gehen Sie vor?",
    a: "Sehr diskret. Wir kommen mit neutralen Fahrzeugen, unsere Mitarbeiter tragen keine auffällige Kleidung und wir sprechen mit niemandem über den Auftrag. Die Würde und Privatsphäre des Betroffenen steht bei uns immer im Vordergrund.",
  },
  {
    q: "Können Angehörige eine Messie-Wohnung in Auftrag geben?",
    a: "Ja, Angehörige oder Betreuer können uns beauftragen. Wenn der Betroffene selbst nicht einwilligen kann (z.B. Demenz), benötigen wir eine entsprechende Vollmacht oder gerichtliche Betreuungsurkunde.",
  },
  {
    q: "Kann die Pflegekasse oder das Sozialamt die Kosten übernehmen?",
    a: "In manchen Fällen ja. Bei Pflegebedürftigkeit und wenn die Wohnung aus gesundheitlichen Gründen geräumt werden muss, können Pflegekasse oder Sozialamt Zuschüsse leisten. Wir stellen auf Wunsch entsprechende Kostenvoranschläge und Rechnungen aus.",
  },
  {
    q: "Wie lange dauert eine Messie-Entrümpelung?",
    a: "Je nach Ausmaß: Ein Zimmer kann in wenigen Stunden geräumt werden. Eine vollständig verwahrloste Wohnung (70 m², starker Füllgrad) benötigt in der Regel 1–3 Tage mit einem 3–5-köpfigen Team.",
  },
];

export default function MessieEntruempelungPage() {
  useEffect(() => {
    document.title = "Messie Entrümpelung NRW | Diskret & Professionell | Rhein-Erft-Kreis";

    const setMeta = (name: string, content: string, prop?: boolean) => {
      const sel = prop ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let el = document.querySelector(sel) as HTMLMetaElement | null;
      if (!el) { el = document.createElement("meta"); prop ? el.setAttribute("property", name) : el.setAttribute("name", name); document.head.appendChild(el); }
      el.content = content;
    };
    const desc = "Messie Wohnung professionell und diskret räumen im Rhein-Erft-Kreis & NRW. Erfahrenes Team, Festpreis, keine Wertung. ☎ 02271 / 5880940";
    setMeta("description", desc);
    setMeta("robots", "index, follow");
    setMeta("og:title", "Messie Entrümpelung NRW | Diskret & Professionell", true);
    setMeta("og:description", desc, true);
    setMeta("og:url", "https://stressfreientruempelungen.de/messie-entruempelung-nrw", true);
    setMeta("og:type", "article", true);
    setMeta("og:image", "https://stressfreientruempelungen.de/images/og-image.jpg", true);
    setMeta("og:image:width", "1200", true);
    setMeta("og:image:height", "630", true);
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", "Messie Entrümpelung NRW | Diskret & Professionell");
    setMeta("twitter:description", desc);

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) { canonical = document.createElement("link"); canonical.rel = "canonical"; document.head.appendChild(canonical); }
    canonical.href = "https://stressfreientruempelungen.de/messie-entruempelung-nrw";

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    };
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Messie Entrümpelung NRW: Professionelle & diskrete Hilfe",
      description: desc,
      url: "https://stressfreientruempelungen.de/messie-entruempelung-nrw",
      author: { "@type": "Organization", name: "Stressfrei Entrümpelungen & Umzüge" },
      publisher: { "@type": "Organization", name: "Stressfrei Entrümpelungen & Umzüge", url: "https://stressfreientruempelungen.de" },
      inLanguage: "de",
    };
    [faqSchema, articleSchema].forEach((schema, i) => {
      const id = `messie-schema-${i}`;
      let el = document.getElementById(id) as HTMLScriptElement | null;
      if (!el) { el = document.createElement("script"); el.type = "application/ld+json"; el.id = id; document.head.appendChild(el); }
      el.textContent = JSON.stringify(schema);
    });
    return () => { [0, 1].forEach(i => document.getElementById(`messie-schema-${i}`)?.remove()); };
  }, []);

  return (
    <PageLayout>
      <PageHero
        title="Messie Entrümpelung"
        subtitle="Professionell, diskret & ohne Wertung — Rhein-Erft-Kreis & NRW"
        highlight="Messie"
      >
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 mt-6 justify-center items-center">
          <Button size="lg" asChild className="w-full sm:w-auto" data-testid="button-hero-call">
            <a href="tel:+4922715880940"><Phone className="w-4 h-4 mr-2" /> 02271 / 5880940</a>
          </Button>
          <Button size="lg" variant="outline" asChild className="w-full sm:w-auto" data-testid="button-hero-whatsapp">
            <a href="https://wa.me/4915258177453" target="_blank" rel="noopener noreferrer">WhatsApp anfragen</a>
          </Button>
        </div>
      </PageHero>

      <nav aria-label="Brotkrumenpfad" className="bg-muted/30 border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-2">
          <ol className="flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
            <li><Link href="/">Startseite</Link></li><li>/</li>
            <li><Link href="/ratgeber">Ratgeber</Link></li><li>/</li>
            <li className="text-foreground font-medium">Messie Entrümpelung</li>
          </ol>
        </div>
      </nav>

      {/* Intro */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeIn}>
            <Link href="/ratgeber" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors" data-testid="link-back-ratgeber">
              <ArrowLeft className="w-4 h-4" /> Zurück zum Ratgeber
            </Link>
            <h2 className="text-2xl font-bold text-foreground mb-4">Was ist eine Messie-Entrümpelung?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Als „Messie-Syndrom" bezeichnet man eine psychische Störung, bei der Betroffene Dinge nicht wegwerfen können und ihre Wohnung über Jahre mit Gegenständen, Müll oder Lebensmitteln füllen. Irgendwann wird professionelle Hilfe unumgänglich — sei es durch den Druck von Vermieter, Jugendamt oder Gesundheitsamt, oder weil Angehörige einschreiten.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Eine <strong>Messie-Entrümpelung</strong> erfordert mehr als das einfache Ausräumen: Es braucht Einfühlungsvermögen, Diskretion, körperliche Schutzausrüstung und Erfahrung im Umgang mit Sondermüll, Schimmel, Ungeziefer und biologischem Abfall.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Stressfrei Entrümpelungen & Umzüge führt seit Jahren Messie-Räumungen im <Link href="/entruempelung-rhein-erft-kreis" className="text-primary hover:underline">Rhein-Erft-Kreis</Link> und ganz NRW durch — professionell, ohne Wertung und auf Wunsch in neutralen Fahrzeugen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Warnsignale */}
      <section className="py-12 bg-muted/30 border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeIn}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center shrink-0">
                <AlertTriangle className="w-5 h-5 text-orange-500" />
              </div>
              <h2 className="text-xl font-bold text-foreground">Wann ist professionelle Hilfe nötig?</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {warnsignale.map((w, i) => (
                <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.06 }} className="flex items-start gap-2.5 bg-background border border-border rounded-lg p-3.5" data-testid={`warning-item-${i}`}>
                  <AlertTriangle className="w-4 h-4 text-orange-400 mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground">{w}</span>
                </motion.div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-5 italic">
              Wenn eines dieser Zeichen zutrifft, zögern Sie nicht, uns anzurufen. Je früher, desto einfacher und günstiger ist die Räumung.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Unser Ablauf */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.h2 {...fadeIn} className="text-2xl font-bold text-foreground mb-2 text-center">Unser Ablauf bei der Messie-Räumung</motion.h2>
          <motion.p {...fadeIn} className="text-muted-foreground text-center mb-10">Strukturiert, respektvoll und effizient</motion.p>
          <div className="grid sm:grid-cols-2 gap-6">
            {phasen.map((p, i) => (
              <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.1 }}>
                <Card className="p-5 h-full" data-testid={`phase-card-${i}`}>
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <p.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.text}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Was wir mitbringen */}
      <section className="py-12 bg-muted/30 border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeIn}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-xl font-bold text-foreground">Was unser Team mitbringt</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Persönliche Schutzausrüstung (PSA): Masken, Handschuhe, Schutzanzüge",
                "Spezielle Desinfektionsmittel und Reinigungsgeräte",
                "Sachkundige Mülltrennung: Sperrmüll, Biomüll, Sondermüll, Elektroschrott",
                "Erfahrung im Umgang mit Schimmel und Ungeziefer",
                "Neutrale, unauffällige Fahrzeuge auf Wunsch",
                "Rücksichtnahme auf psychische Situation der Betroffenen",
                "Zertifizierte Entsorgung aller Materialien",
                "Besenreine Übergabe — auf Wunsch inkl. Grundreinigung",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground" data-testid={`equipment-item-${i}`}>
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Kosten */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeIn}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Home className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-xl font-bold text-foreground">Was kostet eine Messie-Entrümpelung?</h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-4 mb-6">
              {[
                { size: "1 Zimmer / leicht", price: "ab 400 €", detail: "z.B. überfülltes Zimmer, kaum Sondermüll" },
                { size: "2–3 Zimmer / mittel", price: "ab 1.200 €", detail: "Stärker verwahrloste Wohnung, Biomüll" },
                { size: "Haus / stark", price: "ab 3.000 €", detail: "Jahrelange Ansammlung, Sonderentsorgung" },
              ].map((item, i) => (
                <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.1 }}>
                  <Card className="p-4 text-center border-2 hover:border-primary transition-colors" data-testid={`cost-card-${i}`}>
                    <p className="text-xs text-muted-foreground mb-1">{item.size}</p>
                    <p className="text-2xl font-bold text-primary mb-1">{item.price}</p>
                    <p className="text-xs text-muted-foreground">{item.detail}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
            <Card className="p-4 bg-primary/5 border-primary/20">
              <p className="text-sm text-muted-foreground">
                <strong>Wichtig:</strong> Alle Preise nach kostenloser Erstbesichtigung. Der Endpreis hängt von Art und Menge des Mülls, Stockwerk, Zugänglichkeit und Entsorgungskosten ab. Verbindlicher Festpreis — keine bösen Überraschungen.{" "}
                <Link href="/entruempelung-rhein-erft-kreis-preise" className="text-primary hover:underline">Detaillierte Preisübersicht →</Link>
              </p>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Regionale Verlinkung */}
      <section className="py-10 bg-muted/30 border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeIn}>
            <h2 className="text-lg font-bold text-foreground mb-4">Messie-Entrümpelung in Ihrer Stadt</h2>
            <p className="text-sm text-muted-foreground mb-4">Wir kommen in alle Städte und Stadtteile des Rhein-Erft-Kreises:</p>
            <div className="flex flex-wrap gap-2">
              {[
                { name: "Bergheim", slug: "bergheim" }, { name: "Kerpen", slug: "kerpen" }, { name: "Pulheim", slug: "pulheim" },
                { name: "Frechen", slug: "frechen" }, { name: "Hürth", slug: "huerth" }, { name: "Erftstadt", slug: "erftstadt" },
                { name: "Elsdorf", slug: "elsdorf" }, { name: "Grevenbroich", slug: "grevenbroich" },
                { name: "Brühl", slug: "bruehl" }, { name: "Wesseling", slug: "wesseling" },
              ].map(city => (
                <Link key={city.slug} href={`/entruempelung-${city.slug}`} className="text-sm bg-background border border-border hover:border-primary hover:text-primary px-3 py-1.5 rounded-full transition-colors" data-testid={`link-city-${city.slug}`}>
                  {city.name}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.h2 {...fadeIn} className="text-2xl font-bold text-foreground mb-8">Häufige Fragen zur Messie-Entrümpelung</motion.h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.07 }}>
                <Card className="p-5" data-testid={`faq-card-${i}`}>
                  <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA sticky */}
      <section className="py-10 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div {...fadeIn}>
            <h2 className="text-2xl font-bold mb-2">Jetzt diskret anfragen</h2>
            <p className="text-primary-foreground/80 mb-6">Kostenlose Besichtigung · Festpreis · Keine Wertung · 100% diskret</p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center items-center">
              <a href="tel:+4922715880940" className="w-full sm:w-auto">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto" data-testid="button-cta-call">
                  <Phone className="w-4 h-4 mr-2" /> 02271 / 5880940
                </Button>
              </a>
              <a href="https://wa.me/4915258177453" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" data-testid="button-cta-whatsapp">
                  WhatsApp anfragen
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <BlogArticleCTA />
      <CTASection />
    </PageLayout>
  );
}
