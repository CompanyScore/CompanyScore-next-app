import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

const scoreVariants = cva('inline-flex items-center gap-1', {
  variants: {
    variant: {
      default: 'text-muted-foreground',
      filled: 'text-yellow-500',
      outlined: 'text-muted-foreground',
      gradient:
        'text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text',
    },
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
    },
    mode: {
      display: 'pointer-events-none',
      input: 'cursor-pointer',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
    mode: 'display',
  },
});

const starVariants = cva('transition-colors duration-200', {
  variants: {
    size: {
      sm: 'w-4 h-4',
      md: 'w-5 h-5',
      lg: 'w-6 h-6',
      xl: 'w-8 h-8',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export interface ScoreData {
  value: number;
  maxValue?: number;
  label?: string;
}

interface ScoreProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof scoreVariants> {
  data: ScoreData | ScoreData[];
  maxStars?: number;
  showValue?: boolean;
  showPercentage?: boolean;
  interactive?: boolean;
  onValueChange?: (value: number, index?: number) => void;
  perfectThreshold?: number;
  compact?: boolean;
}

const Score = React.forwardRef<HTMLDivElement, ScoreProps>(
  (
    {
      className,
      variant = 'default',
      size = 'md',
      mode = 'display',
      data,
      maxStars = 5,
      showValue = false,
      showPercentage = false,
      interactive = false,
      onValueChange,
      perfectThreshold = 100,
      compact = false,
      ...props
    },
    ref,
  ) => {
    // Нормализуем данные
    const normalizedData = React.useMemo(() => {
      if (Array.isArray(data)) {
        return data.map(item => ({
          value: item.value,
          maxValue: item.maxValue || 100,
          label: item.label,
        }));
      } else {
        return [
          {
            value: data.value,
            maxValue: data.maxValue || 100,
            label: data.label,
          },
        ];
      }
    }, [data]);

    // Функция для обработки клика по звезде
    const handleStarClick = (starIndex: number, scoreIndex: number) => {
      if (!interactive || mode !== 'input') return;

      const score = normalizedData[scoreIndex];
      const newValue = ((starIndex + 1) / maxStars) * (score.maxValue || 100);
      onValueChange?.(newValue, scoreIndex);
    };

    // Функция для рендеринга одной звезды
    const renderStar = (starIndex: number, scoreIndex: number) => {
      const score = normalizedData[scoreIndex];
      const percentage = (score.value / (score.maxValue || 100)) * 100;
      const starPercentage = (percentage / 100) * maxStars;
      const isFilled = starIndex < Math.floor(starPercentage);
      const isPerfect = percentage >= perfectThreshold && starIndex < maxStars;

      return (
        <Star
          key={starIndex}
          className={cn(
            starVariants({ size }),
            variant === 'filled' &&
              (isFilled || isPerfect) &&
              'fill-current text-yellow-500',
            variant === 'default' &&
              (isFilled || isPerfect) &&
              'fill-current text-yellow-500',
            variant === 'outlined' &&
              (isFilled || isPerfect) &&
              'fill-current text-yellow-500',
            variant === 'gradient' && (isFilled || isPerfect) && 'fill-current',
            !(isFilled || isPerfect) && 'text-muted-foreground/30',
            interactive && 'hover:text-yellow-400 hover:scale-110',
          )}
          onClick={() => handleStarClick(starIndex, scoreIndex)}
        />
      );
    };

    // Функция для рендеринга одного счета
    const renderScore = (score: ScoreData, index: number) => {
      const percentage = (score.value / (score.maxValue || 100)) * 100;

      return (
        <div
          key={index}
          className={cn('flex items-center gap-2', compact && 'flex-col gap-1')}
        >
          <div className={cn(scoreVariants({ variant, size, mode }))}>
            {Array.from({ length: maxStars }, (_, i) => renderStar(i, index))}
          </div>

          {(showValue || showPercentage) && (
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              {showValue && (
                <span className="font-medium">
                  {score.value}/{score.maxValue}
                </span>
              )}
              {showValue && showPercentage && <span>•</span>}
              {showPercentage && (
                <span className="font-medium">{percentage.toFixed(1)}%</span>
              )}
            </div>
          )}

          {score.label && (
            <span className="text-sm text-muted-foreground">{score.label}</span>
          )}
        </div>
      );
    };

    return (
      <div
        ref={ref}
        className={cn('flex flex-col gap-2', compact && 'gap-1', className)}
        {...props}
      >
        {normalizedData.map((score, index) => renderScore(score, index))}
      </div>
    );
  },
);
Score.displayName = 'Score';

export { Score };
