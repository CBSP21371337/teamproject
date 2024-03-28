import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { Locale, i18n } from '@/i18n.config'
import Navbar from "../components/navbar"

const inter = Lato({ subsets: ["latin"], weight: ['100', '300', '400', '700', '900']  });

export const metadata: Metadata = {
  title: 'black people',
  description: "Generated by create next app",
};

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }))
}

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale },
}>) {
  return (
    <html lang={params.lang}>
      <body className={inter.className}>

      <Navbar />

      {children}

      </body>
    </html>
  );
}