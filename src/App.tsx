import "./App.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { useAppSelector } from "./store/hooks.store";
import { useTranslation } from "react-i18next";

export function App(): JSX.Element {
  const username = useAppSelector((state) => state.home.username);
  const { t } = useTranslation();

  return (
    <div className="flex flex-col justify-start p-4 items-center border border-solid border-yellow-600 rounded">
      <h1 className="text-3xl font-medium">App.tsx</h1>
      <h2 className="text-2xl font-bold my-4">{t("title")}</h2>
      <p className="my-1">Guest: {username}</p>
      <p>{t("description.part1")}</p>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
