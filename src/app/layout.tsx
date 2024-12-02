import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { Header } from '@/sections/Header';
import { Footer } from '@/sections/Footer';
import { BackToTop } from '@/components/BackToTop';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { useRouter } from 'next/router';

const dmSans = DM_Sans({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Sin Tatt - Egg Supplier in Malaysia',
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
        sizes: '16x16',
      },
    ],
    shortcut: [
      { url: '/favicon.ico' }
    ],
    apple: [
      {
        url: '/favicon.ico',
        sizes: '180x180',
      }
    ],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();

  // Common suffix for all page titles
  const titleSuffix = ' | Sin Tatt - Egg Supplier in Malaysia';

  // Determine the page title based on the current route
  const pageTitle = (() => {
    switch (router.pathname) {
      case '/':
        return 'Home' + titleSuffix;
      case '/about-us':
        return 'About Us' + titleSuffix;
      case '/products':
        return 'Products' + titleSuffix;
      case '/gallery':
        return 'Gallery' + titleSuffix;
      case '/contact-us':
        return 'Contact Us' + titleSuffix;
      default:
        return 'Sin Tatt - Egg Supplier in Malaysia';
    }
  })();

  // Set dynamic metadata
  const dynamicMetadata: Metadata = {
    title: pageTitle,
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
          sizes: '16x16',
        },
      ],
      shortcut: [
        { url: '/favicon.ico' }
      ],
      apple: [
        {
          url: '/favicon.ico',
          sizes: '180x180',
        }
      ],
    },
  };

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
