import React from 'react';
import { Space_Mono, Inter } from "next/font/google";
import "./globals.css";
import ClientWrapper from "./components/ClientWrapper";
import { Metadata } from 'next';

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: 'Jagruti Patil | Portfolio',
  description: 'Fullstack Architect Portfolio',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceMono.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="cursor-default font-mono bg-[#000000] text-cyan-400 antialiased selection:bg-cyan-500 selection:text-black overflow-x-hidden">
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}
