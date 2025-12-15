import { Quote, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "Pokušavala sam da naučim plivanje 10 godina kod različitih instruktora. Zoran je jedini koji je uspeo! Za 10 časova sam savladala ono što drugi nisu mogli godinama!",
    author: "Jadranka",
    details: "63 godine, Novi Sad",
  },
  {
    quote: "Moja ćerka je imala panični strah od vode. Zoran je uradio čudo – sada uživa u plivanju kao riba!",
    author: "Mile G.",
    details: "otac sedmogodišnje Viktorije",
  },
  {
    quote: "Kao odrasla osoba sa 45 godina, mislila sam da je prekasno. Zoran me je uverio da nije – i bio je u pravu! Sada plivam kao što sam oduvek sanjala.",
    author: "Jelena T.",
    details: "45 godina, Novi Sad",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-background" id="utisci">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            Šta kažu oni koji su već <span className="text-gradient-water">osetili razliku?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative border-0 shadow-lg hover:shadow-card transition-all">
              <CardContent className="pt-8 pb-6">
                <Quote className="w-10 h-10 text-primary/20 absolute top-4 left-4" />
                <div className="flex gap-1 mb-4 justify-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic text-center leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="text-center border-t pt-4">
                  <p className="font-bold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.details}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
