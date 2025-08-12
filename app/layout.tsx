import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";
import Link from "next/link";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
import Navbar from "./components/Navbar";
   export const metadata = {
  title: 'Zemenay Tech',
  description: 'Official website of Zemenay Tech',
  icons:{
    icon: '/favicon.ico',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className="bg-gray-50 text-gray-900">
        <Navbar />
       
        <main>{children}</main>
        
        <footer className="p-4 bg-gray-900 text-white text-center fixed bottom-0 width-full">
          © {new Date().getFullYear()} Zemenay Tech. All rights reserved.
        </footer>
      </body>
    </html>
  );
}