import Image from "next/image";

export default function StoninPage() {
  return (
    <main className="min-h-screen bg-[#FFFBF8]">
      <section className="max-w-6xl mx-auto px-8 pt-24 pb-32">
        <Image
          src="/stonin_hero.jpg"
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
          Discover gemstones,
          their stories,
          their origins,
          and their future possibilities.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-8 py-24">
        <h2 className="text-4xl font-bold mb-12">
          Stone Archive
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-3xl border border-[#D8C7BD] bg-white p-8">
            <h3 className="text-2xl font-semibold">
              Rhodolite Garnet
            </h3>

            <p className="mt-4 text-[#8A7A72] leading-7">
              Natural gemstone with
              certificate and archival records.
            </p>
          </div>

          <div className="rounded-3xl border border-[#D8C7BD] bg-white p-8">
            <h3 className="text-2xl font-semibold">
              Moonstone
            </h3>

            <p className="mt-4 text-[#8A7A72] leading-7">
              Curated stones selected
              for future collections
              and custom creations.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-8 pb-32">
        <div className="border-t border-[#D8C7BD] pt-20">
          <p className="text-sm tracking-[0.2em] uppercase text-[#B49A8D]">
            About STONIN
          </p>

          <h2 className="mt-6 text-5xl font-light">
            Beyond Jewelry.
          </h2>

          <p className="mt-10 max-w-2xl text-lg leading-9 text-[#8A7A72]">
            STONIN is an evolving archive
            dedicated to gemstones,
            mineral beauty and craftsmanship.
            <br />
            <br />
            Some stones remain as collections.
            Others become part of future creations.
          </p>
        </div>
      </section>
    </main>
  );
}