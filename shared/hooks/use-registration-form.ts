import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { registrationSchema } from '@/shared/schema';

export const useRegistrationForm = () => {
  return useForm({
    resolver: yupResolver(registrationSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });
};
