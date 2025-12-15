import { Button } from "@/components/ui/button";
import { Phone, Award, Users, Shield } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen gradient-hero overflow-hidden">
      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
        <svg
          viewBox="0 0 1440 120"
          className="absolute bottom-0 w-full h-full text-background animate-wave"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 pt-24 pb-40 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-8 animate-pulse-glow">
            <Award className="w-5 h-5" />
            <span className="font-semibold text-sm">JEDINA individualna škola plivanja u Novom Sadu sa 100% uspešnosti!</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            <span className="text-gradient-water">Božović Sport:</span>
            <br />
            <span className="text-foreground">Tvoj put do vode, zdravlja i samopouzdanja!</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Oseti Slobodu! Pobedi Strah od Vode za Samo <strong className="text-foreground">10 Časova</strong>. 
            <span className="text-primary font-bold"> GARANTOVANO!</span>
          </p>

          {/* New badge */}
          <div className="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg inline-block mb-10 shadow-gold">
            <p className="font-bold text-sm md:text-base">
              🆕 NOVO: Spremaš ispit iz plivanja? Potrebna ti je dozvola za čamac? Potrebna ti je kondiciona priprema?
              <br className="hidden md:block" />
              Božović Sport je tvoja stanica! Izdajemo Sertifikat o plivačkoj sposobnosti!
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="gradient-water text-lg px-8 py-6 shadow-button hover:scale-105 transition-transform"
              asChild
            >
              <a href="tel:+381641494033">
                <Phone className="w-5 h-5 mr-2" />
                Pozovi: +381 64 149 4033
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-all"
              asChild
            >
              <a href="#programi">Pogledaj Programe</a>
            </Button>
          </div>

          {/* Trust badges */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 bg-card p-4 rounded-lg shadow-card">
              <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center">
                <Award className="w-6 h-6 text-success" />
              </div>
              <div className="text-left">
                <p className="font-bold text-foreground">100% Uspešnost</p>
                <p className="text-sm text-muted-foreground">Preko 200 polaznika</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 bg-card p-4 rounded-lg shadow-card">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <p className="font-bold text-foreground">1 na 1 Pristup</p>
                <p className="text-sm text-muted-foreground">Individualna pažnja</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 bg-card p-4 rounded-lg shadow-card">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-secondary" />
              </div>
              <div className="text-left">
                <p className="font-bold text-foreground">25 Godina Iskustva</p>
                <p className="text-sm text-muted-foreground">Dokazana metodologija</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
