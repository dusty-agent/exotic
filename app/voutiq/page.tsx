import Link from "next/link";

export default function VoutiquePage() {
  return (
    <main className="bg-[#090909] text-[#F7F1EC]">

      {/* HERO */}

      <section className="mx-auto max-w-5xl px-8 py-32">

      <p className="tracking-[0.3em] uppercase text-[#E7B0B5]">
            VOUTIQ™
      </p>

            <h1
            className="
            mt-6
            text-6xl
            md:text-8xl
            font-bold
            tracking-[-0.06em]
            "
            >
            Curation
            <br />
            For The
            <br />
            Future.
            </h1>

            <p
            className="
            mt-10
            max-w-2xl
            text-lg
            leading-8
            text-[#C2B5AD]
            "
            >
            VOUTIQ™는 맞춤형 경험을 위한
            큐레이션 프레임워크입니다.
            <br />
            <br />
            사람,
            이야기,
            제작 과정을 연결하여
            새로운 경험을 설계합니다.
        </p>

        <div className="mt-16 flex flex-wrap gap-6">

          <Link
            href="/studio"
            className="
            inline-flex
            rounded-full
            border
            border-[#E7B0B5]
            px-8
            py-4
            text-lg
            transition
            hover:bg-[#E7B0B5]
            hover:text-black
            "
          >
            Enter Studio →
          </Link>

          <a
            href="https://youtu.be/tKdXWK6GbQA?si=eeLMp_f5HdylIkVd"
            target="_blank"
            rel="noopener noreferrer"
            className="
            inline-flex
            rounded-full
            border
            border-[#E7B0B5]
            px-8
            py-4
            text-lg
            transition
            hover:bg-[#E7B0B5]
            hover:text-black
            "
          >
            Watch Concept Film →
          </a>

        </div>

      </section>

      {/* WHAT IS VOUTIQ */}

      <section className="mx-auto max-w-5xl px-8 pt-24 pb-20">

      <p className="tracking-[0.3em] uppercase text-[#E7B0B5]">
        What is VOUTIQ™
        </p>

        <h2 className="mt-6 text-5xl font-light leading-tight">
        브랜드가 아닌,
        <br />
        프레임워크.
        </h2>

        <p className="mt-12 max-w-3xl text-lg leading-9 text-[#C2B5AD]">

        VOUTIQ™는 Dusty Draft가 개발한
        큐레이션 프레임워크입니다.

        상담,
        스토리텔링,
        제작,
        기술을 하나의 경험으로 연결합니다.

        현재는 맞춤 주얼리 분야에서
        처음 적용되고 있으며,

        앞으로 다양한 분야로
        확장될 수 있습니다.

        </p>

      </section>

      {/* FRAMEWORK */}

      <section className="mx-auto max-w-5xl px-8 pt-24 pb-20">

        <div className="grid md:grid-cols-3 gap-8">

          <div className="border border-[#333] rounded-3xl p-8">
            <p className="text-[#E7B0B5]">01</p>

            <h3 className="mt-4 text-2xl font-semibold">
              발견 <br/> Discovery
            </h3>

            <p className="mt-6 text-[#C2B5AD] leading-8">
              Personal consultation.
              <br />
              Storytelling.
              <br />
              Material selection.
            </p>
          </div>

          <div className="border border-[#333] rounded-3xl p-8">
            <p className="text-[#E7B0B5]">02</p>

            <h3 className="mt-4 text-2xl font-semibold">
              제작  <br/> Creation
            </h3>

            <p className="mt-6 text-[#C2B5AD] leading-8">
              Jewelry design.
              <br />
              Custom production.
              <br />
              Future artisan network.
            </p>
          </div>

          <div className="border border-[#333] rounded-3xl p-8">
            <p className="text-[#E7B0B5]">03</p>

            <h3 className="mt-4 text-2xl font-semibold">
              경험  <br/> Experience
            </h3>

            <p className="mt-6 text-[#C2B5AD] leading-8">
              Digital workflows.
              <br />
              Experience tools.
              <br />
              AI assisted curation.
            </p>
          </div>

        </div>

      </section>
      

      {/* STATUS */}

      <section className="mx-auto max-w-5xl px-8 pb-16">

        <div className="border-t border-[#222] pt-16">

          {/* STATUS */}



            <p
            className="
            tracking-[0.3em]
            uppercase
            text-[#E7B0B5]
            "
            >
            현재 상태
            </p>

            <p
            className="
            mt-2
            text-sm
            text-[#C2B5AD]
            "
            >
            Current Status
            </p>

            <div className="mt-8 space-y-3 text-[#C2B5AD]">

            <p>
            • VOUTIQ™ 프레임워크 구축 완료
            </p>

            <p>
            • 대한민국 상표 출원 진행
            </p>

            <p>
            • STONIN™ 맞춤 주얼리 시스템 운영
            </p>

            <p>
            • Studio 주문 제작 시스템 운영
            </p>

            <p>
            • 더스티드래프트(Dusty Draft) 기획, 드래프트(draft) 개발
            </p>

            </div>



        </div>

      </section>

      <section className="mx-auto max-w-5xl px-8 pb-16">

        <div className="border-t border-[#222] pt-16">

        <p
        className="
        tracking-[0.3em]
        uppercase
        text-[#E7B0B5]
        "
        >
        생태계
        </p>

        <p
        className="
        mt-2
        text-sm
        text-[#C2B5AD]
        "
        >
        Ecosystem
        </p>

        <h2 className="mt-6 text-5xl font-light leading-tight">
        경험을 통해
        <br />
        만들어가는 생태계
        </h2>

        <p
        className="
        mt-4
        italic
        text-[#C2B5AD]
        "
        >
        Built Through Experience.
        </p>

        <div className="mt-12 space-y-8">

        <div>

            <p className="text-2xl">
            STONIN™
            </p>

            <p className="mt-2 text-[#C2B5AD]">
            감정서가 있는 원석과
            맞춤 제작 주얼리
            </p>

        </div>

        <div>

            <p className="text-2xl">
            SILVLIN™
            </p>

            <p className="mt-2 text-[#C2B5AD]">
            일상을 위한
            925 실버 주얼리
            </p>

        </div>

        <div>

            <p className="text-2xl">
            Studio
            </p>

            <p className="mt-2 text-[#C2B5AD]">
            나만의 주얼리를
            직접 구성하고 제작 요청
            </p>

        </div>

        </div>

        <Link
        href="/studio"
        className="
        inline-flex
        mt-12
        rounded-full
        border
        border-[#E7B0B5]
        px-8
        py-4
        "
        >
        스튜디오 열기 →
        </Link>

        </div>

        </section>


    </main>
  );
}