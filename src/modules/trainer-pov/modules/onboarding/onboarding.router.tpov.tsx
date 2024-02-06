import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

// TODO: Refactor other 'root' page routes to use this pattern
export const onboardingRouter: RouteObject = {
  path: 'onboarding/*',
  Component: lazy(() => import('./Onboarding.page.tpov.tsx')),
};
