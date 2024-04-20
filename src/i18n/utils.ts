import type { Translation } from '../locales/en/translation';
import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

// export function useTranslations(lang: keyof typeof ui) {
//   return function t(key: keyof typeof ui[typeof defaultLang]) {
//     return ui[lang] || ui[defaultLang];
//   }
// }

export function getTranslations(lang: keyof typeof ui): Translation {
  return ui[lang] || ui[defaultLang];
}