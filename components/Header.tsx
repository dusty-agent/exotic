import Image from "next/image";
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
      border-[#E3D0CC]
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
          className="flex items-center gap-2"
        >
          <Image
            src="/symbol_2.png"
            alt="Exotic Ordinary"
            width={22}
            height={22}
            priority
          />

          <span
            className="
            hidden
            md:block
            text-sm
            font-semibold
            tracking-[0.2em]
            "
          >
            EO
          </span>
        </Link>

        <nav
          className="
          flex
          items-center
          gap-4
          text-xs
          md:gap-8
          md:text-sm
          "
        >
          <a
            href="https://smartstore.naver.com/exoticordinary"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#DDBB6A] transition"
          >
            Boutique
          </a>

          <a
            href="https://blog.naver.com/assetpick1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#DDBB6A] transition"
          >
            Archive
          </a>

          <a
            href="https://draft.best/#/exotic"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#DDBB6A] transition"
          >
            About
          </a>

          <Link
            href="/voutique"
            className="
            text-[#D98C97]
            font-medium
            hover:opacity-80
            transition
            "
          >
            Voutique™
          </Link>
        </nav>
      </div>
    </header>
  );
}