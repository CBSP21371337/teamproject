import '../globals.css'
import type { Metadata } from 'next'
import Navbar from '../../components/Navbar/Navbar'
import ThemeController from '../../components/ThemeController/Theme'
import Footer from '../../components/Footer/Footer'
import { ReactNode } from 'react'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'

type Props = {
  children: ReactNode
  params: { locale: string }
}


export const metadata: Metadata = {
  title: 'Ośrodek Wczasowy KALA',
  description: 'Strona Ośrodka Wczasowego KALA',
}

async function getMessages(locale: string) {
  try {
    return (await import(`../../messages/${locale}.json`)).default
  } catch (error) {
    notFound()
  }
}

export async function generateStaticParams() {
  return ['pl', 'en', 'de'].map((locale) => ({ locale }))
}



export default async function RootLayout({
  children,
  params: { locale },
}: Props) {
  const messages = await getMessages(locale)

  return (
    <html lang={locale} data-theme='dark'>
      <body className='bg-sky-950'>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar locale={''}/>
          <div className='bg-white dark:bg-sky-950'>
            {children}
          </div>
          <ThemeController />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
