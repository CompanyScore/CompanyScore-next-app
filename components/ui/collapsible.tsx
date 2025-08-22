'use client';

import * as React from 'react';
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const collapsibleVariants = cva('w-full transition-all duration-200', {
  variants: {
    variant: {
      default: 'border border-border rounded-lg bg-background',
      secondary: 'border border-border rounded-lg bg-secondary',
      outline: 'border-2 border-border rounded-lg bg-background',
      ghost: 'rounded-lg bg-muted',
      brand: 'border border-[var(--brand-500)] rounded-lg bg-background',
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
  'flex items-center justify-between w-full px-4 py-3 text-left transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--brand-500)]',
  {
    variants: {
      variant: {
        default: 'hover:bg-muted',
        secondary: 'hover:bg-secondary/80',
        outline: 'hover:bg-muted',
        ghost: 'hover:bg-muted/80',
        brand: 'hover:bg-[var(--brand-50)]',
      },
      size: {
        sm: 'px-3 py-2',
        md: 'px-4 py-3',
        lg: 'px-6 py-4',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  },
);

const contentVariants = cva('px-4 py-3 text-muted-foreground', {
  variants: {
    variant: {
      default: 'border-t border-border',
      secondary: 'border-t border-border',
      outline: 'border-t-2 border-border',
      ghost: '',
      brand: 'border-t border-[var(--brand-200)]',
    },
    size: {
      sm: 'px-3 py-2 text-sm',
      md: 'px-4 py-3 text-base',
      lg: 'px-6 py-4 text-lg',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
});

export interface CollapsibleProps
  extends React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Root>,
    VariantProps<typeof collapsibleVariants> {
  defaultOpen?: boolean;
}

const Collapsible = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.Root>,
  CollapsibleProps
>(({ className, variant, size, defaultOpen = false, ...props }, ref) => (
  <CollapsiblePrimitive.Root
    ref={ref}
    defaultOpen={defaultOpen}
    className={cn(collapsibleVariants({ variant, size, className }))}
    {...props}
  />
));
Collapsible.displayName = CollapsiblePrimitive.Root.displayName;

export interface CollapsibleTriggerProps
  extends React.ComponentPropsWithoutRef<
      typeof CollapsiblePrimitive.CollapsibleTrigger
    >,
    VariantProps<typeof triggerVariants> {}

const CollapsibleTrigger = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.CollapsibleTrigger>,
  CollapsibleTriggerProps
>(({ className, variant, size, children, ...props }, ref) => (
  <CollapsiblePrimitive.CollapsibleTrigger
    ref={ref}
    className={cn(triggerVariants({ variant, size, className }))}
    {...props}
  >
    {children}
  </CollapsiblePrimitive.CollapsibleTrigger>
));
CollapsibleTrigger.displayName =
  CollapsiblePrimitive.CollapsibleTrigger.displayName;

export interface CollapsibleContentProps
  extends React.ComponentPropsWithoutRef<
      typeof CollapsiblePrimitive.CollapsibleContent
    >,
    VariantProps<typeof contentVariants> {}

const CollapsibleContent = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.CollapsibleContent>,
  CollapsibleContentProps
>(({ className, variant, size, children, ...props }, ref) => (
  <CollapsiblePrimitive.CollapsibleContent
    ref={ref}
    className={cn(contentVariants({ variant, size, className }))}
    {...props}
  >
    {children}
  </CollapsiblePrimitive.CollapsibleContent>
));
CollapsibleContent.displayName =
  CollapsiblePrimitive.CollapsibleContent.displayName;

export {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
  collapsibleVariants,
};
