/* eslint-disable @typescript-eslint/no-unused-vars */
import { TrrInput } from '@shared/components/TrrInput.component';
import { TrrTextarea } from '@shared/components/TrrTextarea.component';
import { TrrUpload } from '@shared/components/TrrUpload.component';
import { ProfileInfo } from '@shared/types/ProfileInfo.type';
import { Validator } from '@shared/services/validator.service';
import { useFormik } from 'formik';
import { ChangeEvent, ReactNode, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Avatar, Form, Spinner } from 'tamagui';
import { TrrDatePicker } from '@shared/components/TrrDatePicker.component';
import { Gender } from '@shared/enums/Gender.enum';
import { TrrSelect } from '@shared/components/TrrSelect.component';
import { useToastController } from '@tamagui/toast';
import { useOnboardingStore } from '../store/onboarding.store';
import { TrrButton } from '@shared/components/TrrButton.component';
import { TrrStepper } from '@shared/components/TrrStepper.component';
import { useNavigate } from 'react-router-dom';

// TODO: Move to shared and set proper default image
const DEFAULT_AVATAR =
  'https://images.unsplash.com/photo-1548142813-c348350df52b?&w=100&h=100&dpr=2&q=80';

const initFromValues: ProfileInfo = {
  profileImage: '',
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
  const toast = useToastController();

  const {
    createProfileAsync,
    updateOnboarding,
    updateProfile,
    loading,
    error,
    success,
    profile,
  } = useOnboardingStore();

  const [file, setFile] = useState<File | null>(null);
  // TODO: Set proper default image
  const [fileUrl, setFileUrl] = useState<string>(DEFAULT_AVATAR);

  const formik = useFormik({
    initialValues: {
      ...initFromValues,
      // TODO: Set birthday properly
      ...profile,
    },
    onSubmit: handleSubmit,
    validate: handleValidation,
  });

  useEffect(() => {
    if (error) {
      toast.show('Error', {
        status: 'error',
        message: error.payload,
      });

      updateOnboarding({ error: null });
    }

    if (!loading) {
      formik.setSubmitting(false);
    }

    if (success) {
      updateOnboarding({
        loading: false,
        error: null,
        success: false,
      });

      navigate('/trainer/onboarding/app');
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, error, success]);

  async function handleSubmit(values: ProfileInfo) {
    values.birthday = new Date(values.birthday).toISOString();
    values.profileImage = file;
    updateProfile(values);

    const user = await createProfileAsync(values);

    // TODO@store: Save user in auth store
    console.log({ user });
  }

  function handleValidation(values: ProfileInfo) {
    // TODO: Update state here 🤔
    // TODO: Sync with BE for min and max values
    const errors = Validator.formatErrors({
      firstName: new Validator(values.firstName).required().max(50),
      lastName: new Validator(values.lastName).required().max(50),
      birthday: new Validator(values.birthday).required().date(),
      // gender: new Validator(values.gender),
      description: new Validator(values.description).max(320),
      tagline: new Validator(values.tagline).max(120),
      profileImage: new Validator(file).required(),
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
    if (!event.target.files?.length) {
      toast.show('Info', { status: 'info', message: 'No file selected' });
      return;
    }

    const file = event.target.files[0];
    const newFile = new File([file], 'profileImage', {
      type: file.type,
    });
    const fileUrl = URL.createObjectURL(newFile);

    setFileUrl(fileUrl);
    setFile(newFile);
  }

  return (
    <>
      <div className="my-6 flex w-full max-w-[390px] px-6">
        <TrrStepper
          // TODO: Talk with team about color (primary or accent)
          color="$primary"
          toConnect={true}
          steps={[
            {
              label: t('onboarding:stepper.singUp'),
              state: 'completed',
            },
            {
              label: t('onboarding:stepper.profile'),
              state: 'active',
            },
            {
              label: t('onboarding:stepper.app'),
            },
          ]}
        />
      </div>

      <div className="flex w-full max-w-[390px] flex-col px-6 pb-8">
        <div className="my-6 flex flex-col">
          <h2 className="text-3xl font-semibold">{t('onboarding:profile.title')}</h2>
        </div>

        <Form className="flex grow flex-col gap-4" onSubmit={formik.handleSubmit}>
          {/* TODO: Handle upload logic with BE */}
          <TrrUpload
            error={formik.touched.profileImage && formik.errors.profileImage}
            onChange={handleFile}
          >
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
            <TrrButton
              className="w-full"
              themeColor="$primary"
              disabled={formik.isSubmitting}
              icon={formik.isSubmitting ? () => <Spinner /> : undefined}
            >
              {t('onboarding:next')}
            </TrrButton>
          </Form.Trigger>
        </Form>
      </div>
    </>
  );
}
