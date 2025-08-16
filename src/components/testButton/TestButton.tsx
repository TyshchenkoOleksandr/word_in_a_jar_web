import { Button } from '@mui/material';
import { type FC } from 'react';
import { useContextSelector } from 'use-context-selector';

import { ThemeContextProviderContext } from '@/providers/themeContextProvider/ThemeContextProvider';

const TestButton: FC = () => {
  const themeMode = useContextSelector(ThemeContextProviderContext, (state) => state!.themeMode);
  const toggleThemeMode = useContextSelector(ThemeContextProviderContext, (state) => state!.toggleThemeMode);

  return (
    <Button
      onClick={toggleThemeMode}
    >
      {themeMode}
    </Button>
  );
};

export default TestButton;
