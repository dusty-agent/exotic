import { products } from "@/app/store/data/products";
import ProductClient from "./ProductClient";

export async function generateMetadata(
    {
      params,
    }: {
      params: {
        slug: string;
      };
    }
  ) {
    const product =
      products[
        params.slug as keyof typeof products
      ];

    const imageUrl =
      `https://exoticordinary.com${product.images.product}`;
  
    return {
      title:
        `${product.title} ${product.color} | EXOTIC ORDINARY`,
  
      description:
        product.description,
     
      alternates: {
        canonical:
            `https://exoticordinary.com/store/livings/${params.slug}`,
        },
  
      openGraph: {
        title:
          `${product.title} ${product.color}`,
  
        description:
          product.description,
  
          images: [
            {
              url:
                imageUrl,
            width: 1200,
            height: 630,
            alt:
              `${product.title} ${product.color}`,
          },
        ],
      },
  
      twitter: {
        card: "summary_large_image",
  
        title:
          `${product.title} ${product.color}`,
  
        description:
          product.description,
  
          images: [
            imageUrl,
          ],
      },
    };
  }

export function generateStaticParams() {
  return Object.keys(products).map((slug) => ({
    slug,
  }));
}

export default async function LoofahPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const { slug } = await params;

  const product =
    products[
      slug as keyof typeof products
    ];

  if (!product) {
    return <div>Product Not Found</div>;
  }

  return (
    <ProductClient product={product} />
  );
}