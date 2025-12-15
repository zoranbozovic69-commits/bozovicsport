import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import WhyUs from "@/components/sections/WhyUs";
import Pricing from "@/components/sections/Pricing";
import Programs from "@/components/sections/Programs";
import AgeRecommendations from "@/components/sections/AgeRecommendations";
import Testimonials from "@/components/sections/Testimonials";
import Stats from "@/components/sections/Stats";
import Kinesitherapy from "@/components/sections/Kinesitherapy";
import Certificates from "@/components/sections/Certificates";
import FAQ from "@/components/sections/FAQ";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyUs />
        <Pricing />
        <Programs />
        <AgeRecommendations />
        <Testimonials />
        <Stats />
        <Kinesitherapy />
        <Certificates />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Index;
