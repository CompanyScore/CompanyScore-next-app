import { useInfiniteQuery } from '@tanstack/react-query';
import { useApi } from '@/api';

type Interaction = 'test' | 'interview' | 'internship' | 'work';

export type GetCommentsParams = {
  enabled?: boolean;
  sort?: 'date' | 'rating';
  companyName?: string;
  countryId?: string;
  cityId?: string;
  userPositionCategoryId?: string;
  userPositionId?: string;
  interaction?: Interaction[];
  isAnonym?: string;
};

export const GetAllCommentsClient = ({
  enabled,
  sort = 'date',
  companyName,
  countryId,
  cityId,
  userPositionCategoryId,
  userPositionId,
  interaction,
  isAnonym,
}: GetCommentsParams) => {
  const interactionKey = interaction?.slice().sort().join(',') || undefined;

  return useInfiniteQuery({
    queryKey: [
      'comments',
      {
        sort,
        companyName,
        countryId,
        cityId,
        userPositionCategoryId,
        userPositionId,
        interaction: interactionKey,
        isAnonym,
      },
    ],
    queryFn: async ({ pageParam = 1, signal }) => {
      const { data } = await useApi.get('/comments', {
        signal,
        params: {
          page: pageParam,
          limit: 2,
          ...(companyName ? { companyName } : {}),
          ...(countryId ? { countryId } : {}),
          ...(cityId ? { cityId } : {}),
          ...(userPositionCategoryId ? { userPositionCategoryId } : {}),
          ...(userPositionId ? { userPositionId } : {}),
          ...(interactionKey?.length ? { interaction: interactionKey } : {}),
          ...(isAnonym !== undefined ? { isAnonym } : {}),
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
