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

<section className="max-w-6xl mx-auto px-8 pb-32">
        <div className="border-t border-[#D8C7BD] pt-20">
          <p className="text-sm tracking-[0.2em] uppercase text-[#B49A8D]">
            About SILVLIN
          </p>

          <h2 className="mt-6 text-5xl font-light">
            Timeless Silver.
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
            SILVLIN is a silver jewelry collection
            by Exotic Ordinary.
            <br />
            <br />
            Built around 925 sterling silver,
            the collection celebrates everyday beauty,
            personal style and timeless simplicity.
            <br />
            <br />
            Designed to be approachable,
            wearable and easy to enjoy,
            SILVLIN offers carefully selected pieces
            for daily life and thoughtful gifting.
        </p>
        </div>
      </section>

      <Image
          src="/warm_silvlin.png"
          alt="SILVLIN Collection"
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

      <section className="max-w-6xl mx-auto px-8 py-24">
        <h2 className="text-4xl font-bold mb-12">
          Collection
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-3xl border border-[#D8C7BD] bg-white p-8">
            <h3 className="text-2xl font-semibold">
                Rings →
            </h3>

            <p className="mt-4 text-[#8A7A72] leading-7">
                Minimal and versatile silver rings
                designed to become part of your daily routine.
            </p>
          </div>

          <div className="rounded-3xl border border-[#D8C7BD] bg-white p-8">
            <h3 className="text-2xl font-semibold">
                Necklaces →
            </h3>

            <p className="mt-4 text-[#8A7A72] leading-7">
                Simple silhouettes and timeless details
                for effortless everyday styling.
            </p>
          </div>
          <div className="rounded-3xl border border-[#D8C7BD] bg-white p-8">
            <h3 className="text-2xl font-semibold">
                Earrings →
            </h3>

            <p className="mt-4 text-[#8A7A72] leading-7">
                 Lightweight pieces created to add
                a subtle touch of personality.
            </p>
        </div>
        <div className="rounded-3xl border border-[#D8C7BD] bg-white p-8">
            <h3 className="text-2xl font-semibold">
                Etc. →
            </h3>

            <p className="mt-4 text-[#8A7A72] leading-7">
                Small treasures,
                seasonal pieces
                and unexpected details
                waiting to be discovered.
            </p>
        </div>
        </div>
        
      </section>

      <section className="max-w-6xl mx-auto px-8 pb-32">
        <div className="border-t border-[#D8C7BD] pt-20">
          <p className="text-sm tracking-[0.2em] uppercase text-[#B49A8D]">
            About SILVLIN
          </p>

          <h2 className="mt-6 text-5xl font-light">
            Made for Everyday Wear.
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
            Jewelry doesn't need to wait
            for a special occasion.
            <br />
            <br />
            SILVLIN focuses on pieces designed
            to be worn every day,
            whether as a personal signature
            or a thoughtful gift.
            <br />
            <br />
            Simple, approachable and timeless —
            silver jewelry for ordinary moments.SILVLIN is a silver jewelry collection
            by Exotic Ordinary.
        </p>
        </div>
      </section>

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

            <p className="text-sm uppercase tracking-[0.2em] text-[#B49A8D]">
            Explore Collection
            </p>

            <h2 className="mt-6 text-5xl font-light">
            Visit Our Online Shop.
            </h2>

            <p className="mt-8 max-w-xl text-[#8A7A72] leading-8">
            Browse our complete collection of
            925 sterling silver jewelry
            available through our online store.
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
            Visit Shop →
            </a>

        </div>

        </section>
    </main>
  );
}