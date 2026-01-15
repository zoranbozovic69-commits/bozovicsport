import { CheckCircle, Waves, Shield, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const phases = [
  {
    number: "1",
    title: "BAZIČNA ADAPTACIJA",
    subtitle: "Sesije 1-10",
    icon: Waves,
    content: ["Plutanje", "Disanje", "Klizanje", "Skok na noge"],
    outcome: "Eliminacija straha i bezbedan ulazak u vodu",
    bgColor: "bg-primary/5",
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    number: "2",
    title: "VERTIKALNA SIGURNOST",
    subtitle: "Nastavak obuke",
    icon: Shield,
    content: ["Održavanje na vodi (4+ minuta)", "Rad u dubini"],
    outcome: "Potpuna kontrola i sigurnost u dubokoj vodi",
    bgColor: "bg-accent/5",
    iconBg: "bg-accent/10",
    iconColor: "text-accent",
  },
  {
    number: "3",
    title: "PROPULZIJA I TEHNIKE",
    subtitle: "Usavršavanje",
    icon: Zap,
    content: ["Kretanje kroz vodu", "Kraul", "Prsno", "Leđno", "Delfin"],
    outcome: "Majstorstvo svih stilova plivanja",
    bgColor: "bg-secondary/5",
    iconBg: "bg-secondary/10",
    iconColor: "text-secondary",
  },
];

const TrainingPhases = () => {
  return (
    <section className="py-20 bg-muted/30" id="faze">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              Faze <span className="text-primary">Obuke</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Strukturiran put od straha do majstorstva
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {phases.map((phase, index) => (
              <Card key={index} className={`border-0 shadow-card ${phase.bgColor} relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-24 h-24 opacity-5">
                  <phase.icon className="w-full h-full" />
                </div>
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-2">
                    <div className={`w-12 h-12 rounded-xl ${phase.iconBg} flex items-center justify-center`}>
                      <phase.icon className={`w-6 h-6 ${phase.iconColor}`} />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center font-black text-lg">
                      {phase.number}
                    </div>
                  </div>
                  <CardTitle className="text-xl">
                    FAZA {phase.number}: {phase.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">{phase.subtitle}</p>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-muted-foreground mb-2">Sadržaj:</p>
                    <ul className="space-y-2">
                      {phase.content.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-4 border-t border-border/50">
                    <p className="text-sm font-semibold text-muted-foreground mb-1">Ishod:</p>
                    <p className="text-sm font-medium text-foreground">{phase.outcome}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingPhases;