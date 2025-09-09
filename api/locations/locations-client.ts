import { useQuery } from '@tanstack/react-query';
import { useApi } from '@/api';

export type CityType = {
  id: string;
  name: string;
};

export type CountryType = {
  id: string;
  name: string;
  cities: CityType[];
};

export const useCountriesApi = () => {
  const { data, isLoading } = useQuery<CountryType[]>({
    queryKey: ['countries'],
    queryFn: async () => {
      const { data } = await useApi.get('/country');
      return data;
    },
    staleTime: 1000 * 60 * 5, // 5 минут
  });

  return {
    countries: data ?? [],
    isCountriesLoading: isLoading,
  };
};
