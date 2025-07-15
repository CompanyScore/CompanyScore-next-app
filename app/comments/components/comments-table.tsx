'use client';

import { useEffect } from 'react';

import { redirect } from 'next/navigation';
import { useCommentApi } from '@/store/api/comment.api';

import { Button, ImageTable, Title, Card } from '@/ui';
import { IconTrash } from '@tabler/icons-react';
import moment from 'moment';
import Avatar, { genConfig } from 'react-nice-avatar';
import {
  uniqueNamesGenerator,
  adjectives,
  animals,
} from 'unique-names-generator';
import { FaStar } from 'react-icons/fa';

export function CommentsTable() {
  const { comments, loading, getComments, deleteComment } = useCommentApi();

  const config = genConfig();
  const nickname = uniqueNamesGenerator({
    dictionaries: [adjectives, animals],
    style: 'capital',
    separator: ' ',
  });

  useEffect(() => {
    useCommentApi.getState().getComments({});
  }, [getComments]);

  if (loading) {
    return (
      <div className="skeleton h-[500px] w-[400px] lg:w-[1280px] m-auto"></div>
    );
  }

  if (!comments?.length) {
    return <Title>Список отзывов пуст</Title>;
  }

  return (
    <>
      {comments.map(comment => (
        <Card
          key={comment.id}
          className="flex flex-col gap-4 max-w-96"
          onClick={() => redirect(`/comments/${comment.id}`)}
        >
          <div className="flex items-center gap-2">
            <ImageTable
              src={
                comment.company?.logo
                  ? `${process.env.NEXT_PUBLIC_S3_IMAGES}/${comment.company?.logo}`
                  : '/imgs/company-logo.jpg'
              }
            />
            {comment.company.name}
          </div>

          <div className="flex items-center gap-2">
            {comment.user?.avatar ? (
              <ImageTable
                className="max-[650px]:hidden"
                src={
                  `${process.env.NEXT_PUBLIC_S3_IMAGES}/${comment.user.avatar}`

                  // : '/imgs/avatar.jpg'
                }
              />
            ) : (
              <Avatar className="w-24 h-24" {...config} />
            )}
            <p>{comment.user?.name ?? nickname}</p>
          </div>

          <div className="flex gap-4">
            {comment.score}
            <div className="flex items-center">
              {comment.stars}
              <FaStar className="text-yellow-400" />
            </div>
          </div>

          <div className="flex flex-col">
            <span>{comment.user.position.title}</span>
            {moment(comment.createDate).format('MMM Do YY')}
          </div>

          <Button onClick={() => deleteComment(comment.id)}>
            <IconTrash stroke={2} className="text-red-600" />
          </Button>
        </Card>
      ))}
    </>
  );
}
