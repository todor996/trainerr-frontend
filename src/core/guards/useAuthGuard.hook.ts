import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuthStore } from '@modules/auth/store/auth.store';

export function useAuthGuard() {
  const navigate = useNavigate();
  const location = useLocation();

  const { token, isTrainer } = useAuthStore();

  useEffect(() => {
    const currentPath = location.pathname;

    if (!token) {
      if (!currentPath.startsWith('/auth')) {
        navigate('/auth');
      }

      return;
    }

    if (isTrainer) {
      if (!currentPath.startsWith('/trainer')) {
        navigate('/trainer');
      }

      return;
    }

    if (!currentPath.startsWith('/client')) {
      navigate('/client');
    }
  }, [token, isTrainer, navigate, location.pathname]);
}
