'use client';

import { useEffect } from 'react';

// import { redirect } from 'next/navigation';
// import { ProfileEditCommentModal } from '../modals';
import { useCommentsStore } from '@/store/api';
// import moment from 'moment';
// import { IoIosCloseCircleOutline } from 'react-icons/io';
import { Button, Title, Toast } from '@/ui';
import Link from 'next/link';

export type CommentType = {
  id: string;
  createDate: Date;
  userPosition: string;
  company: {
    id: number;
    logo: string;
    name: string;
  };
};

export function ProfileTable() {
  const { comments, loading, getComments } = useCommentsStore();

  // const [selectedComment, setSelectedComment] = useState<
  //   CommentType | undefined
  // >(undefined);

  // const openEditModal = (comment: CommentType) => {
  //   setSelectedComment(comment);
  // };

  // const handleDeleteComment = async (commentId: string) => {
  //   await deleteComment(commentId);

  //   getComments({});
  // };

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
  //       <div className="flex max-[650px]:justify-center items-center gap-4 ">
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
  //       <div className="flex justify-center items-center space-x-2 h-full">
  //         <Tooltip tip="Посмотреть">
  //           <Button
  //             className="btn-neutral"
  //             onClick={() => redirect(`/companies/${comment.company.id}`)}
  //           >
  //             <img src="/icons/file.svg" alt="File" width={25} height={25} />
  //           </Button>
  //         </Tooltip>
  //         <Tooltip tip="Редактировать">
  //           <Button
  //             className="btn-warning"
  //             onClick={() => openEditModal(comment)}
  //           >
  //             <label htmlFor="profile-edit-comment-modal">
  //               <img
  //                 src="/icons/pencil.svg"
  //                 alt="Pencil"
  //                 width={25}
  //                 height={25}
  //               />
  //             </label>
  //           </Button>
  //         </Tooltip>
  //         <Tooltip tip="Удалить">
  //           <Button className="btn-error" onClick={() => console.log('delete')}>
  //             <IoIosCloseCircleOutline className="w-6 h-6 text-white" />
  //           </Button>
  //         </Tooltip>
  //       </div>
  //     ),
  //   },
  // ];

  return (
    <>
      {/* <Table columns={columns} data={comments} />
      <ProfileEditCommentModal comment={selectedComment} /> */}
      <Toast />
    </>
  );
}
