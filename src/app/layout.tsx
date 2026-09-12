import type { Metadata } from "next";
import localFont from "next/font/local";
import { Montserrat, Poppins, Open_Sans } from "next/font/google";
import "./globals.css";

const akira = localFont({
  src: "../../public/fonts/Akira-Expanded.otf",
  variable: "--font-akira",
  display: "swap",
  weight: "900",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["italic", "normal"],
  variable: "--font-poppins",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-open-sans",
  display: "swap",
});

import { SmoothScroll } from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "Manideep Munjampally — Full-Stack & Generative AI Systems Developer",
  description:
    "Portfolio of Manideep Munjampally. Full-stack developer and AI systems builder shipping real, deployed software with multi-tier LLM integrations.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${akira.variable} ${montserrat.variable} ${poppins.variable} ${openSans.variable} scroll-smooth`}
    >
      <body className="bg-black text-white font-sans antialiased selection:bg-white selection:text-black min-h-screen">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
