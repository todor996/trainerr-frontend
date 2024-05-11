import { Gender } from '@shared/enums/Gender.enum';

export interface ProfileInfo {
  profileUrl: string;
  firstName: string;
  lastName: string;
  birthday: Date;
  gender: Gender;
  description?: string;
  tagline?: string;
}
