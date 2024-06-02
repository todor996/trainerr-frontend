import { AppFeatureAppMeta } from './AppFeatureAppMeta.type';
import { TrainerProfile } from './TrainerProfile.type';

export interface AppMeta {
  uid: string;
  trainerProfileUid: string;

  appName: string;
  description: string;
  themeName: string;
  logoUrl: string;

  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  neutralColor: string;
  base100Color: string;
  successColor: string;
  infoColor: string;
  warningColor: string;
  errorColor: string;
  meta: Record<string, unknown>; // Consider specifying a more specific type than `any` if possible

  trainerProfile: TrainerProfile;
  appFeatureAppMeta: AppFeatureAppMeta[];

  createdAt: Date;
  updatedAt: Date;
}
