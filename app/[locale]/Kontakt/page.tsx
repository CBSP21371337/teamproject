'use client'
import { useTranslations } from 'next-intl'

export default function Contact() {

    const t = useTranslations('Contact')

    return (
        <div>
            {t('aboutText')}
        </div>
    )
}