import './App.css';
import { TamaguiProvider } from 'tamagui';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '@store/index.store';
import { router } from './router';
import { LoadingPage } from '@core/components/LoadingPage.component';
import { ToastProvider, ToastViewport } from '@tamagui/toast';

import '@tamagui/core/reset.css';
import config from 'tamagui.config';
import { TrrToaster } from '@shared/components/TrrToaster.component';

export function App(): JSX.Element {
  return (
    <TamaguiProvider config={config} defaultTheme="light">
      <ToastProvider duration={5000}>
        <ToastViewport flexDirection="column" left={0} right={0} />
        <TrrToaster />
        <Provider store={store}>
          <PersistGate loading={<LoadingPage />} persistor={persistor}>
            <RouterProvider router={router} />
          </PersistGate>
        </Provider>
      </ToastProvider>
    </TamaguiProvider>
  );
}

export default App;
