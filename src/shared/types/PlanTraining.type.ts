import { Plan } from './Plan.type';
import { Training } from './Training.type';

export interface PlanTraining {
  uid: string;
  createdAt: Date;
  updatedAt: Date;
  trainingPlanUid: string;
  trainingUid: string;
  // TODO@Everyone: Check what is this order?
  // order?: number;
  training: Training;
  plan?: Plan; // Is this a parent?
}
