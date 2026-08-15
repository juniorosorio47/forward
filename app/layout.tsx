import type { Metadata } from "next";
import { Bricolage_Grotesque, Fragment_Mono } from "next/font/google";
import "./globals.css";

const sans = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = Fragment_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://juniorosorio47.github.io/forward"),
  title: "Dari Osorio Junior · I build the checkout",
  description:
    "Senior full-stack developer for POS terminals, self-service kiosks and the B2B SaaS behind them. React, React Native, Node and Python, shipped where people actually pay.",
  openGraph: {
    title: "Dari Osorio Junior · I build the checkout",
    description:
      "Senior full-stack developer for POS, kiosks and B2B SaaS. 7 years of React, Node and Python.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
