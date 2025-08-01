// api/client/fetchUsersCSR.ts
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { useApi } from '@/api';

// types/params.ts
export type GetUsersParams = {
  page?: number;
  limit?: number;
  search?: string;
  role?: string;
  enabled?: boolean;
};

// types/api.ts
export type GetUsersResponse = {
  users: {
    id: string;
    name: string;
    avatar: string;
    position: {
      id: string;
      title: string;
    };
    description: string;
    commentsIds: string[];
    createDate: Date;
  }[];
  total: number;
};

export const useUsersCSR = (params: GetUsersParams = {}) => {
  const { page = 1, limit = 10, search, role, enabled } = params;

  return useQuery<GetUsersResponse>({
    queryKey: ['users', { page, limit, search, role }], // ✅ влияет на кэш
    queryFn: async ({ signal }) => {
      const { data } = await useApi.get(`/users`, {
        signal,
        params: {
          isDeleted: false,
          page,
          limit,
          ...(search ? { search } : {}),
          ...(role ? { role } : {}),
        },
      });
      return data;
    },
    enabled: !!enabled,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });
};

export const useUsersInfinity = () => {
  return useInfiniteQuery({
    queryKey: ['users'],
    queryFn: async ({
      pageParam = 1,
      signal,
    }: {
      pageParam?: number;
      signal?: AbortSignal;
    }) => {
      const { data } = await useApi.get('/users', {
        signal,
        params: { page: pageParam, limit: 10 },
      });
      return data;
    },
    initialPageParam: 1,
    getNextPageParam: lastPage => {
      const totalPages = Math.ceil(lastPage.total / lastPage.limit);
      return lastPage.page < totalPages ? lastPage.page + 1 : undefined;
    },
  });
};
