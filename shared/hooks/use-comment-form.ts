import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { commentSchema } from '@/shared/schema/commentSchema';

export const useCommentForm = () => {
  return useForm({
    resolver: yupResolver(commentSchema),
    defaultValues: {
      comment: '',
      position: '',
      rating: 0,
    },
  });
};
