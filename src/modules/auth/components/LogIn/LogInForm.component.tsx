import { useTranslation } from 'react-i18next';
import { TrrInput } from '@shared/components/TrrInput.component';
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { Validator } from '@shared/services/validator.service';
import { useEffect } from 'react';
import { useToastController } from '@tamagui/toast';
import { TrrButton } from '@shared/components/TrrButton.component';
import { useAuthStore } from '@modules/auth/store/auth.store';
import { SizableText } from 'tamagui';

export interface FormInputs {
  email: string;
  password: string;
}

const initFromValues: FormInputs = {
  email: '',
  password: '',
};

export function LogInForm(): JSX.Element {
  const { t } = useTranslation();
  const toast = useToastController();
  const navigate = useNavigate();
  const store = useAuthStore();
  const { loading, error, success } = store;

  const formik = useFormik({
    initialValues: initFromValues,
    validate: handleValidationFormik,
    onSubmit: handleSubmitFormik,
  });

  useEffect(() => {
    Validator.setErrorMessages({
      required: t('auth:error:required'),
      email: t('auth:error:email'),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (error) {
      toast.show(t('toast.error'), {
        status: 'error',
        message: t('auth:login.actionError'),
        // TODO: Set this propely based on backend response
        // message: error.data.message,
      });
    }

    if (success) {
      toast.show(t('toast.success'), {
        status: 'success',
        message: t('auth:login.actionSuccess'),
      });

      setTimeout(() => {
        navigate('/trainer/training');
      }, 1500);
    }

    if (loading) {
      // TODO@theme: Talk abut this wih the team
      toast.show('Loading', { status: 'info', message: 'Loading...' });
    } else {
      formik.setSubmitting(false);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, success, loading]);

  function handleValidationFormik(values: FormInputs) {
    const errors = Validator.formatErrors({
      email: new Validator(values.email).required().email(),
      password: new Validator(values.password).required(),
    });

    return errors;
  }

  async function handleSubmitFormik(values: FormInputs) {
    await store.trainerLoginAsync(values);
  }

  return (
    <>
      <form className="flex grow flex-col gap-4" onSubmit={formik.handleSubmit}>
        <TrrInput
          id="email"
          type="email"
          name="email"
          label={t('auth:emailLabel')}
          placeholder={t('auth:emailPlaceholder')}
          value={formik.values.email}
          error={formik.touched.email && formik.errors.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <TrrInput
          id="password"
          type="password"
          name="password"
          label={t('auth:passwordLabel')}
          placeholder={t('auth:passwordPlaceholder')}
          secureTextEntry={true}
          value={formik.values.password}
          error={formik.touched.password && formik.errors.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        <div className="mt-2 flex flex-col gap-2">
          <TrrButton
            {...{ type: 'submit' }}
            className="w-full"
            themeColor="$primary"
            disabled={formik.isSubmitting}
          >
            {t('auth:logInButton')}
          </TrrButton>
          <span className="label-text">
            {t('auth:account.accountLabel')}
            <Link to="/auth/signup" className="cursor-pointer">
              {' '}
              <SizableText color="$accent" fontWeight="500">
                {t('auth:account.accountLink')}
              </SizableText>
            </Link>
          </span>
        </div>
      </form>
    </>
  );
}
