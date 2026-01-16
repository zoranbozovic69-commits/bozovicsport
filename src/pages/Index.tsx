import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import AuthorityBar from "@/components/sections/AuthorityBar";
import DDKMethodology from "@/components/sections/DDKMethodology";
import TrainingPhases from "@/components/sections/TrainingPhases";
import Pricing from "@/components/sections/Pricing";
import ExpertProfile from "@/components/sections/ExpertProfile";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import StickyWhatsApp from "@/components/StickyWhatsApp";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Božović Sport | Škola Plivanja Novi Sad - DDK Metodologija</title>
        <meta 
          name="description" 
          content="Naučite da plivate bez straha uz DDK metod Zorana Božovića, MSc. Individualna obuka u Novom Sadu (Slana Bara) sa 100% uspešnosti. Zakažite dijagnostiku odmah!" 
        />
        <meta name="keywords" content="Škola plivanja Novi Sad, Strah od vode, Individualni časovi plivanja, Kineziterapija Novi Sad, Sertifikat za čamac, DDK metodologija" />
      </Helmet>
      <Navbar />
      <main>
        <Hero />
        <AuthorityBar />
        <DDKMethodology />
        <TrainingPhases />
        <Pricing />
        <ExpertProfile />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
};

export default Index;
