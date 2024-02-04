import { Steps, Progress } from 'react-daisyui';
import { Navigate, Route, Routes } from 'react-router-dom';
import { OnboardingAppInfo } from '../components/OnboardingAppInfo.component.tpov';
import { OnboardingAppFeatures } from '../components/OnboardingAppFeatures.component.tpov';
import { OnboardingAppStyle } from '../components/OnboardingAppStyle.component.tpov';
import { TrrStep } from '@shared/components/TrrStep.component';

export default function OnboardingAppPage(): JSX.Element {
  return (
    <>
      <div className="mx-6 my-6 flex w-full max-w-[560px] justify-center">
        <Steps className="w-full max-w-[560px]">
          <TrrStep color="primary" state="completed">
            Sign Up
          </TrrStep>
          <TrrStep color="primary" state="completed">
            Profile Info
          </TrrStep>
          <TrrStep color="primary" state="active">
            App Setup
          </TrrStep>
        </Steps>
      </div>

      <div className="flex w-full flex-col items-center">
        <div className="my-6 flex w-full max-w-[390px] flex-col px-6">
          <h1 className="text-3xl font-semibold">Your App Setup</h1>
          <div className="flex flex-row items-center">
            <Progress max={100} value={10} color="primary" />
            <span className="ml-2">10%</span>
          </div>
        </div>

        <Routes>
          <Route path="" element={<Navigate to="info" />} />
          <Route path="info" element={<OnboardingAppInfo />} />
          <Route path="features" element={<OnboardingAppFeatures />} />
          <Route path="style" element={<OnboardingAppStyle />} />
          <Route path="*" element={<Navigate to="info" />} />
        </Routes>
      </div>
    </>
  );
}
