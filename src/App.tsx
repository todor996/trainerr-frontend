import './App.css';
import { TamaguiProvider, getTokens } from 'tamagui';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { ToastProvider, ToastViewport } from '@tamagui/toast';

import config from 'tamagui.config';
import { TrrToaster } from '@shared/components/TrrToaster.component';
import { useEffect } from 'react';

export function App(): JSX.Element {
  // TODO: get user token and stuff
  // TODO@theme!!!: Set theme properly

  useEffect(() => {
    // TODO@theme!!!: Set this properly with tamagui
    const tokens = getTokens();
    const root = document.querySelector(':root') as HTMLElement;
    // root.style.backgroundColor = tokens.color['accent-100'].val;
    const bgColor = tokens.color.base.val;
    const color = tokens.color['base-contrast'].val;
    root.style.setProperty(`--background`, bgColor);
    root.style.setProperty(`--color`, color);

    // TODO@theme!!!: Set this light & dark theme properly with tamagui
    // updateTheme({
    //   name: 'light',
    //   theme: {
    //     color: {
    //       ...tokens.color,
    //       background: tokens.color.background,
    //     },
    //   },
    // });
  }, []);

  return (
    <TamaguiProvider config={config} defaultTheme="light">
      <ToastProvider duration={5000}>
        <ToastViewport flexDirection="column" left={0} right={0} multipleToasts={true} />
        <TrrToaster />
        <RouterProvider router={router} />
      </ToastProvider>
    </TamaguiProvider>
  );
}

export default App;
