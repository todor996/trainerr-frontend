import { Navigate, createBrowserRouter } from 'react-router-dom';
import { authRouter } from '@modules/auth/Auth.router';
import { trainerRouter } from '@modules/trainer-pov/trainer.router.tsx';
import { clientRouter } from '@modules/client-pov/client.router';
import { env } from '@shared/consts/env.consts';
import { WrappedOutlet } from '@core/components/WrappedOutlet.component';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <WrappedOutlet />,
      children: [
        authRouter,
        trainerRouter,
        clientRouter,
        {
          path: '',
          element: <Navigate to="auth/login" />,
        },
        {
          path: '*',
          element: <Navigate to="auth/login" />,
        },
      ],
    },
  ],
  {
    basename: env.DEV ? '/' : '/trainerr-frontend/',
  },
);
