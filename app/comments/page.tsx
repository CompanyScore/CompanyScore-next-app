import {
  CommentsHero,
  CommentsList,
  CommentsSorting,
  CommentsFilter,
} from './components';

import { GetAllCommentsServer } from '@/api';

import { Container } from '@/shared/ui';

export default async function CommentsPage() {
  const data = await GetAllCommentsServer();

  return (
    <>
      <CommentsHero />
      <Container className="flex flex-col gap-20">
        <div className="flex gap-6">
          <CommentsFilter />

          <div className="flex flex-col gap-8">
            <CommentsSorting />
            <CommentsList comments={data?.comments || []} />
          </div>
        </div>
      </Container>
    </>
  );
}
