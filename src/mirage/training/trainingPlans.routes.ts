import { TrrServer } from '../types/TrrServer.type';
import { TrrRequest } from '../types/TrrRequest.type';
import { TrrRouteHandler } from '../types/TrrRouteHandler.type';

export const trainingPlansRoutes = {
  get(server: TrrServer): TrrRouteHandler {
    return () => {
      return server.db.trainingPlans;
    };
  },

  getById(server: TrrServer): TrrRouteHandler {
    return (_, request: TrrRequest) => {
      const { id } = request.params;

      return server.db.trainingPlans.find(id);
    };
  },

  post(server: TrrServer): TrrRouteHandler {
    return (_, request: TrrRequest) => {
      const attrs = JSON.parse(request.requestBody);

      return server.db.trainingPlans.insert(attrs);
    };
  },

  put(server: TrrServer): TrrRouteHandler {
    return (_, request: TrrRequest) => {
      const id = request.params.id;
      const attrs = JSON.parse(request.requestBody);

      return server.db.trainingPlans.update(id, attrs);
    };
  },

  delete(server: TrrServer): TrrRouteHandler {
    return (_, request: TrrRequest) => {
      const id = request.params.id;

      return server.db.trainingPlans.remove(id);
    };
  },
};
