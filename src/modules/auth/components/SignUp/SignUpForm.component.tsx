import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Button } from 'tamagui';
import { TrrInput } from '@shared/components/TrrInput.component';
import { TrrCheckbox } from '@shared/components/TrrCheckbox.component';
import { emailRegex } from '@shared/consts/regex';
import { useAppDispatch } from '@store/hooks.store';
import { trainerSignupAction } from '@modules/auth/store/authActions.store';

export interface FormInputs {
  username: string;
  terms: boolean;
  email: string;
  password: string;
  passwordConfirm: string;
}

export function SignUpForm(): JSX.Element {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  async function onSubmit(data: FormInputs) {
    dispatch(trainerSignupAction(data));
  }

  // TODO: Add password confirmation logic

  return (
    <>
      <form className="flex grow flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <TrrInput
          type="text"
          placeholder={t('auth:usernamePlaceholder')}
          autoComplete="username"
          label={t('auth:usernameLabel')}
          registerProps={register('username', { required: true })}
          error={errors['username'] && t(`auth:error:${errors['username'].type}`)}
        />
        <TrrInput
          type="email"
          placeholder={t('auth:emailPlaceholder')}
          autoComplete="email"
          label={t('auth:emailLabel')}
          registerProps={register('email', {
            required: true,
            pattern: {
              value: emailRegex,
              message: 'Entered value does not match email format',
            },
          })}
          error={errors['email'] && t(`auth:error:${errors['email'].type}`)}
        />
        <TrrInput
          // type="password"
          secureTextEntry={true}
          placeholder={t('auth:passwordPlaceholder')}
          autoComplete="new-password"
          label={t('auth:passwordLabel')}
          registerProps={register('password', { required: true, minLength: 8 })}
          error={errors['password'] && t(`auth:error:${errors['password'].type}`)}
        />
        <TrrInput
          // type="password"
          secureTextEntry={true}
          placeholder={t('auth:passwordConfirmPlaceholder')}
          autoComplete="new-password"
          label={t('auth:passwordConfirmLabel')}
          registerProps={register('passwordConfirm', { required: true, minLength: 8 })}
          error={
            errors['passwordConfirm'] && t(`auth:error:${errors['passwordConfirm'].type}`)
          }
        />

        <TrrCheckbox registerProps={register('terms', { required: true })}>
          {t('auth:checkbox.checkboxLabel')}{' '}
          <Link to="#" className="cursor-pointer text-primary">
            {t('auth:checkbox.checkboxPrivacy')}
          </Link>{' '}
          {t('auth:checkbox.checkboxAnd')}{' '}
          <Link to="#" className="cursor-pointer text-primary">
            {t('auth:checkbox.checkboxTerms')}
          </Link>
          .
        </TrrCheckbox>

        <div className="mt-2 flex flex-col gap-2">
          <Button type="submit" className="btn-primary w-full">
            {t('auth:signUpButton')}
          </Button>

          <span className="label-text">
            {t('auth:signup.loginLabel')}{' '}
            <Link to="/auth/login" className="cursor-pointer text-primary">
              {t('auth:signup.loginLink')}
            </Link>
          </span>
        </div>
      </form>
    </>
  );
}
