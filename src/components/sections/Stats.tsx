import { Users, Baby, Clock, Brain } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "200+",
    label: "Polaznika",
    description: "NULA neuspešnih slučajeva!",
    color: "text-primary",
  },
  {
    icon: Baby,
    value: "4-70",
    label: "Godina",
    description: "Najmlađi 4, najstariji 70 godina!",
    color: "text-secondary",
  },
  {
    icon: Clock,
    value: "3-4",
    label: "Časa",
    description: "Rekordno brzo savladavanje osnova!",
    color: "text-accent",
  },
  {
    icon: Brain,
    value: "20+",
    label: "Godina straha",
    description: "Najteži slučajevi - SVI rešeni!",
    color: "text-gold",
  },
];

const Stats = () => {
  return (
    <section className="py-20 gradient-water">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4 text-primary-foreground">
            Božović Sport u brojkama
          </h2>
          <p className="text-xl text-primary-foreground/80">
            Tvoj uspeh je naša STATISTIKA!
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-card/95 backdrop-blur-sm p-8 rounded-2xl text-center shadow-lg hover:scale-105 transition-transform"
            >
              <div className={`w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4`}>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <p className={`text-5xl font-black ${stat.color} mb-2`}>{stat.value}</p>
              <p className="font-bold text-foreground mb-1">{stat.label}</p>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
