import { useTranslation } from 'react-i18next';
import { SignUpForm } from './SignUpForm.component';
import { YStack } from 'tamagui';

export function SignUpSection(): JSX.Element {
  const { t } = useTranslation();

  return (
    <YStack
      className="flex flex-col items-center md:flex md:justify-center"
      alignItems="center"
      backgroundColor="$base"
    >
      <div className="flex w-full max-w-96 grow flex-col  py-6 sm:px-3 md:px-6">
        <h2 className="w-full max-w-96 pb-6 text-4xl sm:font-semibold md:font-medium lg:font-semibold">
          {t('auth:signUp')}
        </h2>
        <SignUpForm />
      </div>
    </YStack>
  );
}
