import { useInfiniteQuery } from '@tanstack/react-query';
import { useApi } from '../use-api';

export type GetCompaniesParams = {
  companyName?: string;
  countryId?: string;
  cityId?: string;
  stars?: string;
};

export const GetCompaniesClient = ({
  companyName,
  countryId,
  cityId,
  stars,
}: GetCompaniesParams) => {
  return useInfiniteQuery({
    queryKey: ['companies', companyName, countryId, cityId, stars],
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
          ...(companyName ? { name: companyName } : {}),
          ...(countryId ? { country: countryId } : {}),
          ...(cityId ? { city: cityId } : {}),
          ...(stars ? { rating: stars } : {}),
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
