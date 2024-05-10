import { Training } from './Training.type';
import { WorkoutGroup } from './WorkoutGroup.type';
import { WorkoutRest } from './WorkoutRest.type';

export interface Workout {
  uid: string;
  order: number;
  workoutRests?: WorkoutRest[];
  trainingUid: string;
  training: Training;
  workoutGroups?: WorkoutGroup[];
  createdAt: Date;
  updatedAt: Date;
}
