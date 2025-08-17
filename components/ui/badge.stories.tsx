import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Badge } from './badge';

const meta: Meta<typeof Badge> = {
  title: 'UI/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Компонент для отображения статусов, тегов и уведомлений.',
      },
      sourceState: 'hidden',
      controls: { sort: 'requiredFirst' },
      expanded: false,
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'default',
        'secondary',
        'destructive',
        'outline',
        'success',
        'warning',
        'info',
        'brand',
      ],
      description: 'Вариант стиля бейджа',
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Размер бейджа',
    },
    customColor: {
      control: { type: 'color' },
      description: 'Кастомный цвет фона',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Default',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="info">Info</Badge>
      <Badge variant="brand">Brand</Badge>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Badge size="xs">XS</Badge>
      <Badge size="sm">SM</Badge>
      <Badge size="md">MD</Badge>
      <Badge size="lg">LG</Badge>
      <Badge size="xl">XL</Badge>
    </div>
  ),
};

export const WithNumbers: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="default">1</Badge>
      <Badge variant="secondary">5</Badge>
      <Badge variant="destructive">12</Badge>
      <Badge variant="success">99</Badge>
      <Badge variant="warning">999</Badge>
      <Badge variant="info">9999</Badge>
    </div>
  ),
};

export const CustomColors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge customColor="#FF6B6B">Red</Badge>
      <Badge customColor="#4ECDC4">Teal</Badge>
      <Badge customColor="#45B7D1">Blue</Badge>
      <Badge customColor="#96CEB4">Green</Badge>
      <Badge customColor="#FFEAA7">Yellow</Badge>
      <Badge customColor="#DDA0DD">Purple</Badge>
    </div>
  ),
};

export const StatusBadges: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Badge variant="success">Online</Badge>
        <Badge variant="warning">Away</Badge>
        <Badge variant="destructive">Offline</Badge>
      </div>

      <div className="flex items-center gap-2">
        <Badge variant="info">New</Badge>
        <Badge variant="warning">Pending</Badge>
        <Badge variant="success">Completed</Badge>
        <Badge variant="destructive">Failed</Badge>
      </div>
    </div>
  ),
};

export const Interactive: Story = {
  render: () => {
    const handleClick = (variant: string) => {
      alert(`Кликнут бейдж: ${variant}`);
    };

    return (
      <div className="flex flex-wrap gap-2">
        <Badge
          variant="default"
          className="cursor-pointer hover:scale-105 transition-transform"
          onClick={() => handleClick('default')}
        >
          Кликабельный
        </Badge>
        <Badge
          variant="brand"
          className="cursor-pointer hover:scale-105 transition-transform"
          onClick={() => handleClick('brand')}
        >
          Brand
        </Badge>
        <Badge
          variant="success"
          className="cursor-pointer hover:scale-105 transition-transform"
          onClick={() => handleClick('success')}
        >
          Success
        </Badge>
      </div>
    );
  },
};

export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="default">
        <span className="mr-1">🔔</span>
        Уведомления
      </Badge>
      <Badge variant="success">
        <span className="mr-1">✓</span>
        Готово
      </Badge>
      <Badge variant="warning">
        <span className="mr-1">⚠</span>
        Внимание
      </Badge>
      <Badge variant="destructive">
        <span className="mr-1">✕</span>
        Ошибка
      </Badge>
    </div>
  ),
};

export const NotificationCount: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="brand" size="sm">
        1
      </Badge>
      <Badge variant="brand" size="md">
        5
      </Badge>
      <Badge variant="brand" size="lg">
        9
      </Badge>
      <Badge variant="brand" size="xl">
        12
      </Badge>
      <Badge variant="brand" size="md">
        99+
      </Badge>
    </div>
  ),
};
