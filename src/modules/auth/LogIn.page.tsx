import useLazyLoadResourceHook from '@shared/hooks/lazyLoadResource.hook';
import { LogIn as LogInComponent } from './components/LogIn/LogIn.component';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '@store/index.store.ts';

export default function LogIn(): JSX.Element {
  const navigate = useNavigate();
  const { token, isTrainer } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (!token) {
      return;
    }
    if (isTrainer) {
      navigate('/');
    }
    navigate('/');
  }, [token, isTrainer, navigate]);
  useLazyLoadResourceHook({ folderName: 'auth', namespace: 'auth' });

  return <LogInComponent />;
}
