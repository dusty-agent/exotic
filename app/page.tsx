import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFFBF8]">

      {/* HERO */}

      <section className="max-w-7xl mx-auto px-8 pt-24 pb-32">

        <Image
          src="/warm_silvlin.png"
          alt="Exotic Ordinary"
          width={1600}
          height={900}
          priority
          className="
          w-full
          rounded-[40px]
          object-cover
          "
        />

        <p
          className="
          mt-16
          uppercase
          tracking-[0.25em]
          text-[#B49A8D]
          "
        >
          EXOTIC ORDINARY®
        </p>

        <h1
          className="
          mt-6
          text-7xl
          md:text-9xl
          font-bold
          tracking-[-0.06em]
          leading-[0.9]
          "
        >
          WE
          <br />
          ARCHIVE
          <br />
          BEAUTY.
        </h1>

        <p
          className="
          mt-16
          text-2xl
          italic
          text-[#8A7A72]
          "
        >
          아름다움을 기록합니다.
        </p>

        <p
          className="
          mt-10
          max-w-2xl
          leading-9
          text-[#8A7A72]
          "
        >
          Exotic Ordinary는
          아름다움을 수집하고
          기록하는 브랜드입니다.
          <br />
          <br />
          Jewelry,
          Objects,
          Images,
          Sound,
          Story,
          그리고 Digital Experience.
          <br />
          <br />
          각각의 프로젝트는
          하나의 Archive가 되어
          브랜드를 완성합니다.
        </p>

      </section>

      {/* MEDIA */}

      <section className="max-w-7xl mx-auto px-8 py-24">

        <p
          className="
          uppercase
          tracking-[0.25em]
          text-[#B49A8D]
          "
        >
          MEDIA
        </p>

        <h2 className="mt-4 text-5xl font-light">
          Stories beyond Products.
        </h2>

        <div className="grid lg:grid-cols-3 gap-8 mt-16">

          <a
            href="https://www.youtube.com/@exoticordinary"
            target="_blank"
            rel="noopener noreferrer"
            className="
            rounded-[32px]
            bg-white
            border
            border-[#D8C7BD]
            p-10
            hover:-translate-y-1
            transition
            "
          >
            <h3 className="text-3xl font-light">
              Visual Stories →
            </h3>

            <p className="mt-6 leading-8 text-[#8A7A72]">
              브랜드 필름,
              숏폼,
              그리고 Visual Project.
            </p>

          </a>

          <a
            href="https://blog.naver.com/assetpick1"
            target="_blank"
            rel="noopener noreferrer"
            className="
            rounded-[32px]
            bg-white
            border
            border-[#D8C7BD]
            p-10
            hover:-translate-y-1
            transition
            "
          >
            <h3 className="text-3xl font-light">
              Journal →
            </h3>

            <p className="mt-6 leading-8 text-[#8A7A72]">
              브랜드의 생각과
              제작기,
              그리고 기록.
            </p>

          </a>

          <a
            href="https://soundcloud.com/exoticarchive"
            target="_blank"
            rel="noopener noreferrer"
            className="
            rounded-[32px]
            bg-white
            border
            border-[#D8C7BD]
            p-10
            hover:-translate-y-1
            transition
            "
          >
            <h3 className="text-3xl font-light">
              Sound Archive →
            </h3>

            <p className="mt-6 leading-8 text-[#8A7A72]">
              Ambient,
              Instrumental,
              그리고
              브랜드 사운드.
            </p>

          </a>

        </div>

      </section>

      {/* MOOD ARCHIVE */}

<section className="max-w-7xl mx-auto px-8 py-28">

<p
  className="
  uppercase
  tracking-[0.25em]
  text-[#B49A8D]
  "
>
  ARCHIVE
</p>

<h2 className="mt-4 text-5xl font-light">
  Mood Archive™
</h2>

<p
  className="
  mt-8
  max-w-2xl
  leading-9
  text-[#8A7A72]
  "
>
  A growing archive of
  images,
  sounds,
  stories,
  and atmosphere.

  <br />
  <br />

  Explore our visual world,
  discover new moods,
  and experience
  Exotic Ordinary beyond products.
</p>

<a
  href="/ma"
  className="
  mt-16
  inline-flex
  items-center
  rounded-full
  border
  border-[#D8C7BD]
  px-8
  py-4
  hover:bg-black
  hover:text-white
  transition
  "
>
  Explore Mood Archive →
</a>

</section>

            {/* COLLECTIONS */}

      <section className="max-w-7xl mx-auto px-8 py-28">

      <p
        className="
        uppercase
        tracking-[0.25em]
        text-[#B49A8D]
        "
      >
        COLLECTIONS
      </p>

      <h2 className="mt-4 text-5xl font-light">
        Designed as Independent Worlds.
      </h2>

      <div className="grid lg:grid-cols-2 gap-8 mt-20">

        <a
          href="/store/silvlin"
          className="
          bg-white
          border
          border-[#D8C7BD]
          rounded-[36px]
          p-12
          transition
          hover:-translate-y-1
          hover:shadow-xl
          "
        >

          <p className="uppercase tracking-[0.2em] text-[#B49A8D]">
            Jewelry
          </p>

          <h3 className="mt-6 text-4xl font-light">
            SILVLIN™
          </h3>

          <p className="mt-8 leading-8 text-[#8A7A72]">
            Everyday silver jewelry
            designed for quiet moments.
          </p>

        </a>

        <a
          href="/store/livings"
          className="
          bg-white
          border
          border-[#D8C7BD]
          rounded-[36px]
          p-12
          transition
          hover:-translate-y-1
          hover:shadow-xl
          "
        >

          <p className="uppercase tracking-[0.2em] text-[#B49A8D]">
            Objects
          </p>

          <h3 className="mt-6 text-4xl font-light">
            LIVINGS™
          </h3>

          <p className="mt-8 leading-8 text-[#8A7A72]">
            Handmade objects
            created one stitch
            at a time.
          </p>

        </a>

        <a
          href="/stonin"
          className="
          bg-white
          border
          border-[#D8C7BD]
          rounded-[36px]
          p-12
          transition
          hover:-translate-y-1
          hover:shadow-xl
          "
        >

          <p className="uppercase tracking-[0.2em] text-[#B49A8D]">
            Gemstone
          </p>

          <h3 className="mt-6 text-4xl font-light">
            STONIN™
          </h3>

          <p className="mt-8 leading-8 text-[#8A7A72]">
            Carefully selected
            gemstones for
            custom jewelry.
          </p>

        </a>

        <a
          href="/studio"
          className="
          bg-white
          border
          border-[#D8C7BD]
          rounded-[36px]
          p-12
          transition
          hover:-translate-y-1
          hover:shadow-xl
          "
        >

          <p className="uppercase tracking-[0.2em] text-[#B49A8D]">
            Experience
          </p>

          <h3 className="mt-6 text-4xl font-light">
            Studio™
          </h3>

          <p className="mt-8 leading-8 text-[#8A7A72]">
            Design your own
            jewelry with us.
          </p>

        </a>

      </div>

      </section>

{/* CREATIVE DIRECTION */}

    <section className="max-w-7xl mx-auto px-8 py-36">

    <div className="border-t border-[#D8C7BD] pt-24">

      <p
        className="
        uppercase
        tracking-[0.25em]
        text-[#B49A8D]
        "
      >
        CREATIVE DIRECTION
      </p>

      <h2
        className="
        mt-8
        text-6xl
        md:text-7xl
        font-light
        leading-tight
        "
      >
        We don't simply
        sell products.
        <br />
        We archive beauty.
      </h2>

      <p
        className="
        mt-16
        max-w-3xl
        text-lg
        leading-10
        text-[#8A7A72]
        "
      >
        Exotic Ordinary explores
        beauty through
        craftsmanship,
        visual storytelling,
        sound,
        materials,
        and digital experiences.
        <br />
        <br />
        Every project becomes
        part of one evolving archive.
      </p>

      <div className="mt-24">

        <p className="font-semibold">
          Creative Director
        </p>

        <p className="mt-3 text-[#8A7A72]">
          So Young Jang
        </p>

      </div>

    </div>

    </section>

      {/* PHILOSOPHY */}

      <section className="max-w-7xl mx-auto px-8 py-40">

        <div className="text-center">

          <p
            className="
            uppercase
            tracking-[0.3em]
            text-[#B49A8D]
            "
          >
            PHILOSOPHY
          </p>

          <h2
            className="
            mt-8
            text-5xl
            md:text-7xl
            font-light
            leading-tight
            "
          >
            Every ordinary moment
            <br />
            can become
            <br />
            something exotic.
          </h2>

          <p
            className="
            mt-14
            max-w-3xl
            mx-auto
            text-lg
            leading-10
            text-[#8A7A72]
            "
          >
            Exotic Ordinary believes that
            beauty already exists around us.
            <br />
            <br />
            We simply collect,
            interpret,
            and archive those moments
            through objects,
            images,
            sounds,
            and stories.
          </p>

        </div>

      </section>

            {/* EXPLORE */}

      <section className="max-w-7xl mx-auto px-8 pb-40">

        <div
          className="
          rounded-[48px]
          bg-[#1E1E1E]
          text-white
          p-20
          "
        >

          <p
            className="
            uppercase
            tracking-[0.25em]
            text-white/60
            "
          >
            EXPLORE
          </p>

          <h2
            className="
            mt-8
            text-5xl
            md:text-6xl
            font-light
            "
          >
            Continue
            Your Journey.
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

            <a href="/store/silvlin">
              SILVLIN™ →
            </a>

            <a href="/store/livings">
              LIVINGS™ →
            </a>

            <a href="/ma">
              Mood Archive™ →
            </a>

            <a href="/studio">
              Studio™ →
            </a>

          </div>

        </div>

        </section>

</main>
);
}