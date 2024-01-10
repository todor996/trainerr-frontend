import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const homeRouter: RouteObject = {
  path: '',
  Component: lazy(() => import('./Home.page')),
  children: [],
};

export default homeRouter;
