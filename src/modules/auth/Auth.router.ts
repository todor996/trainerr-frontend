import * as React from 'react';

const authRouter = {
  path: '/',
  component: React.lazy(() => import('./Auth.page')),
  children: [],
};

export default authRouter;
