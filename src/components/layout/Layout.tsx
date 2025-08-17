import { type FC, type PropsWithChildren } from 'react';

import { AppHeader } from '../appHeader/AppHeader';

export const Layout: FC<PropsWithChildren> = (props) => {
  const {
    children,
  } = props;

  return (
    <>
      <AppHeader />

      {children}
    </>
  );
};
