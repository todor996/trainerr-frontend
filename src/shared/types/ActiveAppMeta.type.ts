import { AppMeta } from './AppMeta.type';
import { TrainerProfile } from './TrainerProfile.type';

export interface ActiveAppMeta {
  uid: string;
  trainerProfileUid: string;
  appMetaUid: string;
  isDark: boolean;
  createdAt: Date;
  updatedAt: Date;
  appMeta: AppMeta;
  trainerProfile: TrainerProfile;
}
