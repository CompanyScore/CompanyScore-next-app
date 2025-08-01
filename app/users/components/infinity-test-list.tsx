'use client';

import { useUsersInfinity } from '@/api/client/users';
import { Loading } from '@/shared/ui';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export default function InfinityTestList() {
  const { data, isFetchingNextPage, fetchNextPage } = useUsersInfinity();

  const users = data?.pages.flatMap(page => page.users) ?? [];

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  return (
    <>
      <div className="flex flex-col gap-2 items-center ">
        {users.map(user => (
          <div
            key={user.id}
            className="p-4 border rounded shadow-sm bg-white flex flex-col w-full"
          >
            <div className="font-semibold">{user.name}</div>
            <p className="text-sm mt-1">{user.description}</p>
          </div>
        ))}
        <div ref={ref} />
        {isFetchingNextPage && <Loading />}
      </div>
    </>
  );
}
