import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { getBrowserLanguage } from '@/helpers/getBrowserLanguage';

import enUS from './lang/enUS.json';
import ukr from './lang/ukr.json';

const resources = {
  'en-US': { common: enUS },
  'uk-UA': { common: ukr },
};

i18n
  .use(initReactI18next)
  .init({
    returnNull: false,
    fallbackLng: 'en-US',
    resources,
    defaultNS: 'common',
    lng: getBrowserLanguage(),
    interpolation: {
      escapeValue: false,
    },
    debug: process.env.NODE_ENV !== 'production',
  });

i18n.services.formatter?.add('lowercase', (value) => {
  return value.toLowerCase();
});

export default i18n;
