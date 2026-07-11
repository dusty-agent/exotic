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
          Mood Archive
        </h1>

        <p
          className="
          mt-6
          max-w-2xl
          leading-8
          text-[#8A7A72]
          "
        >
          무드 아카이브의 디지털 컬렉션을 만나보세요.

          <br /><br />

          <span className="italic">

          A growing collection of visual atmospheres,
          dreamlike memories,
          ambient imagery and digital artworks
          created by EXOTIC ORDINARY.

          </span>
        </p>

        <div
          className="
          mt-12
          rounded-[28px]
          border
          border-[#E6D7CF]
          bg-white
          p-8
          "
        >

          <p className="text-[#8A7A72] leading-8">

            Mood Archive는
            EXOTIC ORDINARY의
            디지털 아카이브 프로젝트입니다.

            <br /><br />

            <span className="italic">

              Mood Archive is a digital archive project
              by EXOTIC ORDINARY.

            </span>

          </p>

          <a
            href="/ma"
            className="
            inline-block
            mt-8
            text-[#B49A8D]
            hover:underline
            "
          >

            브랜드 소개 보기
            (About Mood Archive →)

          </a>

        </div>

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
                  draggable={false}
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