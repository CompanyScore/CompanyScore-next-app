import { Button, Container } from '@/shared/ui';
import Link from 'next/link';
import { CommentsTable, FilterComments } from './components';

export default function CommentsPage() {
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
        <FilterComments />
        <CommentsTable />
      </div>
    </Container>
  );
}
