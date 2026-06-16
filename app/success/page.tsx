"use client";

import { useEffect } from "react";

export default function SuccessPage() {

    useEffect(() => {

        localStorage.setItem(
          "cart",
          JSON.stringify([])
        );
      
      }, []);

  return (
    <main className="min-h-screen bg-[#FFFBF8]">

      <section className="max-w-4xl mx-auto px-8 py-24">

        <p
          className="
          text-sm
          uppercase
          tracking-[0.2em]
          text-[#B49A8D]
          "
        >
          Payment
        </p>

        <h1 className="mt-6 text-6xl font-light">
          Thank You.
        </h1>

        <p className="mt-8 text-[#8A7A72]">
          Your order has been received.
        </p>

      </section>

    </main>
  );
}