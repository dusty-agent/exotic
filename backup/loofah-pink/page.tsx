"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/app/store/data/products";

const product = products["loofah-pink"];
export default function LoofahPage() {
  const [quantity, setQuantity] = useState(1);

  return (
    <main className="min-h-screen bg-[#FFFBF8]">

      {/* Hero */}

      <section className="max-w-5xl mx-auto px-8 pt-24 pb-16">

        <p
          className="
          text-sm
          uppercase
          tracking-[0.2em]
          text-[#B49A8D]
          "
        >
          Exotic Living
        </p>

        <h1
          className="
          mt-4
          text-6xl
          md:text-8xl
          font-light
          tracking-[-0.04em]
          "
        >
          {product.title}
        </h1>
        <p
          className="
          mt-6
          text-xl
          italic
          text-[#8A7A72]
          "
        >
          {product.color}
        </p>
        <p
          className="
          mt-6
          text-xl
          italic
          text-[#8A7A72]
          "
        >
          {product.description}
        </p>

      </section>

      {/* Main Image */}

      <section className="max-w-6xl mx-auto px-8">

        <Image
  src={product.images.product}
  alt={product.title}
  width={1600}
  height={1600}
  draggable={false}
  className="
  w-full
  rounded-[40px]
  object-cover
  "
/>

      </section>

      {/* About */}

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
            About
          </p>

          <h2 className="mt-6 text-5xl font-light">
            Everyday Rituals.
          </h2>

          <p
            className="
            mt-10
            max-w-2xl
            text-lg
            leading-9
            text-[#8A7A72]
            "
          >
            A handmade loofah designed
            for everyday cleaning and simple living.
            <br />
            <br />
            Soft texture,
            thoughtful colors,
            and practical utility.
          </p>

        </div>

      </section>
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
    Texture
  </p>

  <h2 className="mt-6 text-5xl font-light">
    Handmade Texture.
  </h2>

  <p
    className="
    mt-10
    max-w-2xl
    text-lg
    leading-9
    text-[#8A7A72]
    "
  >
    Individually handcrafted with
    durable scrubber yarn.
    <br />
    <br />
    Each piece carries subtle variations,
    making every loofah unique.
  </p>

</div>

</section>
{/* Lifestyle Image */}

<section className="max-w-6xl mx-auto px-8 py-24">

<Image
  src={product.images.lifestyle}
  alt={`${product.title} Lifestyle`}
  width={1600}
  height={1600}
  draggable={false}
  className="
  w-full
  rounded-[40px]
  object-cover
  "
/>

</section>

      {/* Detail Image */}

      <section className="max-w-6xl mx-auto px-8">

      <Image
  src={product.images.texture}
  alt={`${product.title} Texture`}
  width={1600}
  height={1600}
  draggable={false}
  className="
  w-full
  rounded-[40px]
  object-cover
  "
/>

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

            <div>
              <p className="text-[#B49A8D]">
                Material
              </p>

              <p className="mt-2">
                Cotton
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
                Living Objects
              </p>
            </div>

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

  <p
    className="
    text-sm
    uppercase
    tracking-[0.2em]
    text-[#B49A8D]
    "
  >
    Quantity
  </p>

  <div className="flex items-center gap-4 mt-4">

    <button
      onClick={() =>
        setQuantity((q) => Math.max(1, q - 1))
      }
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

    <span className="text-xl">
      {quantity}
    </span>

    <button
      onClick={() =>
        setQuantity((q) => q + 1)
      }
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
  <div className="mt-12">

    <p
      className="
      text-sm
      uppercase
      tracking-[0.2em]
      text-[#B49A8D]
      "
    >
      Price
    </p>

    <h2 className="mt-4 text-5xl font-light">
{(product.price * quantity).toLocaleString()} KRW
</h2>

    <div className="flex gap-4 mt-10">

    <button
onClick={() => {
console.log({
product: product.title,
color: product.color,
quantity,
});
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

</section>

</main>
);
}