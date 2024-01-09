import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const authRouter: RouteObject = {
  path: 'auth',
  Component: lazy(() => import('./Auth.page')),
  children: [],
};

export default authRouter;
