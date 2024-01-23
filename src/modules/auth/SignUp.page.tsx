import useLazyLoadResourceHook from '@shared/hooks/lazyLoadResource.hook';
import { SignUp as SignUpComponent } from './components/SignUp/SignUp.component';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '@store/index.store.ts';
import { useEffect } from 'react';

export default function SignUp(): JSX.Element {
  useLazyLoadResourceHook({ folderName: 'auth', namespace: 'auth' });
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

  return <SignUpComponent />;
}
