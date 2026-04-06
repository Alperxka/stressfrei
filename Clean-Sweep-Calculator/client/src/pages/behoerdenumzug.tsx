import { useEffect } from "react";
import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { PageLayout, PageHero, CTASection, InternalLinksSection } from "@/components/layout";
import { motion } from "framer-motion";
import {
  Star, CheckCircle2, Clock, ShieldCheck, Users, Award, Shield, FileText, Lock, ClipboardList, Truck, Building2, MapPin,
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
    icon: ClipboardList,
    title: "Strukturierte Umzugsplanung",
    description: "Behördenumzüge erfordern präzise Koordination zwischen Abteilungen, Terminen und Zuständigkeiten. Wir erstellen einen detaillierten Ablaufplan und halten ihn ein.",
  },
  {
    icon: FileText,
    title: "Sicherer Aktentransport",
    description: "Behördenakten, Personalunterlagen und vertrauliche Dokumente werden in verschlossenen Archivboxen oder gesicherten Containern transportiert — diskret und nachverfolgbar.",
  },
  {
    icon: Lock,
    title: "Datenschutzkonforme Abläufe",
    description: "Wir arbeiten nach DSGVO-konformen Abläufen. Auf Wunsch unterzeichnen wir eine Verschwiegenheitserklärung und stimmen die Prozesse mit Ihrer Datenschutzbeauftragten ab.",
  },
  {
    icon: Building2,
    title: "Mobiliar & Technik",
    description: "Schreibtische, Aktenschränke, Konferenzmöbel und technische Ausstattung werden professionell demontiert, transportiert und am neuen Standort wieder aufgebaut.",
  },
  {
    icon: Truck,
    title: "Eigene Fahrzeugflotte",
    description: "Wir verfügen über eine zuverlässige, gepflegte Fahrzeugflotte in verschiedenen Größen — für kleine Büros ebenso wie für große Behördenstandorte.",
  },
  {
    icon: ShieldCheck,
    title: "Vollversichert & zuverlässig",
    description: "Alle transportierten Güter sind umfassend versichert. Festpreise und klare Verträge schaffen Planungssicherheit für den öffentlichen Sektor.",
  },
];

const highlights = [
  "Datenschutzkonforme Abläufe",
  "Festpreisgarantie",
  "Erfahrung mit Behörden",
  "NRW-weit tätig",
];

const reviews = [
  {
    name: "Thomas B., Amtsleiter",
    text: "Der Umzug unserer Abteilung lief reibungslos und diskret. Alle Akten wurden sicher und nachvollziehbar transportiert. Sehr professioneller Ablauf — klare Empfehlung.",
    rating: 5,
  },
  {
    name: "Martina K., Verwaltungsleiterin",
    text: "Termingerecht, sorgfältig und zuverlässig. Das Team hat auch sensible Unterlagen mit der gebotenen Diskretion behandelt. Sehr zufrieden mit dem Ergebnis.",
    rating: 5,
  },
  {
    name: "Hans-Joachim R., Sachbearbeiter",
    text: "Trotz der komplexen Anforderungen unseres Behördenumzugs lief alles nach Plan. Jedes Möbelstück und jede Akte war am richtigen Platz. Gerne wieder.",
    rating: 5,
  },
];

export default function BehoerdenumzugPage() {
  useEffect(() => {
    document.title = "Behördenumzug NRW | Diskret, Sicher & Termingerecht | Stressfrei";
    let _canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!_canonical) { _canonical = document.createElement("link"); _canonical.setAttribute("rel", "canonical"); document.head.appendChild(_canonical); }
    _canonical.setAttribute("href", "https://stressfreientruempelungen.de/behoerdenumzug");
    const _setOgMeta = (prop: string, val: string) => { let m = document.querySelector(`meta[property="${prop}"]`) as HTMLMetaElement | null; if (!m) { m = document.createElement("meta"); m.setAttribute("property", prop); document.head.appendChild(m); } m.setAttribute("content", val); };
    _setOgMeta("og:url", "https://stressfreientruempelungen.de/behoerdenumzug");
    _setOgMeta("og:image", "https://stressfreientruempelungen.de/images/bueroumzug-firmenumzug-dienstleistung-nrw.webp");
    _setOgMeta("og:locale", "de_DE");
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Behördenumzug NRW – diskret, sicher und termingerecht. DSGVO-konforme Abläufe, sicherer Aktentransport, Festpreisgarantie. Kostenlose Beratung: ☎ 02271 5880940");
    }
  }, []);

  return (
    <>
    <PageLayout>
      <PageHero
        title="Behördenumzug NRW – Diskret, Sicher & Pünktlich"
        subtitle="Umzüge für Ämter, Behörden und öffentliche Einrichtungen in NRW. Datenschutzkonforme Abläufe, sicherer Aktentransport und klare Festpreise."
        highlight="Behördenumzug"
      />

      <section className="pb-8 sm:pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeIn}>
            <img
              src="/images/bueroumzug-firmenumzug-dienstleistung-nrw.webp"
              alt="Behördenumzug NRW – professioneller Umzugsservice von Stressfrei"
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
              Behördenumzug in NRW – mit Erfahrung und Diskretion
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ein Behördenumzug ist kein gewöhnlicher Büroumzug. Sensible Unterlagen, vertrauliche Akten,
              öffentliches Mobiliar und strenge Terminvorgaben stellen besondere Anforderungen. Wir bringen
              die Erfahrung mit, die es für einen reibungslosen Behördenumzug braucht — diskret, pünktlich
              und datenschutzkonform. In ganz Nordrhein-Westfalen, zu fairen Festpreisen.
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
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">Unser Versprechen beim Behördenumzug</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Drei Garantien für einen reibungslosen Behördenumzug.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: FileText, title: "Vollständige Dokumentation inklusive", text: "Jedes Möbelstück, jede Aktenkiste, jedes Gerät wird erfasst und protokolliert. So behalten Sie jederzeit den Überblick — und wir gewährleisten eine lückenlose Übergabe." },
              { icon: ShieldCheck, title: "Akten und Mobiliar kommen sicher an", text: "Sensible Unterlagen werden diskret und sicher verpackt transportiert. Unsere Mitarbeiter sind auf vertrauliche Umgebungen geschult und arbeiten datenschutzkonform." },
              { icon: Clock, title: "Dienststelle schnell wieder einsatzbereit", text: "Wir richten das Büro am Zielort funktional ein, damit Ihre Mitarbeitenden sofort weiterarbeiten können. Kein unnötiger Leerlauf, keine langen Umbauphasen." },
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
              Unsere Leistungen beim Behördenumzug
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Speziell auf die Anforderungen des öffentlichen Sektors abgestimmt.
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
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">Das sagen unsere Auftraggeber</h2>
            <p className="text-muted-foreground">Vertrauen auch öffentliche Einrichtungen — seit Jahren.</p>
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
                alt="Team Stressfrei Entrümpelungen NRW – Behördenumzug"
                className="w-full rounded-2xl shadow-lg object-cover"
                width={1200}
                height={575}
                loading="lazy"
              />
            </motion.div>
            <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.15 }}>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Erfahrener Partner für Behörden und öffentliche Einrichtungen in NRW
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Wir kennen die besonderen Anforderungen, die ein Umzug im öffentlichen Sektor mit sich bringt:
                Vergaberechtliche Anforderungen, datenschutzkonforme Prozesse, feste Übergabetermine und
                die Notwendigkeit, den laufenden Betrieb so wenig wie möglich zu stören. Unser Team
                arbeitet diskret, strukturiert und zuverlässig.
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
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">Häufige Fragen zum Behördenumzug</h2>
          </motion.div>
          <div className="space-y-4">
            {[
              { q: "Wie werden sensible Behördenakten beim Umzug gesichert?", a: "Vertrauliche Dokumente und Akten werden in verschlossenen Archivboxen oder gesicherten Transportbehältern transportiert. Wir können eine Verschwiegenheitserklärung unterzeichnen und die Abläufe vorab mit Ihrer Datenschutzbeauftragten abstimmen." },
              { q: "Können Behördenumzüge auch außerhalb der Amtszeiten stattfinden?", a: "Ja, wir führen Umzüge auf Wunsch abends, am Wochenende oder an Feiertagen durch — damit der Publikumsverkehr und die interne Arbeit so wenig wie möglich unterbrochen werden." },
              { q: "Was kostet ein Behördenumzug in NRW?", a: "Die Kosten hängen vom Umfang ab: Fläche, Anzahl der Mitarbeiter, Aktenmenge und Transportweg. Wir erstellen nach einer kostenlosen Besichtigung ein transparentes Festpreisangebot, das Ausschreibungsanforderungen erfüllt." },
              { q: "Können Sie auch Archivbestände und Aktenkeller umziehen?", a: "Ja, der Transport von Archivgut ist unsere Spezialität. Wir verpacken, transportieren und lagern Aktenbestände sicher und nachvollziehbar — auch in Kombination mit einem Archivumzug." },
              { q: "Wie koordinieren Sie einen Umzug über mehrere Abteilungen?", a: "Wir erstellen gemeinsam mit Ihrer Umzugskoordination einen detaillierten Etappenplan. Jede Abteilung wird einzeln und in der richtigen Reihenfolge umgezogen, damit der Betrieb stets aufrechterhalten bleibt." },
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
              <h2 className="text-xl sm:text-2xl font-bold text-foreground">Behördenumzug in Ihrer Stadt im Rhein-Erft-Kreis</h2>
            </div>
            <p className="text-muted-foreground">Wir sind NRW-weit für Behörden und öffentliche Einrichtungen im Einsatz — mit besonderer Expertise im Rhein-Erft-Kreis.</p>
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

      <InternalLinksSection pageKey="behoerdenumzug" />
      <CTASection />
    </PageLayout>
    </>
  );
}
