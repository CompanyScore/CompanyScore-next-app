import { useInfiniteQuery } from '@tanstack/react-query';
import { useApi } from '@/api';

export type GetCommentsParams = {
  companyId?: string;
  search?: string;
  enabled?: boolean;
  sort?: 'date' | 'rating';
  userPositionCategoryId?: string;
  userPositionId?: string;
};

export const GetAllCommentsClient = ({
  companyId,
  search,
  enabled,
  sort = 'date',
  userPositionCategoryId,
  userPositionId,
}: GetCommentsParams) => {
  return useInfiniteQuery({
    queryKey: [
      'comments',
      { companyId, search, sort, userPositionCategoryId, userPositionId },
    ],
    queryFn: async ({ pageParam = 1, signal }) => {
      const { data } = await useApi.get('/comments', {
        signal,
        params: {
          page: pageParam,
          limit: 2,
          ...(companyId ? { companyId } : {}),
          ...(search ? { search } : {}),
          ...(userPositionCategoryId ? { userPositionCategoryId } : {}),
          ...(userPositionId ? { userPositionId } : {}),
          sort,
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
