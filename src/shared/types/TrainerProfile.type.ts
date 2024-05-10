import { ActiveAppMeta } from './ActiveAppMeta.type';
import { AppMeta } from './AppMeta.type';
import { Exercise } from './Exercise.type';
import { TrainerClient } from './TrainerClient.type';
import { User } from './User.type';

export interface TrainerProfile {
  uid: string;
  user: User;
  firstName: string;
  lastName: string;
  gender: string;
  birthDate: Date;
  description?: string;
  tagline?: string;
  activeAppMeta: ActiveAppMeta[];
  clients: TrainerClient[];
  exercises: Exercise[];
  appMeta: AppMeta[];
  createdAt: Date;
  updatedAt: Date;
}
