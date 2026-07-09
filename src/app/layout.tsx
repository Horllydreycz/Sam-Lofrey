import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Sam Lofrey — Nigerian Luxury Menswear",
  description:
    "Bespoke Nigerian luxury menswear. Traditional Agbada and Senators, sharp corporate tailoring, and refined casual wear. Built for Kings.",
  keywords: [
    "Nigerian menswear",
    "bespoke tailoring",
    "Agbada",
    "Senator wear",
    "luxury menswear",
    "Sam Lofrey",
  ],
  openGraph: {
    title: "Sam Lofrey — Nigerian Luxury Menswear",
    description:
      "Where craftsmanship meets class. Every stitch is a statement of quality and style.",
    url: "https://www.samlofrey.com",
    siteName: "Sam Lofrey",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
