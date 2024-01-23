import { lazy } from 'react';
import { Navigate, RouteObject } from 'react-router-dom';

export const homeRouter: RouteObject = {
  path: 'home',
  children: [
    {
      path: '',
      Component: lazy(() => import('./Home.page')),
    },
    {
      path: 'sub',
      Component: lazy(() => import('./pages/SubHome.page')),
      children: [],
    },
    {
      path: '*',
      element: <Navigate to="sub" />,
    },
  ],
};
