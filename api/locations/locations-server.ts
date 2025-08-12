export const revalidate = 60 * 60 * 24;

export async function GetLocationsServer() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACK}/country`, {
      next: { revalidate },
    });

    if (!res.ok) {
      throw new Error(`Ошибка ${res.status}: ${res.statusText}`);
    }

    return await res.json();
  } catch (error) {
    console.error('Ошибка при загрузке комментариев (SSR):', error);
    return null;
  }
}
