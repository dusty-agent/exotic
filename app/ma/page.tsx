export const metadata = {
    title: "MA | Mood Archive | EXOTIC ORDINARY",
    description:
      "A living archive of images, sound and quiet moments from Exotic Ordinary.",
  };
  
  export default function MAPage() {
    return (
      <main className="min-h-screen bg-[#FCF9F7] text-[#2A2321]">
  
        <section className="max-w-5xl mx-auto px-8 py-32">
  
          <p
            className="
            uppercase
            tracking-[0.35em]
            text-[#B49A8D]
            text-sm
            "
          >
            MA
          </p>
  
          <h1
            className="
            mt-6
            text-6xl
            md:text-7xl
            font-light
            "
          >
            Mood Archive
          </h1>
  
          <p
            className="
            mt-8
            max-w-2xl
            text-lg
            leading-9
            text-[#8A7A72]
            "
          >
            A living archive of images, sound and quiet moments.
            Every collection grows slowly, preserving the atmosphere
            of Exotic Ordinary.
          </p>
  
          <div className="mt-20 border-t border-[#E3D0CC]">
  
            <a
              href="https://instagram.com/moodarchives.kr"
              target="_blank"
              rel="noopener noreferrer"
              className="
              flex
              justify-between
              items-center
              py-8
              border-b
              border-[#E3D0CC]
              hover:opacity-70
              transition
              "
            >
              <div>
  
                <h2 className="text-2xl font-light">
                  Visual Archive
                </h2>
  
                <p className="mt-2 text-[#8A7A72]">
                  Daily visual stories and atmospheric collections.
                </p>
  
              </div>
  
              <span>Instagram →</span>
  
            </a>
  
            <a
              href="https://soundcloud.com/exoticarchive"
              target="_blank"
              rel="noopener noreferrer"
              className="
              flex
              justify-between
              items-center
              py-8
              border-b
              border-[#E3D0CC]
              hover:opacity-70
              transition
              "
            >
              <div>
  
                <h2 className="text-2xl font-light">
                  Sound Archive
                </h2>
  
                <p className="mt-2 text-[#8A7A72]">
                  Instrumental sketches and ambient recordings.
                </p>
  
              </div>
  
              <span>SoundCloud →</span>
  
            </a>
  
            <a
              href="https://kr.pinterest.com/exoticordinary"
              target="_blank"
              rel="noopener noreferrer"
              className="
              flex
              justify-between
              items-center
              py-8
              hover:opacity-70
              transition
              "
            >
              <div>
  
                <h2 className="text-2xl font-light">
                  Image Archive
                </h2>
  
                <p className="mt-2 text-[#8A7A72]">
                  References, colors and visual inspirations.
                </p>
  
              </div>
  
              <span>Pinterest →</span>
  
            </a>
  
          </div>
  
          <div className="mt-24 border-t border-[#E3D0CC] pt-12">
  
            <p
              className="
              uppercase
              tracking-[0.25em]
              text-[#B49A8D]
              text-sm
              "
            >
              Coming Soon
            </p>
  
            <div className="mt-8 space-y-4">
  
              <p>Wallpaper Collections</p>
  
              <p>Ambient Albums</p>
  
              <p>Digital Downloads</p>
  
              <p>Seasonal Mood Collections</p>
  
            </div>
  
          </div>
  
        </section>
  
      </main>
    );
  }