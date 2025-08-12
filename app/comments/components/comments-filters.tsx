'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Checkbox, FilterCard, Select } from '@/shared/ui';
import { OptionType } from '@/shared/ui/select';
import { useEffect, useMemo, useState } from 'react';
import { FaStar } from 'react-icons/fa';

type City = {
  id: string;
  name: string;
};

type Location = {
  id: string;
  name: string;
  cities: City[];
};

type Props = {
  categories: { id: string; title: string }[];
  positions: { id: string; title: string; category: { id: string } }[];
  locations: Location[];
};

export function CommentsFilter({ categories, positions, locations }: Props) {
  const [companyCountry, setCompanyCountry] = useState<string | null>(null);
  const [companyCity, setCompanyCity] = useState<string | null>(null);
  const [citiesOptions, setCitiesOptions] = useState<OptionType[] | []>([]);

  const countriesOptions = useMemo(
    () =>
      locations.map(location => ({
        value: location.id,
        label: location.name,
      })),
    [locations],
  );

  useEffect(() => {
    if (companyCountry) {
      console.log(companyCountry);
      const cities = locations
        .find(location => location.id === companyCountry)
        ?.cities.map(city => ({
          value: city.name,
          label: city.name,
        }));

      if (cities) {
        setCitiesOptions(cities);
      }
    }
  }, [companyCountry, locations]);

  return (
    <div className="hidden lg:block w-[288px] shrink-0 scrollbar-none">
      <div className="flex flex-col gap-5 max-w-[288px] w-full sticky top-24 max-h-[calc(100vh-6rem)] overflow-auto scrollbar-none">
        <FilterCard title={'Компания'}>
          <div className="max-w-[232px] w-full">
            <Select
              placeholder="Компания"
              isClearable
              options={[]}
              value={null}
              onChange={() => console.log(1)}
            />
          </div>
          <div className="max-w-[232px] w-full">
            <Select
              placeholder="Страна"
              isClearable
              options={countriesOptions}
              value={companyCountry}
              onChange={country => setCompanyCountry(country)}
            />
          </div>
          <div className="max-w-[232px] w-full">
            <Select
              placeholder="Город"
              isClearable
              isDisabled={!companyCountry}
              options={citiesOptions}
              value={companyCity}
              onChange={city => setCompanyCity(city)}
            />
          </div>
        </FilterCard>

        <FilterPositions categories={categories} positions={positions} />

        <FilterInteractionType />

        <FilterCard title={'Aнонимность'}>
          <div className="flex flex-col gap-5 w-full">
            <Checkbox
              value={''}
              label={'Подписанные отзывы'}
              selected={false}
              onChange={() => console.log(1)}
            />
            <Checkbox
              value={''}
              label={'Анонимные отзывы'}
              selected={false}
              onChange={() => console.log(1)}
            />
          </div>
        </FilterCard>

        <FilterCard title={'Оценка'}>
          <div className="flex flex-col gap-5 w-full px-7">
            <Checkbox
              value={''}
              label={<FaStar className="text-yellow-400 w-6 h-6" />}
              selected={false}
              onChange={() => console.log(1)}
            />
            <Checkbox
              value={''}
              label={
                <>
                  <FaStar className="text-yellow-400 w-6 h-6" />
                  <FaStar className="text-yellow-400 w-6 h-6" />
                </>
              }
              selected={false}
              onChange={() => console.log(1)}
            />
            <Checkbox
              value={''}
              label={
                <>
                  <FaStar className="text-yellow-400 w-6 h-6" />
                  <FaStar className="text-yellow-400 w-6 h-6" />
                  <FaStar className="text-yellow-400 w-6 h-6" />
                </>
              }
              selected={false}
              onChange={() => console.log(1)}
            />
            <Checkbox
              value={''}
              label={
                <>
                  <FaStar className="text-yellow-400 w-6 h-6" />
                  <FaStar className="text-yellow-400 w-6 h-6" />
                  <FaStar className="text-yellow-400 w-6 h-6" />
                  <FaStar className="text-yellow-400 w-6 h-6" />
                </>
              }
              selected={false}
              onChange={() => console.log(1)}
            />
            <Checkbox
              value={''}
              label={
                <>
                  <FaStar className="text-yellow-400 w-6 h-6" />
                  <FaStar className="text-yellow-400 w-6 h-6" />
                  <FaStar className="text-yellow-400 w-6 h-6" />
                  <FaStar className="text-yellow-400 w-6 h-6" />
                  <FaStar className="text-yellow-400 w-6 h-6" />
                </>
              }
              selected={false}
              onChange={() => console.log(1)}
            />
          </div>
        </FilterCard>
      </div>
    </div>
  );
}

type PositionsProps = {
  categories: { id: string; title: string }[];
  positions: { id: string; title: string; category: { id: string } }[];
};

function FilterPositions({ categories, positions }: PositionsProps) {
  const router = useRouter();
  const sp = useSearchParams();

  const userPositionCategoryId = sp.get('userPositionCategoryId'); // строка или null
  const userPositionId = sp.get('userPositionId'); // строка или null

  const categoryOptions = useMemo(
    () => categories.map(c => ({ label: c.title, value: c.id })),
    [categories],
  );

  const positionOptions = useMemo(
    () =>
      positions
        .filter(
          p =>
            !userPositionCategoryId || p.category.id === userPositionCategoryId,
        )
        .map(p => ({ label: p.title, value: p.id })),
    [positions, userPositionCategoryId],
  );

  return (
    <FilterCard title={'Должность'}>
      <div className="max-w-[232px] w-full">
        <Select
          placeholder="Сфера деятельности"
          isClearable
          options={categoryOptions}
          value={userPositionCategoryId}
          onChange={id => {
            const next = new URLSearchParams(sp);
            if (id) next.set('userPositionCategoryId', id);
            else next.delete('userPositionCategoryId');
            next.delete('userPositionId'); // сбросить должность при смене категории
            router.replace(`?${next.toString()}`);
          }}
        />
      </div>

      <div className="max-w-[232px] w-full">
        <Select
          placeholder="Должность"
          isClearable
          isDisabled={!userPositionCategoryId}
          options={positionOptions}
          value={userPositionId}
          onChange={id => {
            const next = new URLSearchParams(sp);
            if (id) next.set('userPositionId', id);
            else next.delete('userPositionId');
            router.replace(`?${next.toString()}`);
          }}
        />
      </div>
    </FilterCard>
  );
}

function FilterInteractionType() {
  return (
    <FilterCard title={'Тип взаимодействия'}>
      <div className="flex flex-col gap-5 w-full">
        <Checkbox
          value={''}
          label={'Тестовое'}
          selected={false}
          onChange={() => console.log(1)}
        />
        <Checkbox
          value={''}
          label={'Собеседование'}
          selected={false}
          onChange={() => console.log(1)}
        />
        <Checkbox
          value={''}
          label={'Стажировка'}
          selected={false}
          onChange={() => console.log(1)}
        />
        <Checkbox
          value={''}
          label={'Работа'}
          selected={false}
          onChange={() => console.log(1)}
        />
      </div>
    </FilterCard>
  );
}
