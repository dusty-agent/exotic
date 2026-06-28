import Image from "next/image";
import Link from "next/link";
import { silvlin } from "@/app/store/data/silvlin";

export default function SilvlinPage() {
  return (
    <main className="min-h-screen bg-[#FFFBF8]">

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-8 pt-24 pb-32">

        <p className="text-sm uppercase tracking-[0.2em] text-[#B49A8D]">
          SILVLIN
        </p>

        <h1
          className="
          mt-8
          text-8xl
          md:text-[10rem]
          font-light
          leading-[0.9]
          tracking-[-0.08em]
          "
        >
          DAY
          <br />
          PIECES
        </h1>

        <p
          className="
          mt-12
          text-xl
          italic
          text-[#8A7A72]
          "
        >
          Everyday Silver Collection
          <br />
          from EXOTIC ORDINARY.
        </p>

      </section>

      {/* Categories */}

      <section className="max-w-6xl mx-auto px-8 pb-24">

        <div className="grid md:grid-cols-4 gap-8">

          <div>
            <p className="text-[#B49A8D]">01</p>
            <h3 className="mt-2 text-2xl font-light">
              Rings
            </h3>
          </div>

          <div>
            <p className="text-[#B49A8D]">02</p>
            <h3 className="mt-2 text-2xl font-light">
              Necklaces
            </h3>
          </div>

          <div>
            <p className="text-[#B49A8D]">03</p>
            <h3 className="mt-2 text-2xl font-light">
              Earrings
            </h3>
          </div>

          <div>
            <p className="text-[#B49A8D]">04</p>
            <h3 className="mt-2 text-2xl font-light">
              Bracelets
            </h3>
          </div>

        </div>

      </section>

      {/* Manifesto */}

      <section className="max-w-5xl mx-auto px-8 py-32 border-t border-[#D8C7BD]">

        <p className="text-sm uppercase tracking-[0.2em] text-[#B49A8D]">
          SILVLIN from EXOTIC ORDINARY
        </p>

        <h2 className="mt-8 text-5xl font-light">
          Everyday Silver Collection
        </h2>

        <p className="mt-12 text-lg leading-9 text-[#8A7A72]">
          일상 속 작은 분위기를 남기는
          <br />
          가볍고 따뜻한 실버 컬렉션.
          <br />
          <br />
          매일 함께할 수 있는
          조용한 조각들을 제안합니다.
        </p>

      </section>

      {/* Products */}

      <section className="max-w-6xl mx-auto px-8 py-24">

        <div className="grid md:grid-cols-2 gap-16">

          {Object.entries(silvlin).map(([slug, product]) => (

            <Link
              key={slug}
              href={`/store/silvlin/${slug}`}
            >

              <Image
                src={product.images.hero}
                alt={product.title}
                width={1200}
                height={1200}
                draggable={false}
                className="
                w-full
                rounded-[32px]
                object-cover
                "
              />

              <div className="mt-8">

                <p className="text-[#B49A8D]">
                  {product.category}
                </p>

                <h2 className="mt-2 text-4xl font-light">
                  {product.title}
                </h2>

                <p className="mt-4 text-[#8A7A72]">
                  {product.price.toLocaleString()} KRW
                </p>

              </div>

            </Link>

          ))}

        </div>

      </section>

      {/* Mood */}

      <section className="max-w-5xl mx-auto px-8 py-32 border-t border-[#D8C7BD]">

        <p className="text-sm uppercase tracking-[0.2em] text-[#B49A8D]">
          Mood
        </p>

        <h2 className="mt-8 text-5xl font-light">
          Quiet Pieces.
          <br />
          Warm Pieces.
          <br />
          Everyday Pieces.
        </h2>

      </section>

      {/* Gift */}

      <section className="max-w-5xl mx-auto px-8 py-32">

        <div
          className="
          border
          border-[#D8C7BD]
          rounded-[40px]
          p-20
          text-center
          "
        >

          <p className="text-sm uppercase tracking-[0.2em] text-[#B49A8D]">
            Gift Wrapping
          </p>

          <h2 className="mt-8 text-5xl font-light">
            Prepared With Care.
          </h2>

          <p className="mt-10 text-[#8A7A72] leading-9">
            Every piece is carefully wrapped
            before shipping.
            <br />
            <br />
            Ready to be gifted.
          </p>

        </div>

      </section>

      {/* Footer */}

      <section className="max-w-6xl mx-auto px-8 pb-32">

        <div className="border-t border-[#D8C7BD] pt-16">

          <p className="text-[#B49A8D] tracking-[0.2em]">
            SILVLIN
          </p>

          <h2 className="mt-8 text-6xl font-light">
            from EXOTIC ORDINARY
          </h2>

          <p className="mt-8 text-[#8A7A72]">
            Seoul, Korea
          </p>

        </div>

      </section>

    </main>
  );
}