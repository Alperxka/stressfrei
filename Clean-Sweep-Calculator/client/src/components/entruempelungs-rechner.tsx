import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PhoneInput } from "@/components/phone-input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calculator, Home, Building2, Warehouse, ArrowUp, ArrowUpDown, Send, CheckCircle2 } from "lucide-react";
import { trackConversion } from "@/lib/gtag";

const roomTypes = [
  { value: "wohnung", label: "Wohnung", icon: Home, basePrice: 780 },
  { value: "haus", label: "Haus", basePrice: 412, icon: Building2 },
  { value: "keller", label: "Keller", basePrice: 600, icon: Warehouse },
  { value: "dachboden", label: "Dachboden", basePrice: 350, icon: ArrowUp },
  { value: "garage", label: "Garage", basePrice: 500, icon: Warehouse },
  { value: "buero", label: "Gewerbe / Büro", basePrice: 1000, icon: Building2 },
];

const fillLevels = [
  { value: "leicht", label: "Leicht gefüllt", factor: 0.6, desc: "Wenige Gegenstände" },
  { value: "mittel", label: "Normal gefüllt", factor: 1.0, desc: "Durchschnittliche Menge" },
  { value: "voll", label: "Voll", factor: 1.4, desc: "Stark gefüllt" },
  { value: "sehr-voll", label: "Sehr voll", factor: 1.9, desc: "Überfüllt / Messie" },
];

function CalcContactForm({ type, calcDetails }: { type: string; calcDetails?: string }) {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  if (sent) {
    return (
      <div className="text-center py-3">
        <CheckCircle2 className="w-8 h-8 text-primary mx-auto mb-2" />
        <p className="text-sm font-medium text-foreground" data-testid={`text-${type}-calc-form-success`}>Vielen Dank!</p>
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
          formName: `${type}_rechner`,
          name: fd.get("name"),
          phone: fd.get("phone"),
          email: fd.get("email"),
          message: fd.get("info"),
          calculationDetails: calcDetails,
        }),
      });
    } catch (err) {}
    setSent(true);
    trackConversion(`${type}_rechner`);
  };
  return (
    <div className="border-t border-border/50 pt-5">
      <p className="text-sm font-medium text-foreground text-center mb-3">Kostenloses Angebot anfordern</p>
      <form className="space-y-2" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-2">
          <Input name="name" placeholder="Name *" required className="bg-background" data-testid={`input-${type}-calc-name`} />
          <PhoneInput name="phone" placeholder="Telefon" required className="bg-background" data-testid={`input-${type}-calc-phone`} />
        </div>
        <Input name="email" type="email" placeholder="E-Mail *" required className="bg-background" data-testid={`input-${type}-calc-email`} />
        <Textarea name="info" placeholder="Zusätzliche Informationen" className="resize-none bg-background" rows={3} data-testid={`input-${type}-calc-info`} />
        <Button type="submit" className="w-full" size="sm" disabled={sending} data-testid={`button-${type}-calc-submit`}>
          <Send className="w-3 h-3 mr-2" />
          {sending ? "Wird gesendet..." : "Angebot anfordern"}
        </Button>
      </form>
    </div>
  );
}

export function EntruempelungsRechner() {
  const [roomType, setRoomType] = useState("");
  const [size, setSize] = useState([50]);
  const [fillLevel, setFillLevel] = useState("");
  const [floor, setFloor] = useState("");
  const [hasElevator, setHasElevator] = useState("");
  const [containerMoeglich, setContainerMoeglich] = useState("");
  const [showResult, setShowResult] = useState(false);

  const calculatePrice = () => {
    const room = roomTypes.find((r) => r.value === roomType);
    const fill = fillLevels.find((f) => f.value === fillLevel);
    if (!room || !fill) return { min: 0, max: 0 };

    const sizeValue = size[0];
    const sizeFactor = sizeValue / 50;
    let floorFactor = 1.0;
    const floorNum = parseInt(floor) || 0;
    if (floorNum > 0 && room.value !== "haus") {
      floorFactor = Math.pow(1.15, floorNum);
      if (hasElevator === "ja") {
        floorFactor = Math.pow(1.06, floorNum);
      }
    }

    let effectiveBasePrice = room.basePrice;
    if (room.value === "wohnung" || room.value === "haus") {
      if (fill.value === "sehr-voll") effectiveBasePrice = 1000;
      else if (fill.value === "voll") effectiveBasePrice = room.basePrice * 1.5;
    }

    const containerKosten = containerMoeglich === "ja" ? 100 : 0;
    const variable = effectiveBasePrice * sizeFactor * fill.factor * floorFactor;
    const base = effectiveBasePrice + variable + containerKosten;
    const min = Math.round(base * 0.85 / 10) * 10;
    const max = Math.round(base * 1.15 / 10) * 10;
    const log = [
      `Raumtyp: ${room.label} (Grundpreis: ${room.basePrice}€)`,
      `Effektiver Grundpreis: ${effectiveBasePrice.toFixed(2)}€`,
      `Fläche: ${sizeValue} m² → Faktor: ${sizeFactor.toFixed(2)}`,
      `Füllgrad: ${fill.label} → Faktor: ${fill.factor}`,
      `Stockwerk: ${floor}. OG → Faktor: ${floorFactor.toFixed(4)}`,
      `Variable: ${effectiveBasePrice.toFixed(2)} × ${sizeFactor.toFixed(2)} × ${fill.factor} × ${floorFactor.toFixed(4)} = ${variable.toFixed(2)}€`,
      `Container: ${containerKosten}€`,
      `Basis: ${effectiveBasePrice.toFixed(2)} + ${variable.toFixed(2)} + ${containerKosten} = ${base.toFixed(2)}€`,
      `Spanne: ${min}€ – ${max}€ (±15%)`,
    ];
    return { min, max, log };
  };

  const isComplete = roomType && fillLevel && floor && hasElevator && containerMoeglich !== "";
  const price = calculatePrice();

  const handleCalculate = () => {
    if (isComplete) setShowResult(true);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="space-y-6">
        <div>
          <Label className="text-sm font-medium text-muted-foreground mb-3 block" data-testid="label-room-type">
            Art der Räumlichkeit
          </Label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {roomTypes.map((type) => {
              const Icon = type.icon;
              return (
                <button
                  key={type.value}
                  onClick={() => { setRoomType(type.value); setShowResult(false); }}
                  data-testid={`button-room-${type.value}`}
                  className={`relative flex flex-col items-center gap-2 p-4 rounded-md border-2 transition-all duration-200 ${
                    roomType === type.value
                      ? "border-primary bg-primary/5"
                      : "border-border bg-card"
                  }`}
                >
                  <Icon className={`w-6 h-6 ${roomType === type.value ? "text-primary" : "text-muted-foreground"}`} />
                  <span className={`text-sm font-medium ${roomType === type.value ? "text-foreground" : "text-muted-foreground"}`}>
                    {type.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <Label className="text-sm font-medium text-muted-foreground mb-3 block" data-testid="label-size">
            Fläche: <span className="text-foreground font-semibold">{size[0]} m²</span>
          </Label>
          <Slider
            aria-label="Fläche in Quadratmeter"
            value={size}
            onValueChange={(v) => { setSize(v); setShowResult(false); }}
            min={10}
            max={200}
            step={5}
            className="py-2"
            data-testid="slider-size"
          />
          <div className="flex justify-between text-xs text-muted-foreground mt-1">
            <span>10 m²</span>
            <span>200 m²</span>
          </div>
        </div>

        <div>
          <Label className="text-sm font-medium text-muted-foreground mb-3 block" data-testid="label-fill">
            Füllgrad
          </Label>
          <div className="grid grid-cols-2 gap-3">
            {fillLevels.map((level) => (
              <button
                key={level.value}
                onClick={() => { setFillLevel(level.value); setShowResult(false); }}
                data-testid={`button-fill-${level.value}`}
                className={`text-left p-3 rounded-md border-2 transition-all duration-200 ${
                  fillLevel === level.value
                    ? "border-primary bg-primary/5"
                    : "border-border bg-card"
                }`}
              >
                <div className={`text-sm font-medium ${fillLevel === level.value ? "text-foreground" : "text-muted-foreground"}`}>
                  {level.label}
                </div>
                <div className="text-xs text-muted-foreground mt-0.5">{level.desc}</div>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label className="text-sm font-medium text-muted-foreground mb-2 block" data-testid="label-floor">
              Stockwerk
            </Label>
            <Select value={floor} onValueChange={(v) => { setFloor(v); setShowResult(false); }}>
              <SelectTrigger data-testid="select-floor">
                <SelectValue placeholder="Auswählen" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0">Erdgeschoss</SelectItem>
                <SelectItem value="1">1. OG</SelectItem>
                <SelectItem value="2">2. OG</SelectItem>
                <SelectItem value="3">3. OG</SelectItem>
                <SelectItem value="4">4. OG</SelectItem>
                <SelectItem value="5">5. OG+</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label className="text-sm font-medium text-muted-foreground mb-2 block" data-testid="label-elevator">
              Aufzug vorhanden?
            </Label>
            <Select value={hasElevator} onValueChange={(v) => { setHasElevator(v); setShowResult(false); }}>
              <SelectTrigger data-testid="select-elevator">
                <SelectValue placeholder="Auswählen" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ja">Ja</SelectItem>
                <SelectItem value="nein">Nein</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <Label className="text-sm font-medium text-muted-foreground mb-2 block" data-testid="label-container">
            Kann ein Container abgestellt werden?
          </Label>
          <Select value={containerMoeglich} onValueChange={(v) => { setContainerMoeglich(v); setShowResult(false); }}>
            <SelectTrigger data-testid="select-container">
              <SelectValue placeholder="Auswählen" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ja">Ja</SelectItem>
              <SelectItem value="nein">Nein</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button
          onClick={handleCalculate}
          disabled={!isComplete}
          className="w-full"
          size="lg"
          data-testid="button-calculate"
        >
          <Calculator className="w-4 h-4 mr-2" />
          Kosten schätzen
        </Button>

        {showResult && isComplete && (
          <div className="fade-slide-in">
              <Card className="p-6 bg-primary/5">
                <div className="text-center mb-5">
                  <p className="text-sm text-muted-foreground mb-2" data-testid="text-estimate-label">
                    Geschätzte Kosten
                  </p>
                  <p className="text-3xl font-bold text-primary" data-testid="text-estimate-price">
                    {price.min} - {price.max} EUR
                  </p>
                  <p className="text-xs text-muted-foreground mt-3">
                    Dies ist eine unverbindliche Schätzung. Der tatsächliche Preis kann je nach Objektzustand variieren.
                  </p>
                </div>
                <CalcContactForm type="entruempelung" calcDetails={[
                  "── Geschätzte Kosten ──",
                  `Preisspanne: ${price.min} – ${price.max} EUR`,
                  "",
                  "── Eingaben ──",
                  `Raumtyp: ${roomTypes.find(r => r.value === roomType)?.label || roomType}`,
                  `Fläche: ${size[0]} m²`,
                  `Füllgrad: ${fillLevels.find(f => f.value === fillLevel)?.label || fillLevel}`,
                  `Stockwerk: ${floor}. OG`,
                  `Aufzug: ${hasElevator === "ja" ? "Ja" : "Nein"}`,
                  `Container möglich: ${containerMoeglich === "ja" ? "Ja" : "Nein"}`,
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
