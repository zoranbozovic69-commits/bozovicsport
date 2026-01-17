import logoPSS from "@/assets/logo-pss.png";
import logoFSFV from "@/assets/logo-fsfv.png";
import logoMinistarstvo from "@/assets/logo-ministarstvo.png";

const authorities = [
  {
    logo: logoPSS,
    name: "Plivački Savez Srbije",
    shortName: "PSS"
  },
  {
    logo: logoFSFV,
    name: "Fakultet sporta i fizičkog vaspitanja",
    shortName: "FSFV"
  },
  {
    logo: logoMinistarstvo,
    name: "Ministarstvo Prosvete RS",
    shortName: "Ministarstvo"
  }
];

const AuthorityBar = () => {
  return (
    <section className="py-8 md:py-10 bg-white border-b border-border">
      <div className="container mx-auto px-4">
        <p className="text-center text-xs text-muted-foreground font-medium mb-6 uppercase tracking-wider">
          Licencirano od
        </p>
        
        {/* Mobile: Vertical stack layout */}
        <div className="flex flex-col gap-5 md:hidden">
          {authorities.map((authority, index) => (
            <div 
              key={index} 
              className="flex items-center gap-4 p-4 bg-muted/30 rounded-xl"
            >
              <div className="w-24 h-24 shrink-0 rounded-lg bg-white shadow-sm flex items-center justify-center p-2">
                <img 
                  src={authority.logo} 
                  alt={authority.name} 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <p className="font-bold text-foreground text-base">{authority.shortName}</p>
                <p className="text-sm text-muted-foreground leading-snug">{authority.name}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: Horizontal layout */}
        <div className="hidden md:flex items-center justify-center gap-12">
          {authorities.map((authority, index) => (
            <div key={index} className="flex items-center gap-4">
              {index > 0 && <div className="h-16 w-px bg-border -ml-6 mr-6" />}
              <div className="flex flex-col items-center text-center opacity-90 hover:opacity-100 transition-opacity">
                <div className="w-20 h-20 rounded-xl bg-muted/30 flex items-center justify-center p-3 mb-2">
                  <img 
                    src={authority.logo} 
                    alt={authority.name} 
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="font-semibold text-foreground text-sm">{authority.shortName}</p>
                <p className="text-xs text-muted-foreground max-w-[140px]">{authority.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuthorityBar;
