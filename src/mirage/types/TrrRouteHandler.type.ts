import { Registry } from 'miragejs';
import { AnyModels, AnyFactories } from 'miragejs/-types';
import { RouteHandler } from 'miragejs/server';

export interface TrrRouteHandler
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  extends RouteHandler<Registry<AnyModels, AnyFactories>, any> {}
