import Link from "next/link";

export default function VoutiquePage() {
  return (
    <main className="min-h-screen bg-[#090909] text-[#F7F1EC]">

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
            href="/voutique/studio"
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

    </main>
  );
}