import { useQuery } from '@tanstack/react-query';
import { useApi } from '@/api';

type PositionCategoryType = {
  id: string
  name: string
}

type PositionType = {
  id: string
  title: string
  category: PositionCategoryType
}

// хук вместо Zustand стора
export const usePositionApi = () => {
  const {
    data: positions = [],
    isLoading: loading,
    refetch: getPositions, 
  } = useQuery<PositionType[]>({
    queryKey: ['positions'],
    queryFn: async () => {
      const { data } = await useApi.get('/positions')
      return data
    },
  })

  return {
    positions,
    loading,
    getPositions,
  }
}