export const revalidate = 60;

export async function GetAllUsersServer() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACK}/users/public?page=1&limit=5`,
      {
        next: { revalidate: 60 },
      },
    );

    if (!res.ok) {
      throw new Error(`Ошибка ${res.status}: ${res.statusText}`);
    }

    return await res.json();
  } catch (error) {
    console.error('Ошибка при загрузке пользователей (SSR):', error);
    return null;
  }
}
