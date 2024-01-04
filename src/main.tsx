import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import App from "./App";
import { store } from "./store/index.store";

import "./styles/index.style.css";
import "./localization/i18next.local";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
