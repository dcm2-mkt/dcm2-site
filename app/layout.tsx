import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DCM2 | Diogo C Marques",
  description: "Growth Marketing Portfolio & Case Studies",
  metadataBase: new URL('https://dcm2.com'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'DCM2 | Diogo C Marques',
    url: 'https://dcm2.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://dcm2.com/?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  }

  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {/* SEO JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        {/* --- GOOGLE ANALYTICS START --- */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PZPYJSNKDE"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PZPYJSNKDE');
          `}
        </Script>
        {/* --- GOOGLE ANALYTICS END --- */}

        <Navbar />
        {children}
        
        {/* Vercel Analytics */}
        <Analytics />

        <footer className="py-10 text-center text-sm text-gray-500">
            This site uses Google Analytics to understand traffic. No personal data is sold. © DCM2 2026
        </footer>
      </body>
    </html>
  );
}