'use client';

import { Card, StarRating } from '@/shared/ui';

type CompaniesCardProps = {
  name: string;
  country: string;
  city: string;
  rating?: number;
  logo?: string;
};

export function CompaniesCard({
  name,
  country,
  city,
  rating,
  logo,
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
            <StarRating value={Number(rating) * 200} onChange={() => {}} />
          </div>
        </div>

        <div className="flex flex-col gap-[4px] text-2xl">
          <p>{country}</p>
          <p>{city}</p>
        </div>

        <div className="flex gap-[20px] text-xl font-semibold">
          <p>28 отзывов</p>
          <p>18 450/26 000</p>
        </div>
      </div>
      <a className="self-end text-xl">Подробнее</a>
    </Card>
  );
}
