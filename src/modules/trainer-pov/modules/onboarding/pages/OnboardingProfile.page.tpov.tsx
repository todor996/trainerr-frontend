import { TrrDropdown, TrrDropdownItem } from '@shared/components/TrrDropdown.component';
import { TrrInput } from '@shared/components/TrrInput.component';
import { TrrStep } from '@shared/components/TrrStep.component';
import { TrrTextarea } from '@shared/components/TrrTextarea.component';
import { TrrUpload } from '@shared/components/TrrUpload.component';
import { Validator } from '@shared/utils/validator.util';
import { useFormik } from 'formik';
import { ChangeEvent, useState } from 'react';
import { Steps } from 'react-daisyui';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Avatar, Button, Form, Spinner } from 'tamagui';

// TODO: Move to shared and set proper default image
const DEFAULT_AVATAR =
  'https://images.unsplash.com/photo-1548142813-c348350df52b?&w=100&h=100&dpr=2&q=80';

interface FormInputs {
  profileUrl?: string;
  firstName: string;
  lastName: string;
  birthday: Date | null;
  gender: string;
  description?: string;
  tagname?: string;
}

const initFromValues: FormInputs = {
  profileUrl: '',
  firstName: '',
  lastName: '',
  birthday: null,
  gender: '',
  description: '',
  tagname: '',
};

// TODO: Move to shared
const GENDER_OPTIONS = ['Female', 'Male', 'Other', 'Prefer not to say'];

export default function OnboardingProfilePage(): JSX.Element {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: initFromValues,
    onSubmit: handleSubmitFormik,
    validate: handleValidationFormik,
  });

  const [file, setFile] = useState<File | null>(null);
  // TODO: Set proper default image
  const [fileUrl, setFileUrl] = useState<string>(DEFAULT_AVATAR);

  function handleSubmitFormik(values: FormInputs) {
    // TODO: Handle submit properly
    console.log(values);

    navigate('/trainer/onboarding/app');
  }

  function handleValidationFormik(values: FormInputs) {
    // TODO: Sync with BE for min and max values
    const errors = Validator.formatErrors({
      firstName: new Validator(values.firstName).required().max(50),
      lastName: new Validator(values.lastName).required().max(50),
      // birthday: new Validator(values.birthday).required().date(),
      gender: new Validator(values.gender).required(),
      description: new Validator(values.description).max(500),
      tagname: new Validator(values.tagname).max(50),
    });
    return errors;
  }

  function getGenderItems(): Array<TrrDropdownItem> {
    return GENDER_OPTIONS.map((option) => ({
      isActive: option === formik.values.gender,
      content: option,
      value: option,
    }));
  }

  function setGender(option) {
    console.log({ option });

    formik.setFieldValue('gender', option);
  }

  function handleFile(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files?.length) {
      console.log('No files selected');
      return;
    }

    const file = event.target.files[0];

    console.log('handleFile', { file });

    const imageUrl = URL.createObjectURL(file);

    setFileUrl(imageUrl);

    setFile(file);

    console.log({ file, name: file.name, imageUrl });
  }

  return (
    <>
      <div className="mx-6 my-6 flex w-full max-w-[560px] justify-center">
        <Steps className="w-full max-w-[560px]">
          <TrrStep color="primary" state="completed">
            Sign Up
          </TrrStep>
          <TrrStep color="primary" state="active">
            Profile Info
          </TrrStep>
          <TrrStep>App Setup</TrrStep>
        </Steps>
      </div>

      <div className="flex w-full max-w-[390px] flex-col px-6 pb-8">
        <div className="my-6 flex flex-col">
          <h2 className="text-3xl font-semibold">Profile Info</h2>
        </div>

        <Form className="flex grow flex-col gap-4" onSubmit={formik.handleSubmit}>
          {/* TODO: Make file upload component */}
          {/* <Avatar
            src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            shape="circle"
            size="sm"
          /> */}

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
            label="First Name"
            placeholder="James"
            error={formik.touched.firstName ? formik.errors.firstName : ''}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <TrrInput
            id="lastName"
            name="lastName"
            type="text"
            value={formik.values.lastName}
            label="Last Name"
            placeholder="Bond"
            error={formik.touched.lastName ? formik.errors.lastName : ''}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <div className="flex flex-row gap-2">
            <TrrInput
              id="birthday"
              name="birthday"
              type="date"
              value={formik.values.birthday?.toString() || ''}
              placeholder={t('auth:birthdayLabel')}
              label={t('auth:birthdayLabel')}
              error={formik.touched.birthday ? formik.errors.birthday : ''}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {/* TODO: Add error prop */}
            <TrrDropdown
              toggleContent={formik.values.gender}
              toggleClassName="w-24"
              items={getGenderItems()}
              onSelect={(option) => setGender(option as string)}
            />
          </div>

          <TrrTextarea
            id="description"
            name="description"
            value={formik.values.description}
            label="Description"
            placeholder="Something about yourself"
            error={formik.touched.description ? formik.errors.description : ''}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <TrrInput
            id="tagname"
            name="tagname"
            type="text"
            value={formik.values.tagname}
            label="Tagname"
            placeholder="Go Hard or Go Home!"
            error={formik.touched.tagname ? formik.errors.tagname : ''}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <Form.Trigger asChild disabled={formik.isSubmitting}>
            <Button
              className="w-full"
              color="primary"
              disabled={formik.isSubmitting}
              icon={formik.isSubmitting ? () => <Spinner /> : undefined}
            >
              Next
            </Button>
          </Form.Trigger>
        </Form>
      </div>
    </>
  );
}
