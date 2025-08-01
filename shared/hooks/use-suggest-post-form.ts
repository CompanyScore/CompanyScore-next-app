import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { suggestPostSchema } from '@/shared/schema/suggestPostSchema';

export const useSuggestPostForm = () => {
  return useForm({
    resolver: yupResolver(suggestPostSchema),
    defaultValues: {
      name: '',
      description: '',
    },
  });
};
