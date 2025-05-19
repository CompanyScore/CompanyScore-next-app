import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { profileEditSchema } from '@/utils/profileEditSchema';

export const useProfileEditForm = () => {
  return useForm({
    resolver: yupResolver(profileEditSchema),
    defaultValues: {
      name: '',
      position: '',
      description: '',
      avatar: undefined,
    },
  });
};
