import BookNow from "./BookNow";

export default function AboutArtistText() {
  return (
    <div className="max-w-xl  sm:text-left">
      <h3 className="text-yellow-300 text-lg font-semibold mb-2">
        About Remeddie (Edem Edmund)
      </h3>

      <p className="text-gray-300 leading-relaxed">
        Edem Edmund, known professionally as Remeddie, is the Founder & CEO and
        lead artist of Kontakt Music Limited. He works across Afrobeats, R&B,
        Hip-Hop fusion, and Alté.
      </p>

      <ul className="list-disc pl-5 my-3">
        <li>Stage name: Remeddie</li>
        <li>Hometown: Akwa Ibom, Nigeria</li>
        <li>
          Discography highlights: Thesis EP (2023), Clear as Mud EP (2024),
          Loveless EP (2024), Sound Cheque EP (2025)
        </li>
        <li>
          Latest single: "ENOUGH" (2025) — viral on campuses and playlists
        </li>
        <li>Streams: 2M+ combined across platforms</li>
      </ul>

      <h4 className="text-yellow-300 font-medium mt-3">
        Selected achievements
      </h4>
      <p className="text-gray-300 leading-relaxed">
        Founder & CEO of Kontakt Music Limited (est. 2024). Sync interest from
        BMG Rights Management, discussions with Guinness Nigeria, live
        performances at major Lagos venues and university tours, and mentor at
        Kontakt Concept Academy.
      </p>

      <h4 className="text-yellow-300 font-medium mt-3">Socials</h4>
      <p className="mb-3 space-y-2">
        <span className="block">
          Instagram:{" "}
          <a
            href="https://www.instagram.com/badremeddie?igsh=b2xzdmFzanJwczRt"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-300 hover:underline"
          >
            @badremeddie
          </a>
        </span>

        <span className="block">
          X (Twitter):{" "}
          <a
            href="https://x.com/badmanremeddie?s=09"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-300 hover:underline"
          >
            @badmanremeddie
          </a>
        </span>

        <span className="block">
          TikTok:{" "}
          <a
            href="https://www.tiktok.com/@badmanremeddie?_r=1&_t=ZS-91LHNzXf1qH"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-300 hover:underline"
          >
            @badmanremeddie
          </a>
        </span>

        <span className="block">
          Facebook:{" "}
          <a
            href="https://www.facebook.com/share/17ZgHh9UMX/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-300 hover:underline"
          >
            Edumund Edem
          </a>
        </span>
      </p>

      <h4 className="text-yellow-300 font-medium mt-3">Professional bio</h4>
      <p className="text-gray-300 leading-relaxed">
        Remeddie fuses infectious Afrobeats rhythms, sharp hip‑hop lyricism and
        Alté introspection to craft music about resilience, love and ambition.
        His releases and campaigns have driven viral campus engagement and
        playlist traction across streaming services.
      </p>

      <h4 className="text-yellow-300 font-medium mt-3">
        Education & mentoring
      </h4>
      <p className="text-gray-300 leading-relaxed">
        Remeddie leads the Kontakt Concept Academy, delivering mentorship and
        courses in music production, songwriting, business and digital
        distribution. Education details: Bachelor's of Technology in Industrial
        Physics and studies in Music Technology from the Federal University of
        Technology, Owerri (details to confirm).
      </p>
      <BookNow />
    </div>
  );
}
