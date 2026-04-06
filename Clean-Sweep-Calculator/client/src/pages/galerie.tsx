import { useEffect, useState } from "react";
import { Link } from "wouter";
import { PageLayout, PageHero, CTASection } from "@/components/layout";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const projekte = [
  {
    id: 1,
    titel: "Kellerentrümpelung Bergheim",
    beschreibung: "Vollständige Kellerentrümpelung in einem Einfamilienhaus — von Boden bis Decke geräumt und besenrein übergeben.",
    vorher: "/images/galerie-keller-vorher.webp",
    nachher: "/images/galerie-keller-nachher.webp",
    dauer: "1 Tag",
    service: "Kellerentrümpelung",
    serviceHref: "/kellerentruempelung",
  },
  {
    id: 2,
    titel: "Dachbodenräumung Kerpen",
    beschreibung: "Jahrzehnte alter Hausrat auf dem Dachboden vollständig geräumt — Möbel, Kartons und Gerümpel professionell entsorgt.",
    vorher: "/images/galerie-dachboden-vorher.webp",
    nachher: "/images/galerie-dachboden-nachher.webp",
    dauer: "1 Tag",
    service: "Entrümpelung",
    serviceHref: "/entruempelung",
  },
  {
    id: 3,
    titel: "Wohnungsauflösung Frechen",
    beschreibung: "Komplette 3-Zimmer-Wohnung aufgelöst, besenrein übergeben — inklusive Wertanrechnung für Möbel und Hausrat.",
    vorher: "/images/galerie-wohnung-vorher.webp",
    nachher: "/images/galerie-wohnung-nachher.webp",
    dauer: "1 Tag",
    service: "Wohnungsauflösung",
    serviceHref: "/wohnungsaufloesung",
  },
];

function VorherNachherSlider({ vorher, nachher, titel }: { vorher: string; nachher: string; titel: string }) {
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);

  const handleMove = (clientX: number, rect: DOMRect) => {
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(95, Math.max(5, x)));
  };

  return (
    <div
      className="relative w-full aspect-[4/3] rounded-xl overflow-hidden cursor-col-resize select-none group"
      onMouseDown={(e) => {
        setDragging(true);
        const rect = e.currentTarget.getBoundingClientRect();
        handleMove(e.clientX, rect);
      }}
      onMouseMove={(e) => {
        if (!dragging) return;
        const rect = e.currentTarget.getBoundingClientRect();
        handleMove(e.clientX, rect);
      }}
      onMouseUp={() => setDragging(false)}
      onMouseLeave={() => setDragging(false)}
      onTouchStart={(e) => {
        setDragging(true);
        const rect = e.currentTarget.getBoundingClientRect();
        handleMove(e.touches[0].clientX, rect);
      }}
      onTouchMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        handleMove(e.touches[0].clientX, rect);
      }}
      onTouchEnd={() => setDragging(false)}
      data-testid={`slider-${titel.replace(/\s/g, "-").toLowerCase()}`}
      aria-label={`Vorher-Nachher Vergleich: ${titel}`}
    >
      <img src={nachher} alt={`${titel} — nachher`} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${position}%` }}>
        <img src={vorher} alt={`${titel} — vorher`} className="absolute inset-0 h-full object-cover" style={{ width: `${(100 / position) * 100}%`, maxWidth: "none" }} />
      </div>
      <div className="absolute inset-y-0 flex items-center" style={{ left: `${position}%`, transform: "translateX(-50%)" }}>
        <div className="w-0.5 h-full bg-white/80 shadow" />
        <div className="absolute w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center border-2 border-primary/30">
          <ChevronLeft className="w-3 h-3 text-primary absolute left-1" />
          <ChevronRight className="w-3 h-3 text-primary absolute right-1" />
        </div>
      </div>
      <div className="absolute top-3 left-3 bg-black/60 text-white text-xs font-medium px-2.5 py-1 rounded-full pointer-events-none">Vorher</div>
      <div className="absolute top-3 right-3 bg-primary/90 text-white text-xs font-medium px-2.5 py-1 rounded-full pointer-events-none">Nachher</div>
    </div>
  );
}

export default function GaleriePage() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    document.title = "Vorher-Nachher Galerie | Entrümpelung & Haushaltsauflösung | Stressfrei";
    let _canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!_canonical) { _canonical = document.createElement("link"); _canonical.setAttribute("rel", "canonical"); document.head.appendChild(_canonical); }
    _canonical.setAttribute("href", "https://stressfreientruempelungen.de/galerie");
    const _setOgMeta = (prop: string, val: string) => { let m = document.querySelector(`meta[property="${prop}"]`) as HTMLMetaElement | null; if (!m) { m = document.createElement("meta"); m.setAttribute("property", prop); document.head.appendChild(m); } m.setAttribute("content", val); };
    _setOgMeta("og:url", "https://stressfreientruempelungen.de/galerie");
    _setOgMeta("og:image", "https://stressfreientruempelungen.de/images/galerie-keller-nachher.webp");
    _setOgMeta("og:locale", "de_DE");
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Vorher-Nachher Bilder unserer abgeschlossenen Entrümpelungen & Haushaltsauflösungen im Rhein-Erft-Kreis. Keller, Dachboden, Wohnungen — besenrein übergeben.");
  }, []);

  useEffect(() => {
    if (lightbox) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            "name": "Vorher-Nachher Galerie — Stressfrei Entrümpelungen & Umzüge",
            "description": "Vorher-Nachher Bilder abgeschlossener Entrümpelungen und Haushaltsauflösungen im Rhein-Erft-Kreis",
            "url": "https://stressfreientruempelungen.de/galerie",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Stressfrei Entrümpelungen & Umzüge",
              "url": "https://stressfreientruempelungen.de",
            },
          }),
        }}
      />
      <PageLayout>
        <PageHero
          title="Vorher-Nachher Galerie"
          subtitle="Sehen Sie selbst, was unser Team leistet — echte Ergebnisse aus dem Rhein-Erft-Kreis."
          highlight="Galerie"
        />

        <section className="py-4 sm:py-6">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-primary transition-colors" style={{ textDecoration: "none" }}>Startseite</Link>
              <span>/</span>
              <span className="text-foreground font-medium">Galerie</span>
            </nav>
          </div>
        </section>

        <section className="py-6 sm:py-10">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <motion.p {...fadeIn} className="text-muted-foreground leading-relaxed">
              Entrümpelung ist keine Kunst — aber echte Professionalität sieht man am Ergebnis. Schieben Sie den Regler, um Vorher und Nachher zu vergleichen. Alle Projekte wurden von unserem Team im{" "}
              <Link href="/entruempelung-bergheim" className="text-primary hover:underline font-medium">Rhein-Erft-Kreis</Link> durchgeführt.
            </motion.p>
          </div>
        </section>

        {projekte.map((projekt, i) => (
          <section key={projekt.id} className={`py-10 sm:py-14 ${i % 2 === 1 ? "bg-card/50" : ""}`}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <motion.div {...fadeIn} className={i % 2 === 1 ? "md:order-2" : ""}>
                  <VorherNachherSlider vorher={projekt.vorher} nachher={projekt.nachher} titel={projekt.titel} />
                  <p className="text-xs text-muted-foreground text-center mt-2">← Schieben zum Vergleichen →</p>
                </motion.div>
                <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.1 }} className={i % 2 === 1 ? "md:order-1" : ""}>
                  <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    Projekt {projekt.id} / {projekte.length}
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3" data-testid={`text-projekt-titel-${i}`}>
                    {projekt.titel}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-5">{projekt.beschreibung}</p>
                  <div className="grid grid-cols-2 gap-3 mb-5">
                    <div className="bg-card rounded-lg p-3 text-center border border-border/60">
                      <p className="text-xs text-muted-foreground mb-0.5">Dauer</p>
                      <p className="font-semibold text-foreground text-sm">{projekt.dauer}</p>
                    </div>
                    <div className="bg-card rounded-lg p-3 text-center border border-border/60">
                      <p className="text-xs text-muted-foreground mb-0.5">Leistung</p>
                      <p className="font-semibold text-foreground text-sm">{projekt.service}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href={projekt.serviceHref}
                      className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-sm font-medium px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
                      style={{ textDecoration: "none" }}
                      data-testid={`link-service-${i}`}
                    >
                      {projekt.service} anfragen
                    </Link>
                    <Link
                      href="/terminplaner"
                      className="inline-flex items-center gap-2 border border-primary text-primary text-sm font-medium px-4 py-2 rounded-lg hover:bg-primary/5 transition-colors"
                      style={{ textDecoration: "none" }}
                      data-testid={`link-termin-${i}`}
                    >
                      Termin vereinbaren
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        ))}

        <section className="py-10 sm:py-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <motion.div {...fadeIn}>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Mehr Projekte auf Anfrage</h2>
              <p className="text-muted-foreground leading-relaxed mb-6 max-w-xl mx-auto">
                Diese Galerie zeigt nur einen kleinen Ausschnitt unserer Arbeit. Gerne senden wir Ihnen auf Anfrage weitere Referenzfotos aus Ihrer Region im{" "}
                <Link href="/entruempelung" className="text-primary hover:underline">Rhein-Erft-Kreis</Link>.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-medium px-5 py-2.5 rounded-lg hover:bg-primary/90 transition-colors"
                  style={{ textDecoration: "none" }}
                  data-testid="link-kontakt-galerie"
                >
                  Kostenloses Angebot anfordern
                </Link>
                <Link
                  href="/terminplaner"
                  className="inline-flex items-center gap-2 border border-primary text-primary font-medium px-5 py-2.5 rounded-lg hover:bg-primary/5 transition-colors"
                  style={{ textDecoration: "none" }}
                  data-testid="link-termin-galerie"
                >
                  Termin online buchen
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <CTASection
          title="Ihr nächstes Projekt — besenrein und stressfrei"
          subtitle="Lassen Sie sich kostenlos beraten. Wir kommen zur Besichtigung zu Ihnen und erstellen ein Festpreisangebot."
        />
      </PageLayout>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              onClick={() => setLightbox(null)}
              aria-label="Schließen"
              data-testid="btn-lightbox-close"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={lightbox.src}
              alt={lightbox.alt}
              className="max-w-full max-h-[90vh] rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
