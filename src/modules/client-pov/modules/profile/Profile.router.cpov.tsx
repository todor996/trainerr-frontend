import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

export const profileRouter: RouteObject = {
  path: 'profile',
  children: [
    {
      path: '',
      Component: lazy(() => import('./Profile.page.cpov')),
    },
  ],
};
