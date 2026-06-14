import Image from "next/image";

export default function Home() {
return ( <main className="min-h-screen bg-[#FFFBF8]">

  {/* Hero */}

  <section className="max-w-6xl mx-auto px-8 pt-24 pb-20">

      <Image
      src="/warm_silvlin.png"
      alt="Exotic Ordinary Collection"
      width={1600}
      height={900}
      priority
      className="
      mb-28
      w-full
      rounded-[40px]
      object-cover
      "
    />


<h1
      className="
      Mmt-24
      text-7xl
      md:text-9xl
      font-bold
      tracking-[-0.06em]
      leading-[0.9]
      "
    >
      EXOTIC
      <br />
      ORDINARY®
    </h1>

    <p
      className="
      mt-16
      text-2xl
      italic
      text-[#8A7A72]
      "
    >
      아름다움을 기록합니다.
    </p>

    <p
      className="
      mt-10
      max-w-xl
      text-base
      leading-8
      text-[#8A7A72]
      "
    >
      Exotic Ordinary는
      아름다움에 대한 기록입니다.
      <br />
      <br />
      주얼리,
      원석,
      이야기,
      공간,
      그리고 디지털 경험까지.
      <br />
      <br />
      모든 프로젝트는
      호기심에서 시작되어
      하나의 아카이브로 남습니다.
    </p>

  </section>

  {/* Experiences */}

  <section className="max-w-6xl mx-auto px-8 py-20">

    <h2 className="text-4xl font-bold mb-12">
    Media
    </h2>

    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

      <a
        href="https://www.youtube.com/@exoticordinary"
        target="_blank"
        rel="noopener noreferrer"
        className="
        rounded-3xl
        border
        border-[##D8C7BD]
        bg-white
        p-8
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
        "
      >
        <h3 className="text-2xl font-semibold">
          영상 | Visual Stories →
        </h3>

        <p className="mt-4 text-[#8A7A72] leading-7">
          브랜드 필름,
          숏폼 콘텐츠와
          비주얼 프로젝트.
        </p>
      </a>
      <a
        href="https://blog.naver.com/assetpick1"
        target="_blank"
        rel="noopener noreferrer"
        className="
        rounded-3xl
        border
        border-[##D8C7BD]
        bg-white
        p-8
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
        "
      >
        <h3 className="text-2xl font-semibold">
          저널 | Journal →
        </h3>

        <p className="mt-4 text-[#8A7A72] leading-7">
          Exotic Ordinary의 기록,
          생각과 이야기들을 공유합니다.
        </p>
      </a>

      <a
        href="https://soundcloud.com/exoticarchive"
        target="_blank"
        rel="noopener noreferrer"
        className="
        rounded-3xl
        border
        border-[##D8C7BD]
        bg-white
        p-8
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
        "
      >
        <h3 className="text-2xl font-semibold">
          사운드 | Sound Archive →
        </h3>

        <p className="mt-4 text-[#8A7A72] leading-7">
          Exotic Ordinary가 수집하고
          기록하는 사운드.
        </p>
      </a>

    </div>

  </section>

  {/* Craft & Commerce */}

  <section className="max-w-6xl mx-auto px-8 pb-32">

    <h2 className="text-4xl font-bold mb-12">
      Collections
    </h2>

    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

      <a
        href="/silvlin"
        className="
        rounded-3xl
        border
        border-[#D8C7BD]
        bg-white
        p-8
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
        "
      >
        <h3 className="text-2xl font-semibold">
          SILVLIN™ →
        </h3>

        <p className="mt-2 text-sm text-[#8A7A72]">
          925 Silver Jewelry
        </p>

        <p className="mt-4 text-[#8A7A72] leading-7">
          일상을 위한
          925 실버 주얼리 컬렉션.
        </p>
      </a>

      <a
        href="/stonin"
        className="
        rounded-3xl
        border
        border-[#D8C7BD]
        bg-white
        p-8
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
        "
      >
        <h3 className="text-2xl font-semibold">
          STONIN™ →
        </h3>

        <p className="mt-2 text-sm text-[#8A7A72]">
          Gemstone Archive
        </p>

        <p className="mt-4 text-[#8A7A72] leading-7">
          엄선된 원석과
          맞춤 제작 주얼리.
        </p>
      </a>

      <a
        href="/studio"
        className="
        rounded-3xl
        border
        border-[#D8C7BD]
        bg-white
        p-8
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
        "
      >
        <h3 className="text-2xl font-semibold">
          Studio™ →
        </h3>

        <p className="mt-2 text-sm text-[#8A7A72]">
          Design Your Own Jewelry
        </p>

        <p className="mt-4 text-[#8A7A72] leading-7">
          세상에 하나뿐인
          나만의 주얼리를 제작해보세요.
        </p>
      </a>
      

    </div>

  </section>

  <section className="max-w-6xl mx-auto px-8 py-32">

<div className="border-t border-[#D8C7BD] pt-20">

  <p
    className="
    text-sm
    tracking-[0.2em]
    uppercase
    text-[#B49A8D]
    "
  >
    Creative Direction
  </p>

  <h2
    className="
    mt-6
    text-5xl
    md:text-6xl
    font-light
    leading-tight
    "
  >
    아름다움을 기록합니다.
  </h2>

  <p
    className="
    mt-10
    max-w-2xl
    text-lg
    leading-9
    text-[#8A7A72]
    "
  >
    Exotic Ordinary는
    아름다움을 탐구하는 프로젝트입니다.
    <br />
    <br />
    SILVLIN의 실버 컬렉션,
    STONIN의 원석 아카이브,
    그리고 Studio의 맞춤 제작 경험까지.
    <br />
    <br />
    각각의 프로젝트는
    서로 연결되어
    하나의 생태계를 만들어갑니다.
  </p>

  <div className="mt-16">

    <p className="font-semibold">
      Creative Director
    </p>

    <p className="mt-2 text-[#8A7A72]">
      So Young Jang
    </p>

  </div>

</div>

</section>
</main>

);
}
