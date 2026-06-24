import { useState } from "react";
import { colorForLevel } from "@/data/ddkLevels";
import DDKAnalysisCard from "./DDKAnalysisCard";
import { useLanguage } from "@/contexts/LanguageContext";

const DDKFearScale = () => {
  const { t } = useLanguage();
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="space-y-6">
      <div className="text-center">
        <p className="text-sm md:text-base text-muted-foreground mb-4">{t("ddkScale.intro")}</p>
        <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
          {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => {
            const active = selected === n;
            const color = colorForLevel(n);
            return (
              <button
                key={n}
                type="button"
                onClick={() => setSelected(n)}
                aria-label={`${t("ddkScale.aria")} ${n}`}
                className={`aspect-square rounded-lg font-black text-lg md:text-xl border-2 transition-all ${
                  active ? "text-white scale-105 shadow-lg" : "bg-background text-foreground hover:scale-105"
                }`}
                style={{ borderColor: color, backgroundColor: active ? color : undefined }}
              >
                {n}
              </button>
            );
          })}
        </div>
        <div className="flex justify-between text-xs mt-2 px-1">
          <span className="text-green-600 font-medium">{t("ddkScale.low")}</span>
          <span className="text-yellow-600 font-medium">{t("ddkScale.mid")}</span>
          <span className="text-red-600 font-medium">{t("ddkScale.high")}</span>
        </div>
      </div>

      <DDKAnalysisCard selectedLevel={selected} />
    </div>
  );
};

export default DDKFearScale;
