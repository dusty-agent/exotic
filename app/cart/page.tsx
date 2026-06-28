"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { products } from "@/app/store/data/products";

type CartItem = {
  slug: string;
  quantity: number;
};

export default function CartPage() {

  const router = useRouter();

  const [items, setItems] =
    useState<CartItem[]>([]);

  useEffect(() => {

    const saved =
      localStorage.getItem("cart");

    if (saved) {

      setItems(JSON.parse(saved));

    }

  }, []);

  const updateCart = (
    updated: CartItem[]
  ) => {

    setItems(updated);

    localStorage.setItem(
      "cart",
      JSON.stringify(updated)
    );

  };

  const subtotal = items.reduce(

    (sum, item) => {
  
      const product =
        products[
          item.slug as keyof typeof products
        ];
  
      if (!product) return sum;
  
      return (
        sum +
        product.price *
        item.quantity
      );
  
    },
  
    0
  
  );
  
  const physicalSubtotal = items.reduce(
  
    (sum, item) => {
  
      const product =
        products[
          item.slug as keyof typeof products
        ];
  
      if (!product) return sum;
  
      if (product.category === "Visual Archive") {
  
        return sum;
  
      }
  
      return (
        sum +
        product.price *
        item.quantity
      );
  
    },
  
    0
  
  );
  
  const hasPhysicalItem = items.some((item) => {
  
    const product =
      products[
        item.slug as keyof typeof products
      ];
  
    if (!product) return false;
  
    return product.category !== "Visual Archive";
  
  });
  
  const shipping =
  
    !hasPhysicalItem
  
      ? 0
  
      : physicalSubtotal >= 50000
  
        ? 0
  
        : 3000;
  
  const total =
  
    subtotal + shipping;
  return (

    <main className="min-h-screen bg-[#FFFBF8]">

      <section className="max-w-5xl mx-auto px-8 py-24">

        <p className="uppercase tracking-[0.2em] text-[#B49A8D]">
          EXOTIC ORDINARY®
        </p>

        <h1 className="mt-6 text-6xl font-light">
          Cart
        </h1>

        {

          items.length === 0 && (

            <div className="py-32 text-center">

              <h2 className="text-5xl font-light">

                Your cart is empty.

              </h2>

              <p className="mt-8 text-[#8A7A72]">

                Explore SILVLIN,
                LIVINGS
                and Mood Archive.

              </p>

            </div>

          )

        }

        <div className="mt-12 space-y-6">

          {

            items.map((item, index) => {

              const product =
                products[
                  item.slug as keyof typeof products
                ];

              if (!product) return null;

              const images = product.images as any;

              const image =

                images.hero ??

                images.cover ??

                images.product;

              return (

                <div
                  key={index}
                  className="
                  bg-white
                  border
                  border-[#D8C7BD]
                  rounded-[28px]
                  p-8
                  "
                >

                  <div className="flex justify-between">

                    <div className="flex gap-8">

                      <Image
                        src={image}
                        alt={product.title}
                        width={130}
                        height={130}
                        className="
                        rounded-2xl
                        object-cover
                        "
                      />

                      <div>

                        <h2 className="text-2xl font-light">

                          {product.title}

                        </h2>

                        <p className="mt-2 text-[#8A7A72]">

                          {product.category}

                        </p>

                        <p className="mt-5">

                          {product.price.toLocaleString()} KRW

                        </p>

                        <p className="mt-2 text-xs text-[#8A7A72] italic">

                          {
                            product.category === "Visual Archive"

                              ? "Instant Digital Download"

                              : "Ships in 1–2 business days"
                          }

                        </p>

                      </div>

                    </div>

                    <button

                      onClick={() => {

                        const updated =
                          items.filter(
                            (_, i) =>
                              i !== index
                          );

                        updateCart(updated);

                      }}

                      className="
                      text-sm
                      text-[#B49A8D]
                      hover:text-black
                      transition
                      "

                    >
                      Remove
                    </button>

                  </div>

                  <div className="mt-8 flex items-center gap-6">

                    <button

                      onClick={() => {

                        const updated =
                          [...items];

                        updated[index].quantity =
                          Math.max(
                            1,
                            updated[index].quantity - 1
                          );

                        updateCart(updated);

                      }}

                      className="
                      w-10
                      h-10
                      rounded-full
                      border
                      border-[#D8C7BD]
                      "

                    >
                      −
                    </button>

                    <span className="text-lg">

                      {item.quantity}

                    </span>

                    <button

                      onClick={() => {

                        const updated =
                          [...items];

                        updated[index].quantity++;

                        updateCart(updated);

                      }}

                      className="
                      w-10
                      h-10
                      rounded-full
                      border
                      border-[#D8C7BD]
                      "

                    >
                      +

                    </button>

                  </div>

                </div>

              );

            })

          }

        </div>

        {

          items.length > 0 && (

            <>

              <div className="mt-16 border-t pt-10">

                <div className="flex justify-between">

                  <span>

                    Subtotal

                  </span>

                  <span>

                    {subtotal.toLocaleString()} KRW

                  </span>

                </div>

                <div className="flex justify-between mt-5">

                  <span>

                   Shipping (Physical Items)

                  </span>

                  <span>

                    {

                      shipping === 0

                        ? "FREE"

                        : `${shipping.toLocaleString()} KRW`

                    }

                  </span>

                </div>

                <div className="flex justify-between mt-8 text-3xl">

                  <span>

                    Total

                  </span>

                  <span>

                    {total.toLocaleString()} KRW

                  </span>

                </div>

              </div>

              <p className="mt-8 text-center text-sm text-[#8A7A72]">

                Digital collections are delivered instantly after purchase.
                Shipping fees apply only to physical products.

              </p>

              <button

                onClick={() => {

                  localStorage.setItem(

                    "checkout",

                    JSON.stringify(items)

                  );

                  router.push("/checkout");

                }}

                className="
                mt-12
                w-full
                py-5
                rounded-full
                bg-[#1E1E1E]
                text-white
                hover:opacity-90
                transition
                "

              >

                Continue to Checkout →

              </button>

            </>

          )

        }

      </section>

    </main>

  );

}