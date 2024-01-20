import { lazy } from 'react';
import { Navigate, RouteObject } from 'react-router-dom';
const authRouter: RouteObject = {
  path: 'auth',
  children: [
    {
      path: 'signup',
      Component: lazy(() => import('./SignUp.page')),
      children: [],
    },
    {
      path: 'login',
      Component: lazy(() => import('./LogIn.page')),
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

export default authRouter;
