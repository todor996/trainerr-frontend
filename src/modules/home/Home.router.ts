import { lazy } from 'react';

const homeRouter = {
  path: '/',
  component: lazy(() => import('./Home.page')),
  children: [],
};

export default homeRouter;
