import 'server-only'
import type { Locale } from '@/i18n.config'

const dictionaries = {
  pl: () => import('../../langs/pl.json').then(module => module.default),
  en: () => import('../../langs/en.json').then(module => module.default),
  de: () => import('../../langs/de.json').then(module => module.default)
}

export const getDictionary = async (locale: Locale) => dictionaries[locale]()