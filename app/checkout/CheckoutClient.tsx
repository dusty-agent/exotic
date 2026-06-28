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

      alert("NicePay가 아직 로드되지 않았습니다.");

      return;

  }

  AUTHNICE.requestPay({

    clientId:
      process.env.NEXT_PUBLIC_NICE_CLIENT_KEY,

    method: "card",

    orderId:
      `EO-${Date.now()}`,

    amount:
      total + shipping,

    goodsName:
      products.length === 1
        ? products[0].title
        : `Exotic Ordinary (${products.length} items)`,

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
          Checkout
        </h1>

        <p className="mt-4 text-[#8A7A72] italic">
          Beauty in the Mirror.
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
              disabled:opacity-30
              "
            >
              Proceed to Payment →
            </button>

          </div>

        </div>

      </div>

    </main>

  );

}