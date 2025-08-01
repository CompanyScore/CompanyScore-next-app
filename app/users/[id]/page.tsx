'use client';

import { UserCard, UserPagination, UserShowBy, UserTable } from './components';
import { Title } from '@/shared/ui';
import { useCommentApi } from '@/store/api';

export default function UserPage() {
  const { total } = useCommentApi();

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
