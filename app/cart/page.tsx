"use client";

import { useEffect, useState } from "react";
import { products } from "@/app/store/data/products";

export default function CartPage() {

  const clientKey =
  process.env.NEXT_PUBLIC_NICE_CLIENT_KEY;

  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    const cart = JSON.parse(
      localStorage.getItem("cart") || "[]"
    );

    setItems(cart);
  }, []);

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

  const payment = async () => {
    const AUTHNICE = (window as any).AUTHNICE;
  
    AUTHNICE.requestPay({
      clientId: process.env.NEXT_PUBLIC_NICE_CLIENT_KEY,
    
      method: "card",
    
      orderId: "EO-" + Date.now(),
    
      amount: totalAmount,
    
      goodsName: "Exotic Livings",
    
      returnUrl:
        `${window.location.origin}/api/payments/approve`,
    
      fnError: function (result: any) {
        console.log("NicePay Error");
        console.log(result);
      },
    });
  };

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

                <div className="mt-6 flex items-center gap-4">

                <button
                  onClick={() => {

                    const updated = [...items];

                    updated[index].quantity =
                      Math.max(
                        1,
                        updated[index].quantity - 1
                      );

                    setItems(updated);

                    localStorage.setItem(
                      "cart",
                      JSON.stringify(updated)
                    );

                  }}
                  className="
                  w-8
                  h-8
                  rounded-full
                  border
                  border-[#D8C7BD]
                  "
                >
                  −
                </button>

                <span>
                  {item.quantity}
                </span>

                <button
                  onClick={() => {

                    const updated = [...items];

                    updated[index].quantity += 1;

                    setItems(updated);

                    localStorage.setItem(
                      "cart",
                      JSON.stringify(updated)
                    );

                  }}
                  className="
                  w-8
                  h-8
                  rounded-full
                  border
                  border-[#D8C7BD]
                  "
                >
                  +
                </button>

                <button
                  onClick={() => {

                    const updated =
                      items.filter(
                        (_, i) => i !== index
                      );

                    setItems(updated);

                    localStorage.setItem(
                      "cart",
                      JSON.stringify(updated)
                    );

                  }}
                  className="
                  ml-4
                  text-sm
                  text-[#B49A8D]
                  "
                >
                  Remove
                </button>

              </div>
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