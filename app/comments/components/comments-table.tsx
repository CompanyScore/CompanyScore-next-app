'use client';

import { useEffect } from 'react';

import { redirect } from 'next/navigation';
import { Button, ImageTable, Tooltip, Title, Table } from '@/ui';
import moment from 'moment';

import { useCommentApi, CommentType } from '@/store/api/comment.api';

export function CommentsTable() {
  const { comments, loading, getComments } = useCommentApi();

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

  const columns = [
    {
      key: 'company',
      title: 'Компания',
      render: (comment: CommentType) => (
        <div className="flex items-center space-x-2">
          <ImageTable
            src={
              comment.company?.logo
                ? `${process.env.NEXT_PUBLIC_S3_IMAGES}/${comment.company?.logo}`
                : '/imgs/company-logo.jpg'
            }
          />
          <p>{comment.company?.name ?? 'Неизвестная компания'}</p>
        </div>
      ),
    },
    {
      key: 'user',
      title: 'Пользователь',
      render: (comment: CommentType) => (
        <div className="flex items-center space-x-2">
          <ImageTable
            className="max-[650px]:hidden"
            src={
              comment.user?.avatar
                ? `${process.env.NEXT_PUBLIC_S3_IMAGES}/${comment.user.avatar}`
                : '/imgs/avatar.jpg'
            }
          />
          <p>{comment.user?.name ?? 'Неизвестный пользователь'}</p>
        </div>
      ),
    },
    {
      key: 'rating',
      title: 'Рейтинг',
      render: (comment: CommentType) => comment.id ?? 'Нет данных',
    },
    {
      key: 'position',
      title: 'Должность',
      render: (comment: CommentType) =>
        comment.userPositionId ?? 'Нет информации',
    },
    {
      key: 'createDate',
      title: 'Дата создания',
      render: (comment: CommentType) =>
        moment(comment.createDate).format('MMM Do YY'),
    },
    {
      key: 'actions',
      title: 'Действия',
      render: (comment: CommentType) => (
        <div className="flex justify-center items-center space-x-2 h-full">
          <Tooltip tip="Посмотреть">
            <Button
              className="btn-neutral"
              onClick={() => redirect(`/comments/${comment.id}`)}
            >
              <img src="/icons/file.svg" alt="File" width={25} height={25} />
            </Button>
          </Tooltip>
        </div>
      ),
    },
  ];

  return (
    <>
      <Table columns={columns} data={comments} />
    </>
  );
}
