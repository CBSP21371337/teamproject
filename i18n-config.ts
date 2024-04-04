export const i18n = {
    locales: ["pl", "en", "de"],
    defaultLocale: "pl",
  };
  
  export type I18nConfig = typeof i18n;
  export type Locale = I18nConfig["locales"][number];