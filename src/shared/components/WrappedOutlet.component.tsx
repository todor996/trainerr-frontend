import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { LoadingPage } from './LoadingPage.component';
import { RouterGuard } from './RouterGuard.component';

export function WrappedOutlet() {
  return (
    <Suspense fallback={<LoadingPage />}>
      <RouterGuard>
        <Outlet />
      </RouterGuard>
    </Suspense>
  );
}
