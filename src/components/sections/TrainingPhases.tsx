import { useMemo, useState } from "react";
import { CheckCircle, Waves, Shield, Zap, ArrowRight, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

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
  scale: string[];
};

const colorForLevel = (level: number) => {
  if (level <= 3) return "hsl(145, 65%, 42%)";
  if (level <= 6) return "hsl(45, 93%, 47%)";
  return "hsl(0, 70%, 55%)";
};

const PhaseDialog = ({ phase, open, onOpenChange }: { phase: Phase; open: boolean; onOpenChange: (v: boolean) => void; }) => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [value, setValue] = useState<number[]>([5]);
  const level = value[0];
  const description = phase.scale[level - 1];
  const color = useMemo(() => colorForLevel(level), [level]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      toast({ title: t("phases.errorTitle"), description: t("phases.errorName"), variant: "destructive" });
      return;
    }
    const message = encodeURIComponent(
      `${t("phases.waGreeting")}\n` +
      `${t("phases.waName")}: ${name.trim()}\n` +
      `${t("phases.waPhase")}: ${phase.number} — ${phase.title}\n` +
      `${t("phases.waQuestion")}: ${phase.question}\n` +
      `${t("phases.waResult")}: ${level}/10 — ${description}`
    );
    window.open(`https://wa.me/381641494033?text=${message}`, "_blank");
    toast({ title: t("phases.toastTitle"), description: `${t("phases.waPhase")} ${phase.number} · ${level}/10 — ${description}` });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-left">{t("phases.waPhase")} {phase.number}: {phase.title}</DialogTitle>
          <DialogDescription className="text-left">{phase.question}</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5 pt-2">
          <div>
            <Label htmlFor={`name-${phase.number}`} className="text-sm font-medium">{t("phases.nameLabel")}</Label>
            <Input id={`name-${phase.number}`} value={name} onChange={(e) => setName(e.target.value)} placeholder={t("phases.namePlaceholder")} className="mt-1" maxLength={100} />
          </div>

          <div>
            <div className="flex items-baseline justify-between mb-3">
              <Label className="text-sm font-medium">{t("phases.scaleLabel")}</Label>
              <span className="font-black text-2xl" style={{ color }}>{level}</span>
            </div>
            <Slider value={value} onValueChange={setValue} min={1} max={10} step={1} className="w-full fear-slider" />
            <div className="flex justify-between text-xs mt-2 text-muted-foreground">
              <span>1</span><span>5</span><span>10</span>
            </div>
            <div className="mt-4 p-3 rounded-lg border text-sm font-medium text-center" style={{ borderColor: color, color }}>
              {level} — {description}
            </div>
          </div>

          <DialogFooter className="gap-2 sm:gap-2">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)} className="w-full sm:w-auto">{t("phases.cancel")}</Button>
            <Button type="submit" className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold">
              <Send className="w-4 h-4 mr-2" />
              {t("phases.send")}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

const TrainingPhases = () => {
  const { t } = useLanguage();
  const [openPhase, setOpenPhase] = useState<string | null>(null);

  const phases: Phase[] = [
    {
      number: "1", title: t("phases.p1Title"), subtitle: t("phases.p1Sub"), icon: Waves,
      content: t("phases.p1Content"), outcome: t("phases.p1Outcome"),
      iconBg: "bg-primary/10", iconColor: "text-primary",
      question: t("phases.p1Question"), scale: t("phases.p1Scale"),
    },
    {
      number: "2", title: t("phases.p2Title"), subtitle: t("phases.p2Sub"), icon: Shield,
      content: t("phases.p2Content"), outcome: t("phases.p2Outcome"),
      iconBg: "bg-accent/10", iconColor: "text-accent",
      question: t("phases.p2Question"), scale: t("phases.p2Scale"),
    },
    {
      number: "3", title: t("phases.p3Title"), subtitle: t("phases.p3Sub"), icon: Zap,
      content: t("phases.p3Content"), outcome: t("phases.p3Outcome"),
      iconBg: "bg-secondary/10", iconColor: "text-secondary",
      question: t("phases.p3Question"), scale: t("phases.p3Scale"),
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-muted/30" id="faze">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              {t("phases.title1")} <span className="text-primary">{t("phases.title2")}</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">{t("phases.subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {phases.map((phase) => (
              <Card key={phase.number} className="border-0 shadow-card bg-background flex flex-col">
                <CardContent className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-xl ${phase.iconBg} flex items-center justify-center shrink-0`}>
                      <phase.icon className={`w-6 h-6 ${phase.iconColor}`} />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center font-black shrink-0">
                      {phase.number}
                    </div>
                  </div>

                  <h3 className="font-black text-lg leading-tight">
                    {t("phases.waPhase")} {phase.number}: {phase.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{phase.subtitle}</p>

                  <p className="text-sm font-semibold text-muted-foreground mb-2">{t("phases.contentLabel")}</p>
                  <ul className="space-y-2 mb-4">
                    {phase.content.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 mt-auto border-t border-border/50 mb-5">
                    <p className="text-sm font-semibold text-muted-foreground mb-1">{t("phases.outcomeLabel")}</p>
                    <p className="text-sm font-medium text-foreground">{phase.outcome}</p>
                  </div>

                  <Button className="w-full font-bold" onClick={() => setOpenPhase(phase.number)}>
                    {t("phases.schedule")}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>

                <PhaseDialog phase={phase} open={openPhase === phase.number} onOpenChange={(v) => setOpenPhase(v ? phase.number : null)} />
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingPhases;
