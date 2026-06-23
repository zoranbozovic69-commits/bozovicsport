import { Button } from "@/components/ui/button";
import { GraduationCap, Award, Clock, FileCheck } from "lucide-react";
import treningPhoto from "@/assets/trening-bazen.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen gradient-hero overflow-hidden">
      {/* Background image overlay */}
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${treningPhoto})` }}
      />
      
      <div className="container mx-auto px-4 pt-28 pb-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-4 leading-tight text-primary-foreground">
            PREDVIDLJIV USPEH. <span className="text-accent">GARANTOVANA KONTROLA.</span> Pobedi strah od vode za 10x60min – <span className="text-accent">GARANTOVANO!</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-3xl mx-auto italic">
            Stručni nadzor: Dijagnostika, motorika, analiza napretka.
          </p>

          {/* CTA Button */}
          <Button 
            size="lg" 
            className="gradient-success text-lg px-10 py-7 shadow-success hover:scale-105 transition-transform font-bold mb-16"
            asChild
          >
            <a href="#kontakt">
              <FileCheck className="w-5 h-5 mr-2" />
              ZAKAŽI DDK DIJAGNOSTIKU
            </a>
          </Button>

          {/* Trust badges */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 bg-white/10 backdrop-blur-sm p-5 rounded-xl border border-white/20">
              <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center">
                <Award className="w-7 h-7 text-accent" />
              </div>
              <div className="text-left">
                <p className="font-bold text-primary-foreground text-lg">100% Uspešnost</p>
                <p className="text-sm text-primary-foreground/70">Nula neuspešnih slučajeva</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4 bg-white/10 backdrop-blur-sm p-5 rounded-xl border border-white/20">
              <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center">
                <Clock className="w-7 h-7 text-accent" />
              </div>
              <div className="text-left">
                <p className="font-bold text-primary-foreground text-lg">25 Godina iskustva</p>
                <p className="text-sm text-primary-foreground/70">20.000+ Časova</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4 bg-white/10 backdrop-blur-sm p-5 rounded-xl border border-white/20">
              <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-accent" />
              </div>
              <div className="text-left">
                <p className="font-bold text-primary-foreground text-lg">MSc + Doktorand</p>
                <p className="text-sm text-primary-foreground/70">Operativni trener vaterpola</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-24">
        <svg
          viewBox="0 0 1440 100"
          className="absolute bottom-0 w-full h-full text-background"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,50L60,45C120,40,240,30,360,35C480,40,600,60,720,65C840,70,960,60,1080,50C1200,40,1320,30,1380,25L1440,20L1440,100L1380,100C1320,100,1200,100,1080,100C960,100,840,100,720,100C600,100,480,100,360,100C240,100,120,100,60,100L0,100Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
