import type { Metadata } from "next";
import { Anton, Oswald, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
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
    <html
      lang="pt-BR"
      className={`${anton.variable} ${oswald.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="bg-cdc-bg text-cdc-text font-body min-h-screen">{children}</body>
    </html>
  );
}
