'use client';

import { GetAllUsersClient } from '@/api/users/users-client';
import { useAuth } from '@/api';
import { InfinityList } from '@/shared/ui';
import { useUsersFilterStore } from '@/store/users-filter.store';

export function UsersList({ users: publicUsers }: { users: any[] }) {
  const search = useUsersFilterStore(state => state.search);
  const { isAuth, profileQuery } = useAuth();
  const loading = profileQuery.isLoading;

  const { data, isLoading, isFetchingNextPage, fetchNextPage, error, isError } =
    GetAllUsersClient({ search, enabled: isAuth });

  const dataUsers = data?.pages.flatMap(page => page.users);
  const users = isAuth && dataUsers ? dataUsers : publicUsers;

  if (loading || isLoading) {
    return (
      <div className="skeleton h-[500px] w-[400px] lg:w-[1280px] m-auto"></div>
    );
  }

  if (isError) {
    return (
      <div className="text-center text-red-500">
        Ошибка загрузки: {String(error)}
      </div>
    );
  }

  if (!users?.length) {
    return <p className="text-center text-gray-500">Пользователи не найдены</p>;
  }

  return (
    <div className="space-y-4">
      <InfinityList
        loading={isFetchingNextPage}
        fetchNextPage={fetchNextPage}
        isFetching={isAuth}
      >
        {users.map(user => (
          <div
            key={user.id}
            className="p-4 border rounded shadow-sm bg-white flex flex-col w-full"
          >
            <div className="font-semibold">{user.name}</div>
            <p className="text-sm mt-1">{user.description}</p>
          </div>
        ))}
      </InfinityList>

      {!isAuth && (
        <div className="text-center text-sm text-gray-600 mt-4">
          Войдите, чтобы увидеть всех пользователей
        </div>
      )}
    </div>
  );
}
