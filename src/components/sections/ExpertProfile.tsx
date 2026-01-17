import { useState } from "react";
import { GraduationCap, Award, CheckCircle, X, ZoomIn } from "lucide-react";
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
  const [isLicenseOpen, setIsLicenseOpen] = useState(false);

  return (
    <>
      <section className="py-20 bg-muted/30" id="ekspert">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-black mb-4">
                Stručni <span className="text-primary">Profil</span>
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
                      Tvoj partner za preobražaj u vodi
                    </p>
                  </div>

                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <Award className="w-6 h-6 text-primary" />
                      <h4 className="text-lg font-bold">Zvanja i kvalifikacije</h4>
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
                      <h4 className="text-lg font-bold">Zvanična dozvola za rad</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      Licenca broj 0333 - Plivački Savez Srbije
                    </p>
                  </div>
                  <div className="p-3 md:p-6">
                    <div 
                      className="relative rounded-xl overflow-hidden border-[3px] border-slate-700 shadow-xl bg-white cursor-pointer group"
                      onClick={() => setIsLicenseOpen(true)}
                    >
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 rounded-full p-3 shadow-lg">
                          <ZoomIn className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                      <img 
                        src={licencaPhoto} 
                        alt="Licenca Plivačkog Saveza Srbije - Zoran Božović" 
                        className="w-full h-auto object-contain"
                      />
                    </div>
                    <p className="text-center text-xs text-muted-foreground mt-3">
                      Klikni za uvećanje • Zvanični dokument PSS
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Fullscreen License Modal */}
      {isLicenseOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setIsLicenseOpen(false)}
        >
          <button 
            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors"
            onClick={() => setIsLicenseOpen(false)}
          >
            <X className="w-6 h-6 text-white" />
          </button>
          <img 
            src={licencaPhoto} 
            alt="Licenca Plivačkog Saveza Srbije - Zoran Božović" 
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default ExpertProfile;
