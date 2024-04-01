import ReactDOM from 'react-dom/client';

import { App } from './App';
import { env } from '@shared/consts/env.consts';

import './styles/index.style.css';
import './localization/i18next.local';
import { createMockServer } from './mirage/routes.mirage';

if (env.DEV) {
  createMockServer();
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
