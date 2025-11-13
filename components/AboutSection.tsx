import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section className="relative py-28 px-6 overflow-hidden">
      {/* Content */}
      <div className="relative max-w-4xl mx-auto  text-white z-10">
        {/* Header Line */}
        <div className="w-16 h-[2px] bg-yellow-400 mx-auto mb-10 rounded-full"></div>

        {/* Description */}
        <p className="text-lg leading-relaxed text-gray-200 md:text-xl">
          <span className="text-yellow-300">KONTAKT MUSIC LIMITED</span> is a
          multifaceted record label and entertainment powerhouse headquartered
          in Akwa Ibom, founded in 2024 by{" "}
          <span className="font-semibold">Edem Edmund</span> with the primary
          purpose of fostering innovation, entrepreneurship, and groundbreaking
          talent management, development, and presentation pushing creative
          boundaries of the African entertainment industry on a global scale.
        </p>

        <p className="text-lg leading-relaxed text-gray-200 md:text-xl mt-8">
          <span className="text-yellow-300">KONTAKT MUSIC LIMITED</span> is not
          merely a record label it is a dynamic entertainment powerhouse
          equipped with a team of proficient talent managers and sound
          engineers, all committed to empowering artists through professionalism
          and artistic excellence.
        </p>

        <p className="text-lg leading-relaxed text-gray-200 md:text-xl mt-8">
          Complementing this,{" "}
          <span className="text-yellow-300">KONTAKT CONCEPT</span>, established
          in 2024, serves as a pioneering institution designed to provide
          emerging creatives with essential skills in music management,
          production, and entrepreneurship addressing critical gaps in education
          and industry preparedness, especially within the African context and
          the world at large.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
