'use client';

import { useState, useEffect, useCallback } from 'react';
import { useApi } from '@/api/use-api';

export function useAuth() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  const checkAuth = useCallback(async () => {
    setLoading(true);
    try {
      await useApi.get('/auth/me'); // любой защищённый endpoint
      setIsLoggedIn(true);
    } catch {
      setIsLoggedIn(false);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return {
    isLoggedIn,
    loading,
    checkAuth, // если хочешь вызывать вручную (после login/logout)
  };
}
