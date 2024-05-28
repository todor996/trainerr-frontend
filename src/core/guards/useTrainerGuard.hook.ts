import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuthStore } from '@modules/auth/store/auth.store';

export function useTrainerGuard() {
  const navigate = useNavigate();
  const location = useLocation();

  const { token, isTrainer } = useAuthStore();

  useEffect(() => {
    // TODO: Implement this properly
    // const currentPath = location.pathname;

    console.log('useTrainerGuard');
  }, [token, isTrainer, navigate, location.pathname]);
}
