import "./App.css";
import { RouterProvider } from "react-router-dom";
import { useTranslation } from "react-i18next";
import router from "./router";
import { Button } from "./shared/components/index.component";
import { useAppSelector } from "./store/hooks.store";

function App(): JSX.Element {
  const username = useAppSelector((state) => state.home.username);
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-start rounded border border-solid border-yellow-600 p-4">
      <h1 className="text-3xl font-medium">App.tsx</h1>
      <h2 className="my-4 text-2xl font-bold">{t("title")}</h2>
      <p className="my-1">Guest: {username}</p>
      <p>{t("description.part1")}</p>
      <Button label="Button" size="large" loading />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
