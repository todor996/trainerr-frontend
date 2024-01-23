import { RouteObject } from 'react-router-dom';
import { trainingRouter } from './training/training.cpov.router';

export const clientRouter: RouteObject = {
  path: 'client',
  children: [trainingRouter],
};
