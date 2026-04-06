import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { PhoneInput } from "@/components/phone-input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Calculator, Package, Building2, MapPin, ShieldAlert, Send, CheckCircle2 } from "lucide-react";
import { trackConversion } from "@/lib/gtag";

const KARTON_PREIS_NETTO = 5;
const GRUNDPREIS = 350;
const PREIS_PRO_ZIMMER = 250;
const PREIS_PRO_MOEBEL = 100;
const MwSt = 0.19;

const stockwerke = [
  { value: "0", label: "Erdgeschoss" },
  { value: "1", label: "1. OG" },
  { value: "2", label: "2. OG" },
  { value: "3", label: "3. OG" },
  { value: "4", label: "4. OG" },
  { value: "5", label: "5. OG+" },
];

const PREIS_PRO_KM = 6;

const HALTEVERBOTSZONE_PREIS = 150;

function UmzugCalcContactForm({ calcDetails }: { calcDetails?: string }) {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  if (sent) {
    return (
      <div className="text-center py-3 mt-4">
        <CheckCircle2 className="w-8 h-8 text-primary mx-auto mb-2" />
        <p className="text-sm font-medium text-foreground" data-testid="text-umzug-calc-form-success">Vielen Dank!</p>
        <p className="text-xs text-muted-foreground">Wir melden uns schnellstmöglich bei Ihnen.</p>
      </div>
    );
  }
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const fd = new FormData(e.currentTarget);
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formName: "umzugsrechner",
          name: fd.get("name"),
          phone: fd.get("phone"),
          email: fd.get("email"),
          message: fd.get("info"),
          calculationDetails: calcDetails,
        }),
      });
    } catch (err) {}
    setSent(true);
    trackConversion("umzugsrechner");
  };
  return (
    <div className="border-t border-border/50 pt-5 mt-4">
      <p className="text-sm font-medium text-foreground text-center mb-3">Kostenloses Umzugsangebot anfordern</p>
      <form className="space-y-2" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-2">
          <Input name="name" placeholder="Name *" required className="bg-background" data-testid="input-umzug-calc-name" />
          <PhoneInput name="phone" placeholder="Telefon" required className="bg-background" data-testid="input-umzug-calc-phone" />
        </div>
        <Input name="email" type="email" placeholder="E-Mail *" required className="bg-background" data-testid="input-umzug-calc-email" />
        <Textarea name="info" placeholder="Zusätzliche Informationen" className="resize-none bg-background" rows={3} data-testid="input-umzug-calc-info" />
        <Button type="submit" className="w-full" size="sm" disabled={sending} data-testid="button-umzug-calc-submit">
          <Send className="w-3 h-3 mr-2" />
          {sending ? "Wird gesendet..." : "Angebot anfordern"}
        </Button>
      </form>
    </div>
  );
}

export function UmzugsRechner() {
  const [kartons, setKartons] = useState<string>("");
  const [zimmer, setZimmer] = useState<string>("");
  const [moebelDemontage, setMoebelDemontage] = useState<string>("");
  const [stockwerk, setStockwerk] = useState("");
  const [hasElevator, setHasElevator] = useState("");
  const [zielStockwerk, setZielStockwerk] = useState("");
  const [zielHasElevator, setZielHasElevator] = useState("");
  const [kilometer, setKilometer] = useState<string>("");
  const [halteverbot, setHalteverbot] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const calculatePrice = () => {
    const sw = stockwerke.find((s) => s.value === stockwerk);
    const zsw = stockwerke.find((s) => s.value === zielStockwerk);
    if (!sw || !zsw) return { netto: 0, brutto: 0, details: { kartonKosten: 0, stockwerkZuschlag: 0, entfernungKosten: 0, halteverbotKosten: 0 } };

    const kartonCount = parseInt(kartons) || 0;
    const zimmerCount = parseInt(zimmer) || 0;
    const moebelCount = parseInt(moebelDemontage) || 0;
    const km = parseInt(kilometer) || 0;
    const kartonKosten = kartonCount * KARTON_PREIS_NETTO;
    const zimmerKosten = zimmerCount * PREIS_PRO_ZIMMER;
    const moebelKosten = moebelCount * PREIS_PRO_MOEBEL;
    const basisOhneStockwerk = kartonCount * KARTON_PREIS_NETTO;

    const startFloorNum = parseInt(sw.value) || 0;
    let startFloorFactor = 1.0;
    if (startFloorNum > 0) {
      startFloorFactor = Math.pow(1.15, startFloorNum);
      if (hasElevator === "ja") {
        startFloorFactor = Math.pow(1.06, startFloorNum);
      }
    }

    const zielFloorNum = parseInt(zsw.value) || 0;
    let zielFloorFactor = 1.0;
    if (zielFloorNum > 0) {
      zielFloorFactor = Math.pow(1.15, zielFloorNum);
      if (zielHasElevator === "ja") {
        zielFloorFactor = Math.pow(1.06, zielFloorNum);
      }
    }

    const stockwerkZuschlag = Math.round(basisOhneStockwerk * (startFloorFactor - 1)) + Math.round(basisOhneStockwerk * (zielFloorFactor - 1));
    const entfernungKosten = km * PREIS_PRO_KM;
    const halteverbotKosten = halteverbot ? HALTEVERBOTSZONE_PREIS : 0;

    let nettoVorRabatt = GRUNDPREIS + zimmerKosten + moebelKosten + kartonKosten + stockwerkZuschlag + entfernungKosten + halteverbotKosten;
    let netto = nettoVorRabatt;
    let aufzugRabatt = 0;
    if (hasElevator === "ja") {
      aufzugRabatt = Math.round(nettoVorRabatt * 0.1);
      netto = nettoVorRabatt - aufzugRabatt;
    }
    const brutto = Math.round(netto * (1 + MwSt) * 100) / 100;

    const log = [
      `Grundpreis: ${GRUNDPREIS}€`,
      `Zimmer: ${zimmerCount} × ${PREIS_PRO_ZIMMER}€ = ${zimmerKosten}€`,
      `Kartons: ${kartonCount} × ${KARTON_PREIS_NETTO}€ = ${kartonKosten}€`,
      `Möbeldemontage: ${moebelCount} × ${PREIS_PRO_MOEBEL}€ = ${moebelKosten}€`,
      `Start-Stockwerk: ${startFloorNum}. OG → Faktor: ${startFloorFactor.toFixed(4)} (Aufzug: ${hasElevator})`,
      `Ziel-Stockwerk: ${zielFloorNum}. OG → Faktor: ${zielFloorFactor.toFixed(4)} (Aufzug: ${zielHasElevator})`,
      `Stockwerkzuschlag: ${stockwerkZuschlag}€`,
      `Entfernung: ${km} km × ${PREIS_PRO_KM}€ = ${entfernungKosten}€`,
      `Halteverbot: ${halteverbotKosten}€`,
      `Summe vor Rabatt: ${nettoVorRabatt}€`,
      ...(aufzugRabatt > 0 ? [`Aufzug-Rabatt (10%): -${aufzugRabatt}€`] : []),
      `Netto: ${netto}€`,
      `Spanne: ${Math.round(netto * 0.85)}€ – ${Math.round(netto * 1.15)}€ (±15%)`,
    ];

    return { netto, brutto, log, details: { kartonKosten, stockwerkZuschlag, entfernungKosten, halteverbotKosten } };
  };

  const isComplete = stockwerk !== "" && hasElevator !== "" && zielStockwerk !== "" && zielHasElevator !== "" && kilometer !== "" && parseInt(kilometer) > 0 && kartons !== "" && parseInt(kartons) > 0 && zimmer !== "" && parseInt(zimmer) > 0;
  const price = calculatePrice();

  const handleCalculate = () => {
    if (isComplete) setShowResult(true);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="space-y-6">
        <div>
          <Label className="text-sm font-medium text-muted-foreground mb-3 flex items-center gap-2" data-testid="label-zimmer">
            <Building2 className="w-4 h-4" />
            Anzahl Zimmer
          </Label>
          <Input
            type="text"
            inputMode="numeric"
            value={zimmer}
            onChange={(e) => { setZimmer(e.target.value.replace(/[^0-9]/g, "")); setShowResult(false); }}
            placeholder="z.B. 3"
            className="bg-background"
            data-testid="input-zimmer"
          />
        </div>

        <div>
          <Label className="text-sm font-medium text-muted-foreground mb-3 flex items-center gap-2" data-testid="label-kartons">
            <Package className="w-4 h-4" />
            Anzahl Umzugskartons
          </Label>
          <Input
            type="text"
            inputMode="numeric"
            value={kartons}
            onChange={(e) => { setKartons(e.target.value.replace(/[^0-9]/g, "")); setShowResult(false); }}
            placeholder="z.B. 20"
            className="bg-background"
            data-testid="input-kartons"
          />
        </div>

        <div>
          <Label className="text-sm font-medium text-muted-foreground mb-3 flex items-center gap-2" data-testid="label-moebel">
            <Package className="w-4 h-4" />
            Möbeldemontage (Anzahl Möbelstücke)
          </Label>
          <Input
            type="text"
            inputMode="numeric"
            value={moebelDemontage}
            onChange={(e) => { setMoebelDemontage(e.target.value.replace(/[^0-9]/g, "")); setShowResult(false); }}
            placeholder="z.B. 3"
            className="bg-background"
            data-testid="input-moebel"
          />
        </div>

        <p className="text-sm font-semibold text-foreground mt-2">Startort</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <Label className="text-sm font-medium text-muted-foreground mb-2 flex items-center gap-2" data-testid="label-umzug-stockwerk">
              <Building2 className="w-4 h-4" />
              Stockwerk
            </Label>
            <Select value={stockwerk} onValueChange={(v) => { setStockwerk(v); setShowResult(false); }}>
              <SelectTrigger data-testid="select-umzug-stockwerk">
                <SelectValue placeholder="Auswählen" />
              </SelectTrigger>
              <SelectContent>
                {stockwerke.map((sw) => (
                  <SelectItem key={sw.value} value={sw.value}>{sw.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label className="text-sm font-medium text-muted-foreground mb-2 flex items-center gap-2" data-testid="label-umzug-aufzug">
              <Building2 className="w-4 h-4" />
              Aufzug vorhanden?
            </Label>
            <Select value={hasElevator} onValueChange={(v) => { setHasElevator(v); setShowResult(false); }}>
              <SelectTrigger data-testid="select-umzug-aufzug">
                <SelectValue placeholder="Auswählen" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="nein">Nein</SelectItem>
                <SelectItem value="ja">Ja</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <p className="text-sm font-semibold text-foreground mt-2">Zielort</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <Label className="text-sm font-medium text-muted-foreground mb-2 flex items-center gap-2" data-testid="label-ziel-stockwerk">
              <Building2 className="w-4 h-4" />
              Stockwerk
            </Label>
            <Select value={zielStockwerk} onValueChange={(v) => { setZielStockwerk(v); setShowResult(false); }}>
              <SelectTrigger data-testid="select-ziel-stockwerk">
                <SelectValue placeholder="Auswählen" />
              </SelectTrigger>
              <SelectContent>
                {stockwerke.map((sw) => (
                  <SelectItem key={sw.value} value={sw.value}>{sw.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label className="text-sm font-medium text-muted-foreground mb-2 flex items-center gap-2" data-testid="label-ziel-aufzug">
              <Building2 className="w-4 h-4" />
              Aufzug vorhanden?
            </Label>
            <Select value={zielHasElevator} onValueChange={(v) => { setZielHasElevator(v); setShowResult(false); }}>
              <SelectTrigger data-testid="select-ziel-aufzug">
                <SelectValue placeholder="Auswählen" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="nein">Nein</SelectItem>
                <SelectItem value="ja">Ja</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <Label className="text-sm font-medium text-muted-foreground mb-2 flex items-center gap-2" data-testid="label-entfernung">
            <MapPin className="w-4 h-4" />
            Entfernung (km)
          </Label>
          <Input
            type="text"
            inputMode="numeric"
            value={kilometer}
            onChange={(e) => { setKilometer(e.target.value.replace(/[^0-9]/g, "")); setShowResult(false); }}
            placeholder="z.B. 25"
            className="bg-background"
            data-testid="input-kilometer"
          />
        </div>

        <div className="flex items-center justify-between p-4 rounded-md border-2 border-border bg-card">
          <div className="flex items-center gap-3">
            <ShieldAlert className="w-5 h-5 text-muted-foreground" />
            <div>
              <span className="text-sm font-medium text-foreground">Halteverbotszone benötigt?</span>
              <p className="text-xs text-muted-foreground">+ {HALTEVERBOTSZONE_PREIS},00 € netto</p>
            </div>
          </div>
          <Switch
            checked={halteverbot}
            onCheckedChange={(v) => { setHalteverbot(v); setShowResult(false); }}
            data-testid="switch-halteverbot"
          />
        </div>

        <Button
          onClick={handleCalculate}
          disabled={!isComplete}
          className="w-full"
          size="lg"
          data-testid="button-umzug-calculate"
        >
          <Calculator className="w-4 h-4 mr-2" />
          Umzugskosten berechnen
        </Button>

        {showResult && isComplete && (
          <div className="fade-slide-in">
              <Card className="p-6 bg-primary/5">
                <div className="text-center mb-5">
                  <p className="text-sm text-muted-foreground mb-2" data-testid="text-umzug-estimate-label">
                    Geschätzte Kosten
                  </p>
                  <p className="text-3xl font-bold text-primary" data-testid="text-umzug-estimate-price">
                    {Math.round(price.netto * 0.85)} - {Math.round(price.netto * 1.15)} EUR
                  </p>
                  <p className="text-xs text-muted-foreground mt-3 font-normal">Dies ist eine unverbindliche Schätzung. Der tatsächliche Preis kann je nach Umfang und <strong>Wertanrechnung</strong> variieren.</p>
                </div>
                <UmzugCalcContactForm calcDetails={[
                  "── Geschätzte Kosten ──",
                  `Preisspanne: ${Math.round(price.netto * 0.85)} – ${Math.round(price.netto * 1.15)} EUR`,
                  "",
                  "── Eingaben ──",
                  `Anzahl Zimmer: ${zimmer}`,
                  `Anzahl Kartons: ${kartons}`,
                  `Möbeldemontage: ${moebelDemontage} Möbelstücke`,
                  `Start-Stockwerk: ${stockwerke.find(s => s.value === stockwerk)?.label || stockwerk}`,
                  `Aufzug (Start): ${hasElevator === "ja" ? "Ja" : "Nein"}`,
                  `Ziel-Stockwerk: ${stockwerke.find(s => s.value === zielStockwerk)?.label || zielStockwerk}`,
                  `Aufzug (Ziel): ${zielHasElevator === "ja" ? "Ja" : "Nein"}`,
                  `Entfernung: ${kilometer} km`,
                  `Halteverbotszone: ${halteverbot ? "Ja" : "Nein"}`,
                  "",
                  "── Kalkulation ──",
                  ...(price.log || []),
                ].join("\n")} />
              </Card>
          </div>
        )}
      </div>
    </div>
  );
}
