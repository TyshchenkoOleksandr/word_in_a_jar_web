import { CssBaseline, ThemeProvider } from '@mui/material';
import { useCallback, useMemo, useState, type FC, type PropsWithChildren } from 'react';
import { createContext } from 'use-context-selector';

import { darkTheme } from '@/configs/themes/darkTheme';
import { lightTheme } from '@/configs/themes/lightTheme';
import { ELocaleStorageKeys } from '@/enums/localeStorageKeys.enum';
import { EThemeMode } from '@/enums/themeMode.enum';
import { getLocalStorageItem, setLocalStorageItem } from '@/helpers/localStorage';

import type { IThemeContextProviderContext } from './themeContextProvider.interface';

const systemThemeMode = window.matchMedia('(prefers-color-scheme: dark)').matches
  ? EThemeMode.DARK
  : EThemeMode.LIGHT;
const initialThemeMode = getLocalStorageItem<EThemeMode>(ELocaleStorageKeys.THEME_MODE) || systemThemeMode;

export const ThemeContextProviderContext = createContext<IThemeContextProviderContext | undefined>(undefined);

export const ThemeContextProvider: FC<PropsWithChildren> = (props) => {
  const {
    children,
  } = props;
  const [themeMode, setThemeMode] = useState<EThemeMode>(initialThemeMode);

  const toggleThemeMode = useCallback((): void => {
    setThemeMode((prevState) => {
      if (prevState === EThemeMode.LIGHT) {
        setLocalStorageItem(ELocaleStorageKeys.THEME_MODE, EThemeMode.DARK);
        return EThemeMode.DARK;
      }
      setLocalStorageItem(ELocaleStorageKeys.THEME_MODE, EThemeMode.LIGHT);
      return EThemeMode.LIGHT;
    });
  }, []);

  const value = useMemo(() => {
    return {
      themeMode,
      toggleThemeMode,
    };
  }, [
    themeMode,
    toggleThemeMode,
  ]);

  return (
    <ThemeContextProviderContext.Provider value={value}>
      <ThemeProvider theme={themeMode === EThemeMode.LIGHT ? lightTheme : darkTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContextProviderContext.Provider>
  );
};
