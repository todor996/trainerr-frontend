import { Measurement } from './Measurement.type';
import { ClientPlan } from './ClientPlan.type';
import { ClientProfile } from './ClientProfile.type';
import { TrainerProfile } from './TrainerProfile.type';

export interface TrainerClient {
  uid: string;
  trainerProfileUid: string;
  clientProfileUid: string;
  trainerProfile: TrainerProfile;
  clientProfile: ClientProfile;
  clientPlans: ClientPlan[];
  progressMeasurements: Measurement[];
  createdAt: Date;
  updatedAt: Date;
}
