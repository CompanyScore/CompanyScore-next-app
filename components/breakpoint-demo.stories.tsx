import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { BreakpointDemo } from './breakpoint-demo';

const meta: Meta<typeof BreakpointDemo> = {
  title: 'Design System/Breakpoint Demo',
  component: BreakpointDemo,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Демонстрация системы брейкпоинтов для адаптивного дизайна с интерактивным отслеживанием текущего размера экрана.',
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

export const Mobile: Story = {
  args: {},
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
};

export const Tablet: Story = {
  args: {},
  parameters: {
    viewport: { defaultViewport: 'tablet' },
  },
};

export const Desktop: Story = {
  args: {},
  parameters: {
    viewport: { defaultViewport: 'desktop' },
  },
};

export const LargeDesktop: Story = {
  args: {},
  parameters: {
    viewport: { defaultViewport: 'desktop' },
  },
};
