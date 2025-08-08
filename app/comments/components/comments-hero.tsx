import { Container, Button } from '@/shared/ui';
import Link from 'next/link';

// comments-page-bg

export async function CommentsHero() {
  return (
    <div
      className="flex items-center justify-center  h-[calc(100vh-360px)] bg-cover bg-no-repeat rounded-b-[50px]"
      style={{
        backgroundImage: 'url(imgs/comments-page-bg.png)',
        backgroundPosition: 'center',
      }}
    >
      <Container>
        <div className="flex flex-col gap-6 max-w-[600px] mb-14">
          <p className="text-7xl font-bold">
            Каждый отзыв делает рынок честнее
          </p>
          <p className="text-2xl">
            Расскажите о реальных условиях — зарплатах, атмосфере, тестовых
            заданиях. Это поможет другим избежать ошибок и найти «своё» место
          </p>
        </div>

        <Link href="/comments/add">
          <Button className="text-xl btn-primary">Оставить отзыв</Button>
        </Link>
      </Container>
    </div>
  );
}
