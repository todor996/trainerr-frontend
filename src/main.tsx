import ReactDOM from 'react-dom/client';

import { App } from './App';

import './styles/index.style.css';
import './localization/i18next.local';

// if (env.DEV) {
//   createMockServer();
// }

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
