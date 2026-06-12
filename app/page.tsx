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
      Beauty in the Mirror.
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
      Creating experiences through
      <br />
      craftsmanship,
      <br />
      storytelling,
      <br />
      sound,
      <br />
      and digital spaces.
    </p>

  </section>

  {/* Experiences */}

  <section className="max-w-6xl mx-auto px-8 py-20">

    <h2 className="text-4xl font-bold mb-12">
      Experiences
    </h2>

    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

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
          Journal & Archive →
        </h3>

        <p className="mt-4 text-[#8A7A72] leading-7">
          Stories, reflections and
          creative records from
          Exotic Ordinary.
        </p>
      </a>

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
          Visual Stories →
        </h3>

        <p className="mt-4 text-[#8A7A72] leading-7">
          Short films, sequences
          and visual inspiration.
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
          Soundscapes →
        </h3>

        <p className="mt-4 text-[#8A7A72] leading-7">
          Original sounds and atmospheres
          curated by Exotic Ordinary.
        </p>
      </a>

    </div>

  </section>

  {/* Craft & Commerce */}

  <section className="max-w-6xl mx-auto px-8 pb-32">

    <h2 className="text-4xl font-bold mb-12">
      Craft & Commerce
    </h2>

    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

      <a
        href="https://naver.me/GctERDE8"
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
          The Exotic Boutique →
        </h3>

        <p className="mt-4 text-[#8A7A72] leading-7">
          Visit our boutique and showroom.
        </p>
      </a>

      <a
        href="https://smartstore.naver.com/exoticordinary"
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
          Naver Shop →
        </h3>

        <p className="mt-4 text-[#8A7A72] leading-7">
          Browse collections and online orders.
        </p>
      </a>

      <a
        href="/voutique"
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
          The Exotic Voutique™ →
        </h3>

        <p className="mt-4 text-[#8A7A72] leading-7">
          Curation technology for custom jewelry,
          craftsmanship and future commerce.
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
    Experiences beyond objects.
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
    Exotic Ordinary is an ongoing exploration of beauty.
    <br />
    <br />
    From objects and jewelry
    <br />
    to stories, sounds and digital experiences,
    <br />
    each project begins with curiosity
    <br />
    and ends as part of a growing archive.
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

<div className="mt-24 pt-12 border-t border-[#E3D0CC]">

  <p className="text-sm uppercase tracking-[0.2em] text-[#B49A8D]">
    Part of DRAFT House
  </p>

  <p className="mt-6 max-w-xl text-[#8A7A72] leading-8">
    An independent ecosystem of
    experiences, technology and intelligence.
  </p>

</div>

</section>
</main>

);
}
