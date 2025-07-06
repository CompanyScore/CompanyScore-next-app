import { Button, Container, Title } from '@/ui';
import Link from 'next/link';
import {
  CommentsTable,
  CommentsShowBy,
  CommentsPagination,
} from './components';

export default function CommentsPage() {
  return (
    <Container className="flex flex-col gap-4">
      <Title>Отзывы</Title>
      <Link href="/comments/comments-add" className="self-end">
        <Button>Оставить отзыв</Button>
      </Link>

      <CommentsTable />
      <div className="flex justify-between">
        <CommentsShowBy />
        <CommentsPagination />
      </div>
    </Container>
  );
}
