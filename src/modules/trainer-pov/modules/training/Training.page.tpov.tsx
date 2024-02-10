import { lazy } from 'react';
import { Header } from '@modules/trainer-pov/components/Header.component.tpov';
import { Sidenav } from '@shared/components/Sidenav.component';
import { useLazyLoadResourceHook } from '@shared/hooks/lazyLoadResource.hook';
import { Navigate, Route, Routes } from 'react-router-dom';

const TrainingPlansPage = lazy(() => import('./pages/TrainingPlans.page.tpov'));
const TrainingExercisesPage = lazy(() => import('./pages/TrainingExercises.page.tpov'));
const TrainingPlanFormPage = lazy(() => import('./pages/TrainingPlansForm.page.tpov'));

export default function TrainingPage(): JSX.Element {
  useLazyLoadResourceHook({
    folderName: 'trainer-pov/modules/training',
    namespace: 'training',
    pov: 'tpov',
  });

  return (
    <div className="flex">
      <Sidenav />
      <main className="flex w-full flex-col">
        <Header />

        <Routes>
          <Route path="plans/*" element={<TrainingPlansPage />} />
          <Route path="plans/:planId?/form" element={<TrainingPlanFormPage />} />
          <Route path="exercises/*" element={<TrainingExercisesPage />} />
          <Route path="*" element={<Navigate to="plans" />} />
        </Routes>
      </main>
    </div>
  );
}
