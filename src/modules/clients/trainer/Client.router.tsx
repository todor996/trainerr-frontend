import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

export const clientRouter: RouteObject = {
  path: 'trainer/clients',
  children: [
    {
      path: '',
      Component: lazy(() => import('./pages/Clients.page')),
      children: [],
    },
  ],
};
