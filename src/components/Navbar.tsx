import { useState, useEffect } from "react";
import { Menu, X, Phone, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from "@/assets/logo-bozovic-sport.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const { t, toggle, lang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { href: "#metodologija", label: t("nav.metodologija") },
    { href: "#faze", label: t("nav.faze") },
    { href: "#cenovnik", label: t("nav.cenovnik") },
    { href: "#ekspert", label: t("nav.ekspert") },
    { href: "#faq", label: t("nav.faq") },
    { href: "#kontakt", label: t("nav.kontakt") },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-lg py-2" : "bg-transparent py-3"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <img
              src={logoImage}
              alt="Božović Sport"
              className={`h-14 md:h-16 w-auto rounded-lg transition-all ${scrolled ? "brightness-100" : "brightness-110"}`}
            />
          </a>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  scrolled ? "text-muted-foreground" : "text-primary-foreground/80"
                }`}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={toggle}
              aria-label="Toggle language"
              className={`flex items-center gap-1 text-sm font-bold px-3 py-1.5 rounded-md border transition-colors ${
                scrolled
                  ? "border-border text-foreground hover:bg-muted"
                  : "border-white/30 text-primary-foreground hover:bg-white/10"
              }`}
            >
              <Globe className="w-4 h-4" />
              {lang === "sr" ? "EN" : "SR"}
            </button>
            <Button size="sm" className="gradient-success shadow-success" asChild>
              <a href="tel:+381641494033">
                <Phone className="w-4 h-4 mr-2" />
                {t("nav.pozovi")}
              </a>
            </Button>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggle}
              aria-label="Toggle language"
              className={`flex items-center gap-1 text-xs font-bold px-2 py-1.5 rounded-md border ${
                scrolled
                  ? "border-border text-foreground"
                  : "border-white/30 text-primary-foreground"
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              {lang === "sr" ? "EN" : "SR"}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background shadow-lg py-4">
            <div className="container mx-auto px-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-foreground font-medium py-2 hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <Button className="gradient-success shadow-success w-full" asChild>
                <a href="tel:+381641494033">
                  <Phone className="w-4 h-4 mr-2" />
                  {t("nav.pozoviFull")}
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
