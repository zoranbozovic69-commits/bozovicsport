import { Trophy, Target, Brain, Medal } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const reasons = [
  {
    icon: Trophy,
    title: "NULTA STOPA NEUSPEHA!",
    description: "Preko 200 polaznika – SVI SU PROPLIVALI! Dok drugi pokušavaju, mi GARANTUJEMO rezultat. Tvoje poverenje je naša svetinja.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: Target,
    title: "REVOLUCIONARNI 1 NA 1 PRISTUP",
    description: "Sva pažnja je samo TVOJA! Nema čekanja, nema gubljenja vremena. Božović Sport se posvećuje ISKLJUČIVO tebi, osiguravajući najbrži napredak.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Brain,
    title: "NAUČNO DOKAZANA METODOLOGIJA",
    description: "Naš neuro-pedagoški pristup, brušen 25 godina, ne uči samo pokrete. On reprogramira tvoj mozak – paniku zamenjuje mirom, a oklevanje trajnom ljubavlju prema vodi.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Medal,
    title: "NENADMAŠNA EKSPERTIZA",
    description: "Od Plivačkog saveza, preko Ministarstva prosvete, do akademskih titula – Zoran Božović je JEDINI instruktor u Novom Sadu sa ovakvim nivoom priznanja i znanja.",
    color: "text-gold",
    bgColor: "bg-gold/10",
  },
];

const WhyUs = () => {
  return (
    <section className="py-20 bg-background" id="zasto-mi">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            Zašto <span className="text-gradient-water">Božović Sport</span> menja pravila igre?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Zaboravi na „možda" i „pokušaću". Mi ne radimo sa grupama gde si samo broj. 
            Mi radimo samo sa <strong className="text-foreground">TOBOM</strong>. Evo zašto smo NEUPOREDIVI:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg"
            >
              <CardContent className="p-8">
                <div className={`w-16 h-16 rounded-2xl ${reason.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <reason.icon className={`w-8 h-8 ${reason.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
