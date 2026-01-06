import es from './locales/es.json';
import en from './locales/en.json';

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
  const baseUrl = import.meta.env.BASE_URL; // "/mycn18-ui-landing/"
  
  // Paso 1: Obtener el path relativo eliminando el BASE_URL de forma estricta
  // Si la URL es /mycn18-ui-landing/es/, queremos que quede solo "es/"
  let relativePath = url.pathname;
  if (relativePath.startsWith(baseUrl)) {
    relativePath = relativePath.substring(baseUrl.length);
  }

  // Paso 2: Limpiar barras y sacar el primer segmento
  const segments = relativePath.split('/').filter(Boolean);
  const lang = segments[0];
  
  // Paso 3: Validar. Si el segmento es un idioma, lo devolvemos.
  if (lang in ui) return lang as keyof typeof ui;

  // IMPORTANTE: Si no encuentra idioma, NO debe intentar redirigir 
  // ni limpiar nada, solo devolver el idioma por defecto.
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: string) {
    const keys = key.split('.');
    let result: any = ui[lang];
    
    for (const k of keys) {
      result = result?.[k];
    }
    
    return result || key;
  }
}

export function getStaticPaths() {
  return [
    { params: { lang: 'en' } },
    { params: { lang: 'es' } },
  ];
}