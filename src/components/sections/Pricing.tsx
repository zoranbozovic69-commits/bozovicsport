import { Clock, FileCheck, Activity } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const prices = [
  { 
    duration: "30 Minuta", 
    price: "2.000", 
    icon: Clock,
    popular: false 
  },
  { 
    duration: "45 Minuta", 
    price: "3.000", 
    icon: Clock,
    popular: true 
  },
  { 
    duration: "60 Minuta", 
    price: "4.000", 
    icon: Clock,
    popular: false 
  },
];

const additionalServices = [
  {
    title: "Sertifikat za čamac",
    description: "Zvanično ovlašćenje PSS",
    price: "2.000 RSD",
    icon: FileCheck,
  },
  {
    title: "Kineziterapija",
    description: "Kifoza, skolioza, bolna stanja",
    price: "Po dogovoru",
    icon: Activity,
  },
];

const Pricing = () => {
  return (
    <section className="py-20 bg-background" id="cenovnik">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              Cenovnik <span className="text-primary">Investicije</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Ulaganje u sigurnost i veštinu koja traje ceo život
            </p>
          </div>

          {/* Main price cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {prices.map((item, index) => (
              <Card 
                key={index} 
                className={`relative text-center border-2 transition-all ${
                  item.popular 
                    ? 'border-primary shadow-card scale-105 bg-primary/5' 
                    : 'border-border hover:border-primary/50'
                }`}
              >
                {item.popular && (
                  <Badge 
                    className="absolute -top-3 left-1/2 -translate-x-1/2 gradient-navy text-primary-foreground px-4 py-1 text-sm font-bold"
                  >
                    NAJPOPULARNIJE
                  </Badge>
                )}
                <CardHeader className="pb-2 pt-8">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-bold">{item.duration}</CardTitle>
                </CardHeader>
                <CardContent className="pb-8">
                  <div className="mb-6">
                    <span className="text-5xl font-black text-foreground">{item.price}</span>
                    <span className="text-muted-foreground ml-2">RSD</span>
                  </div>
                  <Button 
                    className={`w-full ${item.popular ? 'gradient-navy shadow-button' : ''}`}
                    variant={item.popular ? 'default' : 'outline'}
                    asChild
                  >
                    <a href="#kontakt">Zakaži čas</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional services */}
          <div className="grid md:grid-cols-2 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="border-0 shadow-card bg-muted/50">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg">{service.title}</h4>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-black text-xl text-primary">{service.price}</p>
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

export default Pricing;
