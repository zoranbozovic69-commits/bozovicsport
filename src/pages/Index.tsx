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
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { t, lang } = useLanguage();
  return (
    <>
      <Helmet>
        <html lang={lang} />
        <title>{t("seo.title")}</title>
        <meta name="description" content={t("seo.desc")} />
        <meta name="keywords" content="Časovi plivanja Novi Sad, Plivanje za decu, Plivanje za odrasle, Strah od vode, Kineziterapija Novi Sad, DDK metodologija, swimming lessons Novi Sad, fear of water, kinesiotherapy" />
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
