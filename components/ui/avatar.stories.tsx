import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Avatar } from './avatar';

const meta: Meta<typeof Avatar> = {
  title: 'UI/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Компонент аватара с поддержкой различных размеров и множественных изображений.',
      },
      sourceState: 'hidden',
      controls: { sort: 'requiredFirst' },
      expanded: false,
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      description: 'Размер аватара',
    },
    src: {
      control: { type: 'text' },
      description: 'URL изображения или массив URL',
    },
    alt: {
      control: { type: 'text' },
      description: 'Alt текст для изображения',
    },
    fallback: {
      control: { type: 'text' },
      description: 'Текст для fallback',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: 'https://github.com/shadcn.png',
    alt: '@shadcn',
    fallback: 'CN',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar
        size="xs"
        src="https://github.com/shadcn.png"
        alt="@shadcn"
        fallback="CN"
      />
      <Avatar
        size="sm"
        src="https://github.com/shadcn.png"
        alt="@shadcn"
        fallback="CN"
      />
      <Avatar
        size="md"
        src="https://github.com/shadcn.png"
        alt="@shadcn"
        fallback="CN"
      />
      <Avatar
        size="lg"
        src="https://github.com/shadcn.png"
        alt="@shadcn"
        fallback="CN"
      />
      <Avatar
        size="xl"
        src="https://github.com/shadcn.png"
        alt="@shadcn"
        fallback="CN"
      />
      <Avatar
        size="2xl"
        src="https://github.com/shadcn.png"
        alt="@shadcn"
        fallback="CN"
      />
    </div>
  ),
};

export const WithFallback: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar fallback="CN" />
      <Avatar fallback="JD" />
      <Avatar fallback="AB" />
      <Avatar fallback="XY" />
    </div>
  ),
};

export const UnknownUser: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar unknown />
      <Avatar size="sm" unknown />
      <Avatar size="lg" unknown />
      <Avatar size="xl" unknown />
    </div>
  ),
};

export const MultipleImages: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar
        src={['https://github.com/shadcn.png', 'https://github.com/leerob.png']}
        alt={['@shadcn', '@leerob']}
        fallback="CN"
      />
      <Avatar
        src={[
          'https://github.com/evilrabbit.png',
          'https://github.com/shadcn.png',
        ]}
        alt={['@evilrabbit', '@shadcn']}
        fallback="ER"
      />
    </div>
  ),
};

export const GroupedAvatars: Story = {
  render: () => (
    <div className="flex -space-x-2">
      <Avatar
        className="ring-2 ring-background"
        src="https://github.com/shadcn.png"
        alt="@shadcn"
        fallback="CN"
      />
      <Avatar
        className="ring-2 ring-background"
        src="https://github.com/leerob.png"
        alt="@leerob"
        fallback="LR"
      />
      <Avatar
        className="ring-2 ring-background"
        src="https://github.com/evilrabbit.png"
        alt="@evilrabbit"
        fallback="ER"
      />
      <Avatar className="ring-2 ring-background" fallback="+2" />
    </div>
  ),
};

export const CustomShapes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar
        className="rounded-lg"
        src="https://github.com/shadcn.png"
        alt="@shadcn"
        fallback="CN"
      />
      <Avatar
        className="rounded-md"
        src="https://github.com/leerob.png"
        alt="@leerob"
        fallback="LR"
      />
      <Avatar
        className="rounded-none"
        src="https://github.com/evilrabbit.png"
        alt="@evilrabbit"
        fallback="ER"
      />
    </div>
  ),
};

export const WithStatus: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <div className="relative">
        <Avatar
          src="https://github.com/shadcn.png"
          alt="@shadcn"
          fallback="CN"
        />
        <div className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full bg-green-500 border-2 border-background" />
      </div>
      <div className="relative">
        <Avatar
          src="https://github.com/leerob.png"
          alt="@leerob"
          fallback="LR"
        />
        <div className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full bg-yellow-500 border-2 border-background" />
      </div>
      <div className="relative">
        <Avatar
          src="https://github.com/evilrabbit.png"
          alt="@evilrabbit"
          fallback="ER"
        />
        <div className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full bg-red-500 border-2 border-background" />
      </div>
      <div className="relative">
        <Avatar fallback="OF" />
        <div className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full bg-gray-500 border-2 border-background" />
      </div>
    </div>
  ),
};

export const Interactive: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar
        className="cursor-pointer hover:opacity-80 transition-opacity"
        src="https://github.com/shadcn.png"
        alt="@shadcn"
        fallback="CN"
      />
      <Avatar
        className="cursor-pointer hover:scale-105 transition-transform"
        src="https://github.com/leerob.png"
        alt="@leerob"
        fallback="LR"
      />
      <Avatar
        className="cursor-pointer hover:ring-2 hover:ring-primary transition-all"
        src="https://github.com/evilrabbit.png"
        alt="@evilrabbit"
        fallback="ER"
      />
    </div>
  ),
};
