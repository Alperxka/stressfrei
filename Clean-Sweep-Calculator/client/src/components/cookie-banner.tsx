import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Cookie, Shield, BarChart3, ChevronDown, ChevronUp } from "lucide-react";

type ConsentState = {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
};

const CONSENT_KEY = "cookie_consent";

function getStoredConsent(): ConsentState | null {
  try {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (stored) return JSON.parse(stored);
  } catch {}
  return null;
}

function saveConsent(consent: ConsentState) {
  localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
  applyConsent(consent);
}

function applyConsent(consent: ConsentState) {
  if (typeof window.gtag === "function") {
    window.gtag("consent", "update", {
      analytics_storage: consent.analytics ? "granted" : "denied",
      ad_storage: consent.marketing ? "granted" : "denied",
      ad_user_data: consent.marketing ? "granted" : "denied",
      ad_personalization: consent.marketing ? "granted" : "denied",
    });
  }
  // Microsoft UET: nur laden wenn Marketing-Consent erteilt wurde
  if (consent.marketing && typeof (window as unknown as Record<string, unknown>)._loadUET === "function") {
    ((window as unknown as Record<string, unknown>)._loadUET as () => void)();
  }
}

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [consent, setConsent] = useState<ConsentState>({
    essential: true,
    analytics: true,
    marketing: true,
  });

  useEffect(() => {
    const stored = getStoredConsent();
    if (stored) {
      applyConsent(stored);
    } else {
      setVisible(true);
    }
  }, []);

  const acceptAll = () => {
    const all: ConsentState = { essential: true, analytics: true, marketing: true };
    saveConsent(all);
    setVisible(false);
  };

  const rejectAll = () => {
    const minimal: ConsentState = { essential: true, analytics: false, marketing: false };
    saveConsent(minimal);
    setVisible(false);
  };

  const saveSelection = () => {
    saveConsent(consent);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center">
      <div className="fixed inset-0 bg-black/40" />
      <div className="relative bg-background border border-border rounded-t-2xl sm:rounded-2xl shadow-2xl w-full sm:max-w-lg max-h-[90vh] overflow-y-auto mx-0 sm:mx-4 p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
            <Cookie className="w-5 h-5 text-primary" />
          </div>
          <h2 className="text-lg font-bold text-foreground">Cookie-Einstellungen</h2>
        </div>

        <p className="text-sm text-muted-foreground mb-4">
          Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten.
          Einige Cookies sind für den Betrieb der Seite notwendig, andere helfen uns, die Website zu verbessern
          und Ihnen relevante Inhalte anzuzeigen. Weitere Informationen finden Sie in unserer{" "}
          <Link href="/datenschutz" className="text-primary hover:underline">
            Datenschutzerklärung
          </Link>.
        </p>

        <button
          onClick={() => setShowDetails(!showDetails)}
          className="flex items-center gap-2 text-sm font-medium text-foreground mb-4 hover:text-primary transition-colors"
        >
          {showDetails ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          Einstellungen anpassen
        </button>

        {showDetails && (
          <div className="space-y-3 mb-5">
            <div className="p-3 rounded-lg bg-muted/50 border border-border/50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">Notwendige Cookies</span>
                </div>
                <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded">Immer aktiv</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1.5">
                Diese Cookies sind für den Betrieb der Website unbedingt erforderlich. Sie ermöglichen grundlegende
                Funktionen wie die Seitennavigation und den Zugriff auf sichere Bereiche der Website.
              </p>
            </div>

            <label className="block p-3 rounded-lg bg-muted/50 border border-border/50 cursor-pointer">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">Analyse & Statistik</span>
                </div>
                <input
                  type="checkbox"
                  checked={consent.analytics}
                  onChange={(e) => setConsent({ ...consent, analytics: e.target.checked })}
                  className="w-4 h-4 accent-primary"
                />
              </div>
              <p className="text-xs text-muted-foreground mt-1.5">
                Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren (Google Analytics
                mit Anonymisierungsfunktion, Google Tag Manager). Die IP-Adresse wird dabei gekürzt und anonymisiert.
              </p>
            </label>

            <label className="block p-3 rounded-lg bg-muted/50 border border-border/50 cursor-pointer">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Cookie className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">Marketing</span>
                </div>
                <input
                  type="checkbox"
                  checked={consent.marketing}
                  onChange={(e) => setConsent({ ...consent, marketing: e.target.checked })}
                  className="w-4 h-4 accent-primary"
                />
              </div>
              <p className="text-xs text-muted-foreground mt-1.5">
                Marketing-Cookies werden verwendet, um Besucher über Webseiten hinweg zu verfolgen (Google Ads,
                Facebook). Die Absicht ist, Anzeigen zu zeigen, die relevant und ansprechend für den Nutzer sind.
              </p>
            </label>

            <div className="flex gap-2 pt-1">
              <Button
                onClick={acceptAll}
                className="flex-1 bg-primary hover:bg-primary/90 text-white"
              >
                Alle akzeptieren
              </Button>
              <Button
                onClick={saveSelection}
                variant="outline"
                className="flex-1"
              >
                Auswahl speichern
              </Button>
            </div>
            <div className="text-center">
              <button
                onClick={rejectAll}
                className="text-xs text-muted-foreground hover:text-foreground underline underline-offset-2 transition-colors"
              >
                Nur notwendige Cookies
              </button>
            </div>
          </div>
        )}

        {!showDetails && (
          <div className="flex flex-col gap-2">
            <Button
              onClick={acceptAll}
              className="w-full bg-primary hover:bg-primary/90 text-white"
            >
              Alle akzeptieren
            </Button>
            <Button
              onClick={() => setShowDetails(true)}
              variant="outline"
              className="w-full"
            >
              Auswahl ändern
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
