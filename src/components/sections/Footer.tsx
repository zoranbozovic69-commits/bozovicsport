import { Waves } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Waves className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold">Božović Sport</span>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#programi" className="hover:text-primary transition-colors">Programi</a>
            <a href="#cenovnik" className="hover:text-primary transition-colors">Cenovnik</a>
            <a href="#kineziterapija" className="hover:text-primary transition-colors">Kineziterapija</a>
            <a href="#o-nama" className="hover:text-primary transition-colors">O nama</a>
            <a href="#kontakt" className="hover:text-primary transition-colors">Kontakt</a>
          </nav>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Božović Sport. Sva prava zadržana.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
