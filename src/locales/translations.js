// locales/trnaslations.js
const translations = {
    en: () => import('@/locales/en.json').then((module) => module.default),
    es: () => import('@/locales/es.json').then((module) => module.default),
};

export const getTranslations = async (locale) => {
    return translations[locale] ? translations[locale]() : translations['en']();
};