import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useApi } from '@/api';

// Типы
export type PositionCategoryType = {
  id: string;
  title: string;
};

export type PositionType = {
  id: string;
  title: string;
  category: PositionCategoryType;
};

// Категории
const usePositionCategories = () =>
  useQuery<PositionCategoryType[]>({
    queryKey: ['position-categories'],
    queryFn: async () => {
      const { data } = await useApi.get('/position-categories'); // бэк: GET /position-categories
      return data;
    },
    staleTime: 1000 * 60 * 5, // 5 минут
  });

export const usePositionCategoryApi = () => {
  const queryClient = useQueryClient();
  const { data: categories = [], isLoading: loading } = usePositionCategories();

  return {
    categories,
    loading,
    getCategories: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['position-categories'],
      });
    },
  };
};

// Позиции
export const usePositionApi = () => {
  const {
    data: positions = [],
    isLoading: loading,
    refetch: getPositions,
  } = useQuery<PositionType[]>({
    queryKey: ['positions'],
    queryFn: async () => {
      const { data } = await useApi.get('/positions'); // бэк: GET /positions
      return data;
    },
    staleTime: 1000 * 60 * 5,
  });

  return {
    positions,
    loading,
    getPositions,
  };
};
