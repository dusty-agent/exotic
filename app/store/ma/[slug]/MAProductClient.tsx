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
          ← 컬렉션으로 돌아가기

          <div className="text-xs italic mt-1">
          Back to Collections
          </div>

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
              이미지
              <span className="block text-xs italic mt-1">
              Images
              </span>
            </p>

            <h3 className="mt-2 text-3xl font-light">
              {product.count}
            </h3>

          </div>

          <div>

            <p className="text-sm uppercase tracking-[0.2em] text-[#B49A8D]">
              파일 형식
              <span className="block text-xs italic mt-1">
              Format
              </span>
            </p>

            <h3 className="mt-2 text-3xl font-light">
              PNG
            </h3>

          </div>

          <div>

            <p className="text-sm uppercase tracking-[0.2em] text-[#B49A8D]">
              가격
              <span className="block text-xs italic mt-1">
              Price
              </span>
            </p>

            <h3 className="mt-2 text-3xl font-light">
              {product.price.toLocaleString()} KRW
            </h3>

          </div>

        </div>

      </section>

      {/* COVER */}

      <section className="max-w-6xl mx-auto px-8 mt-24">

        <div
          className="
            w-full
            aspect-square
            rounded-[42px]
            overflow-hidden
            relative
            group
          "
        >
          <div
            className="
              absolute
              inset-0
              bg-cover
              bg-center
              bg-no-repeat
              transition
              duration-700
              group-hover:scale-105
            "
            style={{
              backgroundImage: `url(/api/preview${product.images.cover})`,
            }}
            onContextMenu={(e) => e.preventDefault()}
          />

          <div className="absolute inset-0 z-10" />

        </div>

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
          스토리

          <div className="text-xs italic mt-2">
          Story
          </div>
        </p>

        <p
          className="
          mt-8
          text-xl
          leading-10
          text-[#6D5D56]
          "
        >
          이 컬렉션은
          분위기와 기억,
          질감과 조용한 감정을
          기록하며 시작되었습니다.

          순간의 감각을
          시간이 지나도 남을
          시각적 경험으로
          보존합니다.

          <br /><br />

          <span className="italic">

          Every Mood Archive begins as
          an exploration of atmosphere,
          memory,
          texture,
          and quiet emotions.

          </span>
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

                <div
                  key={index}
                  className="
                    aspect-square
                    rounded-[30px]
                    overflow-hidden
                    relative
                    group
                  "
                >
                  <div
                    className="
                      absolute
                      inset-0
                      bg-cover
                      bg-center
                      bg-no-repeat
                      transition
                      duration-500
                      group-hover:scale-[1.01]
                    "
                    style={{
                      backgroundImage: `url(/api/preview${image})`,
                    }}
                    onContextMenu={(e) => e.preventDefault()}
                  />

                  <div className="absolute inset-0 z-10" />

                </div>

              )
            )}
          </div>  

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
            포함 항목

          <div className="text-xs italic mt-2">
          Included
          </div>
          </p>

         <div className="mt-10 space-y-5 text-lg">

            <p>
              ✓ 고해상도 이미지 {product.count}장
              <span className="block text-sm text-[#8A7A72]">
                High Resolution Images
              </span>
            </p>

            <p>
              ✓ 데스크톱 배경화면
              <span className="block text-sm text-[#8A7A72]">
                Desktop Wallpaper
              </span>
            </p>

            <p>
              ✓ 모바일 배경화면
              <span className="block text-sm text-[#8A7A72]">
                Mobile Wallpaper
              </span>
            </p>

            <p>
              ✓ PNG 파일
              <span className="block text-sm text-[#8A7A72]">
                PNG Format
              </span>
            </p>

            <p>
              ✓ 개인 이용 라이선스
              <span className="block text-sm text-[#8A7A72]">
                Personal License
              </span>
            </p>

            <p>
              ✓ 결제 후 즉시 다운로드
              <span className="block text-sm text-[#8A7A72]">
                Instant Download after Payment
              </span>
            </p>

            <p>
              ✓ 결제일로부터 3개월 동안 다운로드 가능
              <span className="block text-sm text-[#8A7A72]">
                Download available for 3 months from the payment date
              </span>
            </p>

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

                무드 아카이브 후원

                <span className="block mt-2 text-xs italic tracking-normal">
                  Support Mood Archive
                </span>

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

      여러분의 구매는
      새로운 이미지,
      앰비언트 음악,
      그리고 다음 컬렉션을
      만드는 데 사용됩니다.

      <br />
      <br />

      작은 후원이
      EXOTIC ORDINARY의
      다음 작업으로 이어집니다.

      <br />
      <br />

      디지털 다운로드 상품은
      결제일로부터
      <strong>3개월 동안</strong>
      다운로드 가능합니다.

      <br />
      <br />

      <span className="italic">

        Every purchase supports
        the creation of future
        visual archives,
        ambient music
        and new collections.

      </span>

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

        <div className="flex flex-col items-center">

          <span>
            장바구니 담기
          </span>

          <span className="text-xs opacity-70 mt-1">
            Add to Cart
          </span>

        </div>

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

        <div className="flex flex-col items-center">

          <span>
            바로 구매하기
          </span>

          <span className="text-xs opacity-70 mt-1">
            Buy Now
          </span>

        </div>

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

      더 둘러보기

      <span className="block mt-2 text-xs italic tracking-normal">
        Continue Exploring
      </span>

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
          더 많은 컬렉션 →
        </h3>

        <p className="mt-4 text-[#8A7A72]">
          전체 Mood Archive 컬렉션을 둘러보세요.

          <span className="block mt-3 italic text-sm">
            Explore the complete Mood Archive.
          </span>

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
          무드 아카이브 소개 →
        </h3>

        <p className="mt-4 text-[#8A7A72]">

          프로젝트와
          아카이브 이야기를 만나보세요.

          <span className="block mt-3 italic text-sm">

            Visit the archive,
            music and visual worlds.

          </span>

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
          EXOTIC ORDINARY 스토어 →
        </h3>

        <p className="mt-4 text-[#8A7A72]">

          SILVLIN,
          LIVINGS,
          그리고 다양한 컬렉션을 만나보세요.

          <span className="block mt-3 italic text-sm">

            Discover SILVLIN,
            LIVINGS and more.

          </span>

        </p>

      </Link>

    </div>

  </div>

</section>

</main>

);

} 