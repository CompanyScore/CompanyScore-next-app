'use client';

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

type CommentsFilterProps = {
  locations: Location[];
};

export const CommentsFilter = ({ locations }: CommentsFilterProps) => {
  const [companyCountry, setCompanyCountry] = useState<OptionType | null>(null);
  const [companyCity, setCompanyCity] = useState<OptionType | null>(null);
  const [citiesOptions, setCitiesOptions] = useState<OptionType[] | []>([]);
  const [positionCountry, setPositionCountry] = useState<OptionType | null>(
    null,
  );

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
      const cities = locations
        .find(location => location.id === companyCountry.value)
        ?.cities.map(city => ({
          value: city.name,
          label: city.name,
        }));

      if (cities) {
        setCitiesOptions(cities);
      }
    }
  }, [companyCountry]);

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

        <FilterCard title={'Должность'}>
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
              value={positionCountry}
              onChange={country => setPositionCountry(country)}
            />
          </div>
        </FilterCard>

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
};
