import { TrrInput } from '@shared/components/TrrInput.component';
import { TrrStep } from '@shared/components/TrrStep.component';
import { TrrTextarea } from '@shared/components/TrrTextarea.component';
import { TrrUpload } from '@shared/components/TrrUpload.component';
import { ProfileInfo } from '@shared/types/ProfileInfo.type';
import { Validator } from '@shared/utils/validator.util';
import { useAppDispatch, useAppSelector } from '@store/hooks.store';
import { useFormik } from 'formik';
import { ChangeEvent, ReactNode, useEffect, useState } from 'react';
import { Steps } from 'react-daisyui';
import { useTranslation } from 'react-i18next';
import { Avatar, Button, Form, Spinner } from 'tamagui';
import { createProfileAction } from '../../store/onboardingActions.store';
import { TrrDatePicker } from '@shared/components/TrrDatePicker.component';
import { useNavigate } from 'react-router-dom';
import { Gender } from '@shared/enums/Gender.enum';
import { TrrSelect } from '@shared/components/TrrSelect.component';
import { updateProfileState } from '../../store/onboardingSlice.store';

// TODO: Move to shared and set proper default image
const DEFAULT_AVATAR =
  'https://images.unsplash.com/photo-1548142813-c348350df52b?&w=100&h=100&dpr=2&q=80';

const initFromValues: ProfileInfo = {
  profileUrl: '',
  firstName: '',
  lastName: '',
  birthday: null,
  gender: null,
  description: '',
  tagline: '',
};

// TODO: Move to shared
const GENDER_OPTIONS = Object.values(Gender);

export default function OnboardingProfilePage(): JSX.Element {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const { loading, error, success } = useAppSelector((state) => state.onboarding);

  const [file, setFile] = useState<File | null>(null);
  // TODO: Set proper default image
  const [fileUrl, setFileUrl] = useState<string>(DEFAULT_AVATAR);

  const formik = useFormik({
    initialValues: initFromValues,
    onSubmit: handleSubmit,
    validate: handleValidation,
  });

  useEffect(() => {
    // error.payload => AxiosError
    console.log('onboarding', { loading, error, success });
    if (!loading) {
      formik.setSubmitting(false);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, error, success]);

  function handleSubmit(values: ProfileInfo) {
    dispatch(updateProfileState(values));
    dispatch(createProfileAction(values));

    navigate('/trainer/onboarding/app');
  }

  function handleValidation(values: ProfileInfo) {
    // TODO: Sync with BE for min and max values
    const errors = Validator.formatErrors({
      firstName: new Validator(values.firstName).required().max(50),
      lastName: new Validator(values.lastName).required().max(50),
      birthday: new Validator(values.birthday).required().date(),
      // gender: new Validator(values.gender),
      description: new Validator(values.description).max(320),
      tagline: new Validator(values.tagline).max(120),
    });

    return errors;
  }

  function getGenderItems(): Array<{ content: ReactNode; value: string }> {
    const items = GENDER_OPTIONS.map((option) => ({
      content: t(`gender.${option}`),
      value: option,
    }));

    return items;
  }

  function setGender(option) {
    console.log({ option });

    formik.setFieldValue('gender', option);
  }

  function handleFile(event: ChangeEvent<HTMLInputElement>) {
    // TODO: Handle this properly

    if (!event.target.files?.length) {
      console.log('No files selected');
      return;
    }

    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setFileUrl(imageUrl);
    setFile(file);
  }

  return (
    <>
      <div className="mx-6 my-6 flex w-full max-w-[560px] justify-center">
        <Steps className="w-full max-w-[560px]">
          <TrrStep color="primary" state="completed">
            {t('onboarding:stepper.singUp')}
          </TrrStep>
          <TrrStep color="primary" state="active">
            {t('onboarding:stepper.profile')}
          </TrrStep>
          <TrrStep>{t('onboarding:stepper.app')}</TrrStep>
        </Steps>
      </div>

      <div className="flex w-full max-w-[390px] flex-col px-6 pb-8">
        <div className="my-6 flex flex-col">
          <h2 className="text-3xl font-semibold">{t('onboarding:profile.title')}</h2>
        </div>

        <Form className="flex grow flex-col gap-4" onSubmit={formik.handleSubmit}>
          {/* TODO: Handle upload logic with BE */}
          <TrrUpload onChange={handleFile}>
            <Avatar circular size="$6">
              <Avatar.Image accessibilityLabel={file?.name} src={fileUrl} />
              <Avatar.Fallback delayMs={600} backgroundColor="$blue10" />
            </Avatar>
          </TrrUpload>

          <TrrInput
            id="firstName"
            name="firstName"
            type="text"
            value={formik.values.firstName}
            label={t('onboarding:profile.firstNameLabel')}
            placeholder={t('onboarding:profile.firsNamePlaceholder')}
            error={formik.touched.firstName ? formik.errors.firstName : ''}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <TrrInput
            id="lastName"
            name="lastName"
            type="text"
            value={formik.values.lastName}
            label={t('onboarding:profile.lastNameLabel')}
            placeholder={t('onboarding:profile.lastNamePlaceholder')}
            error={formik.touched.lastName ? formik.errors.lastName : ''}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <div className="flex flex-row gap-2">
            <TrrDatePicker
              value={formik.values.birthday?.toString() || ''}
              input={{
                id: 'birthday',
                name: 'birthday',
                type: 'date',
                label: t('onboarding:profile.birthdayLabel'),
                error: formik.touched.birthday ? (formik.errors.birthday as string) : '',
              }}
              onChange={(date) => formik.setFieldValue('birthday', date)}
            />

            <TrrSelect
              id="gender"
              value={formik.values.gender}
              items={getGenderItems()}
              label={t('onboarding:profile.genderLabel')}
              placeholder={t('onboarding:profile.genderPlaceholder')}
              error={formik.touched.gender ? formik.errors.gender : ''}
              onChange={(gender) => setGender(gender)}
            />
          </div>

          <TrrTextarea
            id="description"
            name="description"
            value={formik.values.description}
            label={t('onboarding:profile.descriptionLabel')}
            placeholder={t('onboarding:profile.descriptionPlaceholder')}
            error={formik.touched.description ? formik.errors.description : ''}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <TrrInput
            id="tagline"
            name="tagline"
            type="text"
            value={formik.values.tagline}
            label={t('onboarding:profile.taglineLabel')}
            placeholder={t('onboarding:profile.taglinePlaceholder')}
            error={formik.touched.tagline ? formik.errors.tagline : ''}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <Form.Trigger asChild disabled={formik.isSubmitting}>
            <Button
              className="w-full"
              color="$blue9Light"
              borderColor={formik.isSubmitting ? 'transparent' : '$blue9'}
              disabled={formik.isSubmitting}
              icon={formik.isSubmitting ? () => <Spinner /> : undefined}
            >
              {t('onboarding:next')}
            </Button>
          </Form.Trigger>
        </Form>
      </div>
    </>
  );
}
