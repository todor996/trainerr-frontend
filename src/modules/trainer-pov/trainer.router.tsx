import { Navigate, RouteObject } from 'react-router-dom';
import { trainingRouter } from './modules/training/training.router.tpov';
import { clientsRouter } from './modules/clients/clients.router.tpov';
import { onboardingRouter } from './modules/onboarding/onboarding.router.tpov';

export const trainerRouter: RouteObject = {
  path: 'trainer/*',
  children: [
    trainingRouter,
    clientsRouter,
    onboardingRouter,
    {
      path: '*',
      element: <Navigate to="training" />,
    },
  ],
};
