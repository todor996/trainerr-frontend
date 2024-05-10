import { ClientProfile } from './ClientProfile.type';
import { TrainerProfile } from './TrainerProfile.type';
import { UserRole } from './UserRole.type';

export interface User {
  uid: string;
  userRoles: UserRole[];
  acceptedTermsOfUse?: unknown[]; // AcceptedTermsOfUse[];
  trainerProfile?: TrainerProfile;
  trainerProfileUid?: string;
  clientProfile?: ClientProfile;
  clientProfileUid?: string;
  email: string;
  emailVerified: boolean;
  phoneNumber?: string; // Made optional based on nullable: true in the class
  phoneNumberVerified: boolean;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}
