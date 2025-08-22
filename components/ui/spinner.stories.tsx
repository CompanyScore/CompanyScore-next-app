import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Spinner } from './spinner';
import { Button } from './button';

const meta: Meta<typeof Spinner> = {
  title: 'UI/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Анимированный спиннер с различными вариантами цветов и размеров.',
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
      options: ['default', 'primary', 'white', 'black'],
      description: 'Вариант цвета спиннера',
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      description: 'Размер спиннера',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
};

export const White: Story = {
  args: {
    variant: 'white',
  },
};

export const Black: Story = {
  args: {
    variant: 'black',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex items-center gap-8 p-8">
      <div className="text-center">
        <Spinner variant="default" className="mb-2" />
        <div className="text-sm text-gray-600">Default</div>
      </div>
      <div className="text-center">
        <Spinner variant="primary" className="mb-2" />
        <div className="text-sm text-gray-600">Primary</div>
      </div>
      <div className="text-center">
        <Spinner variant="white" className="mb-2" />
        <div className="text-sm text-gray-600">White</div>
      </div>
      <div className="text-center">
        <Spinner variant="black" className="mb-2" />
        <div className="text-sm text-gray-600">Black</div>
      </div>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-8 p-8">
      <div className="text-center">
        <Spinner size="xs" className="mb-2" />
        <div className="text-sm text-gray-600">XS (16px)</div>
      </div>
      <div className="text-center">
        <Spinner size="sm" className="mb-2" />
        <div className="text-sm text-gray-600">SM (24px)</div>
      </div>
      <div className="text-center">
        <Spinner size="md" className="mb-2" />
        <div className="text-sm text-gray-600">MD (32px)</div>
      </div>
      <div className="text-center">
        <Spinner size="lg" className="mb-2" />
        <div className="text-sm text-gray-600">LG (48px)</div>
      </div>
      <div className="text-center">
        <Spinner size="xl" className="mb-2" />
        <div className="text-sm text-gray-600">XL (64px)</div>
      </div>
      <div className="text-center">
        <Spinner size="2xl" className="mb-2" />
        <div className="text-sm text-gray-600">2XL (80px)</div>
      </div>
    </div>
  ),
};

export const WithBackground: Story = {
  render: () => (
    <div className="space-y-8 p-8">
      <div className="flex items-center gap-8">
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
          <Spinner variant="default" />
        </div>
        <div className="bg-brand-500 p-4 rounded-lg">
          <Spinner variant="white" />
        </div>
        <div className="bg-black p-4 rounded-lg">
          <Spinner variant="white" />
        </div>
        <div className="bg-white border border-gray-200 p-4 rounded-lg">
          <Spinner variant="black" />
        </div>
      </div>
    </div>
  ),
};

export const LoadingState: Story = {
  render: () => (
    <div className="space-y-6 p-8">
      <div className="flex items-center gap-3">
        <Spinner size="sm" variant="primary" />
        <span className="text-gray-700 dark:text-gray-300">
          Загрузка данных...
        </span>
      </div>

      <div className="flex items-center gap-3">
        <Spinner size="md" variant="default" />
        <span className="text-gray-700 dark:text-gray-300">
          Обработка запроса
        </span>
      </div>

      <div className="flex items-center gap-3">
        <Spinner size="lg" variant="primary" />
        <span className="text-gray-700 dark:text-gray-300">
          Синхронизация...
        </span>
      </div>
    </div>
  ),
};

export const ButtonSpinner: Story = {
  render: () => (
    <div className="space-y-4 p-8">
      <Button variant="default" size="md">
        <Spinner size="sm" variant="white" />
        <span>Загрузка...</span>
      </Button>

      <Button variant="secondary" size="md">
        <Spinner size="sm" variant="default" />
        <span>Обработка...</span>
      </Button>

      <Button variant="outline" size="md">
        <Spinner size="sm" variant="default" />
        <span>Сохранение...</span>
      </Button>
    </div>
  ),
};
