import { silvlin } from "@/app/store/data/silvlin";
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
    silvlin[
      params.slug as keyof typeof silvlin
    ];

  if (!product) {
    return {};
  }

  const imageUrl =
    `https://exoticordinary.com${product.images.hero}`;

  return {
    title:
      `${product.title} | SILVLIN from EXOTIC ORDINARY`,

    description:
      product.description,

    alternates: {
      canonical:
        `https://exoticordinary.com/store/silvlin/${params.slug}`,
    },

    openGraph: {
      title:
        `${product.title} | SILVLIN`,

      description:
        product.description,

      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: product.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",

      title:
        `${product.title} | SILVLIN`,

      description:
        product.description,

      images: [
        imageUrl,
      ],
    },
  };
}

export function generateStaticParams() {
  return Object.keys(silvlin).map(
    (slug) => ({
      slug,
    })
  );
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {

  const { slug } = await params;

  const product =
    silvlin[
      slug as keyof typeof silvlin
    ];

  if (!product) {
    return (
      <div>
        Product Not Found
      </div>
    );
  }

  return (
    <ProductClient
      product={product}
    />
  );
}
