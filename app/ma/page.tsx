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

          이미지와 사운드,
          그리고 조용한 순간들을 기록하는
          디지털 아카이브입니다.

          <br /><br />

          <span className="italic">

            A living archive of images,
            sound and quiet moments.
            Every collection grows slowly,
            preserving the atmosphere of
            Exotic Ordinary.

          </span>

        </p>

        <div className="mt-14">

          <a
            href="/store/ma"
            className="
            inline-flex
            items-center
            rounded-full
            bg-[#1E1E1E]
            text-white
            px-8
            py-4
            hover:opacity-90
            transition
            "
          >

            컬렉션 둘러보기

            <span className="ml-3 text-sm opacity-70">
              Explore Collections →
            </span>

          </a>

        </div>

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

                비주얼 아카이브

                <span className="ml-3 text-base text-[#8A7A72]">
                  Visual Archive
                </span>

              </h2>

              <p className="mt-2 text-[#8A7A72]">

                일상의 풍경과 분위기를 담은
                비주얼 컬렉션입니다.

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

                사운드 아카이브

                <span className="ml-3 text-base text-[#8A7A72]">
                  Sound Archive
                </span>

              </h2>

              <p className="mt-2 text-[#8A7A72]">

                앰비언트 음악과
                사운드 스케치를 기록합니다.

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

                이미지 레퍼런스

                <span className="ml-3 text-base text-[#8A7A72]">
                  Image Archive
                </span>

              </h2>

              <p className="mt-2 text-[#8A7A72]">

                컬러, 레퍼런스,
                그리고 다양한 영감을 모아둔 공간입니다.

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

            준비 중
            <span className="ml-2 italic">
              Coming Soon
            </span>

          </p>

          <div className="mt-8 space-y-4">

            <p>
              월페이퍼 컬렉션
              <span className="ml-2 text-[#8A7A72]">
                (Wallpaper Collections)
              </span>
            </p>

            <p>
              앰비언트 앨범
              <span className="ml-2 text-[#8A7A72]">
                (Ambient Albums)
              </span>
            </p>

            <p>
              디지털 다운로드
              <span className="ml-2 text-[#8A7A72]">
                (Digital Downloads)
              </span>
            </p>

            <p>
              시즌 무드 컬렉션
              <span className="ml-2 text-[#8A7A72]">
                (Seasonal Mood Collections)
              </span>
            </p>

          </div>

        </div>

      </section>

    </main>

  );

}