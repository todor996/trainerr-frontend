import { TrainerClient } from './TrainerClient.type';
import { User } from './User.type';

export interface ClientProfile {
  uid: string;
  user: User;
  description?: string;
  tagline?: string;
  firstName: string;
  lastName: string;
  gender: string;
  trainers: TrainerClient[];
  birthDate: Date;
}
