import { Input } from '@shared/components/Input/Input.component';
import { useTranslation } from 'react-i18next';

export function FormSignUp(): JSX.Element {
  const { t } = useTranslation();

  return (
    <>
      <h2 className="pb-4 text-4xl">{t('auth:signUp')}</h2>
      <form className="flex flex-col space-y-4">
        <Input
          type="text"
          placeholder={t('auth:firstNamePlaceholder')}
          required={true}
          label={t('auth:firstNameLabel')}
        />
        <Input
          type="text"
          placeholder={t('auth:lastNamePlaceholder')}
          required={true}
          label={t('auth:lastNameLabel')}
        />
        <Input type="date" required={true} label={t('auth:birthdayLabel')} />
        <Input
          type="email"
          placeholder={t('auth:emailPlaceholder')}
          autoComplete="current-email"
          required={true}
          label={t('auth:emailLabel')}
        />
        <Input
          type="password"
          placeholder={t('auth:passwordPlaceholder')}
          autoComplete="current-password"
          required={true}
          label={t('auth:passwordLabel')}
        />
      </form>
    </>
  );
}
