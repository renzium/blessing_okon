import type { Metadata } from "next";
import { Inter } from "next/font/google"; // High-end font for a professional look
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Blessing Okon",
  description: "Designer, Project Manager, Administrative Officer, Product Manager, Entrepreneur",
  keywords: ["Designer", "Project Manager", "Administrative Officer", "Product Manager", "Entrepreneur"],
  authors: [{ name: "Blessing Okon" }],
  metadataBase: new URL("https://blessing-okon.vercel.app"),
  
  // Favicon
  icons: {
    icon: "/assets/images/logo.png",
  },

  // The Open Graph (Social Media Sharing)
  openGraph: {
    title: 'Blessing Okon | Admin & Design Portfolio',
    description: 'Bridging the gap between linguistic precision and creative design.',
    url: 'https://blessing-okon.vercel.app',
    siteName: 'Blessing Okon Portfolio',
    images: [
      {
        url: '/assets/images/blessing-og.png', // Corrected path 'images'
        width: 1200,
        height: 630,
        alt: 'Blessing Okon Portfolio Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  // Twitter/X Card
  twitter: {
    card: 'summary_large_image',
    title: 'Blessing Okon | Portfolio',
    description: 'Administrative Lead & Creative Designer.',
    images: ['/assets/images/blessing-og.png'], 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-black text-white`}>
        {/* You can wrap children in a smooth-scroll container here if needed */}
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}