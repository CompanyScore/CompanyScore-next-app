import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Toaster as Sonner } from 'sonner';
import { CheckCircle, XCircle, Info, AlertCircle } from 'lucide-react';

import { cn } from '@/lib/utils';

const toastVariants = cva(
  'group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full',
  {
    variants: {
      variant: {
        default: 'bg-background border-border text-foreground',
        destructive:
          'destructive border-destructive bg-destructive text-destructive-foreground',
        success:
          'border-[var(--success-600)] bg-[var(--success-50)] text-[var(--success-800)]',
        info: 'border-[var(--info-600)] bg-[var(--info-50)] text-[var(--info-800)]',
        warning:
          'border-[var(--warning-500)] bg-[var(--warning-50)] text-[var(--warning-800)]',
      },
      size: {
        default: 'p-6 pr-8',
        compact: 'p-4 pr-6',
        large: 'p-8 pr-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

interface ToastProps
  extends React.ComponentPropsWithoutRef<typeof Sonner>,
    VariantProps<typeof toastVariants> {
  type?: 'error' | 'success' | 'info' | 'warning';
  title?: string;
  description?: string | React.ReactNode;
  icon?: React.ReactNode;
  action?: React.ReactNode;
  closeButton?: boolean;
  duration?: number;
  position?:
    | 'top-left'
    | 'top-center'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right';
}

const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
  (
    {
      variant,
      size,
      type = 'info',
      title,
      description,
      icon,
      action,
      closeButton = true,
      ...props
    },
    ref,
  ) => {
    // Определяем variant на основе type
    const getVariant = () => {
      if (variant) return variant;
      switch (type) {
        case 'error':
          return 'destructive';
        case 'success':
          return 'success';
        case 'info':
          return 'info';
        case 'warning':
          return 'warning';
        default:
          return 'default';
      }
    };

    // Определяем иконку по умолчанию
    const getDefaultIcon = () => {
      if (icon) return icon;
      switch (type) {
        case 'error':
          return <XCircle className="h-4 w-4" />;
        case 'success':
          return <CheckCircle className="h-4 w-4" />;
        case 'info':
          return <Info className="h-4 w-4" />;
        case 'warning':
          return <AlertCircle className="h-4 w-4" />;
        default:
          return null;
      }
    };

    const defaultIcon = getDefaultIcon();

    return (
      <div
        ref={ref}
        className={cn(
          toastVariants({ variant: getVariant(), size }),
          className,
        )}
        {...props}
      >
        {defaultIcon && <div className="flex-shrink-0">{defaultIcon}</div>}
        <div className="flex-1">
          {title && <div className="font-semibold [&+div]:mt-0.5">{title}</div>}
          {description && (
            <div className="text-sm opacity-90">{description}</div>
          )}
        </div>
        {action && <div className="flex-shrink-0">{action}</div>}
        {closeButton && (
          <button className="absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600">
            <XCircle className="h-4 w-4" />
          </button>
        )}
      </div>
    );
  },
);
Toast.displayName = 'Toast';

// Компонент Toaster для интеграции с sonner
const Toaster = React.forwardRef<
  React.ElementRef<typeof Sonner>,
  React.ComponentPropsWithoutRef<typeof Sonner> & {
    theme?: 'light' | 'dark' | 'system';
    richColors?: boolean;
    closeButton?: boolean;
    position?:
      | 'top-left'
      | 'top-center'
      | 'top-right'
      | 'bottom-left'
      | 'bottom-center'
      | 'bottom-right';
  }
>(
  (
    {
      theme = 'system',
      richColors = true,
      closeButton = true,
      position = 'top-right',
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <Sonner
        ref={ref}
        theme={theme}
        richColors={richColors}
        closeButton={closeButton}
        position={position}
        className={cn('toaster group', className)}
        toastOptions={{
          classNames: {
            toast:
              'group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg',
            description: 'group-[.toast]:text-muted-foreground',
            actionButton:
              'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
            cancelButton:
              'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground',
          },
        }}
        {...props}
      />
    );
  },
);
Toaster.displayName = 'Toaster';

// Утилита для показа тостов
const toast = {
  success: (message: string, options?: any) => {
    return Sonner.success(message, {
      icon: <CheckCircle className="h-4 w-4" />,
      ...options,
    });
  },
  error: (message: string, options?: any) => {
    return Sonner.error(message, {
      icon: <XCircle className="h-4 w-4" />,
      ...options,
    });
  },
  info: (message: string, options?: any) => {
    return Sonner.info(message, {
      icon: <Info className="h-4 w-4" />,
      ...options,
    });
  },
  warning: (message: string, options?: any) => {
    return Sonner.warning(message, {
      icon: <AlertCircle className="h-4 w-4" />,
      ...options,
    });
  },
  custom: (message: string, options?: any) => {
    return Sonner.custom(message, options);
  },
};

export { Toast, Toaster, toast };
export { Sonner };
