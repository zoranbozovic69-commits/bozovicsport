import { Check, Clock, GraduationCap, Target, Shield, Heart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const prices = [
  { duration: "30 minuta", price: "2.000", popular: false },
  { duration: "45 minuta", price: "3.000", popular: true },
  { duration: "60 minuta", price: "4.000", popular: false },
];

const benefits = [
  {
    icon: GraduationCap,
    title: "Vođenje vrhunskog EKSPERTA",
    description: "Magistar sporta, licencirani trener (PSS br. 0333), dozvola Ministarstva prosvete",
  },
  {
    icon: Target,
    title: "100% Personalizovan Program",
    description: "Tvoj nivo, tvoj uzrast, tvoji ciljevi – sve je prilagođeno SAMO TEBI",
  },
  {
    icon: Shield,
    title: "Beskompromisna BEZBEDNOST",
    description: "Strogi protokoli, stalni nadzor, profesionalna oprema",
  },
  {
    icon: Heart,
    title: "Rezultati KOJI TRAJU CEO ŽIVOT",
    description: "Gradiš samopouzdanje, razvijaš ljubav prema vodi i stičeš životnu veštinu",
  },
];

const Pricing = () => {
  return (
    <section className="py-20 bg-muted/50" id="cenovnik">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            Cenovnik tvoje <span className="text-gradient-water">transformacije</span> u vodi
          </h2>
          <p className="text-xl text-muted-foreground">
            Investicija za tebe, tvoju slobodu i sigurnost je neprocenjiva!
          </p>
          <p className="text-sm text-muted-foreground mt-2">Cene važe od 1. jula 2025.</p>
        </div>

        {/* Price cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
          {prices.map((item, index) => (
            <Card 
              key={index} 
              className={`relative text-center ${item.popular ? 'border-2 border-primary shadow-card scale-105' : 'border shadow-lg'}`}
            >
              {item.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold">
                  Najpopularniji
                </div>
              )}
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{item.duration}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <span className="text-4xl font-black text-foreground">{item.price}</span>
                  <span className="text-muted-foreground ml-1">dinara</span>
                </div>
                <Button 
                  className={`w-full ${item.popular ? 'gradient-water shadow-button' : ''}`}
                  variant={item.popular ? 'default' : 'outline'}
                  asChild
                >
                  <a href="tel:+381641494033">Zakaži čas</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* What you get */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">
            Šta dobijaš svakim časom? Ne samo plivanje, već <span className="text-primary">ŽIVOTNU VEŠTINU!</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-4 bg-card p-6 rounded-lg shadow-lg">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">{benefit.title}</h4>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
