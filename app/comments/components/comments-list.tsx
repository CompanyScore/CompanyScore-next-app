'use client';

import { Title, InfinityList } from '@/shared/ui';
import { useSearchParams } from 'next/navigation';
import { useAuth } from '@/shared/hooks';
import { GetAllCommentsClient } from '@/api';
import { CommentCard } from './comments-card';

export function CommentsList({
  comments: publicComments,
}: {
  comments: any[];
}) {
  const { isLoggedIn, loading } = useAuth();
  const sp = useSearchParams();
  const sort = (sp.get('sort') as 'date' | 'rating') || 'date';

  const { data, isLoading, isFetchingNextPage, fetchNextPage, error, isError } =
    GetAllCommentsClient({ enabled: isLoggedIn, sort });

  const dataComments = data?.pages.flatMap(page => page.comments);
  const comments = isLoggedIn && dataComments ? dataComments : publicComments;

  if (loading || isLoading) {
    return (
      <>
        {Array(3)
          .fill(null)
          .map((_, idx) => (
            <div
              key={idx}
              className="skeleton h-[200px] w-[400px] lg:w-[912px] bg-neutral-500  m-auto"
            ></div>
          ))}
      </>
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
          <CommentCard key={comment?.id} comment={comment} className="w-full" />
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
