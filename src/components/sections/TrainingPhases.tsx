import { useMemo, useState } from "react";
import { CheckCircle, Waves, Shield, Zap, ArrowRight, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { useToast } from "@/hooks/use-toast";

type Phase = {
  number: "1" | "2" | "3";
  title: string;
  subtitle: string;
  icon: typeof Waves;
  content: string[];
  outcome: string;
  iconBg: string;
  iconColor: string;
  question: string;
  scale: Record<number, string>;
};

const phases: Phase[] = [
  {
    number: "1",
    title: "BAZIČNA ADAPTACIJA",
    subtitle: "Sesije 1-10",
    icon: Waves,
    content: ["Plutanje", "Disanje", "Klizanje", "Skok na noge"],
    outcome: "Eliminacija straha i bezbedan ulazak u vodu",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    question: "Koliki je Vaš nivo nelagode pri ulasku u vodu?",
    scale: {
      1: "Potpuno opušten",
      2: "Blaga nesigurnost",
      3: "Kontrolišem disanje",
      4: "Potrebna asistencija",
      5: "Nesigurnost",
      6: "Otežano disanje",
      7: "Strah od dubine",
      8: "Visok stres",
      9: "Izbegavam potapanje",
      10: "Panični strah",
    },
  },
  {
    number: "2",
    title: "VERTIKALNA SIGURNOST",
    subtitle: "Nastavak obuke",
    icon: Shield,
    content: ["Održavanje na vodi (4+ minuta)", "Rad u dubini"],
    outcome: "Potpuna kontrola i sigurnost u dubokoj vodi",
    iconBg: "bg-accent/10",
    iconColor: "text-accent",
    question: "Kako ocenjujete sigurnost u dubokoj vodi bez oslonca?",
    scale: {
      1: "Panika",
      2: "Tražim ivicu",
      3: "Strah",
      4: "Veliki napor",
      5: "Stalno tonem",
      6: "Brzo se umaram",
      7: "Povišen puls",
      8: "Stabilan",
      9: "Vladam prostorom",
      10: "Plutam bez napora",
    },
  },
  {
    number: "3",
    title: "PROPULZIJA I TEHNIKE",
    subtitle: "Usavršavanje",
    icon: Zap,
    content: ["Kretanje kroz vodu", "Kraul", "Prsno", "Leđno", "Delfin"],
    outcome: "Majstorstvo svih stilova plivanja",
    iconBg: "bg-secondary/10",
    iconColor: "text-secondary",
    question: "Kako ocenjujete ekonomičnost svog plivačkog pokreta?",
    scale: {
      1: "Borim se sa vodom",
      2: "Otpor je ogroman",
      3: "Trošim puno energije",
      4: "Greške u disanju",
      5: "Propadanje kukova",
      6: "Brzo umaranje",
      7: "Bez ritma",
      8: "Ekonomičan pokret",
      9: "Osećam zaveslaj",
      10: "Voda me nosi",
    },
  },
];

const colorForLevel = (level: number) => {
  if (level <= 3) return "hsl(145, 65%, 42%)";
  if (level <= 6) return "hsl(45, 93%, 47%)";
  return "hsl(0, 70%, 55%)";
};

const PhaseDialog = ({
  phase,
  open,
  onOpenChange,
}: {
  phase: Phase;
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) => {
  const { toast } = useToast();
  const [ime, setIme] = useState("");
  const [value, setValue] = useState<number[]>([5]);
  const level = value[0];
  const description = phase.scale[level];
  const color = useMemo(() => colorForLevel(level), [level]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ime.trim()) {
      toast({
        title: "Greška",
        description: "Molimo unesite Vaše ime.",
        variant: "destructive",
      });
      return;
    }

    const message = encodeURIComponent(
      `Zdravo Zorane, želim da zakažem termin.\n` +
        `Ime: ${ime.trim()}\n` +
        `Faza: ${phase.number} — ${phase.title}\n` +
        `Pitanje: ${phase.question}\n` +
        `Rezultat: ${level}/10 — ${description}`
    );

    window.open(`https://wa.me/381641494033?text=${message}`, "_blank");

    toast({
      title: "Dijagnostika poslata",
      description: `Faza ${phase.number} · ${level}/10 — ${description}`,
    });

    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-left">
            Faza {phase.number}: {phase.title}
          </DialogTitle>
          <DialogDescription className="text-left">{phase.question}</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5 pt-2">
          <div>
            <Label htmlFor={`ime-${phase.number}`} className="text-sm font-medium">
              Ime i prezime *
            </Label>
            <Input
              id={`ime-${phase.number}`}
              value={ime}
              onChange={(e) => setIme(e.target.value)}
              placeholder="Unesite vaše ime"
              className="mt-1"
              maxLength={100}
            />
          </div>

          <div>
            <div className="flex items-baseline justify-between mb-3">
              <Label className="text-sm font-medium">Dijagnostička skala (1–10)</Label>
              <span className="font-black text-2xl" style={{ color }}>
                {level}
              </span>
            </div>
            <Slider
              value={value}
              onValueChange={setValue}
              min={1}
              max={10}
              step={1}
              className="w-full fear-slider"
            />
            <div className="flex justify-between text-xs mt-2 text-muted-foreground">
              <span>1</span>
              <span>5</span>
              <span>10</span>
            </div>
            <div
              className="mt-4 p-3 rounded-lg border text-sm font-medium text-center"
              style={{ borderColor: color, color }}
            >
              {level} — {description}
            </div>
          </div>

          <DialogFooter className="gap-2 sm:gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="w-full sm:w-auto"
            >
              Otkaži
            </Button>
            <Button
              type="submit"
              className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold"
            >
              <Send className="w-4 h-4 mr-2" />
              Pošalji
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

const TrainingPhases = () => {
  const [openPhase, setOpenPhase] = useState<string | null>(null);

  return (
    <section className="py-16 md:py-20 bg-muted/30" id="faze">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              Faze <span className="text-primary">Obuke</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              Strukturiran put od straha do majstorstva
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {phases.map((phase) => (
              <Card
                key={phase.number}
                className="border-0 shadow-card bg-background flex flex-col"
              >
                <CardContent className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl ${phase.iconBg} flex items-center justify-center shrink-0`}
                    >
                      <phase.icon className={`w-6 h-6 ${phase.iconColor}`} />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center font-black shrink-0">
                      {phase.number}
                    </div>
                  </div>

                  <h3 className="font-black text-lg leading-tight">
                    FAZA {phase.number}: {phase.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{phase.subtitle}</p>

                  <p className="text-sm font-semibold text-muted-foreground mb-2">Sadržaj:</p>
                  <ul className="space-y-2 mb-4">
                    {phase.content.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 mt-auto border-t border-border/50 mb-5">
                    <p className="text-sm font-semibold text-muted-foreground mb-1">Ishod:</p>
                    <p className="text-sm font-medium text-foreground">{phase.outcome}</p>
                  </div>

                  <Button
                    className="w-full font-bold"
                    onClick={() => setOpenPhase(phase.number)}
                  >
                    Zakaži termin
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>

                <PhaseDialog
                  phase={phase}
                  open={openPhase === phase.number}
                  onOpenChange={(v) => setOpenPhase(v ? phase.number : null)}
                />
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingPhases;
