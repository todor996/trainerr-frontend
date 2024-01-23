import { lazy } from 'react';
import { Navigate, RouteObject } from 'react-router-dom';

export const authRouter: RouteObject = {
  children: [
    {
      path: '',
      element: <Navigate to="login" />,
    },
    {
      path: 'signup',
      Component: lazy(() => import('./SignUp.page')),
    },
    {
      path: 'login',
      Component: lazy(() => import('./LogIn.page')),
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
