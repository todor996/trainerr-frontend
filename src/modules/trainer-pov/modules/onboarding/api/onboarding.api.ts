import { api } from '@api/index.api';
import { ActiveAppMeta } from '@shared/types/ActiveAppMeta.type';
import { AppMeta } from '@shared/types/AppMeta.type';
import {
  ActiveAppMetaCreationData,
  AppMetaCreationData,
} from '@shared/types/AppMetaCreationData.type';
import { ProfileInfo } from '@shared/types/ProfileInfo.type';
import { User } from '@shared/types/User.type';
import { AxiosResponse } from 'axios';

// ############################################################################
// #region API - Profile

export function createProfile(profile: ProfileInfo): Promise<AxiosResponse<User>> {
  return api.post('/profile/trainer', profile, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
}

export function updateProfile(
  uid: string,
  profile: Partial<ProfileInfo>,
): Promise<AxiosResponse<User>> {
  return api.put(`/profile/${uid}`, { ...profile });
}

export function getProfile(uid: string): Promise<AxiosResponse<User>> {
  return api.get(`/profile/${uid}`);
}

export function resendEmailConfirmation(): Promise<AxiosResponse<string>> {
  return api.post('/profile/trainer/resend-email-confirmation');
}

// #endregion API - Profile
// ############################################################################

// ############################################################################
// #region API - App

export function createAppMeta(
  appMeta: AppMetaCreationData,
): Promise<AxiosResponse<AppMeta>> {
  return api.post('/app-meta', appMeta);
}

export function updateAppMeta(
  appMetaUid: string,
  updateData: Partial<AppMetaCreationData>,
): Promise<AxiosResponse<AppMeta>> {
  return api.put(`/app-meta/${appMetaUid}`, updateData);
}

export function deleteAppMeta(appMetaUid: string): Promise<AxiosResponse<void>> {
  return api.delete(`/app-meta/${appMetaUid}`);
}

export function createActiveAppMeta(
  activeAppMeta: ActiveAppMetaCreationData,
): Promise<AxiosResponse<ActiveAppMeta>> {
  return api.post('/app-meta/active-app-meta', activeAppMeta);
}

export function getActiveAppMetaForTrainer(
  trainerUid: string,
): Promise<AxiosResponse<ActiveAppMeta | null>> {
  return api.get(`/app-meta/active-app-meta/${trainerUid}`);
}

// #region API - App
// ############################################################################
