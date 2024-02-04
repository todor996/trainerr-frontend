import './App.css';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '@store/index.store';
import { router } from './router';
import { LoadingPage } from '@shared/components/LoadingPage.component';

export function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={<LoadingPage />} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  );
}

export default App;
