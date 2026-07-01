"use client";

import { useEffect, useMemo, useState } from "react";

import { products as productMap } from "@/app/store/data/products";

import { CartItem, Customer } from "./types";

import OrderSummary from "./OrderSummary";
import ShippingForm from "./ShippingForm";
import PaymentSummary from "./PaymentSummary";
import Agreement from "./Agreement";


declare global {
  interface Window {
    AUTHNICE: any;
  }
}

export default function CheckoutClient() {

  const [items, setItems] = useState<CartItem[]>([]);

  const [customer, setCustomer] =
    useState<Customer>({
      name: "",
      email: "",
      phone: "",
      zipcode: "",
      address: "",
      detailAddress: "",
      memo: "",
      newsletter: false,
    });
  
  const [paymentMethod, setPaymentMethod] =
  useState("card");

  const [privacy, setPrivacy] =
    useState(false);

  const [age, setAge] =
    useState(false);

  useEffect(() => {

    const saved =
      localStorage.getItem("checkout");

    if (saved) {

      setItems(JSON.parse(saved));

    }

  }, []);

  const products = useMemo(() => {

    return items
      .map((item) => {
  
        const product =
          productMap[
            item.slug as keyof typeof productMap
          ];
  
        if (!product) return null;
  
        return {
          ...product,
          quantity: item.quantity,
        };
  
      })
      .filter(
        (item): item is NonNullable<typeof item> =>
          item !== null
      );
  
  }, [items]);
  
  const hasPhysicalItem = products.some(

    product =>

        product.category !== "Visual Archive"

);
  const total =
  products.reduce(

    (sum, item) =>

      sum +
      item.price *
      item.quantity,

    0

  );

  const physicalSubtotal = products.reduce(

    (sum, product) => {
  
      if (product.category === "Visual Archive") {
  
        return sum;
  
      }
  
      return sum + product.price * product.quantity;
  
    },
  
    0
  
  );
  
  const shipping =

  !hasPhysicalItem

    ? 0

    : physicalSubtotal >= 50000

      ? 0

      : 3000;
  
  const handleCheckout = () => {

    const AUTHNICE = window.AUTHNICE;

    if (!AUTHNICE) {

      alert("NicePay(나이스페이)가 아직 로드되지 않았습니다.");

      return;

  }

  const order = {

    id: `EO-${Date.now()}`,
  
    customer: customer.name,
  
    email: customer.email,
  
    phone: customer.phone,
  
    createdAt: new Date().toISOString(),
  
    expiresAt: new Date(
      Date.now() + 90 * 24 * 60 * 60 * 1000
    ).toISOString(),
  
    items: products.map(product => ({
      slug: product.slug,
      title: product.title,
      quantity: product.quantity,
      price: product.price,
    })),
  
    total: total + shipping,
  
  };
  
  localStorage.setItem(
    "latest-order",
    JSON.stringify(order)
  );

  AUTHNICE.requestPay({

    clientId:
      process.env.NEXT_PUBLIC_NICE_CLIENT_KEY,

    method: paymentMethod,

    orderId: order.id,

    amount:
      total + shipping,

      goodsName:
      products.length === 1
        ? products[0].title
        : `상품 ${products.length}건`,

    returnUrl:
      `${window.location.origin}/api/payments/approve`,

    fnError(result: any) {

      console.error(result);

      alert("결제가 취소되었거나 실패했습니다.");

    },

  });

};

  return (

    <main className="bg-[#FFFBF8] min-h-screen">

      <div className="max-w-6xl mx-auto px-8 py-24">

        <p className="uppercase tracking-[0.2em] text-[#B49A8D]">
          EXOTIC ORDINARY®
        </p>

        <h1 className="mt-6 text-6xl font-light">
        주문 / 결제
      </h1>

      <p className="mt-4 text-[#8A7A72] italic">
        Checkout (Order & Payment)
      </p>

        <div className="grid lg:grid-cols-2 gap-20 mt-20">

          <div>

            <OrderSummary
              products={products}
            />

            <PaymentSummary
              total={total}
              shipping={shipping}
            />

          </div>
          

          <div>

            <ShippingForm
              customer={customer}
              setCustomer={setCustomer}
              hasPhysicalItem={hasPhysicalItem}
            />


            <section className="mt-14">

            <h2 className="text-2xl font-light flex items-end gap-3">

              <span>
                결제수단
              </span>

              <span className="text-base text-[#8A7A72] font-normal">
                Payment Method
              </span>

            </h2>
            <p className="mt-3 mb-8 text-sm text-[#8A7A72]">

              원하시는 결제수단을 선택해주세요.

              <span className="ml-2 italic">

              (Select your preferred payment method.)

              </span>

            </p>
            <div className="mt-8 space-y-4">

              <label
                className="
                flex
                items-center
                gap-4
                border
                border-[#D8C7BD]
                rounded-2xl
                p-5
                cursor-pointer
                "
              >

                <input
                  type="radio"
                  name="payment"
                  value="card"
                  checked={paymentMethod === "card"}
                  onChange={() =>
                    setPaymentMethod("card")
                  }
                />

              <div>

              <div className="font-medium">
                신용카드
              </div>

              <div className="text-sm text-[#8A7A72] mt-1">
                Credit Card
              </div>

              </div>

              </label>

              <label
                className="
                flex
                items-center
                gap-4
                border
                border-[#D8C7BD]
                rounded-2xl
                p-5
                cursor-pointer
                "
              >

                <input
                  type="radio"
                  name="payment"
                  value="bank"
                  checked={paymentMethod === "bank"}
                  onChange={() =>
                    setPaymentMethod("bank")
                  }
                />

                <div>

                <div className="font-medium">
                  실시간 계좌이체
                </div>

                <div className="text-sm text-[#8A7A72] mt-1">
                  Bank Transfer
                </div>

                </div>

              </label>

              <label
                className="
                flex
                items-center
                gap-4
                border
                border-[#D8C7BD]
                rounded-2xl
                p-5
                cursor-pointer
                "
              >

                <input
                  type="radio"
                  name="payment"
                  value="vbank"
                  checked={paymentMethod === "vbank"}
                  onChange={() =>
                    setPaymentMethod("vbank")
                  }
                />

                <div>

                <div className="font-medium">
                  가상계좌
                </div>

                <div className="text-sm text-[#8A7A72] mt-1">
                  Virtual Account
                </div>

                </div>

              </label>

            </div>

            </section>


            <Agreement
              privacy={privacy}
              age={age}
              setPrivacy={setPrivacy}
              setAge={setAge}
            />

            <button
              onClick={handleCheckout}
              disabled={!privacy || !age}
              className="
              w-full
              mt-10
              py-5
              rounded-full
              bg-[#1E1E1E]
              text-white
              hover:bg-[#000000]
              transition
              disabled:opacity-30disabled:opacity-30
              "
            >
              <div className="flex flex-col items-center">

              <span className="text-base font-medium">
                결제하기
              </span>

              <span className="text-xs mt-1 opacity-70">
                Proceed to Payment →
              </span>

              </div>
            </button>

          </div>

        </div>

      </div>

    </main>

  );

}