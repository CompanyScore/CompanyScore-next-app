'use client';

import { useEffect } from 'react';

// import { redirect } from 'next/navigation';
import { useCommentApi } from '@/store/api';
// import moment from 'moment';
import { Button, Title } from '@/ui';
import Link from 'next/link';

export type CommentType = {
  id: string;
  rating: number;
  createDate: Date;
  position: string;
  company: {
    id: number;
    logo: string;
    name: string;
  };
};
export function UserTable() {
  const { comments, loading, getComments } = useCommentApi();

  useEffect(() => {
    getComments({});
  }, [getComments]);

  if (loading) {
    return (
      <div className="skeleton h-[500px] w-[400px] lg:w-[1280px] m-auto"></div>
    );
  }

  if (!comments.length) {
    return (
      <Button className="btn-link">
        <Title>
          <Link href="/companies" className="underline">
            Оставьте свой первый отзыв!
          </Link>
        </Title>
      </Button>
    );
  }

  // const columns = [
  //   {
  //     key: 'company',
  //     title: 'Компания',
  //     render: (comment: CommentType) => (
  //       <div className="flex max-[650px]:justify-center items-center gap-4">
  //         {comment.company.logo ? (
  //           <ImageTable
  //             className="max-[650px]:hidden"
  //             src={process.env.NEXT_PUBLIC_BACK + comment.company.logo}
  //           />
  //         ) : (
  //           <div className="skeleton h-32 w-32"></div>
  //         )}
  //         <p>{comment.company.name}</p>
  //       </div>
  //     ),
  //   },
  //   { key: 'position', title: 'Должность' },
  //   { key: 'rating', title: 'Рейтинг' },
  //   { key: 'text', title: 'Отзыв' },
  //   {
  //     key: 'createDate',
  //     title: 'Дата',
  //     render: (comment: CommentType) =>
  //       moment(comment.createDate).format('MMM Do YY'),
  //   },
  //   {
  //     key: 'actions',
  //     title: 'Действия',
  //     render: (comment: CommentType) => (
  //       <div className="space-x-2">
  //         <Tooltip tip="Посмотреть">
  //           <Button
  //             className="btn-neutral"
  //             onClick={() => redirect(`/companies/${comment.company.id}`)}
  //           >
  //             <img src="/icons/file.svg" alt="File" width={25} height={25} />
  //           </Button>
  //         </Tooltip>
  //       </div>
  //     ),
  //   },
  // ];

  // return <Table columns={columns} data={comments} />;
  return <div>asd</div>;
}
