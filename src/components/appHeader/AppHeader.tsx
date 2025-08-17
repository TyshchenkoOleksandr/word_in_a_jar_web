import { type FC } from 'react';
import { AppBar, Avatar, Button, IconButton, Toolbar } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { routes } from '@/configs/routes';

import LanguageButton from '../languageButton/LanguageButton';
import TestButton from '../testButton/TestButton';

export const AppHeader: FC = () => {
  const {
    t,
  } = useTranslation();

  return (
    <AppBar position="static">
      <Toolbar>
        <Button
          color="inherit"
          component={Link}
          to={routes.dashboard}
        >
          {t('dashboard')}
        </Button>

        <Button
          color="inherit"
          component={Link}
          to={routes.game}
        >
          {t('game')}
        </Button>

        <Button
          color="inherit"
          component={Link}
          to={routes.leaderboard}
        >
          {t('leaderboard')}
        </Button>

        <TestButton />

        <LanguageButton />

        <IconButton
          component={Link}
          to={routes.userSettings}
          sx={{
            p: 0,
            marginLeft: 'auto',
          }}
        >
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/2.jpg"
          />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
