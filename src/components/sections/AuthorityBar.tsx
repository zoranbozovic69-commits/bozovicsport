import logoPSS from "@/assets/logo-pss-new.png";
import logoFSFV from "@/assets/logo-fsfv-new.png";
import logoMinistarstvo from "@/assets/logo-ministarstvo-new.png";

const authorities = [
  { 
    logo: logoPSS, 
    fullName: "Ministarstvo prosvete Republike Srbije" 
  },
  { 
    logo: logoFSFV, 
    fullName: "Plivački savez Srbije" 
  },
  { 
    logo: logoMinistarstvo, 
    fullName: "Fakultet sporta i fizičkog vaspitanja Novi Sad" 
  }
];

const AuthorityBar = () => {
  return (
    <section className="py-12 md:py-16 bg-white border-b border-border">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm text-muted-foreground font-semibold mb-10 uppercase tracking-wider">
          Licencirano od strane
        </p>
        
        {/* Mobile: Vertical stack with large logos */}
        <div className="flex flex-col items-center gap-10 md:hidden">
          {authorities.map((authority, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center w-full"
            >
              {/* Large rectangular logo */}
              <div className="w-[60%] min-w-[180px] max-w-[280px] mb-4">
                <img 
                  src={authority.logo} 
                  alt={authority.fullName} 
                  className="w-full h-auto object-contain rounded-lg shadow-md"
                />
              </div>
              {/* Institution name - bold 18px */}
              <p className="font-bold text-primary text-lg leading-tight max-w-[280px]">
                {authority.fullName}
              </p>
            </div>
          ))}
        </div>

        {/* Desktop: Horizontal layout with large logos */}
        <div className="hidden md:flex items-start justify-center gap-16">
          {authorities.map((authority, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center max-w-[220px]"
            >
              {/* Large rectangular logo */}
              <div className="w-[180px] h-[120px] mb-4 flex items-center justify-center">
                <img 
                  src={authority.logo} 
                  alt={authority.fullName} 
                  className="max-w-full max-h-full object-contain rounded-lg shadow-md"
                />
              </div>
              {/* Institution name - bold */}
              <p className="font-bold text-primary text-base leading-tight">
                {authority.fullName}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuthorityBar;
