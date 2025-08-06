'use client';

import { useEffect } from 'react';

import { redirect } from 'next/navigation';
import { useCommentApi } from '@/store/api/comment.api';

import { ImageTable, Title, Card } from '@/shared/ui';
import moment from 'moment';
import Avatar, { genConfig } from 'react-nice-avatar';
import {
  uniqueNamesGenerator,
  adjectives,
  animals,
} from 'unique-names-generator';

import { FaStar } from 'react-icons/fa';
import { IconHeart, IconDotsVertical } from '@tabler/icons-react';

export function CommentsTable() {
  const { comments, loading, getComments } = useCommentApi();

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
    <div className="flex flex-col gap-10 w-full">
      {comments.map(comment => (
        <Card
          key={comment.id}
          className="flex flex-col gap-4 max-w-[912px] w-full"
          onClick={() => redirect(`/comments/${comment.id}`)}
        >
          <div className="flex justify-between">
            <div className="flex items-center">
              {comment.stars} <FaStar className="text-yellow-400" /> |
              {comment.score} баллов
            </div>

            <div className="flex gap-2">
              <div>{moment(comment.createDate).format('MMM Do YY')}</div>
              <IconDotsVertical stroke={2} />
            </div>
          </div>

          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              {comment.user?.avatar ? (
                <ImageTable
                  className="max-[650px]:hidden"
                  src={`${process.env.NEXT_PUBLIC_S3_IMAGES}/${comment.user.avatar}`}
                />
              ) : (
                <Avatar className="w-46 h-46" {...config} />
              )}
              <div className="flex flex-col">
                <p>{comment.user?.name ?? nickname}</p>
                <p>{comment.user?.position.title}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {comment.company.name}
              <ImageTable
                src={
                  comment.company?.logo
                    ? `${process.env.NEXT_PUBLIC_S3_IMAGES}/${comment.company?.logo}`
                    : '/imgs/company-logo.jpg'
                }
              />
            </div>
          </div>

          <div>Bage</div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <p className="text-neutral-500">Что понравилось</p>
              <p>{comment.reasonJoined}</p>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-neutral-500">Что не понравилось</p>
              <p>{comment.reasonLeft}</p>
            </div>
          </div>

          <div>
            <IconHeart stroke={2} />
          </div>
        </Card>
      ))}
    </div>
  );
}
