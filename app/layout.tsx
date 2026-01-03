import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  style: ["normal", "italic"],
});

const manrope = Manrope({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Makeup by Lia | Professional Bridal Makeup Artist",
  description: "Enhancing your natural radiance with timeless, elegant bridal makeup. Luxury makeup services for your wedding day.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        {/* Calendly Widget CSS */}
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${cormorant.variable} ${manrope.variable} antialiased`}
      >
        {children}
        {/* Calendly Popup Widget Script */}
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
