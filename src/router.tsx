import { Outlet, createBrowserRouter } from 'react-router-dom';
import homeRouter from './modules/home/Home.router';
import settingsRouter from './modules/settings/Settings.router';
import authRouter from '@modules/auth/Auth.router';
import Auth from '@modules/auth/Auth.page';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Outlet />,
      children: [homeRouter, settingsRouter, authRouter],
    },
    {
      path: '/login',
      element: <Auth />,
    },
  ],
  {
    basename: import.meta.env.DEV ? '/' : '/trainerr-frontend/',
  },
);

export default router;
