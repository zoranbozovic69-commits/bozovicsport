import { Award, FileCheck, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Certificates = () => {
  return (
    <section className="py-20 bg-background" id="sertifikati">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            Potvrda tvojih <span className="text-gradient-water">uspeha</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            U Božović Sportu, svaki tvoj korak napred zaslužuje priznanje!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="border-0 shadow-lg relative overflow-hidden">
            <Badge className="absolute top-4 right-4 gradient-gold text-secondary-foreground">NOVO!</Badge>
            <CardContent className="p-8">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <FileCheck className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Sertifikat o plivačkoj sposobnosti za dozvolu za čamac</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Shield className="w-5 h-5 text-success shrink-0 mt-0.5" />
                  <span>Zvanično ovlašćen za izdavanje kao diplomirani kineziterapeut i licencirani instruktor plivanja</span>
                </li>
                <li className="flex items-start gap-2">
                  <Shield className="w-5 h-5 text-success shrink-0 mt-0.5" />
                  <span>Neophodan dokument za dobijanje dozvole za upravljanje čamcem u Srbiji</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-xl font-bold mb-4">Diplome za savladane nivoe plivanja</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Award className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <span>Diploma o osnovama plivanja</span>
                </li>
                <li className="flex items-start gap-2">
                  <Award className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <span>Diploma o održavanju na vodi</span>
                </li>
                <li className="flex items-start gap-2">
                  <Award className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <span>Diploma o naprednim tehnikama plivanja</span>
                </li>
              </ul>
              <p className="text-sm text-muted-foreground mt-4 bg-muted p-3 rounded-lg">
                Ove diplome su potvrda tvojih veština i inspiracija za nove izazove u vodi!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
