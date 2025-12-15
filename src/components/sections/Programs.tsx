import { Check, Award, Waves, Dumbbell, GraduationCap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const programs = [
  {
    icon: Waves,
    title: "OSNOVE PLIVANJA",
    subtitle: "Pobedite strah i osetite vodu!",
    goal: "Garantovano savladavanje osnova i prevazilaženje straha.",
    features: [
      "Plutanje – neka te voda nosi!",
      "Pravilno disanje – ključ za mir i kontrolu",
      "Klizanje – prvi metri bez napora",
      "Siguran skok – bezbrižno ulazi u vodu!",
    ],
    duration: "10 časova (10 x 30 min)",
    price: "20.000",
    package: true,
    diploma: "Diploma o osnovama plivanja!",
    location: "Minakva Fitnes ili Slana Bara",
  },
  {
    icon: Award,
    title: "ODRŽAVANJE I IZDRŽLJIVOST",
    subtitle: "Sigurnost u dubokoj vodi!",
    goal: "Postani majstor duboke vode – bez straha, sa punom kontrolom!",
    features: [
      "Održavanje na vodi 4+ minuta",
      "Potpuna kontrola u dubini",
      "Prevazilaženje preostalog straha – zauvek!",
    ],
    duration: "Prilagođeno tebi",
    price: "2.000",
    package: false,
    diploma: "Diploma o održavanju na vodi!",
    location: "Minakva Fitnes",
  },
  {
    icon: Dumbbell,
    title: "TEHNIKE PLIVANJA",
    subtitle: "Postani majstor stila!",
    goal: "Savladaj sve stilove i plivaj elegantno i efikasno!",
    features: [
      "KRAUL, LEĐNO, PRSNO, DELFIN – svi stilovi su tvoji!",
      "Plivanje 50+ metara – bez umora!",
      "Pravilna tehnika – plivaj kao profesionalac",
    ],
    duration: "Tvoj tempo, tvoji ciljevi",
    price: "2.000",
    package: false,
    diploma: "Diploma o naprednim tehnikama plivanja!",
    location: "Slana Bara",
  },
  {
    icon: GraduationCap,
    title: "ISPITI I SPORTSKE PRIPREME",
    subtitle: "Tvoja vrata u sport!",
    goal: "Priprema za ispite ili poboljšanje kondicije",
    features: [
      "Za studente: Ciljane pripreme za ispit iz plivanja",
      "Kondicione pripreme za decu i odrasle",
      "Povećaj izdržljivost, snagu i brzinu!",
      "Individualni programi prilagođeni sportskim ciljevima",
    ],
    duration: "Prilagođeno potrebama",
    price: "Po dogovoru",
    package: false,
    isNew: true,
    location: "Slana Bara / otvoreni prostori",
  },
];

const Programs = () => {
  return (
    <section className="py-20 bg-background" id="programi">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            Tvoj Program – <span className="text-gradient-water">tvoj put</span> do vode!
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Bilo da si potpuni početnik, želiš da usavršiš tehniku, ili se spremaš za sportsku karijeru – imamo program koji te vodi do cilja!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {programs.map((program, index) => (
            <Card key={index} className="relative overflow-hidden border-0 shadow-lg hover:shadow-card transition-all duration-300">
              {program.isNew && (
                <Badge className="absolute top-4 right-4 gradient-gold text-secondary-foreground">
                  NOVO!
                </Badge>
              )}
              {program.package && (
                <Badge className="absolute top-4 right-4 bg-success text-success-foreground">
                  PAKET
                </Badge>
              )}
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <program.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{program.title}</CardTitle>
                    <p className="text-muted-foreground">{program.subtitle}</p>
                  </div>
                </div>
                <p className="text-sm bg-muted/50 p-3 rounded-lg">
                  <strong>Cilj:</strong> {program.goal}
                </p>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold mb-3">Šta učiš:</h4>
                <ul className="space-y-2 mb-6">
                  {program.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-success shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="space-y-2 text-sm border-t pt-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Trajanje:</span>
                    <span className="font-semibold">{program.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Cena:</span>
                    <span className="font-bold text-primary">
                      {program.package ? `${program.price} din (paket)` : `${program.price} din/30 min`}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Lokacija:</span>
                    <span className="font-semibold">{program.location}</span>
                  </div>
                  {program.diploma && (
                    <div className="flex items-center gap-2 mt-3 p-2 bg-gold/10 rounded-lg">
                      <Award className="w-4 h-4 text-gold" />
                      <span className="text-sm font-medium">{program.diploma}</span>
                    </div>
                  )}
                </div>

                <Button className="w-full mt-6 gradient-water shadow-button" asChild>
                  <a href="tel:+381641494033">Zakaži konsultaciju</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
