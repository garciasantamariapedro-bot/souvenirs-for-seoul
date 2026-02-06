import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import EventsSection from "@/components/EventsSection";
import MissionSection from "@/components/MissionSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProductsSection />
      <EventsSection />
      <MissionSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
