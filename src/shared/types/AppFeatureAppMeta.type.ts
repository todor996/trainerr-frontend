import { AppFeature } from './AppFeature.type';
import { AppMeta } from './AppMeta.type';

export interface AppFeatureAppMeta {
  uid: string;
  appFeatureUid: string;
  appMetaUid: string;
  createdAt: Date;
  updatedAt: Date;
  appFeature: AppFeature;
  appMeta: AppMeta;
}
