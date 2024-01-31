import { Navigate, createBrowserRouter } from 'react-router-dom';
import { homeRouter } from './modules/home/Home.router';
import { settingsRouter } from './modules/settings/Settings.router';
import { WrappedOutlet } from '@shared/components/WrappedOutlet.component';
import { authRouter } from '@modules/auth/auth.router';
import { clientsRouter } from '@modules/trainer-pov/modules/clients/clients.router.tpov';
import { trainerRouter } from '@modules/trainer-pov/trainer.router';

const env = import.meta.env;

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <WrappedOutlet />,
      children: [
        authRouter,
        trainerRouter,
        clientsRouter,
        // TODO: delete this when modules are removed
        homeRouter,
        settingsRouter,
        {
          path: '*',
          element: <Navigate to="login" />,
        },
      ],
    },
  ],
  {
    basename: env.DEV ? '/' : '/trainerr-frontend/',
  },
);
