import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { UrgencyBar } from "@/components/layout/urgency-bar";
import { Footer } from "@/components/layout/footer";
import { SUMMIT } from "@/lib/utils";

const siteUrl = "https://bfsiinnovationsummit.in";
const ogTitle = `${SUMMIT.name} ${SUMMIT.year} — ${SUMMIT.theme}`;
const ogDescription = `${SUMMIT.edition} of India's premier BFSI technology leadership conference. ${SUMMIT.date} at ${SUMMIT.venue}, Mumbai. CIOs, CTOs, CISOs, and Innovation Leaders.`;

export const metadata: Metadata = {
  title: {
    default: `${SUMMIT.name} ${SUMMIT.year} | ${SUMMIT.dateShort} | Mumbai`,
    template: `%s | ${SUMMIT.name} ${SUMMIT.year}`,
  },
  description: ogDescription,
  keywords: [
    "BFSI Summit 2027",
    "Banking Technology Conference India",
    "Fintech Summit Mumbai",
    "BFSI Innovation Awards",
    "CIO CTO CISO Conference India",
    "Digital Banking Summit",
    "AI in Banking India",
    "Cybersecurity BFSI",
    "RegTech Conference",
    "Jio World Convention Centre",
  ],
  authors: [{ name: "BFSI Tech Innovation Summit" }],
  creator: "BFSI Tech Innovation Summit",
  openGraph: {
    title: ogTitle,
    description: ogDescription,
    url: siteUrl,
    siteName: SUMMIT.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: `${SUMMIT.name} ${SUMMIT.year}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: ogTitle,
    description: ogDescription,
    images: [`${siteUrl}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1 },
  },
  alternates: { canonical: siteUrl },
};

export const viewport: Viewport = {
  themeColor: "#0B1E3D",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preconnect to Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <UrgencyBar />
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
