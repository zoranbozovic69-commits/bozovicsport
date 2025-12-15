import { Baby, Users, UserCircle, Waves } from "lucide-react";

const recommendations = [
  {
    icon: Baby,
    age: "Deca (4-12 godina)",
    duration: "30-45 minuta",
    description: "Kratki časovi = puna pažnja i postepen napredak!",
    color: "bg-pink-100 text-pink-600",
  },
  {
    icon: Users,
    age: "Tinejdžeri (13-17 godina)",
    duration: "45-60 minuta",
    description: "Duži fokus, brži razvoj veština.",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: UserCircle,
    age: "Odrasli Početnici",
    duration: "45 minuta",
    description: "Dovoljno vremena za opuštanje, savladavanje straha i osnovnih pokreta.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Waves,
    age: "Usavršavanje Tehnike",
    duration: "60 minuta",
    description: "Detaljan rad na stilu i izdržljivosti za sve uzraste.",
    color: "bg-accent/10 text-accent",
  },
];

const AgeRecommendations = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Kako da izabereš <span className="text-gradient-water">idealno trajanje</span> časa?
          </h2>
          <p className="text-muted-foreground">Naše preporuke, prilagođene tebi:</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {recommendations.map((rec, index) => (
            <div key={index} className="bg-card p-6 rounded-xl shadow-lg text-center hover:shadow-card transition-all">
              <div className={`w-16 h-16 rounded-full ${rec.color} flex items-center justify-center mx-auto mb-4`}>
                <rec.icon className="w-8 h-8" />
              </div>
              <h3 className="font-bold mb-1">{rec.age}</h3>
              <p className="text-2xl font-black text-primary mb-2">{rec.duration}</p>
              <p className="text-sm text-muted-foreground">{rec.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgeRecommendations;
