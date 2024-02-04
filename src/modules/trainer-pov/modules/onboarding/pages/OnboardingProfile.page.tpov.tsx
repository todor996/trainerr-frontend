import { TrrInput } from '@shared/components/TrrInput.component';
import { TrrStep } from '@shared/components/TrrStep.component';
import { TrrTextarea } from '@shared/components/TrrTextarea.component';
import { Avatar, Button, Steps } from 'react-daisyui';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function OnboardingProfilePage(): JSX.Element {
  const { t } = useTranslation();

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

      <div className="flex w-full max-w-[390px] flex-col px-6">
        <div className="my-6 flex flex-col">
          <h2 className="text-3xl font-semibold">Profile Info</h2>
        </div>

        <form className="flex flex-col items-start gap-4">
          {/* TODO: Make file upload component */}
          <Avatar
            src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            shape="circle"
            size="sm"
          />

          <TrrInput label="First Name" placeholder="James" />
          <TrrInput label="Last Name" placeholder="Bond" />
          <TrrInput
            type="date"
            placeholder={t('auth:birthdayLabel')}
            autoComplete="bday"
            label={t('auth:birthdayLabel')}
            // registerProps={register('birthday', { required: true })}
            // error={errors['birthday'] && t(`auth:error:${errors['birthday'].type}`)}
          />
          <TrrTextarea label="Description" placeholder="Something about yourself" />
          <TrrInput label="Tagname" placeholder="Go Hard or Go Home!" />

          <Link className="my-12 w-full" to={'/trainer/onboarding/app'}>
            <Button className="w-full" type="submit" color="primary">
              Next
            </Button>
          </Link>
        </form>
      </div>
    </>
  );
}
