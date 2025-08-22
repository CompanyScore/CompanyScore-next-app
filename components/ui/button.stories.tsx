import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Button } from './button';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Button component with different variants, sizes, and states.',
      },
      canvas: {
        sourceState: 'hidden',
      },
      controls: {
        sort: 'requiredFirst',
      },
    },
    controls: {
      expanded: false,
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'secondary', 'outline', 'ghost', 'ghostLight'],
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    short: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Основные варианты кнопок
export const Default: Story = {
  args: {
    children: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Button',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Button',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Button',
  },
};

export const GhostLight: Story = {
  args: {
    variant: 'ghostLight',
    children: 'Button',
  },
};

// Размеры кнопок
export const XS: Story = {
  args: {
    size: 'xs',
    children: 'Button',
  },
};

export const SM: Story = {
  args: {
    size: 'sm',
    children: 'Button',
  },
};

export const MD: Story = {
  args: {
    size: 'md',
    children: 'Button',
  },
};

export const LG: Story = {
  args: {
    size: 'lg',
    children: 'Button',
  },
};

export const XL: Story = {
  args: {
    size: 'xl',
    children: 'Button',
  },
};

// Short кнопки (только иконка)
export const ShortXS: Story = {
  args: {
    size: 'xs',
    short: true,
  },
};

export const ShortSM: Story = {
  args: {
    size: 'sm',
    short: true,
  },
};

export const ShortMD: Story = {
  args: {
    size: 'md',
    short: true,
  },
};

export const ShortLG: Story = {
  args: {
    size: 'lg',
    short: true,
  },
};

export const ShortXL: Story = {
  args: {
    size: 'xl',
    short: true,
  },
};

// Состояния
export const Disabled: Story = {
  args: {
    children: 'Button',
    disabled: true,
  },
};

export const WithCallback: Story = {
  args: {
    children: 'Click me',
    onClick: () => alert('Button clicked!'),
  },
};

// Демонстрация всех вариантов
export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">All Variants (MD size)</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="default">Button</Button>
          <Button variant="secondary">Button</Button>
          <Button variant="outline">Button</Button>
          <Button variant="ghost">Button</Button>
          <Button variant="ghostLight">Button</Button>
        </div>
      </div>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">All Sizes (Default variant)</h3>
        <div className="flex flex-wrap items-center gap-4">
          <Button size="xs">Button</Button>
          <Button size="sm">Button</Button>
          <Button size="md">Button</Button>
          <Button size="lg">Button</Button>
          <Button size="xl">Button</Button>
        </div>
      </div>
    </div>
  ),
};

export const AllShortSizes: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">
          All Short Sizes (Default variant)
        </h3>
        <div className="flex flex-wrap items-center gap-4">
          <Button size="xs" short />
          <Button size="sm" short />
          <Button size="md" short />
          <Button size="lg" short />
          <Button size="xl" short />
        </div>
      </div>
    </div>
  ),
};

export const InteractiveStates: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Interactive States</h3>
        <p className="text-sm text-gray-600">
          Hover, focus, and click to see animations
        </p>
        <div className="flex flex-wrap gap-4">
          <Button onClick={() => alert('Button clicked!')}>Hover me</Button>
          <Button
            variant="secondary"
            onClick={() => alert('Secondary clicked!')}
          >
            Focus me
          </Button>
          <Button variant="outline" onClick={() => alert('Outline clicked!')}>
            Click me
          </Button>
          <Button variant="ghost" onClick={() => alert('Ghost clicked!')}>
            Active state
          </Button>
        </div>
      </div>
    </div>
  ),
};

export const InteractiveWithScale: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Interactive with Scale Effect</h3>
        <p className="text-sm text-gray-600">
          Buttons with hover scale effect and click handlers
        </p>
        <div className="flex flex-wrap gap-4">
          <Button
            interactive
            onClick={() => alert('Interactive button clicked!')}
          >
            Interactive
          </Button>
          <Button
            variant="secondary"
            interactive
            onClick={() => alert('Secondary interactive clicked!')}
          >
            Secondary
          </Button>
          <Button
            variant="outline"
            interactive
            onClick={() => alert('Outline interactive clicked!')}
          >
            Outline
          </Button>
          <Button
            variant="ghost"
            interactive
            onClick={() => alert('Ghost interactive clicked!')}
          >
            Ghost
          </Button>
        </div>
      </div>
    </div>
  ),
};

export const WithCustomContent: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">With Custom Content</h3>
        <div className="flex flex-wrap gap-4">
          <Button>
            <span className="mr-2">🚀</span>
            Launch
          </Button>
          <Button variant="secondary">
            <span className="mr-2">💾</span>
            Save
          </Button>
          <Button variant="outline">
            <span className="mr-2">📤</span>
            Export
          </Button>
        </div>
      </div>
    </div>
  ),
};
