import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle, Activity } from "lucide-react";
import DDKFearScale from "@/components/DDKFearScale";
import { useLanguage } from "@/contexts/LanguageContext";

const FAQ = () => {
  const { t } = useLanguage();
  const faqItems: [string, string][] = t("faq.items");

  return (
    <section className="py-20 bg-muted/30" id="faq">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <HelpCircle className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              {t("faq.title1")} <span className="text-primary">{t("faq.title2")}</span>
            </h2>
            <p className="text-muted-foreground">{t("faq.subtitle")}</p>
          </div>

          <div className="mb-12 bg-background rounded-2xl border border-border shadow-card p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Activity className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl md:text-2xl font-black">{t("faq.scaleTitle")}</h3>
            </div>
            <DDKFearScale />
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map(([q, a], index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-background rounded-xl border border-border shadow-sm px-6">
                <AccordionTrigger className="text-left font-semibold hover:text-primary py-5">{q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">{a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
