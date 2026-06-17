"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { silvlin } from "@/app/store/data/silvlin";

type ProductProps = {
  product: {
    slug: string;
    title: string;
    color: string;
    price: number;
    category: string;
    images: {
      hero: string;
      detail1: string;
      detail2: string;
      mood: string;
      lifestyle: string;
    };
    description: string;
    story: string;
    mood: string;
    material: string;
  };
};

export default function ProductClient({
  product,
}: ProductProps) {
  const [quantity, setQuantity] = useState(1);

  const relatedProducts =
  Object.entries(silvlin)
    .filter(([slug]) => slug !== product.slug)
    .slice(0, 4);

  return (
    <main className="min-h-screen bg-[#FFFBF8]">

      {/* Hero */}

      <section className="max-w-5xl mx-auto px-8 pt-24 pb-16">

      <p className="text-sm uppercase tracking-[0.2em] text-[#B49A8D]">
      SILVLIN
      </p>

      <h1 className="mt-4 text-6xl md:text-8xl font-light tracking-[-0.04em]">
      {product.title}
      </h1>

      <p className="mt-8 text-2xl">
      {product.price.toLocaleString()} KRW
      </p>

      <p className="mt-4 italic text-[#8A7A72]">
      {product.material}
      </p>
      </section>

      {/* Main Image */}

      <section className="max-w-6xl mx-auto px-8">

      <Image
        src={product.images.hero}
        alt={product.title}
        width={1600}
        height={1600}
        className="w-full rounded-[40px]"
      />

      </section>

      {/* About */}

      <section className="max-w-4xl mx-auto px-8 py-32">

        <div className="text-center">

        <p className="text-sm uppercase tracking-[0.2em] text-[#B49A8D]">
        SILVLIN from EXOTIC ORDINARY
        </p>

        <h2 className="mt-8 text-5xl font-light">
        Everyday Silver Collection
        </h2>

        <p className="mt-12 text-lg leading-9 text-[#8A7A72]">
        {product.description}
        <br/><br/>
        {product.story}
        </p>

        </div>

      </section>

      {/* Lifestyle */}

      <section className="max-w-6xl mx-auto px-8 py-24">

        <Image
          src={product.images.lifestyle}
          alt={`${product.title} Lifestyle`}
          width={1600}
          height={1600}
          className="w-full rounded-[40px] object-cover"
        />

      </section>
 
      {/* Texture */}

      <section className="max-w-6xl mx-auto px-8 py-24">

        <Image
          src={product.images.mood}
          alt={`${product.title} Texture`}
          width={1600}
          height={1600}
          className="w-full rounded-[40px] object-cover"
        />

      </section>

      {/* Mood */}
      <section className="max-w-4xl mx-auto px-8 py-24">

        <div className="text-center">

        <p className="text-sm uppercase tracking-[0.2em] text-[#B49A8D]">
        MOOD
        </p>

        <h2 className="mt-8 text-5xl font-light">
        Warm Pieces.
        </h2>

        <p className="mt-10 text-lg leading-9 text-[#8A7A72]">
        {product.mood}
        </p>

        </div>

      </section>
     {/* Gift Wrapping */}

      <section className="max-w-4xl mx-auto px-8 py-24">

          <div className="
            border
            border-[#D8C7BD]
            rounded-[40px]
            p-20
            text-center
          ">

          <p className="text-sm uppercase tracking-[0.2em] text-[#B49A8D]">
          DELIVERY
          </p>

          <h2 className="mt-8 text-4xl font-light">
          Ships From Korea.
          </h2>

          <p className="mt-10 text-[#8A7A72] leading-9">
          Orders are carefully packed
          and shipped from Korea.

          Worldwide shipping available.
          </p>

            <p className="mt-10 leading-9 text-[#8A7A72]">
              Every piece is carefully wrapped
              before shipping.

              <br /><br />

              Ready to be gifted.
            </p>

          </div>

      </section>

      {/* Delivery */}
      <section className="max-w-4xl mx-auto px-8 py-24">

        <div className="border border-[#D8C7BD] rounded-[40px] p-20 text-center">

        <p className="text-sm uppercase tracking-[0.2em] text-[#B49A8D]">
        Gift Wrapping
        </p>

        <h2 className="mt-8 text-4xl font-light">
        Prepared With Care.
        </h2>

        <p className="mt-10 text-[#8A7A72] leading-9">
        Every piece is carefully wrapped
        before shipping.

        Ready to be gifted.
        </p>

      </div>

      </section>
      {/* New Details */}
      <section className="max-w-6xl mx-auto px-8 py-24">

        <div className="grid md:grid-cols-2 gap-8">

        <Image
        src={product.images.detail1}
        alt=""
        width={1200}
        height={1200}
        className="rounded-[40px]"
        />

        <Image
        src={product.images.detail2}
        alt=""
        width={1200}
        height={1200}
        className="rounded-[40px]"
        />

        </div>

      </section>

      {/* Details */}
      
      <section className="max-w-5xl mx-auto px-8 py-24">

        <div className="border-t border-[#D8C7BD] pt-16">

        <p
            className="
            text-sm
            uppercase
            tracking-[0.2em]
            text-[#B49A8D]
            "
        >
            Details
        </p>

        <div className="mt-10 space-y-6">

        <p className="text-[#B49A8D]">
            Material
        </p>
        <p className="mt-2">
          {product.material}
        </p>
        </div>

        <div>
        <p className="text-[#B49A8D]">
            Origin
        </p>

        <p className="mt-2">
            Korea
        </p>
        </div>

        <div>
        <p className="text-[#B49A8D]">
            Category
        </p>

        <p className="mt-2">
            Earrings
        </p>
        </div>

        <div>
        <p className="text-[#B49A8D]">
            Brand
        </p>

        <p className="text-sm uppercase tracking-[0.2em] text-[#B49A8D]">
          SILVLIN from EXOTIC ORDINARY
        </p>
        </div> 
        
        </div>
        </section>

      {/* Purchase */}

      <section className="max-w-5xl mx-auto px-8 pb-32">

        <div
          className="
          rounded-[40px]
          bg-white
          border
          border-[#D8C7BD]
          p-12
          "
        >

          <p className="text-sm uppercase tracking-[0.2em] text-[#B49A8D]">
            Quantity
          </p>

          <div className="flex items-center gap-4 mt-4">

            <button
              onClick={() =>
                setQuantity((q) => Math.max(1, q - 1))
              }
              className="w-10 h-10 rounded-full border border-[#D8C7BD]"
            >
              −
            </button>

            <span className="text-xl">
              {quantity}
            </span>

            <button
              onClick={() =>
                setQuantity((q) => q + 1)
              }
              className="w-10 h-10 rounded-full border border-[#D8C7BD]"
            >
              +
            </button>

          </div>

          <div className="mt-12">

            <p className="text-sm uppercase tracking-[0.2em] text-[#B49A8D]">
              Price
            </p>

            <h2 className="mt-4 text-5xl font-light">
              {(product.price * quantity).toLocaleString()} KRW
            </h2>

            <div className="flex flex-col md:flex-row gap-4 mt-10">

              <button
                onClick={() => {

                  const existingCart = JSON.parse(
                    localStorage.getItem("cart") || "[]"
                  );

                  existingCart.push({
                    slug: product.slug,
                    quantity,
                  });

                  localStorage.setItem(
                    "cart",
                    JSON.stringify(existingCart)
                  );

                  alert("Added to cart");
                }}
                className="
                px-8
                py-4
                rounded-full
                bg-[#1E1E1E]
                text-white
                "
              >
                Add To Cart
              </button>

              <Link
                href="/cart"
                className="
                px-8
                py-4
                rounded-full
                border
                border-[#D8C7BD]
                "
              >
                View Cart
              </Link>

            </div>

          </div>

        </div>

      </section>

{/* Related Pieces */}
<section className="max-w-6xl mx-auto px-8 pb-32">

  <div className="border-t border-[#D8C7BD] pt-16">

    <p className="text-sm uppercase tracking-[0.2em] text-[#B49A8D]">
      Related Pieces
    </p>

    <div className="grid md:grid-cols-4 gap-8 mt-12">

      {relatedProducts.map(([slug, item]) => (

        <Link
          key={slug}
          href={`/store/silvlin/${slug}`}
        >

          <Image
            src={item.images.hero}
            alt={item.title}
            width={600}
            height={600}
            className="
              w-full
              rounded-[24px]
              object-cover
              "
          />

          <h3 className="mt-6">
            {item.title}
          </h3>

          <p className="mt-2 text-[#8A7A72]">
            {item.price.toLocaleString()} KRW
          </p>

        </Link>

      ))}

    </div>

  </div>

</section>

    </main>
  );
}