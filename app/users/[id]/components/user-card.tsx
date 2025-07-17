'use client';

import { useParams } from 'next/navigation';
import { useUser } from '@/store/api/user.api';

export function UserCard() {
  const params = useParams();
  const id = params?.id as string;

  const { data: user, isLoading } = useUser(id);

  if (isLoading) {
    return (
      <div className="skeleton h-[500px] w-[400px] lg:w-[1280px] m-auto"></div>
    );
  }

  if (!user) {
    return <p className="text-center mt-10">Пользователь не найден</p>;
  }

  return (
    <div className="relative hero bg-base-200">
      <div className="hero-content md:flex md:flex-row flex-col-reverse items-start justify-start gap-20 w-full">
        <img
          src={
            user.avatar
              ? `${process.env.NEXT_PUBLIC_S3_IMAGES}/${user.avatar}`
              : '/imgs/avatar.jpg'
          }
          alt="Avatar"
          width={400}
          height={400}
          className="max-w-sm rounded-lg shadow-2xl w-full"
        />

        <div className="w-full">
          <h1 className="text-5xl font-bold">{user.name}</h1>
          <p className="mt-4">{user.position?.title}</p>
          <p className="mt-4">{user.description}</p>
        </div>
      </div>
    </div>
  );
}
