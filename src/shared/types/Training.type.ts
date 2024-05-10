import { User } from './User.type';
import { Workout } from './Workout.type';

export interface Training {
  uid: string;
  trainerUid: string;
  name: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
  trainer: User;
  workouts?: Workout[];
}
