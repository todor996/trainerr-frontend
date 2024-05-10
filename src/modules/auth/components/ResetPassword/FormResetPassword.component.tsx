import { TrrInput } from '@shared/components/TrrInput.component';
import { useTranslation } from 'react-i18next';
import { Button } from 'tamagui';
import { Formik, FormikHelpers } from 'formik';
import { Validator } from '@shared/utils/validator.util';
import { useRef } from 'react';

export interface FormInputs {
  password: string;
  confirmPassword: string;
}

const initFromValues: FormInputs = {
  password: '',
  confirmPassword: '',
};

export function FormResetPassword(): JSX.Element {
  const formRef = useRef<HTMLFormElement>(null);
  const { t } = useTranslation();

  function handleValidationFormik(values) {
    const errors = Validator.formatErrors({
      password: new Validator(values.password).required().min(8),
      confirmPassword: new Validator(values.confirmPassword)
        .required()
        .min(8)
        .equals(values.password),
    });

    return errors;
  }

  function handleSubmitFormik(
    values: FormInputs,
    { setSubmitting }: FormikHelpers<FormInputs>,
  ) {
    // TODO: Handle this properly

    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  }

  return (
    <section className="m-3 flex flex-col sm:m-0  sm:items-center">
      <div className="flex-col sm:min-w-96 md:flex md:justify-center">
        <h2 className="pb-4 text-4xl">{t('auth:resetPassword')}</h2>

        {/* TODO: Refactor this to use formik hook useFormik & update error handling */}
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
            <form
              className="flex flex-col space-y-4"
              ref={formRef}
              onSubmit={(event) => {
                console.log('onSubmit', { event });
                return handleSubmit;
              }}
            >
              {/*  Hidden label because of google warning, maybe used for request  */}
              {/* <label className="hidden">
                <span>Username</span>
                <input type="text" autoComplete="username" name="username" />
              </label> */}
              {/* TODO: Define password rules */}
              <TrrInput
                id="password"
                name="password"
                type="password"
                secureTextEntry={true}
                label={t('auth:newPassword')}
                placeholder={t('auth:passwordPlaceholder')}
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  (touched.password &&
                    errors.password &&
                    t(`auth:error:${errors.password}`)) ||
                  ''
                }
              />
              <TrrInput
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                secureTextEntry={true}
                label={t('auth:confirmPassword')}
                placeholder={t('auth:passwordPlaceholder')}
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  (touched.confirmPassword &&
                    errors.confirmPassword &&
                    t(`auth:error:${errors.confirmPassword}`)) ||
                  ''
                }
              />
              <div>
                <Button
                  className="btn-primary mt-6 w-full"
                  {...{ type: 'submit' }}
                  disabled={isSubmitting}
                  onPress={() => formRef.current?.submit()}
                >
                  {t('auth:resetButton')}
                </Button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </section>
  );
}
