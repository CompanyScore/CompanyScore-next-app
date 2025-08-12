import React, { useState, useRef, useLayoutEffect } from 'react';
import { redirect } from 'next/navigation';

import { Card, ImageTable } from '@/shared/ui';
import moment from 'moment';
import 'moment/locale/ru';

import { FaStar } from 'react-icons/fa';
import { IconSpy, IconHeart, IconFlag } from '@tabler/icons-react';

export function CommentCard({ comment }: any) {
  const [expanded, setExpanded] = useState(false);
  moment.locale('ru');

  // +++ новый ref на обёртку скрываемого контента
  const collapsibleRef = useRef<HTMLDivElement | null>(null);

  // +++ лимит высоты в пикселях (настраиваемый)
  const COLLAPSED_MAX_HEIGHT = 100;

  // +++ показывать ли кнопку "Читать полностью"
  const [needExpand, setNeedExpand] = useState(false);

  // --- старая логика превью по символам можно оставить/убрать:
  const preview = (text?: string) => {
    if (!text) return '';
    return text;
  };

  // +++ измеряем высоту контента
  useLayoutEffect(() => {
    const el = collapsibleRef.current;
    if (!el) return;

    const check = () => {
      // scrollHeight — полная высота контента
      // clientHeight — видимая высота
      setNeedExpand(el.scrollHeight > COLLAPSED_MAX_HEIGHT + 1);
    };

    check();
    // Обновляем при ресайзе (на случай адаптивных переносов)
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <Card
      key={comment?.id}
      className="flex flex-col gap-4 max-w-[912px] w-full"
    >
      <div className="flex justify-between">
        <div className="flex items-center gap-1">
          <b>{comment?.stars}</b>
          <FaStar className="text-yellow-400 w-6 h-6" />
        </div>

        <div>{moment(comment?.createDate).format('D MMMM YYYY')}</div>
      </div>

      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-2 w-full">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => redirect(`/users/${comment?.user.id}`)}
          >
            {comment?.user?.avatar ? (
              <ImageTable
                className="w-14 h-14 rounded-full aspect-square"
                src={`${process.env.NEXT_PUBLIC_S3_IMAGES}/${comment.user.avatar}`}
              />
            ) : (
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-300">
                <IconSpy stroke={1} className="text-blue-900" />
              </div>
            )}
            <div className="flex flex-col">
              <b>{comment?.user?.name ?? ''}</b>
              <p className="text-neutral-500">
                {comment?.user?.position.title}
              </p>
            </div>
          </div>

          <div className="flex gap-2">
            {comment?.taskScore ? (
              <p className="text-violet-800 bg-violet-50 px-2">Тестовое</p>
            ) : (
              ''
            )}

            {comment?.interviewScore ? (
              <p className="text-emerald-800 bg-emerald-50 px-2">
                Собеседование
              </p>
            ) : (
              ''
            )}

            {comment?.internshipScore ? (
              <p className="text-sky-800 bg-sky-50 px-2">Стажировка</p>
            ) : (
              ''
            )}

            {comment?.workPrimaryScore ? (
              <p className="text-amber-800 bg-amber-50 px-2">Работа</p>
            ) : (
              ''
            )}
          </div>
        </div>

        <div
          className="flex items-center justify-end gap-2 w-full cursor-pointer"
          onClick={() => redirect(`/company/${comment?.company.id}`)}
        >
          <b>{comment?.company.name}</b>
          <ImageTable
            className="w-14 h-14"
            src={
              comment?.company?.logo
                ? `${process.env.NEXT_PUBLIC_S3_IMAGES}/${comment.company?.logo}`
                : '/imgs/company-logo.jpg'
            }
          />
        </div>
      </div>

      <div
        ref={collapsibleRef}
        className="relative transition-[max-height] duration-300 ease-in-out"
        style={{
          maxHeight: expanded ? 'none' : `${COLLAPSED_MAX_HEIGHT}px`,
          overflow: expanded ? 'visible' : 'hidden',
        }}
      >
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <p className="text-neutral-500">Что понравилось</p>
            <p>{preview(comment?.reasonJoined)}</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-neutral-500">Что можно улучшить</p>
            <p>{preview(comment?.reasonLeft)}</p>
          </div>
        </div>

        <div className="flex flex-col gap-2 mt-4">
          {comment?.taskStars ? (
            <div className="flex gap-2">
              <p>Тестовое - {comment?.taskStars}</p>
              <FaStar className="text-yellow-400 w-6 h-6" />
            </div>
          ) : (
            ''
          )}

          {comment?.interviewStars ? (
            <div className="flex gap-2">
              <p>Собеседование - {comment?.interviewStars}</p>
              <FaStar className="text-yellow-400 w-6 h-6" />
            </div>
          ) : (
            ''
          )}

          {comment?.internshipStars ? (
            <div className="flex gap-2">
              <p>Стажировка - {comment?.internshipStars}</p>
              <FaStar className="text-yellow-400 w-6 h-6" />
            </div>
          ) : (
            ''
          )}

          {comment?.workPrimaryStars ? (
            <div className="flex gap-2">
              <p>Работа Primary- {comment?.workPrimaryStars}</p>
              <FaStar className="text-yellow-400 w-6 h-6" />
            </div>
          ) : (
            ''
          )}

          {comment?.workSecondaryStars ? (
            <div className="flex gap-2">
              <p>Работа Secondary- {comment?.workSecondaryStars}</p>
              <FaStar className="text-yellow-400 w-6 h-6" />
            </div>
          ) : (
            ''
          )}

          {comment?.workFinanceStars ? (
            <div className="flex gap-2">
              <p>Работа Finance- {comment?.workFinanceStars}</p>
              <FaStar className="text-yellow-400 w-6 h-6" />
            </div>
          ) : (
            ''
          )}
        </div>
      </div>

      {needExpand && (
        <button
          type="button"
          className="self-start underline"
          onClick={e => {
            e.stopPropagation();
            setExpanded(v => !v);
          }}
        >
          {expanded ? 'Скрыть' : 'Читать полностью'}
        </button>
      )}

      <div className="flex justify-between">
        <IconHeart stroke={1} />
        <IconFlag stroke={1} />
      </div>
    </Card>
  );
}
