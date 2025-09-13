'use client';

import { Title, InfinityList } from '@/shared/ui';
import { useSearchParams } from 'next/navigation';
import { GetAllCommentsClient, useAuth } from '@/api';
import { CommentCard } from './comments-card';

type Interaction = 'test' | 'interview' | 'internship' | 'work';

export function CommentsList({
  comments: publicComments,
}: {
  comments: any[];
}) {
  const { isAuth, profileQuery } = useAuth();
  const loading = profileQuery.isLoading;
  const sp = useSearchParams();

  const sort = (sp.get('sort') as 'date' | 'rating') || 'date';

  const companyName = sp.get('companyName') ?? undefined;
  const countryId = sp.get('country') ?? undefined;
  const cityId = sp.get('city') ?? undefined;
  const isAnonym = sp.get('anonym') ?? undefined;

  const userPositionCategoryId = sp.get('position_category') ?? undefined;
  const userPositionId = sp.get('position') ?? undefined;

  const interactionParam = sp.get('interaction') || '';
  const interaction = interactionParam
    ? (interactionParam.split(',').filter(Boolean) as Interaction[])
    : undefined;

  const stars = sp.get('stars') ?? undefined;

  const { data, isLoading, isFetchingNextPage, fetchNextPage, error, isError } =
    GetAllCommentsClient({
      enabled: isAuth,
      sort,
      companyName,
      countryId,
      cityId,
      userPositionCategoryId,
      userPositionId,
      interaction,
      isAnonym,
      stars,
    });

  const dataComments = data?.pages.flatMap(page => page.comments);

  const comments =
    isAuth && dataComments && dataComments.length > 0
      ? dataComments
      : publicComments;

  if (loading || isLoading) {
    return (
      <>
        {Array(2)
          .fill(null)
          .map((_, idx) => (
            <div
              key={idx}
              className="skeleton h-[373px] max-w-[912px] w-full bg-neutral-500 m-auto"
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
        isFetching={isAuth}
      >
        {comments.map(comment => (
          <CommentCard key={comment?.id} comment={comment} className="w-full" />
        ))}
      </InfinityList>

      {!isAuth && (
        <div className="text-center text-sm text-gray-600 mt-4">
          Войдите, чтобы увидеть все отзывы
        </div>
      )}
    </div>
  );
}
