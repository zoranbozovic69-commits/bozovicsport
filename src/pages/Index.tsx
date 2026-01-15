import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import DDKMethodology from "@/components/sections/DDKMethodology";
import TrainingPhases from "@/components/sections/TrainingPhases";
import Pricing from "@/components/sections/Pricing";
import ExpertProfile from "@/components/sections/ExpertProfile";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Božović Sport | Škola Plivanja Novi Sad - DDK Metodologija</title>
        <meta 
          name="description" 
          content="Individualna škola plivanja u Novom Sadu sa 100% uspešnosti. Pobedi strah od vode za 10 časova - GARANTOVANO! DDK metodologija, 25 godina iskustva." 
        />
        <meta name="keywords" content="škola plivanja, novi sad, individualni časovi plivanja, strah od vode, kineziterapija, sertifikat za čamac" />
      </Helmet>
      <Navbar />
      <main>
        <Hero />
        <DDKMethodology />
        <TrainingPhases />
        <Pricing />
        <ExpertProfile />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Index;