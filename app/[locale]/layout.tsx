import '../globals.css'
import type { Metadata } from 'next'
import Navbar from '../../components/Navbar/Navbar'
import { ReactNode } from 'react'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'

type Props = {
  children: ReactNode
  params: { locale: string }
}


export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

//function to get the translations
async function getMessages(locale: string) {
  try {
    return (await import(`../../messages/${locale}.json`)).default
  } catch (error) {
    notFound()
  }
}

//function to generate the routes for all the locales
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
      <body className='bg-gray-100'>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar locale={''} />
          <div className='p-5'>
            {children}
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
