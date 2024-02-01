import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

export const settingsRouter: RouteObject = {
  path: 'settings',
  Component: lazy(() => import('./Settings.page')),
  children: [],
};
