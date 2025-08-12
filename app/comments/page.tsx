import {
  CommentsHero,
  CommentsList,
  CommentsSorting,
  CommentsFilter,
} from './components';

import {
  GetAllCommentsServer,
  GetPositionCategoriesServer,
  GetPositionsServer,
} from '@/api';

import { Container } from '@/shared/ui';

export default async function CommentsPage() {
  const [data, categories, positions] = await Promise.all([
    GetAllCommentsServer(),
    GetPositionCategoriesServer(),
    GetPositionsServer(),
  ]);

  return (
    <>
      <CommentsHero />
      <Container className="flex flex-col gap-20">
        <div className="flex gap-6">
          <CommentsFilter categories={categories} positions={positions} />

          <div className="flex flex-col gap-8 w-full">
            <CommentsSorting />
            <CommentsList comments={data?.comments || []} />
          </div>
        </div>
      </Container>
    </>
  );
}
