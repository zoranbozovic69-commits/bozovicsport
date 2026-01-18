import logoPSS from "@/assets/logo-pss.png";
import logoFSFV from "@/assets/logo-fsfv.png";
import logoMinistarstvo from "@/assets/logo-ministarstvo.png";

const authorities = [
  {
    logo: logoPSS,
    fullName: "Plivački Savez Srbije"
  },
  {
    logo: logoFSFV,
    fullName: "Fakultet sporta i fizičkog vaspitanja"
  },
  {
    logo: logoMinistarstvo,
    fullName: "Ministarstvo Prosvete RS"
  }
];

const AuthorityBar = () => {
  return (
    <section className="py-10 md:py-12 bg-white border-b border-border">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm text-muted-foreground font-semibold mb-8 uppercase tracking-wider">
          Licencirano od strane
        </p>
        
        {/* Mobile: Vertical stack - crest only with text name below */}
        <div className="flex flex-col items-center gap-8 md:hidden">
          {authorities.map((authority, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center w-full"
            >
              {/* Crest/Logo container - large and prominent */}
              <div className="w-32 h-32 rounded-full bg-white shadow-lg flex items-center justify-center p-2 mb-4 border-2 border-muted/30">
                <img 
                  src={authority.logo} 
                  alt={authority.fullName} 
                  className="w-full h-full object-contain"
                />
              </div>
              {/* Institution name as text */}
              <p className="font-semibold text-foreground text-base leading-tight max-w-[200px]">
                {authority.fullName}
              </p>
            </div>
          ))}
        </div>

        {/* Desktop: Horizontal layout */}
        <div className="hidden md:flex items-center justify-center gap-16">
          {authorities.map((authority, index) => (
            <div key={index} className="flex items-center gap-4">
              {index > 0 && <div className="h-20 w-px bg-border -ml-8 mr-8" />}
              <div className="flex flex-col items-center text-center opacity-90 hover:opacity-100 transition-opacity">
                {/* Crest container */}
                <div className="w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center p-2 mb-3 border border-muted/30">
                  <img 
                    src={authority.logo} 
                    alt={authority.fullName} 
                    className="w-full h-full object-contain"
                  />
                </div>
                {/* Institution name as text */}
                <p className="font-semibold text-foreground text-sm max-w-[160px] leading-tight">
                  {authority.fullName}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuthorityBar;
