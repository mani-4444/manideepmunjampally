import type { Metadata } from "next";
import { Newsreader, Hanken_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { GlassFilters } from "@/components/ui/glass-filters";

/* Display and headings. Variable, with the optical-size axis loaded so
   large settings draw with finer strokes automatically. */
const newsreader = Newsreader({
  subsets: ["latin"],
  axes: ["opsz"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
});

/* Interface and reading text. */
const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

/* Machine output only. Not variable, so weights are listed. */
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

const TITLE = "Manideep Munjampally — AI Systems Engineer & Full-Stack Developer";
const DESCRIPTION =
  "Computer science undergrad at CBIT Hyderabad building full-stack products and generative-AI systems. #93 of 3,062 at HackerRank Orchestrate. Open to internships.";

/* Without metadataBase the social-card URL resolves against localhost.
   Vercel supplies the production host; NEXT_PUBLIC_SITE_URL overrides it
   for a custom domain. */
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? process.env.NEXT_PUBLIC_SITE_URL
  : process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "profile",
    siteName: "Manideep Munjampally",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${hanken.variable} ${plexMono.variable}`}
    >
      <head>
        {/* Scroll reveals are an enhancement: without JS the content must
            still be visible rather than held at its hidden state. */}
        <noscript>
          <style>{`.reveal-guard{opacity:1!important;transform:none!important;filter:none!important}`}</style>
        </noscript>
      </head>
      <body className="min-h-screen bg-ink text-bone antialiased">
        <SmoothScroll />
        <GlassFilters />
        {children}
      </body>
    </html>
  );
}
