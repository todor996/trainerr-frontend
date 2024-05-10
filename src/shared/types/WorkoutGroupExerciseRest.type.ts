import { ClientProfile } from './ClientProfile.type';
import { WorkoutGroupExercise } from './WorkoutGroupExercise.type';

export interface WorkoutGroupExerciseRest {
  uid: string;
  restBeforeNext: number;
  clientUid?: string;
  client?: ClientProfile;
  workoutGroupExerciseUid: string;
  workoutGroupExercise: WorkoutGroupExercise;
  createdAt: Date;
  updatedAt: Date;
}
