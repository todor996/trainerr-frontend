import { api } from '@api/index.api';
import { ProfileInfo } from '@shared/types/ProfileInfo.type';
import { User } from '@shared/types/User.type';
import { AxiosResponse } from 'axios';

export function createProfile(profile: ProfileInfo): Promise<AxiosResponse<User>> {
  return api.post('/profile/trainer', profile);
}

export function updateProfile(uid: string): Promise<AxiosResponse<User>> {
  return api.put(`/profile/${uid}`, {});
}

export function getProfile(uid: string): Promise<AxiosResponse<User>> {
  return api.get(`/profile/${uid}`);
}

export function resendEmailConfirmation(): Promise<AxiosResponse<string>> {
  return api.post('/profile/trainer/resend-email-confirmation');
}
