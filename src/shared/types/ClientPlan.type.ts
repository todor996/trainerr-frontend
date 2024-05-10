import { Plan } from './Plan.type';
import { TrainerClient } from './TrainerClient.type';

export interface ClientPlan {
  uid: string;
  trainerClientUid: string;
  trainerClient: TrainerClient;
  planUid: string;
  plan: Plan;
  createdAt: Date;
  updatedAt: Date;
}
