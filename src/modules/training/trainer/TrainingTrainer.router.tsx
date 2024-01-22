import { lazy } from 'react';
import { Navigate, RouteObject } from 'react-router-dom';

export const trainingTrainerRouter: RouteObject = {
  path: 'training',
  children: [
    {
      path: 'plans',
      Component: lazy(() => import('./pages/PlansTrainer.page')),
      children: [],
    },
    {
      path: 'exercises',
      Component: lazy(() => import('./pages/ExercisesTrainer.page')),
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
