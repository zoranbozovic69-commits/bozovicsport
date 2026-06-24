import { Waves, ClipboardCheck, Activity, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const WaterPoloCheck = () => {
  const { t } = useLanguage();
  const checkPoints = [
    { icon: Waves, title: t("waterpolo.p1")[0], description: t("waterpolo.p1")[1] },
    { icon: Activity, title: t("waterpolo.p2")[0], description: t("waterpolo.p2")[1] },
    { icon: ClipboardCheck, title: t("waterpolo.p3")[0], description: t("waterpolo.p3")[1] },
    { icon: FileText, title: t("waterpolo.p4")[0], description: t("waterpolo.p4")[1] },
  ];

  return (
    <section className="py-20 bg-background" id="vaterpolo">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Waves className="w-4 h-4" />
              {t("waterpolo.badge")}
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              {t("waterpolo.title1")} <span className="text-primary">{t("waterpolo.title2")}</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("waterpolo.subtitle")}</p>
          </div>

          <Card className="border-0 shadow-card overflow-hidden">
            <CardHeader className="gradient-navy p-8 text-center">
              <CardTitle className="text-2xl md:text-3xl font-black text-primary-foreground">{t("waterpolo.cardTitle")}</CardTitle>
              <p className="text-primary-foreground/80 mt-2">{t("waterpolo.cardSubtitle")}</p>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                {checkPoints.map((point, index) => (
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
                <p className="text-lg font-bold text-muted-foreground mb-4">
                  {t("waterpolo.price")} <span className="text-primary text-2xl">4.000 RSD</span>
                </p>
                <Button size="lg" className="gradient-navy shadow-button text-lg px-8" asChild>
                  <a href="#kontakt">{t("waterpolo.cta")}</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WaterPoloCheck;
