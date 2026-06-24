import { Waves, Phone, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Waves className="w-8 h-8 text-accent" />
                <span className="text-xl font-bold">Božović Sport</span>
              </div>
              <p className="text-sm text-background/70 italic">{t("footer.slogan")}</p>
            </div>

            <div>
              <h4 className="font-bold mb-4">{t("footer.contactTitle")}</h4>
              <div className="space-y-2 text-sm">
                <a href="tel:+381641494033" className="flex items-center gap-2 text-background/70 hover:text-accent transition-colors">
                  <Phone className="w-4 h-4" />
                  +381 64 149 4033
                </a>
                <a href="mailto:zoranbozovic69@gmail.com" className="flex items-center gap-2 text-background/70 hover:text-accent transition-colors">
                  <Mail className="w-4 h-4" />
                  zoranbozovic69@gmail.com
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">{t("footer.locationsTitle")}</h4>
              <div className="space-y-2 text-sm text-background/70">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{t("footer.loc1")}</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{t("footer.loc2")}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-background/20 pt-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <nav className="flex flex-wrap justify-center gap-6 text-sm">
                <a href="#metodologija" className="hover:text-accent transition-colors">{t("footer.nav1")}</a>
                <a href="#faze" className="hover:text-accent transition-colors">{t("footer.nav2")}</a>
                <a href="#cenovnik" className="hover:text-accent transition-colors">{t("footer.nav3")}</a>
                <a href="#ekspert" className="hover:text-accent transition-colors">{t("footer.nav4")}</a>
                <a href="#kontakt" className="hover:text-accent transition-colors">{t("footer.nav5")}</a>
              </nav>

              <p className="text-sm text-background/50">
                © {new Date().getFullYear()} Božović Sport. {t("footer.rights")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
