import * as React from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const progressVariants = cva('relative w-full overflow-hidden rounded-full', {
  variants: {
    variant: {
      default: 'bg-primary/20',
      secondary: 'bg-secondary',
      outline: 'bg-background border border-border',
      success: 'bg-[var(--success-50)]',
      warning: 'bg-[var(--warning-50)]',
      error: 'bg-[var(--error-50)]',
      info: 'bg-[var(--info-50)]',
    },
    size: {
      sm: 'h-1',
      md: 'h-2',
      lg: 'h-3',
      xl: 'h-4',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
});

const progressIndicatorVariants = cva('h-full w-full flex-1 transition-all', {
  variants: {
    variant: {
      default: 'bg-primary',
      secondary: 'bg-secondary-foreground',
      outline: 'bg-foreground',
      success: 'bg-[var(--success-500)]',
      warning: 'bg-[var(--warning-500)]',
      error: 'bg-[var(--error-500)]',
      info: 'bg-[var(--info-500)]',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export interface ProgressProps
  extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>,
    VariantProps<typeof progressVariants> {
  indicatorColor?: string;
  backgroundColor?: string;
}

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(
  (
    {
      className,
      value,
      variant,
      size,
      indicatorColor,
      backgroundColor,
      ...props
    },
    ref,
  ) => (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(progressVariants({ variant, size }), className)}
      style={{
        backgroundColor: backgroundColor || undefined,
      }}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className={cn(progressIndicatorVariants({ variant }))}
        style={{
          transform: `translateX(-${100 - (value || 0)}%)`,
          backgroundColor: indicatorColor || undefined,
        }}
      />
    </ProgressPrimitive.Root>
  ),
);
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress, progressVariants, progressIndicatorVariants };
