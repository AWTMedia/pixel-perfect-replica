import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FeatureSection from "@/components/FeatureSection";
import ReferralSection from "@/components/ReferralSection";
import MadeWithLoveSection from "@/components/MadeWithLoveSection";
import FAQSection from "@/components/FAQSection";
import AppSection from "@/components/AppSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen aa-bg text-white">
      <Navbar />
      <HeroSection />
      <TestimonialsSection />
      <FeatureSection />
      <ReferralSection />
      <MadeWithLoveSection />
      <FAQSection />
      <AppSection />
      <Footer />
    </main>
  );
};

export default Index;
