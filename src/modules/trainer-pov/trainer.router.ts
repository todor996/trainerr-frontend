import { RouteObject } from 'react-router-dom';
import { trainingRouter } from './modules/training/training.router.tpov';
import { clientsRouter } from './modules/clients/clients.router.tpov';

export const trainerRouter: RouteObject = {
  path: 'trainer',
  children: [trainingRouter, clientsRouter],
};
