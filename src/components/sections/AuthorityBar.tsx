import logoPSS from "@/assets/logo-pss-new.png";
import logoFSFV from "@/assets/logo-fsfv-new.png";
import logoMinistarstvo from "@/assets/logo-ministarstvo-new.png";
import { useLanguage } from "@/contexts/LanguageContext";

const AuthorityBar = () => {
  const { t } = useLanguage();
  const authorities = [
    { logo: logoPSS, fullName: t("authority.a1") },
    { logo: logoFSFV, fullName: t("authority.a2") },
    { logo: logoMinistarstvo, fullName: t("authority.a3") },
  ];
  return (
    <section className="py-12 md:py-16 bg-white border-b border-border">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm text-muted-foreground font-semibold mb-10 uppercase tracking-wider">
          {t("authority.label")}
        </p>

        <div className="flex flex-col items-center gap-10 md:hidden">
          {authorities.map((authority, index) => (
            <div key={index} className="flex flex-col items-center text-center w-full">
              <div className="w-[60%] min-w-[180px] max-w-[280px] mb-4">
                <img src={authority.logo} alt={authority.fullName} className="w-full h-auto object-contain rounded-lg shadow-md" />
              </div>
              <p className="font-bold text-primary text-lg leading-tight max-w-[280px]">{authority.fullName}</p>
            </div>
          ))}
        </div>

        <div className="hidden md:flex items-start justify-center gap-16">
          {authorities.map((authority, index) => (
            <div key={index} className="flex flex-col items-center text-center max-w-[220px]">
              <div className="w-[180px] h-[120px] mb-4 flex items-center justify-center">
                <img src={authority.logo} alt={authority.fullName} className="max-w-full max-h-full object-contain rounded-lg shadow-md" />
              </div>
              <p className="font-bold text-primary text-base leading-tight">{authority.fullName}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuthorityBar;
