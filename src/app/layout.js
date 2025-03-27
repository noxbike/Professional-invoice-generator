import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";

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
  description: "Générez des factures en quelques clics avec notre outil en ligne. Simple, rapide et efficace.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className=" flex justify-between items-center p-4">
          <div>
            <Link href="/">
              <Image src="/logoipsum.svg" alt="logo" width={50} height={50} />
            </Link>
          </div>
          <div>
            <Link className="bg-blue-500 text-white px-4 py-2 rounded-md" href="/new_invoice">Créer votre facture</Link>
          </div>
        </nav>
        {children}
        <footer className="flex justify-center items-center p-4 bottom-0 w-full">
          <p className="font-bold">© all rights reserved 2025 | <Link href="mickadev.com">mickadev.com</Link></p>
        </footer>
      </body>
    </html>
  );
}
