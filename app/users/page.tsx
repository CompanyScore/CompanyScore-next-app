// app/users/page.tsx

import { GetAllUsersServer } from '@/api/users/users-server';
import { UsersFilter, UsersList } from './components';

export const revalidate = 60;

export default async function UsersPage() {
  const data = await GetAllUsersServer();

  return (
    <section className="flex flex-col gap-8 py-8 md:py-10 m-auto">
      <div>asd</div>
      <UsersFilter />
      <UsersList users={data?.users || []} />
    </section>
  );
}
