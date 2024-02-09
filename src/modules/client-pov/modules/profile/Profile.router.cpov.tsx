import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

export const profileRouter: RouteObject = {
  path: 'profile',
  children: [
    {
      path: '',
      Component: lazy(() => import('./Profile.page.cpov')),
    },
    {
      path: 'edit-profile',
      Component: lazy(() => import('./EditProfil.page.cpov')),
    },
    {
      path: 'edit-measure',
      Component: lazy(() => import('./EditMeasures.page.cpov')),
    },
  ],
};
