import {
  CommentsHero,
  CommentsList,
  CommentsSorting,
  CommentsFilter,
} from './components';

import { GetAllCommentsServer } from '@/api';
import { GetLocationsServer } from '@/api/locations/locations-server';
import { Container } from '@/shared/ui';

export default async function CommentsPage() {
  const data = await GetAllCommentsServer();
  const locations = await GetLocationsServer();

  return (
    <>
      <CommentsHero />
      <Container className="flex flex-col gap-20">
        <div className="flex gap-6">
          <CommentsFilter locations={locations} />

          <div className="flex flex-col gap-8 w-full">
            <CommentsSorting />
            <CommentsList comments={data?.comments || []} />
          </div>
        </div>
      </Container>
    </>
  );
}
