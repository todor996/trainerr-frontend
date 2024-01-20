import './App.css';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '@store/index.store';
import { router } from './router';

export function App(): JSX.Element {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
