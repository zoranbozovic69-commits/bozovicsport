import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const locations = [
  {
    name: "Minakva Fitnes",
    address: "Novi Sad",
    description: "Savršeno za opuštanje i početnike",
  },
  {
    name: "Bazen Slana Bara",
    address: "Sentandrejski put 106, Novi Sad",
    description: "Idealan za napredne vežbe i usavršavanje",
  },
  {
    name: "No Limit Gym",
    address: "Branka Bajića 11, Novi Sad",
    description: "Za kineziterapiju",
  },
];

const Contact = () => {
  return (
    <section className="py-20 gradient-water" id="kontakt">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4 text-primary-foreground">
              Zakaži svoju transformaciju danas!
            </h2>
            <p className="text-xl text-primary-foreground/80">
              Ne odlaži slobodu u vodi ili život bez bola. Tvoja avantura počinje sada!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Info */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6">Kontaktiraj nas</h3>
                <div className="space-y-6">
                  <a 
                    href="tel:+381641494033" 
                    className="flex items-center gap-4 p-4 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Telefon</p>
                      <p className="text-primary font-bold">+381 64 149 4033</p>
                    </div>
                  </a>

                  <a 
                    href="mailto:zoranbozovic69@gmail.com" 
                    className="flex items-center gap-4 p-4 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-muted-foreground text-sm">zoranbozovic69@gmail.com</p>
                      <p className="text-muted-foreground text-sm">zoranbozovic@casoviplivanjanovisad.com</p>
                    </div>
                  </a>

                  <div className="flex gap-4 pt-4">
                    <Button size="lg" variant="outline" className="flex-1" asChild>
                      <a href="#" className="flex items-center gap-2">
                        <Facebook className="w-5 h-5" />
                        Facebook
                      </a>
                    </Button>
                    <Button size="lg" variant="outline" className="flex-1" asChild>
                      <a href="#" className="flex items-center gap-2">
                        <Instagram className="w-5 h-5" />
                        Instagram
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Locations */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6">Naše lokacije</h3>
                <div className="space-y-4">
                  {locations.map((location, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-bold">{location.name}</p>
                        <p className="text-sm text-muted-foreground">{location.address}</p>
                        <p className="text-xs text-primary mt-1">{location.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-10 py-6 shadow-gold"
              asChild
            >
              <a href="tel:+381641494033">
                <Phone className="w-5 h-5 mr-2" />
                Pozovi odmah: +381 64 149 4033
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
