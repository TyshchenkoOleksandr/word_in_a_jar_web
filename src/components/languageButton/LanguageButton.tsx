import { Button } from '@mui/material';
import { type FC } from 'react';

import i18n from '@/configs/translation/i18n.config';
import { ELocalization } from '@/enums/localization.enum';
// TODO dropdown
const LanguageButton: FC = () => {
  const {
    language,
    changeLanguage,
  } = i18n;

  const changeLanguageHandler = (): void => {
    if (language === ELocalization.UKRAINIAN) {
      changeLanguage(ELocalization.ENGLISH);
      return;
    }
    changeLanguage(ELocalization.UKRAINIAN);
  };

  return (
    <Button
      color="inherit"
      onClick={changeLanguageHandler}
    >
      {language}
    </Button>
  );
};

export default LanguageButton;
