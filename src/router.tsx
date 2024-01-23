import { createBrowserRouter } from 'react-router-dom';
import { homeRouter } from './modules/home/Home.router';
import { settingsRouter } from './modules/settings/Settings.router';
import { authRouter } from '@modules/auth/Auth.router';
import { WrappedOutlet } from '@shared/components/WrappedOutlet.component';
import { clientsRouter } from '@modules/trainer-pov/clients/clients.router.tpov';
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
      ],
    },
  ],
  {
    basename: env.DEV ? '/' : '/trainerr-frontend/',
  },
);
