import { CheckCircle, Waves, Shield, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const phases = [
  {
    number: "1",
    title: "BAZIČNA ADAPTACIJA",
    subtitle: "Sesije 1-10",
    icon: Waves,
    content: ["Plutanje", "Disanje", "Klizanje", "Skok na noge"],
    outcome: "Eliminacija straha i bezbedan ulazak u vodu",
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
    iconBg: "bg-secondary/10",
    iconColor: "text-secondary",
  },
];

const TrainingPhases = () => {
  return (
    <section className="py-16 md:py-20 bg-muted/30" id="faze">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              Faze <span className="text-primary">Obuke</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              Strukturiran put od straha do majstorstva — kliknite na fazu za detalje
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {phases.map((phase, index) => (
              <AccordionItem
                key={index}
                value={`phase-${phase.number}`}
                className="border-0 shadow-card rounded-xl bg-background overflow-hidden"
              >
                <AccordionTrigger className="px-4 md:px-6 py-4 hover:no-underline">
                  <div className="flex items-center gap-3 md:gap-4 text-left">
                    <div className={`w-11 h-11 md:w-12 md:h-12 rounded-xl ${phase.iconBg} flex items-center justify-center shrink-0`}>
                      <phase.icon className={`w-5 h-5 md:w-6 md:h-6 ${phase.iconColor}`} />
                    </div>
                    <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-foreground text-background flex items-center justify-center font-black shrink-0">
                      {phase.number}
                    </div>
                    <div className="min-w-0">
                      <p className="font-bold text-sm md:text-base leading-tight">
                        FAZA {phase.number}: {phase.title}
                      </p>
                      <p className="text-xs md:text-sm text-muted-foreground font-normal">
                        {phase.subtitle}
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 md:px-6 pb-6">
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
                  <div className="pt-4 border-t border-border/50 mb-5">
                    <p className="text-sm font-semibold text-muted-foreground mb-1">Ishod:</p>
                    <p className="text-sm font-medium text-foreground">{phase.outcome}</p>
                  </div>
                  <Button asChild className="w-full font-bold">
                    <a href="#kontakt">
                      Zakaži početak ove faze
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default TrainingPhases;
