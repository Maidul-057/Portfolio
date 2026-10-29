import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { Providers } from "@/app/providers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://maidul-islam-portfolio.vercel.app"),
  title: {
    default: "Maidul Islam",
    template: "%s | Maidul Islam",
  },
  description:
    "Portfolio of Maidul Islam, a Computer Science and Engineering student at SUST specializing in full-stack web development.",
  keywords: [
    "Maidul Islam",
    "CSE student",
    "Full-Stack Web Developer",
    "Shahjalal University of Science and Technology",
    "Next.js portfolio",
  ],
  openGraph: {
    title: "Maidul Islam",
    description:
      "Computer Science and Engineering student at SUST building practical full-stack web experiences.",
    url: "https://maidul-islam-portfolio.vercel.app",
    siteName: "Maidul Islam",
    images: [
      {
        url: "/images/profile.jpg",
        width: 1200,
        height: 1200,
        alt: "Maidul Islam",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maidul Islam",
    description:
      "Computer Science and Engineering student at SUST building practical full-stack web experiences.",
    images: ["/images/profile.jpg"],
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#020817" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
