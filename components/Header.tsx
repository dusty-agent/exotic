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
          className="flex items-center gap-2"
        >
          <span
            className="
            hidden
            md:block
            text-sm
            font-semibold
            tracking-[0.25em]
            "
          >
            EXOTIC ORDINARY
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
            href="/silvlin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#DDBB6A] transition"
          >
            SILVLIN
          </a>

          <a
            href="/stonin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#DDBB6A] transition"
          >
            STONIN
          </a>

          <Link
            href="/studio"
            className="
            text-[#B88D73]
            font-medium
            hover:opacity-80
            transition
            "
          >
            Studio
          </Link>

          <Link
            href="/voutiq"
            className="
            text-[#B88D73]
            font-medium
            hover:opacity-80
            transition
            "
          >
            Voutiq
          </Link>

          <a
            href="https://draft.best/#/exotic"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#DDBB6A] transition"
          >
            About
          </a>

        </nav>
      </div>
    </header>
  );
}