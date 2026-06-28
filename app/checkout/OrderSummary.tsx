import Image from "next/image";

export default function OrderSummary({
  products,
}: any) {

  return (

    <section>

      <h2 className="text-2xl font-light">
        Order Summary
      </h2>

      <div className="mt-10 space-y-10">

        {products.map((product: any) => {

            const image =
            product.images.hero ??
            product.images.cover ??
            product.images.product;

            return (

            <div
              key={product.slug}
              className="flex gap-6"
            >

              <Image
                src={image}
                alt={product.title}
                width={140}
                height={140}
                draggable={false}
                className="rounded-[24px] object-cover"
              />

              <div>

                <h3>
                  {product.title}
                </h3>

                <p className="mt-2 text-[#8A7A72]">

                  {
                    product.category === "Visual Archive"

                      ? "Instant Digital Download"

                      : product.material ??
                        product.category
                  }

                </p>

                <p className="mt-2">
                  Qty {product.quantity}
                </p>

                <p className="mt-6">
                  {(product.price * product.quantity).toLocaleString()} KRW
                </p>

                <p className="mt-2 text-xs italic text-[#8A7A72]">

                  {
                    product.category === "Visual Archive"

                      ? "Delivered immediately after payment."

                      : "Ships in 1–2 business days."
                  }

                </p>

              </div>

            </div>

            );

})}

      </div>

    </section>

  );

}