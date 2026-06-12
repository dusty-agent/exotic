import Link from "next/link";

export default function VoutiquePage() {
  return (
    <main className="bg-[#090909] text-[#F7F1EC]">

      {/* HERO */}

      <section className="mx-auto max-w-5xl px-8 py-32">

        <p className="tracking-[0.3em] uppercase text-[#E7B0B5]">
          The Future of Jewelry
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
          The Exotic
          <br />
          Voutique™
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
          Design your own jewelry.
          <br />
          Select materials, gemstones and stories.
          <br />
          Crafted for the future.
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
          What is Voutiq™
        </p>

        <h2 className="mt-6 text-5xl font-light leading-tight">
          A curation platform for
          custom jewelry and future experiences.
        </h2>

        <p className="mt-12 max-w-3xl text-lg leading-9 text-[#C2B5AD]">
          Voutiq™ is a concept developed by Dusty Draft.
          <br />
          It combines storytelling, consultation,
          craftsmanship and technology into a single journey.
          <br /><br />
          First explored through The Exotic Voutique™,
          Voutiq aims to become a platform where people
          can discover, design and commission meaningful creations.
        </p>

      </section>

      {/* FRAMEWORK */}

      <section className="mx-auto max-w-5xl px-8 pt-24 pb-20">

        <div className="grid md:grid-cols-3 gap-8">

          <div className="border border-[#333] rounded-3xl p-8">
            <p className="text-[#E7B0B5]">01</p>

            <h3 className="mt-4 text-2xl font-semibold">
              Curation
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
              Craftsmanship
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
              Technology
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

          <p className="tracking-[0.3em] uppercase text-[#E7B0B5]">
            Current Status
          </p>

          <div className="mt-8 space-y-3 text-[#C2B5AD]">
            <p>• Concept Platform</p>
            <p>• Trademark Filed (Korea)</p>
            <p>• Developed by Dusty Draft</p>
            <p>• First tested through The Exotic Voutique™</p>
          </div>

        </div>

      </section>

    </main>
  );
}