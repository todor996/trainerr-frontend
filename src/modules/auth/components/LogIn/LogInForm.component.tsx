import { useTranslation } from 'react-i18next';
import { TrrInput } from '@shared/components/TrrInput.component';
import { useAppDispatch, useAppSelector } from '@store/hooks.store';
import { loginAction } from '@modules/auth/store/authActions.store.ts';
import { Button } from 'tamagui';
import { Formik, FormikHelpers } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { Validator } from '@shared/services/validator.service';
import { useEffect } from 'react';
import { useToastController } from '@tamagui/toast';
import { updateAuthState } from '@modules/auth/store/authSlice.store';

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

  const dispatch = useAppDispatch();
  const { success, error, loading } = useAppSelector((state) => state.auth);

  useEffect(() => {
    Validator.setErrorMessages({
      required: t('auth:error:required'),
      email: t('auth:error:email'),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (error) {
      // TODO: Standardize error handling
      toast.show('Error', { status: 'error', message: JSON.stringify(error) });

      dispatch(updateAuthState({ error: null }));
    }

    if (success) {
      toast.show('Success', { status: 'success', message: 'Logged in successfully' });
      dispatch(updateAuthState({ error: null, success: false, loading: false }));

      setTimeout(() => {
        navigate('/trainer/training');
      }, 1500);
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

  function handleSubmitFormik(
    values: FormInputs,
    { setSubmitting }: FormikHelpers<FormInputs>,
  ) {
    dispatch(loginAction(values));
    setSubmitting(false);
  }

  return (
    <>
      {/* TODO: Refactor this to use formik hook */}
      <Formik
        initialValues={initFromValues}
        validate={handleValidationFormik}
        onSubmit={handleSubmitFormik}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form className="flex grow flex-col gap-4" onSubmit={handleSubmit}>
            <TrrInput
              id="email"
              type="email"
              name="email"
              label={t('auth:emailLabel')}
              placeholder={t('auth:emailPlaceholder')}
              value={values.email}
              error={touched.email ? errors.email : ''}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <TrrInput
              id="password"
              type="password"
              name="password"
              label={t('auth:passwordLabel')}
              placeholder={t('auth:passwordPlaceholder')}
              secureTextEntry={true}
              value={values.password}
              error={touched.password ? errors.password : ''}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <div className="mt-2 flex flex-col gap-2">
              <Button
                {...{ type: 'submit' }}
                className="btn-primary w-full"
                disabled={isSubmitting}
              >
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
        )}
      </Formik>
    </>
  );
}
