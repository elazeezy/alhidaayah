import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.alhidaayahplatinumtravels.co.uk"),
  title: {
    default: "Al-Hidaayah Platinum Travels | Umrah & Hajj Packages from the UK",
    template: "%s | Al-Hidaayah Platinum Travels",
  },
  description:
    "Book premium Umrah and Hajj packages with Al-Hidaayah Platinum Travels. Luxury 3★–5★ hotels, guided spiritual tours, return flights included. Trusted UK-based Islamic travel specialists.",
  keywords: [
    "Umrah packages UK",
    "Hajj packages UK",
    "cheap Umrah packages",
    "Umrah 2026",
    "Hajj 2026",
    "Al-Hidaayah Platinum Travels",
    "Islamic travel UK",
    "Makkah hotel",
    "Madinah hotel",
    "Umrah from London",
  ],
  authors: [{ name: "Al-Hidaayah Platinum Travels" }],
  creator: "Al-Hidaayah Platinum Travels",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://www.alhidaayahplatinumtravels.co.uk",
    siteName: "Al-Hidaayah Platinum Travels",
    title: "Al-Hidaayah Platinum Travels | Premium Umrah & Hajj Packages",
    description:
      "Experience the journey of a lifetime with Al-Hidaayah Platinum Travels. Premium Umrah & Hajj packages with 5-star hotels, guided tours, and spiritual support.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Al-Hidaayah Platinum Travels - Premium Umrah & Hajj Packages",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Al-Hidaayah Platinum Travels | Premium Umrah & Hajj Packages",
    description:
      "Experience the journey of a lifetime with Al-Hidaayah Platinum Travels.",
    images: ["/og-image.jpg"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${inter.variable} ${plusJakartaSans.variable} font-body bg-primary-50 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
