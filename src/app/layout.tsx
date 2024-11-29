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
  title: 'Sin Tatt - Premium Egg Supplier in Malaysia',
  description: "Supplying premium farm-fresh eggs with a commitment to quality and sustainability.",  keywords: 'eggs, wholesale eggs, Malaysia eggs, egg supplier, fresh eggs, Kuala Lumpur eggs',
  openGraph: {
    title: 'Sin Tatt - Premium Egg Supplier in Malaysia',
    description: "Supplying premium farm-fresh eggs with a commitment to quality and sustainability.",    url: 'https://www.sintatteggs.com',
    siteName: 'Sin Tatt Eggs Supplier Sdn Bhd',
    locale: 'en_MY',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: '16x16',
        type: 'image/x-icon',
      },
    ],
    apple: [
      {
        url: '/favicon.ico',
        sizes: '180x180',
        type: 'image/x-icon',
      }
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
