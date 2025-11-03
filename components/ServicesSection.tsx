import Image from "next/image";
import React from "react";

interface Service {
  title: string;
}

const services: Service[] = [
  { title: "PRODUCTION" },
  { title: "MANAGEMENT" },
  { title: "LABEL SERVICE" },
  { title: "MERCHANDISE" },
  { title: "BRANDING" },
  { title: "CULTURE STRATEGY" },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="relative py-28 text-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/kombakt-music-bg.jpg"
          alt="background"
          fill
          className="object-cover brightness-75 scale-105"
          priority
        />
        {/* Gradient + blur overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90 "></div>
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6 z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-yellow-300 mb-16 tracking-wide">
          OUR SERVICES
        </h2>

        <div className="grid gap-10 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative py-12 px-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-500 hover:scale-105 shadow-[0_0_25px_rgba(255,215,0,0.1)]"
            >
              <h3 className="text-2xl font-semibold text-white group-hover:text-yellow-300 transition-colors duration-300">
                <span className="text-yellow-300">// </span>
                {service.title}
              </h3>

              {/* Glow underline */}
              <div className="mt-4 h-[2px] w-12 bg-yellow-300 mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
