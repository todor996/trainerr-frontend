import { Exercise } from './Exercise.type';
import { Unit as Unit } from './Unit.type';
import { WorkoutExerciseValue as WorkoutExerciseValue } from './WorkoutExerciseValue.type';

export interface ExerciseUnit {
  uid: string;
  exerciseUid: string;
  exercise: Exercise;
  unitUid: string;
  unit: Unit;
  workoutExerciseValues?: WorkoutExerciseValue[];
  createdAt: Date;
  updatedAt: Date;
}
