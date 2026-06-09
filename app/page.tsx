import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#FFFBF8] text-[#2A2321]">
      <div className="mx-auto max-w-5xl px-12 py-32">

        {/* Hero */}

        <div className="mb-32">

          <h1 className="text-7xl font-semibold leading-none">
            EXOTIC
            <br />
            ORDINARY®
          </h1>

          <p className="mt-8 text-2xl italic text-[#8A7A72]">
            Beauty in the Mirror.
          </p>

          <p className="mt-12 text-lg">
            Design, craft and storytelling.
          </p>

          <p className="mt-4 text-lg text-[#8A7A72]">
            From jewelry and objects to media,
            archives and future collections.
          </p>

        </div>

        {/* Channels */}

        <div>

          <h2 className="mb-10 text-3xl font-semibold">
            Channels
          </h2>

          <div className="space-y-10">

            <Link
              href="/voutique"
              className="block"
            >
              <h3 className="text-xl font-medium">
                The Exotic Voutique™ →
              </h3>

              <p className="mt-2 text-[#8A7A72]">
                Virtual boutique, custom production
                and future commerce.
              </p>
            </Link>

            <Link
              href="/archive"
              className="block"
            >
              <h3 className="text-xl font-medium">
                Archive →
              </h3>

              <p className="mt-2 text-[#8A7A72]">
                Articles, essays and editorial contents.
              </p>
            </Link>

            <Link
              href="/stories"
              className="block"
            >
              <h3 className="text-xl font-medium">
                Stories →
              </h3>

              <p className="mt-2 text-[#8A7A72]">
                Daily notes, behind the scenes and works.
              </p>
            </Link>

            <Link
              href="/shop"
              className="block"
            >
              <h3 className="text-xl font-medium">
                Shop →
              </h3>

              <p className="mt-2 text-[#8A7A72]">
                Boutique, collections and selected objects.
              </p>
            </Link>

          </div>

        </div>

      </div>
    </main>
  );
}