import { ExerciseUnit } from '@shared/enums/ExerciseUnit.enum';

export interface Unit {
  uid: string;
  name: ExerciseUnit;
  createdAt: Date;
  updatedAt: Date;
  exerciseUnits?: ExerciseUnit[];
}
