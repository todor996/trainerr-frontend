import ReactDOM from "react-dom/client";

import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./store/index.store.ts";

import "./styles/index.style.css";
import "./localization/i18next.local.ts";

// TODO@pavle: Check why is `npm run lint` not working properly
// TODO@pavle: Setup aliases for imports
// TODO@pavle: Add pre-commit lint/prettier hook
// TODO@pavle: Think about using scss 

ReactDOM.createRoot(document.getElementById("root")!).render(
    <Provider store={store}>
      <App />
    </Provider>
);
