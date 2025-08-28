export const revalidate = 60 * 60 * 24; // 1 день

export async function GetPositionCategoriesServer() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACK}/position-categories`,
    {
      next: { revalidate },
    },
  );

  if (!res.ok) throw new Error('position-categories failed');
  return res.json();
}

export async function GetPositionsServer() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACK}/positions`, {
    next: { revalidate },
  });

  if (!res.ok) throw new Error('positions failed');
  return res.json();
}