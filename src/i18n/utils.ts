import es from './locals/es.json';
import en from './locals/en.json';

export const languages = {
  en: 'English',
  es: 'Español',
};

export const defaultLang = 'en';

const ui = {
  en,
  es,
} as const;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: string) {
    // Permite acceder a objetos anidados como 'hero.title'
    const keys = key.split('.');
    let result: any = ui[lang];
    
    for (const k of keys) {
      result = result?.[k];
    }
    
    return result || key;
  }
}