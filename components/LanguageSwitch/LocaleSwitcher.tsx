import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next-intl/client';
import { useState } from 'react';

export default function LocaleSwitcher() {
    const t = useTranslations('LocaleSwitcher');
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const onLocaleChange = (newLocale: string) => {
        router.replace(pathname, { locale: newLocale });
        setMenuOpen(false);
    };

    return (
        <div className="relative inline-block text-left">
            <div>
                <span className="rounded-md shadow-sm">
                    <button
                        type="button"
                        onClick={toggleMenu}
                        className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                        id="options-menu"
                        aria-haspopup="true"
                        aria-expanded="true"
                    >
                        <img src={`/${locale}.png`} alt={`${locale} Flag`} className="w-10 h-10" />
                    </button>
                </span>
            </div>

            {isMenuOpen && (
                <div
                    className="origin-top-right absolute mt-2 w-46 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                >
                    <div className="py-1" role="none">
                        <button
                            onClick={() => onLocaleChange('pl')}
                            className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            role="menuitem"
                        >
                            <img src="/pl.png" alt="Polish Flag" className="mr-2 w-10 h-10" />
                        </button>
                        <button
                            onClick={() => onLocaleChange('en')}
                            className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            role="menuitem"
                        >
                            <img src="/en.png" alt="English Flag" className="mr-2 w-10 h-10" />
                        </button>
                        <button
                            onClick={() => onLocaleChange('de')}
                            className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            role="menuitem"
                        >
                            <img src="/de.png" alt="German Flag" className="mr-2 w-10 h-10" />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}