import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useApi } from '@/api';

export type PositionCategoryType = {
  id: string
  title: string
};

// Получение категорий 
export const usePositionCategories = () => {
  return useQuery<PositionCategoryType[]>({
    queryKey: ['position-categories'],
    queryFn: async () => {
      const { data } = await useApi.get('/position-categories')
      return data
    },
    staleTime: 1000 * 60 * 5, // хранение в кэше 5 минут
  });
};

export const usePositionCategoryApi = () => {
  const queryClient = useQueryClient()
  const { data: categories = [], isLoading: loading } = usePositionCategories()

  return {
    categories,
    loading,
    getCategories: async () => { // Оставили функцию getCategories.
      await queryClient.invalidateQueries({ queryKey: ['position-categories'] })
    },
  }
}
