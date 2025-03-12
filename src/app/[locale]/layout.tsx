import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { type Locale } from "@/config";

const inter = Inter({ subsets: ["latin"], display: "swap" });


export const metadata: Metadata = {
  title: "Oursi.net",
  description: "Personal website of Benoit Vannesson",
};

export default async function RootLayout(props: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}>) {
  const { locale } = await props.params;
  const { children } = props;
  return (
    <html lang={locale}>
      <body
        className={`${inter.className} antialiased h-screen`}
      >
        <div className="flex flex-col overflow-x-clip h-full">
          <Navbar locale={locale} />
          <main className="flex flex-grow flex-col">
            {children}
          </main>
          <Footer locale={locale} />
        </div>
      </body>
    </html>
  );
}
