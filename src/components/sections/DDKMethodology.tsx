import { useState, useEffect, useRef } from "react";
import { TrendingDown, TrendingUp, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { useLanguage } from "@/contexts/LanguageContext";

const chartDataBase = [
  { session: 1, fearVal: 10, skillVal: 1 },
  { session: 2, fearVal: 9, skillVal: 2 },
  { session: 3, fearVal: 7, skillVal: 3 },
  { session: 4, fearVal: 5, skillVal: 4 },
  { session: 5, fearVal: 4, skillVal: 5 },
  { session: 6, fearVal: 3, skillVal: 6 },
  { session: 7, fearVal: 2, skillVal: 7 },
  { session: 8, fearVal: 1.5, skillVal: 8 },
  { session: 9, fearVal: 1.2, skillVal: 8.5 },
  { session: 10, fearVal: 1, skillVal: 9 },
];

const DDKMethodology = () => {
  const { t } = useLanguage();
  const fearLabel = t("methodology.fearLine");
  const skillLabel = t("methodology.skillLine");

  const chartData = chartDataBase.map((d) => ({
    session: d.session,
    [fearLabel]: d.fearVal,
    [skillLabel]: d.skillVal,
  }));

  const [isVisible, setIsVisible] = useState(false);
  const [animatedData, setAnimatedData] = useState<typeof chartData>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !isVisible) setIsVisible(true);
    }, { threshold: 0.3 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (isVisible) {
      setAnimatedData([]);
      chartData.forEach((point, index) => {
        setTimeout(() => setAnimatedData((prev) => [...prev, point]), index * 200);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible, fearLabel, skillLabel]);

  return (
    <section className="py-20 bg-background" id="metodologija" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black mb-4 text-foreground">
              {t("methodology.titlePart1")} <span className="text-primary">{t("methodology.titlePart2")}</span>
            </h2>
            <p className="text-lg text-muted-foreground">{t("methodology.subtitle")}</p>
          </div>

          <Card className="mb-12 shadow-card border-0">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-xl font-bold mb-6 text-center">{t("methodology.chartTitle")}</h3>
              <div className="h-[300px] md:h-[350px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={animatedData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="session" label={{ value: t("methodology.xLabel"), position: 'insideBottom', offset: -5 }} stroke="hsl(var(--muted-foreground))" domain={[1, 10]} />
                    <YAxis domain={[0, 10]} label={{ value: t("methodology.yLabel"), angle: -90, position: 'insideLeft' }} stroke="hsl(var(--muted-foreground))" />
                    <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: '8px' }} />
                    <Legend />
                    <Line type="monotone" dataKey={fearLabel} stroke="hsl(0, 70%, 55%)" strokeWidth={3} dot={{ fill: 'hsl(0, 70%, 55%)', strokeWidth: 2, r: 4 }} isAnimationActive animationDuration={500} />
                    <Line type="monotone" dataKey={skillLabel} stroke="hsl(145, 65%, 42%)" strokeWidth={3} dot={{ fill: 'hsl(145, 65%, 42%)', strokeWidth: 2, r: 4 }} isAnimationActive animationDuration={500} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-0 shadow-card bg-red-50 dark:bg-red-950/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                    <TrendingDown className="w-6 h-6 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{t("methodology.fearCardTitle")}</h4>
                    <p className="text-muted-foreground text-sm">{t("methodology.cardCycle")}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-3xl font-black text-red-600">100%</span>
                  <Target className="w-6 h-6 text-muted-foreground" />
                  <span className="text-3xl font-black text-accent">10%</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">{t("methodology.fearGoal")}</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card bg-green-50 dark:bg-green-950/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{t("methodology.skillCardTitle")}</h4>
                    <p className="text-muted-foreground text-sm">{t("methodology.cardCycle")}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-3xl font-black text-muted-foreground">0%</span>
                  <Target className="w-6 h-6 text-muted-foreground" />
                  <span className="text-3xl font-black text-accent">90%</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">{t("methodology.skillGoal")}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DDKMethodology;
