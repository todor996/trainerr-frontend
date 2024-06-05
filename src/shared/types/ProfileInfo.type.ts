import { Gender } from '@shared/enums/Gender.enum';

export interface ProfileInfo {
  profileImage: string | File;
  firstName: string;
  lastName: string;
  birthday: Date | string;
  gender: Gender;
  description?: string;
  tagline?: string;
  files?: File[];
}
