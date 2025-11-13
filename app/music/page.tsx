import Image from "next/image";

const artists = [
  { img: "/coverimg1.jpg", link: "https://artists.landr.com/056870821252" },
  { img: "/coverimg2.jpg", link: "https://artists.landr.com/057829195158" },
  { img: "/coverimg3.jpg", link: "https://onerpm.link/786746667003" },
  { img: "/coverimg4.jpg", link: "https://onerpm.link/484954740674" },
  { img: "/coverimg5.jpg", link: "https://onerpm.link/509845660629" },
  { img: "/coverimg6.jpg", link: "https://onerpm.link/444715281058" },
  { img: "/coverimg7.jpg", link: "https://onerpm.link/768089002609" },
];

export default function MusicPage() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 w-full px-9 md:px-16 lg:px-32 py-30 bg-background text-foreground">
      {artists.map((artist, index) => (
        <a
          key={index}
          href={artist.link}
          className="group block"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="relative w-full aspect-square overflow-hidden rounded-xl">
            <Image
              src={artist.img}
              alt={`Artist ${index + 1}`}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 200px"
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </a>
      ))}
    </div>
  );
}
