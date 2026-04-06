import ServiceDetailPage from "@/components/service-detail-page";
import { Paintbrush, Shield, Clock, CheckCircle2, Wrench, Star, Sparkles, Heart } from "lucide-react";

export default function RenovierungsservicePage() {
  return (
    <ServiceDetailPage
      data={{
        slug: "renovierungsservice",
        pageName: "Renovierungsservice",
        badge: "Renovierung & Aufwertung",
        title: "Renovierungsservice im Rhein-Erft-Kreis — Schnell auf Vordermann gebracht",
        subtitle: "Streichen, Spachteln, Tapezieren, kleine Reparaturen — wir bringen Ihre Immobilie schnell und unkompliziert wieder in Schuss. Ideal für Vermieter, Mieter und Eigennutzer im Rhein-Erft-Kreis.",
        heroImage: "/images/services/renovierungsservice.webp",
        heroImageAlt: "Handwerker streicht eine weiße Wand in einer leeren Wohnung mit einer Farbrolle für die Renovierung",
        metaDescription: "Renovierungsservice Rhein-Erft-Kreis ✓ Streichen, Spachteln, Tapezieren ✓ Kleine Reparaturen ✓ Für Vermieter & Mieter ✓ Festpreis ✓ Schnell verfügbar ☎ 02271 / 5880940",
        intro: "Eine frisch renovierte Wohnung ist mehr wert — für Vermieter, die schnell neu vermieten wollen, für Mieter, die die Kaution zurückbekommen möchten, und für Eigennutzer, die wieder Freude an ihren vier Wänden haben wollen. Unser Renovierungsservice im Rhein-Erft-Kreis deckt alle leichten und mittleren Renovierungsarbeiten ab: Wände und Decken streichen, Spachteln und Grundieren, Tapeten anbringen, Fenster und Türrahmen streichen, Dübellöcher füllen, Silikon erneuern und kleine handwerkliche Reparaturen. Wir arbeiten schnell, sauber und mit hochwertigen Materialien — zu einem verbindlichen Festpreis, ohne Stundenlohn-Überraschungen. In Bergheim, Kerpen, Pulheim, Frechen, Hürth, Brühl und im gesamten Rhein-Erft-Kreis.",
        benefits: [
          { icon: Paintbrush, title: "Streichen & Tapezieren", desc: "Wände und Decken streichen, alte Tapeten entfernen und neue anbringen — auch schwierige Altanstriche, Raufaser und Putzflächen kein Problem." },
          { icon: Wrench, title: "Kleine Reparaturen", desc: "Türen schleifen & lackieren, Fensterrahmen streichen, Dübellöcher füllen, Silikon erneuern, Scharniere einstellen — alle kleinen Handwerksarbeiten aus einer Hand." },
          { icon: CheckCircle2, title: "Spachteln & Grundieren", desc: "Wände spachteln, schleifen und grundieren — als Vorbereitung für Farbe oder Tapete für ein perfektes, gleichmäßiges Ergebnis ohne Flecken und Unebenheiten." },
          { icon: Clock, title: "Schnelle Ausführung im Rhein-Erft-Kreis", desc: "Unsere Renovierungsteams sind in der Regel binnen weniger Tage verfügbar und arbeiten effizient — damit Ihre Immobilie schnell wieder bewohnbar oder vermietbar ist." },
          { icon: Shield, title: "Saubere Baustelle — kein Schmutz zurück", desc: "Wir schützen Böden, Heizkörper und verbleibende Einrichtung mit Folien, arbeiten sauber und hinterlassen nach Abschluss eine besenreine Wohnung." },
          { icon: Heart, title: "Für Vermieter, Mieter & Eigennutzer", desc: "Wohnungsübergabe steht an? Neuvermietung geplant? Oder einfach frische Farbe gewünscht? Wir streichen, reparieren und renovieren schnell und zum Festpreis." },
        ],
        ablauf: [
          { step: "1", title: "Anfrage & Foto-Beschreibung", desc: "Beschreiben Sie, was renoviert werden soll — Fotos der Räume sind sehr hilfreich für eine genaue Kalkulation ohne Vor-Ort-Termin." },
          { step: "2", title: "Besichtigung & Festpreisangebot", desc: "Wir besichtigen die Immobilie kostenlos und erstellen ein verbindliches Festpreisangebot — ohne Stundensatz-Überraschungen, ohne versteckte Kosten." },
          { step: "3", title: "Renovierung professionell durchführen", desc: "Unser Team führt alle vereinbarten Arbeiten sauber und professionell durch — mit hochwertigen Materialien und auf Wunsch nach Ihrer Farbwahl." },
          { step: "4", title: "Abnahme, Übergabe & Protokoll", desc: "Wir nehmen das Ergebnis gemeinsam mit Ihnen ab, dokumentieren auf Wunsch mit Fotos und übergeben eine saubere, frisch renovierte Immobilie." },
        ],
        faqs: [
          { question: "Was gehört zum Renovierungsservice?", answer: "Streichen (Wände, Decken, Türen, Fensterrahmen), Tapezieren, Spachteln, Grundieren, kleine Reparaturen, Silikon erneuern, Dübellöcher füllen, Scharniere einstellen — alle leichten bis mittelschweren Renovierungsarbeiten." },
          { question: "Können Sie eine ganze Wohnung renovieren?", answer: "Ja, wir übernehmen die komplette Renovierung einer Wohnung oder einzelne Räume — ganz nach Ihrem Bedarf und Budget. Auch Etagenwohnungen, Häuser und Gewerberäume." },
          { question: "Bringen Sie Materialien und Farben mit?", answer: "Auf Wunsch ja — wir besorgen Farben, Tapeten und Materialien nach Ihrer Wahl oder geben Empfehlungen zu geeigneten Produkten. Alternativ können Sie Material auch selbst stellen." },
          { question: "Wie schnell können Sie kommen?", answer: "In der Regel innerhalb von 3–7 Werktagen nach Auftragserteilung. Bei dringenden Wohnungsübergaben oder Termindruck versuchen wir noch schneller zu reagieren — sprechen Sie uns an." },
          { question: "Renovieren Sie auch für Vermieter zwischen zwei Mietern?", answer: "Ja, das ist eine unserer häufigsten Aufgaben. Wir renovieren schnell und kosteneffizient, damit die Wohnung schnell wieder vermietet werden kann — oft reichen 1–2 Tage für eine komplette Wohnung." },
          { question: "Können Sie auch Schönheitsreparaturen für Mieter durchführen?", answer: "Ja, wir helfen Mietern bei der Wohnungsrückgabe: Dübellöcher füllen, Wände streichen, Böden reinigen — damit die Wohnung im vertragsgemäßen Zustand übergeben werden kann." },
          { question: "Können Sie auch Böden renovieren?", answer: "Wir behandeln Holzböden (schleifen und ölen/lackieren) und verlegen auf Anfrage neue Laminat- oder Vinylböden. Bitte beim Anfragen erwähnen." },
          { question: "Was kostet eine Renovierung für eine 3-Zimmer-Wohnung?", answer: "Komplett streichen (Wände, Decken) für eine ca. 70 m² Wohnung kostet in der Regel 800–1.800 € abhängig von Wandzustand, Tapetenart und Farbwahl. Wir erstellen nach Besichtigung ein verbindliches Angebot." },
          { question: "Können Sie auch nach einer Entrümpelung renovieren?", answer: "Ja, die Kombination Entrümpelung → Grundreinigung → Renovierung ist besonders beliebt. Wir koordinieren alles aus einer Hand — spart Zeit und Kosten." },
        ],
        priceHint: "Renovierungsarbeiten zum Festpreis — abhängig von Umfang, Raumgröße und Wandzustand. Nach kostenloser Besichtigung oder Fotobewertung erstellen wir ein transparentes Angebot ohne Stundenlohn-Überraschungen.",
        pricingRows: [
          { label: "Zimmer streichen (bis 20 m²)", price: "ab 299 €", note: "inkl. Material" },
          { label: "Wohnung streichen (3 Zimmer)", price: "ab 799 €", note: "inkl. Material" },
          { label: "Tapeten entfernen + streichen (Zimmer)", price: "ab 399 €", note: "Kombiangebot" },
          { label: "Renovierung vor Übergabe", price: "ab 599 €", note: "komplett besenrein" },
          { label: "Gesamtwohnung renovieren", price: "auf Anfrage", note: "individuelle Kalkulation" },
        ],
        reviews: [
          { text: "Wohnung komplett renoviert vor der Übergabe — wände gestrichen, Böden gereinigt, Kaution war kein Problem. Sehr empfehlenswert!", name: "Kathrin B." },
          { text: "Zimmer gestrichen nach Schimmelbeseitigung — professionell und gründlich. Sehr sauber gearbeitet, faire Preise.", name: "Dieter F." },
          { text: "Renovierungsservice nach Auszug — alles in perfektem Zustand übergeben. Das Team war schnell und zuverlässig.", name: "Renate K." },
        ],
        relatedLinks: [
          { label: "Tapeten entfernen", href: "/tapeten-entfernen" },
          { label: "Grundreinigung", href: "/grundreinigung" },
          { label: "Gebäudereinigung", href: "/gebaeudereinigung" },
          { label: "Haushaltsauflösung", href: "/haushaltsaufloesung" },
          { label: "Alle Leistungen", href: "/leistungen" },
        ],
      }}
    />
  );
}
