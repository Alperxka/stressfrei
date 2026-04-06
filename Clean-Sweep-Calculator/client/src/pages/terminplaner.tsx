import { useState, useEffect } from "react";
import { PageLayout, PageHero } from "@/components/layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PhoneInput } from "@/components/phone-input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";
import { CalendarDays, Clock, ChevronLeft, ChevronRight, Send, CheckCircle2, Loader2 } from "lucide-react";
import { trackConversion } from "@/lib/gtag";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5 },
};

const services = [
  "Entrümpelung",
  "Haushaltsauflösung",
  "Wohnungsauflösung",
  "Firmenauflösung",
  "Messie-Wohnung",
  "Privatumzug",
  "Seniorenumzug",
  "Büroumzug",
  "Schrottankauf",
  "Beratungsgespräch",
];

const timeSlots = [
  "08:00", "08:30", "09:00", "09:30", "10:00", "10:30",
  "11:00", "11:30", "12:00", "12:30", "13:00", "13:30",
  "14:00", "14:30", "15:00", "15:30", "16:00", "16:30",
  "17:00", "17:30", "18:00",
];

const dayNames = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];
const monthNames = [
  "Januar", "Februar", "März", "April", "Mai", "Juni",
  "Juli", "August", "September", "Oktober", "November", "Dezember",
];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
  const day = new Date(year, month, 1).getDay();
  return day === 0 ? 6 : day - 1;
}

function isWeekend(year: number, month: number, day: number) {
  const d = new Date(year, month, day).getDay();
  return d === 0 || d === 6;
}

function isPast(year: number, month: number, day: number) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const date = new Date(year, month, day);
  return date < today;
}

function isToday(year: number, month: number, day: number) {
  const today = new Date();
  return today.getFullYear() === year && today.getMonth() === month && today.getDate() === day;
}

function toISODate(year: number, month: number, day: number) {
  return `${year}-${(month + 1).toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}`;
}

export default function TerminplanerPage() {
  useEffect(() => {
    document.title = "Termin vereinbaren | Stressfrei Entrümpelungen & Umzüge";
    let _canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!_canonical) { _canonical = document.createElement("link"); _canonical.setAttribute("rel", "canonical"); document.head.appendChild(_canonical); }
    _canonical.setAttribute("href", "https://stressfreientruempelungen.de/terminplaner");
    const _setOgMeta = (prop: string, val: string) => { let m = document.querySelector(`meta[property="${prop}"]`) as HTMLMetaElement | null; if (!m) { m = document.createElement("meta"); m.setAttribute("property", prop); document.head.appendChild(m); } m.setAttribute("content", val); };
    _setOgMeta("og:url", "https://stressfreientruempelungen.de/terminplaner");
    _setOgMeta("og:image", "https://stressfreientruempelungen.de/images/professionelle-entruempelung-service-rhein-erft-kreis.webp");
    _setOgMeta("og:locale", "de_DE");
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Vereinbaren Sie online einen Termin für Ihre Entrümpelung oder Ihren Umzug im Rhein-Erft-Kreis. Schnell, einfach und unverbindlich.");
    }
  }, []);

  const now = new Date();
  const [currentMonth, setCurrentMonth] = useState(now.getMonth());
  const [currentYear, setCurrentYear] = useState(now.getFullYear());
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedISODate, setSelectedISODate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [nachricht, setNachricht] = useState("");
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [busySlots, setBusySlots] = useState<string[]>([]);
  const [loadingSlots, setLoadingSlots] = useState(false);

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDay = getFirstDayOfMonth(currentYear, currentMonth);

  useEffect(() => {
    if (!selectedISODate) {
      setBusySlots([]);
      return;
    }
    setLoadingSlots(true);
    fetch(`/api/availability?date=${selectedISODate}`)
      .then((r) => r.json())
      .then((data) => {
        setBusySlots(data.busySlots || []);
      })
      .catch(() => {
        setBusySlots([]);
      })
      .finally(() => {
        setLoadingSlots(false);
      });
  }, [selectedISODate]);

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handleDayClick = (day: number) => {
    if (isPast(currentYear, currentMonth, day) || isWeekend(currentYear, currentMonth, day)) return;
    const dateStr = `${day.toString().padStart(2, "0")}.${(currentMonth + 1).toString().padStart(2, "0")}.${currentYear}`;
    setSelectedDate(dateStr);
    setSelectedISODate(toISODate(currentYear, currentMonth, day));
    setSelectedTime("");
  };

  const canGoBack = !(currentYear === now.getFullYear() && currentMonth === now.getMonth());

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formName: "terminplaner",
          name,
          phone,
          email,
          message: nachricht,
          calculationDetails: `Datum: ${selectedDate}\nUhrzeit: ${selectedTime}\nService: ${selectedService}`,
          calendarDate: selectedDate,
          calendarTime: selectedTime,
          calendarService: selectedService,
        }),
      });
    } catch (err) {}
    setSubmitting(false);
    setSent(true);
    trackConversion("terminplaner", { phone, email });
  };

  const isFormComplete = selectedDate && selectedTime && selectedService && name && phone && email;

  const availableSlots = timeSlots.filter((t) => !busySlots.includes(t));

  if (sent) {
    return (
      <PageLayout
        title="Termin gebucht | Stressfrei Entrümpelungen"
        description="Ihr Termin wurde erfolgreich angefragt."
      >
        <PageHero
          title="Terminplaner"
          subtitle="Buchen Sie Ihren Wunschtermin online — einfach und bequem"
        />
        <section className="py-16 sm:py-24">
          <div className="max-w-2xl mx-auto px-4 sm:px-6">
            <Card className="p-8 text-center">
              <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-foreground mb-2" data-testid="text-termin-success">
                Terminanfrage gesendet!
              </h2>
              <p className="text-muted-foreground mb-4">
                Vielen Dank für Ihre Terminanfrage. Wir bestätigen Ihren Termin schnellstmöglich telefonisch.
              </p>
              <div className="bg-primary/5 rounded-lg p-4 inline-block text-left">
                <p className="text-sm"><strong>Datum:</strong> {selectedDate}</p>
                <p className="text-sm"><strong>Uhrzeit:</strong> {selectedTime} Uhr</p>
                <p className="text-sm"><strong>Service:</strong> {selectedService}</p>
                <p className="text-sm"><strong>Name:</strong> {name}</p>
              </div>
            </Card>
          </div>
        </section>
      </PageLayout>
    );
  }

  return (
    <PageLayout
      title="Termin buchen | Stressfrei Entrümpelungen & Umzüge"
      description="Buchen Sie online Ihren Wunschtermin für Entrümpelung, Umzug oder Beratung im Rhein-Erft-Kreis."
    >
      <PageHero
        title="Terminplaner"
        subtitle="Buchen Sie Ihren Wunschtermin online — einfach und bequem"
      />

      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div {...fadeIn}>
              <Card className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <CalendarDays className="w-5 h-5 text-primary" />
                  <h2 className="text-lg font-semibold text-foreground" data-testid="text-termin-datum-title">
                    1. Datum wählen
                  </h2>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={prevMonth}
                    disabled={!canGoBack}
                    data-testid="button-prev-month"
                    aria-label="Vorheriger Monat"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <span className="font-semibold text-foreground" data-testid="text-current-month">
                    {monthNames[currentMonth]} {currentYear}
                  </span>
                  <Button variant="ghost" size="icon" onClick={nextMonth} data-testid="button-next-month" aria-label="Nächster Monat">
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>

                <div className="grid grid-cols-7 gap-1 mb-2">
                  {dayNames.map((d) => (
                    <div key={d} className="text-center text-xs font-medium text-muted-foreground py-1">
                      {d}
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-7 gap-1">
                  {Array.from({ length: firstDay }).map((_, i) => (
                    <div key={`empty-${i}`} />
                  ))}
                  {Array.from({ length: daysInMonth }).map((_, i) => {
                    const day = i + 1;
                    const weekend = isWeekend(currentYear, currentMonth, day);
                    const past = isPast(currentYear, currentMonth, day);
                    const today = isToday(currentYear, currentMonth, day);
                    const dateStr = `${day.toString().padStart(2, "0")}.${(currentMonth + 1).toString().padStart(2, "0")}.${currentYear}`;
                    const isSelected = selectedDate === dateStr;
                    const disabled = weekend || past;

                    return (
                      <button
                        key={day}
                        onClick={() => handleDayClick(day)}
                        disabled={disabled}
                        data-testid={`button-day-${day}`}
                        className={`aspect-square rounded-md text-sm font-medium transition-all duration-200 ${
                          isSelected
                            ? "bg-primary text-primary-foreground"
                            : today
                            ? "bg-primary/10 text-primary"
                            : disabled
                            ? "text-muted-foreground/30 cursor-not-allowed"
                            : "text-foreground hover:bg-muted"
                        }`}
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>

                {selectedDate && (
                  <p className="text-sm text-primary font-medium mt-4 text-center" data-testid="text-selected-date">
                    Gewählt: {selectedDate}
                  </p>
                )}
              </Card>

              {selectedDate && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="p-6 mt-4">
                    <div className="flex items-center gap-2 mb-4">
                      <Clock className="w-5 h-5 text-primary" />
                      <h2 className="text-lg font-semibold text-foreground" data-testid="text-termin-zeit-title">
                        2. Uhrzeit wählen
                      </h2>
                    </div>

                    {loadingSlots ? (
                      <div className="flex items-center justify-center py-8 gap-2 text-muted-foreground">
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span className="text-sm">Verfügbarkeit wird geprüft...</span>
                      </div>
                    ) : (
                      <>
                        {availableSlots.length === 0 ? (
                          <div className="text-center py-6">
                            <p className="text-muted-foreground text-sm">
                              An diesem Tag sind leider keine Termine mehr verfügbar. Bitte wählen Sie ein anderes Datum.
                            </p>
                          </div>
                        ) : (
                          <>
                            {busySlots.length > 0 && (
                              <p className="text-xs text-muted-foreground mb-3">
                                Bereits belegte Zeiten sind ausgegraut.
                              </p>
                            )}
                            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                              {timeSlots.map((time) => {
                                const isBusy = busySlots.includes(time);
                                return (
                                  <button
                                    key={time}
                                    onClick={() => !isBusy && setSelectedTime(time)}
                                    disabled={isBusy}
                                    data-testid={`button-time-${time}`}
                                    className={`py-2 px-3 rounded-md text-sm font-medium transition-all duration-200 border ${
                                      isBusy
                                        ? "bg-muted/50 text-muted-foreground/40 border-border/50 cursor-not-allowed line-through"
                                        : selectedTime === time
                                        ? "bg-primary text-primary-foreground border-primary"
                                        : "border-border text-foreground hover:bg-muted"
                                    }`}
                                  >
                                    {time}
                                  </button>
                                );
                              })}
                            </div>
                          </>
                        )}
                      </>
                    )}
                  </Card>
                </motion.div>
              )}
            </motion.div>

            <motion.div {...fadeIn} transition={{ duration: 0.5, delay: 0.1 }}>
              <Card className="p-6">
                <h2 className="text-lg font-semibold text-foreground mb-4" data-testid="text-termin-details-title">
                  3. Ihre Angaben
                </h2>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <Label htmlFor="termin-service" className="text-sm font-medium text-muted-foreground mb-2 block">
                      Gewünschter Service *
                    </Label>
                    <Select value={selectedService} onValueChange={setSelectedService}>
                      <SelectTrigger id="termin-service" data-testid="select-termin-service">
                        <SelectValue placeholder="Service auswählen" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((s) => (
                          <SelectItem key={s} value={s}>{s}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="termin-name" className="text-sm font-medium text-muted-foreground mb-2 block">Name *</Label>
                    <Input
                      id="termin-name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ihr Name"
                      required
                      data-testid="input-termin-name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="termin-phone" className="text-sm font-medium text-muted-foreground mb-2 block">Telefon *</Label>
                    <PhoneInput
                      id="termin-phone"
                      name="phone"
                      value={phone}
                      onChange={(val) => setPhone(val)}
                      placeholder="Telefonnummer"
                      required
                      data-testid="input-termin-phone"
                    />
                  </div>

                  <div>
                    <Label htmlFor="termin-email" className="text-sm font-medium text-muted-foreground mb-2 block">E-Mail *</Label>
                    <Input
                      id="termin-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Ihre E-Mail-Adresse"
                      required
                      data-testid="input-termin-email"
                    />
                  </div>

                  <div>
                    <Label htmlFor="termin-nachricht" className="text-sm font-medium text-muted-foreground mb-2 block">Nachricht</Label>
                    <Textarea
                      id="termin-nachricht"
                      value={nachricht}
                      onChange={(e) => setNachricht(e.target.value)}
                      placeholder="Zusätzliche Informationen zu Ihrem Anliegen"
                      className="resize-none"
                      rows={3}
                      data-testid="input-termin-nachricht"
                    />
                  </div>

                  {selectedDate && selectedTime && (
                    <div className="bg-primary/5 rounded-lg p-3 text-sm text-foreground" data-testid="text-termin-summary">
                      <p><strong>Datum:</strong> {selectedDate}</p>
                      <p><strong>Uhrzeit:</strong> {selectedTime} Uhr</p>
                      {selectedService && <p><strong>Service:</strong> {selectedService}</p>}
                    </div>
                  )}

                  <Button
                    type="submit"
                    className="w-full"
                    size="lg"
                    disabled={!isFormComplete || submitting}
                    data-testid="button-termin-submit"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Wird gesendet...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Termin anfragen
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Nach Ihrer Anfrage bestätigen wir den Termin telefonisch.
                  </p>
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
