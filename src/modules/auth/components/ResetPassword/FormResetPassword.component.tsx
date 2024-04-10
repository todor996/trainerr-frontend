import { TrrInput } from '@shared/components/TrrInput.component';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { useRef } from 'react';
import { Button } from 'tamagui';

export interface FormInputs {
  password: string;
  confirmPassword: string;
}

export function FormResetPassword(): JSX.Element {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormInputs>();

  const password = useRef({});
  password.current = watch('password', '');
  const onSubmit = async (data: FormInputs) => {
    console.log({ data });
  };

  return (
    <section className="m-3 flex flex-col sm:m-0  sm:items-center">
      <div className="flex-col sm:min-w-96 md:flex md:justify-center">
        <h2 className="pb-4 text-4xl">{t('auth:resetPassword')}</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
          {/*  Hidden label because of google warning, maybe used for request  */}
          <label className="hidden">
            <span>Username</span>
            <input type="text" autoComplete="username" name="username" />
          </label>
          {/* TODO: Define password rules */}
          <TrrInput
            // type="password"
            secureTextEntry={true}
            label={t('auth:newPassword')}
            placeholder={t('auth:passwordPlaceholder')}
            error={errors['password'] && t(`auth:error:${errors['password'].type}`)}
            autoComplete="new-password"
            registerProps={register('password', { required: true, minLength: 8 })}
          />
          <TrrInput
            // type="password"
            secureTextEntry={true}
            label={t('auth:confirmPassword')}
            placeholder={t('auth:passwordPlaceholder')}
            autoComplete="new-password"
            error={
              errors['confirmPassword'] &&
              t(`auth:error:${errors['confirmPassword'].type}`)
            }
            registerProps={register('confirmPassword', {
              validate: {
                passwordsDoNotMatch: (value) => value === password.current,
              },
            })}
          />
          <div>
            <Button type="submit" className="btn-primary mt-6 w-full">
              {t('auth:resetButton')}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
