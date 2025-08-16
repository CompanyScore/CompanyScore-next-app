'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface LogoutButtonProps {
  variant?: 'button' | 'text';
}

export function LogoutButton({ variant = 'button' }: LogoutButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/auth/logout', {
        method: 'POST',
      });

      if (response.ok) {
        router.push('/login');
      }
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (variant === 'text') {
    return (
      <button
        onClick={handleLogout}
        disabled={isLoading}
        className="text-red-500 hover:bg-red-50 rounded px-2 py-1 cursor-pointer w-full text-left"
      >
        {isLoading ? 'Logging out...' : 'Logout'}
      </button>
    );
  }

  return (
    <button
      onClick={handleLogout}
      disabled={isLoading}
      className="btn btn-sm btn-outline btn-error"
    >
      {isLoading ? 'Logging out...' : 'Logout'}
    </button>
  );
}
