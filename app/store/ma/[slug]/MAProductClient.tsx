"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Props = {
  product: any;
};

export default function MAProductClient({
  product,
}: Props) {

  const router = useRouter();

  const addToCart = () => {

    const cart = JSON.parse(
      localStorage.getItem("cart") || "[]"
    );

    const exists = cart.find(
      (item: any) =>
        item.slug === product.slug
    );

    if (exists) {

      exists.quantity += 1;

    } else {

      cart.push({

        slug: product.slug,

        quantity: 1,

      });

    }

    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );

    alert("Added to Cart.");

  };

  const buyNow = () => {

    localStorage.setItem(

      "checkout",

      JSON.stringify([
        {
          slug: product.slug,
          quantity: 1,
        },
      ])

    );

    router.push("/checkout");

  };

  return (

    <main className="bg-[#FFFBF8] min-h-screen">

      {/* HERO */}

      <section className="max-w-6xl mx-auto px-8 pt-24">

        <Link
          href="/store/ma"
          className="
          uppercase
          tracking-[0.25em]
          text-sm
          text-[#B49A8D]
          hover:underline
          "
        >
          ← Mood Archive
        </Link>

        <h1
          className="
          mt-8
          text-6xl
          md:text-7xl
          font-light
          tracking-[-0.03em]
          "
        >
          {product.title}
        </h1>

        <p
          className="
          mt-8
          max-w-2xl
          text-lg
          leading-9
          text-[#8A7A72]
          "
        >
          {product.description}
        </p>

        <div
          className="
          mt-12
          flex
          flex-wrap
          gap-12
          "
        >

          <div>

            <p className="text-sm uppercase tracking-[0.2em] text-[#B49A8D]">
              Images
            </p>

            <h3 className="mt-2 text-3xl font-light">
              {product.count}
            </h3>

          </div>

          <div>

            <p className="text-sm uppercase tracking-[0.2em] text-[#B49A8D]">
              Format
            </p>

            <h3 className="mt-2 text-3xl font-light">
              PNG
            </h3>

          </div>

          <div>

            <p className="text-sm uppercase tracking-[0.2em] text-[#B49A8D]">
              Price
            </p>

            <h3 className="mt-2 text-3xl font-light">
              {product.price.toLocaleString()} KRW
            </h3>

          </div>

        </div>

      </section>

      {/* COVER */}

      <section className="max-w-6xl mx-auto px-8 mt-24">

        <Image
          src={product.images.cover}
          alt={product.title}
          width={1600}
          height={1600}
          draggable={false}
          priority
          className="
          w-full
          rounded-[42px]
          object-cover
          "
        />

      </section>

      {/* STORY */}

      <section className="max-w-4xl mx-auto px-8 py-28">

        <p
          className="
          uppercase
          tracking-[0.25em]
          text-sm
          text-[#B49A8D]
          "
        >
          Story
        </p>

        <p
          className="
          mt-8
          text-xl
          leading-10
          text-[#6D5D56]
          "
        >
          Every Mood Archive begins as
          an exploration of atmosphere,
          memory,
          texture,
          and quiet emotions.
          This collection captures fleeting
          moments transformed into
          timeless visual experiences.
        </p>

      </section>

      {/* GALLERY */}

      <section className="max-w-6xl mx-auto px-8 pb-24">

        <div
          className="
          grid
          md:grid-cols-2
          gap-10
          "
        >

          {product.images.gallery.map(

            (
              image: string,
              index: number
            ) => (

              <Image
                key={index}
                src={image}
                alt={`${product.title} ${index + 1}`}
                width={1200}
                height={1200}
                draggable={false}
                className="
                rounded-[30px]
                object-cover
                hover:scale-[1.01]
                transition
                duration-500
                "
              />

            )

          )}

        </div>

      </section>
      {/* INCLUDED */}

      <section className="max-w-4xl mx-auto px-8 py-24">

        <div
          className="
          border-t
          border-[#D8C7BD]
          pt-20
          "
        >

          <p
            className="
            uppercase
            tracking-[0.25em]
            text-sm
            text-[#B49A8D]
            "
          >
            Included
          </p>

          <div className="mt-10 space-y-5 text-lg">

            <p>✓ {product.count} High Resolution Images</p>

            <p>✓ Desktop Wallpaper</p>

            <p>✓ Mobile Wallpaper</p>

            <p>✓ PNG Format</p>

            <p>✓ Personal License</p>

            <p>✓ Instant Download after Payment</p>

          </div>

        </div>

      </section>

      {/* SUPPORT */}

      <section className="max-w-4xl mx-auto px-8">

        <div
          className="
          rounded-[36px]
          bg-white
          border
          border-[#D8C7BD]
          p-12
          "
        >

          <p
            className="
            uppercase
            tracking-[0.25em]
            text-sm
            text-[#B49A8D]
            "
          >
            Support Mood Archive
          </p>

          <h2
            className="
            mt-6
            text-5xl
            font-light
            "
          >
            {product.price.toLocaleString()} KRW
          </h2>

          <p
            className="
            mt-8
            max-w-xl
            leading-8
            text-[#8A7A72]
            "
          >
            Every purchase supports the creation
            of new visual archives,
            ambient music,
            and future collections.

            <br />
            <br />

            Think of it as buying
            the next cup of coffee
            for Exotic Ordinary.
          </p>

          <div
            className="
            mt-12
            flex
            flex-col
            md:flex-row
            gap-5
            "
          >

            <button
              onClick={addToCart}
              className="
              flex-1
              py-5
              rounded-full
              border
              border-[#D8C7BD]
              hover:bg-black
              hover:text-white
              transition
              "
            >
              Add to Cart
            </button>

            <button
              onClick={buyNow}
              className="
              flex-1
              py-5
              rounded-full
              bg-black
              text-white
              hover:opacity-90
              transition
              "
            >
              Buy Collection
            </button>

          </div>

        </div>

      </section>

      {/* EXPLORE */}

      <section className="max-w-6xl mx-auto px-8 py-32">

        <div
          className="
          border-t
          border-[#D8C7BD]
          pt-20
          "
        >

          <p
            className="
            uppercase
            tracking-[0.25em]
            text-sm
            text-[#B49A8D]
            "
          >
            Continue Exploring
          </p>

          <div
            className="
            mt-12
            grid
            md:grid-cols-3
            gap-8
            "
          >

            <Link
              href="/store/ma"
              className="
              rounded-[28px]
              border
              border-[#D8C7BD]
              bg-white
              p-8
              hover:shadow-lg
              transition
              "
            >
              <h3 className="text-2xl font-light">
                More Collections →
              </h3>

              <p className="mt-4 text-[#8A7A72]">
                Explore the complete
                Mood Archive.
              </p>

            </Link>

            <Link
              href="/ma"
              className="
              rounded-[28px]
              border
              border-[#D8C7BD]
              bg-white
              p-8
              hover:shadow-lg
              transition
              "
            >
              <h3 className="text-2xl font-light">
                Mood Archive →
              </h3>

              <p className="mt-4 text-[#8A7A72]">
                Visit the archive,
                music and visual worlds.
              </p>

            </Link>

            <Link
              href="/store"
              className="
              rounded-[28px]
              border
              border-[#D8C7BD]
              bg-white
              p-8
              hover:shadow-lg
              transition
              "
            >
              <h3 className="text-2xl font-light">
                Store →
              </h3>

              <p className="mt-4 text-[#8A7A72]">
                Discover SILVLIN,
                LIVINGS
                and more.
              </p>

            </Link>

          </div>

        </div>

      </section>

    </main>

  );

}