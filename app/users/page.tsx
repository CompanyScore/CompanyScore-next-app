// app/users/page.tsx

import { fetchUsersSSR } from '@/api/server/users';
import { UsersFilter, UsersList } from './components';

// export const revalidate = 60;

export default async function UsersPage() {
  const data = await fetchUsersSSR();

  return (
    <section className="flex flex-col gap-8 py-8 md:py-10 m-auto">
      <div>asd</div>
      <UsersFilter />
      <UsersList users={data?.users || []} />
    </section>
  );
}
