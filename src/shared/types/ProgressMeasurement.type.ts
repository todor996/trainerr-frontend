import { Measurement } from './Measurement.type';
import { ClientProfile } from './ClientProfile.type';

export interface ProgressMeasurement {
  uid: string;
  clientProfileUid: string;
  measurements?: Measurement; // This property is optional
  clientProfile: ClientProfile;
  createdAt: Date;
  updatedAt: Date;
}
