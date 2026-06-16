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
  
    return {
      title:
        `${product.title} ${product.color} | EXOTIC ORDINARY`,
  
      description:
        product.description,
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