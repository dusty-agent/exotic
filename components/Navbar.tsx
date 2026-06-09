import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b border-[#E3D0CC]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">

        <Link
          href="/"
          className="font-semibold tracking-[0.25em]"
        >
          EXOTIC ORDINARY®
        </Link>

        <nav className="flex gap-8 text-sm">

          <Link href="/shop">
            Shop
          </Link>

          <Link href="/stories">
            Stories
          </Link>

          <Link href="/archive">
            Archive
          </Link>

          <Link href="/about">
            About
          </Link>

          <Link
            href="/voutique"
            className="font-medium"
          >
            Voutique™
          </Link>

        </nav>

      </div>
    </header>
  );
}