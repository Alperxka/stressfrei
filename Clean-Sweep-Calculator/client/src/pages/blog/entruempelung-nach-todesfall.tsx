import { useEffect } from "react";
import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { PageLayout, PageHero, CTASection, BlogArticleCTA } from "@/components/layout";
import { motion } from "framer-motion";
import { ArrowLeft, Heart, CheckCircle2, Clock, Shield, FileText, Info, HelpCircle, Lightbulb, Phone, MapPin } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const ersteMassnahmen = [
  { nr: "01", titel: "Sterbeurkunde beantragen", text: "Beim Standesamt des Sterbeorts beantragen. Benötigen Sie mehrfach (Bank, Versicherung, Behörden). Kostet ca. 10–15 € je Ausfertigung." },
  { nr: "02", titel: "Wohnung sichern", text: "Schlüssel vom Vermieter, Nachbarn oder Schlüsseldienst. Wertgegenstände sofort dokumentieren (Fotos). Fenster schließen, Haupthähne prüfen." },
  { nr: "03", titel: "Vermieter informieren", text: "Kündigung des Mietvertrags durch Erben möglich — mit Einhaltung der gesetzlichen 3-Monats-Frist oder nach Rücksprache mit dem Vermieter." },
  { nr: "04", titel: "Laufende Verträge kündigen", text: "Strom, Gas, Internet, Telefon, Zeitungen, Versicherungen, GEZ etc. — bei laufenden Kosten schnell handeln, schriftlich mit Sterbeurkunde." },
  { nr: "05", titel: "Bank und Finanzen", text: "Konten und Depots melden, Daueraufträge prüfen, Erbschein beim Nachlassgericht beantragen (dauert 4–8 Wochen). Lastschriften stoppen." },
  { nr: "06", titel: "Nachlassverzeichnis erstellen", text: "Vollständige Liste aller Vermögenswerte und Schulden. Wichtig für das Erbschaftssteuerrecht und für die Erbengemeinschaft." },
];

const wohnungsraeumungTipps = [
  { titel: "Früh beginnen — aber nicht überstürzen", text: "Mietverträge haben 3 Monate Kündigungsfrist. Nutzen Sie diese Zeit sorgfältig für Sichtung, Auswahl und Planung der Auflösung." },
  { titel: "Persönliche Gegenstände zuerst sichern", text: "Fotos, Briefe, Dokumente, Schmuck und Erinnerungsstücke zuerst aussortieren — bevor das Entrümpelungsteam kommt." },
  { titel: "Wertgegenstände schätzen lassen", text: "Vor der Auflösung prüfen, ob Gegenstände (Antiquitäten, Kunst, Schmuck) wertvoll sind. Eine Wertanrechnung kann die Kosten erheblich senken." },
  { titel: "Erbengemeinschaft koordinieren", text: "Bei mehreren Erben: Klären Sie frühzeitig, wer was möchte. Uneinigkeit kann die Auflösung um Monate verzögern." },
  { titel: "Professionelle Hilfe beauftragen", text: "Ein erfahrenes Unternehmen kennt den emotionalen Kontext und geht rücksichtsvoll vor. Fotos und Dokumente werden immer separiert und übergeben." },
];

const faqs = [
  {
    frage: "Wer ist für die Wohnungsauflösung nach einem Todesfall zuständig?",
    antwort: "Die Erben sind verantwortlich — entweder gemeinsam als Erbengemeinschaft oder der Testamentsvollstrecker. Bei unbekannten Erben oder Ausschlagung der Erbschaft übernimmt das Nachlassgericht.",
  },
  {
    frage: "Kann ich die Kosten der Nachlassauflösung von der Erbschaft abziehen?",
    antwort: "Ja! Nachlassverbindlichkeiten — also Kosten, die im Zusammenhang mit der Abwicklung des Nachlasses entstehen (inkl. Wohnungsauflösung, Transport, Entsorgung) — können bei der Erbschaftsteuer als Schulden abgezogen werden.",
  },
  {
    frage: "Was passiert mit gefundenen Wertsachen oder Bargeld?",
    antwort: "Seriöse Entrümpelungsunternehmen übergeben alle gefundenen Wertgegenstände, Dokumente, Schmuck und Bargeld vollständig und dokumentiert. Behalten Sie sich das schriftlich im Auftrag bestätigen.",
  },
  {
    frage: "Wie schnell muss die Wohnung geräumt werden?",
    antwort: "Gesetzlich gilt die vertragliche Kündigungsfrist von 3 Monaten. Viele Vermieter sind bei Todesfällen kulant und stimmen einer frühzeitigen Auflösung zu. Klären Sie das rechtzeitig — so können Sie auf Kosten für Leerstandsmiete verzichten.",
  },
  {
    frage: "Was kostet eine professionelle Nachlassauflösung?",
    antwort: "Je nach Größe der Wohnung und Menge der Gegenstände zwischen 500 und 4.000 €. Durch Wertanrechnung (Antiquitäten, Möbel, Metalle, Schmuck) kann ein erheblicher Teil der Kosten reduziert werden — manchmal bis zu 40%.",
  },
  {
    frage: "Muss ich bei der Auflösung dabei sein?",
    antwort: "Nein. Viele Angehörige bevorzugen, nicht dabei zu sein — das ist verständlich. Sie können vorher alles Persönliche entnehmen und uns den Rest überlassen. Eine Vollmacht genügt. Alternativ können Sie selbstverständlich anwesend sein.",
  },
  {
    frage: "Was machen wir mit Fotos und persönlichen Unterlagen?",
    antwort: "Fotos, Briefe, Tagebücher, Ausweise, Versicherungspolicen und andere persönliche Unterlagen werden immer separiert, in einer Box gesammelt und vollständig an die Angehörigen übergeben — garantiert.",
  },
];

const checkliste = [
  "Sterbeurkunde (mehrfach) beim Standesamt",
  "Ggf. Erbschein beim Nachlassgericht beantragen",
  "Vermieter informieren, Kündigungsfristen klären",
  "Wohnung sichern (Schlüssel, Fenster, Wasser)",
  "Persönliche Erinnerungsstücke und Dokumente sichern",
  "Wertgegenstände dokumentieren (Fotos)",
  "Laufende Verträge kündigen (Strom, Gas, Internet, Zeitungen)",
  "Bank benachrichtigen, Konten melden",
  "Versicherungen informieren",
  "GEZ/Rundfunkbeitrag abmelden",
  "Entrümpelungsfirma anfragen und Termin vereinbaren",
  "Wertanrechnung prüfen lassen",
  "Übergabeprotokoll mit Vermieter erstellen",
  "Erbschaftsteuer prüfen (ggf. Steuerberater)",
];

const staedte = [
  { name: "Bergheim", href: "/entruempelung-bergheim" },
  { name: "Kerpen", href: "/entruempelung-kerpen" },
  { name: "Frechen", href: "/entruempelung-frechen" },
  { name: "Pulheim", href: "/entruempelung-pulheim" },
  { name: "Bedburg", href: "/entruempelung-bedburg" },
  { name: "Hürth", href: "/entruempelung-huerth" },
  { name: "Grevenbroich", href: "/entruempelung-grevenbroich" },
  { name: "Erftstadt", href: "/entruempelung-erftstadt" },
];

export default function EntruempelungNachTodesfallPage() {
  useEffect(() => {
    document.title = "Entrümpelung nach Todesfall: Leitfaden für Angehörige | Stressfrei";
    let _canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!_canonical) { _canonical = document.createElement("link"); _canonical.setAttribute("rel", "canonical"); document.head.appendChild(_canonical); }
    _canonical.setAttribute("href", "https://stressfreientruempelungen.de/entruempelung-nach-todesfall");
    const _setOgMeta = (prop: string, val: string) => { let m = document.querySelector(`meta[property="${prop}"]`) as HTMLMetaElement | null; if (!m) { m = document.createElement("meta"); m.setAttribute("property", prop); document.head.appendChild(m); } m.setAttribute("content", val); };
    _setOgMeta("og:url", "https://stressfreientruempelungen.de/entruempelung-nach-todesfall");
    _setOgMeta("og:image", "https://stressfreientruempelungen.de/images/entruepelung-nach-todesfall-hero.webp");
    _setOgMeta("og:locale", "de_DE");
    _setOgMeta("og:type", "article");
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Entrümpelung nach Todesfall: Was tun, wer ist zuständig, was kostet es und wie läuft eine Nachlassauflösung ab? Vollständiger Ratgeber für Angehörige.");
    const s1Id = "schema-todesfall-1";
    let s1 = document.getElementById(s1Id) as HTMLScriptElement | null;
    if (!s1) { s1 = document.createElement("script"); s1.type = "application/ld+json"; s1.id = s1Id; document.head.appendChild(s1); }
    s1.textContent = JSON.stringify({"@context":"https://schema.org","@type":"Article","headline":"Entrümpelung nach Todesfall: Der vollständige Ratgeber für Angehörige","description":"Was tun nach einem Todesfall? Wohnung auflösen, was beachten, wer zahlt — vollständiger Ratgeber mit Checkliste.","url":"https://stressfreientruempelungen.de/entruempelung-nach-todesfall","datePublished":"2026-03-19","dateModified":"2026-03-19","author":{"@type":"Organization","name":"Stressfrei Entrümpelungen & Umzüge","url":"https://stressfreientruempelungen.de"},"publisher":{"@type":"Organization","name":"Stressfrei Entrümpelungen & Umzüge","logo":{"@type":"ImageObject","url":"https://stressfreientruempelungen.de/favicon.webp"}},"image":"https://stressfreientruempelungen.de/images/entruepelung-nach-todesfall-hero.webp"});
    const s2Id = "schema-todesfall-2";
    let s2 = document.getElementById(s2Id) as HTMLScriptElement | null;
    if (!s2) { s2 = document.createElement("script"); s2.type = "application/ld+json"; s2.id = s2Id; document.head.appendChild(s2); }
    s2.textContent = JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":faqs.map(f => ({"@type":"Question","name":f.frage,"acceptedAnswer":{"@type":"Answer","text":f.antwort}}))});
    return () => { [s1Id, s2Id].forEach(id => document.getElementById(id)?.remove()); };
  }, []);

  return (
    <PageLayout>
        <PageHero title="Entrümpelung nach Todesfall" subtitle="Ein ruhiger, respektvoller Ratgeber — was jetzt zu tun ist und wie wir Ihnen helfen können." highlight="Ratgeber" />

        <section className="py-4 sm:py-6">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-primary transition-colors" style={{ textDecoration: "none" }}>Startseite</Link>
              <span>/</span>
              <Link href="/ratgeber" className="hover:text-primary transition-colors" style={{ textDecoration: "none" }}>Ratgeber</Link>
              <span>/</span>
              <span className="text-foreground font-medium">Entrümpelung nach Todesfall</span>
            </nav>
          </div>
        </section>

        <section className="pb-8 sm:pb-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div {...fadeIn}>
              <img src="/images/entruepelung-nach-todesfall-hero.webp" alt="Entrümpelung nach Todesfall — ruhige, respektvolle Nachlassauflösung" className="w-full rounded-2xl shadow-lg object-cover aspect-[16/9]" width={1200} height={675} loading="eager" data-testid="img-todesfall-hero" />
            </motion.div>
          </div>
        </section>

        <section className="py-8 sm:py-12">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <motion.div {...fadeIn}>
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 flex gap-3 mb-6">
                <Heart className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-foreground leading-relaxed">
                  Zunächst: <strong>Es gibt keine richtige oder falsche Geschwindigkeit.</strong> Jeder Trauerweg ist anders. Dieser Ratgeber soll helfen, wenn Sie sich bereit fühlen, praktische Schritte anzugehen — ohne Druck.
                </p>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Nach dem Tod eines nahestehenden Menschen stehen Angehörige oft vor einer Flut von Aufgaben. Neben der Trauer muss die Wohnung aufgelöst, Verträge gekündigt und der Nachlass geregelt werden. Was in welcher Reihenfolge wirklich wichtig ist — das erklären wir hier.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Für die eigentliche Wohnungsauflösung kann unsere{" "}
                <Link href="/nachlassaufloesung" className="text-primary hover:underline font-medium">Nachlassauflösung</Link> helfen — diskret, einfühlsam und zum fairen Festpreis.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Erste Maßnahmen */}
        <section className="py-10 sm:py-14 bg-card/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div {...fadeIn} className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">Die ersten wichtigen Schritte</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Was in den ersten Wochen nach dem Todesfall zu erledigen ist — Schritt für Schritt.</p>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {ersteMassnahmen.map((m, i) => (
                <motion.div key={i} {...fadeIn} transition={{ duration: 0.5, delay: i * 0.07 }}>
                  <Card className="p-5 h-full" data-testid={`card-massnahme-${i}`}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl font-black text-primary/20 leading-none">{m.nr}</span>
                      <h3 className="font-semibold text-foreground text-sm">{m.titel}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{m.text}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Checkliste */}
        <section className="py-12 sm:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <motion.div {...fadeIn}>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">Checkliste Nachlassauflösung</h2>
                <ul className="space-y-2.5">
                  {checkliste.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.12 }}>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">Tipps zur Wohnungsauflösung</h2>
                <div className="space-y-4">
                  {wohnungsraeumungTipps.map((t, i) => (
                    <div key={i} className="flex items-start gap-3" data-testid={`tip-${i}`}>
                      <Lightbulb className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold text-foreground mb-0.5">{t.titel}</p>
                        <p className="text-xs text-muted-foreground leading-relaxed">{t.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-xl">
                  <p className="text-sm leading-relaxed text-foreground">
                    <strong>Wertanrechnung nutzen:</strong> Viele Nachlässe enthalten werthaltige Gegenstände. Durch{" "}
                    <Link href="/wertanrechnung-bei-der-entruempelung" className="text-primary hover:underline">Wertanrechnung</Link> können die Kosten der Auflösung erheblich gesenkt werden.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 sm:py-16 bg-card/50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <motion.div {...fadeIn} className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 flex items-center justify-center gap-2">
                <HelpCircle className="w-6 h-6 text-primary" />
                Häufige Fragen
              </h2>
            </motion.div>
            <div className="space-y-4">
              {faqs.map((f, i) => (
                <motion.div key={i} {...fadeIn} transition={{ duration: 0.4, delay: i * 0.06 }}>
                  <Card className="p-5" data-testid={`card-faq-${i}`}>
                    <h3 className="font-semibold text-foreground mb-2 flex items-start gap-2">
                      <span className="text-primary font-bold flex-shrink-0">F:</span>{f.frage}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed pl-5">{f.antwort}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Städte */}
        <section className="py-10 sm:py-14">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div {...fadeIn} className="text-center mb-6">
              <h2 className="text-xl font-bold text-foreground mb-2 flex items-center justify-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                Nachlassauflösung im Rhein-Erft-Kreis
              </h2>
            </motion.div>
            <div className="flex flex-wrap justify-center gap-2">
              {staedte.map((s, i) => (
                <motion.div key={s.name} {...fadeIn} transition={{ duration: 0.3, delay: i * 0.04 }}>
                  <Link href={s.href} className="inline-flex items-center gap-1.5 bg-card border border-border/60 hover:border-primary/40 hover:text-primary text-sm font-medium px-3 py-1.5 rounded-full transition-colors" style={{ textDecoration: "none" }} data-testid={`link-stadt-${i}`}>
                    <MapPin className="w-3 h-3" />{s.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Interne Links */}
        <section className="py-10 bg-card/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                { label: "Nachlassauflösung beauftragen", href: "/nachlassaufloesung", desc: "Unsere Leistungen & Ablauf" },
                { label: "Haushaltsauflösung", href: "/haushaltsaufloesung", desc: "Komplette Auflösung von Haushalten" },
                { label: "Wertanrechnung", href: "/wertanrechnung-bei-der-entruempelung", desc: "Kosten senken durch Wertanrechnung" },
                { label: "Entsorgungsguide", href: "/entsorgungsguide", desc: "Was darf wohin entsorgt werden?" },
              ].map((l, i) => (
                <motion.div key={l.href} {...fadeIn} transition={{ duration: 0.3, delay: i * 0.05 }}>
                  <Link href={l.href} style={{ textDecoration: "none" }}>
                    <Card className="p-4 hover:border-primary/40 hover:bg-primary/5 transition-colors cursor-pointer h-full" data-testid={`link-intern-${i}`}>
                      <p className="text-sm font-semibold text-foreground mb-1">{l.label}</p>
                      <p className="text-xs text-muted-foreground">{l.desc}</p>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-6">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <Link href="/ratgeber" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors" style={{ textDecoration: "none" }} data-testid="link-back">
              <ArrowLeft className="w-4 h-4" /> Zurück zum Ratgeber
            </Link>
          </div>
        </section>

        <BlogArticleCTA />
      <CTASection title="Jetzt Hilfe anfordern — diskret und einfühlsam" subtitle="Wir nehmen uns Zeit für Sie. Kostenlose Beratung und Besichtigung — melden Sie sich jederzeit." />
      </PageLayout>
  );
}
