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

export const usePositionsApi = () => {
  const { data, isLoading } = useQuery<PositionType[]>({
    queryKey: ['positions'],
    queryFn: async () => {
      const { data } = await useApi.get('/positions');
      return data;
    },
    staleTime: 1000 * 60 * 5, // 5 минут
  });

  return {
    positions: data ?? [],
    isPositionsLoading: isLoading,
  };
};

export const useCategoriesApi = () => {
  const { data, isLoading } = useQuery<PositionCategoryType[]>({
    queryKey: ['position-categories'],
    queryFn: async () => {
      const { data } = await useApi.get('/position-categories');
      return data;
    },
    staleTime: 1000 * 60 * 5, // 5 минут
  });

  return {
    categories: data ?? [],
    isCategoriesLoading: isLoading,
  };
};

export const usePositionsAndCategoriesApi = () => {
  const { positions, isPositionsLoading } = usePositionsApi();
  const { categories, isCategoriesLoading } = useCategoriesApi();

  return {
    positions,
    categories,
    isPositionsLoading,
    isCategoriesLoading,
  };
};
