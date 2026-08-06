import { Dumbbell, Heart, Users, Award, ArrowRight, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";

const DDKAlumni = () => {
  const { t, lang } = useLanguage();
  const message = encodeURIComponent(t("alumni.waMessage"));

  const features = [
    { icon: Users, title: t("alumni.f1Title"), description: t("alumni.f1Desc") },
    { icon: Dumbbell, title: t("alumni.f2Title"), description: t("alumni.f2Desc") },
    { icon: Heart, title: t("alumni.f3Title"), description: t("alumni.f3Desc") },
  ];

  return (
    <section className="py-16 md:py-20 bg-muted/30" id="faza-4">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <Badge variant="secondary" className="mb-4 px-4 py-1.5 text-sm font-bold uppercase tracking-wider">
              {t("alumni.badge")}
            </Badge>
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              {t("alumni.title1")} <span className="text-primary">{t("alumni.title2")}</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              {t("alumni.subtitle")}
            </p>
          </div>

          <div className="grid lg:grid-cols-7 gap-6 lg:gap-8 items-start">
            <div className="lg:col-span-4 space-y-6">
              <div>
                <h3 className="text-xl md:text-2xl font-black mb-3">
                  {t("alumni.heading")}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t("alumni.body")}
                </p>
              </div>

              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-background rounded-xl border border-border/50 shadow-sm">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">
                        {feature.title}:{" "}
                        <span className="font-normal text-muted-foreground">
                          {feature.description}
                        </span>
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-3">
              <Card className="border-0 shadow-card bg-background overflow-hidden">
                <div className="gradient-navy p-6 text-center">
                  <Award className="w-8 h-8 text-primary-foreground mx-auto mb-3" />
                  <span className="block text-xs font-bold uppercase tracking-wider text-primary-foreground/80 mb-2">
                    {t("alumni.cardLabel")}
                  </span>
                  <h4 className="text-2xl font-black text-primary-foreground">
                    {t("alumni.cardTitle")}
                  </h4>
                </div>
                <CardContent className="p-6 text-center">
                  <p className="text-sm text-muted-foreground mb-4">
                    {t("alumni.cardSubtitle")}
                  </p>
                  <div className="bg-yellow-50 dark:bg-yellow-950/30 border border-yellow-200 dark:border-yellow-900/50 text-yellow-800 dark:text-yellow-200 rounded-lg p-3 text-xs mb-5">
                    {t("alumni.note")}
                  </div>
                  <Button
                    className="w-full font-bold bg-[#25D366] hover:bg-[#20BD5A] text-white"
                    asChild
                  >
                    <a
                      href={`https://wa.me/381641494033?text=${message}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      {t("alumni.cta")}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DDKAlumni;
