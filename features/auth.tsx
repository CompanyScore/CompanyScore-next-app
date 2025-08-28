'use client';

import { useLoginForm, useRegistrationForm } from '@/shared/hooks';
import { useAuth } from '@/api';
import { Button, Input, Loading } from '@/shared/ui';
import { NewModal } from '@/shared/ui/new-modal';
import { useEffect, useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import classNames from 'classnames';

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
  const { isAuth, login, register } = useAuth(true);
  const loading = login.isPending || register.isPending;

  const redirectToLinkedin = async () => {
    const returnUrl = `${process.env.NEXT_PUBLIC_FRONT}/profile`;
    window.location.href = `${process.env.NEXT_PUBLIC_BACK}/auth/linkedin?returnUrl=${encodeURIComponent(returnUrl)}`;
  };

  useEffect(() => {
    if (isAuth) {
      setVisible(false);
    }
  }, [isAuth]);

  return (
    <NewModal visible={visible} setVisible={setVisible}>
      {loading && (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-50">
          <Loading />
        </div>
      )}
      <h4 className="text-xl font-bold text-center mb-7">
        {isLoginMode ? 'Авторизация' : 'Регистрация'}
      </h4>
      <div>
        <LoginForm visible={isLoginMode && visible} />
        <RegistrationForm visible={!isLoginMode && visible} />
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
          <img
            className="w-[35px]"
            src="/icons/linkedin.svg"
            alt="linkedin"
            onClick={redirectToLinkedin}
          ></img>
          <img className="w-[35px]" src="/icons/github.svg" alt="github"></img>
        </div>
      </div>
    </NewModal>
  );
}

function LoginForm({ visible }: { visible: boolean }) {
  const { login } = useAuth(false);

  const {
    setValue,
    watch,
    handleSubmit,
    formState: { errors },
    reset,
    clearErrors,
    setError,
  } = useLoginForm();

  useEffect(() => {
    reset();
  }, [visible]);

  useEffect(() => {
    const errMsg =
      (login.error as any)?.response?.data?.message ||
      (login.error as Error | undefined)?.message;
    if (errMsg) {
      setError('email', { type: 'manual', message: errMsg });
      setError('password', { type: 'manual', message: errMsg });
    }
  }, [login.error, setError]);

  const onSubmit: SubmitHandler<LoginFormData> = async data => {
    await login.mutateAsync({ email: data.email, password: data.password });
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
          className={classNames({ 'input-error': errors.email })}
        />
        <p className="text-error text-xs absolute">{errors.email?.message}</p>
      </div>
      <div className="relative">
        <Input
          placeholder="Укажите пароль"
          type="password"
          value={watch('password')}
          onChange={val => handleValueChange('password', String(val))}
          className={classNames({ 'input-error': errors.password })}
        />
        <p className="text-error text-xs absolute">
          {errors.password?.message}
        </p>
      </div>

      <Button className="btn-primary mt-2 text-base" disabled={login.isPending}>
        {login.isPending ? 'Входим…' : 'Авторизоваться'}
      </Button>
    </form>
  );
}

function RegistrationForm({ visible }: { visible: boolean }) {
  const { register } = useAuth(false);

  const {
    setValue,
    watch,
    handleSubmit,
    formState: { errors },
    reset,
    clearErrors,
    setError,
  } = useRegistrationForm();

  useEffect(() => {
    reset();
  }, [visible]);

  useEffect(() => {
    const errMsg =
      (register.error as any)?.response?.data?.message ||
      (register.error as Error | undefined)?.message;
    if (errMsg) {
      setError('name', { type: 'manual', message: errMsg });
      setError('email', { type: 'manual', message: errMsg });
      setError('password', { type: 'manual', message: errMsg });
    }
  }, [register.error, setError]);

  const onSubmit: SubmitHandler<RegistrationFormData> = async data => {
    await register.mutateAsync({
      email: data.email,
      password: data.password,
      name: data.name,
    });
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
          className={classNames({ 'input-error': errors.name })}
        />
        <p className="text-error text-xs absolute">{errors.name?.message}</p>
      </div>
      <div className="relative">
        <Input
          placeholder="Укажите email"
          type="text"
          value={watch('email')}
          onChange={val => handleValueChange('email', String(val))}
          className={classNames({ 'input-error': errors.email })}
        />
        <p className="text-error text-xs absolute">{errors.email?.message}</p>
      </div>
      <div className="relative">
        <Input
          placeholder="Укажите пароль"
          type="password"
          value={watch('password')}
          onChange={val => handleValueChange('password', String(val))}
          className={classNames({ 'input-error': errors.password })}
        />
        <p className="text-error text-xs absolute">
          {errors.password?.message}
        </p>
      </div>

      <Button
        className="btn-primary mt-2 text-base"
        disabled={register.isPending}
      >
        {register.isPending ? 'Регистрируем…' : 'Зарегистрироваться'}
      </Button>
    </form>
  );
}
