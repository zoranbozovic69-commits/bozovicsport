import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqItems = [
  {
    question: "Da li je moguće pobediti strah ako imam 40+ godina?",
    answer: "Apsolutno. Strah nije pitanje godina, već neurotransmitera. DDK metod koristi neuro-pedagoški pristup koji 'resetuje' vaš instinkt preživljavanja."
  },
  {
    question: "Šta ako dobijem napad panike usred bazena?",
    answer: "To je moj posao. U Fazi 1, ja sam u vodi pored vas. Koristimo tehnike disanja koje momentalno spuštaju nivo stresa. Vi kontrolišete proces."
  },
  {
    question: "Zašto čas traje 30 ili 45 minuta, a ne duže?",
    answer: "Naučno je dokazano da je fokus kod straha najjači u prvih 40 minuta. Sve preko toga zamara nervni sistem i kontraproduktivno je za učenje."
  },
  {
    question: "Koliko mi je ciklusa od 10 časova potrebno?",
    answer: "Većina polaznika nakon prvih 10 časova potpuno eliminiše strah i postaje bazično samostalna. Drugi ciklus služi za potpunu sigurnost u dubini."
  }
];

const FAQ = () => {
  return (
    <section className="py-20 bg-muted/30" id="faq">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <HelpCircle className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              DDK <span className="text-primary">Rešenja</span>
            </h2>
            <p className="text-muted-foreground">
              Odgovori na najčešća pitanja o DDK metodologiji
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-background rounded-xl border border-border shadow-sm px-6"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-primary py-5">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {item.answer}
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
