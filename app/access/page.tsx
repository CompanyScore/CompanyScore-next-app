'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Container } from '@/ui';

export default function AccessPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = () => {
    if (password === '777888999') {
      document.cookie = `hasAccess=true; path=/; max-age=3600`;
      router.push('/comments');
    } else {
      setError('Неверный пароль');
    }
  };

  return (
    <Container>
      <div className="flex flex-col gap-4 max-w-sm mx-auto mt-10">
        <input
          type="password"
          placeholder="Введите пароль"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="border p-2 rounded"
        />
        {error && <p className="text-red-500">{error}</p>}
        <button
          onClick={handleSubmit}
          className="bg-black text-white py-2 px-4 rounded"
        >
          Войти
        </button>
      </div>
    </Container>
  );
}
