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

        <FilterInteraction />

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

  const userPositionCategoryId = sp.get('position_category'); // строка или null
  const userPositionId = sp.get('position'); // строка или null

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
            if (id) next.set('position_category', id);
            else next.delete('position_category');
            next.delete('position'); // сбросить должность при смене категории
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
            if (id) next.set('position', id);
            else next.delete('position');
            router.replace(`?${next.toString()}`);
          }}
        />
      </div>
    </FilterCard>
  );
}

function FilterInteraction() {
  const router = useRouter();
  const sp = useSearchParams();

  type Interaction = 'test' | 'interview' | 'internship' | 'work';

  const selectedSet = useMemo(() => {
    const raw = sp.get('interaction') || '';
    return new Set(raw.split(',').filter(Boolean) as Interaction[]);
  }, [sp]);

  const toggle = (key: Interaction) => {
    const next = new URLSearchParams(sp);
    const s = new Set(selectedSet);
    if (s.has(key)) s.delete(key);
    else s.add(key);

    if (s.size) next.set('interaction', Array.from(s).join(','));
    else next.delete('interaction');

    router.replace(`?${next.toString()}`);
  };

  return (
    <FilterCard title={'Тип взаимодействия'}>
      <div className="flex flex-col gap-5 w-full">
        <Checkbox
          value="test"
          label="Тестовое"
          selected={selectedSet.has('test')}
          onChange={() => toggle('test')}
        />
        <Checkbox
          value="interview"
          label="Собеседование"
          selected={selectedSet.has('interview')}
          onChange={() => toggle('interview')}
        />
        <Checkbox
          value="internship"
          label="Стажировка"
          selected={selectedSet.has('internship')}
          onChange={() => toggle('internship')}
        />
        <Checkbox
          value="work"
          label="Работа"
          selected={selectedSet.has('work')}
          onChange={() => toggle('work')}
        />
      </div>
    </FilterCard>
  );
}
