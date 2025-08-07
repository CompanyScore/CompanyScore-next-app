import { GetAllUsersServer } from '@/api/users/users-server';
import { UsersFilter, UsersList } from './components';
import { Container } from '@/shared/ui';

export default async function UsersPage() {
  const data = await GetAllUsersServer();

  return (
    <Container className="flex flex-col gap-20">
      <UsersFilter />
      <UsersList users={data?.users || []} />
    </Container>
  );
}
