import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

type LayoutProps = {
  params: { locale: string };
  children: React.ReactNode;
};

const inter = Lato({ subsets: ["latin"], weight: ['100', '300', '400', '700', '900']  });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ params, children }: LayoutProps) {
  const { locale } = params;
  return (
    <html lang={locale}>
      <body>
        <Header />
        {children}
        <Footer locale={locale} />
      </body>
    </html>
  );
}