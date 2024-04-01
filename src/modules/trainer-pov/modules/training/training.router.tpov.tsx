import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

export const trainingRouter: RouteObject = {
  path: 'training/*',
  Component: lazy(() => import('./Training.page.tpov')),
};
