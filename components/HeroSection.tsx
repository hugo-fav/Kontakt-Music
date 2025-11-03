import Image from "next/image";

// src/components/HeroSection.jsx
export default function HeroSection() {
  return (
    <section className="relative flex items-center justify-center min-h-screen bg-black text-center px-4">
      <div className="absolute inset-0">
        <Image
          src="/kombakt-music-logo.jpg"
          alt="background"
          fill
          className="object-cover blur-sm brightness-50"
          priority
        />
      </div>
      <div className="relative z-10 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-semibold leading-tight text-yellow-300">
          KONTAKT-MUSIC
        </h1>
        <p className="mt-4 text-lg md:text-xl text-white">
          THE GLOBAL ENTERTAINMENT POWERHOUSE
        </p>
      </div>
    </section>
  );
}
