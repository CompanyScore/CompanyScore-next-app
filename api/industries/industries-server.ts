export const revalidate = 60 * 60 * 24;

export async function GetIndustriesServer() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACK}/industry`, {
      next: { revalidate: 60 },
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
