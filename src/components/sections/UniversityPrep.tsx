import { GraduationCap, Target, Gauge, ClipboardList, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const UniversityPrep = () => {
  const { t } = useLanguage();
  const prepPoints = [
    { icon: ClipboardList, title: t("university.p1")[0], description: t("university.p1")[1] },
    { icon: Gauge, title: t("university.p2")[0], description: t("university.p2")[1] },
    { icon: Target, title: t("university.p3")[0], description: t("university.p3")[1] },
    { icon: FileText, title: t("university.p4")[0], description: t("university.p4")[1] },
  ];

  return (
    <section className="py-20 bg-muted/30" id="prijemni">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <GraduationCap className="w-4 h-4" />
              {t("university.badge")}
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              {t("university.title1")} <span className="text-primary">{t("university.title2")}</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-2">{t("university.sub1")}</p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("university.sub2")}</p>
          </div>

          <Card className="border-0 shadow-card overflow-hidden">
            <CardHeader className="gradient-navy p-8 text-center">
              <CardTitle className="text-2xl md:text-3xl font-black text-primary-foreground">{t("university.cardTitle")}</CardTitle>
              <p className="text-primary-foreground/80 mt-2">{t("university.cardSubtitle")}</p>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                {prepPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-muted/50 rounded-xl">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <point.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">{point.title}</h4>
                      <p className="text-sm text-muted-foreground">{point.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <p className="text-lg font-bold text-muted-foreground mb-1">
                  <span className="text-primary text-2xl">5.000 RSD</span> {t("university.priceLine")}
                </p>
                <p className="text-sm text-muted-foreground mb-4">{t("university.packages")}</p>
                <Button size="lg" className="gradient-navy shadow-button text-lg px-8" asChild>
                  <a href="#kontakt">{t("university.cta")}</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default UniversityPrep;
