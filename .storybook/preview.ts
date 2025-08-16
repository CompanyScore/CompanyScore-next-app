import type { Preview } from '@storybook/nextjs-vite';
import '../app/globals.css';
import { withTheme } from './decorators';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'dark',
          value: '#000000',
        },
        {
          name: 'gray',
          value: '#f3f4f6',
        },
      ],
    },
    a11y: {
      test: 'todo',
    },
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
