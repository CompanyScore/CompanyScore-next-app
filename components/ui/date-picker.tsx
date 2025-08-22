import * as React from 'react';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { Calendar as CalendarIcon } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from './popover';
import { Button } from './button';
import { Calendar } from './calendar';
import { Input } from './input';
import { cn } from '@/lib/utils';

export interface DatePickerProps {
  date?: Date;
  onDateChange?: (date: Date | undefined) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  mode?: 'single' | 'range';
  range?: { from: Date; to?: Date };
  onRangeChange?: (range: { from: Date; to?: Date } | undefined) => void;
}

export function DatePicker({
  date,
  onDateChange,
  placeholder = 'Выберите дату',
  className,
  disabled = false,
  mode = 'single',
  range,
}: DatePickerProps) {
  const [open, setOpen] = React.useState(false);
  const [inputValue, setInputValue] = React.useState('');

  React.useEffect(() => {
    if (date) {
      setInputValue(format(date, 'dd.MM.yyyy', { locale: ru }));
    } else if (range?.from) {
      const fromStr = format(range.from, 'dd.MM.yyyy', { locale: ru });
      const toStr = range.to
        ? format(range.to, 'dd.MM.yyyy', { locale: ru })
        : '';
      setInputValue(toStr ? `${fromStr} - ${toStr}` : fromStr);
    } else {
      setInputValue('');
    }
  }, [date, range]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    // Парсинг даты из ввода
    if (mode === 'single') {
      const parsedDate = parseDateInput(value);
      if (parsedDate && onDateChange) {
        onDateChange(parsedDate);
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (mode === 'single') {
        const parsedDate = parseDateInput(inputValue);
        if (parsedDate && onDateChange) {
          onDateChange(parsedDate);
        }
      }
      setOpen(false);
    }
  };

  const parseDateInput = (input: string): Date | undefined => {
    // Поддержка форматов: dd.mm.yyyy, dd/mm/yyyy, dd-mm-yyyy
    const patterns = [
      /^(\d{1,2})[.\/-](\d{1,2})[.\/-](\d{4})$/,
      /^(\d{4})[.\/-](\d{1,2})[.\/-](\d{1,2})$/,
    ];

    for (const pattern of patterns) {
      const match = input.match(pattern);
      if (match) {
        let day, month, year;

        if (match[1].length === 4) {
          // Формат yyyy-mm-dd
          year = parseInt(match[1]);
          month = parseInt(match[2]) - 1;
          day = parseInt(match[3]);
        } else {
          // Формат dd-mm-yyyy
          day = parseInt(match[1]);
          month = parseInt(match[2]) - 1;
          year = parseInt(match[3]);
        }

        const date = new Date(year, month, day);
        if (!isNaN(date.getTime()) && date.getFullYear() === year) {
          return date;
        }
      }
    }
    return undefined;
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            'w-full justify-start text-left font-normal',
            !date && !range?.from && 'text-muted-foreground',
            className,
          )}
          disabled={disabled}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {inputValue || placeholder}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <div className="space-y-4 p-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Введите дату</label>
            <Input
              placeholder="dd.mm.yyyy"
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              className="w-full"
            />
          </div>
          <div className="border-t pt-4">
            <Calendar
              mode={mode}
              selected={mode === 'single' ? date : undefined}
              onSelect={mode === 'single' ? onDateChange : undefined}
              defaultMonth={date || range?.from}
              numberOfMonths={mode === 'range' ? 2 : 1}
              className="rounded-md border"
            />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export function RangeDatePicker({
  range,
  onRangeChange,
  placeholder = 'Выберите диапазон дат',
  className,
  disabled = false,
}: Omit<DatePickerProps, 'date' | 'onDateChange' | 'mode'>) {
  const [open, setOpen] = React.useState(false);
  const [inputValue, setInputValue] = React.useState('');

  React.useEffect(() => {
    if (range?.from) {
      const fromStr = format(range.from, 'dd.MM.yyyy', { locale: ru });
      const toStr = range.to
        ? format(range.to, 'dd.MM.yyyy', { locale: ru })
        : '';
      setInputValue(toStr ? `${fromStr} - ${toStr}` : fromStr);
    } else {
      setInputValue('');
    }
  }, [range]);

  const handleRangeChange = (
    newRange: { from: Date; to?: Date } | undefined,
  ) => {
    if (newRange && newRange.from && newRange.to) {
      // Если кликнули на ту же дату - сбрасываем диапазон
      if (newRange.from.getTime() === newRange.to.getTime()) {
        onRangeChange?.(undefined);
        return;
      }
    }
    onRangeChange?.(newRange);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            'w-full justify-start text-left font-normal',
            !range?.from && 'text-muted-foreground',
            className,
          )}
          disabled={disabled}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {inputValue || placeholder}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <div className="space-y-4 p-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Выберите диапазон дат</label>
            <div className="flex gap-2">
              <Input
                placeholder="От: dd.mm.yyyy"
                value={
                  range?.from
                    ? format(range.from, 'dd.MM.yyyy', { locale: ru })
                    : ''
                }
                readOnly
                className="flex-1"
              />
              <Input
                placeholder="До: dd.mm.yyyy"
                value={
                  range?.to
                    ? format(range.to, 'dd.MM.yyyy', { locale: ru })
                    : ''
                }
                readOnly
                className="flex-1"
              />
            </div>
          </div>
          <div className="border-t pt-4">
            <Calendar
              mode="range"
              selected={range}
              onSelect={handleRangeChange}
              defaultMonth={range?.from}
              numberOfMonths={2}
              className="rounded-md border"
            />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
