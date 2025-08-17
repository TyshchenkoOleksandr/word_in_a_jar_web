import { type FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';

import { ThemeContextProvider } from '@/providers/themeContextProvider/ThemeContextProvider';
import { UserSettings } from '@/pages/userSettings/UserSettings';
import { Leaderboard } from '@/pages/leaderboard/Leaderboard';
import { Dashboard } from '@/pages/dashboard/Dashboard';
import { Layout } from '@/components/layout/Layout';
import i18n from '@/configs/translation/i18n.config';
import { Game } from '@/pages/game/Game';
import { routes } from '@/configs/routes';

const App: FC = () => {
  return (
    <ThemeContextProvider>
      <I18nextProvider i18n={i18n}>
        <Router>
          <Layout>
            <Routes>
              <Route
                path={routes.dashboard}
                element={<Dashboard />}
              />

              <Route
                path={routes.game}
                element={<Game />}
              />

              <Route
                path={routes.leaderboard}
                element={<Leaderboard />}
              />

              <Route
                path={routes.userSettings}
                element={<UserSettings />}
              />
            </Routes>
          </Layout>
        </Router>
      </I18nextProvider>
    </ThemeContextProvider>
  );
};

export default App;
