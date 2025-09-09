import { Suspense } from 'react';
import {
  CommentsHero,
  CommentsList,
  CommentsSorting,
  CommentsFilter,
  CommentsSearcher,
} from './components';

import {
  GetAllCommentsServer,
  GetPositionCategoriesServer,
  GetPositionsServer,
  GetLocationsServer,
} from '@/api';

import { Container } from '@/shared/ui';

export default async function CommentsPage() {
  const [data, categories, positions, locations] = await Promise.all([
    GetAllCommentsServer(),
    GetPositionCategoriesServer(),
    GetPositionsServer(),
    GetLocationsServer(),
  ]);

  return (
    <>
      <CommentsHero />
      <Container className="flex gap-6">
        <Suspense fallback={<div>Загрузка...</div>}>
          <CommentsFilter
            categories={categories}
            positions={positions}
            locations={locations}
          />

          <div className="flex flex-col gap-8 w-full">
            <div className="flex items-center gap-5">
              <CommentsSearcher />
              <CommentsSorting />
            </div>
            <CommentsList comments={data?.comments || []} />
          </div>
        </Suspense>
      </Container>
    </>
  );
}
