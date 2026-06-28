import Link from "next/link";
import Image from "next/image";

import { moodArchive } from "../data/moodArchive";

export default function MoodArchivePage() {

  const collections =
    Object.values(moodArchive);

  return (

    <main className="min-h-screen bg-[#FFFBF8]">

      <section className="max-w-6xl mx-auto px-8 py-24">

        <p
          className="
          uppercase
          tracking-[0.25em]
          text-[#B49A8D]
          "
        >
          MOOD ARCHIVE
        </p>

        <h1
          className="
          mt-6
          text-6xl
          font-light
          "
        >
          Visual Archive
        </h1>

        <p
          className="
          mt-6
          max-w-2xl
          leading-8
          text-[#8A7A72]
          "
        >
          A growing collection of visual atmospheres,
          dreamlike memories,
          ambient imagery
          and digital artworks
          created by Exotic Ordinary.
        </p>

      </section>

      <section className="max-w-6xl mx-auto px-8 pb-32">

        <div
          className="
          grid
          md:grid-cols-2
          lg:grid-cols-3
          gap-10
          "
        >

          {collections.map((collection) => (

            <Link
              key={collection.slug}
              href={`/store/ma/${collection.slug}`}
              className="
              group
              block
              bg-white
              rounded-[32px]
              overflow-hidden
              border
              border-[#E6D7CF]
              hover:shadow-xl
              transition
              duration-500
              "
            >

              <div className="aspect-square relative">

                <Image
                  src={collection.images.cover}
                  alt={collection.title}
                  fill
                  className="
                  object-cover
                  group-hover:scale-105
                  transition
                  duration-700
                  "
                />

              </div>

              <div className="p-8">

                <p
                  className="
                  uppercase
                  tracking-[0.2em]
                  text-xs
                  text-[#B49A8D]
                  "
                >
                  {collection.category}
                </p>

                <h2
                  className="
                  mt-4
                  text-3xl
                  font-light
                  "
                >
                  {collection.title}
                </h2>

                <p
                  className="
                  mt-5
                  text-[#8A7A72]
                  leading-7
                  "
                >
                  {collection.description}
                </p>

                <div
                  className="
                  mt-8
                  flex
                  justify-between
                  items-center
                  "
                >

                  <div>

                    <p
                      className="
                      text-xs
                      uppercase
                      tracking-[0.15em]
                      text-[#B49A8D]
                      "
                    >
                      Images
                    </p>

                    <p className="mt-1">
                      {collection.count}
                    </p>

                  </div>

                  <div>

                    <p
                      className="
                      text-xs
                      uppercase
                      tracking-[0.15em]
                      text-[#B49A8D]
                      "
                    >
                      Price
                    </p>

                    <p className="mt-1">
                      {collection.price.toLocaleString()} KRW
                    </p>

                  </div>

                </div>

                <div
                  className="
                  mt-10
                  text-[#B49A8D]
                  group-hover:translate-x-2
                  transition
                  "
                >
                  Explore →
                </div>

              </div>

            </Link>

          ))}

        </div>

      </section>

    </main>

  );

}