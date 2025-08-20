import { useInfiniteQuery } from '@tanstack/react-query';
import { useApi } from '../use-api';

export type GetCompaniesParams = {
  search?: string;
  countryId?: string;
  cityId?: string;
};

export const GetCompaniesClient = ({
  search,
  countryId,
  cityId,
}: GetCompaniesParams) => {
  return useInfiniteQuery({
    queryKey: ['companies', search, countryId, cityId],
    queryFn: async ({
      pageParam = 1,
      signal,
    }: {
      pageParam?: number;
      signal?: AbortSignal;
    }) => {
      const { data } = await useApi.get(`/companies`, {
        signal,
        params: {
          isDeleted: false,
          limit: 10,
          page: pageParam,
          ...(search ? { name: search } : {}),
          ...(countryId ? { country: countryId } : {}),
          ...(cityId ? { city: cityId } : {}),
        },
      });

      return data;
    },
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    initialPageParam: 1,
    getNextPageParam: lastPage => {
      const totalPages = Math.ceil(lastPage.total / lastPage.limit);
      return lastPage.page < totalPages ? lastPage.page + 1 : undefined;
    },
  });
};
