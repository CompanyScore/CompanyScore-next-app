import React from 'react';
import { useEffect } from 'react';
import { Avatar, Button, Table, Title, Tooltip } from '@/ui';
import moment from 'moment';

import { useUsersStore } from '@/store';
import { redirect } from 'next/navigation';
import Image from 'next/image';

type UserType = {
  id: string;
  name: string;
  avatar: string;
  position: string;
  description: string;
  commentsIds: string[];
  createDate: Date;
};

export function UsersTable() {
  const { users, loading, getUsers } = useUsersStore();

  useEffect(() => {
    getUsers({});
  }, [getUsers]);

  if (loading) {
    return (
      <div className="skeleton h-[500px] w-[400px] lg:w-[1280px] m-auto"></div>
    );
  }

  if (!users.length) {
    return <Title>Пользователей еще нет</Title>;
  }

  const columns = [
    {
      key: 'user',
      title: 'Пользователь',
      render: (user: UserType) => (
        <div className="flex max-[650px]:justify-center items-center gap-4">
          <Avatar
            className="max-[650px]:hidden"
            src={
              user?.avatar
                ? `${process.env.NEXT_PUBLIC_S3_IMAGES}/${user.avatar}`
                : '/imgs/avatar.jpg'
            }
          />
          <p>{user.name}</p>
        </div>
      ),
    },
    {
      key: 'position',
      title: 'Должность',
      render: (user: UserType) => user.position,
    },
    {
      key: 'commentsCount',
      title: 'Отзывы',
      render: (user: UserType) => user.commentsIds?.length ?? 0,
    },
    {
      key: 'createDate',
      title: 'Дата создания',
      render: (user: UserType) => moment(user.createDate).format('MMM Do YY'),
    },
    {
      key: 'actions',
      title: 'Действия',
      render: (user: UserType) => (
        <Tooltip tip="Посмотреть">
          <Button
            className="btn-neutral"
            onClick={() => redirect(`/users/${user.id}`)}
          >
            <Image src="/icons/file.svg" alt="File" width={25} height={25} />
          </Button>
        </Tooltip>
      ),
    },
  ];

  return <Table columns={columns} data={users} />;
}
