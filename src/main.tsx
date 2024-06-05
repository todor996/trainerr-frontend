import ReactDOM from 'react-dom/client';

import { App } from './App';

import '@tamagui/core/reset.css';
import './styles/index.style.css';
import './localization/i18next.local';

import 'react-datepicker/dist/react-datepicker.css';

// Store axios is not working properly with mockServer
// if (env.DEV) {
//   createMockServer();
// }

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
