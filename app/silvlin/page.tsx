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
              text-[#8A7A72]
            "
          >
            Silver For Everyday.
          </p>

          <p
          className="
          mt-10
          max-w-xl
          text-lg
          leading-9
          text-[#8A7A72]
          "
        >
           데일리 용도로 엄선한 실버 컬렉션.
           <br/>
           소중한 나에게 선물하세요.
          </p>
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
        DAYPIECE
        </p>

        <h2 className="mt-6 text-5xl font-light">
        For everyday.
        </h2>

        <p
          className="
          mt-10
          max-w-xl
          text-lg
          leading-9
          text-[#8A7A72]
          "
        >
        925 실버를 중심으로
        <br />
        매일 부담 없이 착용할 수 있는
        <br />
        주얼리를 소개합니다.

        <br />
        <br />

        오래도록,
        자주 손이 가는
        실버 컬렉션.
        </p>
      </div>

    </section>
    <section className="max-w-6xl mx-auto px-8 pt-16 pb-20">
    <Image
          src="/warm_silvlin.png"
          alt="SILVLIN Collection"
          width={1600}
          height={900}
          draggable={false}
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
        Collection
        </p>
      <h2 className="mt-6 text-5xl font-light">
          DAYPIECES
      </h2>

      <div className="grid md:grid-cols-2 gap-8 mt-16">

      <div className="rounded-3xl border border-[#D8C7BD] bg-white p-8">

      <h3 className="text-2xl font-semibold">
        Rings →
      </h3>

      <p className="mt-4 text-[#8A7A72] leading-7">
        일상에 어울리는 심플한 실버 반지.
        <br/>
        Minimal silver rings
        for everyday wear.
      </p>

      </div>

      <div className="rounded-3xl border border-[#D8C7BD] bg-white p-8">

      <h3 className="text-2xl font-semibold">
        Necklaces →
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
        Earrings →
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

    <p
          className="
          text-sm
          tracking-[0.2em]
          uppercase
          text-[#B49A8D]
          "
        >
        visit store
        </p>
      <h2 className="mt-6 text-5xl font-light">
      온라인 스토어
      </h2>

        <p
          className="
          mt-6
          max-w-md
          text-[#8A7A72]
          leading-8
          "
        >
        Explore the full SILVLIN collection.
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

</section>

    </main>
  );
}