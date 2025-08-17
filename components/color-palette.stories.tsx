import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { ColorPalette } from './color-palette';

const meta: Meta<typeof ColorPalette> = {
  title: 'Design System/Color Palette',
  component: ColorPalette,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A comprehensive color palette showing all available colors in the design system. Dark theme is automatically applied using CSS filter inversion (filter: invert(1)).',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const LightTheme: Story = {
  args: {},
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
  globals: {
    theme: 'light',
  },
};

export const DarkTheme: Story = {
  args: {},
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
  globals: {
    theme: 'dark',
  },
};
