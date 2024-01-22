import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

export const clientsRouter: RouteObject = {
  path: 'clients',
  children: [
    {
      path: '',
      Component: lazy(() => import('./pages/Clients.page')),
      children: [],
    },
  ],
};
