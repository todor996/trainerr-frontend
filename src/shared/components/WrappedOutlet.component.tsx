import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { LoadingPage } from './LoadingPage.component';

export function WrappedOutlet() {
  return (
    <Suspense fallback={<LoadingPage />}>
      <Outlet />
    </Suspense>
  );
}
