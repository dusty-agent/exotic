"use client";

import { loadTossPayments } from "@tosspayments/payment-sdk";
import { useEffect, useState } from "react";
import { products } from "@/app/store/data/products";

export default function CartPage() {
  const [items, setItems] = useState<any[]>([]);

  const totalAmount = items.reduce(
    (sum, item) => {
      const product =
        products[
          item.slug as keyof typeof products
        ];

      return (
        sum +
        product.price * item.quantity
      );
    },
    0
  );

  const clientKey =
    process.env.NEXT_PUBLIC_TOSS_CLIENT_KEY!;

  const payment = async () => {
    const tossPayments =
      await loadTossPayments(clientKey);

    await tossPayments.requestPayment(
      "카드",
      {
        amount: totalAmount,

        orderId:
          "EO-" + Date.now(),

        orderName:
          "Exotic Livings",

        successUrl:
          "http://localhost:3000/success",

        failUrl:
          "http://localhost:3000/fail",
      }
    );
  };

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

          {items.map((item, index) => {

            const product =
              products[
                item.slug as keyof typeof products
              ];

            return (
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

                <h2 className="text-2xl">
                  {product.title}
                </h2>

                <p className="mt-2 text-[#8A7A72]">
                  {product.color}
                </p>

                <p className="mt-4">
                  {product.price.toLocaleString()} KRW
                </p>

                <p className="mt-2">
                  Qty: {item.quantity}
                </p>

              </div>
            );
          })}

        </div>

        <div className="mt-12">

          <p
            className="
            text-sm
            uppercase
            tracking-[0.2em]
            text-[#B49A8D]
            "
          >
            Total
          </p>

          <h2 className="mt-4 text-5xl font-light">
            {totalAmount.toLocaleString()} KRW
          </h2>

        </div>

        <button
          onClick={payment}
          className="
          mt-8
          px-8
          py-4
          rounded-full
          bg-[#1E1E1E]
          text-white
          "
        >
          Checkout
        </button>

      </section>

    </main>
  );
}