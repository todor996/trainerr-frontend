import { lazy } from 'react';
import { Header } from '@modules/trainer-pov/components/Header.component.tpov';
import { TrrSidenav } from '@shared/components/TrrSidenav.component';
import { useLazyLoadResourceHook } from '@shared/hooks/lazyLoadResource.hook';
import { Navigate, Route, Routes } from 'react-router-dom';
import TrainingFormPage from './pages/TrainingForm.page.tpov';
import { Main } from 'tamagui';

const PlansPage = lazy(() => import('./pages/Plans.page.tpov'));
const ExercisesPage = lazy(() => import('./pages/Exercises.page.tpov'));
const PlanFormPage = lazy(() => import('./pages/PlanForm.page.tpov'));

export default function TrainingPage(): JSX.Element {
  useLazyLoadResourceHook({
    folderName: 'trainer-pov/modules/training',
    namespace: 'training',
    pov: 'tpov',
  });

  return (
    <div className="flex">
      <TrrSidenav />
      <Main display="flex" flexDirection="column" flexShrink={1} width="100%">
        <Header />

        <Routes>
          <Route path="plans/*" element={<PlansPage />} />
          <Route path="plans/:planId?/form" element={<PlanFormPage />} />
          <Route path="training/:planId?/form" element={<TrainingFormPage />} />
          <Route path="exercises/*" element={<ExercisesPage />} />
          <Route path="*" element={<Navigate to="plans" />} />
        </Routes>
      </Main>
    </div>
  );
}
