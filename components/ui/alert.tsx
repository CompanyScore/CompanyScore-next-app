import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { AlertCircle, CheckCircle, Info, XCircle } from 'lucide-react';

import { cn } from '@/lib/utils';

const alertVariants = cva(
  'relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7',
  {
    variants: {
      variant: {
        default: 'bg-background text-foreground',
        destructive:
          'border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive',
        success:
          'border-green-200 bg-green-50 text-green-800 [&>svg]:text-green-600',
        info: 'border-blue-200 bg-blue-50 text-blue-800 [&>svg]:text-blue-600',
        warning:
          'border-yellow-200 bg-yellow-50 text-yellow-800 [&>svg]:text-yellow-600',
      },
      highlight: {
        true: 'border-l-4',
        false: '',
      },
      short: {
        true: 'py-2',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      highlight: false,
      short: false,
    },
  },
);

interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  type?: 'error' | 'success' | 'info' | 'warning';
  title?: string;
  description?: string | React.ReactNode;
  icon?: React.ReactNode;
  short?: boolean;
  highlight?: boolean;
  children?: React.ReactNode; // Аналог default slot
  slots?: {
    title?: React.ReactNode;
    description?: React.ReactNode;
    icon?: React.ReactNode;
    actions?: React.ReactNode;
  };
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      className,
      variant,
      type = 'info',
      title,
      description,
      icon,
      short = false,
      highlight = false,
      children,
      slots,
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

    // Определяем цвет левой границы для highlight
    const getHighlightBorderColor = () => {
      if (!highlight) return '';
      switch (type) {
        case 'error':
          return 'border-l-red-500';
        case 'success':
          return 'border-l-green-500';
        case 'info':
          return 'border-l-blue-500';
        case 'warning':
          return 'border-l-yellow-500';
        default:
          return '';
      }
    };

    const defaultIcon = getDefaultIcon();
    const highlightBorderColor = getHighlightBorderColor();

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(
          alertVariants({ variant: getVariant(), highlight, short }),
          highlightBorderColor,
          className,
        )}
        {...props}
      >
        {slots?.icon || defaultIcon}
        {slots?.title ||
          (title && (
            <h5 className="mb-1 font-medium leading-none tracking-tight">
              {title}
            </h5>
          ))}
        {children ||
          slots?.description ||
          (description && (
            <div
              className={cn(
                'text-sm [&_p]:leading-relaxed',
                short && 'font-medium',
              )}
            >
              {description}
            </div>
          ))}
        {slots?.actions && (
          <div className="mt-3 flex gap-2">{slots.actions}</div>
        )}
      </div>
    );
  },
);
Alert.displayName = 'Alert';

// Экспортируем старые компоненты для обратной совместимости
const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn('mb-1 font-medium leading-none tracking-tight', className)}
    {...props}
  />
));
AlertTitle.displayName = 'AlertTitle';

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('text-sm [&_p]:leading-relaxed', className)}
    {...props}
  />
));
AlertDescription.displayName = 'AlertDescription';

export { Alert, AlertTitle, AlertDescription };
