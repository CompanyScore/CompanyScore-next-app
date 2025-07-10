'use client';

import {
  ProfileCard,
  ProfilePagination,
  ProfileShowBy,
  ProfileTable,
} from './components';
import { Title } from '@/ui';
import { useCommentApi } from '@/store/api';

export default function ProfilePage() {
  const { total } = useCommentApi();

  return (
    <section className="flex flex-col items-stretch justify-center gap-8 py-8 md:py-10 m-auto">
      <ProfileCard />
      <Title>{`Ваши отзывы: ${total}`}</Title>
      <ProfileTable />
      <div className="flex justify-between">
        <ProfileShowBy />
        <ProfilePagination />
      </div>
    </section>
  );
}
