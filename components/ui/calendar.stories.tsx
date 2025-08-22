import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Calendar } from './calendar';
import { DatePicker, RangeDatePicker } from './date-picker';
import { format } from 'date-fns';

const meta: Meta<typeof Calendar> = {
  title: 'UI/Calendar',
  component: Calendar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Компонент календаря с интерактивным выбором дат и диапазонов.',
      },
      sourceState: 'hidden',
      controls: { sort: 'requiredFirst' },
      expanded: false,
    },
  },
  tags: ['autodocs'],
  argTypes: {
    mode: {
      control: { type: 'select' },
      options: ['single', 'range'],
      description: 'Режим выбора даты',
    },
    numberOfMonths: {
      control: { type: 'number', min: 1, max: 12 },
      description: 'Количество отображаемых месяцев',
    },
    showOutsideDays: {
      control: { type: 'boolean' },
      description: 'Показывать дни из других месяцев',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date());

    return (
      <div className="space-y-4">
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            Выбранная дата: {date ? format(date, 'dd.MM.yyyy') : 'Не выбрана'}
          </p>
        </div>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-lg border shadow-sm"
        />
      </div>
    );
  },
};

export const RangeSelection: Story = {
  render: () => {
    const [range, setRange] = React.useState<
      { from: Date; to?: Date } | undefined
    >();

    return (
      <div className="space-y-4">
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            {range?.from ? (
              <>
                От: {format(range.from, 'dd.MM.yyyy')}
                {range.to && ` До: ${format(range.to, 'dd.MM.yyyy')}`}
              </>
            ) : (
              'Выберите диапазон дат'
            )}
          </p>
        </div>
        <Calendar
          mode="range"
          selected={range}
          onSelect={setRange}
          numberOfMonths={2}
          className="rounded-lg border shadow-sm"
        />
      </div>
    );
  },
};

export const MultipleMonths: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date());

    return (
      <div className="space-y-4">
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            Выбранная дата: {date ? format(date, 'dd.MM.yyyy') : 'Не выбрана'}
          </p>
        </div>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          numberOfMonths={3}
          className="rounded-lg border shadow-sm"
        />
      </div>
    );
  },
};

export const WithMonthYearDropdowns: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date());

    return (
      <div className="space-y-4">
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            Выбранная дата: {date ? format(date, 'dd.MM.yyyy') : 'Не выбрана'}
          </p>
        </div>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          captionLayout="dropdown-buttons"
          className="rounded-lg border shadow-sm"
        />
      </div>
    );
  },
};

export const DisabledDates: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date());

    const disabledDays = [
      { before: new Date() }, // Все даты до сегодня
      { dayOfWeek: [0, 6] }, // Воскресенье и суббота
    ];

    return (
      <div className="space-y-4">
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            Выбранная дата: {date ? format(date, 'dd.MM.yyyy') : 'Не выбрана'}
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Отключены: прошедшие даты, выходные
          </p>
        </div>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          disabled={disabledDays}
          className="rounded-lg border shadow-sm"
        />
      </div>
    );
  },
};

export const InteractiveDatePicker: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>();

    return (
      <div className="space-y-4">
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            Выбранная дата: {date ? format(date, 'dd.MM.yyyy') : 'Не выбрана'}
          </p>
        </div>
        <DatePicker
          date={date}
          onDateChange={setDate}
          placeholder="Выберите дату"
          className="w-[300px]"
        />
      </div>
    );
  },
};

export const RangeDatePickerDemo: Story = {
  render: () => {
    const [range, setRange] = React.useState<
      { from: Date; to?: Date } | undefined
    >();

    return (
      <div className="space-y-4">
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            {range?.from ? (
              <>
                От: {format(range.from, 'dd.MM.yyyy')}
                {range.to && ` До: ${format(range.to, 'dd.MM.yyyy')}`}
              </>
            ) : (
              'Выберите диапазон дат'
            )}
          </p>
        </div>
        <RangeDatePicker
          range={range}
          onRangeChange={setRange}
          placeholder="Выберите диапазон дат"
          className="w-[300px]"
        />
      </div>
    );
  },
};

export const KeyboardInput: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>();

    return (
      <div className="space-y-4">
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            Выбранная дата: {date ? format(date, 'dd.MM.yyyy') : 'Не выбрана'}
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Попробуйте ввести дату в формате dd.mm.yyyy и нажать Enter
          </p>
        </div>
        <DatePicker
          date={date}
          onDateChange={setDate}
          placeholder="Введите дату или выберите из календаря"
          className="w-[300px]"
        />
      </div>
    );
  },
};

export const DisabledState: Story = {
  render: () => {
    return (
      <div className="space-y-4">
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            Отключенный DatePicker
          </p>
        </div>
        <DatePicker disabled placeholder="Отключено" className="w-[300px]" />
      </div>
    );
  },
};

export const CustomStyling: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date());

    return (
      <div className="space-y-4">
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            Календарь с кастомным стилем
          </p>
        </div>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-xl border-2 border-brand-200 shadow-lg bg-gradient-to-br from-white to-brand-50"
        />
      </div>
    );
  },
};
