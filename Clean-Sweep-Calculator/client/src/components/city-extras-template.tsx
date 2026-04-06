import { FadeIn } from "@/components/fade-in";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import {
  MapPin, Truck, Recycle, PhoneCall, CheckCircle2,
  Building2, Home, Warehouse, Clock, Euro, Star, Shield,
} from "lucide-react";

export interface StadtteilCard {
  name: string;
  desc: string;
  badge?: string;
}

export interface CityExtrasData {
  cityName: string;
  distanz: string;
  fahrzeit: string;
  plz: string;
  einwohner: string;
  kreis: string;
  entsorgung: string;
  naherOrtTip: string;
  lokalerFakt: string;
  mfhText: string;
  mfhArea: string;
  efhText: string;
  efhArea: string;
  kellerText: string;
  kellerArea: string;
  stadtteileCards: StadtteilCard[];
  preisbeispiele?: Array<{ obj: string; groesse: string; preis: string }>;
}

const defaultPreise = [
  { obj: "Keller / Garage", groesse: "15–30 m²", preis: "ab 250 €" },
  { obj: "2-Zimmer-Wohnung", groesse: "ca. 55 m²", preis: "ab 500 €" },
  { obj: "3-Zimmer-Wohnung", groesse: "ca. 75 m²", preis: "ab 900 €" },
  { obj: "Einfamilienhaus", groesse: "ca. 130 m²", preis: "ab 1.800 €" },
  { obj: "Doppelhaushälfte", groesse: "ca. 110 m²", preis: "ab 1.500 €" },
];

export default function CityExtrasTemplate({ data }: { data: CityExtrasData }) {
  const preise = data.preisbeispiele ?? defaultPreise;

  return (
    <>
      {/* ── Anfahrt & Lokale Stärke ── */}
      <section className="py-16 sm:py-20 bg-primary/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-wider mb-4">
                <MapPin className="w-4 h-4" />
                Unser Team kommt zu Ihnen nach {data.cityName}
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 leading-tight">
                Schnell vor Ort in {data.cityName} — von Bergheim aus in {data.fahrzeit}
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Unser Firmensitz in der <strong>Hauptstraße 26 in Bergheim</strong> liegt nur {data.distanz} von {data.cityName} entfernt. Das bedeutet für Sie: schnelle Reaktionszeiten, niedrige Anfahrtskosten und flexible Terminplanung — oft noch am gleichen oder nächsten Tag.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {data.naherOrtTip}
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  `Anfahrt: nur ${data.fahrzeit} von Bergheim`,
                  "Termin oft noch am gleichen Tag",
                  "Kein Aufpreis für Anfahrt",
                  "Festpreisangebot in 24 Stunden",
                  "Besenreine Übergabe inklusive",
                  "Vollständig versichert & legal",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delayMs={150}>
              <Card className="p-6 space-y-0">
                <h3 className="font-semibold text-foreground text-base mb-4">{data.cityName} im Überblick</h3>
                <div className="divide-y divide-border">
                  {[
                    { label: "Stadt / Gemeinde", value: data.cityName },
                    { label: "Landkreis", value: data.kreis },
                    { label: "Einwohner", value: data.einwohner },
                    { label: "PLZ", value: data.plz },
                    { label: "Entfernung von uns", value: data.distanz },
                    { label: "Fahrzeit", value: data.fahrzeit },
                    { label: "Entsorgung über", value: data.entsorgung },
                  ].map((row, i) => (
                    <div key={i} className="py-2.5 flex justify-between text-sm">
                      <span className="text-muted-foreground">{row.label}</span>
                      <span className="font-medium text-foreground text-right">{row.value}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Typische Aufträge ── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeIn className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
              Typische Entrümpelungen in {data.cityName}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
              {data.lokalerFakt}
            </p>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                Icon: Building2,
                title: "Mietwohnungen & Mehrfamilienhäuser",
                area: data.mfhArea,
                text: data.mfhText,
                items: [
                  "Wohnungsauflösungen für Vermieter & Hausverwaltungen",
                  "Keller- und Dachbodenräumungen",
                  "Enge Treppenhäuser: kein Problem",
                  "Besenreine Übergabe inklusive",
                ],
                tip: "Vermieter-Tipp: Wir koordinieren direkt mit Ihrer Hausverwaltung — Sie müssen nicht vor Ort sein.",
              },
              {
                Icon: Home,
                title: "Einfamilienhäuser & Erbschaftsfälle",
                area: data.efhArea,
                text: data.efhText,
                items: [
                  "Komplette Haushaltsauflösungen nach Erbschaft",
                  "Diskrete, einfühlsame Abwicklung",
                  "Wertgegenstände werden angerechnet",
                  "Garten und Garage werden mitgeräumt",
                ],
                tip: "Alles aus einer Hand: Von der Räumung bis zur besenreinen Übergabe.",
              },
              {
                Icon: Warehouse,
                title: "Keller, Garagen & Gewerbeobjekte",
                area: data.kellerArea,
                text: data.kellerText,
                items: [
                  "Garagenentrümpelungen inkl. Altöl & Schrott",
                  "Gewerbliche Lager- und Büroräumungen",
                  "Altmetallankauf direkt verrechnet",
                  "Sondermüll fachgerecht entsorgt",
                ],
                tip: "Schrottankauf: Altmetall, Altgeräte & Wertstoffe werden direkt auf den Preis angerechnet.",
              },
            ].map(({ Icon, title, area, text, items, tip }, i) => (
              <FadeIn key={i} delayMs={i * 80}>
                <Card className="p-6 h-full flex flex-col">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-sm leading-snug">{title}</h3>
                      <p className="text-xs text-primary mt-0.5">{area}</p>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3">{text}</p>
                  <ul className="space-y-1.5 flex-1 mb-4">
                    {items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="rounded-lg bg-primary/5 border border-primary/10 p-3 mt-auto">
                    <p className="text-xs text-foreground leading-relaxed">{tip}</p>
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Preise & CTA ── */}
      <section className="py-16 sm:py-20 bg-card/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <FadeIn>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Entrümpelungskosten in {data.cityName}: Was Sie erwarten können
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Unsere Preise sind transparent und all-inclusive — Entsorgung, Transport, Demontage und besenreine Übergabe sind immer enthalten. Wertanrechnung kann die Kosten um 20–40 % senken.
              </p>
              <div className="space-y-4 mb-6">
                {[
                  { Icon: Euro, title: "Transparente Festpreise", desc: "Kein Stundenhonorar. Nach der kostenlosen Besichtigung erhalten Sie ein verbindliches Festpreisangebot — ohne Nachzahlung." },
                  { Icon: Recycle, title: "Wertanrechnung spart Geld", desc: "Gut erhaltene Möbel, Elektrogeräte und Metalle werden direkt vom Preis abgezogen. Viele Kunden sparen so 20–40 %." },
                  { Icon: Shield, title: "Entsorgung ist inklusive", desc: `Wir arbeiten mit dem ${data.entsorgung} und zertifizierten Partnern zusammen. Alles wird fachgerecht getrennt und entsorgt.` },
                ].map(({ Icon, title, desc }, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">{title}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delayMs={150} className="space-y-5">
              <Card className="p-6">
                <h3 className="font-semibold text-foreground mb-1 flex items-center gap-2">
                  <Truck className="w-4 h-4 text-primary" />
                  Preisbeispiele {data.cityName}
                </h3>
                <p className="text-xs text-muted-foreground mb-4">inkl. Entsorgung & besenreiner Übergabe</p>
                <div className="space-y-0">
                  {preise.map((row, i) => (
                    <div key={i} className="flex items-center justify-between py-2.5 border-b border-border last:border-0 text-sm">
                      <div>
                        <span className="font-medium text-foreground">{row.obj}</span>
                        <span className="text-xs text-muted-foreground ml-2">({row.groesse})</span>
                      </div>
                      <span className="font-bold text-primary">{row.preis}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-4 leading-relaxed">
                  * Richtwerte. Exakter Preis nach kostenloser Besichtigung in {data.cityName}. Wertanrechnung möglich.
                </p>
              </Card>

              <Card className="p-5 bg-primary text-white border-0">
                <div className="flex items-start gap-3">
                  <PhoneCall className="w-5 h-5 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-sm mb-1">Jetzt kostenlos anfragen — Termin in {data.cityName}</p>
                    <p className="text-xs text-white/80 leading-relaxed mb-3">
                      Wir kommen zur kostenlosen Besichtigung nach {data.cityName} — oft noch am gleichen oder nächsten Tag. Festpreisangebot innerhalb von 24 Stunden.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <a
                        href="tel:+4922715880940"
                        className="inline-flex items-center justify-center gap-2 bg-white text-primary font-bold text-sm px-4 py-2.5 rounded-lg hover:bg-white/90 transition-colors"
                      >
                        <PhoneCall className="w-4 h-4" />
                        02271 / 5880940
                      </a>
                      <Link
                        href="/kontakt"
                        className="inline-flex items-center justify-center gap-2 border border-white/40 text-white font-semibold text-sm px-4 py-2.5 rounded-lg hover:bg-white/10 transition-colors"
                      >
                        Online anfragen →
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>

              <div className="flex items-center gap-4 justify-center pt-1">
                {[
                  { Icon: Star, text: "5,0 Google" },
                  { Icon: Clock, text: "24–48h Ausführung" },
                  { Icon: Shield, text: "Festpreisgarantie" },
                ].map(({ Icon, text }, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Icon className="w-3.5 h-3.5 text-primary" />
                    {text}
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Stadtteile Grid ── */}
      {data.stadtteileCards.length > 0 && (
        <section className="py-16 sm:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <FadeIn className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
                {data.cityName} und seine Stadtteile — wir kennen jeden Ortsteil
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
                Von der Innenstadt bis in die ländlichsten Ecken: unser Team ist in ganz {data.cityName} und Umgebung im Einsatz.
              </p>
            </FadeIn>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {data.stadtteileCards.map((item, i) => (
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
          </div>
        </section>
      )}
    </>
  );
}
