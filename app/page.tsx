import React from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";

const HomePage: React.FC = () => {
  return (
    <main className="bg-black">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
    </main>
  );
};

export default HomePage;
