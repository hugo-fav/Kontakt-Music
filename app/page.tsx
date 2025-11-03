import React from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";

import Footer from "@/components/Footer";

const HomePage: React.FC = () => {
  return (
    <main className="bg-black">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <Footer />
    </main>
  );
};

export default HomePage;
