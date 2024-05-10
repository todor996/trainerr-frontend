import { Role } from './Role.type';
import { User } from './User.type';

export interface UserRole {
  uid: string;
  userUid: string;
  user: User;
  roleUid: string;
  role: Role;

  // Meta
  createdAt: Date;
  updatedAt: Date;
}
