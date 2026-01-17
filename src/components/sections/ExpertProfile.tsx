import { GraduationCap, Award, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import zoranPhoto from "@/assets/zoran-bazen.jpg";
import licencaPhoto from "@/assets/licenca-pss.jpg";

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
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              Ekspertski <span className="text-primary">Profil</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Profile Card */}
            <Card className="border-0 shadow-card overflow-hidden">
              <CardContent className="p-0">
                <div className="gradient-hero p-8 text-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-4 border-white/30 shadow-lg">
                    <img 
                      src={zoranPhoto} 
                      alt="Zoran Božović, MSc" 
                      className="w-full h-full object-cover object-top"
                    />
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
                        <span className="text-muted-foreground text-sm">{credential}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* License Card */}
            <Card className="border-0 shadow-card overflow-hidden">
              <CardContent className="p-0">
                <div className="p-6 bg-primary/5 border-b border-border">
                  <div className="flex items-center gap-3">
                    <GraduationCap className="w-6 h-6 text-primary" />
                    <h4 className="text-lg font-bold">Zvanična licenca PSS</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Licenca broj 0333 - Plivački Savez Srbije
                  </p>
                </div>
                <div className="p-6">
                  <div className="relative rounded-xl overflow-hidden border-4 border-primary/20 shadow-lg bg-white">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
                    <img 
                      src={licencaPhoto} 
                      alt="Licenca Plivačkog Saveza Srbije - Zoran Božović" 
                      className="w-full h-auto object-contain"
                      style={{ aspectRatio: '3/4', objectFit: 'cover', objectPosition: 'center' }}
                    />
                  </div>
                  <p className="text-center text-xs text-muted-foreground mt-3">
                    Zvanični dokument - Plivački Savez Srbije
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertProfile;
