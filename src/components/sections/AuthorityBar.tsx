const AuthorityBar = () => {
  return (
    <section className="py-6 bg-muted/30 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          <div className="flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity">
            <div className="text-xs text-muted-foreground font-medium mb-1">Licencirano od</div>
            <div className="font-bold text-foreground text-sm md:text-base">Plivački Savez Srbije</div>
          </div>
          <div className="h-8 w-px bg-border hidden md:block" />
          <div className="flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity">
            <div className="text-xs text-muted-foreground font-medium mb-1">Diploma</div>
            <div className="font-bold text-foreground text-sm md:text-base">FSFV</div>
          </div>
          <div className="h-8 w-px bg-border hidden md:block" />
          <div className="flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity">
            <div className="text-xs text-muted-foreground font-medium mb-1">Dozvola</div>
            <div className="font-bold text-foreground text-sm md:text-base">Ministarstvo Prosvete RS</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorityBar;
