import type { Metadata } from "next";

import {
  Inter,
  Freehand,
  Meie_Script,
  Fraunces,
  Geist,
  Bebas_Neue,
} from "next/font/google";
import "./globals.css";

import { Toaster } from "@/components/ui/sonner";
import QueryProvider from "@/components/QueryProvider";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: "400",
});
export const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  weight: ["400", "700", "900"],
});
export const freehand = Freehand({
  subsets: ["latin"],
  variable: "--font-freehand",
  weight: ["400"],
});
export const meieScript = Meie_Script({
  subsets: ["latin"],
  variable: "--font-meie_script",
  weight: ["400"],
});

export const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-bebas_neue",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: {
    default: "Miss Indigenous Nigeria",
    template: "%s | Miss Indigenous Nigeria",
  },
  description:
    "Apply Miss Indigenous Nigeria, and events designed to help individuals and businesses grow financially and digitally.",

  keywords: [
    "WalletWise",
    "TRANSCORP HILTON",
    "buy event tickets",
    "finance workshops",
    "business programs",
    "financial literacy events",
    "Nigeria tech events",
  ],

  authors: [{ name: "WalletWise Team" }],

  openGraph: {
    title: "WalletWise Events",
    description:
      "Get tickets to WalletWise programs, workshops, and exclusive events focused on financial growth and digital innovation.",
    url: "https://events.walletwise.ng",
    siteName: "Miss Indigenous Nigeria",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Miss Indigenous Nigeria",
    description:
      "Secure your ticket to WalletWise programs, workshops, and events.",
  },

  metadataBase: new URL("https://events.walletwise.ng"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <QueryProvider>
        <body
          className={`${inter.variable} ${fraunces.variable} ${geist.variable} ${freehand.variable} ${meieScript.variable} ${bebasNeue.variable}`}
        >
          {children}
          <Toaster />
        </body>
      </QueryProvider>
    </html>
  );
}
