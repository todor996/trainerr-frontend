import { Input } from '@shared/components/Input/Input.component';
import { Button } from '@shared/components/Button/Button.component';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';

export interface FormInputs {
  email: string;
  password: string;
}

export function FormLogIn(): JSX.Element {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit = async (data: FormInputs) => {
    console.log('Form Data:', data);
  };

  return (
    <>
      <h2 className="pb-4 text-4xl">{t('auth:logIn')}</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
        <Input
          type="email"
          label={t('auth:emailLabel')}
          placeholder={t('auth:emailPlaceholder')}
          autoComplete="current-email"
          registerProps={register('email', { required: true })}
        />
        <Input
          type="password"
          label={t('auth:passwordLabel')}
          placeholder={t('auth:passwordPlaceholder')}
          autoComplete="current-password"
          registerProps={register('password', { required: true })}
        />
        <div>
          <Button type="submit" className="btn-primary mt-6 w-full">
            {t('auth:logInButton')}
          </Button>
        </div>
      </form>
    </>
  );
}
