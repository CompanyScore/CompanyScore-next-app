import { Button } from '@/ui';
import Link from 'next/link';
import {
  CommentsTable,
  CommentsShowBy,
  CommentsPagination,
} from './components';

export default function CommentsPage() {
  return (
    <section className="flex flex-col items-stretch justify-center gap-8 py-8 md:py-10 m-auto">
      <Button className="btn-secondary mr-0">
        <Link href="/comments/comments-add">Оставить отзыв</Link>
      </Button>
      <CommentsTable />
      <div className="flex justify-between">
        <CommentsShowBy />
        <CommentsPagination />
      </div>
    </section>
  );
}
