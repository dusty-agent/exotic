import { notFound } from "next/navigation";
import { moodArchive } from "@/app/store/data/moodArchive";
import MAProductClient from "./MAProductClient";

export function generateStaticParams() {
  return Object.keys(moodArchive).map((slug) => ({
    slug,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {

  const { slug } = await params;

  const product =
    moodArchive[
      slug as keyof typeof moodArchive
    ];

  if (!product) {
    notFound();
  }

  return (
    <MAProductClient
      product={product}
    />
  );
}