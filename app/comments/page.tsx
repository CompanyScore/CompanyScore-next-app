import { Button, Container } from '@/shared/ui';
import Link from 'next/link';
import { CommentsList, CommentsFilter } from './components';
import { GetAllCommentsServer } from '@/api';

export default async function CommentsPage() {
  const data = await GetAllCommentsServer();

  return (
    <Container className="flex flex-col gap-20">
      <div className="flex justify-between">
        <p className="text-7xl font-bold">
          Ваша история полезнее всех вакансий
        </p>
        <p>
          Опыт реальных людей — лучшая навигация по рынку труда. Поделитесь
          инсайтами и предостережениями, которые облегчат путь другим
        </p>
      </div>

      <Link href="/comments/add">
        <Button>Оставить отзыв</Button>
      </Link>

      <div className="flex gap-6">
        <CommentsFilter />
        <CommentsList comments={data?.comments || []} />
      </div>
    </Container>
  );
}
