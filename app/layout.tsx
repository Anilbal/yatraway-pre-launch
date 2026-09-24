import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://yatrawaynepaltravels.com.np";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Yatraway | Best Nepal Tours, Trekking & Travel Experiences",
    template: "%s | Yatraway Nepal",
  },
  description:
    "Explore Nepal with Yatraway. Discover curated Nepal tour packages, Himalayan trekking expeditions, culture tours in Kathmandu, Pokhara sightseeing, and adventure activities.",
  keywords: [
    "Nepal tours and travels",
    "Yatraway Nepal",
    "Nepal trekking packages",
    "Best travel agency in Nepal",
    "Annapurna base camp trek",
    "Everest base camp trek",
    "Kathmandu Pokhara tour",
    "Chitwan safari package",
    "Adventure tourism Nepal",
  ],
  authors: [{ name: "Yatraway Nepal" }],
  creator: "Yatraway Nepal",
  publisher: "Yatraway Nepal",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "./",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
