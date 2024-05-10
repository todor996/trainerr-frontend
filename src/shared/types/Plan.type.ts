import { ClientPlan } from './ClientPlan.type';
import { PlanTraining } from './PlanTraining.type';
import { TrainerProfile } from './TrainerProfile.type';

export interface Plan {
  uid: string;
  trainerProfileUid: string;
  clientPlans: ClientPlan[];
  name: string;
  description?: string | null;
  trainer: TrainerProfile;
  planTraining?: PlanTraining[];
  createdAt: Date;
  updatedAt: Date;
}
