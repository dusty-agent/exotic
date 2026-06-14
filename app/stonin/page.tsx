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
      Not every stone becomes jewelry.
      <br />
      Some are collected.
      <br />
      Some are studied.
      <br />
      Some are remembered.
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
        Curated Stones
      </p>

      <h2
        className="
        mt-6
        text-5xl
        font-light
        "
      >
        Beyond Jewelry.
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
        STONIN is a gemstone archive
        by Exotic Ordinary.
        <br />
        <br />
        Built around carefully selected
        natural stones,
        the archive documents materials
        chosen for their beauty,
        rarity and long-term significance.
        <br />
        <br />
        Some remain as archives.
        <br />
        Others become something extraordinary.
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
    Visit The Studio.
  </h2>

  <p
    className="
    mt-8
    max-w-xl
    text-[#8A7A72]
    leading-8
    "
  >
    Select a gemstone,
    explore design possibilities
    and submit a bespoke creation request.
    <br />
    <br />
    Each project begins with a stone
    and becomes part of a personal story.
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
  {/* Stone Archive */}

  <section className="max-w-6xl mx-auto px-8 py-24">

    <h2 className="text-4xl font-bold mb-12">
      Stone Archive
    </h2>

    <div className="grid md:grid-cols-2 gap-8">

      <div className="rounded-3xl border border-[#D8C7BD] bg-white p-8">
        <h3 className="text-2xl font-semibold">
          Rhodolite Garnet →
        </h3>

        <p className="mt-4 text-[#8A7A72] leading-7">
          Certified natural garnet
          selected for future collections
          and bespoke creations.
        </p>
      </div>

      <div className="rounded-3xl border border-[#D8C7BD] bg-white p-8">
        <h3 className="text-2xl font-semibold">
          Moonstone →
        </h3>

        <p className="mt-4 text-[#8A7A72] leading-7">
          Known for its luminous glow
          and timeless character.
        </p>
      </div>

      <div className="rounded-3xl border border-[#D8C7BD] bg-white p-8">
        <h3 className="text-2xl font-semibold">
          Labradorite →
        </h3>

        <p className="mt-4 text-[#8A7A72] leading-7">
          A stone celebrated for its
          shifting colors and depth.
        </p>
      </div>

      <div className="rounded-3xl border border-[#D8C7BD] bg-white p-8">
        <h3 className="text-2xl font-semibold">
          Pearl →
        </h3>

        <p className="mt-4 text-[#8A7A72] leading-7">
          Natural elegance preserved
          through generations.
        </p>
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
        Every gemstone begins with nature.
        <br />
        <br />
        At STONIN,
        we focus on carefully selected stones
        with distinctive character,
        documented origins
        and lasting beauty.
        <br />
        <br />
        Certified gemstones.
        <br />
        Curated with intention.
        <br />
        Crafted without compromise.
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
        Visit The Studio.
      </h2>

      <p
        className="
        mt-8
        max-w-xl
        text-[#8A7A72]
        leading-8
        "
      >
        Select a gemstone,
        explore design possibilities
        and submit a bespoke creation request.
        <br />
        <br />
        Each project begins with a stone
        and becomes part of a personal story.
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
