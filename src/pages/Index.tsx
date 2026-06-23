import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import AuthorityBar from "@/components/sections/AuthorityBar";
import DDKMethodology from "@/components/sections/DDKMethodology";
import TrainingPhases from "@/components/sections/TrainingPhases";
import WaterPoloCheck from "@/components/sections/WaterPoloCheck";
import UniversityPrep from "@/components/sections/UniversityPrep";
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
        <title>Časovi plivanja za decu i odrasle | Naučni pristup | Božović Sport</title>
        <meta 
          name="description" 
          content="Individualni časovi plivanja i kineziterapije u Novom Sadu. Razvoj motorike uz stručni nadzor master profesora sporta. Sigurnost i napredak kroz sistem 10 faza." 
        />
        <meta name="keywords" content="Časovi plivanja Novi Sad, Plivanje za decu, Plivanje za odrasle, Strah od vode, Kineziterapija Novi Sad, DDK metodologija, Sertifikat za čamac, vaterpolo Novi Sad" />
      </Helmet>
      <Navbar />
      <main>
        <Hero />
        <AuthorityBar />
        <DDKMethodology />
        <TrainingPhases />
        <WaterPoloCheck />
        <UniversityPrep />
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
