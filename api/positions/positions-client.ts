import { useQuery } from '@tanstack/react-query';
import { useApi } from '@/api';

export type PositionCategoryType = {
  id: string;
  title: string;
};

export type PositionType = {
  id: string;
  title: string;
  category: PositionCategoryType;
};

type PositionsAndCategoriesResponse = {
  positions: PositionType[];
  categories: PositionCategoryType[];
};

export const usePositionsAndCategoriesApi = () => {
  const { data, isLoading, refetch } = useQuery<PositionsAndCategoriesResponse>(
    {
      queryKey: ['positions-and-categories'],
      queryFn: async () => {
        const { data } = await useApi.get('/positions/with-categories'); // новый эндпоинт
        return data;
      },
      staleTime: 1000 * 60 * 5, // 5 минут
    },
  );

  return {
    positions: data?.positions ?? [],
    categories: data?.categories ?? [],
    loading: isLoading,
    fetchData: refetch, // принудительно перезапускает запрос
  };
};
