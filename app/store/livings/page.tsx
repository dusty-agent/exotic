import Image from "next/image";
import Link from "next/link";
import { livings } from "@/app/store/data/livings";

export default function LivingsPage() {
  return (
    <main className="min-h-screen bg-[#FFFBF8]">

      <section className="max-w-6xl mx-auto px-8 pt-24 pb-20">

        <p
          className="
          text-sm
          uppercase
          tracking-[0.2em]
          text-[#B49A8D]
          "
        >
         EXOTIC LIVINGS
        </p>

        <h1
          className="
          mt-6
          text-7xl
          md:text-9xl
          font-bold
          tracking-[-0.06em]
          leading-[0.9]
          "
        >
          Active Loofahs
        </h1>

        <p
          className="
          mt-12
          text-xl
          italic
          text-[#8A7A72]
          "
        >
          Everyday Objects.
        </p>

      </section>

      <section className="max-w-6xl mx-auto px-8 pb-24">

        <div className="grid md:grid-cols-2 gap-8">
       
        {Object.entries(livings).map(([slug, product]) => (

<Link
  key={slug}
  href={`/store/livings/${slug}`}
>

  <Image
    src={product.images.product}
    alt={product.title}
    width={1200}
    height={1200}
  />

  <div>

    <p>{product.color}</p>

    <h2>{product.title}</h2>

    <p>
      {product.price.toLocaleString()} KRW
    </p>

  </div>

</Link>

))}
        


        </div>

      </section>

    </main>
  );
}