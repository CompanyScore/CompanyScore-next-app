import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-500)]/50 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default:
          'bg-[var(--brand-500)] text-background shadow hover:bg-[var(--brand-600)] active:bg-[var(--brand-700)] active:translate-y-[1px]',
        secondary:
          'bg-secondary text-secondary-foreground shadow hover:bg-secondary/80 active:bg-secondary/60 active:translate-y-[1px]',
        outline:
          'border border-border bg-background text-foreground shadow hover:bg-muted active:bg-muted/80 active:translate-y-[1px]',
        ghost:
          'text-foreground hover:bg-muted active:bg-muted/80 active:translate-y-[1px]',
        ghostLight:
          'text-muted-foreground hover:bg-muted active:bg-muted/80 active:translate-y-[1px]',
      },
      size: {
        xs: 'h-6 px-2 text-xs [&_svg]:w-3 [&_svg]:h-3',
        sm: 'h-8 px-3 text-sm [&_svg]:w-4 [&_svg]:h-4',
        md: 'h-10 px-4 text-base [&_svg]:w-5 [&_svg]:h-5',
        lg: 'h-12 px-5 text-lg [&_svg]:w-6 [&_svg]:h-6',
        xl: 'h-14 px-6 text-xl [&_svg]:w-7 [&_svg]:h-7',
      },
      short: {
        true: 'px-0 w-6 h-6 [&_svg]:w-3 [&_svg]:h-3',
        false: '',
      },
    },
    compoundVariants: [
      {
        short: true,
        size: 'sm',
        class: 'w-8 h-8 [&_svg]:w-4 [&_svg]:h-4',
      },
      {
        short: true,
        size: 'md',
        class: 'w-10 h-10 [&_svg]:w-5 [&_svg]:h-5',
      },
      {
        short: true,
        size: 'lg',
        class: 'w-12 h-12 [&_svg]:w-6 [&_svg]:h-6',
      },
      {
        short: true,
        size: 'xl',
        class: 'w-14 h-14 [&_svg]:w-7 [&_svg]:h-7',
      },
    ],
    defaultVariants: {
      variant: 'default',
      size: 'md',
      short: false,
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  short?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
  interactive?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      short = false,
      asChild = false,
      interactive = false,
      children,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button';
    const isInteractive = interactive || !!props.onClick;

    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, short, className }),
          isInteractive &&
            'cursor-pointer hover:scale-[var(--scale-hover)] transition-transform',
        )}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
