import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ArrowLeft, Download, CalendarCheck, ShieldCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import StickyWhatsApp from "@/components/StickyWhatsApp";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useLanguage } from "@/contexts/LanguageContext";

const SITE = "https://bozovicsport.lovable.app";

const questionsSr: [string, string][] = [
  [
    "Da li pre prvog ulaska u duboku vodu radite stručnu dijagnostiku i procenu straha?",
    "Rad bez prethodne procene motoričke zrelosti i nivoa anksioznosti je nagađanje, a ne metodika. Trening koji ignoriše detetov strah blokira rad mozga i onemogućava učenje.",
  ],
  [
    "Da li sa detetom i roditeljem komunicirate razloge zašto se radi određeni pokret?",
    "Objašnjenje kineziološkog razloga (npr. „disanje je metronom, a telo prati izdah”) znak je naučne metodologije i visoke stručnosti, a ne samo rutinskog ponavljanja.",
  ],
  [
    "Koje obrazovanje, naučna zvanja i kineziterapijske kvalifikacije ima trener?",
    "Plivanje je rad u specifičnom medijumu koji zahteva poznavanje mehanike fluida, neurofiziologije i kineziterapije. Odsustvo formalnog akademskog obrazovanja trenera je crveni signal.",
  ],
  [
    "Kako izgleda prvi termin — da li je to Master dijagnostika ili odmah grupa?",
    "Ako dete bez proverene kontrole disanja i plutanja odmah bace u grupu u duboku vodu, rizikuje se trajna trauma i stvaranje refleksa davljenika.",
  ],
  [
    "Koliko dece je u grupi i da li se prate individualne faze napretka?",
    "Masovni rad u komercijalnim grupama gubi individualni nadzor. Svako dete uči sopstvenim tempom i mora imati svoj karton napretka.",
  ],
  [
    "Kako pratite napredak deteta — merljivim parametrima ili opisnim „bravo”?",
    "Napredak u vodi se ne procenjuje utiskom, već usvojenim motornim navikama kroz egzaktno definisane faze (od adaptacije do pune koordinacije).",
  ],
  [
    "Da li se program prilagođava zdravstvenom stanju i držanju tela (posturi)?",
    "Voda je primarni kineziterapijski medijum. Trening mora uzeti u obzir držanje tela, rad zglobova i specifične potrebe rastućeg organizma.",
  ],
  [
    "Da li roditelji dobijaju redovne, strukturisane izveštaje o stručnoj analizi?",
    "Roditelj mora u svakom trenutku znati u kojoj se fazi dete nalazi, sa jasnim planom na čemu se radi u narednom fondu časova.",
  ],
  [
    "Da li je cilj „brzo proplivavanje po svaku cenu” ili trajna autonomija?",
    "Obećanja da će dete „naučiti da pliva za 10 dana” su znak nerealnog i opasnog pristupa. Prava vodena kompetencija gradi se stabilno i bez panike.",
  ],
  [
    "Da li iza metodologije stoji dokazan i dokumentovan sistem rada (DDK)?",
    "Slučajni rezultati nisu garancija kvaliteta. Metodologija mora počivati na jasnim principima fizike fluida, neurofiziologije i višedecenijske prakse.",
  ],
];

const questionsEn: [string, string][] = [
  [
    "Do you run a professional diagnostic and fear assessment before the first entry into deep water?",
    "Working without assessing motor maturity and anxiety level is guesswork, not methodology. Training that ignores a child's fear blocks the brain and prevents learning.",
  ],
  [
    "Do you explain to the child and the parent why a specific movement is performed?",
    "Explaining the kinesiological reason (e.g. \u201Cbreathing is the metronome, the body follows the exhale\u201D) is a sign of scientific methodology, not routine repetition.",
  ],
  [
    "What education, academic titles and kinesiotherapy qualifications does the coach hold?",
    "Swimming happens in a specific medium requiring knowledge of fluid mechanics, neurophysiology and kinesiotherapy. The absence of formal academic education is a red flag.",
  ],
  [
    "What does the first session look like — a Master diagnostic or straight into a group?",
    "Throwing a child into a deep-water group without verified breathing and floating control risks lasting trauma and a drowning reflex.",
  ],
  [
    "How many children are in a group and are individual progress phases tracked?",
    "Mass commercial groups lose individual supervision. Every child learns at its own pace and must have its own progress record.",
  ],
  [
    "How do you track progress — with measurable parameters or with a descriptive \u201Cwell done\u201D?",
    "Progress in water is not judged by impression but by acquired motor habits through exactly defined phases (from adaptation to full coordination).",
  ],
  [
    "Is the program adapted to health status and body posture?",
    "Water is the primary kinesiotherapeutic medium. Training must account for posture, joint function and the specific needs of a growing organism.",
  ],
  [
    "Do parents receive regular, structured reports of the professional analysis?",
    "A parent must know at any moment which phase the child is in, with a clear plan for the next block of lessons.",
  ],
  [
    "Is the goal \u201Cfast swimming at any cost\u201D or lasting autonomy?",
    "Promises that a child will \u201Clearn to swim in 10 days\u201D signal an unrealistic and dangerous approach. Real water competence is built steadily and without panic.",
  ],
  [
    "Is the methodology backed by a proven and documented system (DDK)?",
    "Random results are no guarantee of quality. Methodology must rest on clear principles of fluid physics, neurophysiology and decades of practice.",
  ],
];

const ParentsGuide = () => {
  const { lang } = useLanguage();
  const sr = lang === "sr";
  const items = sr ? questionsSr : questionsEn;

  const title = sr
    ? "10 pitanja koja treba da postavite pre nego što izaberete školu plivanja za svoje dete"
    : "10 questions to ask before choosing a swimming school for your child";
  const desc = sr
    ? "Vodič za roditelje: 10 ključnih pitanja za izbor škole plivanja i trenera u Novom Sadu. DDK metodologija — dijagnostika, dokumentacija, kontrola."
    : "Parents' guide: 10 key questions for choosing a swimming school and coach in Novi Sad. DDK methodology — diagnostics, documentation, control.";
  const url = `${SITE}/vodic-za-roditelje`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(([q, a]) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  return (
    <>
      <Helmet>
        <html lang={lang} />
        <title>{sr ? "Vodič za roditelje | Božović Sport Novi Sad" : "Parents' Guide | Božović Sport Novi Sad"}</title>
        <meta name="description" content={desc} />
        <link rel="canonical" href={url} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta property="og:url" content={url} />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <Navbar />

      <main className="pt-24 pb-16">
        <section className="container mx-auto px-4 max-w-3xl">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-6 text-sm font-semibold">
            <ArrowLeft className="w-4 h-4" /> {sr ? "Nazad na početnu" : "Back to home"}
          </Link>

          <header className="mb-8">
            <p className="text-xs font-bold tracking-widest text-primary uppercase mb-3">
              {sr ? "Udruženje Božović Sport · Novi Sad" : "Božović Sport Association · Novi Sad"}
            </p>
            <h1 className="text-3xl md:text-4xl font-black leading-tight mb-4">
              <span className="text-primary">10 pitanja</span>{" "}
              {sr
                ? "koja treba da postavite pre nego što izaberete školu plivanja za svoje dete"
                : "to ask before choosing a swimming school for your child"}
            </h1>
            <p className="text-muted-foreground leading-relaxed mb-3">
              {sr
                ? "Izbor trenera plivanja za dete nije samo odabir vannastavne aktivnosti — to je odluka koja direktno utiče na bezbednost, zdravlje i stav Vašeg deteta prema vodi za ceo život."
                : "Choosing a swimming coach is not just picking an extracurricular activity — it directly affects your child's safety, health and lifelong attitude toward water."}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {sr
                ? "Ova pitanja Vam pomažu da jasno razlikujete stručnjaka koji razume kineziterapiju, biomehaniku i psihologiju deteta, od običnog posmatrača sa ivice bazena."
                : "These questions help you tell an expert who understands kinesiotherapy, biomechanics and child psychology from an ordinary observer at the poolside."}
            </p>
          </header>

          <div className="flex items-start gap-3 p-4 rounded-xl bg-primary/5 border border-primary/20 mb-8">
            <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground">
              {sr
                ? "Sačuvajte ovaj vodič na telefonu — nosite ga sa sobom na konsultacije, kod bilo kog trenera ili u bilo koji klub."
                : "Save this guide on your phone — take it with you to any consultation, coach or club."}
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {items.map(([q, a], i) => (
              <AccordionItem
                key={i}
                value={`q-${i}`}
                className="bg-background rounded-xl border border-border shadow-sm px-4 md:px-6"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-primary py-5">
                  <span className="flex gap-3">
                    <span className="text-primary font-black shrink-0">{i + 1}.</span>
                    <span>{q}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 pl-8">
                  <span className="font-semibold text-foreground">{sr ? "Zašto je važno: " : "Why it matters: "}</span>
                  {a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 rounded-2xl gradient-hero p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-black text-primary-foreground mb-3">
              {sr ? "Spremni da postavite ova pitanja i nama?" : "Ready to ask us these questions?"}
            </h2>
            <p className="text-primary-foreground/80 mb-6">
              {sr
                ? "Zakažite terminski pregled i Master dijagnostiku u Udruženju Božović Sport."
                : "Book an assessment and Master diagnostic at Božović Sport."}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" className="gradient-success shadow-success font-bold" asChild>
                <a href="/#kontakt">
                  <CalendarCheck className="w-5 h-5 mr-2" />
                  {sr ? "Zakažite Master dijagnostiku" : "Book the Master diagnostic"}
                </a>
              </Button>
              <Button size="lg" variant="secondary" className="font-bold" asChild>
                <a href="/vodic-za-roditelje.pdf" download>
                  <Download className="w-5 h-5 mr-2" />
                  {sr ? "Preuzmite Vodič u PDF formatu" : "Download the guide as PDF"}
                </a>
              </Button>
            </div>
            <p className="text-primary-foreground/70 text-sm mt-6">
              MSc Zoran Božović · {sr ? "Dokazana Dokumentovana Kontrola (DDK)" : "Documented Proven Control (DDK)"} · 064 1494033
            </p>
          </div>
        </section>
      </main>

      <Footer />
      <StickyWhatsApp />
    </>
  );
};

export default ParentsGuide;
