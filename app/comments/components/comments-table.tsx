'use client';

import { useEffect } from 'react';

import { redirect } from 'next/navigation';
import { useCommentApi, GetCommentType } from '@/store/api/comment.api';

import { Button, ImageTable, Tooltip, Title, Table } from '@/ui';
import { IconFile, IconTrash } from '@tabler/icons-react';
import moment from 'moment';

export function CommentsTable() {
  const { comments, loading, getComments, deleteComment } = useCommentApi();

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
      render: (comment: GetCommentType) => (
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
      render: (comment: GetCommentType) => (
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
      key: 'score',
      title: 'Рейтинг',
      render: (comment: GetCommentType) => comment.score ?? 'Нет данных',
    },
    {
      key: 'stars',
      title: 'Баллы',
      render: (comment: GetCommentType) => comment.stars ?? 'Нет данных',
    },
    {
      key: 'taskScore',
      title: 'taskScore',
      render: (comment: GetCommentType) => comment.taskScore ?? 'Нет данных',
    },
    {
      key: 'taskStars',
      title: 'taskStars',
      render: (comment: GetCommentType) => comment.taskStars ?? 'Нет данных',
    },
    {
      key: 'position',
      title: 'Должность',
      render: (comment: GetCommentType) =>
        comment.user.position.title ?? 'Нет информации',
    },
    {
      key: 'createDate',
      title: 'Дата создания',
      render: (comment: GetCommentType) =>
        moment(comment.createDate).format('MMM Do YY'),
    },
    {
      key: 'actions',
      title: 'Действия',
      render: (comment: GetCommentType) => (
        <div className="flex justify-center items-center space-x-2 h-full">
          <Tooltip tip="Посмотреть">
            <Button onClick={() => redirect(`/comments/${comment.id}`)}>
              <IconFile stroke={2} />
            </Button>
            <Button onClick={() => deleteComment(comment.id)}>
              <IconTrash stroke={2} className="text-red-600" />
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
