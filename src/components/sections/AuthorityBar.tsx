import logoPSS from "@/assets/logo-pss.png";
import logoFSFV from "@/assets/logo-fsfv.png";
import logoMinistarstvo from "@/assets/logo-ministarstvo.png";

const AuthorityBar = () => {
  return (
    <section className="py-8 bg-white border-b border-border">
      <div className="container mx-auto px-4">
        <p className="text-center text-xs text-muted-foreground font-medium mb-6 uppercase tracking-wider">
          Licencirano od
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          <div className="flex flex-col items-center opacity-80 hover:opacity-100 transition-opacity">
            <img 
              src={logoPSS} 
              alt="Plivački Savez Srbije" 
              className="h-12 md:h-16 w-auto object-contain"
            />
          </div>
          <div className="h-12 w-px bg-border hidden md:block" />
          <div className="flex flex-col items-center opacity-80 hover:opacity-100 transition-opacity">
            <img 
              src={logoFSFV} 
              alt="Fakultet sporta i fizičkog vaspitanja" 
              className="h-12 md:h-16 w-auto object-contain"
            />
          </div>
          <div className="h-12 w-px bg-border hidden md:block" />
          <div className="flex flex-col items-center opacity-80 hover:opacity-100 transition-opacity">
            <img 
              src={logoMinistarstvo} 
              alt="Ministarstvo Prosvete RS" 
              className="h-12 md:h-16 w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorityBar;
