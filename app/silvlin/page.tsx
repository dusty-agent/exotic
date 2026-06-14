import Image from "next/image";

export default function SilvlinPage() {
  return (
    <main className="min-h-screen bg-[#FFFBF8]">
      <section className="max-w-6xl mx-auto px-8 pt-24 pb-32">

        <h1
          className="
            text-7xl
            md:text-9xl
            font-bold
            tracking-[-0.06em]
            leading-[0.9]
          "
        >
          SILVLIN
        </h1>

        <p
          className="
            mt-16
            text-2xl
            italic
            text-[#8A7A72]
          "
        >
          Silver for Everyday Stories.
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
            A curated collection of 925 sterling silver jewelry.
            <br />
            Thoughtfully selected for everyday wear,
            <br />
            timeless styling
            <br />
            and effortless gifting.
        </p>
      </section>

    {/* About */}

    <section className="max-w-6xl mx-auto px-8 pb-32">

      <div className="border-t border-[#D8C7BD] pt-20">

    <p
      className="
      text-sm
      tracking-[0.2em]
      uppercase
      text-[#B49A8D]
      "
    >
      About SILVLIN
    </p>

    <h2 className="mt-6 text-5xl font-light">
      925 실버의 은은한 매력
    </h2>

    <p
      className="
      mt-4
      text-xl
      italic
      text-[#8A7A72]
      "
    >
      Timeless Silver.
    </p>

    <p
      className="
      mt-10
      max-w-2xl
      text-lg
      leading-9
      text-[#8A7A72]
      "
    >
      SILVLIN은 Exotic Ordinary의
      실버 주얼리 컬렉션입니다.
      <br />
      <br />
      925 스털링 실버를 중심으로
      일상에서 편하게 착용할 수 있는
      주얼리를 선별하고 소개합니다.
      <br />
      <br />
      부담 없이,
      오래도록,
      자주 착용할 수 있는
      실버 주얼리.
    </p>

      </div>

    </section>

    <section className="max-w-6xl mx-auto px-8 pb-16">

      <div className="border-t border-[#D8C7BD] pt-24">

        <p
        className="
        text-sm
        tracking-[0.2em]
        uppercase
        text-[#B49A8D]
        "
        >
        Everyday Silver
        </p>

        <h2 className="mt-6 text-5xl font-light leading-tight">
         DAILY SILVLIN
        </h2>

        <p
        className="
        mt-4
        text-xl
        italic
        text-[#8A7A72]
        "
        >
        Made For Everyday Wear.
        </p>

        <p
        className="
        mt-10
        max-w-2xl
        text-lg
        leading-9
        text-[#8A7A72]
        "
        >
        주얼리는 특별한 날만을 위한
        물건이 아닙니다.
        <br />
        <br />
        SILVLIN은 매일 착용할 수 있는
        실용성과 아름다움을 추구합니다.
        <br />
        <br />
        나만의 시그니처 아이템으로,
        <br />
        혹은 소중한 사람을 위한 선물로.
        <br />
        <br />
        언제나 자연스럽게 함께하는
        925 실버 주얼리를 소개합니다.
        </p>

      </div>

    </section>
    <section className="max-w-6xl mx-auto px-8 pt-16 pb-20">
    <Image
          src="/warm_silvlin.png"
          alt="SILVLIN Collection"
          width={1600}
          height={900}
          priority
          className="
            w-full
            rounded-[40px]
            object-cover
          "
        />
            </section>

    <section className="max-w-6xl mx-auto px-8 pt-12 pb-24">

      <p
        className="
        text-sm
        tracking-[0.2em]
        uppercase
        text-[#B49A8D]
        "
      >
        컬렉션 | Collection
      </p>
     
      <h2 className="mt-6 text-5xl font-light">
        Awsome Silvers
      </h2>

      <div className="grid md:grid-cols-2 gap-8 mt-16">

      <div className="rounded-3xl border border-[#D8C7BD] bg-white p-8">

      <h3 className="text-2xl font-semibold">
        반지 | Rings →
      </h3>

      <p className="mt-4 text-[#8A7A72] leading-7">
        매일 착용하기 좋은
        심플한 실버 링 컬렉션.
        <br />
        Minimal silver rings
        designed for everyday wear.
      </p>

      </div>

      <div className="rounded-3xl border border-[#D8C7BD] bg-white p-8">

      <h3 className="text-2xl font-semibold">
        목걸이 | Necklaces →
      </h3>

      <p className="mt-4 text-[#8A7A72] leading-7">
        어떤 스타일에도 자연스럽게 어울리는
        데일리 네크리스.
        <br />
        Timeless necklaces for
        effortless everyday styling.
      </p>

      </div>

      <div className="rounded-3xl border border-[#D8C7BD] bg-white p-8">

      <h3 className="text-2xl font-semibold">
        귀걸이 | Earrings →
      </h3>

      <p className="mt-4 text-[#8A7A72] leading-7">
        가볍게 포인트를 더하는
        실버 이어링 컬렉션.
        <br />
        Lightweight pieces that add
        a subtle touch of personality.
      </p>

      </div>

      <div className="rounded-3xl border border-[#D8C7BD] bg-white p-8">

      <h3 className="text-2xl font-semibold">
        기타 | Etc. →
      </h3>

      <p className="mt-4 text-[#8A7A72] leading-7">
        발찌, 브로치,
        시즌 한정 상품 등
        다양한 실버 아이템.
        <br />
        Anklets, brooches,
        seasonal pieces and more.
      </p>

      </div>
      </div>

    </section>

    <section className="max-w-6xl mx-auto px-8 pt-16 pb-20">

      <div
        className="
        rounded-[40px]
        bg-white
        border
        border-[#D8C7BD]
        p-12
        "
      >
      <p
      className="
      text-sm
      uppercase
      tracking-[0.2em]
      text-[#B49A8D]
      "
      >
      온라인 스토어
      </p>

      <p
      className="
      mt-2
      text-sm
      text-[#8A7A72]
      "
      >
      Online Store
      </p>

      <h2 className="mt-6 text-5xl font-light leading-tight">
      전체 컬렉션 둘러보기
      </h2>

      <p
      className="
      mt-4
      text-lg
      italic
      text-[#8A7A72]
      "
      >
      Visit Our Online Shop.
      </p>

      <p
      className="
      mt-8
      max-w-2xl
      text-[#8A7A72]
      leading-8
      "
      >
      925 스털링 실버 컬렉션을
      온라인 스토어에서 만나보세요.
      <br />
      <br />
      반지, 목걸이, 귀걸이부터
      다양한 실버 액세서리까지.
      <br />
      일상 속에서 부담 없이 즐길 수 있는
      주얼리를 소개합니다.
      </p>

      <a
      href="https://smartstore.naver.com/exoticordinary"
      target="_blank"
      rel="noopener noreferrer"
      className="
      inline-block
      mt-10
      px-8
      py-4
      rounded-full
      bg-[#1E1E1E]
      text-white
      "
      >
      스토어 방문하기 →
      </a>

      </div>
    </section>


    </main>
  );
}