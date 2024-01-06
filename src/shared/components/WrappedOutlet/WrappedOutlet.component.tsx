import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loading } from '../Loading/Loading.component';

export function WrappedOutlet() {
  return (
    <Suspense fallback={<Loading />}>
      <Outlet />
    </Suspense>
  );
}
