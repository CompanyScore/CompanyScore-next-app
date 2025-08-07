import { Card, ImageTable } from '@/shared/ui';
import { IconDotsVertical, IconHeart } from '@tabler/icons-react';
import moment from 'moment';
import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import {
  uniqueNamesGenerator,
  adjectives,
  animals,
} from 'unique-names-generator';
import Avatar, { genConfig } from 'react-nice-avatar';

export function CommentCard({ comment }: any) {
  const [expanded, setExpanded] = useState(false);

  // Вынеси функцию обрезки
  const preview = (text?: string) => {
    if (!text) return '';
    return !expanded && text.length > 100 ? text.slice(0, 100) + '…' : text;
  };

  // Проверяем: есть ли что раскрывать?
  const needExpand =
    comment?.reasonJoined?.length > 100 || comment?.reasonLeft?.length > 100;

  const config = genConfig();
  const nickname = uniqueNamesGenerator({
    dictionaries: [adjectives, animals],
    style: 'capital',
    separator: ' ',
  });

  return (
    <Card
      key={comment?.id}
      className="flex flex-col gap-4 max-w-[912px] w-full"
    >
      <div className="flex justify-between">
        <div className="flex items-center">
          {comment?.stars} <FaStar className="text-yellow-400" /> |
          {comment?.score} баллов
        </div>

        <div className="flex gap-2">
          <div>{moment(comment?.createDate).format('MMM Do YY')}</div>
          <IconDotsVertical stroke={2} />
        </div>
      </div>

      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          {comment?.user?.avatar ? (
            <ImageTable
              className="max-[650px]:hidden"
              src={`${process.env.NEXT_PUBLIC_S3_IMAGES}/${comment.user.avatar}`}
            />
          ) : (
            <Avatar className="w-46 h-46" {...config} />
          )}
          <div className="flex flex-col">
            <p>{comment?.user?.name ?? nickname}</p>
            <p>{comment?.user?.position.title}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {comment?.company.name}
          <ImageTable
            src={
              comment?.company?.logo
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
          <p>{preview(comment?.reasonJoined)}</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-neutral-500">Что можно улучшить</p>
          <p>{preview(comment?.reasonLeft)}</p>
        </div>
        {needExpand && (
          <button
            type="button"
            className="self-start mt-1 ml-1 text-blue-600 hover:underline text-xs"
            onClick={e => {
              e.stopPropagation();
              setExpanded(v => !v);
            }}
          >
            {expanded ? 'Скрыть' : 'Читать полностью'}
          </button>
        )}
      </div>

      <div>
        <IconHeart stroke={2} />
      </div>
    </Card>
  );
}
