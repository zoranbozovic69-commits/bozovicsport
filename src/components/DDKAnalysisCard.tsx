import { ddkLevels, ddkLevelsEn, colorForLevel } from "@/data/ddkLevels";
import { useLanguage } from "@/contexts/LanguageContext";

interface Props {
  selectedLevel: number | null;
}

const DDKAnalysisCard = ({ selectedLevel }: Props) => {
  const { t, lang } = useLanguage();

  if (selectedLevel === null) {
    return (
      <div className="rounded-xl border-2 border-dashed border-border bg-muted/30 p-6 text-center">
        <p className="text-muted-foreground text-sm md:text-base">{t("ddkAnalysis.placeholder")}</p>
      </div>
    );
  }

  const source = lang === "en" ? ddkLevelsEn : ddkLevels;
  const data = source[selectedLevel - 1];
  const color = colorForLevel(selectedLevel);

  return (
    <div className="rounded-xl border bg-background shadow-card overflow-hidden animate-in fade-in slide-in-from-bottom-2 duration-300" style={{ borderColor: color }}>
      <div className="px-5 py-4 text-white" style={{ backgroundColor: color }}>
        <h4 className="text-lg md:text-xl font-black">
          {t("ddkAnalysis.title")} {selectedLevel}
        </h4>
      </div>
      <div className="p-5 space-y-4">
        <div>
          <p className="font-bold text-sm uppercase tracking-wide text-primary mb-1">{t("ddkAnalysis.meaningLabel")}</p>
          <p className="text-foreground/90 leading-relaxed text-sm md:text-base">{data.meaning}</p>
        </div>
        <div className="border-t border-border pt-4">
          <p className="font-bold text-sm uppercase tracking-wide text-primary mb-1">{t("ddkAnalysis.expertLabel")}</p>
          <p className="text-foreground/90 leading-relaxed text-sm md:text-base">{data.expert}</p>
        </div>
      </div>
    </div>
  );
};

export default DDKAnalysisCard;
