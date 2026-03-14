import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const font = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300","400","500","600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Detailocity",
  description: "Premium Car Detailing - Mumbai",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}