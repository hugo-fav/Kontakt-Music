import Image from "next/image";

export default function ArtistImg() {
  return (
    <div className="sm:w-96 sm:h-96 relative overflow-hidden rounded-xl shadow-lg">
      <Image
        src="/aboutartist.jpg"
        alt="Remeddie (Edem Edmund) portrait"
        width={800}
        height={800}
        className="object-cover"
        priority
      />
    </div>
  );
}
