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
          장바구니
        </h1>

        <p className="mt-3 text-[#8A7A72] italic">
          Shopping Cart
        </p>

        {

          items.length === 0 && (

            <div className="py-32 text-center">

              <h2 className="text-5xl font-light">

              장바구니가 비어 있습니다.

              </h2>

              <p className="mt-8 text-[#8A7A72]">

              SILVLIN, LIVINGS, MOOD ARCHIVE의
              다양한 상품을 만나보세요.

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
                        draggable={false}
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

                          {product.category === "Visual Archive"
                            ? "비주얼 아카이브"
                            : product.category === "925 Silver"
                            ? "925 실버"
                            : product.category === "Exotic Livings"
                            ? "리빙"
                            : product.category}

                        </p>

                        <p className="mt-5">

                          {product.price.toLocaleString()} KRW

                        </p>

                        <p className="mt-2 text-xs text-[#8A7A72] italic">

                          {
                            product.category === "Visual Archive"

                              ? "결제 후 즉시 다운로드"
                              : "영업일 기준 1~2일 내 배송"
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
                      삭제(Remove)
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

                  상품금액
                  <span className="ml-2 text-[#8A7A72]">
                    (Subtotal)
                  </span>

                </span>

                <span>

                  {subtotal.toLocaleString()} KRW

                </span>

              </div>

              <div className="flex justify-between mt-5">

                <span>

                  배송비
                  <span className="ml-2 text-[#8A7A72]">
                    (Physical Items Only)
                  </span>

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

                  총 결제금액
                  <span className="ml-2 text-lg text-[#8A7A72] font-normal">
                    (Total)
                  </span>

                </span>

                <span>

                  {total.toLocaleString()} KRW

                </span>

              </div>

            </div>

            <p
              className="
              mt-8
              text-center
              text-sm
              leading-7
              text-[#8A7A72]
              "
            >

              디지털 상품은 결제 완료 후 즉시 다운로드할 수 있으며,
              배송비는 실물 상품 구매 시에만 적용됩니다.

              <br />

              Digital collections are delivered instantly after purchase.
              Shipping fees apply only to physical products.

            </p>

            <div
              className="
              mt-10
              border-t
              border-[#D8C7BD]
              pt-8
              "
            >

              <p
                className="
                uppercase
                tracking-[0.2em]
                text-xs
                text-[#B49A8D]
                "
              >
                DIGITAL DOWNLOAD
              </p>

              <p
                className="
                mt-5
                text-sm
                leading-7
                text-[#8A7A72]
                "
              >

                Mood Archive 디지털 상품은
                <strong className="text-black">
                  {" "}
                  결제일로부터 3개월 동안 다운로드 가능합니다.
                </strong>

                <br />

                다운로드 가능 기간 종료 후
                다운로드 링크는 자동으로 만료됩니다.

                <br />
                <br />

                <span className="italic">

                  Mood Archive digital products remain
                  available for download for
                  <strong className="text-black">
                    {" "}
                    3 months
                  </strong>
                  {" "}
                  from the payment date.

                  <br />

                  Download access automatically expires
                  after the 3-month service period.

                </span>

              </p>

            </div>

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
              hover:bg-black
              transition
              "

            >

              <div className="flex flex-col items-center">

                <span className="font-medium">

                  주문하기

                </span>

                <span className="text-xs opacity-70 mt-1">

                  Continue to Checkout →

                </span>

              </div>

            </button> 

            </>

          )

        }

      </section>

    </main>

  );

}