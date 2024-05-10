import { ExerciseMuscle } from './ExerciseMuscle.type';

export interface Muscle {
  uid: string;
  name: string;
  description?: string;
  muscles?: ExerciseMuscle[];
  createdAt: Date;
  updatedAt: Date;
}
