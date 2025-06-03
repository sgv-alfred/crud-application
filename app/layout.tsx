import type { Metadata } from "next";
import "./globals.css";
import Navbar from '../components/navbar'

/** 
import { Geist, Geist_Mono } from "next/font/google";
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
  title: 'Product Inventory',
  description: 'Sample CRUD Application',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen">
        <Navbar />
        <main className="p-6">{children}</main>
      </body>
    </html>
  )
}
