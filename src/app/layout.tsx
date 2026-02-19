import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blessing Okon",
  description: "Designer, Project Manager, Administrative Officer, Product Manager, Entrepreneur",
  keywords: ["Designer", "Project Manager", "Administrative Officer", "Product Manager", "Entrepreneur"],
  authors: [{ name: "Blessing Okon" }],
  metadataBase: new URL("https://blessing-okon.vercel.app"),
  icons: {
    icon: "/assets/images/logo.png",
  },
  // The Open Graph config
  openGraph: {
    title: 'Blessing Okon | Portfolio',
    description: 'Administrative Lead & Creative Designer.',
    url: 'https://blessing-okon.vercel.app',
    siteName: 'Blessing Okon Portfolio',
    images: [
      {
        url: '/assets/image/blessing-hero.png', // Next.js will resolve this to the full URL
        width: 1200,
        height: 630,
        alt: 'Blessing Okon Portfolio Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  // The Twitter config
  twitter: {
    card: 'summary_large_image',
    title: 'Blessing Okon | Portfolio',
    description: 'Administrative Lead & Creative Designer.',
    images: ['/assets/image/blessing-hero.png'], 
  },
};   

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}

