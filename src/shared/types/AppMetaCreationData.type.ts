// TODO@theme: Update this DTO
export interface AppMetaCreationData {
  // Info
  appName: string;
  description: string;

  // Style
  logoUrl: string;
  themeName: string;

  base100Color: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  neutralColor: string;
  successColor: string;
  infoColor: string;
  warningColor: string;
  errorColor: string;

  // Meta
  meta: Record<string, unknown>;
}

export interface AppMetaUpdateData extends Partial<AppMetaCreationData> {
  appMetaUid: string;
}

export interface ActiveAppMetaCreationData {
  appMetaUid: string;
  isDark: boolean;
}
