// TODO@design: Create more beautiful loading page

import { Spinner } from 'tamagui';

export function LoadingPage() {
  return (
    <>
      <div className="flex h-screen h-svh flex-col items-center justify-center">
        <Spinner size="large" color="$blue3Dark" />
      </div>
    </>
  );
}
