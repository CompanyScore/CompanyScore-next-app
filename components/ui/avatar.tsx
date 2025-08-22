import * as React from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import { Badge } from './badge';

const avatarVariants = cva(
  'relative flex shrink-0 overflow-hidden rounded-full',
  {
    variants: {
      size: {
        xs: 'h-6 w-6',
        sm: 'h-8 w-8',
        md: 'h-10 w-10',
        lg: 'h-12 w-12',
        xl: 'h-16 w-16',
        '2xl': 'h-20 w-20',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);

export interface AvatarProps
  extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>,
    VariantProps<typeof avatarVariants> {
  src?: string | string[];
  alt?: string;
  fallback?: string;
  unknown?: boolean;
  notifications?: number;
}

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  AvatarProps
>(
  (
    {
      className,
      size,
      src,
      alt,
      fallback,
      unknown = false,
      notifications,
      children,
      ...props
    },
    ref,
  ) => {
    const images = Array.isArray(src) ? src : src ? [src] : [];
    const alts = Array.isArray(alt) ? alt : alt ? [alt] : [];

    const getBadgeSize = () => {
      switch (size) {
        case 'xs':
          return 'xs';
        case 'sm':
          return 'xs';
        case 'md':
          return 'sm';
        case 'lg':
          return 'md';
        case 'xl':
          return 'lg';
        case '2xl':
          return 'xl';
        default:
          return 'md';
      }
    };

    const getNotificationText = () => {
      if (!notifications || notifications <= 0) return '';
      return notifications > 9 ? '9+' : notifications.toString();
    };

    return (
      <div className="relative inline-block">
        <AvatarPrimitive.Root
          ref={ref}
          className={cn(avatarVariants({ size }), className)}
          {...props}
        >
          {children || (
            <>
              {images.length > 0
                ? images.map((imageSrc, index) => (
                    <AvatarImage
                      key={index}
                      src={imageSrc}
                      alt={alts[index] || `Avatar ${index + 1}`}
                    />
                  ))
                : null}
              {unknown ? (
                <AvatarFallback>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="h-full w-full"
                  >
                    <path
                      fill="currentColor"
                      d="M12 12q-1.65 0-2.825-1.175T8 8t1.175-2.825T12 4t2.825 1.175T16 8t-1.175 2.825T12 12m-8 8v-2.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13t3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20z"
                    />
                  </svg>
                </AvatarFallback>
              ) : fallback ? (
                <AvatarFallback>{fallback}</AvatarFallback>
              ) : null}
            </>
          )}
        </AvatarPrimitive.Root>

        {notifications && notifications > 0 && (
          <Badge
            customColor="var(--brand-500)"
            size={getBadgeSize()}
            className="absolute -top-1 -right-1 border-2 border-background text-white"
          >
            {getNotificationText()}
          </Badge>
        )}
      </div>
    );
  },
);
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn('aspect-square h-full w-full object-cover', className)}
    {...props}
  />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      'flex h-full w-full items-center justify-center rounded-full bg-muted text-muted-foreground',
      className,
    )}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback };
