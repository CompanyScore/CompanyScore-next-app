'use client';

import { Checkbox } from '@/shared/ui';
import { Select } from '@/shared/ui/select';
import { FaStar } from 'react-icons/fa';

export function CommentsFilter() {
  return (
    <div className="hidden lg:block w-[288px] shrink-0 scrollbar-none">
      <div className="flex flex-col gap-5 max-w-[288px] w-full sticky top-24 max-h-[calc(100vh-6rem)] overflow-auto scrollbar-none">
        <div className="flex flex-col items-center gap-6 w-full py-3 border border-neutral-500 rounded-lg">
          <div className="self-start border-b border-neutral-500 w-full pb-3">
            <b className="px-7">Компания</b>
          </div>

          <div className="flex flex-col gap-7 w-full py-3 px-7">
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
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 w-full py-3 border border-neutral-500 rounded-lg">
          <div className="self-start border-b border-neutral-500 w-full pb-3">
            <b className="px-7">Должность</b>
          </div>

          <div className="flex flex-col gap-7 w-full py-3 px-7">
            <div className="max-w-[232px] w-full">
              <Select
                placeholder="Сфера деятельности"
                isClearable
                options={[]}
                value={null}
                onChange={() => console.log(1)}
              />
            </div>

            <div className="max-w-[232px] w-full">
              <Select
                placeholder="Должность"
                isClearable
                options={[]}
                value={null}
                onChange={() => console.log(1)}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 w-full py-3 border border-neutral-500 rounded-lg">
          <div className="self-start border-b border-neutral-500 w-full pb-3">
            <b className="px-7">Тип взаимодействия</b>
          </div>

          <div className="flex flex-col gap-5 w-full px-7">
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
        </div>

        <div className="flex flex-col items-center gap-6 w-full py-3 border border-neutral-500 rounded-lg">
          <div className="self-start border-b border-neutral-500 w-full pb-3">
            <b className="px-7">Aнонимность</b>
          </div>

          <div className="flex flex-col gap-5 w-full px-7">
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
        </div>

        <div className="flex flex-col items-center gap-6 w-full py-3 border border-neutral-500 rounded-lg">
          <div className="self-start border-b border-neutral-500 w-full pb-3">
            <b className="px-7">Оценка</b>
          </div>

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
        </div>
      </div>
    </div>
  );
}
