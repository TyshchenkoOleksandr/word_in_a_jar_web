import type { EThemeMode } from '@/enums/themeMode.enum';

export interface IThemeContextProviderContext {
  themeMode: EThemeMode;
  toggleThemeMode: () => void;
}
