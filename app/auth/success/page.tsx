'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function AuthSuccess() {
  const router = useRouter();
  const params = useSearchParams();
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const accessToken = params.get('accessToken');
    const refreshToken = params.get('refreshToken');
    const userId = params.get('userId');

    console.log('AuthSuccess query:', { accessToken, refreshToken, userId });

    if (accessToken && refreshToken) {
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      if (userId) localStorage.setItem('userId', userId);
      setSaved(true);
    } else {
      router.replace('/login');
    }
  }, []);

  useEffect(() => {
    if (saved) {
      const timeout = setTimeout(() => {
        router.replace('/profile');
      }, 300); // чуть подождать, чтобы точно записалось

      return () => clearTimeout(timeout);
    }
  }, [saved]);

  return null;
}
