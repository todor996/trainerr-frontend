import { Input } from '@shared/components/Input/Input.component';
import { Button } from '@shared/components/Button/Button.component';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from '@store/hooks.store';
import { loginAction } from '@modules/auth/store/authActions.store.ts';

export interface FormInputs {
  email: string;
  password: string;
}

export function FormLogIn(): JSX.Element {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  async function onSubmit(data: FormInputs) {
    dispatch(loginAction(data));
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
        <Input
          type="email"
          label={t('auth:emailLabel')}
          placeholder={t('auth:emailPlaceholder')}
          autoComplete="email"
          error={errors['email'] && t(`auth:error:${errors['email'].type}`)}
          registerProps={register('email', {
            required: true,
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Entered value does not match email format',
            },
          })}
        />
        <Input
          type="password"
          label={t('auth:passwordLabel')}
          placeholder={t('auth:passwordPlaceholder')}
          error={errors['password'] && t(`auth:error:${errors['password'].type}`)}
          autoComplete="current-password"
          registerProps={register('password', { required: true, minLength: 8 })}
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
