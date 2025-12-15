import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Da li je program pogodan za sve uzraste?",
    answer: "DA! Radimo sa decom od 4 godine do odraslih bez gornje starosne granice. Naš individualni pristup je ključan za svakoga.",
  },
  {
    question: "Šta ako imam veliki strah od vode?",
    answer: "TO JE NAŠA SPECIJALNOST! Koristimo naučno dokazane tehnike za postepeno i sigurno prevazilaženje straha. Paniku pretvaramo u samopouzdanje!",
  },
  {
    question: "Da li radite tokom cele godine?",
    answer: "DA, 12 MESECI GODIŠNJE! Tvoj napredak ne zavisi od sezone. Konstantnost je ključ!",
  },
  {
    question: "Šta bi trebalo da ponesem na čas?",
    answer: "Samo kupaći, peškir i osmeh! Sve ostalo (opremu za plivanje) obezbeđujemo mi. Za kineziterapiju potrebna je udobna sportska odeća.",
  },
  {
    question: "Koliko ukupno traje obuka?",
    answer: "Osnove plivanja (sa prevazilaženjem straha) traju 10 časova. Dalji razvoj je fleksibilan i zavisi od tvojih ciljeva! Trajanje kineziterapije je individualno.",
  },
];

const FAQ = () => {
  return (
    <section className="py-20 bg-muted/50" id="faq">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            Često postavljana <span className="text-gradient-water">pitanja</span>
          </h2>
          <p className="text-muted-foreground">Tvoji odgovori na dlanu!</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-lg shadow-lg border-0 px-6"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
