import type { Preview } from '@storybook/nextjs-vite';
import '../app/globals.css';
import { withTheme } from './decorators';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
  },
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: ['light', 'dark'],
        dynamicTitle: true,
      },
    },
  },
  decorators: [withTheme],
};

export default preview;
