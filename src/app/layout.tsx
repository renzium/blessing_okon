import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blessing Okon",
  description: "Designer, Project Manager, Administrative Officer, Product Manager, Entrepreneur",
  keywords: ["Designer", "Project Manager", "Administrative Officer", "Product Manager", "Entrepreneur"],
  authors: [{ name: "Blessing Okon" }],
  metadataBase: new URL("https://blessing-okon.com"),
  icons: {
    icon: "/assets/images/logo.png",
  },
  openGraph: {
    title: "Blessing Okon",
    description: "Designer, Project Manager, Administrative Officer, Product Manager, Entrepreneur",
    url: "https://blessing-okon.com",
    images: [
      {
        url: "/assets/images/logo.png", // Must be in public folder
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: "/assets/images/logo.png",
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

