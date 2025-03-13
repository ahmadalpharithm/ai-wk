import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ModalProvider from "@/components/modals/providers";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI-WK",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div>

          <ModalProvider>
          <main className="flex flex-col min-h-screen">{children}</main>
          </ModalProvider>
        
        </div>
      </body>
    </html>
  );
}
