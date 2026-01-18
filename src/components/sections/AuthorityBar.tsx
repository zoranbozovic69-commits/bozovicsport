const authorities = [
  { fullName: "Plivački Savez Srbije" },
  { fullName: "Fakultet sporta i fizičkog vaspitanja" },
  { fullName: "Ministarstvo Prosvete RS" }
];

const AuthorityBar = () => {
  return (
    <section className="py-10 md:py-12 bg-white border-b border-border">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm text-muted-foreground font-semibold mb-8 uppercase tracking-wider">
          Licencirano od strane
        </p>
        
        {/* Mobile: Vertical stack - text only */}
        <div className="flex flex-col items-center gap-4 md:hidden">
          {authorities.map((authority, index) => (
            <div 
              key={index} 
              className="w-full max-w-[320px] py-4 px-6 bg-primary/5 rounded-lg border border-primary/20"
            >
              <p className="font-bold text-primary text-lg text-center leading-tight">
                {authority.fullName}
              </p>
            </div>
          ))}
        </div>

        {/* Desktop: Horizontal layout - text only */}
        <div className="hidden md:flex items-center justify-center gap-8">
          {authorities.map((authority, index) => (
            <div key={index} className="flex items-center gap-8">
              {index > 0 && <div className="h-8 w-px bg-border" />}
              <p className="font-bold text-primary text-lg hover:text-primary/80 transition-colors">
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
