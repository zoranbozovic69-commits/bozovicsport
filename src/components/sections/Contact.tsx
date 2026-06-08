import { useState, useMemo } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import DDKAnalysisCard from "@/components/DDKAnalysisCard";


const locations = [
  {
    name: "Bazen Slana Bara",
    address: "Sentandrejski put 106, Novi Sad",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2805.1234567890123!2d19.8397!3d45.2511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zU2VudGFuZHJlanNraSBwdXQgMTA2!5e0!3m2!1sen!2srs!4v1234567890",
  },
  {
    name: "No Limit Gym",
    address: "Branka Bajića 11, Novi Sad",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2805.9876543210987!2d19.8321!3d45.2567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zQnJhbmthIEJhamljaGEgMTE!5e0!3m2!1sen!2srs!4v1234567890",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    ime: "",
    godiste: "",
    nivoStraha: [7],
    primarniCilj: "",
  });

  // Get slider track color based on fear level
  const sliderColor = useMemo(() => {
    const level = formData.nivoStraha[0];
    if (level <= 3) return "hsl(145, 65%, 42%)"; // Green
    if (level <= 6) return "hsl(45, 93%, 47%)";  // Yellow/Orange
    return "hsl(0, 70%, 55%)"; // Red
  }, [formData.nivoStraha]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.ime.trim() || !formData.godiste.trim() || !formData.primarniCilj.trim()) {
      toast({
        title: "Greška",
        description: "Molimo popunite sva polja.",
        variant: "destructive",
      });
      return;
    }

    // Validate year format
    const year = parseInt(formData.godiste);
    if (isNaN(year) || year < 1940 || year > new Date().getFullYear()) {
      toast({
        title: "Greška",
        description: "Molimo unesite validno godište.",
        variant: "destructive",
      });
      return;
    }

    // Encode data for WhatsApp - exact format requested
    const message = encodeURIComponent(
      `Zdravo Zorane, želim DDK dijagnostiku. Ime: ${formData.ime.trim()}, Godište: ${formData.godiste.trim()}, Strah: ${formData.nivoStraha[0]}, Cilj: ${formData.primarniCilj.trim()}.`
    );

    window.open(`https://wa.me/381641494033?text=${message}`, '_blank');

    toast({
      title: "Uspešno!",
      description: "Preusmeravamo vas na WhatsApp za brzu komunikaciju.",
    });
  };

  return (
    <section className="py-20 gradient-hero" id="kontakt">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black mb-4 text-primary-foreground">
              Zakaži DDK Dijagnostiku
            </h2>
            <p className="text-xl text-primary-foreground/80">
              Tvoj put do sigurnosti u vodi počinje ovde
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="border-0 shadow-card">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6">Popuni formu za zakazivanje</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <Label htmlFor="ime" className="text-sm font-medium">Ime i prezime *</Label>
                    <Input
                      id="ime"
                      value={formData.ime}
                      onChange={(e) => setFormData({ ...formData, ime: e.target.value })}
                      placeholder="Unesite vaše ime"
                      className="mt-1"
                      maxLength={100}
                    />
                  </div>

                  <div>
                    <Label htmlFor="godiste" className="text-sm font-medium">Godište *</Label>
                    <Input
                      id="godiste"
                      value={formData.godiste}
                      onChange={(e) => setFormData({ ...formData, godiste: e.target.value })}
                      placeholder="npr. 1990"
                      className="mt-1"
                      maxLength={4}
                    />
                  </div>

                  <div>
                    <Label className="text-sm font-medium">
                      Nivo straha od vode: <span className="font-bold text-lg" style={{ color: sliderColor }}>{formData.nivoStraha[0]}</span>
                    </Label>
                    <div className="mt-3 px-1">
                      <div 
                        className="relative"
                        style={{
                          '--slider-color': sliderColor
                        } as React.CSSProperties}
                      >
                        <Slider
                          value={formData.nivoStraha}
                          onValueChange={(value) => setFormData({ ...formData, nivoStraha: value })}
                          min={1}
                          max={10}
                          step={1}
                          className="w-full fear-slider"
                        />
                      </div>
                      <div className="flex justify-between text-xs mt-2">
                        <span className="text-green-600 font-medium">1 - Nizak</span>
                        <span className="text-yellow-600 font-medium">5 - Srednji</span>
                        <span className="text-red-600 font-medium">10 - Visok</span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <DDKAnalysisCard selectedLevel={formData.nivoStraha[0]} />
                    </div>
                  </div>


                  <div>
                    <Label htmlFor="cilj" className="text-sm font-medium">Primarni cilj *</Label>
                    <Textarea
                      id="cilj"
                      value={formData.primarniCilj}
                      onChange={(e) => setFormData({ ...formData, primarniCilj: e.target.value })}
                      placeholder="Šta želite da postignete? (npr. naučiti da plivam, prevazići strah, dobiti sertifikat za čamac...)"
                      className="mt-1 min-h-[100px]"
                      maxLength={500}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-lg text-lg py-6 font-bold"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Pošalji putem WhatsApp
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info & Map */}
            <div className="space-y-6">
              <Card className="border-0 shadow-card">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4">Direktan kontakt</h3>
                  <div className="space-y-4">
                    <a 
                      href="tel:+381641494033" 
                      className="flex items-center gap-4 p-4 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors"
                    >
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-muted-foreground">Telefon</p>
                        <p className="text-primary font-bold text-lg">+381 64 149 4033</p>
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
                        <p className="font-semibold text-sm text-muted-foreground">Email</p>
                        <p className="text-muted-foreground text-sm">zoranbozovic69@gmail.com</p>
                      </div>
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-card">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4">Lokacije</h3>
                  <div className="space-y-3 mb-4">
                    {locations.map((location, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          <MapPin className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-bold text-sm">{location.name}</p>
                          <p className="text-sm text-muted-foreground">{location.address}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Google Maps Embed */}
                  <div className="rounded-lg overflow-hidden border border-border">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22439.10267584896!2d19.8204!3d45.2517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m3!3e0!4m0!4m0!5e0!3m2!1sen!2srs!4v1704067200000!5m2!1sen!2srs&markers=color:blue%7C45.2511,19.8397&markers=color:red%7C45.2567,19.8321"
                      width="100%"
                      height="200"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Lokacije Božović Sport"
                      className="w-full"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
