import { Link } from "wouter";
import LocationPage from "@/components/location-page";
import { Card } from "@/components/ui/card";
import { MapPin, Truck, Recycle, PhoneCall, CheckCircle2, Building2, Home, Warehouse } from "lucide-react";
import { FadeIn } from "@/components/fade-in";

const BergheimLocalExtras = (
  <>
    {/* ── Unser Heimatstandort ── */}
    <section className="py-16 sm:py-20 bg-primary/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-wider mb-4">
              <MapPin className="w-4 h-4" />
              Bergheim — unser Heimatstandort
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 leading-tight">
              Wir kommen aus Bergheim — und kennen jeden Winkel der Stadt
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Unser Büro und Firmensitz befinden sich direkt in der <strong>Hauptstraße 26 in Bergheim</strong>. Das bedeutet für Sie: kürzeste Anfahrtswege, schnelle Reaktionszeiten und tiefes Ortswissen — von der Bergheimer Innenstadt über Quadrath-Ichendorf bis in die ländlichen Ortsteile wie Glesch und Fliesteden.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Wir kennen die Parksituation rund um den Stadtpark, die engen Gassen in der Altstadt, die Mehrfamilienhäuser entlang der Kerpener Straße und die großen Häuser in Paffendorf und Büsdorf. Dieses lokale Wissen macht unsere Einsätze effizienter — und damit für Sie günstiger.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Hauptsitz direkt in Bergheim",
                "Anfahrt in unter 10 Minuten",
                "Alle 12 Stadtteile bekannt",
                "Parkverhältnisse & Zufahrten vertraut",
                "Lokale Entsorgungspartner vor Ort",
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
              <h3 className="font-semibold text-foreground text-base">Bergheim auf einen Blick</h3>
              <div className="divide-y divide-border">
                {[
                  { label: "Kreisstadt", value: "Rhein-Erft-Kreis" },
                  { label: "Einwohner", value: "ca. 65.000" },
                  { label: "Postleitzahlen", value: "50126 · 50127 · 50129" },
                  { label: "Stadtteile", value: "12 Ortsteile" },
                  { label: "Entfernung Köln", value: "ca. 25 km westlich" },
                  { label: "Anfahrt von uns", value: "< 10 Minuten" },
                  { label: "Wertstoffhof", value: "AWB Wertstoffzentrum Bergheim" },
                  { label: "Sperrmüllanmeldung", value: "AWB Rhein-Erft-Kreis" },
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

    {/* ── Typische Aufträge nach Objekttyp ── */}
    <section className="py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <FadeIn className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
            Typische Entrümpelungen in Bergheim — was wir vor Ort antreffen
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
            Bergheim ist geprägt von Nachkriegsbauten, ehemaligen Bergarbeitersiedlungen und modernen Neubaugebieten. Das spiegelt sich in unseren Aufträgen wider.
          </p>
        </FadeIn>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              Icon: Building2,
              title: "Mehrfamilienhäuser & Mietwohnungen",
              area: "Quadrath-Ichendorf · Bergheim-Mitte",
              items: [
                "Wohnungsauflösungen nach Mieterwechsel",
                "Entrümpelung für Vermieter & Hausverwaltungen",
                "Keller- und Dachbodenräumungen",
                "Enge Treppenhäuser: kein Problem für unser Team",
                "Besenreine Übergabe inklusive",
              ],
              tip: "Vermieter-Tipp: Wir koordinieren direkt mit der Hausverwaltung — Sie müssen nicht vor Ort sein.",
            },
            {
              Icon: Home,
              title: "Einfamilienhäuser & Erbschaftsfälle",
              area: "Niederaußem · Paffendorf · Büsdorf",
              items: [
                "Komplette Haushaltsauflösungen nach Erbschaft",
                "Einfühlsame Abwicklung in sensiblen Situationen",
                "Wertgegenstände werden geprüft und angerechnet",
                "Garten- und Schuppenräumungen inklusive",
                "Entrümpelung auch bei ungeklärten Eigentumsverhältnissen",
              ],
              tip: "Diskret & respektvoll: Wir verstehen, dass Erbschaftsentrümpelungen emotional belastend sind.",
            },
            {
              Icon: Warehouse,
              title: "Garagen, Keller & Gewerbe",
              area: "Glesch · Thorr · Gewerbegebiet Bergheim",
              items: [
                "Garagenentrümpelungen inkl. Altöl & Schrott",
                "Kellerräumungen in Bergarbeitersiedlungen",
                "Gewerbliche Entrümpelung & Lagerauflösung",
                "Schrottankauf: Altmetall wird direkt abgerechnet",
                "Sondermüll & Chemikalien fachgerecht entsorgt",
              ],
              tip: "Bergheim-Vorteil: Kurze Wege zum AWB-Wertstoffzentrum senken die Entsorgungskosten.",
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

    {/* ── Entsorgung in Bergheim ── */}
    <section className="py-16 sm:py-20 bg-card/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Entsorgung in Bergheim: Was Sie wissen sollten
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Als Bergheimer Unternehmen arbeiten wir eng mit dem <strong>AWB Rhein-Erft-Kreis</strong> (Abfallwirtschaftsbetrieb) zusammen und kennen alle lokalen Entsorgungswege. Das bedeutet für Sie: keine langen Umwege, günstigere Kosten und rechtssichere Entsorgung.
            </p>
            <div className="space-y-4">
              {[
                {
                  title: "AWB Wertstoffzentrum Bergheim",
                  desc: "Unser primärer Entsorgungspartner — nur wenige Kilometer vom Stadtzen­trum entfernt. Kurze Wege = niedrigere Transportkosten für Sie.",
                },
                {
                  title: "Sperrmüllabholung durch AWB",
                  desc: "Für kleinere Mengen kann der AWB Sperrmüll direkt abholen. Bei größeren Entrümpelungen ist unser Service schneller und kostengünstiger — ohne Wartezeit.",
                },
                {
                  title: "Schrott & Altmetallankauf",
                  desc: "Altmetall aus Bergheim wird direkt über unsere Partnerschrotthändler verwertet. Der Erlös senkt Ihren Entrümpelungspreis.",
                },
                {
                  title: "Elektroschrott & Kühlgeräte",
                  desc: "ElektroG-konforme Entsorgung von Kühlschränken, Waschmaschinen und Fernsehern — selbstverständlich nach deutschem Recht.",
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
            {/* Preistabelle */}
            <Card className="p-6">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <Truck className="w-4 h-4 text-primary" />
                Preisbeispiele Bergheim
              </h3>
              <div className="space-y-3">
                {[
                  { obj: "Keller / Garage", groesse: "15–30 m²", preis: "ab 250 €" },
                  { obj: "2-Zimmer-Wohnung", groesse: "ca. 55 m²", preis: "ab 500 €" },
                  { obj: "3-Zimmer-Wohnung", groesse: "ca. 75 m²", preis: "ab 900 €" },
                  { obj: "Einfamilienhaus", groesse: "ca. 130 m²", preis: "ab 1.800 €" },
                  { obj: "Doppelhaushälfte", groesse: "ca. 110 m²", preis: "ab 1.500 €" },
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
                * Richtwerte inkl. Entsorgung. Genaue Kosten nach kostenloser Besichtigung in Bergheim. Wertanrechnung möglich.
              </p>
            </Card>
            {/* CTA */}
            <Card className="p-5 bg-primary text-white border-0">
              <div className="flex items-start gap-3">
                <PhoneCall className="w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm mb-1">Kostenlose Besichtigung in Bergheim</p>
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

    {/* ── Bergheim Stadtteile Highlights ── */}
    <section className="py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <FadeIn className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
            Bergheim & seine Stadtteile — wir kennen jeden Ortsteil
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
            Von der Bergheimer Innenstadt bis in die ländlichsten Ortsteile: unser Team ist täglich in ganz Bergheim unterwegs.
          </p>
        </FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              name: "Bergheim-Mitte / Innenstadt",
              desc: "Rund um den Stadtpark und die Hauptstraße: viele ältere Mehrfamilienhäuser, teils mit engen Treppenhäusern. Wohnungsauflösungen für Vermieter sind hier unser häufigster Auftrag.",
              badge: "Häufigster Einsatzort",
            },
            {
              name: "Quadrath-Ichendorf",
              desc: "Größter Stadtteil mit vielen Wohnblöcken aus den 1960er–80er Jahren. Kellerentrümpelungen und Haushaltsauflösungen stehen hier regelmäßig auf dem Plan.",
              badge: "Bekannt wie unsere Westentasche",
            },
            {
              name: "Niederaußem",
              desc: "Ehemaliges Bergarbeiterdorf mit charakteristischen Reihenhäusern. Häufig: Haushaltsauflösungen nach Generationenwechsel, mit schwereren Schlafzimmermöbeln.",
              badge: "Bergarbeitertradition",
            },
            {
              name: "Paffendorf",
              desc: "Einfamilienhaussiedlung am Stadtrand mit größeren Grundstücken. Gartenräumungen, Garagenentrümpelungen und vollständige Haushaltsauflösungen.",
              badge: "Einfamilienhäuser",
            },
            {
              name: "Glesch",
              desc: "Kleines Dorf mit älterer Bausubstanz. Wir werden hier regelmäßig für Wohnungsräumungen und Sperrmüllentsorgung für Vermieter gebucht.",
              badge: "Ländlich & ruhig",
            },
            {
              name: "Oberaußem",
              desc: "Prägend war das Kraftwerk — heute sind Kellerentrümpelungen und Haushaltsauflösungen nach Erbschaft die häufigsten Anfragen aus diesem Ortsteil.",
              badge: "Viel ältere Bausubstanz",
            },
          ].map((item, i) => (
            <FadeIn key={i} delayMs={i * 60}>
              <Card className="p-5 h-full">
                {item.badge && (
                  <span className="inline-block text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full mb-3">
                    {item.badge}
                  </span>
                )}
                <h3 className="font-semibold text-foreground text-sm mb-2">{item.name}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </Card>
            </FadeIn>
          ))}
        </div>
        <FadeIn className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Alle anderen Stadtteile (Ahe, Zieverich, Thorr, Büsdorf, Auenheim, Kenten, Fliesteden) sind natürlich ebenso abgedeckt.{" "}
            <Link href="/standorte" className="text-primary hover:underline font-medium">Alle Einsatzgebiete ansehen →</Link>
          </p>
        </FadeIn>
      </div>
    </section>
  </>
);

export default function BergheimPage() {
  return (
    <LocationPage
      cityName="Bergheim"
      slug="bergheim"
      description="Ihr zuverlässiger Partner für Entrümpelungen, Haushaltsauflösungen und Umzüge in Bergheim (Rhein-Erft-Kreis). Faire Festpreise, schnelle Ausführung und besenreine Übergabe."
      metaDescription="Entrümpelung Bergheim ✓ Haushaltsauflösung ✓ Umzüge ✓ Faire Festpreise ✓ 24-48h Ausführung ✓ 5.0 Sterne bei Google ✓ Jetzt kostenlos anfragen! ☎ 02271 / 5880940"
      introText={<>
        Als in Bergheim ansässiges Unternehmen kennen wir die Stadt wie unsere Westentasche. Ob <Link href="/entruempelung" className="text-primary hover:underline font-medium">Entrümpelung</Link> einer Altbauwohnung in der Bergheimer Innenstadt, eine <Link href="/haushaltsaufloesung" className="text-primary hover:underline font-medium">Haushaltsauflösung</Link> in Quadrath-Ichendorf oder ein <Link href="/umzug" className="text-primary hover:underline font-medium">Umzug</Link> nach Glesch — unser erfahrenes Team ist schnell vor Ort. Von unserem Hauptsitz in der Hauptstraße 26 aus koordinieren wir alle Einsätze in Bergheim und dem gesamten Rhein-Erft-Kreis. Durch kurze Anfahrtswege profitieren Sie von besonders günstigen Konditionen und flexibler Terminplanung — oft noch am gleichen oder nächsten Tag.
      </>}
      localInfo={<>
        Bergheim ist als Kreisstadt des Rhein-Erft-Kreises unser Heimatstandort. Wir kennen die Besonderheiten der einzelnen Stadtteile — von Ahe über Oberaußem bis Paffendorf. Besonders häufig sind wir in den älteren Wohngebieten rund um das Stadtzentrum, in den Bergbau-Wohnsiedlungen von Niederaußem und in den Neubaugebieten von Bergheim-Süd im Einsatz. <Link href="/kellerentruempelung" className="text-primary hover:underline font-medium">Kellerentrümpelungen</Link> und <Link href="/wohnungsaufloesung" className="text-primary hover:underline font-medium">Wohnungsauflösungen</Link> gehören zu unseren meistgebuchten Leistungen in Bergheim. Als lokales Unternehmen sind wir nicht nur schnell vor Ort, sondern auch mit den Entsorgungsstandorten und lokalen Behörden bestens vertraut.
      </>}
      localExtras={BergheimLocalExtras}
      plz="50126, 50127, 50129"
      einwohner="ca. 65.000"
      kreis="Rhein-Erft-Kreis"
      highlights={[
        "Unser Hauptsitz — kürzeste Anfahrtswege",
        "Kostenlose Besichtigung und Festpreisangebot",
        "Entrümpelung innerhalb von 24–48 Stunden",
        "Besenreine Übergabe inklusive",
        "Fachgerechte Entsorgung aller Materialien",
        "Wertanrechnung auf den Entrümpelungspreis",
      ]}
      faqs={[
        {
          question: "Was kostet eine Entrümpelung in Bergheim?",
          answer: "Die Kosten hängen von der Größe der Immobilie, dem Füllgrad und der Etage ab. Als Richtwert: Eine 2-Zimmer-Wohnung in Bergheim beginnt ab ca. 400–800 €. Wir erstellen Ihnen nach einer kostenlosen Besichtigung ein verbindliches Festpreisangebot — ohne versteckte Kosten.",
        },
        {
          question: "Wie schnell kann eine Entrümpelung in Bergheim stattfinden?",
          answer: "Da unser Hauptsitz direkt in Bergheim ist, können wir besonders schnell reagieren. In der Regel führen wir Entrümpelungen innerhalb von 24–48 Stunden nach Auftragserteilung durch. Bei Notfällen sind auch kurzfristigere Termine möglich.",
        },
        {
          question: "Bieten Sie auch Umzüge innerhalb von Bergheim an?",
          answer: "Ja, wir bieten Privatumzüge, Seniorenumzüge und Büroumzüge innerhalb von Bergheim sowie von und nach Bergheim an. Unser Team übernimmt auf Wunsch auch die Demontage und Montage von Möbeln.",
        },
        {
          question: "Übernehmen Sie auch Kellerentrümpelungen in Bergheim?",
          answer: "Selbstverständlich! Wir entrümpeln Keller, Dachböden, Garagen und Gartenhäuser in ganz Bergheim. Auch Sperrmüllentsorgung und Schrottabholung gehören zu unserem Service.",
        },
        {
          question: "Ist die Entsorgung in den Kosten enthalten?",
          answer: "Ja, bei unseren Festpreisen ist die fachgerechte Entsorgung bereits inklusive. Wir trennen alle Materialien ordnungsgemäß und arbeiten mit zertifizierten Entsorgungsbetrieben zusammen.",
        },
        {
          question: "Können verwertbare Gegenstände auf den Preis angerechnet werden?",
          answer: "Ja, wir prüfen bei der kostenlosen Besichtigung, ob Antiquitäten, Elektrogeräte, Metalle oder Möbel einen Wiederverkaufswert haben. Dieser Wert wird direkt vom Entrümpelungspreis abgezogen — das spart Ihnen bares Geld.",
        },
        {
          question: "Wie läuft eine Haushaltsauflösung in Bergheim ab?",
          answer: "Nach der kostenlosen Besichtigung erhalten Sie ein verbindliches Festpreisangebot. Am Ausführungstag räumen wir alle Räume, demontieren Möbel, transportieren alles ab und übergeben die Immobilie besenrein. Sie müssen sich um nichts kümmern.",
        },
        {
          question: "Wie unterscheidet sich Bergheim von anderen Städten?",
          answer: "Bergheim ist unser Firmensitz — das macht den Unterschied. Wir sind schneller vor Ort als jeder Mitbewerber, kennen alle Stadtteile und haben direkten Zugang zu lokalen Entsorgungspartnern. Das spart Kosten und Zeit.",
        },
      ]}
      beispiel={{
        stadtteil: "Quadrath-Ichendorf",
        objektTyp: "3-Zimmer-Wohnung",
        etage: "2. OG ohne Aufzug",
        flaeche: "ca. 75 m²",
        dauer: "1 Tag",
        team: "3 Mitarbeiter",
        preis: "1.200 €",
        leistungen: [
          "Komplettentrümpelung aller Räume inkl. Küche und Bad",
          "Demontage von Einbauküche und Einbauschränken",
          "Abtransport von Sperrmüll, Elektrogeräten und Restmüll",
          "Fachgerechte Entsorgung über zertifizierte Partner",
          "Besenreine Übergabe an den Vermieter",
        ],
        kundenzitat: "Super Team! Pünktlich, freundlich und die Wohnung war blitzsauber. Absolut empfehlenswert!",
        kundenName: "Petra M.",
      }}
      stadtteileDetail={[
        { name: "Quadrath-Ichendorf", href: "/entruempelung-quadrath-ichendorf", text: "Größter Stadtteil Bergheims mit vielen Mehrfamilienhäusern der Nachkriegszeit — Wohnungsauflösungen und Kellerentrümpelungen stehen hier besonders häufig auf unserem Plan." },
        { name: "Niederaußem", href: "/entruempelung-niederaussem", text: "Ländlich geprägter Ortsteil mit Einfamilienhäusern und ehemaligen Bergarbeitersiedlungen — Haushaltsauflösungen nach Erbschaft und Generationenwechsel sind häufige Aufträge." },
        { name: "Ahe", text: "Kleines Dorf nördlich von Bergheim mit älterer Bausubstanz — wir werden hier regelmäßig für Garagen- und Scheunenräumungen sowie Grundstücksräumungen gebucht." },
        { name: "Zieverich", href: "/entruempelung-zieverich", text: "Kompakter Wohnort mit gemischter Bebauung — unser Team ist hier regelmäßig für Teilentrümpelungen, Kellerräumungen und Seniorenumzüge im Einsatz." },
        { name: "Thorr", href: "/entruempelung-thorr", text: "Ruhige Wohnlage mit überwiegend Reihenhäusern und Einfamilienhäusern — Keller- und Dachbodenentrümpelungen sind die häufigsten Anfragen aus diesem Ortsteil." },
        { name: "Paffendorf", href: "/entruempelung-paffendorf", text: "Einfamilienhaussiedlung am Stadtrand von Bergheim — Haushaltsauflösungen und vollständige Wohnungsräumungen für Vermieter und Eigentümer gehören zum Alltag." },
        { name: "Glesch", href: "/entruempelung-glesch", text: "Kleines Dorf mit älterer Bausubstanz und ruhiger Wohnlage — Sperrmüllentsorgung und Wohnungsräumungen für Vermieter werden hier regelmäßig gebucht." },
        { name: "Büsdorf", text: "Bevorzugte Wohnlage mit vielen Eigentümerhäusern — wir werden hier oft für einfühlsame Auflösungen von Seniorenhaushalten und besenreine Übergaben beauftragt." },
        { name: "Oberaußem", href: "/entruempelung-oberaussem", text: "Ortsteil mit viel älterer Wohnbebauung rund um den ehemaligen Kraftwerksstandort — Kellerentrümpelungen und Haushaltsauflösungen nach Erbschaft sind besonders gefragt." },
        { name: "Auenheim", text: "Kleiner ruhiger Ortsteil zwischen Bergheim und Elsdorf — hauptsächlich Sperrmüllentsorgung, Teilentrümpelungen und Abholung alter Gartengeräte." },
        { name: "Kenten", text: "Einfamilienhaussiedlung mit guter Anbindung an die Bergheimer Innenstadt — Umzüge innerhalb des Kreises und Kellerentrümpelungen werden am häufigsten angefragt." },
        { name: "Fliesteden", text: "Ländlich gelegener Ortsteil mit Nähe zur Natur — Scheunen- und Hofräumungen sowie Auflösungen älterer landwirtschaftlicher Bestände werden hier regelmäßig angefragt." },
      ]}
      stadtteile={[
        "Quadrath-Ichendorf",
        "Niederaußem",
        "Ahe",
        "Zieverich",
        "Thorr",
        "Paffendorf",
        "Glesch",
        "Büsdorf",
        "Oberaußem",
        "Auenheim",
        "Kenten",
        "Fliesteden",
      ]}
      neighborCities={[
        { name: "Bedburg", slug: "bedburg" },
        { name: "Kerpen", slug: "kerpen" },
        { name: "Elsdorf", slug: "elsdorf" },
        { name: "Pulheim", slug: "pulheim" },
        { name: "Frechen", slug: "frechen" },
        { name: "Hürth", slug: "huerth" },
        { name: "Erftstadt", slug: "erftstadt" },
        { name: "Rommerskirchen", slug: "rommerskirchen" },
      ]}
      mapEmbed="https://www.google.com/maps?q=Stressfrei+Entrümpelungen+%26+Umzüge,+Hauptstraße+26,+50126+Bergheim&output=embed"
    />
  );
}
