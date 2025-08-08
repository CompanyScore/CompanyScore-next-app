'use client';

// import { redirect } from 'next/navigation';

import { Title, InfinityList } from '@/shared/ui';

import { useAuth } from '@/shared/hooks';
import { GetAllCommentsClient } from '@/api';
import { CommentCard } from './comments-card';

export function CommentsList({
  comments: publicComments,
}: {
  comments: any[];
}) {
  const { isLoggedIn, loading } = useAuth();

  const { data, isLoading, isFetchingNextPage, fetchNextPage, error, isError } =
    GetAllCommentsClient({ enabled: isLoggedIn });

  const dataComments = data?.pages.flatMap(page => page.comments);
  const comments = isLoggedIn && dataComments ? dataComments : publicComments;

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

  if (!comments?.length) {
    return <Title>Список отзывов пуст</Title>;
  }

  return (
    <div className="flex flex-col gap-10 w-full">
      <InfinityList
        loading={isFetchingNextPage}
        fetchNextPage={fetchNextPage}
        isFetching={isLoggedIn}
      >
        {comments.map(comment => (
          <CommentCard
            key={comment?.id}
            comment={comment}
            // onClick={() => redirect(`/comments/${comment?.id}`)}
          />
        ))}
      </InfinityList>

      {!isLoggedIn && (
        <div className="text-center text-sm text-gray-600 mt-4">
          Войдите, чтобы увидеть все отзывы
        </div>
      )}
    </div>
  );
}
