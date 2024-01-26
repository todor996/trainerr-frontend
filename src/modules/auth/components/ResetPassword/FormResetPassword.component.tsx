import { Input } from '@shared/components/Input/Input.component';
import { Button } from '@shared/components/Button/Button.component';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';

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
  } = useForm<FormInputs>();

  const onSubmit = (data: FormInputs) => {
    console.log({ data });
  };

  return (
    <section className="m-3 flex flex-col lg:m-0  lg:items-center">
      <div className="flex-col md:flex md:justify-center lg:w-[400px]">
        <h2 className="pb-4 text-4xl">{t('auth:resetPassword')}</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
          <label className="hidden">
            <span>Username</span>
            <input type="text" autoComplete="username" name="username" />
          </label>
          <Input
            type="password"
            label={t('auth:newPassword')}
            placeholder={t('auth:passwordPlaceholder')}
            error={errors['password'] && t(`auth:error:${errors['password'].type}`)}
            autoComplete="new-password"
            registerProps={register('password', { required: true, minLength: 8 })}
          />
          <Input
            type="password"
            label={t('auth:confirmPassword')}
            placeholder={t('auth:passwordPlaceholder')}
            error={errors['password'] && t(`auth:error:${errors['password'].type}`)}
            autoComplete="new-password"
            registerProps={register('confirmPassword', {
              required: true,
              minLength: 8,
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
