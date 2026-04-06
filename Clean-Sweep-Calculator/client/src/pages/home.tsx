import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { PhoneInput } from "@/components/phone-input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Navbar, Footer, ScrollToTop, MobileBottomBar, QuickContactStrip } from "@/components/layout";
import { EntruempelungsRechner } from "@/components/entruempelungs-rechner";
import { UmzugsRechner } from "@/components/umzugs-rechner";
import { FadeIn } from "@/components/fade-in";
import { Link } from "wouter";
import { trackConversion } from "@/lib/gtag";
function IconWhatsapp({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.555 4.118 1.528 5.847L0 24l6.335-1.652A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.013-1.376l-.36-.214-3.732.973.998-3.643-.235-.374A9.818 9.818 0 0112 2.182c5.427 0 9.818 4.391 9.818 9.818S17.427 21.818 12 21.818z"/>
    </svg>
  );
}
import {
  Phone,
  Mail,
  Star,
  ChevronDown,
  ChevronUp,
  Home as HomeIcon,
  Package,
  Truck,
  Shield,
  Clock,
  HeadphonesIcon,
  CheckCircle2,
  XCircle,
  MapPin,
  Send,
  Users,
  Award,
  Eye,
  CalendarCheck,
  Scale,
  Zap,
  CircleDollarSign,
  Heart,
  AlertTriangle,
  Dumbbell,
  ClipboardList,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const services = [
  {
    icon: Package,
    title: "Entrümpelungen",
    description:
      "Bei einer Entrümpelung kann sehr viel Arbeit anfallen. Überlassen Sie die Arbeit uns und lehnen Sie sich stressfrei zurück.",
    href: "/entruempelung",
  },
  {
    icon: HomeIcon,
    title: "Haushaltsauflösungen",
    description:
      "Wir bieten bei jeder unserer Haushaltsauflösungen kostenlose, unverbindliche und professionelle Besichtigungen an.",
    href: "/haushaltsaufloesung",
  },
  {
    icon: Truck,
    title: "Umzüge",
    description:
      "Wir bringen Ihre geschätzten Möbel und Güter sicher und schnell von A nach B. Mit unserem Fuhrpark können wir all Ihre Möbel transportieren.",
    href: "/umzug",
  },
];

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Kontakt aufnehmen",
    description:
      "Rufen Sie uns an oder schreiben Sie uns. Wir besprechen Ihr Anliegen und vereinbaren einen Besichtigungstermin.",
  },
  {
    number: "02",
    icon: Eye,
    title: "Kostenlose Besichtigung",
    description:
      "Wir besichtigen das Objekt vor Ort oder per Video und erstellen Ihnen ein faires Festpreis-Angebot.",
  },
  {
    number: "03",
    icon: CalendarCheck,
    title: "Stressfreie Durchführung",
    description:
      "An Ihrem Wunschtermin führen wir die Entrümpelung professionell durch und hinterlassen alles besenrein.",
  },
];

const reviews = [
  {
    name: "Sebastian K.",
    text: "Top-Service! Die Entrümpelung verlief schnell, professionell und zuverlässig. Das Team war pünktlich, freundlich und hat alles sauber hinterlassen. Preis-Leistung ist absolut fair!",
  },
  {
    name: "Feniajulia",
    text: "Vom ersten Kontakt an war das Team äußerst professionell und freundlich. Sie kamen pünktlich, hatten alles Nötige dabei und arbeiteten zügig und effizient. Der Name ist Programm!",
  },
  {
    name: "Michaela M.",
    text: "Schnell einen Termin bekommen, pünktlich, freundlich und unkompliziert wurde meine Garage und mein Keller geräumt. Schränke wurden demontiert, besenrein hinterlassen.",
  },
  {
    name: "Klarabella",
    text: "Ganz toller Service, Terminvergabe schnell und unkompliziert per WhatsApp, sehr sympathisches Team, haben alles mitgenommen und richtig gut gearbeitet.",
  },
  {
    name: "Tamara K.",
    text: "Haushaltsauflösung lief super. Schneller Termin, professionelle Durchführung und fairer Preis. Ich bin sehr zufrieden und kann die Firma nur wärmstens empfehlen!",
  },
  {
    name: "Angelika B.",
    text: "Schnell, zuverlässig, freundlich und immer hilfsbereit. Preis-Leistungsverhältnis vollkommen in Ordnung. Das Team konnte mir eine große Last abnehmen.",
  },
];

const comparisons = [
  {
    title: "Immobilienschutz",
    bad: "Türrahmen werden beim Entrümpeln oft beschädigt und Wände zerkratzt. Auch Fliesen oder Fenster können zu Bruch gehen.",
    good: "Möbel und Gerümpel werden mit äußerster Sorgfalt entrümpelt. Ihre Habseligkeiten sind während der Entrümpelung versichert.",
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

const locations = [
  { name: "Rhein-Erft-Kreis", href: "/entruempelung-rhein-erft-kreis" },
  { name: "Bergheim", href: "/entruempelung-bergheim" },
  { name: "Bedburg", href: "/entruempelung-bedburg" },
  { name: "Elsdorf", href: "/entruempelung-elsdorf" },
  { name: "Kerpen", href: "/entruempelung-kerpen" },
  { name: "Pulheim", href: "/entruempelung-pulheim" },
  { name: "Erftstadt", href: "/entruempelung-erftstadt" },
  { name: "Frechen", href: "/entruempelung-frechen" },
  { name: "Hürth", href: "/entruempelung-huerth" },
  { name: "Grevenbroich", href: "/entruempelung-grevenbroich" },
  { name: "Rommerskirchen", href: "/entruempelung-rommerskirchen" },
  { name: "Köln", href: "/standorte" },
  { name: "Bonn", href: "/standorte" },
  { name: "Düsseldorf", href: "/standorte" },
];

const faqs = [
  {
    q: "Wie viel kostet eine Entrümpelung bei Stressfrei Entrümpelungen?",
    a: "Die Kosten für eine professionelle Entrümpelung lassen sich nicht pauschal festlegen, da jeder Auftrag unterschiedlich ist. Der Preis richtet sich nach dem Umfang der Räumung, der Menge und Art des zu entsorgenden Materials sowie möglichen Zusatzleistungen. Sie erhalten einen fairen Festpreis ohne versteckte Kosten.",
  },
  {
    q: "Wie lange dauert die Angebotserstellung?",
    a: "Für ein unverbindliches Angebot nehmen wir wichtige Eckdaten auf und begutachten das Entrümpelungsvolumen - vor Ort oder per Fotos/Video. In der Regel haben Sie einige Stunden nach der Besichtigung ein Angebot in Ihrem E-Mail-Postfach.",
  },
  {
    q: "In meiner Straße kann man schlecht parken. Wie lösen wir das?",
    a: "Wir übernehmen für Sie das Einrichten einer Halteverbotszone und kümmern uns um alle behördlichen Vorgaben. Auch das Aufstellen der Beschilderung fällt unter unseren Komplett-Service.",
  },
  {
    q: "Entrümpeln Sie auch kurzfristig?",
    a: "Ja! Versprechen können wir nichts, aber wir bemühen uns, auch kurzfristige Anfragen schnell und sorgfältig durchzuführen. Bisher haben wir meistens eine Lösung gefunden.",
  },
  {
    q: "Wie funktioniert die Wertanrechnung?",
    a: "Die Wertanrechnung erfolgt durch die Bewertung der Objekte vor Ort, die für einen Ankauf interessant sind. Diese erscheinen im Kostenvoranschlag und verringern den Preis für die geplante Entrümpelung.",
  },
];

function HeroSection() {
  useEffect(() => {
    document.getElementById("lcp-hero-static")?.remove();
    document.getElementById("lcp-hero-mobile")?.remove();
    document.getElementById("lcp-hero-text")?.remove();
  }, []);
  return (
    <section className="relative pt-20 pb-10 sm:pt-24 sm:pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-primary/3 to-background" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <FadeIn>
              <div className="flex flex-wrap items-center gap-2 mb-4 sm:mb-6 justify-center lg:justify-start">
                <a
                  href="https://share.google/bYXZHQXPyL6EWKLhL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium hover:bg-primary/20 transition-colors"
                  data-testid="badge-hero"
                >
                  <Star className="w-3 h-3 fill-current" />
                  5.0 Sterne · 90+ Google-Bewertungen ↗
                </a>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-medium">
                  <Zap className="w-3 h-3" />
                  Rhein-Erft-Kreis & NRW
                </div>
              </div>
              <div className="mb-2">
                <span className="text-sm sm:text-base font-semibold text-primary tracking-wide uppercase" data-testid="text-hero-brand">
                  Stressfrei Entrümpelungen & Umzüge
                </span>
              </div>
              <h1
                className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.15] mb-4 sm:mb-5"
                data-testid="text-hero-title"
              >
                Entrümpelungen & Umzüge{" "}
                <span className="text-primary">ohne Stress</span>
                <br />& ohne versteckte Kosten
              </h1>
              <p
                className="text-sm sm:text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-6 sm:mb-8"
                data-testid="text-hero-subtitle"
              >
                Ihr professioneller Partner für Entrümpelungen, Haushaltsauflösungen &
                Umzüge im Rhein-Erft-Kreis und ganz NRW — schnell, fair und zuverlässig.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap items-center gap-3 mb-6 justify-center lg:justify-start">
                <a href="tel:+4922715880940" data-testid="link-hero-call">
                  <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 hover:text-primary">
                    <Phone className="w-4 h-4 mr-2" />
                    02271 / 5880940
                  </Button>
                </a>
                <a href="https://wa.me/4915258177453?text=Hallo%2C%20ich%20m%C3%B6chte%20ein%20kostenloses%20Angebot%20anfragen." target="_blank" rel="noopener noreferrer" data-testid="link-hero-whatsapp">
                  <Button variant="outline" size="lg" className="border-[#25D366] text-[#25D366] hover:bg-[#25D366]/10 hover:text-[#25D366]">
                    <IconWhatsapp className="w-4 h-4 mr-2" />
                    Per WhatsApp anfragen
                  </Button>
                </a>
              </div>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-6 sm:mt-8 justify-center lg:justify-start">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-muted-foreground">
                    Festpreisgarantie
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-muted-foreground">
                    Vollversichert
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-muted-foreground">
                    Besenreine Übergabe
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-muted-foreground">
                    Kostenlose Beratung
                  </span>
                </div>
              </div>
            </FadeIn>

            <div className="mt-8 lg:hidden mx-auto max-w-xs sm:max-w-sm">
              <div className="relative">
                <div className="absolute -inset-3 bg-primary/10 rounded-2xl blur-2xl" />
                <div className="relative">
                  <img
                    src="/images/umzug-umzugskartons-stressfrei-640w.webp"
                    srcSet="/images/umzug-umzugskartons-stressfrei-mobil.webp 480w, /images/umzug-umzugskartons-stressfrei-640w.webp 640w, /images/umzug-umzugskartons-stressfrei-rhein-erft-kreis.webp 894w"
                    sizes="(max-width: 480px) 320px, 480px"
                    alt="Umzugskartons - Stressfrei Entrümpelungen"
                    className="w-full rounded-2xl shadow-lg object-cover aspect-[4/3]"
                    width={894}
                    height={1024}
                    loading="eager"
                    fetchpriority="high"
                    decoding="async"
                    data-testid="img-hero-mobile"
                  />
                  <a
                    href="https://share.google/bYXZHQXPyL6EWKLhL"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute -bottom-4 -left-2 block"
                    data-testid="badge-google-reviews-mobile"
                  >
                    <div className="bg-white dark:bg-card rounded-lg shadow-xl px-3 py-2 flex items-center gap-2 border border-border/60 hover:shadow-2xl transition-shadow">
                      <img loading="lazy" src="/images/google-icon.svg" alt="Google" width="24" height="24" className="w-6 h-6 shrink-0" />
                      <div>
                        <div className="text-[10px] font-semibold text-foreground leading-tight">90+ Bewertungen</div>
                        <div className="flex items-center gap-0.5 mt-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-2.5 h-2.5 text-accent fill-current" />
                          ))}
                          <span className="text-[10px] font-bold text-foreground ml-1">5.0</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full max-w-md lg:max-w-lg hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/10 rounded-2xl blur-2xl" />
              <div className="relative">
                <img
                  src="/images/umzug-umzugskartons-stressfrei-rhein-erft-kreis.webp"
                  srcSet="/images/umzug-umzugskartons-stressfrei-mobil.webp 480w, /images/umzug-umzugskartons-stressfrei-640w.webp 640w, /images/umzug-umzugskartons-stressfrei-rhein-erft-kreis.webp 894w"
                  sizes="(max-width: 768px) 480px, 45vw"
                  alt="Umzugskartons - Stressfrei Entrümpelungen"
                  className="w-full rounded-2xl shadow-lg object-cover"
                  width={894}
                  height={1024}
                  loading="eager"
                  fetchpriority="high"
                  decoding="async"
                  data-testid="img-hero"
                />
                <a
                  href="https://share.google/bYXZHQXPyL6EWKLhL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute -bottom-5 -left-3 sm:-bottom-7 sm:-left-5 block"
                  data-testid="badge-google-reviews"
                >
                  <div className="bg-white dark:bg-card rounded-xl shadow-xl px-4 py-3 flex items-center gap-3 border border-border/60 hover:shadow-2xl transition-shadow">
                    <img
                      src="/images/google-icon.svg"
                      alt="Google"
                      className="w-8 h-8 shrink-0"
                    />
                    <div>
                      <div className="text-xs font-semibold text-foreground leading-tight">
                        90+ Google-Bewertungen
                      </div>
                      <div className="flex items-center gap-1 mt-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-3 h-3 text-accent fill-current"
                          />
                        ))}
                        <span className="text-xs font-bold text-foreground ml-1">
                          5.0
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsBar() {
  const stats = [
    { value: "90+", label: "Google Bewertungen", icon: Star },
    { value: "5.0", label: "Durchschnitt", icon: Award },
    { value: "500+", label: "Aufträge", icon: CheckCircle2 },
    { value: "NRW", label: "Einzugsgebiet", icon: MapPin },
  ];
  return (
    <section className="py-12 border-y bg-card/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <FadeIn key={stat.label} className="text-center">
                <Icon className="w-5 h-5 text-primary mx-auto mb-2" />
                <div
                  className="text-2xl sm:text-3xl font-bold text-foreground"
                  data-testid={`text-stat-${stat.label}`}
                >
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PainPointsSection() {
  const painPoints = [
    {
      icon: Dumbbell,
      title: "Körperliche Belastung",
      desc: "Schwere Möbel, enge Treppenhäuser, mehrere Stockwerke — der körperliche Aufwand wird oft massiv unterschätzt. Rückenschmerzen und Verletzungen sind keine Seltenheit.",
    },
    {
      icon: Clock,
      title: "Extremer Zeitaufwand",
      desc: "Was nach einem Wochenende klingt, dauert oft Wochen. Sortieren, Verpacken, Transporte organisieren, Behördengänge — die Zeit läuft schnell davon.",
    },
    {
      icon: Heart,
      title: "Emotionale Belastung",
      desc: "Jahrzehnte an Erinnerungen, Erbstücke, persönliche Gegenstände — loszulassen ist emotional erschöpfend und kostet oft mehr Kraft als die körperliche Arbeit.",
    },
    {
      icon: ClipboardList,
      title: "Logistik & Koordination",
      desc: "Transporter buchen, Helfer koordinieren, Entsorgungstermine abstimmen, Nachbarn informieren — die Organisation alleine ist schon ein Vollzeitjob.",
    },
    {
      icon: CircleDollarSign,
      title: "Versteckte Kosten",
      desc: "Transporter, Verpackungsmaterial, Entsorgungsgebühren, Extrahelfer — am Ende kostet eine Eigenregie-Entrümpelung oft mehr als ein Profi-Service.",
    },
    {
      icon: AlertTriangle,
      title: "Risiken & Haftung",
      desc: "Beschädigte Wände, zerkratzte Böden, falsch entsorgte Gegenstände — wer ohne Fachkenntnis vorgeht, haftet selbst für Schäden und Bußgelder.",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-muted/30 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <FadeIn className="text-center mb-14">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            Die Herausforderung
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Warum Umzüge & Entrümpelungen{" "}
            <span className="text-primary">nicht leicht</span> sind
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Viele unterschätzen den Aufwand — und stehen mittendrin vor einem
            Chaos. Diese sechs Hürden machen Eigenregie so schwierig.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {painPoints.map((point, i) => {
            const Icon = point.icon;
            return (
              <FadeIn key={point.title} className="rounded-2xl p-6 border border-border bg-card">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 bg-primary/10">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 text-base">
                  {point.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {point.desc}
                </p>
              </FadeIn>
            );
          })}
        </div>

        {/* Fazit */}
        <FadeIn className="mt-12 rounded-2xl bg-primary/5 border border-primary/20 p-4 sm:p-10 flex flex-col sm:flex-row items-start gap-4 sm:gap-6 overflow-hidden" delayMs={500}>
          <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
            <Scale className="w-6 h-6 text-primary" />
          </div>
          <div className="flex-1 min-w-0 overflow-hidden">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">Fazit</p>
            <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 break-words">
              Eigenregie klingt günstig — rechnet sich aber selten
            </h3>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              Wer eine Entrümpelung oder einen Umzug selbst durchführt, zahlt am Ende mit Zeit, Nerven, körperlicher Erschöpfung — und oft auch mit echtem Geld für Helfer, Transporter und Entsorgung. Ein professioneller Service wie Stressfrei ist dabei häufig günstiger als erwartet: ein fairer Festpreis, ein Termin, und alles läuft — ohne dass Sie einen Finger rühren müssen.
            </p>
            <div className="mt-5 flex flex-col sm:flex-row flex-wrap gap-3">
              <Link href="/kontakt" style={{ textDecoration: "none" }} className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto !whitespace-normal h-auto py-3 bg-primary text-white hover:bg-primary/90 shadow-md">
                  Kostenlos anfragen — wir übernehmen das
                </Button>
              </Link>
              <Link href="/kosten-entruempelung" style={{ textDecoration: "none" }} className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto !whitespace-normal h-auto py-3">
                  Kosten berechnen
                </Button>
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="leistungen" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <FadeIn className="text-center mb-14">
          <h2
            className="text-2xl sm:text-3xl font-bold text-foreground mb-3"
            data-testid="text-services-title"
          >
            Unsere Dienstleistungen
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Professionelle Lösungen für jeden Bedarf - zuverlässig, transparent
            und stressfrei.
          </p>
        </FadeIn>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <FadeIn key={service.title}>
                <Link
                  href={service.href}
                  style={{ textDecoration: "none" }}
                  data-testid={`link-service-${i}`}
                >
                  <Card className="p-6 h-full hover-elevate cursor-pointer">
                    <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3
                      className="text-lg font-semibold text-foreground mb-2"
                      data-testid={`text-service-${i}`}
                    >
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                    <span className="inline-block mt-3 text-sm font-medium text-primary">
                      Mehr erfahren →
                    </span>
                  </Card>
                </Link>
              </FadeIn>
            );
          })}
        </div>

      </div>
    </section>
  );
}

function StepsSection() {
  const howToSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "In 3 Schritten zur professionellen Entrümpelung",
    "description": "So einfach funktioniert die Beauftragung von Stressfrei Entrümpelungen — von der Anfrage bis zur besenreinen Übergabe.",
    "totalTime": "P1D",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Kontakt aufnehmen",
        "text": "Rufen Sie uns an oder schreiben Sie uns. Wir besprechen Ihr Anliegen und vereinbaren einen Besichtigungstermin.",
        "url": "https://stressfreientruempelungen.de/kontakt",
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Kostenlose Besichtigung",
        "text": "Wir besichtigen das Objekt vor Ort oder per Video und erstellen Ihnen ein faires Festpreis-Angebot.",
        "url": "https://stressfreientruempelungen.de/kontakt",
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Stressfreie Durchführung",
        "text": "An Ihrem Wunschtermin führen wir die Entrümpelung professionell durch und hinterlassen alles besenrein.",
        "url": "https://stressfreientruempelungen.de/entruempelung",
      },
    ],
  });

  return (
    <section className="py-20 sm:py-28 bg-card/50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: howToSchema }} />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <FadeIn className="text-center mb-14">
          <h2
            className="text-2xl sm:text-3xl font-bold text-foreground mb-3"
            data-testid="text-steps-title"
          >
            In 3 Schritten zur Stressfrei Entrümpelung
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            So einfach funktioniert es - von der Anfrage bis zur besenreinen
            Übergabe.
          </p>
        </FadeIn>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <FadeIn key={step.number} className="relative text-center">
                <div className="relative inline-flex mb-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                    {step.number}
                  </div>
                </div>
                {i < 2 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] border-t-2 border-dashed border-border" />
                )}
                <h3
                  className="font-semibold text-foreground mb-2"
                  data-testid={`text-step-${i}`}
                >
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ReviewsSection() {
  return (
    <section id="bewertungen" className="py-20 sm:py-28 bg-card/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <FadeIn className="text-center mb-14">
          <h2
            className="text-2xl sm:text-3xl font-bold text-foreground mb-3"
            data-testid="text-reviews-title"
          >
            Ausgezeichnet empfohlen
          </h2>
          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-accent fill-current" />
            ))}
          </div>
          <p className="text-muted-foreground">
            5.0 Sterne aus über 90+ Google Bewertungen
          </p>
        </FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((review, i) => (
            <FadeIn key={review.name}>
              <Card className="p-5 h-full" data-testid={`card-review-${i}`}>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className="w-3.5 h-3.5 text-accent fill-current"
                    />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  "{review.text}"
                </p>
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-xs font-semibold text-primary">
                        {review.name.charAt(0)}
                      </span>
                    </div>
                    <span className="text-sm font-medium text-foreground">
                      {review.name}
                    </span>
                  </div>
                  <img
                    src="/images/google-icon.svg"
                    alt="Google"
                    className="w-5 h-5"
                  />
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function InlineContactBanner({
  id,
  title,
  subtitle,
}: {
  id: string;
  title: string;
  subtitle: string;
}) {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const fd = new FormData(e.currentTarget);
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formName: id,
          name: fd.get("name"),
          phone: fd.get("phone"),
          email: fd.get("email"),
          message: fd.get("message"),
        }),
      });
    } catch (err) {}
    setSent(true);
    trackConversion(id, {
      phone: fd.get("phone") as string,
      email: fd.get("email") as string,
    });
  };
  return (
    <section className="py-14 sm:py-20 bg-primary/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <FadeIn>
          <Card className="p-6 sm:p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3
                  className="text-xl sm:text-2xl font-bold text-foreground mb-2"
                  data-testid={`text-${id}-title`}
                >
                  {title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{subtitle}</p>
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="w-4 h-4 text-primary" />
                  <a
                    href="tel:+4922715880940"
                    className="font-medium text-foreground hover:text-primary transition-colors"
                    data-testid={`link-${id}-phone`}
                  >
                    02271 / 5880940
                  </a>
                </div>
              </div>
              <div>
                {sent ? (
                  <div className="text-center py-4">
                    <CheckCircle2 className="w-8 h-8 text-primary mx-auto mb-2" />
                    <p
                      className="text-sm font-medium text-foreground"
                      data-testid={`text-${id}-success`}
                    >
                      Vielen Dank!
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Wir melden uns schnellstmöglich.
                    </p>
                  </div>
                ) : (
                  <form className="space-y-3" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-3">
                      <Input
                        name="name"
                        placeholder="Name *"
                        required
                        data-testid={`input-${id}-name`}
                      />
                      <PhoneInput
                        name="phone"
                        placeholder="Telefon"
                        required
                        data-testid={`input-${id}-phone`}
                      />
                    </div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="E-Mail *"
                      required
                      data-testid={`input-${id}-email`}
                    />
                    <Textarea
                      name="message"
                      placeholder="Ihr Anliegen..."
                      className="resize-none"
                      rows={2}
                      required
                      data-testid={`input-${id}-message`}
                    />
                    <Button
                      type="submit"
                      className="w-full"
                      disabled={sending}
                      data-testid={`button-${id}-submit`}
                    >
                      <Send className="w-4 h-4 mr-2" />
                      {sending ? "Wird gesendet..." : "Kostenlos anfragen"}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </Card>
        </FadeIn>
      </div>
    </section>
  );
}

function ComparisonSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <FadeIn className="text-center mb-14">
          <h2
            className="text-2xl sm:text-3xl font-bold text-foreground mb-3"
            data-testid="text-comparison-title"
          >
            Wieso unsere Kunden so zufrieden sind
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Der Unterschied zwischen einer privaten Entrümpelung und unserem
            professionellen Service.
          </p>
        </FadeIn>
        <div className="space-y-6">
          {comparisons.map((item, i) => {
            const Icon = item.icon;
            return (
              <FadeIn key={item.title}>
                <Card className="p-6" data-testid={`card-comparison-${i}`}>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex gap-3 p-4 rounded-md bg-destructive/5">
                      <XCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-medium text-destructive mb-1">
                          Private Entrümpelung
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {item.bad}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3 p-4 rounded-md bg-primary/5">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-medium text-primary mb-1">
                          Stressfrei Entrümpelung
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {item.good}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="ueber-uns" className="py-20 sm:py-28 bg-card/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <h2
              className="text-2xl sm:text-3xl font-bold text-foreground mb-4"
              data-testid="text-about-title"
            >
              Ihr Anliegen steht bei uns an erster Stelle
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Die Idee zur Gründung von Stressfrei Entrümpelungen & Umzüge kam
              Oskar und Alper, als Oskar das Haus seines Großvaters entrümpeln
              musste. Während dieser Zeit erlebte er, wie mehrere unseriöse
              Anbieter das Haus betraten, teure Angebote machten und letztlich
              eine enttäuschende Arbeit leisteten.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Diese Erfahrung hinterließ einen bleibenden Eindruck - und die
              Entscheidung, es anders und besser zu machen. Heute steht unser
              Name für ehrliche Arbeit, faire Preise und echten Kundenservice.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                {["O", "A", "D", "L"].map((letter, i) => (
                  <div
                    key={letter}
                    className="w-10 h-10 rounded-full bg-primary/10 border-2 border-background flex items-center justify-center"
                  >
                    <span className="text-xs font-bold text-primary">
                      {letter}
                    </span>
                  </div>
                ))}
              </div>
              <div>
                <div
                  className="text-sm font-medium text-foreground"
                  data-testid="text-team-names"
                >
                  Leon, Alper, Denis, Oskar
                </div>
                <div className="text-xs text-muted-foreground">
                  Das Team von Stressfrei
                </div>
              </div>
            </div>
          </FadeIn>
          <FadeIn delayMs={200}>
            <div className="space-y-5">
              <img
                src="/images/stressfrei-entruempelungen-team-rhein-erft-kreis.webp"
                alt="Das Team von Stressfrei Entrümpelungen - Leon, Alper, Denis, Oskar"
                className="w-full rounded-2xl shadow-lg object-cover"
                width={900}
                height={431}
                loading="lazy"
                data-testid="img-team"
              />
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: Shield, label: "Vollversichert" },
                  { icon: Award, label: "Top bewertet" },
                  { icon: Users, label: "Erfahrenes Team" },
                  { icon: Clock, label: "Pünktlich" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="flex items-center gap-3 p-3 rounded-md bg-card border text-sm font-medium text-foreground"
                    >
                      <Icon className="w-4 h-4 text-primary shrink-0" />
                      {item.label}
                    </div>
                  );
                })}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  const images = [
    {
      src: "/images/professionelle-entruempelung-service-rhein-erft-kreis.webp",
      alt: "Professionelle Entrümpelung – Rhein-Erft-Kreis",
      label: "Entrümpelung",
    },
    {
      src: "/images/haushaltsaufloesung-komplett-service.webp",
      alt: "Haushaltsauflösung Komplett-Service",
      label: "Haushaltsauflösung",
    },
    {
      src: "/images/wohnungsaufloesung-professionell-service.webp",
      alt: "Professionelle Wohnungsauflösung",
      label: "Wohnungsauflösung",
    },
    {
      src: "/images/umzug-umzugskartons-stressfrei-rhein-erft-kreis.webp",
      alt: "Umzug mit Umzugskartons – Stressfrei",
      label: "Umzug",
    },
    {
      src: "/images/privatumzug-stressfrei-rhein-erft-kreis.webp",
      alt: "Privatumzug Stressfrei Rhein-Erft-Kreis",
      label: "Privatumzug",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % images.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [paused, images.length]);

  const prev = () => {
    setPaused(true);
    setCurrent((c) => (c - 1 + images.length) % images.length);
  };
  const next = () => {
    setPaused(true);
    setCurrent((c) => (c + 1) % images.length);
  };

  return (
    <section className="py-20 sm:py-28 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <FadeIn className="text-center mb-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            Einblicke
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
            Einblicke in unsere Arbeiten
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Von der Entrümpelung bis zum Umzug — echte Einsätze, echte Ergebnisse.
          </p>
        </FadeIn>

        <FadeIn className="relative rounded-2xl overflow-hidden lg:max-w-[50%] mx-auto">
          {/* Slides */}
          <div className="relative h-[220px] sm:h-[320px] lg:h-[380px]">
            {images.map((img, i) => (
              <div
                key={img.src}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  i === current ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                <span className="absolute bottom-16 left-6 sm:bottom-20 sm:left-8 text-white text-sm font-semibold bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  {img.label}
                </span>
              </div>
            ))}
          </div>

          {/* Prev / Next */}
          <button
            onClick={prev}
            aria-label="Vorheriges Bild"
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/60 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            aria-label="Nächstes Bild"
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/60 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => { setPaused(true); setCurrent(i); }}
                aria-label={`Bild ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current ? "w-6 bg-white" : "w-2 bg-white/50"
                }`}
              />
            ))}
          </div>
        </FadeIn>

        <FadeIn className="mt-8 text-center">
          <Link href="/kontakt" style={{ textDecoration: "none" }} className="block w-full sm:w-auto sm:inline-block">
            <Button size="lg" variant="outline" className="w-full sm:w-auto !whitespace-normal h-auto py-3">
              Kostenloses Angebot anfordern
            </Button>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}

function LocationsSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <FadeIn className="text-center mb-14">
          <h2
            className="text-2xl sm:text-3xl font-bold text-foreground mb-3"
            data-testid="text-locations-title"
          >
            Standorte & Einzugsgebiete
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Wir sind in der gesamten Region für Sie unterwegs.
          </p>
        </FadeIn>
        <FadeIn className="flex flex-wrap justify-center gap-3">
          {locations.map((loc) => (
            <Link
              key={loc.name}
              href={loc.href}
              style={{ textDecoration: "none" }}
              data-testid={`badge-location-${loc.name}`}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-card border text-sm text-foreground hover:border-primary/50 hover:text-primary transition-colors cursor-pointer">
                <MapPin className="w-3.5 h-3.5 text-primary" />
                {loc.name}
              </div>
            </Link>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}

const blogPosts = [
  {
    image: "/images/pflegekasse-senioren-entruempelung-kostenuebernahme.webp",
    category: "Entrümpelungen",
    title:
      "Kostenübernahme durch die Pflegekasse bei Entrümpelung und Umzug für Senioren",
    link: "/kostenuebernahme-durch-die-pflegekasse-bei-entruempelung-und-umzug-fuer-senioren",
  },
  {
    image: "/images/messie-wohnung-entruempelung-ratgeber.webp",
    category: "Entrümpelungen",
    title:
      "Entrümpelung Rhein-Erft-Kreis Preise: Alle Kosten einer Entrümpelung",
    link: "/entruempelung-rhein-erft-kreis-preise",
  },
  {
    image: "/images/entruempelung-ratgeber-haus-raeumen.webp",
    category: "Entrümpelungen",
    title: "Missverständnisse zum Thema Entrümpelung",
    link: "/missverstaendnisse-zum-thema-entruempelung",
  },
];

function BlogSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <FadeIn className="text-center mb-14">
          <h2
            className="text-2xl sm:text-3xl font-bold text-foreground mb-3"
            data-testid="text-blog-title"
          >
            Ratgeber & Blog
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Hilfreiche Artikel rund um das Thema Entrümpelung und Umzug.
          </p>
        </FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, i) => (
            <FadeIn key={i}>
              <Link
                href={post.link}
                className="group block"
                style={{ textDecoration: "none" }}
                data-testid={`link-blog-${i}`}
              >
                <Card className="h-full hover-elevate">
                  <div className="aspect-[16/10] rounded-t-md bg-muted overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover rounded-t-md group-hover:scale-105 transition-transform duration-300"
                      width={400}
                      height={250}
                      loading="lazy"
                      data-testid={`img-blog-${i}`}
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-medium text-primary mb-2 block">
                      {post.category}
                    </span>
                    <h3 className="text-sm font-semibold text-foreground leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <span className="text-xs text-muted-foreground mt-3 inline-block">
                      Weiterlesen
                    </span>
                  </div>
                </Card>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function StadtteilSection() {
  const stadtteileByCity = [
    { city: "Bergheim", items: [{ name: "Quadrath-Ichendorf", slug: "quadrath-ichendorf" }, { name: "Niederaussem", slug: "niederaussem" }, { name: "Glesch", slug: "glesch" }, { name: "Paffendorf", slug: "paffendorf" }, { name: "Glessen", slug: "glessen" }, { name: "Oberaussem", slug: "oberaussem" }, { name: "Zieverich", slug: "zieverich" }, { name: "Thorr", slug: "thorr" }] },
    { city: "Kerpen", items: [{ name: "Sindorf", slug: "sindorf" }, { name: "Horrem", slug: "horrem" }, { name: "Buir", slug: "buir" }, { name: "Türnich", slug: "tuernich" }, { name: "Blatzheim", slug: "blatzheim" }] },
    { city: "Pulheim", items: [{ name: "Brauweiler", slug: "brauweiler" }, { name: "Stommeln", slug: "stommeln" }, { name: "Sinnersdorf", slug: "sinnersdorf" }, { name: "Geyen", slug: "geyen" }] },
    { city: "Frechen", items: [{ name: "Königsdorf", slug: "koenigsdorf" }, { name: "Bachem", slug: "bachem" }, { name: "Habbelrath", slug: "habbelrath" }] },
    { city: "Hürth", items: [{ name: "Hermülheim", slug: "hermuelheim" }, { name: "Efferen", slug: "efferen" }, { name: "Gleuel", slug: "gleuel" }, { name: "Berrenrath", slug: "berrenrath" }] },
    { city: "Erftstadt", items: [{ name: "Liblar", slug: "liblar" }, { name: "Lechenich", slug: "lechenich" }, { name: "Gymnich", slug: "gymnich" }, { name: "Bliesheim", slug: "bliesheim" }, { name: "Friesheim", slug: "friesheim" }] },
    { city: "Elsdorf", items: [{ name: "Heppendorf", slug: "heppendorf" }, { name: "Berrendorf", slug: "berrendorf" }, { name: "Niederembt", slug: "niederembt" }, { name: "Oberembt", slug: "oberembt" }] },
    { city: "Grevenbroich", items: [{ name: "Kapellen", slug: "kapellen-grevenbroich" }, { name: "Gustorf", slug: "gustorf" }, { name: "Elsen", slug: "elsen" }] },
    { city: "Rommerskirchen", items: [{ name: "Evinghoven", slug: "evinghoven" }, { name: "Gilbach", slug: "gilbach" }, { name: "Oekoven", slug: "oekoven" }] },
    { city: "Bedburg", items: [{ name: "Kaster", slug: "kaster" }, { name: "Kirchherten", slug: "kirchherten" }, { name: "Lipp", slug: "lipp" }] },
    { city: "Brühl", items: [{ name: "Vochem", slug: "vochem" }, { name: "Kierberg", slug: "kierberg" }, { name: "Pingsdorf", slug: "pingsdorf" }] },
    { city: "Wesseling", items: [{ name: "Urfeld", slug: "urfeld" }, { name: "Keldenich", slug: "keldenich" }, { name: "Berzdorf", slug: "berzdorf" }] },
  ];
  return (
    <section className="py-16 sm:py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <FadeIn className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3" data-testid="text-stadtteile-home-title">
            Entrümpelung in allen Stadtteilen
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Wir sind in allen Stadtteilen und Ortschaften des Rhein-Erft-Kreises für Sie im Einsatz.
          </p>
        </FadeIn>
        <div className="space-y-5">
          {stadtteileByCity.map((group, gi) => (
            <FadeIn key={gi}>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider w-28 shrink-0">{group.city}</span>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((st) => (
                    <Link
                      key={st.slug}
                      href={`/entruempelung-${st.slug}`}
                      className="text-xs bg-background border border-border hover:border-primary hover:text-primary px-2.5 py-1 rounded-full transition-colors"
                      data-testid={`tag-stadtteil-${st.slug}`}
                    >
                      {st.name}
                    </Link>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn className="text-center mt-8">
          <Link href="/standorte" className="text-primary hover:underline text-sm font-medium">
            Alle Standorte & Stadtteile ansehen →
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}

function RechnerSection() {
  const [activeTab, setActiveTab] = useState<"entruempelung" | "umzug">("entruempelung");
  return (
    <section className="py-20 sm:py-28 bg-muted/30" id="kostenrechner">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <FadeIn className="text-center mb-10">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            Kostenrechner
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
            Was kostet mein Vorhaben?
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto">
            Erhalten Sie in wenigen Klicks eine erste Preiseinschätzung — kostenlos und unverbindlich.
          </p>
        </FadeIn>
        <div className="flex gap-2 justify-center mb-8">
          <button
            onClick={() => setActiveTab("entruempelung")}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
              activeTab === "entruempelung"
                ? "bg-primary text-white shadow"
                : "bg-background border border-border text-muted-foreground hover:text-foreground"
            }`}
          >
            Entrümpelung & Haushaltsauflösung
          </button>
          <button
            onClick={() => setActiveTab("umzug")}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
              activeTab === "umzug"
                ? "bg-primary text-white shadow"
                : "bg-background border border-border text-muted-foreground hover:text-foreground"
            }`}
          >
            Umzug
          </button>
        </div>
        <div key={activeTab} className="fade-slide-in">
          {activeTab === "entruempelung" ? <EntruempelungsRechner /> : <UmzugsRechner />}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section id="faq" className="py-20 sm:py-28 bg-card/50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <FadeIn className="text-center mb-14">
          <h2
            className="text-2xl sm:text-3xl font-bold text-foreground mb-3"
            data-testid="text-faq-title"
          >
            Häufig gestellte Fragen
          </h2>
          <p className="text-muted-foreground">
            Hier finden Sie Antworten auf die wichtigsten Fragen.
          </p>
        </FadeIn>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FadeIn key={i}>
              <Card className="cursor-pointer" data-testid={`card-faq-${i}`}>
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                  data-testid={`button-faq-${i}`}
                >
                  <span className="font-medium text-foreground text-sm">
                    {faq.q}
                  </span>
                  {openIndex === i ? (
                    <ChevronUp className="w-4 h-4 text-muted-foreground shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0" />
                  )}
                </button>
                {openIndex === i && (
                  <div className="px-5 pb-5">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                )}
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactFormMini() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const fd = new FormData(e.currentTarget);
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formName: "schnellanfrage",
          name: fd.get("name"),
          phone: fd.get("phone"),
          email: fd.get("email"),
          message: fd.get("message"),
        }),
      });
    } catch (err) {}
    setSent(true);
    trackConversion("schnellanfrage", {
      phone: fd.get("phone") as string,
      email: fd.get("email") as string,
    });
  };
  return sent ? (
    <div className="text-center py-4">
      <CheckCircle2 className="w-8 h-8 text-primary mx-auto mb-2" />
      <p
        className="text-sm font-medium text-foreground"
        data-testid="text-form-success"
      >
        Vielen Dank!
      </p>
      <p className="text-xs text-muted-foreground">
        Wir melden uns schnellstmöglich bei Ihnen.
      </p>
    </div>
  ) : (
    <form className="space-y-3" onSubmit={handleSubmit}>
      <Input name="name" placeholder="Name" required data-testid="input-name" />
      <PhoneInput
        name="phone"
        placeholder="Telefonnummer"
        required
        data-testid="input-phone"
      />
      <Input
        name="email"
        type="email"
        placeholder="E-Mail *"
        required
        data-testid="input-email"
      />
      <Textarea
        name="message"
        placeholder="Beschreiben Sie kurz Ihr Anliegen..."
        className="resize-none"
        rows={3}
        required
        data-testid="input-message"
      />
      <Button
        type="submit"
        className="w-full"
        disabled={sending}
        data-testid="button-submit-mini"
      >
        <Send className="w-4 h-4 mr-2" />
        {sending ? "Wird gesendet..." : "Anfrage senden"}
      </Button>
    </form>
  );
}

function ContactSection() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const fd = new FormData(e.currentTarget);
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formName: "kontakt_formular",
          name: fd.get("name"),
          phone: fd.get("phone"),
          email: fd.get("email"),
          message: fd.get("message"),
        }),
      });
    } catch (err) {}
    setSent(true);
    trackConversion("kontakt_formular", {
      phone: fd.get("phone") as string,
      email: fd.get("email") as string,
    });
  };
  return (
    <section id="kontakt" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <FadeIn>
            <h2
              className="text-2xl sm:text-3xl font-bold text-foreground mb-3"
              data-testid="text-contact-title"
            >
              Kontaktieren Sie uns
            </h2>
            <p className="text-muted-foreground mb-8">
              Offene Fragen? Wir beraten Sie gerne - kostenlos und
              unverbindlich.
            </p>
            <div className="space-y-5">
              <a
                href="tel:+4922715880940"
                className="flex items-center gap-4 p-4 rounded-md bg-card border group"
                style={{ textDecoration: "none" }}
                data-testid="link-contact-phone"
              >
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">
                    Telefon
                  </div>
                  <div className="text-sm text-muted-foreground">
                    02271 / 5880940
                  </div>
                </div>
              </a>
              <a
                href="mailto:info@stressfreientruempelungen.de"
                className="flex items-center gap-4 p-4 rounded-md bg-card border"
                style={{ textDecoration: "none" }}
                data-testid="link-contact-email"
              >
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">
                    E-Mail
                  </div>
                  <div className="text-sm text-muted-foreground">
                    info@stressfreientruempelungen.de
                  </div>
                </div>
              </a>
              <div className="flex items-center gap-4 p-4 rounded-md bg-card border">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">
                    Einzugsgebiet
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Rhein-Erft-Kreis & ganz NRW
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
          <FadeIn delayMs={150}>
            <Card className="p-6 sm:p-8">
              <h3
                className="text-lg font-semibold text-foreground mb-5"
                data-testid="text-contact-form-title"
              >
                Nachricht senden
              </h3>
              {sent ? (
                <div className="text-center py-8">
                  <CheckCircle2 className="w-10 h-10 text-primary mx-auto mb-3" />
                  <p
                    className="font-medium text-foreground"
                    data-testid="text-contact-success"
                  >
                    Vielen Dank für Ihre Nachricht!
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Wir melden uns schnellstmöglich bei Ihnen.
                  </p>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <Label htmlFor="contact-name" className="text-sm text-muted-foreground mb-1.5 block">
                      Name
                    </Label>
                    <Input
                      id="contact-name"
                      name="name"
                      required
                      data-testid="input-contact-name"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="contact-email" className="text-sm text-muted-foreground mb-1.5 block">
                        E-Mail
                      </Label>
                      <Input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        data-testid="input-contact-email"
                      />
                    </div>
                    <div>
                      <Label htmlFor="contact-phone" className="text-sm text-muted-foreground mb-1.5 block">
                        Telefon
                      </Label>
                      <PhoneInput
                        id="contact-phone"
                        name="phone"
                        required
                        data-testid="input-contact-phone"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="contact-message" className="text-sm text-muted-foreground mb-1.5 block">
                      Nachricht
                    </Label>
                    <Textarea
                      id="contact-message"
                      name="message"
                      required
                      className="resize-none"
                      rows={4}
                      data-testid="input-contact-message"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full"
                    size="lg"
                    disabled={sending}
                    data-testid="button-contact-submit"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    {sending ? "Wird gesendet..." : "Nachricht senden"}
                  </Button>
                </form>
              )}
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  useEffect(() => {
    document.title = "Stressfrei Entrümpelungen & Umzüge | Ihr Partner im Rhein-Erft-Kreis";
    let _canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!_canonical) { _canonical = document.createElement("link"); _canonical.setAttribute("rel", "canonical"); document.head.appendChild(_canonical); }
    _canonical.setAttribute("href", "https://stressfreientruempelungen.de/");
    const _setOgMeta = (prop: string, val: string) => { let m = document.querySelector(`meta[property="${prop}"]`) as HTMLMetaElement | null; if (!m) { m = document.createElement("meta"); m.setAttribute("property", prop); document.head.appendChild(m); } m.setAttribute("content", val); };
    _setOgMeta("og:url", "https://stressfreientruempelungen.de/");
    _setOgMeta("og:image", "https://stressfreientruempelungen.de/images/umzug-umzugskartons-stressfrei-rhein-erft-kreis.webp");
    _setOgMeta("og:locale", "de_DE");
    const metaDesc = document.querySelector('meta[name="description"]');
    const descContent = "Professionelle Entrümpelungen, Haushaltsauflösungen & Umzüge im Rhein-Erft-Kreis ✓ Festpreise ✓ 5.0 Sterne bei Google ✓ 500+ Aufträge ✓ Kostenlose Beratung ☎ 02271 / 5880940";
    if (metaDesc) metaDesc.setAttribute("content", descContent);
    else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = descContent;
      document.head.appendChild(meta);
    }

    const existingLd = document.querySelector('script[data-home-ld]');
    if (!existingLd) {
      const ldScript = document.createElement("script");
      ldScript.type = "application/ld+json";
      ldScript.setAttribute("data-home-ld", "true");
      ldScript.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://stressfreientruempelungen.de/#organization",
        name: "Stressfrei Entrümpelungen & Umzüge",
        alternateName: "Stressfrei Entrümpelungen",
        description: "Professionelle Entrümpelungen, Haushaltsauflösungen & Umzüge im Rhein-Erft-Kreis und ganz NRW. Festpreise, kostenlose Beratung und besenreine Übergabe.",
        url: "https://stressfreientruempelungen.de",
        telephone: "+4922715880940",
        email: "info@stressfreientruempelungen.de",
        image: "https://stressfreientruempelungen.de/images/umzug-umzugskartons-stressfrei-rhein-erft-kreis.webp",
        logo: "https://stressfreientruempelungen.de/images/logo.webp",
        priceRange: "€€",
        currenciesAccepted: "EUR",
        paymentAccepted: "Cash, Bank Transfer",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Hauptstraße",
          addressLocality: "Bergheim",
          postalCode: "50126",
          addressRegion: "Nordrhein-Westfalen",
          addressCountry: "DE",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 50.9548,
          longitude: 6.6396,
        },
        areaServed: [
          { "@type": "State", name: "Nordrhein-Westfalen" },
          { "@type": "AdministrativeArea", name: "Rhein-Erft-Kreis" },
          { "@type": "City", name: "Bergheim" },
          { "@type": "City", name: "Kerpen" },
          { "@type": "City", name: "Frechen" },
          { "@type": "City", name: "Hürth" },
          { "@type": "City", name: "Pulheim" },
          { "@type": "City", name: "Brühl" },
          { "@type": "City", name: "Wesseling" },
          { "@type": "City", name: "Erftstadt" },
          { "@type": "City", name: "Bedburg" },
          { "@type": "City", name: "Elsdorf" },
          { "@type": "City", name: "Köln" },
          { "@type": "City", name: "Düren" },
          { "@type": "City", name: "Aachen" },
          { "@type": "City", name: "Düsseldorf" },
          { "@type": "City", name: "Bonn" },
          { "@type": "City", name: "Mönchengladbach" },
          { "@type": "City", name: "Leverkusen" },
          { "@type": "City", name: "Troisdorf" },
          { "@type": "City", name: "Siegburg" },
          { "@type": "City", name: "Sankt Augustin" },
          { "@type": "City", name: "Euskirchen" },
          { "@type": "City", name: "Jülich" },
          { "@type": "City", name: "Linnich" },
          { "@type": "City", name: "Grevenbroich" },
          { "@type": "City", name: "Dormagen" },
          { "@type": "City", name: "Neuss" },
          { "@type": "City", name: "Langenfeld" },
          { "@type": "City", name: "Monheim am Rhein" },
          { "@type": "City", name: "Bergisch Gladbach" },
          { "@type": "City", name: "Königswinter" },
          { "@type": "City", name: "Bad Honnef" },
          { "@type": "City", name: "Meckenheim" },
          { "@type": "City", name: "Rheinbach" },
          { "@type": "City", name: "Zülpich" },
          { "@type": "City", name: "Nideggen" },
          { "@type": "City", name: "Stolberg" },
          { "@type": "City", name: "Eschweiler" },
          { "@type": "City", name: "Herzogenrath" },
          { "@type": "City", name: "Würselen" },
          { "@type": "City", name: "Erkelenz" },
          { "@type": "City", name: "Heinsberg" },
          { "@type": "City", name: "Wegberg" },
          { "@type": "City", name: "Rommerskirchen" },
          { "@type": "City", name: "Bornheim" },
          { "@type": "City", name: "Swisttal" },
          { "@type": "City", name: "Weilerswist" },
          { "@type": "City", name: "Nörvenich" },
          { "@type": "City", name: "Niederzier" },
          { "@type": "City", name: "Inden" },
          { "@type": "City", name: "Aldenhoven" },
          { "@type": "City", name: "Titz" },
          { "@type": "City", name: "Korschenbroich" },
          { "@type": "City", name: "Jüchen" },
          { "@type": "City", name: "Kaarst" },
          { "@type": "City", name: "Meerbusch" },
          { "@type": "City", name: "Hilden" },
          { "@type": "City", name: "Erkrath" },
          { "@type": "City", name: "Ratingen" },
        ],
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "08:00",
            closes: "18:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Saturday",
            opens: "09:00",
            closes: "14:00",
          },
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5.0",
          reviewCount: "92",
          bestRating: "5",
          worstRating: "1",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Dienstleistungen",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Entrümpelung",
                description: "Professionelle Entrümpelung von Wohnungen, Häusern, Kellern und Dachböden mit Festpreisgarantie.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Haushaltsauflösung",
                description: "Komplette Haushaltsauflösungen mit Wertanrechnung und besenreiner Übergabe.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Umzüge",
                description: "Professionelle Umzüge im Rhein-Erft-Kreis und NRW mit Möbelmontage und Halteverbotszone.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Schrottankauf",
                description: "Ankauf von Altmetall und Schrott zur Wertanrechnung bei Entrümpelungen.",
              },
            },
          ],
        },
        sameAs: [
          "https://share.google/bYXZHQXPyL6EWKLhL",
        ],
      });
      document.head.appendChild(ldScript);
    }

    const existingWebsite = document.querySelector('script[data-website-ld]');
    if (!existingWebsite) {
      const websiteScript = document.createElement("script");
      websiteScript.type = "application/ld+json";
      websiteScript.setAttribute("data-website-ld", "true");
      websiteScript.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": "https://stressfreientruempelungen.de/#website",
        name: "Stressfrei Entrümpelungen & Umzüge",
        url: "https://stressfreientruempelungen.de",
        description: "Professionelle Entrümpelungen, Haushaltsauflösungen & Umzüge im Rhein-Erft-Kreis und ganz NRW.",
        inLanguage: "de-DE",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://stressfreientruempelungen.de/faq?q={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      });
      document.head.appendChild(websiteScript);
    }

    const existingReviews = document.querySelector('script[data-reviews-ld]');
    if (!existingReviews) {
      const reviewScript = document.createElement("script");
      reviewScript.type = "application/ld+json";
      reviewScript.setAttribute("data-reviews-ld", "true");
      reviewScript.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://stressfreientruempelungen.de/#reviews",
        "name": "Stressfrei Entrümpelungen & Umzüge",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "reviewCount": "92",
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": [
          { "@type": "Review", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "author": { "@type": "Person", "name": "Sebastian K." }, "reviewBody": "Top-Service! Die Entrümpelung verlief schnell, professionell und zuverlässig. Das Team war pünktlich, freundlich und hat alles sauber hinterlassen. Preis-Leistung ist absolut fair!" },
          { "@type": "Review", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "author": { "@type": "Person", "name": "Feniajulia" }, "reviewBody": "Vom ersten Kontakt an war das Team äußerst professionell und freundlich. Sie kamen pünktlich, hatten alles Nötige dabei und arbeiteten zügig und effizient. Der Name ist Programm!" },
          { "@type": "Review", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "author": { "@type": "Person", "name": "Michaela M." }, "reviewBody": "Schnell einen Termin bekommen, pünktlich, freundlich und unkompliziert wurde meine Garage und mein Keller geräumt. Schränke wurden demontiert, besenrein hinterlassen." },
          { "@type": "Review", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "author": { "@type": "Person", "name": "Klarabella" }, "reviewBody": "Ganz toller Service, Terminvergabe schnell und unkompliziert per WhatsApp, sehr sympathisches Team, haben alles mitgenommen und richtig gut gearbeitet." },
          { "@type": "Review", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "author": { "@type": "Person", "name": "Tamara K." }, "reviewBody": "Haushaltsauflösung lief super. Schneller Termin, professionelle Durchführung und fairer Preis. Ich bin sehr zufrieden und kann die Firma nur wärmstens empfehlen!" },
          { "@type": "Review", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "author": { "@type": "Person", "name": "Angelika B." }, "reviewBody": "Schnell, zuverlässig, freundlich und immer hilfsbereit. Preis-Leistungsverhältnis vollkommen in Ordnung. Das Team konnte mir eine große Last abnehmen." }
        ]
      });
      document.head.appendChild(reviewScript);
    }

    return () => {
      const ld = document.querySelector('script[data-home-ld]');
      if (ld) ld.remove();
      const ws = document.querySelector('script[data-website-ld]');
      if (ws) ws.remove();
      const rv = document.querySelector('script[data-reviews-ld]');
      if (rv) rv.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background pb-14 md:pb-0">
      <Navbar />
      <HeroSection />
      <StatsBar />
      <QuickContactStrip />
      <PainPointsSection />
      <ServicesSection />
      <StepsSection />
      <InlineContactBanner
        id="cta_beratung"
        title="Kostenlose Beratung gewünscht?"
        subtitle="Wir beraten Sie unverbindlich zu allen Dienstleistungen — rufen Sie an oder schicken Sie uns eine kurze Nachricht."
      />
      <ReviewsSection />
      <InlineContactBanner
        id="cta_bewertungen"
        title="Überzeugt? Jetzt anfragen!"
        subtitle="Schließen Sie sich über 500 zufriedenen Kunden an. Wir erstellen Ihnen ein kostenloses Festpreis-Angebot."
      />
      <RechnerSection />
      <ComparisonSection />
      <AboutSection />
      <GallerySection />
      <LocationsSection />
      <InlineContactBanner
        id="cta_standorte"
        title="Wir kommen zu Ihnen!"
        subtitle="Egal ob Bergheim, Köln oder anderswo in NRW — senden Sie uns Ihre Anfrage und wir melden uns sofort."
      />
      <BlogSection />
      <StadtteilSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
      <MobileBottomBar />
    </div>
  );
}
