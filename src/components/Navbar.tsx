import { useState, useEffect } from "react";
import { Menu, X, Waves, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#metodologija", label: "Metodologija" },
  { href: "#faze", label: "Faze" },
  { href: "#cenovnik", label: "Cenovnik" },
  { href: "#ekspert", label: "O instruktoru" },
  { href: "#kontakt", label: "Kontakt" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <Waves className={`w-8 h-8 ${scrolled ? "text-primary" : "text-accent"}`} />
            <span className={`text-xl font-bold ${scrolled ? "text-foreground" : "text-primary-foreground"}`}>
              Božović Sport
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
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
            <Button 
              size="sm" 
              className="gradient-success shadow-success"
              asChild
            >
              <a href="tel:+381641494033">
                <Phone className="w-4 h-4 mr-2" />
                Pozovi
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
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
              <Button 
                className="gradient-success shadow-success w-full"
                asChild
              >
                <a href="tel:+381641494033">
                  <Phone className="w-4 h-4 mr-2" />
                  Pozovi: +381 64 149 4033
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