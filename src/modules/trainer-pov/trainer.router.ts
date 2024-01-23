import { RouteObject } from 'react-router-dom';
import { trainingRouter } from './training/training.router.tpov';
import { clientsRouter } from './clients/clients.router.tpov';

export const trainerRouter: RouteObject = {
  path: 'trainer',
  children: [trainingRouter, clientsRouter],
};
