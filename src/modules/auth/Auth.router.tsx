import { lazy } from 'react';
import { Navigate, RouteObject } from 'react-router-dom';

export const authRouter: RouteObject = {
  children: [
    {
      path: 'sing-up',
      Component: lazy(() => import('./SignUp.page')),
      children: [],
    },
    {
      path: 'log-in',
      Component: lazy(() => import('./LogIn.page')),
      children: [],
    },
    {
      path: 'reset-password',
      Component: lazy(() => import('./ResetPassword.page')),
      children: [],
    },
    {
      path: '',
      element: <Navigate to="login" />,
    },
    {
      path: '*',
      element: <Navigate to="login" />,
    },
  ],
};
