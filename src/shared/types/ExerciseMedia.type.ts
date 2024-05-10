import { ExerciseMediaType } from '@shared/enums/ExerciseMediaType.enum';
import { Exercise } from './Exercise.type';

export interface ExerciseMedia {
  uid: string;
  type: ExerciseMediaType;
  link: string;
  createdAt: Date;
  updatedAt: Date;
  exerciseUid: string;
  exercise: Exercise;
}
