'use client';

import { Card, Container, Title } from '@/ui';

export default function CommentPage() {
  return (
    <Container className="flex flex-col gap-4">
      <Title>Отзыв</Title>
      <p>Название компании</p>
      <p>Имя автора</p>
      <div className="flex gap-4">
        <Card>
          <p className="text-primary">Тестовое задание</p>
          <p>4 балла</p>
          <p>375 очков</p>
        </Card>
        <Card>
          <p>Собеседование</p>
          <p>4 балла</p>
          <p>375 очков</p>
        </Card>
        <Card>
          <p>Стажировка</p>
          <p>4 балла</p>
          <p>375 очков</p>
        </Card>
        <Card>
          <p>Работа</p>
          <p>4 балла</p>
          <p>375 очков</p>
        </Card>
      </div>
    </Container>
  );
}
