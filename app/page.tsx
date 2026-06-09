import Image from "next/image";

export default function Home() {
return ( <main className="min-h-screen">

  {/* Hero */}

  <section className="max-w-6xl mx-auto px-8 pt-24 pb-16">

    <h1
      className="
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
      mt-8
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
      Beauty, craft and storytelling.
      <br />
      From jewelry and objects
      <br />
      to future collections.
    </p>

    <Image
      src="/warm_silvlin.png"
      alt="Exotic Ordinary Collection"
      width={1600}
      height={900}
      priority
      className="
      mt-20
      w-full
      rounded-[40px]
      object-cover
      "
    />

  </section>

  {/* Discover */}

  <section className="max-w-6xl mx-auto px-8 py-20">

    <h2
      className="
      text-4xl
      font-bold
      mb-12
      "
    >
      Discover
    </h2>

    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">

      {/* Boutique */}

      <a
        href="https://naver.me/GctERDE8"
        target="_blank"
        rel="noopener noreferrer"
        className="
        rounded-3xl
        border
        border-[#E3D0CC]
        bg-white/20
        p-8
        transition-all
        duration-300
        hover:bg-white/40
        "
      >
        <h3 className="text-2xl font-semibold">
          The Exotic Boutique →
        </h3>

        <p className="mt-3 text-[#8A7A72]">
          Visit our boutique and showroom.
        </p>
      </a>

      {/* Naver Shop */}

      <a
        href="https://smartstore.naver.com/exoticordinary"
        target="_blank"
        rel="noopener noreferrer"
        className="
        rounded-3xl
        border
        border-[#E3D0CC]
        bg-white/20
        p-8
        transition-all
        duration-300
        hover:bg-white/40
        "
      >
        <h3 className="text-2xl font-semibold">
          Naver Shop →
        </h3>

        <p className="mt-3 text-[#8A7A72]">
          Browse collections and online orders.
        </p>
      </a>

      {/* Archive */}

      <a
        href="https://blog.naver.com/assetpick1"
        target="_blank"
        rel="noopener noreferrer"
        className="
        rounded-3xl
        border
        border-[#E3D0CC]
        bg-white/20
        p-8
        transition-all
        duration-300
        hover:bg-white/40
        "
      >
        <h3 className="text-2xl font-semibold">
          Journal & Archive →
        </h3>

        <p className="mt-3 text-[#8A7A72]">
          Thoughts, stories and archives
          behind Exotic Ordinary.
        </p>
      </a>

      {/* About */}

      <a
        href="https://draft.best/#/exotic"
        target="_blank"
        rel="noopener noreferrer"
        className="
        rounded-3xl
        border
        border-[#E3D0CC]
        bg-white/20
        p-8
        transition-all
        duration-300
        hover:bg-white/40
        "
      >
        <h3 className="text-2xl font-semibold">
          About Exotic Ordinary →
        </h3>

        <p className="mt-3 text-[#8A7A72]">
          Explore our story,
          philosophy and vision.
        </p>
      </a>

      {/* Voutique */}

      <a
        href="/voutique"
        target="_blank"
        rel="noopener noreferrer"
        className="
        rounded-3xl
        border-2
        border-[#E7B0B5]
        bg-white/20
        p-8
        transition-all
        duration-300
        hover:bg-white/40
        "
      >
        <h3 className="text-2xl font-semibold">
          The Exotic Voutique™ →
        </h3>

        <p className="mt-3 text-[#8A7A72]">
          The future of jewelry,
          custom creation and
          digital craftsmanship.
        </p>
      </a>

    </div>

  </section>

</main>

);
}
