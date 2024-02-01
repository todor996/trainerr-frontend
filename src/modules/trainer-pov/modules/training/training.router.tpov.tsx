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
      Component: lazy(() => import('./pages/TrainingPlans.page.tpov')),
    },
    {
      path: 'exercises',
      Component: lazy(() => import('./pages/TrainingExercises.page.tpov')),
    },
    {
      path: '*',
      element: <Navigate to="plans" />,
    },
  ],
};
