import { lazy } from 'react';
import { Navigate, RouteObject } from 'react-router-dom';

export const trainingRouter: RouteObject = {
  path: 'training',
  Component: lazy(() => import('./Training.page.tpov')),
  children: [
    {
      path: '',
      element: <Navigate to="plans" />,
    },
    {
      path: 'plans',
      Component: lazy(() => import('./components/Plans.components.tpov')),
    },
    {
      path: 'exercises',
      Component: lazy(() => import('./components/Exercises.component.tpov')),
    },
    {
      path: '*',
      element: <Navigate to="plans" />,
    },
  ],
};
