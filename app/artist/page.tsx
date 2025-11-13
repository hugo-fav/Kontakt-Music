import AboutArtistText from "@/components/AboutArtistText";
import ArtistImg from "@/components/ArtistImg";

export default function artist() {
  return (
    <div className="flex flex-col justify-center items-center lg:flex-row sm:items-start gap-12 w-full px-9 md:px-16 lg:px-32 py-31 bg-background text-foreground">
      <ArtistImg />
      <AboutArtistText />
    </div>
  );
}
