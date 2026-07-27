import type { Metadata } from "next";
//import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@/node_modules/devicons/dist/devicons.css"

import Header from "@/app/ui/header"
import Footer from "@/app/ui/footer"

/*
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
*/

export const metadata: Metadata = {
  title: "Dev Artus",
  description: "Software development, hosting and support office specialized in business portfolios",
  keywords: "portfolio, web dev, development, hosting, support, SPA, PWA, business, office, Features, design, web design"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
      >
      <body className="min-h-full flex flex-col relative font-serif text-lg">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
