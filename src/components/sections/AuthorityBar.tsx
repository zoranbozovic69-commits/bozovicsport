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
        
        {/* Mobile: 2 rows layout (2 top, 1 bottom centered) */}
        <div className="flex flex-col gap-4 md:hidden">
          {/* First row - 2 logos */}
          <div className="flex justify-center gap-4">
            {authorities.slice(0, 2).map((authority, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center text-center p-3 bg-muted/30 rounded-xl flex-1 max-w-[160px]"
              >
                <div className="w-full min-h-[70px] rounded-lg bg-white shadow-sm flex items-center justify-center p-2 mb-2">
                  <img 
                    src={authority.logo} 
                    alt={authority.name} 
                    className="w-auto h-[60px] object-contain"
                  />
                </div>
                <p className="font-semibold text-foreground text-xs">{authority.shortName}</p>
                <p className="text-[10px] text-muted-foreground leading-tight">{authority.name}</p>
              </div>
            ))}
          </div>
          
          {/* Second row - 1 logo centered */}
          <div className="flex justify-center">
            <div 
              className="flex flex-col items-center text-center p-3 bg-muted/30 rounded-xl max-w-[160px]"
            >
              <div className="w-full min-h-[70px] rounded-lg bg-white shadow-sm flex items-center justify-center p-2 mb-2">
                <img 
                  src={authorities[2].logo} 
                  alt={authorities[2].name} 
                  className="w-auto h-[60px] object-contain"
                />
              </div>
              <p className="font-semibold text-foreground text-xs">{authorities[2].shortName}</p>
              <p className="text-[10px] text-muted-foreground leading-tight">{authorities[2].name}</p>
            </div>
          </div>
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
