import { GraduationCap, Target, Gauge, ClipboardList, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const prepPoints = [
  {
    icon: ClipboardList,
    title: "Analiza standarda",
    description: "Detaljna provera zahteva konkretnog fakulteta (FSFV i dr.)"
  },
  {
    icon: Gauge,
    title: "Tehnička optimizacija",
    description: "Fokus na ekonomičnost pokreta i brzinu, uz otklanjanje grešaka u stilu"
  },
  {
    icon: Target,
    title: "Simulacija ispita",
    description: "Testiranje pod kontrolisanim uslovima radi stabilizacije psihološkog profila kandidata"
  },
  {
    icon: FileText,
    title: "DDK izveštaj o spremnosti",
    description: "Analiza trenutnog nivoa i prognoza napretka neophodna za siguran prolazak na prijemnom"
  }
];

const UniversityPrep = () => {
  return (
    <section className="py-20 bg-muted/30" id="prijemni">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <GraduationCap className="w-4 h-4" />
              POSEBNA USLUGA
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              Priprema za <span className="text-primary">Prijemne Ispite</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-2">
              Fakulteti i sportske akademije
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Sistematska priprema za buduće profesionalce.
            </p>
          </div>

          <Card className="border-0 shadow-card overflow-hidden">
            <CardHeader className="gradient-navy p-8 text-center">
              <CardTitle className="text-2xl md:text-3xl font-black text-primary-foreground">
                Priprema za prijemne ispite (FSFV i dr.)
              </CardTitle>
              <p className="text-primary-foreground/80 mt-2">
                Ne prepuštajte upis na fakultet slučaju. Naša metodologija osigurava da tehničku normu plivanja ispunite sa maksimalnim brojem bodova, uz korekciju svih biomehaničkih nedostataka koji mogu uticati na vašu ocenu.
              </p>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                {prepPoints.map((point, index) => (
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
                <p className="text-lg font-bold text-muted-foreground mb-1">
                  Cena: <span className="text-primary text-2xl">4.000 RSD</span> po konsultaciji
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  Paketi pripreme po dogovoru
                </p>
                <Button
                  size="lg"
                  className="gradient-navy shadow-button text-lg px-8"
                  asChild
                >
                  <a href="#kontakt">Zakaži konsultaciju</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default UniversityPrep;
