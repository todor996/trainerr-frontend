import { ExerciseMedia } from './ExerciseMedia.type';
import { ExerciseMuscle } from './ExerciseMuscle.type';
import { ExerciseUnit } from './ExerciseUnit.type';
import { TrainerProfile } from './TrainerProfile.type';

export interface Exercise {
  uid: string;
  trainerProfileUid?: string;
  trainer: TrainerProfile;
  name: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
  units?: ExerciseUnit[];
  muscles?: ExerciseMuscle[];
  media?: ExerciseMedia[];
}
