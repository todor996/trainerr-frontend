import { ClientProfile } from './ClientProfile.type';
import { Workout } from './Workout.type';

export interface WorkoutRest {
  uid: string;
  restBeforeNext: number;
  clientUid?: string;
  client?: ClientProfile;
  workoutUid: string;
  workout: Workout;
  createdAt: Date;
  updatedAt: Date;
}
