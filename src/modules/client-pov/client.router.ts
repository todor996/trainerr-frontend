import { RouteObject } from 'react-router-dom';
import { trainingRouter } from './modules/training/training.router.cpov';
import { profileRouter } from './modules/profile/profile.router.cpov';

export const clientRouter: RouteObject = {
  path: 'client',
  children: [trainingRouter, profileRouter],
};
