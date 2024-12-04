import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { Header } from '@/sections/Header';
import { Footer } from '@/sections/Footer';
import { BackToTop } from '@/components/BackToTop';
import { SpeedInsights } from '@vercel/speed-insights/next';

const dmSans = DM_Sans({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    template: '%s | Sin Tatt - Egg Supplier in Malaysia',
    default: 'Sin Tatt - Egg Supplier in Malaysia',
  },
  description: "Supplying premium farm-fresh eggs with a commitment to quality and sustainability.",
  keywords: 'egg supplier Malaysia, fresh eggs wholesale, Kedah eggs supplier, telur ayam, farm fresh eggs, egg distribution Malaysia, bulk eggs supplier, grade A eggs, grade B eggs, egg wholesale Kedah, telur segar, pembekal telur, egg farm Malaysia',
  openGraph: {
    siteName: 'Sin Tatt - Egg Supplier in Malaysia',
    locale: 'en_MY',
    type: 'website',
    url: 'https://www.sintatteggs.com',
  },
  icons: {
    icon: [
      { 
        url: '/favicon.ico',
        sizes:'16x16'
      },
    ],
    apple: [
      { 
        url: '/sin-tatt-logo.png', 
        sizes: '180x180', 
        type: 'image/png' 
      },
    ],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(dmSans.className, "antialiased bg-[#c2c5d3]")}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <BackToTop />
        <SpeedInsights />
      </body>
    </html>
  );
}
