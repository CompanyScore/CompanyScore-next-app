'use client';

import { useLoginForm, useRegistrationForm } from '@/hook';
import { useAuthStore } from '@/store';
import { Button, Input, useToast } from '@/ui';
import { NewModal } from '@/ui/new-modal';
import { useEffect, useState } from 'react';
import { SubmitHandler } from 'react-hook-form';

type Auth = {
  type: string;
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

type LoginFormData = {
  email: string;
  password: string;
};

type RegistrationFormData = {
  name: string;
  email: string;
  password: string;
};

export function Auth({ type, visible, setVisible }: Auth) {
  const [isLoginMode, setLoginMode] = useState(type === 'login');

  return (
    <NewModal visible={visible} setVisible={setVisible}>
      <h4 className="text-xl font-bold text-center mb-7">Добро пожаловать</h4>
      <div>
        <LoginForm resetForm={visible} visible={isLoginMode} />
        <RegistrationForm resetForm={visible} visible={!isLoginMode} />
      </div>
      <div className="flex justify-end my-3 text-sm">
        <button
          onClick={() => {
            setLoginMode(!isLoginMode);
          }}
        >
          {isLoginMode ? 'Зарегистрироваться' : 'Авторизоваться'}
        </button>
      </div>
      <div className="flex flex-col items-center border-t">
        <p className="mt-2 mb-4">
          {isLoginMode
            ? 'Авторизоваться с помощью'
            : 'Зарегистрироваться с помощью'}
        </p>
        <div className="flex justify-center gap-5">
          <img className="w-[35px]" src="/icons/linkedin.svg"></img>
          <img className="w-[35px]" src="/icons/github.svg"></img>
        </div>
      </div>
    </NewModal>
  );
}

function LoginForm({
  resetForm,
  visible,
}: {
  resetForm: boolean;
  visible: boolean;
}) {
  const { loginUser } = useAuthStore();

  const {
    setValue,
    watch,
    handleSubmit,
    formState: { errors },
    reset,
    clearErrors,
  } = useLoginForm();

  useEffect(() => {
    if (!resetForm) {
      reset();
    }
  }, [resetForm]);

  const toast = useToast();

  const onSubmit: SubmitHandler<LoginFormData> = async data => {
    try {
      await loginUser({
        email: data.email,
        password: data.password,
      });
    } catch {
      const error = useAuthStore.getState().error;
      toast.error(error || 'Ошибка');
    } finally {
      reset();
    }
  };

  const handleValueChange = (type: 'email' | 'password', value: string) => {
    setValue(type, value);
    clearErrors(type);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`${visible ? 'flex' : 'hidden'} flex-col gap-5`}
    >
      <div className="relative">
        <Input
          placeholder="Укажите email"
          type="text"
          value={watch('email')}
          onChange={val => handleValueChange('email', String(val))}
          className={`${errors.email ? 'input-error' : ''}`}
        />
        <p className="text-error text-xs absolute">{errors.email?.message}</p>
      </div>
      <div className="relative">
        <Input
          placeholder="Укажите пароль"
          type="password"
          value={watch('password')}
          onChange={val => handleValueChange('password', String(val))}
          className={`${errors.password ? 'input-error' : ''}`}
        />
        <p className="text-error text-xs absolute">
          {errors.password?.message}
        </p>
      </div>

      <Button className="btn-primary mt-2 text-base">Авторизоваться</Button>
    </form>
  );
}

function RegistrationForm({
  resetForm,
  visible,
}: {
  resetForm: boolean;
  visible: boolean;
}) {
  const { registrationUser } = useAuthStore();

  const {
    setValue,
    watch,
    handleSubmit,
    formState: { errors },
    reset,
    clearErrors,
  } = useRegistrationForm();

  useEffect(() => {
    if (!resetForm) {
      reset();
    }
  }, [resetForm]);

  const toast = useToast();

  const onSubmit: SubmitHandler<RegistrationFormData> = async data => {
    try {
      await registrationUser({
        email: data.email,
        password: data.password,
        name: data.name,
      });
    } catch {
      const error = useAuthStore.getState().error;
      toast.error(error || 'Ошибка');
    } finally {
      reset();
    }
  };

  const handleValueChange = (
    type: 'email' | 'password' | 'name',
    value: string,
  ) => {
    setValue(type, value);
    clearErrors(type);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`${visible ? 'flex' : 'hidden'} flex-col gap-5`}
    >
      <div className="relative">
        <Input
          placeholder="Укажите имя"
          type="text"
          value={watch('name')}
          onChange={val => handleValueChange('name', String(val))}
          className={`${errors.name ? 'input-error' : ''}`}
        />
        <p className="text-error text-xs absolute">{errors.name?.message}</p>
      </div>
      <div className="relative">
        <Input
          placeholder="Укажите email"
          type="text"
          value={watch('email')}
          onChange={val => handleValueChange('email', String(val))}
          className={`${errors.email ? 'input-error' : ''}`}
        />
        <p className="text-error text-xs absolute">{errors.email?.message}</p>
      </div>
      <div className="relative">
        <Input
          placeholder="Укажите пароль"
          type="password"
          value={watch('password')}
          onChange={val => handleValueChange('password', String(val))}
          className={`${errors.password ? 'input-error' : ''}`}
        />
        <p className="text-error text-xs absolute">
          {errors.password?.message}
        </p>
      </div>

      <Button className="btn-primary mt-2 text-base">Зарегистрироваться</Button>
    </form>
  );
}
