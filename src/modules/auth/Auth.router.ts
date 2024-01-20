import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';
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
  ],
};

export default authRouter;
