import { Exercise } from './Exercise.type';
import { Muscle } from './Muscle.type';

export interface ExerciseMuscle {
  uid: string;
  exerciseUid: string;
  exercise: Exercise;
  muscleUid: string;
  muscle: Muscle;
  createdAt: Date;
  updatedAt: Date;
}
