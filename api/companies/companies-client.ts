import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { useApi } from '../use-api';

type CompaniesFilters = {
  countryId?: string | null;
  cityId?: string | null;
  search?: string | null;
};

const pickDefined = (obj: Record<string, unknown>) =>
  Object.fromEntries(
    Object.entries(obj).filter(
      ([, v]) => v !== undefined && v !== null && v !== '',
    ),
  );

export const useCompaniesInfinity = () => {
  return useInfiniteQuery({
    queryKey: ['companies'],
    queryFn: async ({
      pageParam = 1,
      signal,
    }: {
      pageParam?: number;
      signal?: AbortSignal;
    }) => {
      const { data } = await useApi.get(`/companies/`, {
        signal,
        params: {
          limit: 10,
          page: pageParam,
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

export const GetCompanyOptions = (filters: CompaniesFilters = {}) => {
  return useQuery({
    queryKey: ['companyOptions', filters],
    queryFn: async () => {
      const params = pickDefined({
        limit: 50, // чтобы не тащить все
        page: 1,
        countryId: filters.countryId,
        cityId: filters.cityId,
        search: filters.search,
      });

      const { data } = await useApi.get(`/companies`, { params });
      // ожидается, что data.items — массив компаний с id/name
      return (data.items || []).map((c: { id: string; name: string }) => ({
        value: c.id,
        label: c.name,
      }));
    },
    enabled: true, // всегда можно, но можно привязать к выбранной стране/городу
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });
};
