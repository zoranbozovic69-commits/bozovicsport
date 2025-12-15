import { GraduationCap, Award, Brain, Star, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const credentials = [
  "Master profesor fizičkog vaspitanja i sporta",
  "Diplomirani kineziterapeut",
  "Licencirani trener Plivačkog saveza Srbije (licenca 0333)",
  "Operativni trener vaterpola",
  "Doktorand (u pripremi odbrane projekta doktorske teze)",
  "Zvanična dozvola Ministarstva prosvete i sporta RS",
];

const achievements = [
  { value: "25", label: "godina kontinuiranog rada" },
  { value: "200+", label: "uspešnih polaznika" },
  { value: "100%", label: "stopa uspešnosti" },
];

const About = () => {
  return (
    <section className="py-20 bg-background" id="o-nama">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              Zoran Božović – <span className="text-gradient-water">tvoj partner</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Za životnu transformaciju u vodi i kroz pokret!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <GraduationCap className="w-8 h-8 text-primary" />
                  <h3 className="text-xl font-bold">VRHUNSKA STRUČNOST</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Jedini instruktor u Novom Sadu sa kompletnom akreditacijom i diplomama:
                </p>
                <ul className="space-y-3">
                  {credentials.map((credential, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-success shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{credential}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Brain className="w-8 h-8 text-accent" />
                  <h3 className="text-xl font-bold">REVOLUCIONARNA METODOLOGIJA</h3>
                </div>
                <ul className="space-y-4">
                  <li>
                    <h4 className="font-semibold text-foreground mb-1">Neuro-pedagoški pristup</h4>
                    <p className="text-sm text-muted-foreground">Razvijen tokom 25 godina – optimizacija učenja pokreta i savladavanje prepreka.</p>
                  </li>
                  <li>
                    <h4 className="font-semibold text-foreground mb-1">Individualna dijagnostika</h4>
                    <p className="text-sm text-muted-foreground">Precizno prilagođavanje obuke/terapije samo tebi!</p>
                  </li>
                  <li>
                    <h4 className="font-semibold text-foreground mb-1">Postupno građenje samopouzdanja</h4>
                    <p className="text-sm text-muted-foreground">Bez forsiranja, bazirano na pozitivnim iskustvima.</p>
                  </li>
                  <li>
                    <h4 className="font-semibold text-foreground mb-1">Naučno dokazane tehnike</h4>
                    <p className="text-sm text-muted-foreground">Efikasno prevazilaženje straha u vodi i korekcija pokreta.</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Achievements */}
          <div className="grid grid-cols-3 gap-6">
            {achievements.map((item, index) => (
              <div key={index} className="text-center bg-muted/50 p-6 rounded-xl">
                <p className="text-4xl font-black text-primary mb-1">{item.value}</p>
                <p className="text-sm text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-card rounded-xl shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Star className="w-6 h-6 text-gold" />
              <h4 className="font-bold">PRIZNANJA I REZULTATI</h4>
            </div>
            <ul className="grid md:grid-cols-2 gap-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Award className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>Najtraženiji instruktor/terapeut u regionu</span>
              </li>
              <li className="flex items-start gap-2">
                <Award className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>SPECIJALIST ZA „TEŠKE SLUČAJEVE"</span>
              </li>
              <li className="flex items-start gap-2">
                <Award className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>PIONIR INDIVIDUALNOG PRISTUPA u Srbiji</span>
              </li>
              <li className="flex items-start gap-2">
                <Award className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>25 godina kontinuiranog rada bez prekida</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
