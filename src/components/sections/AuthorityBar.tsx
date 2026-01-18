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
    <section className="py-10 md:py-12 bg-white border-b border-border">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm text-muted-foreground font-semibold mb-8 uppercase tracking-wider">
          Licencirano od strane
        </p>
        
        {/* Mobile: Large vertical stack - each logo takes ~50% screen width */}
        <div className="flex flex-col items-center gap-6 md:hidden">
          {authorities.map((authority, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center w-full max-w-[280px] p-5 bg-muted/20 rounded-2xl border border-border/50"
            >
              <div className="w-40 h-40 rounded-xl bg-white shadow-md flex items-center justify-center p-3 mb-4">
                <img 
                  src={authority.logo} 
                  alt={authority.name} 
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="font-bold text-foreground text-lg">{authority.shortName}</p>
              <p className="text-sm text-muted-foreground mt-1">{authority.name}</p>
            </div>
          ))}
        </div>

        {/* Desktop: Horizontal layout */}
        <div className="hidden md:flex items-center justify-center gap-16">
          {authorities.map((authority, index) => (
            <div key={index} className="flex items-center gap-4">
              {index > 0 && <div className="h-20 w-px bg-border -ml-8 mr-8" />}
              <div className="flex flex-col items-center text-center opacity-90 hover:opacity-100 transition-opacity">
                <div className="w-24 h-24 rounded-xl bg-muted/30 flex items-center justify-center p-3 mb-3">
                  <img 
                    src={authority.logo} 
                    alt={authority.name} 
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="font-bold text-foreground text-base">{authority.shortName}</p>
                <p className="text-sm text-muted-foreground max-w-[160px]">{authority.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuthorityBar;
