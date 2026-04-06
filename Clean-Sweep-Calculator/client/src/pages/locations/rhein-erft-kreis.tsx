import { Link } from "wouter";
import LocationPage from "@/components/location-page";
import { Card } from "@/components/ui/card";
import { MapPin, Truck, Recycle, PhoneCall, CheckCircle2, Building2, Home, Warehouse, Users, Shield, Clock } from "lucide-react";
import { FadeIn } from "@/components/fade-in";

const RheinErftLocalExtras = (
  <>
    {/* ── Regionsübersicht ── */}
    <section className="py-16 sm:py-20 bg-primary/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-wider mb-4">
              <MapPin className="w-4 h-4" />
              Der Rhein-Erft-Kreis — unser Haupteinsatzgebiet
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 leading-tight">
              Wir kennen den Rhein-Erft-Kreis — jeden Ort, jede Straße
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Unser Firmensitz befindet sich direkt in der <strong>Hauptstraße 26 in Bergheim</strong> — der Kreisstadt des Rhein-Erft-Kreises. Von dort aus decken wir den gesamten Landkreis ab: von Frechen im Osten bis Rommerskirchen im Westen, von Pulheim im Norden bis Erftstadt im Süden.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Das gibt Ihnen einen entscheidenden Vorteil: Wir kennen die lokale Entsorgungsinfrastruktur (AWB Rhein-Erft-Kreis), die Parkverhältnisse in den Innenstädten, die Besonderheiten älterer Bergarbeitersiedlungen und die engen Treppenhäuser in den Mehrfamilienhäusern der Region — das macht unsere Einsätze schneller und günstiger.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Firmensitz in Bergheim (Kreisstadt)",
                "Alle 10 Städte & 70+ Ortsteile",
                "AWB-zertifizierte Entsorgung",
                "Anfahrt meistens unter 20 Minuten",
                "Lokalwissen spart Kosten",
                "Halteverbotsschilder auf Anfrage",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn delayMs={150}>
            <Card className="p-6 space-y-5">
              <h3 className="font-semibold text-foreground text-base">Rhein-Erft-Kreis auf einen Blick</h3>
              <div className="divide-y divide-border">
                {[
                  { label: "Kreisstadt", value: "Bergheim" },
                  { label: "Einwohner", value: "ca. 490.000" },
                  { label: "Städte & Gemeinden", value: "10 Kommunen" },
                  { label: "Fläche", value: "ca. 705 km²" },
                  { label: "Bundesland", value: "Nordrhein-Westfalen" },
                  { label: "Nähe Köln", value: "ca. 15–35 km westlich" },
                  { label: "Abfallbetrieb", value: "AWB Rhein-Erft-Kreis" },
                  { label: "Anfahrt von uns", value: "< 20 Minuten überall" },
                ].map((row, i) => (
                  <div key={i} className="py-2.5 flex justify-between text-sm">
                    <span className="text-muted-foreground">{row.label}</span>
                    <span className="font-medium text-foreground">{row.value}</span>
                  </div>
                ))}
              </div>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>

    {/* ── Alle Städte im Kreis ── */}
    <section className="py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <FadeIn className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
            Alle Städte im Rhein-Erft-Kreis — wir sind überall für Sie da
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
            Ob Kreisstadt Bergheim oder kleinere Kommunen — wir fahren in die gesamte Region. Kurze Wege bedeuten günstigere Preise für Sie.
          </p>
        </FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              name: "Bergheim",
              href: "/entruempelung-bergheim",
              plz: "50126–50129",
              badge: "Unser Hauptsitz",
              desc: "Als Kreisstadt und unser Firmensitz kennen wir Bergheim in- und auswendig. Kürzeste Anfahrtswege und beste Konditionen.",
            },
            {
              name: "Kerpen",
              href: "/entruempelung-kerpen",
              plz: "50169–50171",
              badge: "Großstadt",
              desc: "Zweitgrößte Stadt im Kreis mit vielen Wohngebieten aus der Nachkriegszeit. Wohnungsauflösungen und Kellerentrümpelungen täglich im Einsatz.",
            },
            {
              name: "Frechen",
              href: "/entruempelung-frechen",
              plz: "50226",
              badge: "Köln-nah",
              desc: "Nahe an Köln gelegen, viele Mehrfamilienhäuser. Wir sind in Frechen regelmäßig für Haushaltsauflösungen und Umzüge im Einsatz.",
            },
            {
              name: "Pulheim",
              href: "/entruempelung-pulheim",
              plz: "50259",
              badge: "Norden",
              desc: "Attraktive Wohnlage nördlich von Köln. Viele Einfamilienhäuser — Haushaltsauflösungen nach Erbschaft und Seniorenumzüge sind häufige Aufträge.",
            },
            {
              name: "Erftstadt",
              href: "/entruempelung-erftstadt",
              plz: "50374",
              badge: "Süden",
              desc: "Größte Fläche im Kreis mit vielen Ortsteilen. Ältere Bausubstanz und großzügige Grundstücke — Haushaltsauflösungen und Kellerräumungen.",
            },
            {
              name: "Hürth",
              href: "/entruempelung-huerth",
              plz: "50354",
              badge: "Köln-direkt",
              desc: "Direkt an Köln grenzend, dichter Wohnraum. Besonders viele Wohnungsauflösungen für Vermieter und besenreine Übergaben.",
            },
            {
              name: "Wesseling",
              href: "/entruempelung-wesseling",
              plz: "50389",
              badge: "Südost",
              desc: "Industriestandort mit gewachsenem Wohngebiet. Gewerbe- und Privaträumungen gleichermaßen — wir sind vertraut mit den lokalen Besonderheiten.",
            },
            {
              name: "Bedburg",
              href: "/entruempelung-bedburg",
              plz: "50181",
              badge: "Nordwesten",
              desc: "Ländlich geprägte Stadt mit vielen Einfamilienhäusern. Garagenentrümpelungen, Haushaltsauflösungen und Sperrmüllabholung.",
            },
            {
              name: "Elsdorf",
              href: "/entruempelung-elsdorf",
              plz: "50189",
              badge: "Mitte-West",
              desc: "Ruhige Lage zwischen Bergheim und Grevenbroich. Häufig: Auflösungen älterer Haushalte und Entrümpelungen ganzer Grundstücke.",
            },
            {
              name: "Brühl",
              href: "/entruempelung-bruehl",
              plz: "50321",
              badge: "Tourismus & Wohnen",
              desc: "Bekannt durch Phantasialand. Viele gepflegte Wohngebiete — Umzüge, Wohnungsauflösungen und Kellerentrümpelungen.",
            },
          ].map((city, i) => (
            <FadeIn key={i} delayMs={i * 50}>
              <Link href={city.href || "#"} style={{ textDecoration: "none" }}>
                <Card className="p-5 h-full hover-elevate cursor-pointer">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary shrink-0" />
                      <h3 className="font-semibold text-foreground text-sm">{city.name}</h3>
                    </div>
                    {city.badge && (
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full shrink-0 ml-2">
                        {city.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground mb-2 leading-relaxed">{city.desc}</p>
                  <span className="text-xs text-primary font-medium">PLZ {city.plz} →</span>
                </Card>
              </Link>
            </FadeIn>
          ))}
          {/* Rommerskirchen extra */}
          <FadeIn delayMs={500}>
            <Link href="/entruempelung-rommerskirchen" style={{ textDecoration: "none" }}>
              <Card className="p-5 h-full hover-elevate cursor-pointer">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary shrink-0" />
                    <h3 className="font-semibold text-foreground text-sm">Rommerskirchen</h3>
                  </div>
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full shrink-0 ml-2">Westen</span>
                </div>
                <p className="text-xs text-muted-foreground mb-2 leading-relaxed">Westlichste Gemeinde des Kreises. Ländliche Strukturen mit Dorfcharakter — Grundstücks- und Scheunenräumungen regelmäßig gebucht.</p>
                <span className="text-xs text-primary font-medium">PLZ 41569 →</span>
              </Card>
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>

    {/* ── Typische Aufträge nach Objekttyp ── */}
    <section className="py-16 sm:py-20 bg-card/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <FadeIn className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
            Typische Aufträge im Rhein-Erft-Kreis — was wir täglich vor Ort antreffen
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
            Der Rhein-Erft-Kreis ist geprägt von Bergarbeiter­siedlungen, Nachkriegsbauten und modernen Neubaugebieten. Das spiegelt sich in unseren täglichen Aufträgen wider.
          </p>
        </FadeIn>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              Icon: Building2,
              title: "Mehrfamilienhäuser & Mietwohnungen",
              area: "Bergheim · Kerpen · Frechen · Hürth",
              items: [
                "Wohnungsauflösungen nach Mieterwechsel",
                "Entrümpelung für Vermieter & Hausverwaltungen",
                "Keller- und Dachbodenräumungen",
                "Besenreine Übergabe für Wohnungsabnahmen",
                "Koordination direkt mit der Hausverwaltung",
              ],
              tip: "Vermieter-Tipp: Wir übernehmen die komplette Abwicklung — von der Entrümpelung bis zur besenreinen Übergabe. Sie müssen nicht vor Ort sein.",
            },
            {
              Icon: Home,
              title: "Einfamilienhäuser & Erbschaftsfälle",
              area: "Pulheim · Erftstadt · Bedburg · Elsdorf",
              items: [
                "Haushaltsauflösungen nach Erbschaft oder Todesfall",
                "Einfühlsame Abwicklung in sensiblen Situationen",
                "Wertgegenstände werden geprüft und angerechnet",
                "Garten-, Schuppen- und Garagenräumungen inklusive",
                "Vollständige Beräumung bis zur Übergabe",
              ],
              tip: "Diskret & respektvoll: Erbschaftsentrümpelungen sind emotional belastend — unser erfahrenes Team geht einfühlsam und professionell vor.",
            },
            {
              Icon: Warehouse,
              title: "Garagen, Keller & Gewerbe",
              area: "Wesseling · Frechen · Bergheim Gewerbegebiete",
              items: [
                "Garagenentrümpelungen inkl. Altöl & Schrott",
                "Kellerräumungen in Bergarbeitersiedlungen",
                "Gewerbliche Entrümpelung & Lagerauflösung",
                "Schrottankauf: Altmetall wird direkt verrechnet",
                "Sondermüll & Chemikalien fachgerecht entsorgt",
              ],
              tip: "Kreisweiter Vorteil: Kurze Wege zum AWB-Wertstoffzentrum Bergheim senken Ihre Entsorgungskosten im Vergleich zu regionsfremden Anbietern erheblich.",
            },
          ].map(({ Icon, title, area, items, tip }, i) => (
            <FadeIn key={i} delayMs={i * 80}>
              <Card className="p-6 h-full flex flex-col">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm leading-snug">{title}</h3>
                    <p className="text-xs text-primary mt-0.5">{area}</p>
                  </div>
                </div>
                <ul className="space-y-2 flex-1 mb-4">
                  {items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="rounded-lg bg-primary/5 border border-primary/10 p-3">
                  <p className="text-xs text-foreground leading-relaxed">{tip}</p>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* ── Entsorgung & Preise ── */}
    <section className="py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Entsorgung im Rhein-Erft-Kreis: Was Sie wissen sollten
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Als im Rhein-Erft-Kreis ansässiges Unternehmen arbeiten wir eng mit dem <strong>AWB Rhein-Erft-Kreis</strong> (Abfallwirtschaftsbetrieb) zusammen und kennen alle lokalen Entsorgungswege in allen 10 Kommunen. Das bedeutet für Sie: keine langen Umwege, günstigere Kosten und rechtssichere Entsorgung.
            </p>
            <div className="space-y-4">
              {[
                {
                  title: "AWB Wertstoffzentrum Bergheim",
                  desc: "Unser primärer Entsorgungspartner — zentral im Kreis gelegen. Für alle Städte im Rhein-Erft-Kreis der nächste zertifizierte Entsorgungspartner.",
                },
                {
                  title: "Sperrmüllabholung durch AWB",
                  desc: "Für kleine Mengen holt der AWB kostenlos ab. Bei größeren Räumungen ist unser Service schneller und günstiger — ohne Wartezeit und mit Komplettreinigung.",
                },
                {
                  title: "Schrott & Altmetallankauf",
                  desc: "Altmetall aus dem Rhein-Erft-Kreis wird über unsere Partnerschrotthändler verwertet. Der Erlös senkt direkt Ihren Entrümpelungspreis.",
                },
                {
                  title: "Elektroschrott & Kühlgeräte",
                  desc: "ElektroG-konforme Entsorgung von Kühlschränken, Waschmaschinen und TV-Geräten — selbstverständlich nach deutschem Recht, mit Nachweisen.",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0 mt-0.5">
                    <Recycle className="w-3 h-3 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{item.title}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn delayMs={150} className="space-y-5">
            <Card className="p-6">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <Truck className="w-4 h-4 text-primary" />
                Preisbeispiele Rhein-Erft-Kreis
              </h3>
              <div className="space-y-3">
                {[
                  { obj: "Keller / Garage", groesse: "15–30 m²", preis: "ab 250 €" },
                  { obj: "1-Zimmer-Wohnung", groesse: "ca. 35 m²", preis: "ab 400 €" },
                  { obj: "2-Zimmer-Wohnung", groesse: "ca. 55 m²", preis: "ab 600 €" },
                  { obj: "3-Zimmer-Wohnung", groesse: "ca. 75 m²", preis: "ab 900 €" },
                  { obj: "Einfamilienhaus", groesse: "ca. 130 m²", preis: "ab 1.800 €" },
                  { obj: "Haushaltsauflösung komplett", groesse: "inkl. Entsorgung", preis: "ab 1.500 €" },
                ].map((row, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b border-border last:border-0 text-sm">
                    <div>
                      <span className="font-medium text-foreground">{row.obj}</span>
                      <span className="text-xs text-muted-foreground ml-2">({row.groesse})</span>
                    </div>
                    <span className="font-semibold text-primary">{row.preis}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-4 leading-relaxed">
                * Richtwerte inkl. Entsorgung. Genaue Kosten nach kostenloser Besichtigung als Festpreis. Wertanrechnung möglich.
              </p>
            </Card>
            <Card className="p-5 bg-primary text-white border-0">
              <div className="flex items-start gap-3">
                <PhoneCall className="w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm mb-1">Kostenlose Besichtigung im Rhein-Erft-Kreis</p>
                  <p className="text-xs text-white/80 leading-relaxed mb-3">
                    Wir kommen direkt zu Ihnen — oft noch am gleichen oder nächsten Tag. Festpreisangebot innerhalb von 24 Stunden.
                  </p>
                  <a href="tel:+4922715880940" className="inline-flex items-center gap-2 bg-white text-primary font-semibold text-sm px-4 py-2 rounded-lg hover:bg-white/90 transition-colors">
                    <PhoneCall className="w-4 h-4" />
                    02271 / 5880940
                  </a>
                </div>
              </div>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>

    {/* ── Warum uns wählen ── */}
    <section className="py-16 sm:py-20 bg-card/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <FadeIn className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
            Warum Kunden im Rhein-Erft-Kreis uns wählen
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm">
            Über 84 Bewertungen bei Google — durchgehend 5 Sterne. Das sagen unsere Kunden aus dem Rhein-Erft-Kreis.
          </p>
        </FadeIn>
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            {
              Icon: Clock,
              title: "Schnell & zuverlässig",
              items: [
                "Termin meist innerhalb 24–48 Stunden",
                "Angebot noch am gleichen Tag",
                "Pünktlich und zuverlässig",
                "Feste Startzeiten, keine langen Wartefenster",
              ],
            },
            {
              Icon: Shield,
              title: "Faire Festpreise",
              items: [
                "Kostenlose Besichtigung vor Ort",
                "Verbindlicher Festpreis — keine Nachforderungen",
                "Entsorgung immer inklusive",
                "Wertanrechnung für verwertbare Gegenstände",
              ],
            },
            {
              Icon: Users,
              title: "Erfahrenes Team",
              items: [
                "Ausgebildetes Personal mit Sachkenntnis",
                "Einfühlsam bei Erbschafts- und Todesfällen",
                "Diskret und respektvoll im Umgang",
                "Vollversicherter Einsatz",
              ],
            },
          ].map(({ Icon, title, items }, i) => (
            <FadeIn key={i} delayMs={i * 80}>
              <Card className="p-6 h-full">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-3 text-sm">{title}</h3>
                <ul className="space-y-2">
                  {items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default function RheinErftKreisPage() {
  return (
    <LocationPage
      cityName="Rhein-Erft-Kreis"
      slug="rhein-erft-kreis"
      description="Ihr zuverlässiger Partner für Entrümpelungen, Haushaltsauflösungen und Umzüge im gesamten Rhein-Erft-Kreis. Faire Festpreise, schnelle Ausführung und besenreine Übergabe in allen 10 Kommunen."
      metaDescription="Entrümpelung Rhein-Erft-Kreis ✓ Haushaltsauflösung ✓ Umzüge ✓ Alle 10 Städte ✓ Faire Festpreise ✓ 24–48h Ausführung ✓ 5.0 Sterne bei Google ✓ Jetzt kostenlos anfragen! ☎ 02271 / 5880940"
      introText={<>
        Als im Rhein-Erft-Kreis ansässiges Unternehmen kennen wir die gesamte Region wie unsere Westentasche. Ob <Link href="/entruempelung" className="text-primary hover:underline font-medium">Entrümpelung</Link> einer Altbauwohnung in Kerpen, eine <Link href="/haushaltsaufloesung" className="text-primary hover:underline font-medium">Haushaltsauflösung</Link> nach Erbschaft in Erftstadt, ein <Link href="/umzugsunternehmen-rhein-erft-kreis" className="text-primary hover:underline font-medium">Umzug im Rhein-Erft-Kreis</Link> innerhalb von Frechen oder eine Kellerräumung in Pulheim — unser erfahrenes Team ist schnell und zuverlässig vor Ort. Von unserem Hauptsitz in der <strong>Hauptstraße 26 in Bergheim</strong> aus koordinieren wir alle Einsätze im Rhein-Erft-Kreis. Durch kurze Anfahrtswege und die Kenntnis lokaler Entsorgungsinfrastruktur profitieren Sie von besonders günstigen Konditionen und flexibler Terminplanung — oft noch am gleichen oder nächsten Tag.
      </>}
      localInfo={<>
        Der Rhein-Erft-Kreis mit seinen 10 Städten und über 490.000 Einwohnern ist unser zentrales Einsatzgebiet. Wir kennen die Besonderheiten aller Kommunen — von den engen Innenstadtgassen Bergheims über die Bergarbeitersiedlungen in Elsdorf und Bedburg bis zu den modernen Neubaugebieten in Pulheim und Frechen. <Link href="/kellerentruempelung" className="text-primary hover:underline font-medium">Kellerentrümpelungen</Link>, <Link href="/wohnungsaufloesung" className="text-primary hover:underline font-medium">Wohnungsauflösungen</Link> und Haushaltsauflösungen nach Erbschaft zählen zu unseren häufigsten Aufträgen im Kreis. Als lokaler Anbieter sind wir mit dem AWB Rhein-Erft-Kreis und allen Entsorgungsstellen in der Region bestens vertraut — das spart Kosten und Zeit.
      </>}
      localExtras={RheinErftLocalExtras}
      plz="50126–50389"
      einwohner="ca. 490.000"
      kreis="Rhein-Erft-Kreis"
      highlights={[
        "Firmensitz in Bergheim (Kreisstadt) — schnellste Anfahrt",
        "Alle 10 Städte & Gemeinden vollständig abgedeckt",
        "Kostenlose Besichtigung und verbindliches Festpreisangebot",
        "Entrümpelung innerhalb von 24–48 Stunden",
        "Besenreine Übergabe immer inklusive",
        "Wertanrechnung auf den Entrümpelungspreis möglich",
      ]}
      faqs={[
        {
          question: "Was kostet eine Entrümpelung im Rhein-Erft-Kreis?",
          answer: "Die Kosten hängen von Größe, Füllgrad, Etage und Objekt ab. Als Richtwerte: Keller/Garage ab 250 €, 2-Zimmer-Wohnung ab 600 €, Einfamilienhaus ab 1.800 €. Alle Preise inklusive Entsorgung. Nach einer kostenlosen Besichtigung erhalten Sie ein verbindliches Festpreisangebot ohne versteckte Kosten — unabhängig vom Aufwand.",
        },
        {
          question: "Welche Städte im Rhein-Erft-Kreis decken Sie ab?",
          answer: "Wir sind in allen 10 Kommunen des Rhein-Erft-Kreises aktiv: Bergheim (unser Firmensitz), Kerpen, Frechen, Pulheim, Erftstadt, Hürth, Wesseling, Bedburg, Elsdorf, Brühl und Rommerskirchen — sowie in allen Ortsteilen und Dörfern der Region.",
        },
        {
          question: "Wie schnell können Sie eine Entrümpelung im Rhein-Erft-Kreis durchführen?",
          answer: "Mit unserem Firmensitz in Bergheim (Kreisstadt) sind wir meistens innerhalb von 20 Minuten bei Ihnen. Entrümpelungen führen wir in der Regel innerhalb von 24–48 Stunden nach Auftragserteilung durch. Bei Notfällen (z.B. für Wohnungsübergaben) auch kurzfristiger — sprechen Sie uns einfach an.",
        },
        {
          question: "Übernehmen Sie auch Haushaltsauflösungen nach einem Todesfall?",
          answer: "Ja, und das mit besonderer Sorgfalt und Diskretion. Wir entrümpeln vollständig, prüfen Wertgegenstände, koordinieren auf Wunsch mit Erben und Vermietern und übergeben die Immobilie besenrein. Viele Familien im Rhein-Erft-Kreis schätzen unsere einfühlsame Vorgehensweise in dieser schwierigen Situation.",
        },
        {
          question: "Kann ich Wertgegenstände gegen den Preis anrechnen lassen?",
          answer: "Ja. Bei der kostenlosen Besichtigung prüfen wir Möbel, Antiquitäten, Elektrogeräte und Metalle auf Wiederverkaufswert. Dieser Wert wird direkt vom Entrümpelungspreis abgezogen. In manchen Fällen kann die Entrümpelung sogar kostenlos oder gegen Aufrechnung durchgeführt werden.",
        },
        {
          question: "Ist die Entsorgung immer im Preis enthalten?",
          answer: "Ja, bei unseren Festpreisen ist die fachgerechte Entsorgung grundsätzlich inklusive. Wir trennen alle Materialien ordnungsgemäß und arbeiten mit dem AWB Rhein-Erft-Kreis sowie zertifizierten Entsorgungsbetrieben zusammen. Keine versteckten Entsorgungsgebühren — versprochen.",
        },
        {
          question: "Entrümpeln Sie auch Garagen, Keller und Dachböden im Rhein-Erft-Kreis?",
          answer: "Natürlich! Keller-, Garagen- und Dachbodenentrümpelungen sind ein Großteil unserer Aufträge im Rhein-Erft-Kreis. Inkl. Altöl, Schrott, Elektroschrott und schwerer Möbel. Wir kümmern uns um alles — Sie müssen nur die Tür öffnen.",
        },
        {
          question: "Bieten Sie auch Umzüge im Rhein-Erft-Kreis an?",
          answer: "Ja! Wir führen Privatumzüge, Seniorenumzüge, Büroumzüge und Firmenumzüge im gesamten Rhein-Erft-Kreis durch — sowie von und in die Region. Auf Wunsch übernehmen wir Demontage, Montage, Verpackung und Einlagerung.",
        },
        {
          question: "Wie läuft eine Entrümpelung ab?",
          answer: "1. Kostenlose Besichtigung vor Ort (meist am gleichen/nächsten Tag). 2. Verbindliches Festpreisangebot innerhalb von 24 Stunden. 3. Entrümpelung zum vereinbarten Termin. 4. Besenreine Übergabe und Protokoll. Sie kümmern sich um nichts — wir erledigen alles.",
        },
      ]}
      beispiel={{
        stadtteil: "Kerpen-Sindorf",
        objektTyp: "3-Zimmer-Wohnung",
        etage: "1. OG ohne Aufzug",
        flaeche: "ca. 72 m²",
        dauer: "1 Tag",
        team: "3 Mitarbeiter",
        preis: "1.490 €",
        leistungen: [
          "Komplettentrümpelung aller Räume inkl. Küche und Bad",
          "Demontage von Einbauschränken und alten Möbeln",
          "Abtransport von Sperrmüll, Elektrogeräten und Restmüll",
          "Fachgerechte Entsorgung über AWB und zertifizierte Partner",
          "Besenreine Übergabe an den Vermieter",
        ],
        kundenzitat: "Schnell, unkompliziert, faire Preise. Das Team war sehr nett und pünktlich. Ich würde sofort wieder buchen!",
        kundenName: "Sandra K.",
      }}
      neighborCities={[
        { name: "Köln", slug: "koeln" },
        { name: "Düsseldorf", slug: "duesseldorf" },
        { name: "Grevenbroich", slug: "grevenbroich" },
        { name: "Aachen", slug: "aachen" },
        { name: "Leverkusen", slug: "leverkusen" },
        { name: "Bonn", slug: "bonn" },
      ]}
      stadtteileDetail={[
        { name: "Bergheim", href: "/entruempelung-bergheim", text: "Kreisstadt und unser Firmensitz — schnellste Anfahrtswege, beste Konditionen. Alle Stadtteile von Bergheim vollständig abgedeckt." },
        { name: "Kerpen", href: "/entruempelung-kerpen", text: "Zweitgrößte Stadt im Rhein-Erft-Kreis mit vielen Wohngebieten aus der Nachkriegszeit — besonders viele Wohnungsauflösungen und Kellerentrümpelungen." },
        { name: "Frechen", href: "/entruempelung-frechen", text: "Köln-nahe Stadt mit hoher Bevölkerungsdichte — Haushaltsauflösungen für Vermieter und besenreine Wohnungsräumungen täglich im Einsatz." },
        { name: "Pulheim", href: "/entruempelung-pulheim", text: "Attraktive Wohnlage nördlich von Köln — viele Einfamilienhäuser, Erbschaftsentrümpelungen und Seniorenumzüge sind häufige Aufträge." },
        { name: "Erftstadt", href: "/entruempelung-erftstadt", text: "Flächenmäßig größte Stadt des Kreises mit vielen Ortsteilen — ältere Bausubstanz und großzügige Grundstücke, Haushaltsauflösungen und Scheunenräumungen." },
        { name: "Hürth", href: "/entruempelung-huerth", text: "Direkt an Köln grenzend — dichter Wohnraum, viele Mietwohnungen. Wohnungsauflösungen für Vermieter und Hausverwaltungen sind hier besonders gefragt." },
        { name: "Wesseling", href: "/entruempelung-wesseling", text: "Industriestandort mit gewachsenem Wohngebiet — Gewerbe- und Privaträumungen, Entrümpelungen vor Wohnungsübergaben regelmäßig buchbar." },
        { name: "Bedburg", href: "/entruempelung-bedburg", text: "Ländlich geprägte Stadt im Nordwesten des Kreises — Garagenentrümpelungen, Haushaltsauflösungen nach Erbschaft und Sperrmüllentsorgung." },
        { name: "Elsdorf", href: "/entruempelung-elsdorf", text: "Ruhige Wohnlage zwischen Bergheim und Grevenbroich — Haushaltsauflösungen älterer Haushalte und vollständige Grundstücksräumungen." },
        { name: "Brühl", href: "/entruempelung-bruehl", text: "Bekannte Stadt im Süden des Kreises — gepflegte Wohngebiete, Umzüge, Wohnungsauflösungen und Kellerentrümpelungen regelmäßig durchgeführt." },
        { name: "Rommerskirchen", href: "/entruempelung-rommerskirchen", text: "Westlichste Gemeinde des Kreises — ländliche Strukturen mit Dorfcharakter, Grundstücks- und Scheunenräumungen, Sperrmüllentsorgung." },
      ]}
    />
  );
}
