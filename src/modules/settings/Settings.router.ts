import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const settingsRouter: RouteObject = {
  path: 'settings',
  Component: lazy(() => import('./Settings.page')),
  children: [],
};

export default settingsRouter;
