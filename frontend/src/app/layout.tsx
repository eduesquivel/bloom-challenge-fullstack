import type { Metadata } from "next";

import { Manrope } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Desafío Dev - Bloom Reuse",
};

const manrope = Manrope({
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.className} bg-white font-black`}
      >{children}</body>
    </html>
  );
}
