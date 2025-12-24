import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
// 1. Import Vercel Analytics
import { Analytics } from "@vercel/analytics/react";

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        
        {children}
        
        {/* 2. Add the Analytics Component here */}
        <Analytics />

        <footer className="py-10 text-center text-sm text-gray-500">
            © DCM2 2026
        </footer>
      </body>
    </html>
  );
}