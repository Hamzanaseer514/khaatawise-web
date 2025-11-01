import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Khaata App - Track Your Expenses, Split Bills & Manage Finances | Personal & Group Ledger",
  description: "Khaata App - Your complete financial management solution. Track personal expenses, split bills with friends, manage group transactions, track mess attendance, and get detailed analytics. Download now for Android & iOS.",
  keywords: "khaata app, expense tracker, bill splitter, group expenses, personal finance, mess management, ledger app, finance app, money management, split bills",
  authors: [{ name: "Khaata App" }],
  creator: "Khaata App",
  publisher: "Khaata App",
  openGraph: {
    title: "Khaata App - Track Your Expenses & Split Bills",
    description: "Manage your personal finances, split bills with friends, track mess attendance, and get detailed analytics. Download Khaata App now!",
    url: "https://khaataapp.com",
    siteName: "Khaata App",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Khaata App - Financial Management",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Khaata App - Track Your Expenses & Split Bills",
    description: "Manage your personal finances, split bills with friends, track mess attendance, and get detailed analytics.",
    images: ["/og-image.png"],
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
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: "#20B2AA",
  alternates: {
    canonical: "https://khaataapp.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
