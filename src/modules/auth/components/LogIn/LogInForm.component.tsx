import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { Button } from 'react-daisyui';
import { TrrInput } from '@shared/components/TrrInput.component';
import { useAppDispatch } from '@store/hooks.store';
import { loginAction } from '@modules/auth/store/authActions.store.ts';
import { Link } from 'react-router-dom';

export interface FormInputs {
  email: string;
  password: string;
}

export function LogInForm(): JSX.Element {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  async function onSubmit(data: FormInputs) {
    dispatch(loginAction(data));
  }

  return (
    <>
      <form className="flex grow flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <TrrInput
          type="email"
          label={t('auth:emailLabel')}
          placeholder={t('auth:emailPlaceholder')}
          autoComplete="email"
          error={errors['email'] && t(`auth:error:${errors['email'].type}`)}
          registerProps={register('email', {
            required: true,
            pattern: {
              value: /\S+@\S+\.\S+/,
              // The function does not work without 'message' property
              message: 'Entered value does not match email format',
            },
          })}
        />
        <TrrInput
          type="password"
          label={t('auth:passwordLabel')}
          placeholder={t('auth:passwordPlaceholder')}
          error={errors['password'] && t(`auth:error:${errors['password'].type}`)}
          autoComplete="current-password"
          registerProps={register('password', { required: true, minLength: 8 })}
        />

        <div className="mt-2 flex flex-col gap-2">
          <Button type="submit" className="btn-primary w-full">
            {t('auth:logInButton')}
          </Button>
          <span className="label-text">
            {t('auth:account.accountLabel')}
            <Link to="/auth/signup" className="cursor-pointer text-primary">
              {' '}
              {t('auth:account.accountLink')}
            </Link>
          </span>
        </div>
      </form>
    </>
  );
}
