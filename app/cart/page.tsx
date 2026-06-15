"use client";

import { useEffect, useState } from "react";

export default function CartPage() {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    const cart = JSON.parse(
      localStorage.getItem("cart") || "[]"
    );

    setItems(cart);
  }, []);

  return (
    <main className="min-h-screen bg-[#FFFBF8]">
      <section className="max-w-4xl mx-auto px-8 py-24">

        <h1 className="text-6xl font-light">
          Cart
        </h1>

        <div className="mt-12 space-y-4">

          {items.map((item, index) => (
            <div
              key={index}
              className="
              p-6
              bg-white
              border
              border-[#D8C7BD]
              rounded-[24px]
              "
            >
              <h2>{item.title}</h2>

              <p>{item.price} KRW</p>
            </div>
          ))}

        </div>

      </section>
    </main>
  );
}