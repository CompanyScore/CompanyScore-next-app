import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'lucide-react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const checkboxVariants = cva(
  'peer shrink-0 border shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary',
  {
    variants: {
      size: {
        xs: 'h-3 w-3',
        sm: 'h-4 w-4',
        md: 'h-5 w-5',
        lg: 'h-6 w-6',
        xl: 'h-8 w-8',
      },
      variant: {
        default: 'border-input',
        brand:
          'border-[var(--brand-500)] data-[state=checked]:bg-[var(--brand-500)] data-[state=checked]:border-[var(--brand-500)]',
        success:
          'border-[var(--success-600)] data-[state=checked]:bg-[var(--success-600)] data-[state=checked]:border-[var(--success-600)]',
        warning:
          'border-[var(--warning-500)] data-[state=checked]:bg-[var(--warning-500)] data-[state=checked]:border-[var(--warning-500)]',
        error:
          'border-[var(--error-500)] data-[state=checked]:bg-[var(--error-500)] data-[state=checked]:border-[var(--error-500)]',
      },
      shape: {
        square: 'rounded-sm',
        round: 'rounded-full',
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'default',
      shape: 'square',
    },
  },
);

export interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
    VariantProps<typeof checkboxVariants> {
  icon?: React.ReactNode;
  wrapperClassName?: string;
  isGroup?: boolean;
}

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(
  (
    { className, size, variant, icon, wrapperClassName, isGroup, ...props },
    ref,
  ) => (
    <div className={cn('flex items-center space-x-2', wrapperClassName)}>
      <CheckboxPrimitive.Root
        ref={ref}
        className={cn(
          checkboxVariants({
            size,
            variant,
            shape: isGroup ? 'square' : 'round',
            className,
          }),
        )}
        {...props}
      >
        <CheckboxPrimitive.Indicator
          className={cn('flex items-center justify-center text-current')}
        >
          {icon || <Check className="h-3 w-3" />}
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
    </div>
  ),
);
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox, checkboxVariants };
