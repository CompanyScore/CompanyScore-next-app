import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { SpacingDemo } from './spacing-demo';

const meta: Meta<typeof SpacingDemo> = {
  title: 'Design System/Spacing Demo',
  component: SpacingDemo,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Демонстрация системы отступов с использованием CSS переменных и утилитарных классов.',
      },
      sourceState: 'hidden',
      controls: { sort: 'requiredFirst' },
      expanded: false,
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
