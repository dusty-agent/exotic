import Link from "next/link";

export default function Header() {
  return (
    <header
      className="
      sticky
      top-0
      z-50
      bg-[#FFFBF8]/90
      backdrop-blur
      border-b
      border-[#D8C7BD]
      "
    >
      <div
        className="
        max-w-6xl
        mx-auto
        px-8
        h-16
        flex
        items-center
        justify-between
        "
      >
        <Link
          href="/"
          className="
          text-sm
          font-semibold
          tracking-[0.25em]
          "
        >
          EXOTIC ORDINARY®
        </Link>

        <nav
          className="
          flex
          items-center
          gap-6
          text-sm
          "
        >
          <Link
            href="/store/silvlin"
            className="
            hover:opacity-70 transition
            font-bold"
          >
            SILVLIN
          </Link>


          <Link
            href="/store/livings"
            className="
            hover:opacity-70 transition
            font-bold"
          >
            LIVINGS
          </Link>

          <Link
            href="/store/ma"
            className="
            hover:opacity-70 transition
            font-bold"
          >
            MA
          </Link>

          <Link
            href="/cart"
            className="hover:opacity-70 transition"
          >
            CART
          </Link>

          <Link
            href="/studio"
            className="
            font-medium
            text-[#B88D73]
            hover:opacity-70
            transition
            "
          >
            STUDIO
          </Link>
        </nav>
      </div>
    </header>
  );
}