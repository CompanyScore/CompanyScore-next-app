import * as React from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends React.ComponentProps<'input'> {
  error?: string;
  mask?: string;
  pattern?: string;
  validateOnChange?: boolean;
  onValidationChange?: (isValid: boolean) => void;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      error,
      mask,
      pattern,
      validateOnChange = false,
      onValidationChange,
      onChange,
      ...props
    },
    ref,
  ) => {
    const [isValid, setIsValid] = React.useState(true);
    const [value, setValue] = React.useState(
      props.value || props.defaultValue || '',
    );

    // Функция для применения маски
    const applyMask = (inputValue: string, maskPattern: string): string => {
      let result = '';
      let valueIndex = 0;

      for (
        let i = 0;
        i < maskPattern.length && valueIndex < inputValue.length;
        i++
      ) {
        const maskChar = maskPattern[i];
        const valueChar = inputValue[valueIndex];

        if (maskChar === '#') {
          // Только цифры
          if (/\d/.test(valueChar)) {
            result += valueChar;
            valueIndex++;
          }
        } else if (maskChar === 'A') {
          // Только буквы
          if (/[a-zA-Zа-яА-Я]/.test(valueChar)) {
            result += valueChar;
            valueIndex++;
          }
        } else if (maskChar === '*') {
          // Любой символ
          result += valueChar;
          valueIndex++;
        } else {
          // Фиксированный символ маски
          result += maskChar;
          if (valueChar === maskChar) {
            valueIndex++;
          }
        }
      }

      return result;
    };

    // Функция валидации
    const validateInput = (inputValue: string): boolean => {
      if (!pattern) return true;

      // Если поле пустое, не валидируем
      if (!inputValue.trim()) return true;

      const regex = new RegExp(pattern);
      return regex.test(inputValue);
    };

    // Обработчик изменения
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      let newValue = e.target.value;

      // Применяем маску если есть
      if (mask) {
        newValue = applyMask(newValue, mask);
      }

      setValue(newValue);

      // Валидация при изменении
      if (validateOnChange) {
        const valid = validateInput(newValue);
        setIsValid(valid);
        onValidationChange?.(valid);
      }

      // Вызываем оригинальный onChange
      if (onChange) {
        e.target.value = newValue;
        onChange(e);
      }
    };

    return (
      <div className="relative">
        <input
          type={type}
          className={cn(
            'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
            error && 'border-red-500 focus-visible:ring-red-500',
            !isValid && 'border-orange-500 focus-visible:ring-orange-500',
            className,
          )}
          ref={ref}
          value={value}
          onChange={handleChange}
          {...props}
        />
        {(error || (!isValid && validateOnChange && String(value).trim())) && (
          <p
            className={cn(
              'mt-1 text-xs',
              error ? 'text-red-500' : 'text-orange-500',
            )}
          >
            {error || 'Неверный формат'}
          </p>
        )}
      </div>
    );
  },
);
Input.displayName = 'Input';

export { Input };
