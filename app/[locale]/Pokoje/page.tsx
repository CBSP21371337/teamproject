'use client'
import { useTranslations } from 'next-intl'

export default function Rooms() {

    const t = useTranslations('Rooms')

    return (
        <div>
            {t('aboutText')}
        </div>
    )
}