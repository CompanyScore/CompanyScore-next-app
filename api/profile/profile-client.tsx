// src/queries/profile.ts
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useApi } from '@/api';

export type ProfileType = {
  id?: string;
  name?: string;
  avatar?: string;
  position?: string;
  description?: string;
  comments?: string[];
  email?: string;
};

export const GetProfile = (enabled = true) =>
  useQuery({
    queryKey: ['profile'],
    queryFn: async ({ signal }) => {
      const { data } = await useApi.get<ProfileType>('/users/profile', {
        signal,
      });
      return data;
    },
    enabled,
    retry: false,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });

export const useUpdateProfileMutation = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: async (formData: FormData) => {
      // бек сейчас возвращает строку "Пользователь обновлен"
      await useApi.patch('/users', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
    },
    onSuccess: async () => {
      // после апдейта просто рефетчим профиль
      await qc.invalidateQueries({ queryKey: ['profile'] });
    },
  });
};
