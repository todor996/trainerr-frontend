import { ClientProfile } from './ClientProfile.type';
import { WorkoutGroup } from './WorkoutGroup.type';

export interface WorkoutGroupRest {
  uid: string;
  restBeforeNext: number;
  clientUid?: string;
  client?: ClientProfile;
  workoutGroupUid: string;
  workoutGroup: WorkoutGroup;
  createdAt: Date;
  updatedAt: Date;
}
