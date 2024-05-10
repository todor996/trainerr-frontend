import { WorkoutExerciseValue } from './WorkoutExerciseValue.type';
import { WorkoutGroupExerciseRest } from './WorkoutGroupExerciseRest.type';
import { WorkoutGroup } from './WorkoutGroup.type';

export interface WorkoutGroupExercise {
  uid: string;
  order: number;
  workoutGroupExerciseRests: WorkoutGroupExerciseRest[];
  workoutGroupUid: string;
  workoutGroup: WorkoutGroup;
  workoutExerciseValues: WorkoutExerciseValue[];
  createdAt: Date;
  updatedAt: Date;
}
