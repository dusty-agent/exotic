import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function VoutiquePage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#FFFBF8]">

        <div className="mx-auto max-w-5xl px-8 py-32">

          <h1 className="mb-8 text-6xl font-semibold">
            The Exotic Voutique™
          </h1>

          <p className="mb-4 text-2xl italic text-[#8A7A72]">
            Virtual boutique.
          </p>

          <p className="mb-16 text-lg text-[#8A7A72]">
            Custom production and future commerce.
          </p>

          <Link
            href="/voutique/studio"
            className="inline-block rounded-lg bg-black px-8 py-4 text-white"
          >
            Enter Studio
          </Link>

        </div>

      </main>
    </>
  );
}