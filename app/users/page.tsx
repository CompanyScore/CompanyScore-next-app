// app/users/page.tsx

// import { fetchUsersSSR } from '@/api/server/users';
import { UsersFilter } from './components';
import InfinityTestList from './components/infinity-test-list';

// export const revalidate = 60;

export default async function UsersPage() {
  // const data = await fetchUsersSSR();

  return (
    <section className="flex flex-col gap-8 py-8 md:py-10 m-auto">
      <UsersFilter />
      {/* <UsersList users={data?.users || []} /> */}
      <InfinityTestList />
    </section>
  );
}
