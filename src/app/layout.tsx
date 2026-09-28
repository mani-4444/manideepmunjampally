import type { Metadata } from "next";
import localFont from "next/font/local";
import { Montserrat, Poppins, Open_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";

/* Akira Expanded — display only. Two moments on the whole page. */
const akira = localFont({
  src: "../../public/fonts/Akira-Expanded.otf",
  variable: "--font-akira",
  display: "swap",
  weight: "900",
});

/* Montserrat — section titles, project titles, labels, actions. */
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

/* Poppins Italic — pull quotes only. */
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["italic", "normal"],
  variable: "--font-poppins",
  display: "swap",
});

/* Open Sans — all body copy. */
const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

/* JetBrains Mono — real machine output only: telemetry, equations,
   pipeline traces. Previously the page used `font-mono` ~60 times as
   decoration and never loaded a mono face at all. */
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Manideep Munjampally — Full-Stack & Generative AI Systems Developer",
  description:
    "Manideep Munjampally — computer science undergrad at CBIT building full-stack products and generative-AI systems. Deployed web apps, tiered LLM pipelines, and multi-agent architectures.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${akira.variable} ${montserrat.variable} ${poppins.variable} ${openSans.variable} ${jetbrains.variable}`}
    >
      <head>
        {/* Scroll reveals are an enhancement — without JS the text must
            still be on the page rather than stuck at opacity 0. */}
        <noscript>
          <style>{`.reveal-guard{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="bg-ink text-bone antialiased min-h-screen">
        <SmoothScroll />
        {children}
        <div className="grain" aria-hidden="true" />
      </body>
    </html>
  );
}
