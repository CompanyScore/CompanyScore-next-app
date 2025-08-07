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
          // <Card
          //   key={comment?.id}
          //   className="flex flex-col gap-4 max-w-[912px] w-full"
          //   onClick={() => redirect(`/comments/${comment?.id}`)}
          // >
          //   <div className="flex justify-between">
          //     <div className="flex items-center">
          //       {comment?.stars} <FaStar className="text-yellow-400" /> |
          //       {comment?.score} баллов
          //     </div>

          //     <div className="flex gap-2">
          //       <div>{moment(comment?.createDate).format('MMM Do YY')}</div>
          //       <IconDotsVertical stroke={2} />
          //     </div>
          //   </div>

          //   <div className="flex justify-between">
          //     <div className="flex items-center gap-2">
          //       {comment?.user?.avatar ? (
          //         <ImageTable
          //           className="max-[650px]:hidden"
          //           src={`${process.env.NEXT_PUBLIC_S3_IMAGES}/${comment.user.avatar}`}
          //         />
          //       ) : (
          //         <Avatar className="w-46 h-46" {...config} />
          //       )}
          //       <div className="flex flex-col">
          //         <p>{comment?.user?.name ?? nickname}</p>
          //         <p>{comment?.user?.position.title}</p>
          //       </div>
          //     </div>

          //     <div className="flex items-center gap-2">
          //       {comment?.company.name}
          //       <ImageTable
          //         src={
          //           comment?.company?.logo
          //             ? `${process.env.NEXT_PUBLIC_S3_IMAGES}/${comment.company?.logo}`
          //             : '/imgs/company-logo.jpg'
          //         }
          //       />
          //     </div>
          //   </div>

          //   <div>Bage</div>

          //   <div className="flex flex-col gap-4">
          //     <div className="flex flex-col gap-2">
          //       <p className="text-neutral-500">Что понравилось</p>
          //       <p>{comment?.reasonJoined}</p>
          //     </div>

          //     <div className="flex flex-col gap-2">
          //       <p className="text-neutral-500">Что можно улучшить</p>
          //       <p>{comment?.reasonLeft}</p>
          //     </div>
          //   </div>

          //   <div>
          //     <IconHeart stroke={2} />
          //   </div>
          // </Card>
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
