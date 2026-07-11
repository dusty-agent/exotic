"use client";

import { useEffect, useState } from "react";

type Order = {
  id: string;
  customer: string;
  email: string;
  slug: string;
  createdAt: string;
  expiresAt: string;
};

export default function SuccessPage() {

  const [order, setOrder] =
    useState<Order | null>(null);

  useEffect(() => {

    localStorage.setItem(
      "cart",
      JSON.stringify([])
    );

    const saved =
      localStorage.getItem(
        "latest-order"
      );

    if (saved) {

      setOrder(
        JSON.parse(saved)
      );

    }

  }, []);

  return (

    <main className="min-h-screen bg-[#FFFBF8]">

      <section className="max-w-4xl mx-auto px-8 py-28">

      <div className="flex flex-col items-center text-center">

        <div
          className="
          w-20
          h-20
          rounded-full
          bg-[#1E1E1E]
          text-white
          flex
          items-center
          justify-center
          text-4xl
          "
        >
          ✓
        </div>

        <p
          className="
          mt-10
          uppercase
          tracking-[0.25em]
          text-[#B49A8D]
          text-sm
          "
        >
          Payment Complete
        </p>

        <h1
          className="
          mt-6
          text-6xl
          font-light
          "
        >
          Thank You.
        </h1>

        <p
          className="
          mt-8
          max-w-xl
          leading-8
          text-[#8A7A72]
          "
        >
          Your order has been successfully completed.
          <br />
          We hope you enjoy your purchase.
        </p>

        </div>

        {

          order && (

            <div
              className="
              mt-16
              bg-white
              border
              border-[#D8C7BD]
              rounded-[32px]
              p-10
              "
            >

              <p
                className="
                uppercase
                tracking-[0.2em]
                text-sm
                text-[#B49A8D]
                "
              >
                Receipt
              </p>

              <div className="mt-10 space-y-8">

                <div className="flex justify-between">

                  <span className="text-[#8A7A72]">
                    Order ID
                  </span>

                  <span className="font-medium">
                    {order.id}
                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-[#8A7A72]">
                    Customer
                  </span>

                  <span>
                    {order.customer}
                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-[#8A7A72]">
                    Email
                  </span>

                  <span>
                    {order.email}
                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-[#8A7A72]">
                    Download
                  </span>

                  <span>
                    90 Days
                  </span>

                </div>

              </div>

            </div>

          )

          }

            <div
              className="
              mt-16
              bg-white
              border
              border-[#D8C7BD]
              rounded-[32px]
              p-12
              text-center
              "
            >

              <p
                className="
                uppercase
                tracking-[0.2em]
                text-sm
                text-[#B49A8D]
                "
              >
                Download
              </p>

              <h2
                className="
                mt-6
                text-4xl
                font-light
                "
              >
                Your Files Are Ready
              </h2>

              <p
                className="
                mt-6
                max-w-xl
                mx-auto
                leading-8
                text-[#8A7A72]
                "
              >
                Your purchased files will remain
                available for download
                during the next 90 days.
                <br />
                A copy of the download link
                will also be sent to your email.
              </p>

              {order && (

                  <a
                    href={`/api/download/${order.slug}`}
                    className="
                      mt-12
                      inline-flex
                      items-center
                      justify-center
                      px-12
                      py-5
                      rounded-full
                      bg-[#1E1E1E]
                      text-white
                      hover:bg-black
                      transition
                    "
                  >
                    ZIP 다운로드
                    Download ZIP →
                  </a>

                  )}

            </div>

            <div className="mt-20 text-center">

              <a
                href="/"
                className="
                inline-flex
                items-center
                justify-center
                px-10
                py-4
                rounded-full
                border
                border-[#D8C7BD]
                hover:bg-black
                hover:text-white
                transition
                "
              >
                Return Home
              </a>

            </div>

      </section>

    </main>

  );

}