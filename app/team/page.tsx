import Image from "next/image";

export default function Team() {
  const sections = [
    {
      img: "/t1.jpg",
      title: "CEO – Edem Edmund",
      text: "As the Chief Executive Officer, Edem Edmund provides the strategic vision and leadership that drives Kontakt Music Limited forward. With an in-depth understanding of the entertainment industry and a passion for mentoring creative minds, he oversees the company’s growth, partnerships, and long-term direction.",
    },
    {
      img: "/t4.jpg",
      title: "COO – Okorie Emmanuel N.",
      text: "Okorie Emmanuel serves as the Chief Operating Officer, ensuring that all operational aspects of Kontakt Music Limited run seamlessly. With a strong focus on efficiency, innovation and growth, he bridges the gap between creative ambition and business execution, supporting the team to achieve its goals.",
    },
    {
      img: "/t3.jpg",
      title: "Business Advisor – Richard Lyod Steinhart",
      text: "With over 50 years of experience in the music industry as a performer, producer, and owner of Bight Me Records LLC, Richard Lyod Steinhart, as the Business Advisor, plays a vital role in safeguarding the company’s integrity and compliance. From intellectual property, to contracts and partnerships, he ensures that every legal framework upholds the standards and reputation of Kontakt Music Limited.",
    },
    {
      img: "/t5.jpg",
      title: "Sound Engineer – Eke Samuel",
      text: "As the heartbeat of our productions, Eke Samuel brings artistic visions to life through technical mastery. As the Sound Engineer, he is responsible for recording, mixing, and refining the sounds that define the Kontakt experience — ensuring quality, clarity, and creativity in every project.",
    },
  ];

  return (
    <div className="w-full px-6 md:px-16 lg:px-32 py-30 bg-background text-foreground space-y-24">
      {/* Intro paragraph */}
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-yellow-300 text-4xl font-bold mb-4">
          Meet the Team
        </h1>
        <p className="text-gray-300 leading-relaxesd sm:text-center">
          Here at Kontakt Music Limited, our strength lies in the collective
          expertise, creativity, and passion of our dedicated team. Together, we
          share one mission — to redefine the entertainment industry by
          nurturing talent, fostering innovation, and delivering excellence
          through every sound, performance, and production.
        </p>
      </div>

      {/* Team Sections */}
      {sections.map((section, index) => (
        <div
          key={index}
          className={`flex flex-col ${
            index % 2 === 1 ? "sm:flex-row-reverse" : "sm:flex-row"
          }  gap-10`}
        >
          {/* Image */}
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[22rem] lg:h-[22rem] overflow-hidden rounded-xl shadow-lg flex-shrink-0 mx-auto">
            <Image
              src={section.img}
              alt={section.title}
              // fill
              width={350}
              height={350}
              className="object-cover object-center"
              sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 25vw"
              priority
            />
          </div>

          {/* Text */}
          <div className="sm:w-1/2 text-center ">
            <h2 className="text-yellow-300 text-2xl font-semibold mb-4">
              {section.title}
            </h2>
            <p className=" text-gray-300 leading-relaxed text-left sm:text-left">
              {section.text}
            </p>
          </div>
        </div>
      ))}

      {/* Closing Paragraph */}
      <div className="max-w-3xl text-yellow-100 mx-auto  text-center leading-relaxed">
        Each member of our team contributes uniquely to the shared vision of
        transforming the entertainment industry. United and driven by purpose
        and passion, we continue to create, inspire, and connect through the
        universal language of music.
      </div>
    </div>
  );
}
