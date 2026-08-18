import type { Metadata } from "next";
import { Barlow_Condensed, Barlow } from "next/font/google";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  display: "swap",
});

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ciadocorpo.com.br"),
  title: {
    default: "Cia do Corpo — Musculação, Kickboxing e Jiu-Jitsu em Divinópolis",
    template: "%s · Cia do Corpo",
  },
  description:
    "Há 25 anos formando corpo e mente em Divinópolis. Musculação, kickboxing e jiu-jitsu num só lugar, com professor experiente e estrutura completa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${barlowCondensed.variable} ${barlow.variable} antialiased`}>
      <body className="bg-cdc-bg text-cdc-text font-body min-h-screen">{children}</body>
    </html>
  );
}
