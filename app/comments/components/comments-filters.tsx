'use client';

import { Checkbox, FilterCard, Select } from '@/shared/ui';
import { FaStar } from 'react-icons/fa';

export function CommentsFilter() {
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
              options={[]}
              value={null}
              onChange={() => console.log(1)}
            />
          </div>
          <div className="max-w-[232px] w-full">
            <Select
              placeholder="Город"
              isClearable
              options={[]}
              value={null}
              onChange={() => console.log(1)}
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
              options={[]}
              value={null}
              onChange={() => console.log(1)}
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
}
