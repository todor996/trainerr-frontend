import { Server, Registry } from 'miragejs';
import { AnyModels, AnyFactories } from 'miragejs/-types';

export interface TrrServer extends Server<Registry<AnyModels, AnyFactories>> {}
