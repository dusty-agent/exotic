"use client";

import Link from "next/link";
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

      <section className="max-w-4xl mx-auto px-8 py-28">

        <p
          className="
          uppercase
          tracking-[0.25em]
          text-[#B49A8D]
          text-sm
          "
        >
          EXOTIC ORDINARY®
        </p>

        <h1
          className="
          mt-6
          text-6xl
          font-light
          "
        >
          감사합니다.
        </h1>

        <p
          className="
          mt-4
          text-xl
          text-[#8A7A72]
          "
        >
          Thank you for your order.
        </p>

        <div
          className="
          mt-20
          border-t
          border-[#D8C7BD]
          pt-10
          "
        >

          <h2
            className="
            text-2xl
            font-light
            "
          >
            주문이 정상적으로 접수되었습니다.
          </h2>

          <p
            className="
            mt-6
            leading-8
            text-[#8A7A72]
            "
          >

            주문해주셔서 감사합니다.

            <br />

            결제가 확인되면
            등록하신 이메일로
            주문 내역과 다운로드 안내를 보내드립니다.

          </p>

        </div>

        <div
          className="
          mt-16
          border-t
          border-[#D8C7BD]
          pt-10
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
            leading-8
            text-[#8A7A72]
            "
          >

            Mood Archive 디지털 상품은

            <strong className="text-black">

              {" "}
              결제일로부터 3개월 동안

            </strong>

            다운로드 가능합니다.

            <br />

            다운로드 기간이 종료되면
            링크는 자동으로 만료됩니다.

            <br /><br />

            Download access remains available
            for 3 months from the payment date.

          </p>

        </div>

        <div
          className="
          mt-20
          flex
          gap-5
          "
        >

          <Link
            href="/store/ma"
            className="
            flex-1
            py-5
            rounded-full
            border
            border-[#D8C7BD]
            text-center
            hover:bg-white
            transition
            "
          >
            Mood Archive 둘러보기
          </Link>

          <Link
            href="/"
            className="
            flex-1
            py-5
            rounded-full
            bg-black
            text-white
            text-center
            hover:opacity-90
            transition
            "
          >
            홈으로 돌아가기
          </Link>

        </div>

      </section>

    </main>

  );

}