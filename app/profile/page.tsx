'use client';

import { ProfileCard } from './components';
import { Container, Title } from '@/shared/ui';
import { useCommentApi } from '@/api/index';

export default function ProfilePage() {
  const { total } = useCommentApi();

  return (
    <Container>
      <ProfileCard />
      <Title>{`Ваши отзывы: ${total}`}</Title>
    </Container>
  );
}
