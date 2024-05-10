import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { RootState } from '@store/index.store.ts';

export function useTrainerGuard() {
  const navigate = useNavigate();
  const location = useLocation();

  const { token, isTrainer } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    // TODO: Implement this properly
    // const currentPath = location.pathname;

    console.log('useTrainerGuard');
  }, [token, isTrainer, navigate, location.pathname]);
}
