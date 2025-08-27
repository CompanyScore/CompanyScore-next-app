import { useQuery } from '@tanstack/react-query';
import "dotenv"

const API_URL = process.env.NEXT_PUBLIC_BACK;

async function fetcher<T>(url: string): Promise<T> {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`fetch failed: ${res.status} ${await res.text()}`);
  }
  return res.json();
}

// Хук для категорий
export function GetPositionCategoriesServer() {
  return useQuery({
    queryKey: ['position-categories'],
    queryFn: () => fetcher(`${API_URL}/position-categories`),
    staleTime: 1000 * 60 * 60 * 24, // 1 день кешируются
  });
}

// Хук для позиций
export function GetPositionsServer() {
  return useQuery({
    queryKey: ['positions'],
    queryFn: () => fetcher(`${API_URL}/positions`),
    staleTime: 1000 * 60 * 60 * 24,
  });
}