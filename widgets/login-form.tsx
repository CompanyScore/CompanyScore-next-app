import { useLoginForm } from '@/hook';
import { Button, Input, Modal, Title, useToast } from '@/ui';
import { SubmitHandler } from 'react-hook-form';
import { useAuthStore } from '@/store';

type LoginFormData = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const { loginUser } = useAuthStore();

  const {
    setValue,
    watch,
    handleSubmit,
    formState: { errors },
    reset,
  } = useLoginForm();

  const toast = useToast();

  const onSubmit: SubmitHandler<LoginFormData> = async data => {
    try {
      const formData = new FormData();

      formData.append('email', data.email);
      formData.append('password', data.password);

      await loginUser(formData);
    } catch {
      const error = useAuthStore.getState().error;
      toast.error(error || 'Ошибка');
    } finally {
      resetForm();
    }
  };

  const closeModal = () => {
    const modal = document.getElementById('login') as HTMLInputElement;
    if (modal) {
      modal.checked = false;
    }
  };

  const resetForm = () => {
    reset();
    closeModal();
  };

  return (
    <Modal id="login">
      <Title>Авторизация</Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-5">
          <div className="relative">
            <Input
              placeholder="Укажите email"
              type="text"
              value={watch('email')}
              onChange={val => setValue('email', String(val))}
            />
            <p className="text-error text-sm absolute">
              {errors.email?.message}
            </p>
          </div>
          <div className="relative">
            <Input
              placeholder="Укажите пароль"
              type="password"
              value={watch('password')}
              onChange={val => setValue('password', String(val))}
            />
            <p className="text-error text-sm absolute">
              {errors.password?.message}
            </p>
          </div>

          <Button className="btn-primary mt-2">Авторизация</Button>
        </div>
      </form>
    </Modal>
  );
};
