import './Settings.style.css';

import { Link } from 'react-router-dom';

export default function Settings(): JSX.Element {
  return (
    <div className="flex flex-col">
      Hello from <b>Settings Page!</b>
      <div className="join">
        <Link className="btn join-item" to="/">
          Home
        </Link>
        <Link className="btn join-item" to="/settings">
          Settings
        </Link>
      </div>
    </div>
  );
}
