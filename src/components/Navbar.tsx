import { useState } from "react";
import { Menu, X, Phone, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#zasto-mi", label: "Zašto mi" },
  { href: "#programi", label: "Programi" },
  { href: "#cenovnik", label: "Cenovnik" },
  { href: "#kineziterapija", label: "Kineziterapija" },
  { href: "#o-nama", label: "O nama" },
  { href: "#kontakt", label: "Kontakt" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <Waves className="w-8 h-8 text-primary" />
            <span className="font-heading font-bold text-xl">Božović Sport</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button className="gradient-water shadow-button" asChild>
              <a href="tel:+381641494033">
                <Phone className="w-4 h-4 mr-2" />
                Pozovi
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="lg:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button className="gradient-water shadow-button w-full mt-4" asChild>
                <a href="tel:+381641494033">
                  <Phone className="w-4 h-4 mr-2" />
                  Pozovi: +381 64 149 4033
                </a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
