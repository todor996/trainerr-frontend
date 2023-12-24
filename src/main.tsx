import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import App from "./App";
import { store } from "./store/index.store";

import "./styles/index.style.css";
import "./localization/i18next.local";

// TODO@pavle: Check why is `npm run lint` not working properly
// TODO@pavle: Setup aliases for imports
// TODO@pavle: Add pre-commit lint/prettier hook
// TODO@pavle: Think about using scss

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
