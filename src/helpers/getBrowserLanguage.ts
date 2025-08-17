import { ELocalization } from '@/enums/localization.enum';

export const getBrowserLanguage = (): ELocalization => {
  const { language } = navigator;
  if (language === ELocalization.UKRAINIAN) {
    return language;
  }

  return ELocalization.ENGLISH;
};
