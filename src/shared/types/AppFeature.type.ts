import { AppFeatureAppMeta } from './AppFeatureAppMeta.type';

export interface AppFeature {
  uid: string;
  name: string;
  description: string;
  isAvailable: string;
  createdAt: Date;
  updatedAt: Date;
  appFeatureAppMeta: AppFeatureAppMeta[];
}
