import logoPSS from "@/assets/logo-pss.png";
import logoFSFV from "@/assets/logo-fsfv-cropped.png";
import logoMinistarstvo from "@/assets/logo-ministarstvo.png";

const authorities = [
  {
    logo: logoPSS,
    fullName: "Plivački Savez Srbije",
    bgClass: "bg-[#1a1a2e]" // Dark background to match the screenshot
  },
  {
    logo: logoFSFV,
    fullName: "Fakultet sporta i fizičkog vaspitanja",
    bgClass: "bg-white" // Clean white background
  },
  {
    logo: logoMinistarstvo,
    fullName: "Ministarstvo Prosvete RS",
    bgClass: "bg-[#1a1a2e]" // Dark background to match the screenshot
  }
];

const AuthorityBar = () => {
  return (
    <section className="py-10 md:py-12 bg-white border-b border-border">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm text-muted-foreground font-semibold mb-8 uppercase tracking-wider">
          Licencirano od strane
        </p>
        
        {/* Mobile: Vertical stack - rectangular cards with full logos */}
        <div className="flex flex-col items-center gap-6 md:hidden">
          {authorities.map((authority, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center w-full max-w-[320px]"
            >
              {/* Logo container - rectangular to fit horizontal logos */}
              <div className={`w-full h-24 rounded-xl ${authority.bgClass} shadow-lg flex items-center justify-center p-4 mb-3 border border-muted/20 overflow-hidden`}>
                <img 
                  src={authority.logo} 
                  alt={authority.fullName} 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              {/* Institution name as text */}
              <p className="font-semibold text-foreground text-base leading-tight">
                {authority.fullName}
              </p>
            </div>
          ))}
        </div>

        {/* Desktop: Horizontal layout */}
        <div className="hidden md:flex items-start justify-center gap-12">
          {authorities.map((authority, index) => (
            <div key={index} className="flex items-center gap-4">
              {index > 0 && <div className="h-20 w-px bg-border -ml-6 mr-6" />}
              <div className="flex flex-col items-center text-center opacity-90 hover:opacity-100 transition-opacity">
                {/* Logo container - rectangular */}
                <div className={`w-48 h-20 rounded-lg ${authority.bgClass} shadow-md flex items-center justify-center p-3 mb-3 border border-muted/20 overflow-hidden`}>
                  <img 
                    src={authority.logo} 
                    alt={authority.fullName} 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                {/* Institution name as text */}
                <p className="font-semibold text-foreground text-sm max-w-[180px] leading-tight">
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
