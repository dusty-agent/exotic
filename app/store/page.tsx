import Link from "next/link";

export default function StorePage() {
  return (
    <main className="min-h-screen bg-[#FFFBF8]">

      <section className="max-w-6xl mx-auto px-8 pt-24 pb-20">

        <p
          className="
          text-sm
          uppercase
          tracking-[0.2em]
          text-[#B49A8D]
          "
        >
          STORE
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
          STORE
        </h1>

        <p
          className="
          mt-12
          text-xl
          italic
          text-[#8A7A72]
          "
        >
          Curated by Exotic Ordinary.
        </p>

      </section>

      <section className="max-w-6xl mx-auto px-8 pb-24">

        <div className="grid md:grid-cols-2 gap-8">

          {/* SILVLIN */}

          <Link
            href="/silvlin"
            className="
            rounded-[32px]
            border
            border-[#D8C7BD]
            bg-white
            p-10
            hover:translate-y-[-2px]
            transition
            "
          >
            <p className="text-sm uppercase tracking-[0.2em] text-[#B49A8D]">
              Jewelry
            </p>

            <h2 className="mt-4 text-4xl font-light">
              SILVLIN
            </h2>

            <p className="mt-6 text-[#8A7A72] leading-7">
              Everyday silver jewelry.
            </p>
          </Link>

          {/* LIVINGS */}

          <Link
            href="/store/livings"
            className="
            rounded-[32px]
            border
            border-[#D8C7BD]
            bg-white
            p-10
            hover:translate-y-[-2px]
            transition
            "
          >
            <p className="text-sm uppercase tracking-[0.2em] text-[#B49A8D]">
              Exotic LIVINGS
            </p>

            <h2 className="mt-4 text-4xl font-light">
              Handcrafted Loofah Collection
            </h2>

            <p className="mt-6 text-[#8A7A72] leading-7">
              Everyday objects Curated by Exotic Ordinary.
            </p>
          </Link>

        </div>

      </section>

    </main>
  );
}