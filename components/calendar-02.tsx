import * as React from 'react';
import { format } from 'date-fns';
import { Calendar } from '@/components/ui/calendar';
import { DatePicker, RangeDatePicker } from '@/components/ui/date-picker';

export default function Calendar02() {
  const [date, setDate] = React.useState<Date | undefined>(
    new Date(2025, 5, 12),
  );
  const [range, setRange] = React.useState<
    { from: Date; to?: Date } | undefined
  >();

  return (
    <div className="space-y-8">
      {/* Одиночная дата */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Выбор одиночной даты</h3>
        <div className="flex items-center gap-4">
          <DatePicker
            date={date}
            onDateChange={setDate}
            placeholder="Выберите дату"
            className="w-[250px]"
          />
          <div className="text-sm text-muted-foreground">
            {date ? format(date, 'dd.MM.yyyy') : 'Дата не выбрана'}
          </div>
        </div>
      </div>

      {/* Диапазон дат */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Выбор диапазона дат</h3>
        <div className="flex items-center gap-4">
          <RangeDatePicker
            range={range}
            onRangeChange={setRange}
            placeholder="Выберите диапазон"
            className="w-[250px]"
          />
          <div className="text-sm text-muted-foreground">
            {range?.from ? (
              <>
                От: {format(range.from, 'dd.MM.yyyy')}
                {range.to && ` До: ${format(range.to, 'dd.MM.yyyy')}`}
              </>
            ) : (
              'Диапазон не выбран'
            )}
          </div>
        </div>
      </div>

      {/* Прямой календарь */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Прямой календарь</h3>
        <Calendar
          mode="single"
          defaultMonth={date}
          numberOfMonths={2}
          selected={date}
          onSelect={setDate}
          className="rounded-lg border shadow-sm"
        />
      </div>
    </div>
  );
}
