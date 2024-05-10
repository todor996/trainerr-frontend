import { WorkoutGroupExercise } from './WorkoutGroupExercise.type';
import { WorkoutGroupRest } from './WorkoutGroupRest.type';
import { Workout } from './Workout.type';

export interface WorkoutGroup {
  uid: string;
  order: number;
  workoutGroupRests?: WorkoutGroupRest[];
  workoutUid: string;
  workout: Workout;
  workoutGroupExercises?: WorkoutGroupExercise[];
  createdAt: Date;
  updatedAt: Date;
}
