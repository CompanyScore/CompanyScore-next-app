'use client';

import { useParams } from 'next/navigation';
import { Card, Container, Title } from '@/shared/ui';
import { useEffect } from 'react';
import { useCommentApi } from '@/api/index';
import {
  uniqueNamesGenerator,
  adjectives,
  animals,
} from 'unique-names-generator';

export default function CommentPage() {
  const { comment, loading, getCommentById } = useCommentApi();

  const params = useParams();
  const commentId = params?.id; // из /comments/[id]

  useEffect(() => {
    if (commentId && typeof commentId === 'string') {
      getCommentById(commentId);
    }
  }, [commentId, getCommentById]);

  if (loading || !comment) {
    return <div className="skeleton h-[400px] w-full m-auto"></div>;
  }

  const nickname = uniqueNamesGenerator({
    dictionaries: [adjectives, animals],
    style: 'capital',
    separator: ' ',
  });

  return (
    <Container className="flex flex-col gap-4">
      <Title>Отзыв</Title>
      <p>Компания: {comment.company.name}</p>
      <p>Автор: {comment.user.name ?? nickname}</p>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {[
          {
            label: 'Тестовое задание',
            score: comment.taskScore,
            stars: comment.taskStars,
          },
          {
            label: 'Собеседование',
            score: comment.interviewScore,
            stars: comment.interviewStars,
          },
          {
            label: 'Стажировка',
            score: comment.internshipScore,
            stars: comment.internshipStars,
          },
          {
            label: 'Работа (основная)',
            score: comment.workPrimaryScore,
            stars: comment.workPrimaryStars,
          },
          {
            label: 'Работа (доп)',
            score: comment.workSecondaryScore,
            stars: comment.workSecondaryStars,
          },
          {
            label: 'Финансовая часть',
            score: comment.workFinanceScore,
            stars: comment.workFinanceStars,
          },
        ]
          .filter(section => section.score !== undefined)
          .map((section, idx) => (
            <Card key={idx}>
              <p className="text-primary">{section.label}</p>
              <p>{section.stars} звёзд</p>
              <p>{section.score} очков</p>
            </Card>
          ))}
      </div>
    </Container>
  );
}
