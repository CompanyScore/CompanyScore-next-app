import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center justify-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80',
        secondary:
          'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
        destructive:
          'border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80',
        outline: 'text-foreground',
        success:
          'border-transparent bg-success text-success-foreground shadow hover:bg-success/80',
        warning:
          'border-transparent bg-warning text-warning-foreground shadow hover:bg-warning/80',
        info: 'border-transparent bg-info text-info-foreground shadow hover:bg-info/80',
        brand:
          'border-transparent bg-[var(--brand-500)] text-white shadow hover:bg-[var(--brand-600)]',
      },
      size: {
        xs: 'px-1 py-0 text-xs min-w-[1rem] h-4',
        sm: 'px-1.5 py-0 text-xs min-w-[1.25rem] h-5',
        md: 'px-2 py-0.5 text-xs min-w-[1.5rem] h-6',
        lg: 'px-2.5 py-1 text-sm min-w-[2rem] h-7',
        xl: 'px-3 py-1.5 text-sm min-w-[2.5rem] h-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  customColor?: string;
}

function Badge({
  className,
  variant,
  size,
  customColor,
  style,
  ...props
}: BadgeProps) {
  const badgeStyle = customColor
    ? { backgroundColor: customColor, ...style }
    : style;

  return (
    <div
      className={cn(badgeVariants({ variant, size }), className)}
      style={badgeStyle}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
