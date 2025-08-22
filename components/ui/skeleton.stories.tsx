import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Skeleton } from './skeleton';
import { Card, CardContent, CardHeader } from './card';
import { Avatar } from './avatar';

const meta: Meta<typeof Skeleton> = {
  title: 'UI/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Базовый пример
export const Default: Story = {
  render: () => (
    <div className="space-y-4">
      <Skeleton className="h-[20px] w-[100px] rounded-full" />
      <Skeleton className="h-[20px] w-[200px]" />
      <Skeleton className="h-[20px] w-[150px]" />
    </div>
  ),
};

// Карточка
export const CardExample: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <div className="flex items-center space-x-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-[80%]" />
        </div>
      </CardContent>
    </Card>
  ),
};

// Профиль пользователя
export const UserProfile: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <Skeleton className="h-16 w-16 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[200px]" />
          <Skeleton className="h-4 w-[150px]" />
        </div>
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-[90%]" />
      </div>
    </div>
  ),
};

// Список элементов
export const List: Story = {
  render: () => (
    <div className="space-y-3">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="flex items-center space-x-4">
          <Skeleton className="h-10 w-10 rounded-full" />
          <div className="space-y-2 flex-1">
            <Skeleton className="h-4 w-[60%]" />
            <Skeleton className="h-3 w-[40%]" />
          </div>
          <Skeleton className="h-8 w-16" />
        </div>
      ))}
    </div>
  ),
};

// Таблица
export const Table: Story = {
  render: () => (
    <div className="space-y-3">
      {/* Заголовок таблицы */}
      <div className="flex space-x-4">
        <Skeleton className="h-4 w-[100px]" />
        <Skeleton className="h-4 w-[150px]" />
        <Skeleton className="h-4 w-[120px]" />
        <Skeleton className="h-4 w-[80px]" />
      </div>

      {/* Строки таблицы */}
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="flex space-x-4">
          <Skeleton className="h-4 w-[100px]" />
          <Skeleton className="h-4 w-[150px]" />
          <Skeleton className="h-4 w-[120px]" />
          <Skeleton className="h-4 w-[80px]" />
        </div>
      ))}
    </div>
  ),
};

// Форма
export const Form: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <Skeleton className="h-4 w-[80px]" />
        <Skeleton className="h-10 w-full" />
      </div>

      <div className="space-y-2">
        <Skeleton className="h-4 w-[100px]" />
        <Skeleton className="h-10 w-full" />
      </div>

      <div className="space-y-2">
        <Skeleton className="h-4 w-[120px]" />
        <Skeleton className="h-20 w-full" />
      </div>

      <div className="flex space-x-2">
        <Skeleton className="h-10 w-[100px]" />
        <Skeleton className="h-10 w-[100px]" />
      </div>
    </div>
  ),
};

// Аватар и текст
export const AvatarAndText: Story = {
  render: () => (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[200px]" />
        <Skeleton className="h-4 w-[160px]" />
      </div>
    </div>
  ),
};

// Кнопки
export const Buttons: Story = {
  render: () => (
    <div className="flex space-x-2">
      <Skeleton className="h-10 w-[100px] rounded-md" />
      <Skeleton className="h-10 w-[120px] rounded-md" />
      <Skeleton className="h-10 w-[80px] rounded-md" />
    </div>
  ),
};

// Различные размеры
export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <p className="text-sm font-medium">Маленькие</p>
        <div className="flex space-x-2">
          <Skeleton className="h-4 w-4 rounded" />
          <Skeleton className="h-4 w-8 rounded" />
          <Skeleton className="h-4 w-12 rounded" />
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium">Средние</p>
        <div className="flex space-x-2">
          <Skeleton className="h-8 w-8 rounded" />
          <Skeleton className="h-8 w-16 rounded" />
          <Skeleton className="h-8 w-24 rounded" />
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium">Большие</p>
        <div className="flex space-x-2">
          <Skeleton className="h-12 w-12 rounded" />
          <Skeleton className="h-12 w-32 rounded" />
          <Skeleton className="h-12 w-48 rounded" />
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium">Круглые</p>
        <div className="flex space-x-2">
          <Skeleton className="h-8 w-8 rounded-full" />
          <Skeleton className="h-12 w-12 rounded-full" />
          <Skeleton className="h-16 w-16 rounded-full" />
        </div>
      </div>
    </div>
  ),
};

// Комплексный пример
export const ComplexExample: Story = {
  render: () => (
    <div className="space-y-6">
      {/* Заголовок */}
      <div className="space-y-2">
        <Skeleton className="h-8 w-[300px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>

      {/* Статистика */}
      <div className="grid grid-cols-3 gap-4">
        <div className="space-y-2">
          <Skeleton className="h-4 w-[60px]" />
          <Skeleton className="h-8 w-[80px]" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-[60px]" />
          <Skeleton className="h-8 w-[80px]" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-[60px]" />
          <Skeleton className="h-8 w-[80px]" />
        </div>
      </div>

      {/* График */}
      <div className="space-y-2">
        <Skeleton className="h-4 w-[100px]" />
        <Skeleton className="h-32 w-full rounded-md" />
      </div>

      {/* Список последних действий */}
      <div className="space-y-2">
        <Skeleton className="h-4 w-[150px]" />
        <div className="space-y-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="flex items-center space-x-3">
              <Skeleton className="h-8 w-8 rounded-full" />
              <div className="space-y-1 flex-1">
                <Skeleton className="h-3 w-[70%]" />
                <Skeleton className="h-3 w-[40%]" />
              </div>
              <Skeleton className="h-6 w-16" />
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};

// Интерактивный пример
export const InteractiveExample: Story = {
  render: () => {
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 3000);

      return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
      return (
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[200px]" />
              <Skeleton className="h-4 w-[150px]" />
            </div>
          </div>
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-[80%]" />
          </div>
          <div className="flex space-x-2">
            <Skeleton className="h-10 w-[100px] rounded-md" />
            <Skeleton className="h-10 w-[100px] rounded-md" />
          </div>
        </div>
      );
    }

    return (
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <Avatar className="h-12 w-12">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-lg font-semibold">JD</span>
            </div>
          </Avatar>
          <div>
            <h3 className="text-lg font-semibold">John Doe</h3>
            <p className="text-sm text-muted-foreground">Software Engineer</p>
          </div>
        </div>
        <div className="space-y-2">
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="text-sm">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="flex space-x-2">
          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-10 px-4 py-2">
            Edit Profile
          </button>
          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
            View Details
          </button>
        </div>
      </div>
    );
  },
};
