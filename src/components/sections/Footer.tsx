import { Waves, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Main content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Waves className="w-8 h-8 text-accent" />
                <span className="text-xl font-bold">Božović Sport</span>
              </div>
              <p className="text-sm text-background/70 italic">
                "Cena je ono što plaćate. Sigurnost je ono što dobijate. Dobrodošli u DDK standard."
              </p>
            </div>

            {/* Quick contact */}
            <div>
              <h4 className="font-bold mb-4">Kontakt</h4>
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

            {/* Locations */}
            <div>
              <h4 className="font-bold mb-4">Lokacije</h4>
              <div className="space-y-2 text-sm text-background/70">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>Bazen Slana Bara, Sentandrejski put 106</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>No Limit Gym, Branka Bajića 11</span>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-background/20 pt-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <nav className="flex flex-wrap justify-center gap-6 text-sm">
                <a href="#metodologija" className="hover:text-accent transition-colors">Metodologija</a>
                <a href="#faze" className="hover:text-accent transition-colors">Faze obuke</a>
                <a href="#cenovnik" className="hover:text-accent transition-colors">Cenovnik</a>
                <a href="#ekspert" className="hover:text-accent transition-colors">O instruktoru</a>
                <a href="#kontakt" className="hover:text-accent transition-colors">Kontakt</a>
              </nav>

              <p className="text-sm text-background/50">
                © {new Date().getFullYear()} Božović Sport. Sva prava zadržana.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;