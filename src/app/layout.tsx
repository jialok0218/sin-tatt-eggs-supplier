import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { Header } from '@/sections/Header';
import { Footer } from '@/sections/Footer';
import { BackToTop } from '@/components/BackToTop';

const dmSans = DM_Sans({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Sin Tatt Eggs Supplier",
  description: "Supplying premium farm-fresh eggs with a commitment to quality and sustainability.",
  icons: {
    icon: [
      {
        url: '/sin-tatt-logo.ico',
      }
    ],
    apple: {
      url: '/sin-tatt-logo.ico',
    },
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
      </body>
    </html>
  );
}
