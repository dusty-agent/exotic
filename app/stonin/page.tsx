import Image from "next/image";

export default function StoninPage() {
return ( 
<main className="min-h-screen bg-[#FFFBF8]">
 
  {/* Hero */}

  <section className="max-w-6xl mx-auto px-8 pt-24 pb-20">

    <h1
      className="
      text-7xl
      md:text-9xl
      font-bold
      tracking-[-0.06em]
      leading-[0.9]
      "
    >
      STONIN
    </h1>

    <p
      className="
      mt-16
      text-2xl
      italic
      text-[#8A7A72]
      "
    >
      A Living Archive of Gemstones.
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
      원석이 보석이 되어,
      <br />
      당신만의 이야기가 됩니다.
      <br />
      <br />
      엄선된 원석.
      <br />
      오직 당신만을 위한 디자인.
      <br />
      세상에 하나뿐인 주얼리.
      <br />
      <br />
      One Of a Kind.
      <br />
      Trends Begin With You.
    </p>

  </section>

  <Image
          src="/stonin_studio.png"
          alt="STONIN Collection"
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
  원석 아카이브 | Gemstone Archive
  </p>

  <h2
  className="
  mt-6
  text-5xl
  font-light
  leading-tight
  "
  >
  원석을 기록하고,
  <br />
  가치를 이어갑니다.
  </h2>

  <p
  className="
  mt-4
  text-xl
  italic
  text-[#8A7A72]
  "
  >
  Beyond Jewelry.
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
  STONIN은 Exotic Ordinary의
  <br />
  원석 아카이브 프로젝트입니다.
  <br />
  <br />
  엄선된 천연 원석과
  <br />
  감정서가 있는 스톤을
  <br />
  사용하고 제공합니다.
  <br />
  <br />
  일부 원석은 맞춤 제작을 통해
  <br />
  세상에 단 하나뿐인 주얼리로 완성됩니다.
  </p>

  </div>

  </section>


  {/* Hero Image */}

  <Image
    src="/stonin_hero.png"
    alt="STONIN Archive"
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

  {/* Stone Archive */}

  <section className="max-w-6xl mx-auto px-8 py-24">

    <h2 className="text-4xl font-bold mb-12">
      Stone Archive
    </h2>

    <div className="grid md:grid-cols-2 gap-8">

    <div className="rounded-3xl border border-[#D8C7BD] bg-white p-8">

      <h3 className="text-2xl font-semibold">
        로돌라이트 가넷
      </h3>

      <p
        className="
        mt-2
        text-sm
        italic
        text-[#8A7A72]
        "
      >
        Rhodolite Garnet
      </p>

      <p
        className="
        mt-6
        text-[#8A7A72]
        leading-7
        "
      >
        감정서 보유 원석.
        <br />
        맞춤 제작 가능.
      </p>

      <p
        className="
        mt-4
        text-sm
        text-[#8A7A72]
        "
      >
        Certified gemstone available
        for bespoke jewelry creation.
      </p>

      <a
      href="/studio"
      className="
      inline-block
      mt-8
      px-6
      py-3
      rounded-full
      border
      border-[#D8C7BD]
      transition-all
      hover:bg-[#F4EBE8]
      "

      >

      이 원석으로 제작하기 →

    </a>

  </div>


      <div className="rounded-3xl border border-[#D8C7BD] bg-white p-8">

        <h3 className="text-2xl font-semibold">
          천연 아콰마린
        </h3>

        <p
          className="
          mt-2
          text-sm
          italic
          text-[#8A7A72]
          "
        >
          Natural Aquamarine;Beryl
        </p>

        <p
          className="
          mt-6
          text-[#8A7A72]
          leading-7
          "
        >
          감정서 보유 원석.
          <br />
          맞춤 제작 가능.
        </p>

        <p
          className="
          mt-4
          text-sm
          text-[#8A7A72]
          "
        >
          Certified gemstone available
          for bespoke jewelry creation.
        </p>

        <a
        href="/studio"
        className="
        inline-block
        mt-8
        px-6
        py-3
        rounded-full
        border
        border-[#D8C7BD]
        transition-all
        hover:bg-[#F4EBE8]
        "

        >

        이 원석으로 제작하기 →

        </a>

      </div>

      <div className="rounded-3xl border border-[#D8C7BD] bg-white p-8">

        <h3 className="text-2xl font-semibold">
          천연 그린 사파이어
        </h3>

        <p
          className="
          mt-2
          text-sm
          italic
          text-[#8A7A72]
          "
        >
          Natural Green Sapphire:Corundum
        </p>

        <p
          className="
          mt-6
          text-[#8A7A72]
          leading-7
          "
        >
          감정서 보유 원석.
          <br />
          맞춤 제작 가능.
        </p>

        <p
          className="
          mt-4
          text-sm
          text-[#8A7A72]
          "
        >
          Certified gemstone available
          for bespoke jewelry creation.
        </p>

        <a
        href="/studio"
        className="
        inline-block
        mt-8
        px-6
        py-3
        rounded-full
        border
        border-[#D8C7BD]
        transition-all
        hover:bg-[#F4EBE8]
        "

        >

        이 원석으로 제작하기 →

        </a>

      </div>
      <div className="rounded-3xl border border-[#D8C7BD] bg-white p-8">

        <h3 className="text-2xl font-semibold">
          천연 지르콘
        </h3>

        <p
          className="
          mt-2
          text-sm
          italic
          text-[#8A7A72]
          "
        >
          Natural Zircon
        </p>

        <p
          className="
          mt-6
          text-[#8A7A72]
          leading-7
          "
        >
          감정서 보유 원석.
          <br />
          맞춤 제작 가능.
        </p>

        <p
          className="
          mt-4
          text-sm
          text-[#8A7A72]
          "
        >
          Certified gemstone available
          for bespoke jewelry creation.
        </p>

        <a
        href="/studio"
        className="
        inline-block
        mt-8
        px-6
        py-3
        rounded-full
        border
        border-[#D8C7BD]
        transition-all
        hover:bg-[#F4EBE8]
        "

        >

        이 원석으로 제작하기 →

        </a>
        </div>
        <div className="rounded-3xl border border-[#D8C7BD] bg-white p-8">
        <h3 className="text-2xl font-semibold">
          천연 투어멀린
        </h3>

        <p
          className="
          mt-2
          text-sm
          italic
          text-[#8A7A72]
          "
        >
          Natural Tourmaline
        </p>

        <p
          className="
          mt-6
          text-[#8A7A72]
          leading-7
          "
        >
          감정서 보유 원석.
          <br />
          맞춤 제작 가능.
        </p>

        <p
          className="
          mt-4
          text-sm
          text-[#8A7A72]
          "
        >
          Certified gemstone available
          for bespoke jewelry creation.
        </p>

        <a
        href="/studio"
        className="
        inline-block
        mt-8
        px-6
        py-3
        rounded-full
        border
        border-[#D8C7BD]
        transition-all
        hover:bg-[#F4EBE8]
        "

        >

        이 원석으로 제작하기 →

        </a>

      </div>

      <div className="rounded-3xl border border-[#D8C7BD] bg-white p-8">

        <h3 className="text-2xl font-semibold">
          천연 토파즈
        </h3>

        <p
          className="
          mt-2
          text-sm
          italic
          text-[#8A7A72]
          "
        >
          Natural Topaz
        </p>

        <p
          className="
          mt-6
          text-[#8A7A72]
          leading-7
          "
        >
          감정서 보유 원석.
          <br />
          맞춤 제작 가능.
        </p>

        <p
          className="
          mt-4
          text-sm
          text-[#8A7A72]
          "
        >
          Certified gemstone available
          for bespoke jewelry creation.
        </p>

        <a
        href="/studio"
        className="
        inline-block
        mt-8
        px-6
        py-3
        rounded-full
        border
        border-[#D8C7BD]
        transition-all
        hover:bg-[#F4EBE8]
        "

        >

        이 원석으로 제작하기 →

        </a>

      </div>
      <div className="rounded-3xl border border-[#D8C7BD] bg-white p-8">

        <h3 className="text-2xl font-semibold">
          천연 로돌라이트 가닛
        </h3>

        <p
          className="
          mt-2
          text-sm
          italic
          text-[#8A7A72]
          "
        >
          Natural Rhodolite;Garnet
        </p>

        <p
          className="
          mt-6
          text-[#8A7A72]
          leading-7
          "
        >
          감정서 보유 원석.
          <br />
          맞춤 제작 가능.
        </p>

        <p
          className="
          mt-4
          text-sm
          text-[#8A7A72]
          "
        >
          Certified gemstone available
          for bespoke jewelry creation.
        </p>

        <a
        href="/studio"
        className="
        inline-block
        mt-8
        px-6
        py-3
        rounded-full
        border
        border-[#D8C7BD]
        transition-all
        hover:bg-[#F4EBE8]
        "

        >

        이 원석으로 제작하기 →

        </a>

      </div>

    </div>

  </section>

  {/* Philosophy */}

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
        Philosophy
      </p>

      <h2
        className="
        mt-6
        text-5xl
        font-light
        "
      >
        Certified. Curated. Collected.
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
        자연의 아름다움을 뽐내는 원석을 만나보세요.
        <br />
        <br />
        STONIN에서는
        독특한 개성과
        변치않는 아름다움을 지닌 엄선된 보석으로
        영원한 아름다움을 선사합니다.
        <br />
        <br />
        인증된 보석 | Certified gemstones.
        <br />
        정성을 담아 선별 | Curated with intention.
        <br />
        타협없는 장인정신 | Crafted without compromise.
      </p>

    </div>

  </section>

  {/* Studio CTA */}

  <section className="max-w-6xl mx-auto px-8 py-24">

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
        Create With A Stone
      </p>

      <h2 className="mt-6 text-5xl font-light">
        스튜디오 방문하기
      </h2>

      <p
        className="
        mt-8
        max-w-xl
        text-[#8A7A72]
        leading-8
        "
      >
        보석을 선택하고,
        <br />
        다양한 디자인 가능성을 살펴본 후, 
        맞춤 제작 요청서를 제출하세요.
        <br />
        <br />
        모든 프로젝트는 보석으로부터 시작하는
        당신만의 이야기를 만들어 드립니다.
      </p>

      <a
        href="/studio"
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
        Open Studio →
      </a>

    </div>

  </section>

</main>

);
}
