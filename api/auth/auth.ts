// src/queries/auth.ts
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { GetProfile } from '../';
import { useApi } from '@/api';

type AuthData = { email: string; password: string; name?: string };

export function useAuth(enabled = true) {
  const qc = useQueryClient();
  const profileQ = GetProfile(enabled);

  const register = useMutation({
    mutationFn: (data: AuthData) =>
      useApi.post('/auth/register', data, { withCredentials: true }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['profile'] }),
  });

  const login = useMutation({
    mutationFn: (data: AuthData) =>
      useApi.post('/auth/login', data, { withCredentials: true }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['profile'] }),
  });

  const logout = useMutation({
    mutationFn: () =>
      useApi.post('/auth/logout', {}, { withCredentials: true }),
    onSuccess: () => {
      qc.setQueryData(['profile'], null); // мгновенно гасим профиль в UI
      // при желании: qc.clear();  // жёсткая очистка всего кэша
    },
  });

  return {
    isAuth: !!profileQ.data,
    profile: profileQ.data,
    profileQuery: profileQ,
    register,
    login,
    logout,
  };
}
