'use client';

import * as React from 'react';
import { CheckIcon, ChevronsUpDownIcon } from 'lucide-react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const comboboxVariants = cva('w-full transition-all duration-200', {
  variants: {
    variant: {
      default: 'bg-background',
      secondary: 'bg-secondary',
      outline: 'bg-background',
      ghost: 'bg-muted/50',
      brand: 'bg-[var(--brand-50)]',
    },
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
});

const triggerVariants = cva(
  'w-full justify-between transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--brand-500)] rounded-lg',
  {
    variants: {
      variant: {
        default:
          'bg-background hover:bg-muted border border-border text-foreground',
        secondary:
          'bg-secondary hover:bg-secondary/80 border border-border text-secondary-foreground',
        outline:
          'bg-background hover:bg-muted border-2 border-border text-foreground',
        ghost: 'bg-muted hover:bg-muted/80 text-muted-foreground',
        brand:
          'bg-[var(--brand-50)] hover:bg-[var(--brand-100)] border border-[var(--brand-500)] text-[var(--brand-500)]',
      },
      size: {
        sm: 'h-8 px-3 text-sm',
        md: 'h-10 px-4 text-base',
        lg: 'h-12 px-5 text-lg',
      },
      disabled: {
        true: 'opacity-50 cursor-not-allowed',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      disabled: false,
    },
  },
);

export interface ComboboxOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface ComboboxProps extends VariantProps<typeof comboboxVariants> {
  options: ComboboxOption[];
  value?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  searchPlaceholder?: string;
  emptyMessage?: string;
  disabled?: boolean;
  loading?: boolean;
  multiple?: boolean;
  selectedValues?: string[];
  onSelectedValuesChange?: (values: string[]) => void;
  className?: string;
}

const Combobox = React.forwardRef<HTMLDivElement, ComboboxProps>(
  ({
    className,
    variant,
    size,
    options,
    value,
    onValueChange,
    placeholder = 'Select option...',
    searchPlaceholder = 'Search...',
    emptyMessage = 'No options found.',
    disabled = false,
    multiple = false,
    selectedValues = [],
    onSelectedValuesChange,
  }) => {
    const [open, setOpen] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState('');
    const containerRef = React.useRef<HTMLDivElement>(null);

    const handleSelect = (currentValue: string) => {
      if (multiple) {
        const newValues = selectedValues.includes(currentValue)
          ? selectedValues.filter(v => v !== currentValue)
          : [...selectedValues, currentValue];
        onSelectedValuesChange?.(newValues);
      } else {
        const newValue = currentValue === value ? '' : currentValue;
        onValueChange?.(newValue);
        setOpen(false);
      }
    };

    const getDisplayValue = () => {
      if (multiple) {
        if (selectedValues.length === 0) return placeholder;
        if (selectedValues.length === 1) {
          return (
            options.find(opt => opt.value === selectedValues[0])?.label ||
            placeholder
          );
        }
        return `${selectedValues.length} items selected`;
      }

      if (!value) return placeholder;
      return (
        options.find(option => option.value === value)?.label || placeholder
      );
    };

    const filteredOptions = options.filter(option =>
      option.label.toLowerCase().includes(searchValue.toLowerCase()),
    );

    // Close dropdown when clicking outside
    React.useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          containerRef.current &&
          !containerRef.current.contains(event.target as Node)
        ) {
          setOpen(false);
        }
      };

      if (open) {
        document.addEventListener('mousedown', handleClickOutside);
      }

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [open]);

    return (
      <div
        ref={containerRef}
        className={cn(
          comboboxVariants({ variant, size }),
          className,
          'relative',
        )}
      >
        <Button
          variant="ghost"
          role="combobox"
          aria-expanded={open}
          disabled={disabled}
          className={cn(triggerVariants({ variant, size, disabled }))}
          onClick={() => {
            if (!disabled) {
              setOpen(!open);
            }
          }}
        >
          <span className="truncate">{getDisplayValue()}</span>
          <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>

        {open && (
          <div className="absolute z-50 w-full mt-1 bg-background border border-border rounded-lg shadow-lg max-h-60 overflow-auto">
            <div className="p-2 border-b border-border">
              <input
                type="text"
                placeholder={searchPlaceholder}
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--brand-500)] bg-background text-foreground placeholder:text-muted-foreground"
              />
            </div>

            <div className="py-1">
              {filteredOptions.length === 0 ? (
                <div className="px-3 py-2 text-sm text-muted-foreground">
                  {emptyMessage}
                </div>
              ) : (
                filteredOptions.map(option => (
                  <button
                    key={option.value}
                    disabled={option.disabled}
                    onClick={() => {
                      if (!option.disabled) {
                        handleSelect(option.value);
                      }
                    }}
                    className={cn(
                      'w-full px-3 py-2 text-left text-sm hover:bg-muted focus:bg-muted focus:outline-none flex items-center text-foreground',
                      option.disabled && 'opacity-50 cursor-not-allowed',
                      (multiple
                        ? selectedValues.includes(option.value)
                        : value === option.value) &&
                        'bg-[var(--brand-50)] text-[var(--brand-500)]',
                    )}
                  >
                    <CheckIcon
                      className={cn(
                        'mr-2 h-4 w-4',
                        multiple
                          ? selectedValues.includes(option.value)
                            ? 'opacity-100'
                            : 'opacity-0'
                          : value === option.value
                            ? 'opacity-100'
                            : 'opacity-0',
                      )}
                    />
                    {option.label}
                  </button>
                ))
              )}
            </div>
          </div>
        )}
      </div>
    );
  },
);

Combobox.displayName = 'Combobox';

export { Combobox, comboboxVariants };
