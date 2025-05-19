'use client';

import { UserCard, UserPagination, UserShowBy, UserTable } from './components';
import { Title } from '@/ui';
import { useCommentsStore } from '@/store';

export default function UserPage() {
  const { total } = useCommentsStore();

  return (
    <section className="flex flex-col items-stretch justify-center gap-8 py-8 md:py-10 m-auto">
      <UserCard />
      <Title>{`Отзывы: ${total}`}</Title>
      <UserTable />
      <div className="flex justify-between">
        <UserShowBy />
        <UserPagination />
      </div>
    </section>
  );
}
