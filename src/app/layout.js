import SessionProviderWrapper from './sessionProviderWrapper'
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import InvoiceGen from "@/components/invoicegen";
import Navbar from '@/components/ui/navbar';
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Générez des factures en quelques clics",
  description:
    "Générez des factures en quelques clics avec notre outil en ligne. Simple, rapide et efficace.",
};

export default function RootLayout({ children }) {
  
  return (
    <SessionProviderWrapper>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-white dark:bg-slate-950`}
        >
            <Navbar/>
            {children}
            <footer className="text-black bottom-0 text-center p-2 w-full">
              <p>
                © all rights reserved 2025 |{" "}
                <Link href="https://mickadev.com">mickadev.com</Link>
              </p>
            </footer>
        </body>
      </html>
    </SessionProviderWrapper>
  );
}
