export const revalidate = 60;

export async function GetAllCommentsServer() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACK}/comments/public?page=1&limit=5`,
      {
        next: { revalidate: 60 },
      },
    );

    if (!res.ok) {
      throw new Error(`Ошибка ${res.status}: ${res.statusText}`);
    }

    const json = await res.json();

    return json;
  } catch (error) {
    console.error('Ошибка при загрузке комментариев (SSR):', error);
    return null;
  }
}
