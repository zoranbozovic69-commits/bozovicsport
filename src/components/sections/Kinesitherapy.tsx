import { Activity, CheckCircle, Clock, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const specializations = [
  "Posturalnih deformiteta (kifoza, skolioza, lordoza)",
  "Hroničnih bolova (leđa, vrat, ramena, zglobovi)",
  "Oporavka posle povreda/operacija (rehabilitacija)",
];

const programIncludes = [
  "Ciljane vežbe snage za jačanje mišića i korekciju držanja",
  "Specijalizovane vežbe istezanja za fleksibilnost i mobilnost",
  "Savete za pravilno držanje i ergonomiju u svakodnevnom životu",
];

const Kinesitherapy = () => {
  return (
    <section className="py-20 bg-muted/50" id="kineziterapija">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-6">
              <Activity className="w-5 h-5" />
              <span className="font-semibold">Kineziterapija</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              Živi bez bola, <span className="text-gradient-water">pokreći se slobodno!</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Kao diplomirani kineziterapeut sa bogatim iskustvom, Zoran Božović te vodi ka životu bez ograničenja. 
              Pokret je lek, a mi ga prilagođavamo tebi!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6">Specijalizovani smo za rešavanje:</h3>
                <ul className="space-y-4">
                  {specializations.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-accent shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6">Program terapije uključuje:</h3>
                <ul className="space-y-4">
                  {programIncludes.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Working hours and locations */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-primary" />
                <h4 className="text-lg font-bold">Radno vreme</h4>
              </div>
              <div className="space-y-2 text-muted-foreground">
                <p>Ponedeljak - Petak: <strong className="text-foreground">09:00 - 12:00</strong></p>
                <p>Subota: <strong className="text-foreground">11:00 - 15:00</strong></p>
              </div>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-primary" />
                <h4 className="text-lg font-bold">Lokacije</h4>
              </div>
              <div className="space-y-3 text-muted-foreground">
                <p><strong className="text-foreground">No Limit Gym:</strong> Branka Bajića 11, Novi Sad</p>
                <p><strong className="text-foreground">Bazen Slana Bara:</strong> Sentandrejski put 106, Novi Sad</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Button size="lg" className="gradient-water shadow-button" asChild>
              <a href="tel:+381641494033">Zakaži kineziterapiju</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kinesitherapy;
