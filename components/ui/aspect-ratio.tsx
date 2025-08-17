import * as React from 'react';
import * as AspectRatioPrimitive from '@radix-ui/react-aspect-ratio';

import { cn } from '@/lib/utils';

const AspectRatio = React.forwardRef<
  React.ElementRef<typeof AspectRatioPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AspectRatioPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AspectRatioPrimitive.Root
    ref={ref}
    className={cn('relative w-full overflow-hidden', className)}
    {...props}
  />
));
AspectRatio.displayName = AspectRatioPrimitive.Root.displayName;

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
}

const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  ({ src, alt, className, ...props }, ref) => {
    return (
      <img
        ref={ref}
        src={src}
        alt={alt}
        className={cn('h-full w-full object-cover', className)}
        {...props}
      />
    );
  },
);
Image.displayName = 'Image';

export { AspectRatio, Image };
