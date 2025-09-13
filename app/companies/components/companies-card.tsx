'use client';

import { Card } from '@/shared/ui';
import { FaStar } from 'react-icons/fa';
import Link from 'next/link';

type CompaniesCardProps = {
  id: string;
  name: string;
  country: string;
  city: string;
  commentsCount: number;
  totalScore: number;
  rating?: number;
  logo?: string;
};

export function CompaniesCard({
  id,
  name,
  country,
  city,
  rating,
  logo,
  commentsCount,
  totalScore,
}: CompaniesCardProps) {
  return (
    <Card className="flex w-full items-center">
      <img
        className="w-[160px] h-[160px] object-cover rounded-full mr-[24px]"
        src={
          logo
            ? `${process.env.NEXT_PUBLIC_S3_IMAGES}/${logo}`
            : '/imgs/company-logo.svg'
        }
        alt={`Logo ${name}`}
      />
      <div className="flex-1 flex flex-col gap-[16px]">
        <div className="flex flex-col gap-[8px]">
          <h2 className="font-bold text-3xl">{name}</h2>
          <div className="flex items-center font-bold text-2xl">
            <p className="mr-[4px]">{rating}</p>
            <FaStar className="w-6 h-6 text-yellow-400" />
          </div>
        </div>

        <div className="flex flex-col gap-[4px] text-2xl">
          <p>{country}</p>
          <p>{city}</p>
        </div>

        <div className="flex gap-[20px] text-xl font-semibold">
          <p>
            {commentsCount} {getReviewWord(commentsCount)}
          </p>
          <p>{totalScore.toLocaleString('ru-RU')}/26 000</p>
        </div>
      </div>
      <Link href={`/companies/${id}`} className="self-end text-xl">
        Подробнее
      </Link>
    </Card>
  );
}

function getReviewWord(count: number): string {
  if (count === 0) return 'отзывов';

  const mod10 = count % 10;
  const mod100 = count % 100;

  if (mod100 >= 11 && mod100 <= 14) {
    return 'отзывов';
  }

  if (mod10 === 1) {
    return 'отзыв';
  }

  if (mod10 >= 2 && mod10 <= 4) {
    return 'отзыва';
  }

  return 'отзывов';
}
