import { useApi } from '@/api';
import { useQuery } from '@tanstack/react-query';

type UserType = {
  id: string;
  name: string;
  avatar: string;
  position: {
    id: string;
    title: number;
  };
  description: string;
  commentsIds: string[];
  createDate: Date;
  email: string;
};

type GetUsersParams = {
  page?: number;
  limit?: number;
};

type GetUsersResponse = {
  users: UserType[];
  page: number;
  total: number;
  limit: number;
};

export const useUsers = (params: GetUsersParams = {}) => {
  return useQuery<GetUsersResponse>({
    queryKey: ['users', params],
    queryFn: async () => {
      const { data } = await useApi.get(`/users`, {
        params: {
          isDeleted: false,
          page: params.page,
          limit: params.limit,
        },
      });
      return data;
    },
  });
};

export const useUser = (id: string) => {
  return useQuery<UserType>({
    queryKey: ['user', id],
    queryFn: async () => {
      const { data } = await useApi.get(`/users/${id}`);
      return data;
    },
    enabled: !!id, // не запрашиваем, если id пустой
  });
};
