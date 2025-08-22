import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const spinnerVariants = cva('inline-block', {
  variants: {
    variant: {
      default: 'text-muted-foreground',
      primary: 'text-[var(--brand-500)]',
      white: 'text-background',
      black: 'text-foreground',
    },
    size: {
      xs: 'w-4 h-4',
      sm: 'w-6 h-6',
      md: 'w-8 h-8',
      lg: 'w-12 h-12',
      xl: 'w-16 h-16',
      '2xl': 'w-20 h-20',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
});

export interface SpinnerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof spinnerVariants> {}

const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        className={cn(spinnerVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          className="w-full h-full"
        >
          <g stroke="currentColor">
            <circle
              cx="12"
              cy="12"
              r="9.5"
              fill="none"
              strokeLinecap="round"
              strokeWidth="3"
            >
              <animate
                attributeName="stroke-dasharray"
                calcMode="spline"
                dur="1.5s"
                keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1"
                keyTimes="0;0.475;0.95;1"
                repeatCount="indefinite"
                values="0 150;42 150;42 150;42 150"
              />
              <animate
                attributeName="stroke-dashoffset"
                calcMode="spline"
                dur="1.5s"
                keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1"
                keyTimes="0;0.475;0.95;1"
                repeatCount="indefinite"
                values="0;-16;-59;-59"
              />
            </circle>
            <animateTransform
              attributeName="transform"
              dur="2s"
              repeatCount="indefinite"
              type="rotate"
              values="0 12 12;360 12 12"
            />
          </g>
        </svg>
      </div>
    );
  },
);

Spinner.displayName = 'Spinner';

export { Spinner, spinnerVariants };
