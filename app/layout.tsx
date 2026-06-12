import type { Metadata } from "next";
import "./globals.css";

import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "EXOTIC ORDINARY®",
  description:
  "Exotic Ordinary explores beauty through craftsmanship, storytelling, sound and digital experiences.",

  keywords: [
    "exotic ordinary",
    "experience brand",
    "jewelry",
    "custom jewelry",
    "storytelling",
    "sound design",
    "creative direction",
    "voutique",
    "digital craftsmanship",
    "boutique",
  ],

  openGraph: {
    title: "EXOTIC ORDINARY®",
    description:
      "Exotic Ordinary explores beauty through craftsmanship, storytelling, sound and digital experiences.",
    images: [
      {
        url: "/warm_silvlin.png",
        width: 1600,
        height: 900,
        alt: "Warm Silvlin",
      },
    ],
  },
  themeColor: "#FCF9F7",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className="
        min-h-screen
        flex
        flex-col
        bg-[#FCF9F7]
        text-[#E3D0CC]
        antialiased
        "
      >
        <Header />

        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}