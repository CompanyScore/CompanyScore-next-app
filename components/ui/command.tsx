import * as React from 'react';
import { type DialogProps } from '@radix-ui/react-dialog';
import { Command as CommandPrimitive } from 'cmdk';
import { Search } from 'lucide-react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import { Dialog, DialogContent } from '@/components/ui/dialog';

// Утилита для определения OS
const getOS = () => {
  if (typeof window === 'undefined') return 'unknown';

  const platform = window.navigator.platform.toLowerCase();
  if (platform.includes('win')) return 'windows';
  if (platform.includes('mac')) return 'mac';
  if (platform.includes('linux') || platform.includes('unix')) return 'unix';
  return 'unknown';
};

// Утилита для получения правильного символа клавиши в зависимости от OS
const getKeySymbol = (key: string) => {
  const os = getOS();

  const keyMap: Record<string, Record<string, string>> = {
    windows: {
      cmd: 'Ctrl',
      ctrl: 'Ctrl',
      alt: 'Alt',
      shift: 'Shift',
      enter: 'Enter',
      escape: 'Esc',
      backspace: 'Backspace',
      delete: 'Del',
      tab: 'Tab',
      space: 'Space',
    },
    mac: {
      cmd: '⌘',
      ctrl: '⌃',
      alt: '⌥',
      shift: '⇧',
      enter: '↵',
      escape: '⎋',
      backspace: '⌫',
      delete: '⌦',
      tab: '⇥',
      space: 'Space',
    },
    unix: {
      cmd: 'Ctrl',
      ctrl: 'Ctrl',
      alt: 'Alt',
      shift: 'Shift',
      enter: 'Enter',
      escape: 'Esc',
      backspace: 'Backspace',
      delete: 'Del',
      tab: 'Tab',
      space: 'Space',
    },
    unknown: {
      cmd: 'Ctrl',
      ctrl: 'Ctrl',
      alt: 'Alt',
      shift: 'Shift',
      enter: 'Enter',
      escape: 'Esc',
      backspace: 'Backspace',
      delete: 'Del',
      tab: 'Tab',
      space: 'Space',
    },
  };

  return keyMap[os]?.[key.toLowerCase()] || key;
};

// Утилита для форматирования шорткатов
const formatShortcut = (shortcut: string) => {
  return shortcut
    .split('+')
    .map(key => getKeySymbol(key.trim()))
    .join(' ');
};

const commandVariants = cva(
  'flex h-full w-full flex-col overflow-hidden rounded-md',
  {
    variants: {
      variant: {
        default: 'bg-background border border-border text-foreground',
        secondary:
          'bg-secondary border border-border text-secondary-foreground',
        outline: 'bg-background border-2 border-border text-foreground',
        ghost: 'bg-muted text-muted-foreground',
        brand:
          'bg-[var(--brand-50)] border border-[var(--brand-500)] text-[var(--brand-500)]',
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
  },
);

const commandInputVariants = cva('flex items-center border-b px-3', {
  variants: {
    variant: {
      default: 'border-border',
      secondary: 'border-border',
      outline: 'border-border',
      ghost: 'border-border',
      brand: 'border-[var(--brand-200)]',
    },
    size: {
      sm: 'px-2 py-1',
      md: 'px-3 py-2',
      lg: 'px-4 py-3',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
});

const commandItemVariants = cva(
  'relative flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none',
  {
    variants: {
      variant: {
        default:
          'hover:bg-muted focus:bg-muted data-[selected=true]:bg-muted data-[selected=true]:text-foreground',
        secondary:
          'hover:bg-secondary/80 focus:bg-secondary/80 data-[selected=true]:bg-secondary data-[selected=true]:text-secondary-foreground',
        outline:
          'hover:bg-muted focus:bg-muted data-[selected=true]:bg-muted data-[selected=true]:text-foreground',
        ghost:
          'hover:bg-muted/80 focus:bg-muted/80 data-[selected=true]:bg-muted data-[selected=true]:text-muted-foreground',
        brand:
          'hover:bg-[var(--brand-100)] focus:bg-[var(--brand-100)] data-[selected=true]:bg-[var(--brand-200)] data-[selected=true]:text-[var(--brand-500)]',
      },
      size: {
        sm: 'px-1.5 py-1 text-xs',
        md: 'px-2 py-1.5 text-sm',
        lg: 'px-3 py-2 text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  },
);

export interface CommandProps
  extends React.ComponentPropsWithoutRef<typeof CommandPrimitive>,
    VariantProps<typeof commandVariants> {}

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  CommandProps
>(({ className, variant, size, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(commandVariants({ variant, size, className }))}
    {...props}
  />
));
Command.displayName = CommandPrimitive.displayName;

const CommandDialog = ({ children, ...props }: DialogProps) => {
  return (
    <Dialog {...props}>
      <DialogContent className="overflow-hidden p-0">
        <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  );
};

export interface CommandInputProps
  extends Omit<
      React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>,
      'size'
    >,
    VariantProps<typeof commandInputVariants> {}

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  CommandInputProps
>(({ className, variant, size, ...props }, ref) => (
  <div
    className={cn(commandInputVariants({ variant, size }))}
    cmdk-input-wrapper=""
  >
    <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        'flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    />
  </div>
));

CommandInput.displayName = CommandPrimitive.Input.displayName;

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn('max-h-[300px] overflow-y-auto overflow-x-hidden', className)}
    {...props}
  />
));

CommandList.displayName = CommandPrimitive.List.displayName;

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
  <CommandPrimitive.Empty
    ref={ref}
    className="py-6 text-center text-sm"
    {...props}
  />
));

CommandEmpty.displayName = CommandPrimitive.Empty.displayName;

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(
      'overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground',
      className,
    )}
    {...props}
  />
));

CommandGroup.displayName = CommandPrimitive.Group.displayName;

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={cn('-mx-1 h-px bg-border', className)}
    {...props}
  />
));
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;

export interface CommandItemProps
  extends React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>,
    VariantProps<typeof commandItemVariants> {}

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  CommandItemProps
>(({ className, variant, size, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      commandItemVariants({ variant, size }),
      'data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
      className,
    )}
    {...props}
  />
));

CommandItem.displayName = CommandPrimitive.Item.displayName;

const CommandShortcut = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  const shortcut =
    typeof children === 'string' ? formatShortcut(children) : children;

  return (
    <span
      className={cn(
        'ml-auto text-xs tracking-widest text-muted-foreground',
        className,
      )}
      {...props}
    >
      {shortcut}
    </span>
  );
};
CommandShortcut.displayName = 'CommandShortcut';

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
  commandVariants,
  getOS,
  formatShortcut,
};
