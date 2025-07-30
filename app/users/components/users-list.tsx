'use client';

import { useUsersCSR } from '@/api/client/users';
import { useAuth } from '@/hook/use-auth';
import { useUsersFilterStore } from '@/store/users-filter.store';

export const UsersList = ({ users: publicUsers }: { users: any[] }) => {
  const { isLoggedIn, loading } = useAuth();
  const search = useUsersFilterStore(state => state.search);

  const {
    data,
    isLoading: usersLoading,
    isError,
    error,
  } = useUsersCSR({
    page: 1,
    limit: 6,
    enabled: isLoggedIn,
    search,
  });

  const users = isLoggedIn && data?.users ? data.users : publicUsers;

  if (loading || usersLoading) {
    return <div className="text-center text-gray-500">Загрузка...</div>;
  }

  if (isError) {
    return (
      <div className="text-center text-red-500">
        Ошибка загрузки: {String(error)}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {users.length === 0 ? (
        <p className="text-center text-gray-500">Пользователи не найдены</p>
      ) : (
        users.map(user => (
          <div
            key={user.id}
            className="p-4 border rounded shadow-sm bg-white flex flex-col"
          >
            <div className="font-semibold">{user.name}</div>
            <p className="text-sm mt-1">{user.description}</p>
          </div>
        ))
      )}

      {!isLoggedIn && (
        <div className="text-center text-sm text-gray-600 mt-4">
          Войдите, чтобы увидеть всех пользователей
        </div>
      )}
    </div>
  );
};
