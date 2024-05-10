import { UserRoleName } from '@shared/enums/UserRole.enum';
import { UserRole } from './UserRole.type';

export interface Role {
  uid: string;
  userRoles: UserRole[];
  rolePermissions: unknown; // RolePermission[]; // TODO: Define RolePermission type (maybe)
  name: UserRoleName;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}
