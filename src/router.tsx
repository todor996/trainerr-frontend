import { createBrowserRouter } from 'react-router-dom';
import homeRouter from './modules/home/Home.router';
import settingsRouter from './modules/settings/Settings.router';
import authRouter from '@modules/auth/Auth.router';
import { WrappedOutlet } from '@shared/components/WrappedOutlet/WrappedOutlet.component';

const env = import.meta.env;

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <WrappedOutlet />,
      children: [homeRouter, settingsRouter, authRouter],
    },
  ],
  {
    basename: env.DEV ? '/' : '/trainerr-frontend/',
  },
);
