import { useEffect } from "react";
import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { PageLayout, PageHero, CTASection, InternalLinksSection } from "@/components/layout";
import { motion } from "framer-motion";
import {
  Star, CheckCircle2, Clock, ShieldCheck, Users, Award, Shield, FileText, Package, Lock, Truck, ArchiveRestore, MapPin,
} from "lucide-react";

const cityLinks = [
  { label: "Bergheim", href: "/umzugsunternehmen-bergheim" },
  { label: "Kerpen", href: "/umzugsunternehmen-kerpen" },
  { label: "Frechen", href: "/umzugsunternehmen-frechen" },
  { label: "Hürth", href: "/umzugsunternehmen-huerth" },
  { label: "Pulheim", href: "/umzugsunternehmen-pulheim" },
  { label: "Erftstadt", href: "/umzugsunternehmen-erftstadt" },
  { label: "Bedburg", href: "/umzugsunternehmen-bedburg" },
  { label: "Elsdorf", href: "/umzugsunternehmen-elsdorf" },
];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const services = [
  {
    icon: Package,
    title: "Professionelles Einpacken von Archivgut",
    description: "Akten, Ordner, Leitz-Mappen und Kartons werden fachgerecht in geeigneten Archivboxen oder Umzugscontainern verpackt — beschriftet und sortiert für eine geordnete Ablage am Zielort.",
  },
  {
    icon: FileText,
    title: "Systematische Inventarisierung",
    description: "Auf Wunsch erstellen wir eine genaue Inventarliste aller transportierten Archivboxen und Einheiten — für lückenlose Nachverfolgbarkeit und sichere Übergabe.",
  },
  {
    icon: Lock,
    title: "Sicherheit & Vertraulichkeit",
    description: "Archivgut wird diskret und sicher transportiert. Verschlossene Transportbehälter, keine unbefugten Zugriffe. Auf Wunsch Verschwiegenheitserklärung und DSGVO-Abstimmung.",
  },
  {
    icon: ArchiveRestore,
    title: "Geordnete Einlagerung am Zielort",
    description: "Nicht nur transportieren — wir räumen die Archivboxen am Zielort systematisch ein. Ihre Struktur bleibt erhalten, der Aktenzugriff bleibt zu jeder Zeit gewährleistet.",
  },
  {
    icon: Truck,
    title: "Transport für alle Archivmengen",
    description: "Ob wenige Regalböden oder mehrere hundert Laufmeter Archiv — wir haben die passenden Fahrzeuge und das Know-how für Archivumzüge jeder Größenordnung.",
  },
  {
    icon: ShieldCheck,
    title: "Vollversichert & Festpreis",
    description: "Alle Archivmaterialien sind während des Transports umfassend versichert. Sie erhalten vor dem Umzug einen verbindlichen Festpreis — ohne Überraschungen.",
  },
];

const highlights = [
  "Systeme bleiben erhalten",
  "Festpreisgarantie",
  "Diskret & vertraulich",
  "NRW-weit tätig",
];

const reviews = [
  {
    name: "Dr. Claudia V., Anwaltskanzlei",
    text: "Unser Kanzleiarchiv mit tausenden Akten wurde lückenlos und sicher umgezogen. Jede Box war beschriftet und am richtigen Regal. Ausgezeichnete Arbeit!",
    rating: 5,
  },
  {
    name: "Frank H., Stadtverwaltung",
    text: "Der Archivumzug unserer Behörde lief nach Plan — diskret und ohne ein einziges fehlgeleitetes Dokument. Sehr professionelle Abwicklung, klare Weiterempfehlung.",
    rating: 5,
  },
  {
    name: "Ingrid S., Unternehmensarchiv",
    text: "Mehrere hundert Laufmeter Unternehmensarchiv — alles wurde strukturiert umgezogen und wieder eingeräumt. Das Team hat mit größter Sorgfalt gearbeitet.",
    rating: 5,
  },
];

export default function ArchivumzugPage() {
  useEffect(() => {
    document.title = "Archivumzug NRW | Akten & Archive sicher umziehen | Stressfrei";
    let _canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!_canonical) { _canonical = document.createElement("link"); _canonical.setAttribute("rel", "canonical"); document.head.appendChild(_canonical); }
    _canonical.setAttribute("href", "https://stressfreientruempelungen.de/archivumzug");
    const _setOgMeta = (prop: string, val: string) => { let m = document.querySelector(`meta[property="${prop}"]`) as HTMLMetaElement | null; if (!m) { m = document.createElement("meta"); m.setAttribute("property", prop); document.head.appendChild(m); } m.setAttribute("content", val); };
    _setOgMeta("og:url", "https://stressfreientruempelungen.de/archivumzug");
    _setOgMeta("og:image", "https://stressfreientruempelungen.de/images/bueroumzug-firmenumzug-dienstleistung-nrw.webp");
    _setOgMeta("og:locale", "de_DE");
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Archivumzug NRW – Akten, Ordner und Archive sicher, diskret und systematisch umziehen. Für Kanzleien, Behörden und Unternehmen. Kostenlose Beratung: ☎ 02271 5880940");
    }
  }, []);

  return (
    <>
    <PageLayout>
      <PageHero
        title="Archivumzug NRW – Akten & Archive sicher umziehen"
        subtitle="Tausende Ordner, Laufmeter Akten, sensible Unterlagen – wir transportieren Ihr Archiv systematisch, sicher und vertraulich an den neuen Standort."
        highlight="Archivumzug"
      />

      <section className="pb-8 sm:pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeIn}>
            <img
              src="/images/bueroumzug-firmenumzug-dienstleistung-nrw.webp"
              alt="Archivumzug NRW – sichere Akten- und Archivtransporte von Stressfrei"
              className="w-full rounded-2xl shadow-lg object-cover aspect-[16/9]"
              width={1200}
              height={675}
              loading="eager"
              fetchpriority="high"
              decoding="async"
            />
          </motion.div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div className="text-center mb-14" {...fadeIn}>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
              Archivumzug in NRW – sicher, systematisch, diskret
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Archive enthalten oft die wertvollsten und sensibelsten Informationen eines Unternehmens oder
              einer Behörde. Ihr Umzug erfordert deshalb nicht nur Sorgfalt beim Transport, sondern auch
              ein strukturiertes Vorgehen beim Einpacken, Beschriften und Einräumen. Wir haben die Erfahrung
              und die Prozesse, um Archivumzüge in NRW professionell abzuwickeln — von wenigen Ordnern bis
              zu mehreren hundert Laufmetern.
            </p>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {highlights.map((h) => (
              <div key={h} className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-primary/5 border text-sm text-foreground">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                {h}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-primary/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div className="text-center mb-12" {...fadeIn}>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">Unser Versprechen beim Archivumzug</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Drei Garantien für eine sichere Akten- und Archivverlagerung.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: ArchiveRestore, title: "Jede Box systematisch erfasst", text: "Vor dem Umzug erstellen wir eine vollständige Inventarisierung. Jede Kiste wird nummeriert, beschriftet und in einem Verzeichnis festgehalten — für lückenlose Nachvollziehbarkeit." },
              { icon: ShieldCheck, title: "Ihr Archiv kommt vollständig und geordnet an", text: "Akten, Ordner und Archivboxen werden schonend transportiert und am Zielort in der gleichen Struktur aufgestellt. Keine vermischten Bestände, keine Verluste." },
              { icon: Clock, title: "Dokumentenzugriff bleibt jederzeit möglich", text: "Auf Wunsch priorisieren wir kritische Unterlagen, die auch während des Umzugs schnell verfügbar sein müssen. Abläufe werden so geplant, dass es zu keinen Zugriffsunterbrechungen kommt." },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={i} {...fadeIn} transition={{ duration: 0.5, delay: i * 0.1 }} className="flex gap-5 p-6 bg-background rounded-2xl border">
                  <div className="w-11 h-11 rounded-md bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-card/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div className="text-center mb-14" {...fadeIn}>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
              Unsere Leistungen beim Archivumzug
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Vom Einpacken bis zum strukturierten Einräumen am Zielort — alles aus einer Hand.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div key={s.title} {...fadeIn} transition={{ duration: 0.5, delay: i * 0.08 }}>
                  <Card className="p-6 h-full hover-elevate">
                    <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div className="text-center mb-14" {...fadeIn}>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">Das sagen unsere Kunden</h2>
            <p className="text-muted-foreground">Kanzleien, Behörden und Unternehmen vertrauen uns.</p>
          </motion.div>
          <div className="grid sm:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <motion.div key={i} {...fadeIn} transition={{ duration: 0.5, delay: i * 0.08 }}>
                <Card className="p-6 h-full">
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: r.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">"{r.text}"</p>
                  <p className="text-sm font-medium text-foreground">{r.name}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-card/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeIn}>
              <img
                src="/images/stressfrei-entruempelungen-team-rhein-erft-kreis.webp"
                alt="Team Stressfrei Entrümpelungen NRW – Archivumzug"
                className="w-full rounded-2xl shadow-lg object-cover"
                width={1200}
                height={575}
                loading="lazy"
              />
            </motion.div>
            <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.15 }}>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Ihr Spezialist für Archiv- und Aktentransporte in NRW
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Ob Anwaltskanzlei, Steuerberatungsbüro, Unternehmensarchiv oder Behördenkeller — wir haben
                die Erfahrung und das System, um auch große Archivbestände strukturiert und sicher zu
                transportieren. Jede Box bekommt ihre Beschriftung, jedes Regal seinen Platz.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: Shield, label: "Vollversichert" },
                  { icon: Award, label: "Top bewertet" },
                  { icon: Users, label: "Erfahrenes Team" },
                  { icon: Clock, label: "Termingerecht" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-center gap-3 p-3 rounded-md bg-card border text-sm font-medium text-foreground">
                      <Icon className="w-4 h-4 text-primary shrink-0" />
                      {item.label}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeIn} className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">Häufige Fragen zum Archivumzug</h2>
          </motion.div>
          <div className="space-y-4">
            {[
              { q: "Wie werden Akten und Ordner beim Archivumzug verpackt?", a: "Wir verwenden stabile Archivboxen oder auf Wunsch verschlossene Sicherheitsbehälter. Jede Box wird beschriftet und nummeriert — damit am Zielort alles sofort auffindbar ist." },
              { q: "Wie viele Laufmeter Archiv können Sie transportieren?", a: "Wir haben die Kapazitäten für kleine und sehr große Archivbestände. Von wenigen Regalmeter bis mehreren hundert Laufmetern — wir skalieren Fahrzeuge und Team entsprechend." },
              { q: "Wie sichern Sie die Vertraulichkeit beim Aktentransport?", a: "Alle Transporte finden diskret und in verschlossenen Behältern statt. Auf Wunsch unterzeichnen wir eine Vertraulichkeitsvereinbarung und stimmen die Abläufe mit Ihrer Datenschutzbeauftragten ab." },
              { q: "Können Sie das Archiv auch am neuen Standort einräumen?", a: "Ja, das ist unser vollständiger Archivumzug-Service. Wir räumen die Archivboxen nach Ihrer Vorgabe oder nach unserem bewährten System am neuen Standort ein — damit alles sofort zugänglich ist." },
              { q: "Was kostet ein Archivumzug in NRW?", a: "Die Kosten hängen von der Archivmenge, dem Transportweg und dem gewünschten Leistungsumfang ab. Nach einer kostenlosen Bestandsaufnahme erhalten Sie ein verbindliches Festpreisangebot." },
            ].map((faq, i) => (
              <motion.div key={i} {...fadeIn} transition={{ duration: 0.4, delay: i * 0.06 }}>
                <Card className="p-5">
                  <h3 className="font-semibold mb-2 text-foreground">{faq.q}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-card/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeIn} className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <MapPin className="w-5 h-5 text-primary" />
              <h2 className="text-xl sm:text-2xl font-bold text-foreground">Archivumzug in Ihrer Stadt im Rhein-Erft-Kreis</h2>
            </div>
            <p className="text-muted-foreground">Wir verlegen Archive und Aktenbestände NRW-weit — mit besonderer Expertise im Rhein-Erft-Kreis und der Region Köln.</p>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {cityLinks.map((c) => (
              <Link key={c.href} href={c.href} style={{ textDecoration: "none" }}>
                <div className="flex items-center gap-2 px-4 py-3 rounded-lg border border-border/50 text-sm text-muted-foreground hover:bg-primary/5 hover:text-primary hover:border-primary/30 transition-colors cursor-pointer">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-primary" />
                  Umzug {c.label}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <InternalLinksSection pageKey="archivumzug" />
      <CTASection />
    </PageLayout>
    </>
  );
}
