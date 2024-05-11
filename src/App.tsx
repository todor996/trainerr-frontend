import './App.css';
import { TamaguiProvider } from 'tamagui';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '@store/index.store';
import { router } from './router';
import { LoadingPage } from '@core/components/LoadingPage.component';

import '@tamagui/core/reset.css';
import config from 'tamagui.config';

export function App(): JSX.Element {
  return (
    <TamaguiProvider config={config} defaultTheme="light">
      <Provider store={store}>
        <PersistGate loading={<LoadingPage />} persistor={persistor}>
          <RouterProvider router={router} />
        </PersistGate>
      </Provider>
    </TamaguiProvider>
  );
}

export default App;
