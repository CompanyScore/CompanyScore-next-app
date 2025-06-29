import { useRegistrationForm } from '@/hook/use-registration-form';
import { Button, Input, Modal, Title } from '@/ui';
import { SubmitHandler } from 'react-hook-form';

type RegistrationFormData = {
  name: string;
  email: string;
  password: string;
};

export const RegistrationForm = () => {
  const {
    setValue,
    watch,
    handleSubmit,
    formState: { errors },
    reset,
  } = useRegistrationForm();

  const onSubmit: SubmitHandler<RegistrationFormData> = async data => {
    try {
      const formData = new FormData();

      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('password', data.password);

      console.log(formData);
    } finally {
      resetForm();
    }
  };

  const closeModal = () => {
    const modal = document.getElementById('registration') as HTMLInputElement;
    if (modal) {
      modal.checked = false;
    }
  };

  const resetForm = () => {
    reset();
    closeModal();
  };

  return (
    <Modal id="registration">
      <Title>Регистрация</Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-5">
          <div className="relative">
            <Input
              placeholder="Укажите имя"
              type="text"
              value={watch('name')}
              onChange={val => setValue('name', String(val))}
            />
            <p className="text-error text-sm absolute">
              {errors.name?.message}
            </p>
          </div>
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

          <Button className="btn-primary mt-2">Зарегестрироваться</Button>
        </div>
      </form>
    </Modal>
  );
};
