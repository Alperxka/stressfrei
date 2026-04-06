import { useEffect } from "react";
import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { PageLayout, PageHero, CTASection, BlogArticleCTA } from "@/components/layout";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, AlertTriangle, ClipboardList, Users, Home, Banknote, HelpCircle, Clock } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const schritte = [
  {
    nummer: "1",
    titel: "Zeitrahmen und Zuständigkeiten klären",
    beschreibung: "Wer ist für die Auflösung verantwortlich? Bei einem Todesfall klären Sie zuerst, ob ein Testament vorhanden ist und wer die Erbschaft antritt. Bei einem Umzug ins Pflegeheim: Stimmen Sie sich mit dem Betroffenen oder Bevollmächtigten ab. Planen Sie mindestens 2–4 Wochen Vorlauf für die Organisation.",
    icon: Users,
  },
  {
    nummer: "2",
    titel: "Wertgegenstände und Dokumente sichern",
    beschreibung: "Bevor irgendwas entsorgt wird: Alle Dokumente, Schmuck, Bargeld, Sparkonten, Versicherungspolicen, Fotos und persönliche Erinnerungsstücke sichern. Suchen Sie systematisch in Schubladen, Schränken, Kisten und unter Matratzen. Nicht selten finden sich wertvolle Gegenstände an unerwarteten Orten.",
    icon: Home,
  },
  {
    nummer: "3",
    titel: "Inventar aufnehmen und sortieren",
    beschreibung: "Gehen Sie durch alle Räume und erstellen Sie grob eine Liste: Was soll mitgenommen werden? Was kann verkauft oder gespendet werden? Was muss entsorgt werden? Diese Entscheidung legt den Umfang und damit die Kosten der Auflösung fest.",
    icon: ClipboardList,
  },
  {
    nummer: "4",
    titel: "Verwertbare Gegenstände beiseite legen",
    beschreibung: "Gut erhaltene Möbel, Elektrogeräte, Bücher und Kleidung können über Second-Hand-Shops, Kleinanzeigen oder Spendenorganisationen weitergegeben werden. Wertvolle Gegenstände (Antiquitäten, Gemälde, Porzellan) lassen sich vom Fachmann schätzen. Unser Schrottankauf rechnet Metallwerte direkt vom Gesamtpreis ab.",
    icon: Banknote,
  },
  {
    nummer: "5",
    titel: "Angebote einholen und Termin buchen",
    beschreibung: "Holen Sie mindestens 2–3 Angebote von Entrümpelungs- und Haushaltsauflösungsunternehmen ein. Seriöse Firmen besichtigen kostenlos und erstellen ein Festpreisangebot. Vorsicht vor Unternehmen, die ohne Besichtigung Preise nennen oder ausschließlich Vorauszahlung verlangen.",
    icon: Clock,
  },
  {
    nummer: "6",
    titel: "Behördliches und Administratives erledigen",
    beschreibung: "Parallel dazu: Kündigung der Wohnung (Fristen beachten!), Abmeldung von Strom, Gas und Internet, Nachsendeauftrag der Post, Kündigung von Abonnements und Mitgliedschaften. Bei einem Todesfall: Kontoeröffnung für den Nachlass, Erbschein beantragen.",
    icon: ClipboardList,
  },
];

const checkliste = {
  vorher: [
    "Alle wichtigen Dokumente (Ausweis, Versicherungen, Kontoauszüge) gesichert",
    "Schmuck, Bargeld und Wertgegenstände an sicherem Ort",
    "Fotos und persönliche Erinnerungsstücke aussortiert",
    "Testament / Erbschein vorhanden (bei Todesfall)",
    "Vollmacht oder Betreuungsausweis vorhanden (bei Pflegeheimumzug)",
    "Wohnungsgröße und Inhalt geschätzt",
    "Drei Angebote eingeholt",
    "Festpreisangebot vom Unternehmen vorliegend",
    "Termin mit Entrümpelungsfirma vereinbart",
    "Wohnungskündigung eingereicht",
    "Strom / Gas / Internet Kündigung in Arbeit",
  ],
  amTag: [
    "Schlüssel für alle Räume bereitgelegt",
    "Parkmöglichkeit für LKW geklärt (ggf. Halteverbot beantragt)",
    "Wertgegenstände bereits abtransportiert",
    "Eigener Hausrat klar markiert (mitnehmen / nicht mitnehmen)",
    "Ansprechpartner vor Ort oder telefonisch erreichbar",
  ],
  danach: [
    "Wohnung besenrein übernommen (dokumentiert mit Fotos)",
    "Schlüsselübergabe an Vermieter",
    "Rechnung geprüft und archiviert",
    "Kaution zurückgefordert",
    "Abmeldung beim Einwohnermeldeamt",
    "Adressänderung bei Behörden und Unternehmen",
  ],
};

const kosten = [
  { posten: "1-Zimmer-Wohnung (ca. 30 m²)", preis: "300–700 €", hinweis: "Bei wenig Inhalt und EG" },
  { posten: "2-Zimmer-Wohnung (ca. 50–60 m²)", preis: "500–1.100 €", hinweis: "Inkl. Entsorgungskosten" },
  { posten: "3-Zimmer-Wohnung (ca. 75–90 m²)", preis: "900–1.800 €", hinweis: "Mit Keller und Dachboden" },
  { posten: "Einfamilienhaus (100–150 m²)", preis: "1.500–3.500 €", hinweis: "Inkl. Garage und Nebengebäude" },
  { posten: "Großes Haus / Hof (150+ m²)", preis: "3.000–8.000 €", hinweis: "Individuelles Festpreisangebot" },
  { posten: "Abzug durch Wertanrechnung", preis: "–100 bis –800 €", hinweis: "Je nach Qualität der Gegenstände" },
  { posten: "Pflegekassen-Zuschuss (möglich)", preis: "bis 4.000 €", hinweis: "Bei Pflegebedürftigkeit ab Grad 1" },
];

const faqs = [
  {
    frage: "Wer muss eine Haushaltsauflösung bezahlen?",
    antwort: "In der Regel trägt der Auftraggeber die Kosten — das sind die Erben, der Mieter oder der Vermieter. Bei einer Haushaltsauflösung nach Todesfall können die Kosten aus dem Nachlass entnommen werden, sofern kein Erbe bekannt ist. Die Pflegekasse kann bei Pflegebedürftigkeit Zuschüsse von bis zu 4.000 € übernehmen.",
  },
  {
    frage: "Wie lange dauert eine Haushaltsauflösung?",
    antwort: "Eine durchschnittliche 3-Zimmer-Wohnung (75–90 m²) ist in 1 Tag geräumt. Größere Objekte wie Häuser mit Keller, Dachboden und Garage brauchen 2–3 Tage. Den genauen Zeitplan klären wir bei der kostenlosen Besichtigung.",
  },
  {
    frage: "Was passiert mit den Gegenständen, die noch gut sind?",
    antwort: "Wir sortieren beim Räumen: Was noch verwendbar ist (Möbel, Kleidung, Haushaltsgeräte), geht an Sozialkaufhäuser, Wohltätigkeitsorganisationen oder wird bei der Wertanrechnung berücksichtigt. Der Restwert mindert den Auflösungspreis direkt.",
  },
  {
    frage: "Kann ich bei der Haushaltsauflösung dabei sein?",
    antwort: "Ja, Sie können jederzeit dabei sein und selbst bestimmen, was mitgenommen oder entsorgt wird. Viele Kunden sind an einem oder zwei Schlüsselmomenten anwesend (Beginn und Ende), während unser Team den Rest eigenständig erledigt.",
  },
  {
    frage: "Was kostet eine Haushaltsauflösung bei uns im Rhein-Erft-Kreis?",
    antwort: "Für eine 2-Zimmer-Wohnung rechnen Sie mit ca. 500–1.100 €, für ein Einfamilienhaus mit 1.500–3.500 €. Den genauen Preis kennen Sie erst nach unserer kostenlosen Besichtigung vor Ort. Wir erstellen immer ein verbindliches Festpreisangebot — ohne versteckte Kosten.",
  },
  {
    frage: "Übernehmen Sie auch Haushaltsauflösungen in Verbindung mit einem Umzug?",
    antwort: "Ja, das ist ein sehr beliebtes Kombipaket: Umzug in die neue Wohnung + Auflösung der alten. Wir koordinieren beides an einem Tag oder an zwei aufeinanderfolgenden Tagen — zu einem Gesamtfestpreis.",
  },
];

export default function HaushaltsaufloesungVorbereitenPage() {
  useEffect(() => {
    document.title = "Haushaltsauflösung vorbereiten: Schritt für Schritt | Stressfrei";

    const setMeta = (attr: string, val: string, content: string) => {
      let m = document.querySelector(`meta[${attr}="${val}"]`) as HTMLMetaElement | null;
      if (!m) { m = document.createElement("meta"); m.setAttribute(attr, val); document.head.appendChild(m); }
      m.content = content;
    };

    setMeta("name", "description", "Haushaltsauflösung vorbereiten: Schritt-für-Schritt-Anleitung, Checkliste, Kosten und was die Pflegekasse zahlt — für Rhein-Erft-Kreis und NRW.");
    setMeta("property", "og:title", "Haushaltsauflösung vorbereiten: Schritt für Schritt");
    setMeta("property", "og:description", "Haushaltsauflösung vorbereiten: Schritt-für-Schritt-Anleitung, Checkliste, Kosten und was die Pflegekasse zahlt.");
    setMeta("property", "og:url", "https://stressfreientruempelungen.de/haushaltsaufloesung-vorbereiten");
    setMeta("property", "og:image", "https://stressfreientruempelungen.de/images/entruempelung-ratgeber-haus-raeumen.webp");
    setMeta("property", "og:locale", "de_DE");
    setMeta("property", "og:type", "article");

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) { canonical = document.createElement("link"); canonical.rel = "canonical"; document.head.appendChild(canonical); }
    canonical.href = "https://stressfreientruempelungen.de/haushaltsaufloesung-vorbereiten";

    const existingLd = document.querySelector('script[data-blog-ld]');
    if (existingLd) existingLd.remove();
    const ldScript = document.createElement("script");
    ldScript.type = "application/ld+json";
    ldScript.setAttribute("data-blog-ld", "true");
    ldScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Haushaltsauflösung vorbereiten: Schritt für Schritt zur stressfreien Auflösung",
      description: "Haushaltsauflösung vorbereiten: Schritt-für-Schritt-Anleitung mit Checkliste, Kosten und Pflegekassen-Tipps für NRW.",
      url: "https://stressfreientruempelungen.de/haushaltsaufloesung-vorbereiten",
      image: "https://stressfreientruempelungen.de/images/entruempelung-ratgeber-haus-raeumen.webp",
      author: { "@type": "Organization", name: "Stressfrei Entrümpelungen & Umzüge" },
      publisher: {
        "@type": "Organization",
        name: "Stressfrei Entrümpelungen & Umzüge",
        logo: { "@type": "ImageObject", url: "https://stressfreientruempelungen.de/images/logo.webp" },
      },
      datePublished: "2026-03-01",
      dateModified: new Date().toISOString().split("T")[0],
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Startseite", item: "https://stressfreientruempelungen.de" },
          { "@type": "ListItem", position: 2, name: "Ratgeber", item: "https://stressfreientruempelungen.de/ratgeber" },
          { "@type": "ListItem", position: 3, name: "Haushaltsauflösung vorbereiten", item: "https://stressfreientruempelungen.de/haushaltsaufloesung-vorbereiten" },
        ],
      },
    });
    document.head.appendChild(ldScript);

    const existingHowTo = document.querySelector('script[data-howto-ld]');
    if (existingHowTo) existingHowTo.remove();
    const howToScript = document.createElement("script");
    howToScript.type = "application/ld+json";
    howToScript.setAttribute("data-howto-ld", "true");
    howToScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "Haushaltsauflösung vorbereiten – Schritt für Schritt",
      "description": "So bereiten Sie eine Haushaltsauflösung optimal vor – mit Checkliste, Kosten und Tipps.",
      "url": "https://stressfreientruempelungen.de/haushaltsaufloesung-vorbereiten",
      "step": [
        { "@type": "HowToStep", "name": "Frühzeitig beginnen", "text": "Starten Sie mindestens 4–6 Wochen vor dem Termin mit der Planung. Erstellen Sie eine Inventarliste aller vorhandenen Gegenstände." },
        { "@type": "HowToStep", "name": "Wertgegenstände sichern", "text": "Separieren Sie Schmuck, Dokumente, Erbstücke und persönliche Erinnerungsstücke. Bewahren Sie diese sicher auf." },
        { "@type": "HowToStep", "name": "Angebote einholen", "text": "Holen Sie mindestens 3 Angebote von Entrümpelungsunternehmen ein. Achten Sie auf Festpreise ohne versteckte Kosten." },
        { "@type": "HowToStep", "name": "Wertanrechnung nutzen", "text": "Lassen Sie verwertbare Möbel und Gegenstände bewerten. Der Erlös wird direkt vom Entrümpelungspreis abgezogen." },
        { "@type": "HowToStep", "name": "Behörden informieren", "text": "Kündigen Sie Verträge, informieren Sie Behörden über Adressänderungen und klären Sie Mietvertragsfragen." },
        { "@type": "HowToStep", "name": "Entrümpelung durchführen lassen", "text": "Das professionelle Team übernimmt alles: Tragen, Sortieren, Entsorgen — und übergibt die Wohnung besenrein." }
      ]
    });
    document.head.appendChild(howToScript);

    return () => {
      const ld = document.querySelector('script[data-blog-ld]');
      if (ld) ld.remove();
      const howTo = document.querySelector('script[data-howto-ld]');
      if (howTo) howTo.remove();
    };
  }, []);

  return (
    <PageLayout>
      <PageHero
        title="Haushaltsauflösung vorbereiten"
        subtitle="Schritt-für-Schritt-Anleitung, Checkliste, Kosten und was die Pflegekasse zahlt — für eine stressfreie Auflösung."
        highlight="Ratgeber Haushaltsauflösung"
      />

      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeIn} className="mb-6">
            <Link href="/ratgeber" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Zurück zum Ratgeber
            </Link>
          </motion.div>

          <motion.div {...fadeIn} className="max-w-none mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Eine <Link href="/haushaltsaufloesung" className="text-primary hover:underline font-medium">Haushaltsauflösung</Link> ist eine der emotional und organisatorisch anspruchsvollsten Aufgaben — ob nach einem Todesfall, beim Umzug ins Pflegeheim oder bei einem Neuanfang. Dieser Ratgeber zeigt, wie Sie sich Schritt für Schritt vorbereiten, was die Profis übernehmen können und was Sie selbst erledigen müssen.
            </p>
          </motion.div>

          <motion.div {...fadeIn} className="mb-14">
            <h2 className="text-2xl font-bold text-foreground mb-6">Schritt für Schritt zur Haushaltsauflösung</h2>
            <div className="space-y-4">
              {schritte.map((schritt) => {
                const Icon = schritt.icon;
                return (
                  <Card key={schritt.nummer} className="p-5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shrink-0">
                        {schritt.nummer}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Icon className="w-4 h-4 text-primary shrink-0" />
                          <h3 className="font-semibold text-foreground">{schritt.titel}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{schritt.beschreibung}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </motion.div>

          <motion.div {...fadeIn} className="mb-14">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <ClipboardList className="w-6 h-6 text-primary shrink-0" />
              Checkliste: Was muss wann erledigt werden?
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Card className="p-5 border-blue-500/30 bg-blue-50/20 dark:bg-blue-950/10">
                <h3 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wide text-blue-700 dark:text-blue-400">Vorher</h3>
                <ul className="space-y-2">
                  {checkliste.vorher.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
              <Card className="p-5 border-primary/30 bg-primary/5">
                <h3 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wide text-primary">Am Auflösungstag</h3>
                <ul className="space-y-2">
                  {checkliste.amTag.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
              <Card className="p-5 border-green-500/30 bg-green-50/20 dark:bg-green-950/10">
                <h3 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wide text-green-700 dark:text-green-400">Danach</h3>
                <ul className="space-y-2">
                  {checkliste.danach.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </motion.div>

          <motion.div {...fadeIn} className="mb-14">
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
              <Banknote className="w-6 h-6 text-primary shrink-0" />
              Was kostet eine Haushaltsauflösung?
            </h2>
            <div className="overflow-x-auto rounded-xl border border-border/50">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary/10 border-b border-border/50">
                    <th className="text-left p-3 sm:p-4 font-semibold text-foreground">Objekt</th>
                    <th className="text-left p-3 sm:p-4 font-semibold text-foreground">Richtpreis</th>
                    <th className="text-left p-3 sm:p-4 font-semibold text-muted-foreground">Hinweis</th>
                  </tr>
                </thead>
                <tbody>
                  {kosten.map((row, i) => (
                    <tr key={i} className={`border-b border-border/30 ${i % 2 === 0 ? "bg-background" : "bg-card/30"}`}>
                      <td className="p-3 sm:p-4 font-medium text-foreground">{row.posten}</td>
                      <td className={`p-3 sm:p-4 font-semibold ${row.preis.startsWith("–") ? "text-green-600" : row.preis.startsWith("bis") ? "text-blue-600" : "text-foreground"}`}>{row.preis}</td>
                      <td className="p-3 sm:p-4 text-muted-foreground text-xs">{row.hinweis}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Card className="mt-4 p-4 border-amber-500/30 bg-amber-50/20 dark:bg-amber-950/10">
              <p className="text-sm text-muted-foreground flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>Alle Preise sind Richtwerte. Der tatsächliche Preis hängt von Menge, Stockwerk, Erreichbarkeit und verwertbaren Gegenständen ab. Wir besichtigen kostenlos und erstellen ein verbindliches Festpreisangebot — ohne versteckte Kosten.</span>
              </p>
            </Card>
          </motion.div>

          <motion.div {...fadeIn} className="mb-14">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <HelpCircle className="w-6 h-6 text-primary shrink-0" />
              Häufige Fragen zur Haushaltsauflösung
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <Card key={i} className="p-5">
                  <p className="font-semibold text-foreground mb-2">{faq.frage}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.antwort}</p>
                </Card>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeIn} className="flex flex-wrap gap-3 text-sm text-muted-foreground">
            <span>Weitere Ratgeber:</span>
            <Link href="/haushaltsaufloesung" className="text-primary hover:underline">Haushaltsauflösung Service</Link>
            <Link href="/entruempelung-nach-todesfall" className="text-primary hover:underline">Entrümpelung nach Todesfall</Link>
            <Link href="/kostenuebernahme-durch-die-pflegekasse-bei-entruempelung-und-umzug-fuer-senioren" className="text-primary hover:underline">Pflegekasse Kostenübernahme</Link>
            <Link href="/wertanrechnung-bei-der-entruempelung" className="text-primary hover:underline">Wertanrechnung</Link>
            <Link href="/kosten-entruempelung" className="text-primary hover:underline">Kosten berechnen</Link>
          </motion.div>
        </div>
      </section>

      <BlogArticleCTA topic="Haushaltsauflösung" />
      <CTASection />
    </PageLayout>
  );
}
