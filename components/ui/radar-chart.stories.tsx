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
import { RadarChart, RadarDataset } from '@/components/ui/radar-chart';

const meta: Meta<typeof RadarChart> = {
  title: 'UI/RadarChart',
  component: RadarChart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['filled', 'outlined', 'dots'],
      description: 'Тип отображения данных',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'Размер графика',
    },
    maxValue: {
      control: { type: 'number', min: 1, max: 100 },
      description: 'Максимальное значение',
    },
    levels: {
      control: { type: 'number', min: 1, max: 10 },
      description: 'Количество уровней сетки',
    },
    showGrid: {
      control: { type: 'boolean' },
      description: 'Показать сетку',
    },
    showLabels: {
      control: { type: 'boolean' },
      description: 'Показать подписи осей',
    },
    showLegend: {
      control: { type: 'boolean' },
      description: 'Показать легенду',
    },
    animate: {
      control: { type: 'boolean' },
      description: 'Анимация',
    },
    interactive: {
      control: { type: 'boolean' },
      description: 'Интерактивность',
    },
    tooltip: {
      control: { type: 'boolean' },
      description: 'Показать tooltip',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Пример данных для одиночного набора
const singleData = {
  Скорость: 8,
  Сила: 6,
  Выносливость: 7,
  Ловкость: 9,
  Интеллект: 8,
  Харизма: 5,
};

// Пример данных для множественных наборов
const multipleData: RadarDataset[] = [
  {
    id: 'player1',
    label: 'Игрок 1',
    color: '#ff6b6b',
    data: [
      { key: 'Скорость', value: 8 },
      { key: 'Сила', value: 6 },
      { key: 'Выносливость', value: 7 },
      { key: 'Ловкость', value: 9 },
      { key: 'Интеллект', value: 8 },
      { key: 'Харизма', value: 5 },
    ],
  },
  {
    id: 'player2',
    label: 'Игрок 2',
    color: '#4ecdc4',
    data: [
      { key: 'Скорость', value: 6 },
      { key: 'Сила', value: 9 },
      { key: 'Выносливость', value: 8 },
      { key: 'Ловкость', value: 5 },
      { key: 'Интеллект', value: 7 },
      { key: 'Харизма', value: 8 },
    ],
  },
];

// Данные для сравнения навыков
const skillsData: RadarDataset[] = [
  {
    id: 'current',
    label: 'Текущие навыки',
    color: '#ff6b6b',
    fillOpacity: 0.3,
    data: [
      { key: 'JavaScript', value: 8 },
      { key: 'React', value: 7 },
      { key: 'TypeScript', value: 6 },
      { key: 'Node.js', value: 5 },
      { key: 'Python', value: 4 },
      { key: 'SQL', value: 6 },
    ],
  },
  {
    id: 'target',
    label: 'Целевые навыки',
    color: '#4ecdc4',
    fillOpacity: 0.2,
    data: [
      { key: 'JavaScript', value: 9 },
      { key: 'React', value: 9 },
      { key: 'TypeScript', value: 8 },
      { key: 'Node.js', value: 7 },
      { key: 'Python', value: 6 },
      { key: 'SQL', value: 8 },
    ],
  },
];

export const Default: Story = {
  render: args => (
    <div className="w-full max-w-md space-y-4">
      <div className="space-y-2">
        <Label>Характеристики персонажа</Label>
        <RadarChart {...args} data={singleData} />
      </div>
    </div>
  ),
  args: {
    variant: 'filled',
    size: 'lg',
    maxValue: 10,
    levels: 5,
    showGrid: true,
    showLabels: true,
    showLegend: false,
    animate: true,
    interactive: true,
    tooltip: true,
  },
};

export const MultipleDatasets: Story = {
  render: args => (
    <div className="w-full max-w-md space-y-4">
      <div className="space-y-2">
        <Label>Сравнение игроков</Label>
        <RadarChart {...args} data={multipleData} />
      </div>
    </div>
  ),
  args: {
    variant: 'filled',
    size: 'lg',
    maxValue: 10,
    levels: 5,
    showGrid: true,
    showLabels: true,
    showLegend: true,
    animate: true,
    interactive: true,
    tooltip: true,
  },
};

export const Outlined: Story = {
  render: args => (
    <div className="w-full max-w-md space-y-4">
      <div className="space-y-2">
        <Label>Контурный стиль</Label>
        <RadarChart {...args} data={multipleData} />
      </div>
    </div>
  ),
  args: {
    variant: 'outlined',
    size: 'lg',
    maxValue: 10,
    levels: 5,
    showGrid: true,
    showLabels: true,
    showLegend: true,
    animate: true,
    interactive: true,
    tooltip: true,
  },
};

export const Dots: Story = {
  render: args => (
    <div className="w-full max-w-md space-y-4">
      <div className="space-y-2">
        <Label>Точечный стиль</Label>
        <RadarChart {...args} data={multipleData} />
      </div>
    </div>
  ),
  args: {
    variant: 'dots',
    size: 'lg',
    maxValue: 10,
    levels: 5,
    showGrid: true,
    showLabels: true,
    showLegend: true,
    animate: true,
    interactive: true,
    tooltip: true,
  },
};

export const SkillsComparison: Story = {
  render: args => (
    <div className="w-full max-w-md space-y-4">
      <div className="space-y-2">
        <Label>Сравнение навыков разработчика</Label>
        <RadarChart {...args} data={skillsData} />
      </div>
    </div>
  ),
  args: {
    variant: 'filled',
    size: 'lg',
    maxValue: 10,
    levels: 5,
    showGrid: true,
    showLabels: true,
    showLegend: true,
    animate: true,
    interactive: true,
    tooltip: true,
  },
};

export const CustomMaxValue: Story = {
  render: args => (
    <div className="w-full max-w-md space-y-4">
      <div className="space-y-2">
        <Label>Максимальное значение 100</Label>
        <RadarChart {...args} data={singleData} />
      </div>
    </div>
  ),
  args: {
    variant: 'filled',
    size: 'lg',
    maxValue: 100,
    levels: 10,
    showGrid: true,
    showLabels: true,
    showLegend: false,
    animate: true,
    interactive: true,
    tooltip: true,
  },
};

export const NoGrid: Story = {
  render: args => (
    <div className="w-full max-w-md space-y-4">
      <div className="space-y-2">
        <Label>Без сетки</Label>
        <RadarChart {...args} data={singleData} />
      </div>
    </div>
  ),
  args: {
    variant: 'filled',
    size: 'lg',
    maxValue: 10,
    levels: 5,
    showGrid: false,
    showLabels: true,
    showLegend: false,
    animate: true,
    interactive: true,
    tooltip: true,
  },
};

export const NoLabels: Story = {
  render: args => (
    <div className="w-full max-w-md space-y-4">
      <div className="space-y-2">
        <Label>Без подписей осей</Label>
        <RadarChart {...args} data={singleData} />
      </div>
    </div>
  ),
  args: {
    variant: 'filled',
    size: 'lg',
    maxValue: 10,
    levels: 5,
    showGrid: true,
    showLabels: false,
    showLegend: false,
    animate: true,
    interactive: true,
    tooltip: true,
  },
};

export const InteractiveExample: Story = {
  render: args => {
    const [currentData, setCurrentData] =
      React.useState<RadarDataset[]>(multipleData);
    const [variant, setVariant] = React.useState<
      'filled' | 'outlined' | 'dots'
    >('filled');

    const updateData = () => {
      setCurrentData([
        {
          id: 'player1',
          label: 'Игрок 1',
          color: '#ff6b6b',
          data: [
            { key: 'Скорость', value: Math.floor(Math.random() * 10) + 1 },
            { key: 'Сила', value: Math.floor(Math.random() * 10) + 1 },
            { key: 'Выносливость', value: Math.floor(Math.random() * 10) + 1 },
            { key: 'Ловкость', value: Math.floor(Math.random() * 10) + 1 },
            { key: 'Интеллект', value: Math.floor(Math.random() * 10) + 1 },
            { key: 'Харизма', value: Math.floor(Math.random() * 10) + 1 },
          ],
        },
        {
          id: 'player2',
          label: 'Игрок 2',
          color: '#4ecdc4',
          data: [
            { key: 'Скорость', value: Math.floor(Math.random() * 10) + 1 },
            { key: 'Сила', value: Math.floor(Math.random() * 10) + 1 },
            { key: 'Выносливость', value: Math.floor(Math.random() * 10) + 1 },
            { key: 'Ловкость', value: Math.floor(Math.random() * 10) + 1 },
            { key: 'Интеллект', value: Math.floor(Math.random() * 10) + 1 },
            { key: 'Харизма', value: Math.floor(Math.random() * 10) + 1 },
          ],
        },
      ]);
    };

    return (
      <div className="w-full max-w-md space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Интерактивная полярная диаграмма</CardTitle>
            <CardDescription>
              Попробуйте различные настройки и обновите данные
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Стиль отображения</Label>
              <div className="flex gap-2">
                <Button
                  variant={variant === 'filled' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setVariant('filled')}
                >
                  Заполненный
                </Button>
                <Button
                  variant={variant === 'outlined' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setVariant('outlined')}
                >
                  Контурный
                </Button>
                <Button
                  variant={variant === 'dots' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setVariant('dots')}
                >
                  Точки
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Данные</Label>
              <RadarChart {...args} data={currentData} variant={variant} />
            </div>

            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={updateData}>
                Обновить данные
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentData(multipleData)}
              >
                Сбросить
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  },
  args: {
    size: 'lg',
    maxValue: 10,
    levels: 5,
    showGrid: true,
    showLabels: true,
    showLegend: true,
    animate: true,
    interactive: true,
    tooltip: true,
  },
};
