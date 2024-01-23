import { lazy } from 'react';
import { Navigate, RouteObject } from 'react-router-dom';

export const trainingRouter: RouteObject = {
  path: 'training',
  children: [
    {
      path: 'plans',
      Component: lazy(() => import('./pages/Plans.cpov.page')),
      children: [],
    },
    {
      path: 'exercises',
      Component: lazy(() => import('./pages/Exercises.cpov.page')),
      children: [],
    },
    {
      path: '',
      element: <Navigate to="plans" />,
    },
    {
      path: '*',
      element: <Navigate to="plans" />,
    },
  ],
};
