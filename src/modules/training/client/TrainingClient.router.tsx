import { lazy } from 'react';
import { Navigate, RouteObject } from 'react-router-dom';

export const trainingClientRouter: RouteObject = {
  path: 'training/client',
  children: [
    {
      path: 'plans',
      Component: lazy(() => import('./pages/PlansClient.page')),
      children: [],
    },
    {
      path: 'exercises',
      Component: lazy(() => import('./pages/ExercisesClient.page')),
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
