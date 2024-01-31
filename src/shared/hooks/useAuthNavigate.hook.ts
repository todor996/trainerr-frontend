import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { RootState } from '@store/index.store.ts';

export const useAuthNavigate = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { token, isTrainer } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    const currentPath = location.pathname;

    console.log(token, isTrainer);
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
};
