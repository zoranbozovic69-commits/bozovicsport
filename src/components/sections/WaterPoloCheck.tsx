import { Waves, ClipboardCheck, Activity, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const checkPoints = [
  {
    icon: Waves,
    title: "Procena kretanja u vodi",
    description: "Analiza efikasnosti pokreta i položaja tela"
  },
  {
    icon: Activity,
    title: "Provera tehnike plivanja",
    description: "Evaluacija stilova i rada nogu"
  },
  {
    icon: ClipboardCheck,
    title: "Detekcija nepravilnosti",
    description: "Prepoznavanje disbalansa u razvoju mišića"
  },
  {
    icon: FileText,
    title: "DDK Izveštaj",
    description: "Zvanični izveštaj sa konkretnim savetima"
  }
];

const WaterPoloCheck = () => {
  return (
    <section className="py-20 bg-background" id="vaterpolo">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Waves className="w-4 h-4" />
              POSEBNA USLUGA
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              Provera za <span className="text-primary">Vaterpoliste</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stručna procena za mlade vaterpoliste — otkrijte potencijal i ispravite nedostatke pre nego što postanu problem
            </p>
          </div>

          <Card className="border-0 shadow-card overflow-hidden">
            <CardHeader className="gradient-navy p-8 text-center">
              <CardTitle className="text-2xl md:text-3xl font-black text-primary-foreground">
                Posebno ispitivanje za mlade vaterpoliste
              </CardTitle>
              <p className="text-primary-foreground/80 mt-2">
                Stručna procena kretanja u vodi, provera načina plivanja i rada nogu, prepoznavanje nepravilnosti u razvoju mišića uz zvanični DDK izveštaj sa savetima.
              </p>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                {checkPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-muted/50 rounded-xl">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <point.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">{point.title}</h4>
                      <p className="text-sm text-muted-foreground">{point.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <p className="text-lg font-bold text-muted-foreground mb-4">
                  Cena: <span className="text-primary text-2xl">4.000 RSD</span>
                </p>
                <Button 
                  size="lg" 
                  className="gradient-navy shadow-button text-lg px-8"
                  asChild
                >
                  <a href="#kontakt">Zakaži ispitivanje</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WaterPoloCheck;
