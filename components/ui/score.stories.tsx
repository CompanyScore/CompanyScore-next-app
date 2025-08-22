import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import * as React from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Score, ScoreData } from '@/components/ui/score';

const meta: Meta<typeof Score> = {
  title: 'UI/Score',
  component: Score,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'filled', 'outlined', 'gradient'],
      description: 'Стиль отображения',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'Размер звезд',
    },
    mode: {
      control: { type: 'select' },
      options: ['display', 'input'],
      description: 'Режим работы',
    },
    maxStars: {
      control: { type: 'number', min: 1, max: 10 },
      description: 'Максимальное количество звезд',
    },
    showValue: {
      control: { type: 'boolean' },
      description: 'Показать числовое значение',
    },
    showPercentage: {
      control: { type: 'boolean' },
      description: 'Показать процент',
    },
    interactive: {
      control: { type: 'boolean' },
      description: 'Интерактивность',
    },
    perfectThreshold: {
      control: { type: 'number', min: 0, max: 100 },
      description: 'Порог для идеального результата',
    },

    compact: {
      control: { type: 'boolean' },
      description: 'Компактный режим',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Пример данных для одиночного счета
const singleScore: ScoreData = {
  value: 75,
  maxValue: 100,
  label: 'Общий рейтинг',
};

// Пример данных для множественных счетов
const multipleScores: ScoreData[] = [
  {
    value: 85,
    maxValue: 100,
    label: 'Качество',
  },
  {
    value: 92,
    maxValue: 100,
    label: 'Скорость',
  },
  {
    value: 78,
    maxValue: 100,
    label: 'Поддержка',
  },
  {
    value: 100,
    maxValue: 100,
    label: 'Надежность',
  },
];

// Данные для игровых достижений
const gameScores: ScoreData[] = [
  {
    value: 3.5,
    maxValue: 5,
    label: 'Графика',
  },
  {
    value: 4.2,
    maxValue: 5,
    label: 'Геймплей',
  },
  {
    value: 5,
    maxValue: 5,
    label: 'Звук',
  },
  {
    value: 4.8,
    maxValue: 5,
    label: 'Сюжет',
  },
];

export const Default: Story = {
  render: args => (
    <div className="w-full max-w-md space-y-4">
      <div className="space-y-2">
        <Label>Рейтинг продукта</Label>
        <Score {...args} data={singleScore} />
      </div>
    </div>
  ),
  args: {
    variant: 'default',
    size: 'md',
    mode: 'display',
    maxStars: 5,
    showValue: false,
    showPercentage: false,
    interactive: false,
    perfectThreshold: 100,
    animate: true,
    compact: false,
  },
};

export const WithValueAndPercentage: Story = {
  render: args => (
    <div className="w-full max-w-md space-y-4">
      <div className="space-y-2">
        <Label>Детальный рейтинг</Label>
        <Score {...args} data={singleScore} />
      </div>
    </div>
  ),
  args: {
    variant: 'default',
    size: 'md',
    mode: 'display',
    maxStars: 5,
    showValue: true,
    showPercentage: true,
    interactive: false,
    perfectThreshold: 100,
    animate: true,
    compact: false,
  },
};

export const MultipleScores: Story = {
  render: args => (
    <div className="w-full max-w-md space-y-4">
      <div className="space-y-2">
        <Label>Множественные оценки</Label>
        <Score {...args} data={multipleScores} />
      </div>
    </div>
  ),
  args: {
    variant: 'default',
    size: 'md',
    mode: 'display',
    maxStars: 5,
    showValue: true,
    showPercentage: true,
    interactive: false,
    perfectThreshold: 100,
    animate: true,
    compact: false,
  },
};

export const PerfectScore: Story = {
  render: args => (
    <div className="w-full max-w-md space-y-4">
      <div className="space-y-2">
        <Label>Идеальный результат</Label>
        <Score
          {...args}
          data={{ value: 100, maxValue: 100, label: 'Отличная работа!' }}
        />
      </div>
    </div>
  ),
  args: {
    variant: 'default',
    size: 'lg',
    mode: 'display',
    maxStars: 5,
    showValue: true,
    showPercentage: true,
    interactive: false,
    perfectThreshold: 100,
    animate: true,
    compact: false,
  },
};

export const Interactive: Story = {
  render: args => {
    const [scores, setScores] = React.useState<ScoreData[]>([
      { value: 75, maxValue: 100, label: 'Интерактивный рейтинг' },
    ]);

    const handleValueChange = (value: number, index: number) => {
      const newScores = [...scores];
      newScores[index] = { ...newScores[index], value };
      setScores(newScores);
    };

    return (
      <div className="w-full max-w-md space-y-4">
        <div className="space-y-2">
          <Label>Кликните по звездам для оценки</Label>
          <Score {...args} data={scores} onValueChange={handleValueChange} />
        </div>
        <div className="text-sm text-muted-foreground">
          Текущее значение: {scores[0].value}/{scores[0].maxValue}
        </div>
      </div>
    );
  },
  args: {
    variant: 'default',
    size: 'lg',
    mode: 'input',
    maxStars: 5,
    showValue: true,
    showPercentage: true,
    interactive: true,
    perfectThreshold: 100,
    animate: true,
    compact: false,
  },
};

export const GameRatings: Story = {
  render: args => (
    <div className="w-full max-w-md space-y-4">
      <div className="space-y-2">
        <Label>Оценки игры</Label>
        <Score {...args} data={gameScores} />
      </div>
    </div>
  ),
  args: {
    variant: 'filled',
    size: 'md',
    mode: 'display',
    maxStars: 5,
    showValue: true,
    showPercentage: false,
    interactive: false,
    perfectThreshold: 100,
    animate: true,
    compact: false,
  },
};

export const DifferentSizes: Story = {
  render: args => (
    <div className="w-full max-w-md space-y-6">
      <div className="space-y-2">
        <Label>Маленький размер</Label>
        <Score {...args} data={singleScore} size="sm" />
      </div>
      <div className="space-y-2">
        <Label>Средний размер</Label>
        <Score {...args} data={singleScore} size="md" />
      </div>
      <div className="space-y-2">
        <Label>Большой размер</Label>
        <Score {...args} data={singleScore} size="lg" />
      </div>
      <div className="space-y-2">
        <Label>Очень большой размер</Label>
        <Score {...args} data={singleScore} size="xl" />
      </div>
    </div>
  ),
  args: {
    variant: 'default',
    mode: 'display',
    maxStars: 5,
    showValue: true,
    showPercentage: true,
    interactive: false,
    perfectThreshold: 100,
    animate: true,
    compact: false,
  },
};

export const DifferentVariants: Story = {
  render: args => (
    <div className="w-full max-w-md space-y-6">
      <div className="space-y-2">
        <Label>Default</Label>
        <Score {...args} data={singleScore} variant="default" />
      </div>
      <div className="space-y-2">
        <Label>Filled</Label>
        <Score {...args} data={singleScore} variant="filled" />
      </div>
      <div className="space-y-2">
        <Label>Outlined</Label>
        <Score {...args} data={singleScore} variant="outlined" />
      </div>
      <div className="space-y-2">
        <Label>Gradient</Label>
        <Score {...args} data={singleScore} variant="gradient" />
      </div>
    </div>
  ),
  args: {
    size: 'md',
    mode: 'display',
    maxStars: 5,
    showValue: true,
    showPercentage: true,
    interactive: false,
    perfectThreshold: 100,
    animate: true,
    compact: false,
  },
};

export const CompactMode: Story = {
  render: args => (
    <div className="w-full max-w-md space-y-4">
      <div className="space-y-2">
        <Label>Компактный режим</Label>
        <Score {...args} data={multipleScores} />
      </div>
    </div>
  ),
  args: {
    variant: 'default',
    size: 'md',
    mode: 'display',
    maxStars: 5,
    showValue: true,
    showPercentage: true,
    interactive: false,
    perfectThreshold: 100,
    animate: true,
    compact: true,
  },
};

export const CustomMaxStars: Story = {
  render: args => (
    <div className="w-full max-w-md space-y-6">
      <div className="space-y-2">
        <Label>3 звезды</Label>
        <Score {...args} data={singleScore} maxStars={3} />
      </div>
      <div className="space-y-2">
        <Label>7 звезд</Label>
        <Score {...args} data={singleScore} maxStars={7} />
      </div>
      <div className="space-y-2">
        <Label>10 звезд</Label>
        <Score {...args} data={singleScore} maxStars={10} />
      </div>
    </div>
  ),
  args: {
    variant: 'default',
    size: 'md',
    mode: 'display',
    showValue: true,
    showPercentage: true,
    interactive: false,
    perfectThreshold: 100,
    animate: true,
    compact: false,
  },
};

export const InteractiveExample: Story = {
  render: args => {
    const [scores, setScores] = React.useState<ScoreData[]>([
      { value: 60, maxValue: 100, label: 'Качество кода' },
      { value: 80, maxValue: 100, label: 'Производительность' },
      { value: 95, maxValue: 100, label: 'Документация' },
    ]);

    const [variant, setVariant] = React.useState<
      'default' | 'filled' | 'outlined' | 'gradient'
    >('default');
    const [size, setSize] = React.useState<'sm' | 'md' | 'lg' | 'xl'>('md');

    const handleValueChange = (value: number, index: number) => {
      const newScores = [...scores];
      newScores[index] = { ...newScores[index], value };
      setScores(newScores);
    };

    const resetScores = () => {
      setScores([
        { value: 60, maxValue: 100, label: 'Качество кода' },
        { value: 80, maxValue: 100, label: 'Производительность' },
        { value: 95, maxValue: 100, label: 'Документация' },
      ]);
    };

    return (
      <div className="w-full max-w-md space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Интерактивная оценка</CardTitle>
            <CardDescription>
              Попробуйте различные настройки и оцените компоненты
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Стиль</Label>
              <div className="flex gap-2">
                <Button
                  variant={variant === 'default' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setVariant('default')}
                >
                  Default
                </Button>
                <Button
                  variant={variant === 'filled' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setVariant('filled')}
                >
                  Filled
                </Button>
                <Button
                  variant={variant === 'outlined' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setVariant('outlined')}
                >
                  Outlined
                </Button>
                <Button
                  variant={variant === 'gradient' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setVariant('gradient')}
                >
                  Gradient
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Размер</Label>
              <div className="flex gap-2">
                <Button
                  variant={size === 'sm' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSize('sm')}
                >
                  Small
                </Button>
                <Button
                  variant={size === 'md' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSize('md')}
                >
                  Medium
                </Button>
                <Button
                  variant={size === 'lg' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSize('lg')}
                >
                  Large
                </Button>
                <Button
                  variant={size === 'xl' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSize('xl')}
                >
                  XL
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Оценки</Label>
              <Score
                {...args}
                data={scores}
                variant={variant}
                size={size}
                onValueChange={handleValueChange}
                mode="input"
                interactive={true}
              />
            </div>

            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={resetScores}>
                Сбросить
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  const newScores = scores.map(score => ({
                    ...score,
                    value: Math.floor(Math.random() * 100) + 1,
                  }));
                  setScores(newScores);
                }}
              >
                Случайные значения
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  },
  args: {
    maxStars: 5,
    showValue: true,
    showPercentage: true,
    perfectThreshold: 100,
    animate: true,
    compact: false,
  },
};

export const PartialStars: Story = {
  render: args => (
    <div className="w-full max-w-md space-y-4">
      <div className="space-y-2">
        <Label>Частично заполненные звезды</Label>
        <Score
          {...args}
          data={[
            { value: 25, maxValue: 100, label: '25%' },
            { value: 50, maxValue: 100, label: '50%' },
            { value: 75, maxValue: 100, label: '75%' },
            { value: 87, maxValue: 100, label: '87%' },
          ]}
        />
      </div>
    </div>
  ),
  args: {
    variant: 'default',
    size: 'lg',
    mode: 'display',
    maxStars: 5,
    showValue: true,
    showPercentage: true,
    interactive: false,
    perfectThreshold: 100,
    animate: true,
    compact: false,
  },
};
