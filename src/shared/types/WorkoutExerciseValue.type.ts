import { ClientProfile } from './ClientProfile.type';
import { ExerciseUnit } from './ExerciseUnit.type';
import { WorkoutGroupExercise } from './WorkoutGroupExercise.type';

/**
 * Represents a model for a workout exercise value.
 */
export interface WorkoutExerciseValue {
  uid: string;
  value: number;
  exerciseUnitUid: string;
  exerciseUnit: ExerciseUnit;
  workoutGroupExerciseUid: string;
  workoutGroupExercise: WorkoutGroupExercise;
  clientUid?: string;
  client?: ClientProfile;
  createdAt: Date;
  updatedAt: Date;
}
