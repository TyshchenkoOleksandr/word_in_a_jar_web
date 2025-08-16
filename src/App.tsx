import { type FC } from 'react';

import { ThemeContextProvider } from './providers/themeContextProvider/ThemeContextProvider';
import TestButton from './components/testButton/TestButton';

const App: FC = () => {
  return (
    <ThemeContextProvider>
      <TestButton />
    </ThemeContextProvider>
  );
};

export default App;
