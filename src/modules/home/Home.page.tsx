import './Home.style.css';

import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@store/hooks.store';
import useLazyLoadResourceHook from '@shared/hooks/lazyLoadResource.hook';
import { updateHomeState } from './store/homeSlice.store';

export default function Home(): JSX.Element {
  useLazyLoadResourceHook({ folderName: 'home', namespace: 'home' });
  const { t, i18n } = useTranslation();

  const dispatch = useAppDispatch();
  const username = useAppSelector((state) => state.home.username);

  function updateUserName(userName: string): void {
    dispatch(updateHomeState({ username: userName }));
  }

  // TODO@pavle: Think about adding enum for languages
  function setEnglish() {
    i18n.changeLanguage('en');
  }

  function setSerbian() {
    i18n.changeLanguage('sr');
  }

  return (
    <div className="flex flex-col items-center gap-4 rounded border border-solid border-yellow-600 p-4">
      <div className="join">
        <Link className="btn join-item" to="/">
          Home
        </Link>
        <Link className="btn join-item" to="/settings">
          Settings
        </Link>
      </div>

      <h2 className="my-2 text-2xl font-medium">{t('home:title')}</h2>
      <label className="flex max-w-xs flex-col" htmlFor="usernameInput">
        <span>
          {t('uncommon.guest')}: {username}
        </span>
        <input
          className="input input-bordered w-full max-w-xs"
          type="text"
          id="usernameInput"
          placeholder="Username"
          value={username}
          onChange={(event) => updateUserName(event.target.value)}
        />
      </label>
      <div className="join">
        <button type="button" className="btn join-item btn-neutral" onClick={setEnglish}>
          {t('home:langButton.en')}
        </button>
        <button type="button" className="btn join-item btn-neutral" onClick={setSerbian}>
          {t('home:langButton.sr')}
        </button>
      </div>
    </div>
  );
}
