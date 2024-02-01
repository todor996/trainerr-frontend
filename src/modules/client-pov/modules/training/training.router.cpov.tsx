import { lazy } from 'react';
import { Navigate, RouteObject } from 'react-router-dom';

export const trainingRouter: RouteObject = {
  path: 'training',
  children: [
    {
      path: '',
      element: <Navigate to="plans" />,
    },
    {
      path: 'plans',
      Component: lazy(() => import('./pages/TrainingPlans.page.cpov')),
      children: [],
    },
    {
      path: 'exercises',
      Component: lazy(() => import('./pages/TrainingExercises.page.cpov')),
      children: [],
    },
    {
      path: '*',
      element: <Navigate to="plans" />,
    },
  ],
};
