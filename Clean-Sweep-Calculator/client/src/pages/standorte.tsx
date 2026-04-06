import { Card } from "@/components/ui/card";
import { PageLayout, PageHero, CTASection, InternalLinksSection } from "@/components/layout";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  Star,
  Trash2,
  Truck,
  ArrowRight,
  ExternalLink,
  Building2,
  CheckCircle2,
} from "lucide-react";
import { SiGoogle } from "react-icons/si";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const GOOGLE_BUSINESS_URL = "https://g.co/kgs/yNcmMs9";

const rheinErftStaedte = [
  { name: "Bergheim", isHQ: true, plz: "50126–50129", entruempelung: "/entruempelung-bergheim", umzug: "/umzugsunternehmen-bergheim" },
  { name: "Kerpen", isHQ: false, plz: "50169–50171", entruempelung: "/entruempelung-kerpen", umzug: "/umzugsunternehmen-kerpen" },
  { name: "Frechen", isHQ: false, plz: "50226", entruempelung: "/entruempelung-frechen", umzug: "/umzugsunternehmen-frechen" },
  { name: "Hürth", isHQ: false, plz: "50354", entruempelung: "/entruempelung-huerth", umzug: "/umzugsunternehmen-huerth" },
  { name: "Pulheim", isHQ: false, plz: "50259", entruempelung: "/entruempelung-pulheim", umzug: "/umzugsunternehmen-pulheim" },
  { name: "Erftstadt", isHQ: false, plz: "50374", entruempelung: "/entruempelung-erftstadt", umzug: "/umzugsunternehmen-erftstadt" },
  { name: "Bedburg", isHQ: false, plz: "50181", entruempelung: "/entruempelung-bedburg", umzug: "/umzugsunternehmen-bedburg" },
  { name: "Elsdorf", isHQ: false, plz: "50189", entruempelung: "/entruempelung-elsdorf", umzug: "/umzugsunternehmen-elsdorf" },
  { name: "Brühl", isHQ: false, plz: "50321", entruempelung: "/entruempelung-bruehl", umzug: null },
  { name: "Wesseling", isHQ: false, plz: "50389", entruempelung: "/entruempelung-wesseling", umzug: null },
];

const weitereRegionen = [
  { name: "Köln", region: "Großraum Köln", highlight: true, umzugHref: "/umzugsunternehmen-koeln" },
  { name: "Düsseldorf", region: "Großraum Düsseldorf", highlight: true, umzugHref: "/umzugsunternehmen-duesseldorf" },
  { name: "Bonn", region: "Großraum Bonn", highlight: true, umzugHref: null },
  { name: "Aachen", region: "Region Aachen", highlight: true, umzugHref: "/umzugsunternehmen-aachen" },
  { name: "Düren", region: "Kreis Düren", highlight: true },
  { name: "Leverkusen", region: "Region Leverkusen", highlight: false },
  { name: "Mönchengladbach", region: "Region Mönchengladbach", highlight: false },
  { name: "Euskirchen", region: "Kreis Euskirchen", highlight: false },
  { name: "Rhein-Kreis Neuss", region: "Grevenbroich, Rommerskirchen", highlight: false },
  { name: "Heinsberg", region: "Kreis Heinsberg", highlight: false },
];

const entruempelungLocations = [
  { name: "Rhein-Erft-Kreis", label: "Rhein-Erft-Kreis (Hauptsitz)", address: "Hauptstraße 26, 50126 Bergheim", isHQ: true, href: "/entruempelung-rhein-erft-kreis" },
  { name: "Bergheim", label: "Bergheim", address: "Rhein-Erft-Kreis", isHQ: false, href: "/entruempelung-bergheim" },
  { name: "Bedburg", label: "Bedburg", address: "Rhein-Erft-Kreis", isHQ: false, href: "/entruempelung-bedburg" },
  { name: "Kerpen", label: "Kerpen", address: "Rhein-Erft-Kreis", isHQ: false, href: "/entruempelung-kerpen" },
  { name: "Elsdorf", label: "Elsdorf", address: "Rhein-Erft-Kreis", isHQ: false, href: "/entruempelung-elsdorf" },
  { name: "Pulheim", label: "Pulheim", address: "Rhein-Erft-Kreis", isHQ: false, href: "/entruempelung-pulheim" },
  { name: "Frechen", label: "Frechen", address: "Rhein-Erft-Kreis", isHQ: false, href: "/entruempelung-frechen" },
  { name: "Hürth", label: "Hürth", address: "Rhein-Erft-Kreis", isHQ: false, href: "/entruempelung-huerth" },
  { name: "Erftstadt", label: "Erftstadt", address: "Rhein-Erft-Kreis", isHQ: false, href: "/entruempelung-erftstadt" },
  { name: "Rommerskirchen", label: "Rommerskirchen", address: "Rhein-Kreis Neuss", isHQ: false, href: "/entruempelung-rommerskirchen" },
  { name: "Grevenbroich", label: "Grevenbroich", address: "Rhein-Kreis Neuss", isHQ: false, href: "/entruempelung-grevenbroich" },
  { name: "Brühl", label: "Brühl", address: "Rhein-Erft-Kreis", isHQ: false, href: "/entruempelung-bruehl" },
  { name: "Wesseling", label: "Wesseling", address: "Rhein-Erft-Kreis", isHQ: false, href: "/entruempelung-wesseling" },
];

const umzugLocations = [
  { name: "Rhein-Erft-Kreis", label: "Rhein-Erft-Kreis (Hauptsitz)", address: "Hauptstraße 26, 50126 Bergheim", isHQ: true, href: "/umzugsunternehmen-rhein-erft-kreis" },
  { name: "Bergheim", label: "Bergheim", address: "Rhein-Erft-Kreis", isHQ: false, href: "/umzugsunternehmen-bergheim" },
  { name: "Bedburg", label: "Bedburg", address: "Rhein-Erft-Kreis", isHQ: false, href: "/umzugsunternehmen-bedburg" },
  { name: "Kerpen", label: "Kerpen", address: "Rhein-Erft-Kreis", isHQ: false, href: "/umzugsunternehmen-kerpen" },
  { name: "Elsdorf", label: "Elsdorf", address: "Rhein-Erft-Kreis", isHQ: false, href: "/umzugsunternehmen-elsdorf" },
  { name: "Pulheim", label: "Pulheim", address: "Rhein-Erft-Kreis", isHQ: false, href: "/umzugsunternehmen-pulheim" },
  { name: "Frechen", label: "Frechen", address: "Rhein-Erft-Kreis", isHQ: false, href: "/umzugsunternehmen-frechen" },
  { name: "Hürth", label: "Hürth", address: "Rhein-Erft-Kreis", isHQ: false, href: "/umzugsunternehmen-huerth" },
  { name: "Erftstadt", label: "Erftstadt", address: "Rhein-Erft-Kreis", isHQ: false, href: "/umzugsunternehmen-erftstadt" },
  { name: "Köln", label: "Köln", address: "Großraum Köln", isHQ: false, href: "/umzugsunternehmen-koeln" },
  { name: "Düsseldorf", label: "Düsseldorf", address: "Großraum Düsseldorf", isHQ: false, href: "/umzugsunternehmen-duesseldorf" },
  { name: "Aachen", label: "Aachen", address: "Region Aachen", isHQ: false, href: "/umzugsunternehmen-aachen" },
];

type LocationItem = { name: string; label: string; address: string; isHQ: boolean; href: string };

function LocationCard({ location, index, icon }: { location: LocationItem; index: number; icon: "entruempelung" | "umzug" }) {
  return (
    <Link href={location.href} style={{ textDecoration: "none" }} data-testid={`link-${icon}-${index}`}>
      <Card className="p-4 h-full hover-elevate cursor-pointer" data-testid={`card-${icon}-${index}`}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
            {icon === "entruempelung" ? (
              <Trash2 className="w-5 h-5 text-primary" />
            ) : (
              <Truck className="w-5 h-5 text-primary" />
            )}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-foreground text-sm truncate" data-testid={`text-${icon}-name-${index}`}>
                {icon === "entruempelung" ? `Entrümpelung ${location.label}` : `Umzugsunternehmen ${location.label}`}
              </h3>
              {location.isHQ && (
                <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-medium shrink-0">
                  <Star className="w-2.5 h-2.5 fill-current" />
                  HQ
                </span>
              )}
            </div>
            <p className="text-xs text-muted-foreground">{location.address}</p>
          </div>
          <ArrowRight className="w-4 h-4 text-muted-foreground shrink-0" />
        </div>
      </Card>
    </Link>
  );
}

export default function StandortePage() {
  useEffect(() => {
    document.title = "Standorte & Einzugsgebiete | Stressfrei Entrümpelungen & Umzüge";
    let _canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!_canonical) { _canonical = document.createElement("link"); _canonical.setAttribute("rel", "canonical"); document.head.appendChild(_canonical); }
    _canonical.setAttribute("href", "https://stressfreientruempelungen.de/standorte");
    const _setOgMeta = (prop: string, val: string) => { let m = document.querySelector(`meta[property="${prop}"]`) as HTMLMetaElement | null; if (!m) { m = document.createElement("meta"); m.setAttribute("property", prop); document.head.appendChild(m); } m.setAttribute("content", val); };
    _setOgMeta("og:url", "https://stressfreientruempelungen.de/standorte");
    _setOgMeta("og:image", "https://stressfreientruempelungen.de/images/professionelle-entruempelung-service-rhein-erft-kreis.webp");
    _setOgMeta("og:locale", "de_DE");
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Unsere Standorte im Rhein-Erft-Kreis: Bergheim, Kerpen, Frechen, Hürth, Pulheim, Erftstadt, Bedburg, Elsdorf und mehr. Entrümpelung & Umzug in Ihrer Nähe.");
    }
  }, []);

  const [activeTab, setActiveTab] = useState<"entruempelung" | "umzug">("entruempelung");

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Einsatzgebiete – Stressfrei Entrümpelungen & Umzüge",
        "description": "Alle Städte und Regionen, in denen Stressfrei Entrümpelungen & Umzüge tätig ist.",
        "url": "https://stressfreientruempelungen.de/standorte",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Bergheim", "url": "https://stressfreientruempelungen.de/entruempelung-bergheim" },
          { "@type": "ListItem", "position": 2, "name": "Kerpen", "url": "https://stressfreientruempelungen.de/entruempelung-kerpen" },
          { "@type": "ListItem", "position": 3, "name": "Bedburg", "url": "https://stressfreientruempelungen.de/entruempelung-bedburg" },
          { "@type": "ListItem", "position": 4, "name": "Pulheim", "url": "https://stressfreientruempelungen.de/entruempelung-pulheim" },
          { "@type": "ListItem", "position": 5, "name": "Frechen", "url": "https://stressfreientruempelungen.de/entruempelung-frechen" },
          { "@type": "ListItem", "position": 6, "name": "Hürth", "url": "https://stressfreientruempelungen.de/entruempelung-huerth" },
          { "@type": "ListItem", "position": 7, "name": "Erftstadt", "url": "https://stressfreientruempelungen.de/entruempelung-erftstadt" },
          { "@type": "ListItem", "position": 8, "name": "Elsdorf", "url": "https://stressfreientruempelungen.de/entruempelung-elsdorf" },
          { "@type": "ListItem", "position": 9, "name": "Grevenbroich", "url": "https://stressfreientruempelungen.de/entruempelung-grevenbroich" },
          { "@type": "ListItem", "position": 10, "name": "Rommerskirchen", "url": "https://stressfreientruempelungen.de/entruempelung-rommerskirchen" },
          { "@type": "ListItem", "position": 11, "name": "Brühl", "url": "https://stressfreientruempelungen.de/entruempelung-bruehl" },
          { "@type": "ListItem", "position": 12, "name": "Wesseling", "url": "https://stressfreientruempelungen.de/entruempelung-wesseling" },
          { "@type": "ListItem", "position": 13, "name": "Köln", "url": "https://stressfreientruempelungen.de/umzugsunternehmen-koeln" },
          { "@type": "ListItem", "position": 14, "name": "Düsseldorf", "url": "https://stressfreientruempelungen.de/umzugsunternehmen-duesseldorf" },
          { "@type": "ListItem", "position": 15, "name": "Aachen", "url": "https://stressfreientruempelungen.de/umzugsunternehmen-aachen" }
        ]
      }) }} />
    <PageLayout>
      <PageHero
        title="Unsere Standorte & Einzugsgebiete"
        subtitle="Ihr Partner für Entrümpelungen & Umzüge im Rhein-Erft-Kreis und ganz NRW. Von unserem Hauptsitz in Bergheim betreuen wir Köln, Düsseldorf, Aachen, Bonn, Düren und die gesamte Region."
        highlight="Standorte"
      />

      <section className="py-10 sm:py-14 bg-primary/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeIn}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-5">
              <div className="flex items-center gap-3">
                <SiGoogle className="w-6 h-6 text-[#4285F4]" />
                <h2 className="text-xl font-bold text-foreground" data-testid="text-google-business-title">
                  Unser Google Business Profil
                </h2>
              </div>
              <div className="flex items-center gap-2 sm:ml-auto">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-accent fill-current" />
                  ))}
                </div>
                <span className="text-sm font-semibold text-foreground">5.0</span>
                <span className="text-sm text-muted-foreground">— 90+ Bewertungen</span>
              </div>
            </div>
            <Card className="overflow-hidden" data-testid="card-google-business">
              <div className="w-full h-[400px] sm:h-[450px]">
                <iframe
                  src="https://maps.google.com/maps?q=Stressfrei+Entr%C3%BCmpelungen+%26+Umz%C3%BCge+Hauptstra%C3%9Fe+26+50126+Bergheim&t=&z=11&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Stressfrei Entrümpelungen & Umzüge - Google Maps"
                  data-testid="iframe-google-map"
                />
              </div>
              <div className="p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center gap-3 bg-background">
                <div className="flex-1">
                  <p className="font-semibold text-foreground text-sm">Stressfrei Entrümpelungen & Umzüge</p>
                  <p className="text-xs text-muted-foreground">Hauptstraße 26, 50126 Bergheim</p>
                </div>
                <a
                  href={GOOGLE_BUSINESS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                  data-testid="link-google-business"
                >
                  <Button size="sm" variant="outline" className="gap-2">
                    <ExternalLink className="w-3.5 h-3.5" />
                    Auf Google Maps ansehen
                  </Button>
                </a>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeIn}>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4" data-testid="text-seo-heading">
              Entrümpelung & Umzüge im Rhein-Erft-Kreis und Umgebung
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-10">
              <p>
                <strong className="text-foreground">Stressfrei Entrümpelungen & Umzüge</strong> ist Ihr zuverlässiger Dienstleister
                für professionelle Entrümpelungen, Haushaltsauflösungen und Umzüge. Unser Hauptsitz befindet sich in
                <strong className="text-foreground"> Bergheim im Rhein-Erft-Kreis</strong>, von wo aus wir alle Städte des Kreises
                schnell und unkompliziert erreichen.
              </p>
              <p>
                Unser <strong className="text-foreground">Kerngebiet ist der Rhein-Erft-Kreis</strong> mit den Städten Bergheim,
                Kerpen, Frechen, Hürth, Pulheim, Erftstadt, Bedburg, Elsdorf, Brühl und Wesseling. Hier sind wir täglich
                im Einsatz und kennen die Region wie unsere Westentasche. Kurze Anfahrtswege bedeuten für Sie:
                günstigere Preise und schnellere Verfügbarkeit.
              </p>
              <p>
                Darüber hinaus sind wir auch in <strong className="text-foreground">Köln, Aachen, Düren, Düsseldorf und Bonn</strong> sowie
                in weiteren Städten in NRW aktiv. Egal ob Wohnungsauflösung, Entrümpelung, Privatumzug oder Büroumzug —
                wir kommen zu Ihnen und kümmern uns um alles.
              </p>
            </div>
          </motion.div>

          <motion.div {...fadeIn}>
            <h3 className="text-xl font-bold text-foreground mb-5" data-testid="text-rhein-erft-heading">
              Unsere Standorte im Rhein-Erft-Kreis
            </h3>
            <div className="grid sm:grid-cols-2 gap-3 mb-10">
              {rheinErftStaedte.map((stadt) => (
                <Card key={stadt.name} className="p-4" data-testid={`card-rek-${stadt.name.toLowerCase()}`}>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                      <Building2 className="w-4.5 h-4.5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-sm text-foreground">{stadt.name}</span>
                        {stadt.isHQ && (
                          <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-medium">
                            <Star className="w-2.5 h-2.5 fill-current" />
                            Hauptsitz
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground">PLZ {stadt.plz}</p>
                    </div>
                    <div className="flex gap-1.5 shrink-0">
                      {stadt.entruempelung && (
                        <Link href={stadt.entruempelung} style={{ textDecoration: "none" }} data-testid={`link-rek-entruempelung-${stadt.name.toLowerCase()}`}>
                          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-muted text-[11px] text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors">
                            <Trash2 className="w-3 h-3" />
                            Entrümpelung
                          </span>
                        </Link>
                      )}
                      {stadt.umzug && (
                        <Link href={stadt.umzug} style={{ textDecoration: "none" }} data-testid={`link-rek-umzug-${stadt.name.toLowerCase()}`}>
                          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-muted text-[11px] text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors">
                            <Truck className="w-3 h-3" />
                            Umzug
                          </span>
                        </Link>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeIn}>
            <h3 className="text-xl font-bold text-foreground mb-2" data-testid="text-weitere-heading">
              Weitere Einsatzgebiete in NRW
            </h3>
            <p className="text-muted-foreground text-sm mb-5">
              Neben dem Rhein-Erft-Kreis bedienen wir auch diese Städte und Regionen in Nordrhein-Westfalen.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {weitereRegionen.map((region, i) => {
                const card = (
                  <Card className={`p-4 h-full ${region.highlight ? "border-primary/20 bg-primary/[0.02]" : ""} ${"umzugHref" in region && region.umzugHref ? "hover:border-primary/40 cursor-pointer transition-colors" : ""}`} data-testid={`card-region-${i}`}>
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-md flex items-center justify-center shrink-0 ${region.highlight ? "bg-primary/10" : "bg-muted"}`}>
                        <MapPin className={`w-4.5 h-4.5 ${region.highlight ? "text-primary" : "text-muted-foreground"}`} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-foreground">{region.name}</h4>
                        <p className="text-xs text-muted-foreground">{region.region}</p>
                      </div>
                      {region.highlight && (
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 ml-auto" />
                      )}
                    </div>
                  </Card>
                );
                return (
                  <motion.div key={region.name} {...fadeIn} transition={{ duration: 0.4, delay: i * 0.03 }}>
                    {"umzugHref" in region && region.umzugHref ? (
                      <Link href={region.umzugHref as string} style={{ textDecoration: "none" }} data-testid={`link-region-${i}`}>{card}</Link>
                    ) : card}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-muted/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeIn}>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 text-center" data-testid="text-warum-heading">
              Warum Stressfrei Entrümpelungen?
            </h2>
            <div className="grid sm:grid-cols-3 gap-5 mt-8">
              <Card className="p-5 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Regionale Nähe</h3>
                <p className="text-sm text-muted-foreground">
                  Hauptsitz in Bergheim — kurze Anfahrt im gesamten Rhein-Erft-Kreis, Köln und Umgebung.
                </p>
              </Card>
              <Card className="p-5 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Star className="w-6 h-6 text-accent fill-current" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">5.0 Sterne bei Google</h3>
                <p className="text-sm text-muted-foreground">
                  Über 80 verifizierte Bewertungen mit Bestnote. Überzeugen Sie sich selbst auf unserem{" "}
                  <a href={GOOGLE_BUSINESS_URL} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline" data-testid="link-google-inline">
                    Google Profil
                  </a>.
                </p>
              </Card>
              <Card className="p-5 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Faire Festpreise</h3>
                <p className="text-sm text-muted-foreground">
                  Transparente Preise ohne versteckte Kosten. Kostenlose Besichtigung und unverbindliches Angebot.
                </p>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div className="text-center mb-10" {...fadeIn}>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3" data-testid="text-locations-title">
              Alle Standort-Seiten im Überblick
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-8">
              Wählen Sie Ihren Service und Standort, um mehr über unsere Dienstleistungen vor Ort zu erfahren.
            </p>

            <div className="inline-flex items-center gap-1 p-1 rounded-lg bg-muted" data-testid="tab-switcher">
              <button
                onClick={() => setActiveTab("entruempelung")}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  activeTab === "entruempelung"
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                data-testid="tab-entruempelung"
              >
                <Trash2 className="w-4 h-4" />
                Entrümpelung
              </button>
              <button
                onClick={() => setActiveTab("umzug")}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  activeTab === "umzug"
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                data-testid="tab-umzug"
              >
                <Truck className="w-4 h-4" />
                Umzüge
              </button>
            </div>
          </motion.div>

          {activeTab === "entruempelung" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {entruempelungLocations.map((location, i) => (
                  <motion.div key={location.name} {...fadeIn} transition={{ duration: 0.4, delay: i * 0.04 }}>
                    <LocationCard location={location} index={i} icon="entruempelung" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === "umzug" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {umzugLocations.map((location, i) => (
                  <motion.div key={location.name} {...fadeIn} transition={{ duration: 0.4, delay: i * 0.04 }}>
                    <LocationCard location={location} index={i} icon="umzug" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-card/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div className="text-center mb-10" {...fadeIn}>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3" data-testid="text-contact-title">
              Kontakt & Öffnungszeiten
            </h2>
          </motion.div>
          <motion.div {...fadeIn}>
            <Card className="p-6 sm:p-8 max-w-2xl mx-auto" data-testid="card-contact-info">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-foreground">Hauptsitz Bergheim</h3>
                  <div className="space-y-2.5 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2.5">
                      <MapPin className="w-4 h-4 text-primary shrink-0" />
                      <span>Hauptstraße 26, 50126 Bergheim</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Phone className="w-4 h-4 text-primary shrink-0" />
                      <a href="tel:+4922715880940" className="hover:text-primary transition-colors" data-testid="link-contact-phone">
                        02271 / 5880940
                      </a>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Mail className="w-4 h-4 text-primary shrink-0" />
                      <a href="mailto:info@stressfreientruempelungen.de" className="hover:text-primary transition-colors" data-testid="link-contact-email">
                        info@stressfreientruempelungen.de
                      </a>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold text-foreground">Öffnungszeiten</h3>
                  <div className="space-y-2.5 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2.5">
                      <Clock className="w-4 h-4 text-primary shrink-0" />
                      <span>Mo–Sa 08:00–19:00 Uhr</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Star className="w-4 h-4 text-accent fill-current shrink-0" />
                      <span>5.0 Sterne — 90+ Google Bewertungen</span>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-3">
                    <a href="tel:+4922715880940" style={{ textDecoration: "none" }}>
                      <Button size="sm" data-testid="btn-call-contact">
                        <Phone className="w-4 h-4 mr-2" />
                        Anrufen
                      </Button>
                    </a>
                    <a href={GOOGLE_BUSINESS_URL} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                      <Button size="sm" variant="outline" data-testid="btn-google-contact">
                        <SiGoogle className="w-3.5 h-3.5 mr-2" />
                        Google Profil
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div className="text-center mb-10" {...fadeIn}>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3" data-testid="text-stadtteile-title">
              Alle Stadtteile im Überblick
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Wir sind in allen Stadtteilen des Rhein-Erft-Kreises tätig. Klicken Sie auf Ihren Stadtteil für detaillierte Informationen.
            </p>
          </motion.div>
          {[
            { city: "Bergheim", stadtteile: [{ name: "Quadrath-Ichendorf", slug: "quadrath-ichendorf" }, { name: "Niederaussem", slug: "niederaussem" }, { name: "Glesch", slug: "glesch" }, { name: "Paffendorf", slug: "paffendorf" }, { name: "Glessen", slug: "glessen" }, { name: "Oberaussem", slug: "oberaussem" }, { name: "Zieverich", slug: "zieverich" }, { name: "Thorr", slug: "thorr" }] },
            { city: "Kerpen", stadtteile: [{ name: "Sindorf", slug: "sindorf" }, { name: "Horrem", slug: "horrem" }, { name: "Buir", slug: "buir" }, { name: "Manheim", slug: "manheim" }, { name: "Türnich", slug: "tuernich" }, { name: "Blatzheim", slug: "blatzheim" }] },
            { city: "Pulheim", stadtteile: [{ name: "Brauweiler", slug: "brauweiler" }, { name: "Stommeln", slug: "stommeln" }, { name: "Sinnersdorf", slug: "sinnersdorf" }, { name: "Geyen", slug: "geyen" }] },
            { city: "Frechen", stadtteile: [{ name: "Königsdorf", slug: "koenigsdorf" }, { name: "Bachem", slug: "bachem" }, { name: "Habbelrath", slug: "habbelrath" }] },
            { city: "Hürth", stadtteile: [{ name: "Hermülheim", slug: "hermuelheim" }, { name: "Efferen", slug: "efferen" }, { name: "Gleuel", slug: "gleuel" }, { name: "Berrenrath", slug: "berrenrath" }] },
            { city: "Erftstadt", stadtteile: [{ name: "Liblar", slug: "liblar" }, { name: "Lechenich", slug: "lechenich" }, { name: "Gymnich", slug: "gymnich" }, { name: "Bliesheim", slug: "bliesheim" }, { name: "Friesheim", slug: "friesheim" }] },
            { city: "Elsdorf", stadtteile: [{ name: "Heppendorf", slug: "heppendorf" }, { name: "Berrendorf", slug: "berrendorf" }, { name: "Niederembt", slug: "niederembt" }, { name: "Oberembt", slug: "oberembt" }] },
            { city: "Grevenbroich", stadtteile: [{ name: "Kapellen", slug: "kapellen-grevenbroich" }, { name: "Gustorf", slug: "gustorf" }, { name: "Elsen", slug: "elsen" }] },
            { city: "Rommerskirchen", stadtteile: [{ name: "Evinghoven", slug: "evinghoven" }, { name: "Gilbach", slug: "gilbach" }, { name: "Oekoven", slug: "oekoven" }] },
            { city: "Bedburg", stadtteile: [{ name: "Kaster", slug: "kaster" }, { name: "Kirchherten", slug: "kirchherten" }, { name: "Lipp", slug: "lipp" }] },
            { city: "Brühl", stadtteile: [{ name: "Vochem", slug: "vochem" }, { name: "Kierberg", slug: "kierberg" }, { name: "Pingsdorf", slug: "pingsdorf" }] },
            { city: "Wesseling", stadtteile: [{ name: "Urfeld", slug: "urfeld" }, { name: "Keldenich", slug: "keldenich" }, { name: "Berzdorf", slug: "berzdorf" }] },
          ].map((group, gi) => (
            <motion.div key={gi} {...fadeIn} transition={{ delay: gi * 0.04 }} className="mb-6">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3 px-1">{group.city}</h3>
              <div className="flex flex-wrap gap-2">
                {group.stadtteile.map((st) => (
                  <a
                    key={st.slug}
                    href={`/entruempelung-${st.slug}`}
                    className="inline-flex items-center gap-1 bg-background border border-border hover:border-primary hover:text-primary text-sm px-3 py-1.5 rounded-full transition-colors"
                    data-testid={`link-stadtteil-${st.slug}`}
                  >
                    <MapPin className="w-3 h-3" />
                    {st.name}
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <CTASection />
    </PageLayout>
    </>
  );
}
