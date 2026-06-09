import type { Metadata } from "next";
import "./globals.css";

import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "EXOTIC ORDINARY®",
  description: "Beauty in the Mirror.",

  keywords: [
    "jewelry",
    "custom jewelry",
    "luxury jewelry",
    "digital jewelry",
    "exotic ordinary",
    "voutique",
  ],

  openGraph: {
    title: "EXOTIC ORDINARY®",
    description: "Beauty in the Mirror.",
    images: ["/warm_silvlin.png"],
  },
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
        text-[#2A2321]
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