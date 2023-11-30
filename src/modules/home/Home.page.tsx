import "./Home.style.css";

import { useAppDispatch, useAppSelector } from "../../store/hooks.store";
import { updateHomeState } from "./store/homeSlice.store";
import { useTranslation } from "react-i18next";

import { Link } from "react-router-dom";
import { lazyLoadResourceHook } from "../../shared/hooks/lazyLoadResource.hook";

export function Home(): JSX.Element {
  lazyLoadResourceHook({ folderName: "Home", namespace: "home" });
  const { t, i18n } = useTranslation();

  const dispatch = useAppDispatch();
  const username = useAppSelector((state) => state.home.username);

  function updateUserName(username: string): void {
    dispatch(updateHomeState({ username }));
  }

  // TODO@pavle: Think about adding enum for languages
  function setEnglish() {
    i18n.changeLanguage("en");
  }

  function setSerbian() {
    i18n.changeLanguage("sr");
  }

  return (
    <div className="flex flex-col items-center gap-4 p-4 border border-solid border-yellow-600 rounded">
      <div className="join">
        <Link className="btn join-item" to="/">
          Home
        </Link>
        <Link className="btn join-item" to="/settings">
          Settings
        </Link>
      </div>

      <h2 className="text-2xl my-2 font-medium">{t("home:title")}</h2>
      <label className="flex flex-col max-w-xs">
        <span>{t("uncommon.guest")}</span>
        <input
          className="input input-bordered w-full max-w-xs"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(event) => updateUserName(event.target.value)}
        />
      </label>
      <div className="join">
        <button
          className="btn btn-neutral join-item"
          onClick={setEnglish}
        >
          {t("home:langButton.en")}
        </button>
        <button
          className="btn btn-neutral join-item"
          onClick={setSerbian}
        >
          {t("home:langButton.sr")}
        </button>
      </div>
    </div>
  );
}
