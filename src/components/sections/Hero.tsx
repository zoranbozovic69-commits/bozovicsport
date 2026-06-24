import { Button } from "@/components/ui/button";
import { GraduationCap, Award, Clock, FileCheck } from "lucide-react";
import treningPhoto from "@/assets/trening-bazen.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section className="relative min-h-screen gradient-hero overflow-hidden">
      <div
        className="absolute inset-0 opacity-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${treningPhoto})` }}
      />

      <div className="container mx-auto px-4 pt-28 pb-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-4 leading-tight text-primary-foreground">
            {t("hero.titlePart1")} <span className="text-accent">{t("hero.titlePart2")}</span> {t("hero.titlePart3")} <span className="text-accent">{t("hero.titlePart4")}</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-3xl mx-auto italic">
            {t("hero.subtitle")}
          </p>

          <Button
            size="lg"
            className="gradient-success text-lg px-10 py-7 shadow-success hover:scale-105 transition-transform font-bold mb-16"
            asChild
          >
            <a href="#kontakt">
              <FileCheck className="w-5 h-5 mr-2" />
              {t("hero.cta")}
            </a>
          </Button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { Icon: Award, title: t("hero.badge1Title"), sub: t("hero.badge1Sub") },
              { Icon: Clock, title: t("hero.badge2Title"), sub: t("hero.badge2Sub") },
              { Icon: GraduationCap, title: t("hero.badge3Title"), sub: t("hero.badge3Sub") },
            ].map(({ Icon, title, sub }, i) => (
              <div key={i} className="flex items-center justify-center gap-4 bg-white/10 backdrop-blur-sm p-5 rounded-xl border border-white/20">
                <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center">
                  <Icon className="w-7 h-7 text-accent" />
                </div>
                <div className="text-left">
                  <p className="font-bold text-primary-foreground text-lg">{title}</p>
                  <p className="text-sm text-primary-foreground/70">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24">
        <svg viewBox="0 0 1440 100" className="absolute bottom-0 w-full h-full text-background" preserveAspectRatio="none">
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
