import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const StickyWhatsApp = () => {
  const { t } = useLanguage();
  const handleClick = () => {
    window.open("https://wa.me/381641494033?text=" + encodeURIComponent(t("sticky.msg")), "_blank");
  };
  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-[#25D366] shadow-lg hover:scale-110 transition-all duration-300 flex items-center justify-center group"
      aria-label={t("sticky.label")}
    >
      <MessageCircle className="w-8 h-8 text-white" />
      <span className="absolute right-full mr-3 bg-foreground text-background text-sm py-2 px-4 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        {t("sticky.tooltip")}
      </span>
    </button>
  );
};

export default StickyWhatsApp;
