import { TrrCheckbox } from '@shared/components/TrrCheckbox.component';
import { Validator } from '@shared/utils/validator.util';
import { useFormik } from 'formik';
import { t } from 'i18next';
import { useEffect } from 'react';
import { Badge } from 'react-daisyui';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Form } from 'tamagui';

interface FormInputs {
  training: boolean;
  nutrition: boolean;
  chat: boolean;
}

const initFromValues: FormInputs = {
  training: false,
  nutrition: false,
  chat: false,
};

export function OnboardingAppFeatures(): JSX.Element {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: initFromValues,
    validate: handleValidationFormik,
    onSubmit: handleSubmitFormik,
  });

  useEffect(() => {
    Validator.setErrorMessages({
      training: t('onboarding:error.training'),
    });
  });

  function handleSubmitFormik(values: FormInputs) {
    console.log('handleSubmitFormik', { values });

    navigate('/trainer/onboarding/app/style');
  }

  function handleValidationFormik(values: FormInputs) {
    const errors = Object.values(values).every((value) => !value)
      ? { training: 'Please select at least one feature' }
      : {};

    console.log('handleValidationFormik', { values, errors });

    return errors;
  }

  function onCheckedChangeTraining(value: boolean | string) {
    console.log('onCheckedChangeTraining', { value });

    formik.setFieldValue('training', value);

    if (value) {
      formik.setFieldError('training', '');
    }

    return formik.handleChange;
  }

  function onCheckedChangeNutrition(value: boolean | string) {
    console.log('onCheckedChangeNutrition', { value });

    formik.setFieldValue('nutrition', value);

    if (value) {
      formik.setFieldError('nutrition', '');
    }

    return formik.handleChange;
  }

  return (
    <div className="flex w-full max-w-[390px] flex-col px-6">
      <h3 className="mb-6 text-xl font-semibold">Features</h3>

      <Form
        className="flex max-w-[390px] flex-col items-start gap-4"
        onSubmit={formik.handleSubmit}
      >
        <TrrCheckbox
          id="training"
          name="training"
          value="training"
          message="Create Training Plans for your Clients"
          onCheckedChange={onCheckedChangeTraining}
        >
          <span className="font-medium">Training Plan</span>
        </TrrCheckbox>

        <TrrCheckbox
          id="nutrition"
          name="nutrition"
          value="nutrition"
          message="Create Nutrition Plans for your Clients"
          onCheckedChange={(event) => onCheckedChangeNutrition(event)}
        >
          <span className="font-medium">Nutrition Plan</span>
        </TrrCheckbox>

        <TrrCheckbox
          id="questionary"
          name="questionary"
          value="questionary"
          message="Communicate with your Clients"
          disabled={true}
        >
          <span className="font-medium">Questionary</span>
          <Badge className="ml-1 font-medium" outline={true} color="success">
            Coming Soon
          </Badge>
        </TrrCheckbox>

        <div className="my-12 flex flex-col gap-2">
          <div className="flex w-full flex-row gap-2">
            <Link className="grow" to={'/trainer/onboarding/app/info'}>
              {/* type="button" */}
              <Button className="w-full">Back</Button>
            </Link>

            <Form.Trigger className="grow">
              <Button className="w-full" tag="span" color="primary">
                Next
              </Button>
            </Form.Trigger>
          </div>

          {(formik.touched.nutrition || formik.touched.training) && (
            <p className="text-sm text-error">{formik.errors.training}</p>
          )}
        </div>
      </Form>
    </div>
  );
}
