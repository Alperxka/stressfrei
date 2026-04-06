import { useState, useRef } from "react";
import { Input } from "@/components/ui/input";
import { ChevronDown } from "lucide-react";

const countryCodes = [
  { code: "+49", label: "DE +49", flag: "🇩🇪" },
  { code: "+43", label: "AT +43", flag: "🇦🇹" },
  { code: "+41", label: "CH +41", flag: "🇨🇭" },
  { code: "+31", label: "NL +31", flag: "🇳🇱" },
  { code: "+32", label: "BE +32", flag: "🇧🇪" },
  { code: "+33", label: "FR +33", flag: "🇫🇷" },
  { code: "+39", label: "IT +39", flag: "🇮🇹" },
  { code: "+34", label: "ES +34", flag: "🇪🇸" },
  { code: "+44", label: "GB +44", flag: "🇬🇧" },
  { code: "+48", label: "PL +48", flag: "🇵🇱" },
  { code: "+90", label: "TR +90", flag: "🇹🇷" },
];

interface PhoneInputProps {
  name?: string;
  id?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
  "data-testid"?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export function PhoneInput({
  name = "phone",
  id,
  placeholder = "Telefonnummer",
  required = false,
  className = "",
  "data-testid": testId,
  value: controlledValue,
  onChange,
}: PhoneInputProps) {
  const [countryCode, setCountryCode] = useState("+49");
  const [localNumber, setLocalNumber] = useState(controlledValue || "");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/[^0-9]/g, "");
    setLocalNumber(raw);
    onChange?.(raw);
  };

  const fullValue = localNumber ? `${countryCode}${localNumber}` : "";

  return (
    <div className={`relative flex ${className}`} ref={wrapperRef}>
      <input type="hidden" name={name} value={fullValue} />
      <div className="relative">
        <button
          type="button"
          onClick={() => setDropdownOpen(!dropdownOpen)}
          onBlur={() => setTimeout(() => setDropdownOpen(false), 150)}
          className="flex items-center gap-1 h-9 px-2.5 border border-r-0 border-input rounded-l-md bg-muted/50 text-sm text-foreground hover:bg-muted transition-colors whitespace-nowrap"
          data-testid={testId ? `${testId}-country` : "select-phone-country"}
        >
          <span>{countryCodes.find(c => c.code === countryCode)?.flag}</span>
          <span className="text-xs">{countryCode}</span>
          <ChevronDown className="w-3 h-3 text-muted-foreground" />
        </button>
        {dropdownOpen && (
          <div className="absolute top-full left-0 mt-1 w-36 bg-background border border-border rounded-md shadow-lg z-50 py-1 max-h-48 overflow-y-auto" data-testid="dropdown-phone-country">
            {countryCodes.map((c) => (
              <button
                key={c.code}
                type="button"
                onClick={() => { setCountryCode(c.code); setDropdownOpen(false); }}
                className={`w-full text-left px-3 py-1.5 text-sm hover:bg-muted transition-colors flex items-center gap-2 ${c.code === countryCode ? "bg-primary/10 text-primary font-medium" : "text-foreground"}`}
                data-testid={`option-country-${c.code}`}
              >
                <span>{c.flag}</span>
                <span>{c.label}</span>
              </button>
            ))}
          </div>
        )}
      </div>
      <Input
        type="tel"
        id={id}
        inputMode="numeric"
        pattern="[0-9]*"
        value={controlledValue !== undefined ? controlledValue : localNumber}
        onChange={handleNumberChange}
        placeholder={placeholder}
        required={required}
        className="rounded-l-none border-l-0"
        data-testid={testId}
      />
    </div>
  );
}
