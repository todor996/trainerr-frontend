import { createServer } from 'miragejs';
import { trainingPlansMock } from './training/trainingPlans.mock';
import { trainingPlansRoutes } from './training/trainingPlans.routes';
import { API_BASE_URL } from '@api/index.api';

const baseUrl = API_BASE_URL;

export const createMockServer = () => {
  console.log(`Mock server running...`);

  createServer({
    seeds(server) {
      server.db.loadData({
        trainingPlans: trainingPlansMock,
      });
    },

    routes() {
      this.urlPrefix = baseUrl;

      //#region Training Plans

      this.get('training/plans', trainingPlansRoutes.get(this));
      this.get('training/plans/:id', trainingPlansRoutes.getById(this));
      this.post('training/plans', trainingPlansRoutes.post(this));
      this.put('training/plans/:id', trainingPlansRoutes.put(this));
      this.delete('training/plans/:id', trainingPlansRoutes.delete(this));

      //#endregion Training Plans

      this.passthrough();
    },
  });
};
