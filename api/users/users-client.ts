import { useInfiniteQuery } from '@tanstack/react-query';
import { useApi } from '@/api';

export type GetUsersParams = {
  page?: number;
  limit?: number;
  search?: string;
  role?: string;
  enabled?: boolean;
};

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

export const GetAllUsersClient = ({ search, enabled }: GetUsersParams) => {
  return useInfiniteQuery({
    queryKey: ['users', { search }],
    queryFn: async ({
      pageParam = 1,
      signal,
    }: {
      pageParam?: number;
      signal?: AbortSignal;
    }) => {
      const { data } = await useApi.get('/users', {
        signal,
        params: {
          isDeleted: false,
          page: pageParam,
          limit: 10,
          ...(search ? { search } : {}),
        },
      });

      return data;
    },
    enabled: !!enabled,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    initialPageParam: 1,
    getNextPageParam: lastPage => {
      const totalPages = Math.ceil(lastPage.total / lastPage.limit);
      return lastPage.page < totalPages ? lastPage.page + 1 : undefined;
    },
  });
};
