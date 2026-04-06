import { useEffect } from "react";
import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { PageLayout, PageHero, CTASection, InternalLinksSection } from "@/components/layout";
import { motion } from "framer-motion";
import {
  Heart,
  Shield,
  Clock,
  CheckCircle2,
  Phone,
  Eye,
  CalendarCheck,
  Package,
  Recycle,
  HeadphonesIcon,
  Star,
  MapPin,
  FileText,
  Users,
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const benefits = [
  {
    icon: Heart,
    title: "Einfühlsam & diskret",
    description: "Wir verstehen, dass eine Nachlassauflösung eine emotionale Ausnahmesituation ist. Unser Team geht rücksichtsvoll und diskret vor.",
  },
  {
    icon: Shield,
    title: "Festpreisgarantie",
    description: "Sie erhalten ein verbindliches Festpreisangebot nach der Besichtigung. Keine bösen Überraschungen, keine Nachforderungen.",
  },
  {
    icon: Clock,
    title: "Schnell & zuverlässig",
    description: "Wir reagieren innerhalb von 24 Stunden und führen die Räumung oft innerhalb weniger Tage durch — auch kurzfristig.",
  },
  {
    icon: FileText,
    title: "Behördendokumente",
    description: "Gefundene wichtige Dokumente (Urkunden, Versicherungspolicen, Ausweise) werden Ihnen selbstverständlich übergeben.",
  },
];

const leistungen = [
  "Vollständige Räumung aller Räume (Wohnung, Keller, Dachboden, Garage)",
  "Fachgerechte Entsorgung aller Gegenstände",
  "Wertanrechnung für noch verwertbare Möbel und Gegenstände",
  "Übergabe aller Fundgegenstände (Dokumente, Fotos, Schmuck)",
  "Besenreine Übergabe der Immobilie",
  "Auf Wunsch Grundreinigung nach Entrümpelung",
  "Koordination mit Vermietern und Behörden möglich",
  "Entsorgungsnachweis auf Anfrage",
];

const ablauf = [
  {
    nummer: "01",
    icon: Phone,
    titel: "Kontakt aufnehmen",
    text: "Melden Sie sich telefonisch oder per Formular. Wir nehmen uns Zeit für Ihr Anliegen und besprechen alles in Ruhe.",
  },
  {
    nummer: "02",
    icon: Eye,
    titel: "Kostenlose Besichtigung",
    text: "Wir kommen zu Ihnen und schauen uns die Immobilie an. Dabei erfassen wir den Umfang und identifizieren werthaltige Gegenstände.",
  },
  {
    nummer: "03",
    icon: FileText,
    titel: "Schriftliches Festpreisangebot",
    text: "Sie erhalten ein verbindliches Angebot inklusive Wertanrechnung. Alles transparent, nichts versteckt.",
  },
  {
    nummer: "04",
    icon: Package,
    titel: "Professionelle Durchführung",
    text: "Unser Team führt die Räumung sorgfältig durch. Wichtige Gegenstände (Fotos, Dokumente, Erinnerungsstücke) werden separiert.",
  },
  {
    nummer: "05",
    icon: Recycle,
    titel: "Fachgerechte Entsorgung",
    text: "Alle Gegenstände werden umweltgerecht entsorgt, verwertbare Materialien dem Recycling zugeführt.",
  },
  {
    nummer: "06",
    icon: CalendarCheck,
    titel: "Besenreine Übergabe",
    text: "Sie erhalten die Immobilie besenrein zurück — bereit für Übergabe an Vermieter oder nächste Nutzung.",
  },
];

const fragen = [
  {
    frage: "Wie schnell können Sie eine Nachlassauflösung durchführen?",
    antwort: "In der Regel können wir innerhalb von 3–7 Werktagen nach Auftragserteilung beginnen. Bei dringendem Bedarf (z.B. kurze Kündigungsfristen) versuchen wir, noch schneller zu reagieren.",
  },
  {
    frage: "Was passiert mit wertvollen Gegenständen aus dem Nachlass?",
    antwort: "Werthaltige Gegenstände wie Antiquitäten, Schmuck, Silberbesteck oder hochwertige Möbel werden von uns bewertet und der Wert direkt vom Preis abgezogen (Wertanrechnung). Alternativ können diese Gegenstände auch an Angehörige übergeben werden.",
  },
  {
    frage: "Kann ich als Angehöriger dabei sein?",
    antwort: "Ja, selbstverständlich. Viele Angehörige möchten dabei sein, um persönliche Erinnerungsstücke auszuwählen. Wir richten uns nach Ihren Wünschen. Es ist aber auch möglich, die Räumung ohne Ihre Anwesenheit durchzuführen.",
  },
  {
    frage: "Was machen Sie mit Fotos und persönlichen Dokumenten?",
    antwort: "Gefundene Fotos, Briefe, Dokumente (Ausweise, Versicherungspolicen, Urkunden) sowie Schmuck und Bargeld werden immer gesondert aufbewahrt und Ihnen vollständig übergeben.",
  },
  {
    frage: "Übernehmen Sie auch die Kündigung des Mietvertrags?",
    antwort: "Das liegt außerhalb unserer Zuständigkeit, aber wir unterstützen Sie dabei: Wir stellen auf Wunsch eine Dokumentation der Räumung bereit und können die besenreine Übergabe für die Vermieter bestätigen.",
  },
];

const reviews = [
  {
    name: "Sabine H.",
    text: "Nach dem Tod meiner Mutter mussten wir ihre Wohnung auflösen. Das Team war unglaublich einfühlsam und hat alles professionell erledigt. Meine persönlichen Erinnerungsstücke wurden sorgfältig übergeben.",
    stars: 5,
  },
  {
    name: "Klaus M.",
    text: "Sehr diskret und zuverlässig. Die Nachlassauflösung meines Vaters wurde innerhalb eines Tages durchgeführt, der Keller im gleichen Zug mit geräumt. Top Preis-Leistungs-Verhältnis.",
    stars: 5,
  },
  {
    name: "Andrea W.",
    text: "Bin sehr dankbar, dass ich in dieser schwierigen Zeit einen so verlässlichen Partner gefunden habe. Alles schnell und ohne Stress erledigt. Auch das Behördliche klärte sich danach problemlos.",
    stars: 5,
  },
];

const staedte = [
  { name: "Bergheim", href: "/entruempelung-bergheim" },
  { name: "Kerpen", href: "/entruempelung-kerpen" },
  { name: "Frechen", href: "/entruempelung-frechen" },
  { name: "Pulheim", href: "/entruempelung-pulheim" },
  { name: "Bedburg", href: "/entruempelung-bedburg" },
  { name: "Elsdorf", href: "/entruempelung-elsdorf" },
  { name: "Hürth", href: "/entruempelung-huerth" },
  { name: "Brühl", href: "/entruempelung-bruehl" },
  { name: "Wesseling", href: "/entruempelung-wesseling" },
  { name: "Erftstadt", href: "/entruempelung-erftstadt" },
  { name: "Hennef", href: "/entruempelung-hennef" },
  { name: "Dormagen", href: "/entruempelung-dormagen" },
];

export default function NachlassaufloesungPage() {
  useEffect(() => {
    document.title = "Nachlassauflösung & Wohnungsauflösung nach Todesfall | Stressfrei NRW";
    let _canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!_canonical) { _canonical = document.createElement("link"); _canonical.setAttribute("rel", "canonical"); document.head.appendChild(_canonical); }
    _canonical.setAttribute("href", "https://stressfreientruempelungen.de/nachlassaufloesung");
    const _setOgMeta = (prop: string, val: string) => { let m = document.querySelector(`meta[property="${prop}"]`) as HTMLMetaElement | null; if (!m) { m = document.createElement("meta"); m.setAttribute("property", prop); document.head.appendChild(m); } m.setAttribute("content", val); };
    _setOgMeta("og:url", "https://stressfreientruempelungen.de/nachlassaufloesung");
    _setOgMeta("og:image", "https://stressfreientruempelungen.de/images/nachlassaufloesung-hero.webp");
    _setOgMeta("og:locale", "de_DE");
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Nachlassauflösung & Wohnungsauflösung nach Todesfall im Rhein-Erft-Kreis ✓ Einfühlsam ✓ Diskret ✓ Festpreisgarantie ✓ Binnen 24h Angebot ☎ 02271 / 5880940");
  }, []);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Nachlassauflösung",
            "alternateName": "Wohnungsauflösung nach Todesfall",
            "description": "Professionelle, einfühlsame Nachlassauflösung und Wohnungsauflösung nach Todesfall im Rhein-Erft-Kreis und NRW. Festpreisgarantie, diskrete Abwicklung.",
            "url": "https://stressfreientruempelungen.de/nachlassaufloesung",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Stressfrei Entrümpelungen & Umzüge",
              "telephone": "+4922715880940",
              "url": "https://stressfreientruempelungen.de",
              "areaServed": "Rhein-Erft-Kreis",
            },
            "serviceType": "Nachlassauflösung",
            "areaServed": { "@type": "Place", "name": "Rhein-Erft-Kreis, NRW" },
          }),
        }}
      />
      <PageLayout>
        <PageHero
          title="Nachlassauflösung"
          subtitle="Einfühlsam, diskret und professionell — wir unterstützen Sie in einer schwierigen Zeit."
          highlight="Seniorengerecht"
        />

        <section className="pb-8 sm:pb-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div {...fadeIn}>
              <img
                src="/images/nachlassaufloesung-hero.webp"
                alt="Professionelle Nachlassauflösung — einfühlsames Team räumt Wohnung nach Todesfall"
                className="w-full rounded-2xl shadow-lg object-cover aspect-[16/9]"
                width={1200}
                height={675}
                loading="eager"
                data-testid="img-nachlass-hero"
              />
            </motion.div>
          </div>
        </section>

        <section className="py-10 sm:py-14 bg-card/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div {...fadeIn} className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
                In dieser Zeit an Ihrer Seite
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Nach dem Verlust eines geliebten Menschen stehen Angehörige oft vor der Aufgabe, eine Wohnung oder ein Haus aufzulösen. Wir übernehmen diese Last — zuverlässig, diskret und mit dem nötigen Einfühlungsvermögen.
              </p>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {benefits.map((b, i) => {
                const Icon = b.icon;
                return (
                  <motion.div key={b.title} {...fadeIn} transition={{ duration: 0.5, delay: i * 0.08 }}>
                    <Card className="p-5 h-full text-center" data-testid={`card-benefit-${i}`}>
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">{b.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{b.description}</p>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <motion.div {...fadeIn}>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
                  Was ist in der Nachlassauflösung enthalten?
                </h2>
                <ul className="space-y-3">
                  {leistungen.map((l, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{l}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-xl">
                  <p className="text-sm text-foreground leading-relaxed">
                    <strong>Wertanrechnung:</strong> Enthält der Nachlass noch verwertbare Gegenstände (Antiquitäten, Möbel, Metalle, Schmuck), rechnen wir den Wert direkt vom Preis ab. Mehr dazu:{" "}
                    <Link href="/wertanrechnung-bei-der-entruempelung" className="text-primary hover:underline font-medium">
                      Wertanrechnung erklärt
                    </Link>
                  </p>
                </div>
              </motion.div>
              <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.12 }}>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
                  Ablauf in 6 Schritten
                </h2>
                <div className="space-y-4">
                  {ablauf.map((s, i) => {
                    const Icon = s.icon;
                    return (
                      <div key={s.nummer} className="flex items-start gap-3" data-testid={`step-${i}`}>
                        <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                          {s.nummer}
                        </div>
                        <div>
                          <p className="font-semibold text-foreground text-sm">{s.titel}</p>
                          <p className="text-xs text-muted-foreground leading-relaxed">{s.text}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 bg-card/50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <motion.div {...fadeIn} className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">Häufige Fragen</h2>
            </motion.div>
            <div className="space-y-4">
              {fragen.map((f, i) => (
                <motion.div key={i} {...fadeIn} transition={{ duration: 0.4, delay: i * 0.06 }}>
                  <Card className="p-5" data-testid={`card-faq-${i}`}>
                    <h3 className="font-semibold text-foreground mb-2 flex items-start gap-2">
                      <span className="text-primary font-bold flex-shrink-0">F:</span>
                      {f.frage}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed pl-5">{f.antwort}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div {...fadeIn} className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">Das sagen unsere Kunden</h2>
            </motion.div>
            <div className="grid sm:grid-cols-3 gap-5">
              {reviews.map((r, i) => (
                <motion.div key={r.name} {...fadeIn} transition={{ duration: 0.5, delay: i * 0.08 }}>
                  <Card className="p-5 h-full" data-testid={`card-review-${i}`}>
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="w-3.5 h-3.5 text-accent fill-current" />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">"{r.text}"</p>
                    <div className="flex items-center gap-2 mt-auto pt-3 border-t border-border/40">
                      <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-xs font-semibold text-primary">{r.name.charAt(0)}</span>
                      </div>
                      <span className="text-sm font-medium text-foreground">{r.name}</span>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-10 sm:py-14 bg-card/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div {...fadeIn} className="text-center mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2 flex items-center justify-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                Nachlassauflösung im Rhein-Erft-Kreis
              </h2>
              <p className="text-muted-foreground text-sm">Wir sind in allen Städten des Rhein-Erft-Kreises für Sie da.</p>
            </motion.div>
            <div className="flex flex-wrap justify-center gap-2">
              {staedte.map((s, i) => (
                <motion.div key={s.name} {...fadeIn} transition={{ duration: 0.3, delay: i * 0.04 }}>
                  <Link
                    href={s.href}
                    className="inline-flex items-center gap-1.5 bg-card border border-border/60 hover:border-primary/40 hover:text-primary text-sm font-medium px-3 py-1.5 rounded-full transition-colors"
                    style={{ textDecoration: "none" }}
                    data-testid={`link-stadt-${i}`}
                  >
                    <MapPin className="w-3 h-3" />
                    {s.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <InternalLinksSection pageKey="haushaltsaufloesung" />
        <CTASection
          title="Jetzt kostenlos beraten lassen"
          subtitle="Wir nehmen uns Zeit für Ihr Anliegen — diskret, einfühlsam und ohne Druck. Melden Sie sich jederzeit."
        />
      </PageLayout>
    </>
  );
}
