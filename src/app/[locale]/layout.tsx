import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../globals.css";
import Header from "@/components/Header";
import { useTranslations } from "next-intl";

type FontObject = {
  className: string;
};

const inter: FontObject = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ośrodek Wczasowy KALA",
  description:
    "Strona główna Ośrodka Wczasowego KALA",
};

interface RootLayoutProps {
  children: React.ReactNode;
  locale: never;
}

export default function RootLayout({ children, locale }: RootLayoutProps) {
  const t = useTranslations("Home");
  const navigationKeys = Object.keys(t.raw("navigation"));
  return (
    // data-theme='dark' można dać
    <html lang={locale}> 
      <body className={inter.className}>
      <Header />
      <nav className="sm:flex hidden items-center justify-center ">
        <ul className="absolute top-8 flex items-center space-x-5">
          {navigationKeys.map((key) => (
            <li key={key} className="animate pop delay-1">
              <a href={`#/${key}`}>{t(`navigation.${key}`)}</a>
            </li>
          ))}
        </ul>
      </nav>
        {children}
      
      </body>
    </html>
  );
}