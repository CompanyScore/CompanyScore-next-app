import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Typography } from './typography';

const meta: Meta<typeof Typography> = {
  title: 'Design System/Typography',
  component: Typography,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Typography component showing Inter font family with all weights and sizes.',
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
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  parameters: {
    layout: 'fullscreen',
  },
};

export const Mobile: Story = {
  args: {},
  parameters: {
    layout: 'fullscreen',
  },
};

export const Tablet: Story = {
  args: {},
  parameters: {
    layout: 'fullscreen',
  },
};

export const Desktop: Story = {
  args: {},
  parameters: {
    layout: 'fullscreen',
  },
};
