import { GraduationCap, Award, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const credentials = [
  "Doktorand sportskih nauka (u pripremi odbrane projekta doktorske disertacije)",
  "Master profesor fizičkog vaspitanja i kineziterapeut",
  "Operativni trener vaterpola",
  "Licencirani trener Plivačkog saveza Srbije (0333)",
  "Dozvola Ministarstva prosvete RS za rad sa decom i omladinom",
];

const ExpertProfile = () => {
  return (
    <section className="py-20 bg-muted/30" id="ekspert">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              Ekspertski <span className="text-primary">Profil</span>
            </h2>
          </div>

          <Card className="border-0 shadow-card overflow-hidden">
            <CardContent className="p-0">
              <div className="gradient-hero p-8 text-center">
                <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-4 border-4 border-white/30">
                  <GraduationCap className="w-12 h-12 text-primary-foreground" />
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-primary-foreground mb-2">
                  Zoran Božović, MSc
                </h3>
                <p className="text-primary-foreground/80">
                  Tvoj partner za transformaciju u vodi
                </p>
              </div>

              <div className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Award className="w-6 h-6 text-primary" />
                  <h4 className="text-lg font-bold">Akreditacije i kvalifikacije</h4>
                </div>

                <ul className="space-y-4">
                  {credentials.map((credential, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle className="w-4 h-4 text-accent" />
                      </div>
                      <span className="text-muted-foreground">{credential}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExpertProfile;