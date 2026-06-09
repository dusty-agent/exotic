import Navbar from "@/components/Navbar";

export default function ShopPage() {
  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-5xl px-8 py-24">

        <h1 className="mb-8 text-5xl font-semibold">
          Shop
        </h1>

        <p className="text-lg text-[#8A7A72]">
          Boutique, collections and selected objects.
        </p>

      </main>
    </>
  );
}