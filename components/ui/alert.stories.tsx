import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Alert } from './alert';

const meta: Meta<typeof Alert> = {
  title: 'UI/Alert',
  component: Alert,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Alert component for displaying important messages to users.',
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
    type: {
      control: { type: 'select' },
      options: ['error', 'success', 'info', 'warning'],
    },
    short: {
      control: { type: 'boolean' },
    },
    highlight: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Обычные алерты
export const ErrorDefault: Story = {
  args: {
    type: 'error',
    title: 'There were 2 errors with your submission',
    description: (
      <ul className="list-disc pl-4 space-y-1">
        <li>Lorem Ipsum is simply dummy text of the printing</li>
        <li>Industry&apos;s standard dummy text ever since the 1500s, when</li>
      </ul>
    ),
  },
};

export const SuccessDefault: Story = {
  args: {
    type: 'success',
    title: 'Your submission was successful!',
    description: 'Your data has been saved and will be processed shortly.',
  },
};

export const InfoDefault: Story = {
  args: {
    type: 'info',
    title: 'Information',
    description:
      'This is an informational message that provides context or guidance to the user.',
  },
};

export const WarningDefault: Story = {
  args: {
    type: 'warning',
    title: 'Warning',
    description:
      'Please review your input before proceeding. Some fields may need attention.',
  },
};

// Highlight алерты (с цветным фоном)
export const ErrorHighlight: Story = {
  args: {
    type: 'error',
    title: 'There were 2 errors with your submission',
    description: (
      <ul className="list-disc pl-4 space-y-1">
        <li>Lorem Ipsum is simply dummy text of the printing</li>
      </ul>
    ),
    highlight: true,
  },
};

export const SuccessHighlight: Story = {
  args: {
    type: 'success',
    title: 'Success!',
    description:
      'Your action has been completed successfully. You can now proceed.',
    highlight: true,
  },
};

export const InfoHighlight: Story = {
  args: {
    type: 'info',
    title: 'Important Information',
    description:
      'This is a highlighted informational message with a colored left border.',
    highlight: true,
  },
};

export const WarningHighlight: Story = {
  args: {
    type: 'warning',
    title: 'Attention Required',
    description:
      'This is a highlighted warning message that requires user attention.',
    highlight: true,
  },
};

// Short алерты (компактные)
export const ErrorShort: Story = {
  args: {
    type: 'error',
    description: 'Uh oh, something went wrong',
    short: true,
  },
};

export const SuccessShort: Story = {
  args: {
    type: 'success',
    description: 'Success! Your changes have been saved.',
    short: true,
  },
};

export const InfoShort: Story = {
  args: {
    type: 'info',
    description: 'New updates are available',
    short: true,
  },
};

export const WarningShort: Story = {
  args: {
    type: 'warning',
    description: 'Please check your input',
    short: true,
  },
};

// Демонстрация всех вариантов
export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <Alert
        type="error"
        title="Error Alert"
        description="This is an error message"
      />
      <Alert
        type="success"
        title="Success Alert"
        description="This is a success message"
      />
      <Alert
        type="info"
        title="Info Alert"
        description="This is an info message"
      />
      <Alert
        type="warning"
        title="Warning Alert"
        description="This is a warning message"
      />
    </div>
  ),
};

export const AllHighlightVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <Alert
        type="error"
        title="Error Highlight"
        description="This is a highlighted error message"
        highlight
      />
      <Alert
        type="success"
        title="Success Highlight"
        description="This is a highlighted success message"
        highlight
      />
      <Alert
        type="info"
        title="Info Highlight"
        description="This is a highlighted info message"
        highlight
      />
      <Alert
        type="warning"
        title="Warning Highlight"
        description="This is a highlighted warning message"
        highlight
      />
    </div>
  ),
};

export const AllShortVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <Alert type="error" description="Error short message" short />
      <Alert type="success" description="Success short message" short />
      <Alert type="info" description="Info short message" short />
      <Alert type="warning" description="Warning short message" short />
    </div>
  ),
};

// Пример с кастомной иконкой
export const CustomIcon: Story = {
  args: {
    type: 'info',
    title: 'Custom Icon Alert',
    description: 'This alert uses a custom icon instead of the default one.',
    icon: <span className="h-4 w-4">🚀</span>,
  },
};

// Пример с HTML в описании
export const RichDescription: Story = {
  args: {
    type: 'warning',
    title: 'Rich Content Alert',
    description: (
      <div>
        <p>This alert contains rich HTML content:</p>
        <ul className="list-disc pl-4 mt-2">
          <li>Multiple lines</li>
          <li>Formatted text</li>
          <li>Custom styling</li>
        </ul>
      </div>
    ),
  },
};

// Пример с children (аналог default slot)
export const WithChildren: Story = {
  args: {
    type: 'info',
    title: 'Alert with Children',
    children: (
      <div className="space-y-2">
        <p>This content is passed via children prop (default slot):</p>
        <div className="bg-blue-100 p-2 rounded">
          <code>{'<Alert>content</Alert>'}</code>
        </div>
      </div>
    ),
  },
};

// Пример с named slots
export const WithNamedSlots: Story = {
  args: {
    type: 'success',
    slots: {
      title: <span className="text-lg font-bold">🎉 Custom Title</span>,
      description: (
        <div className="space-y-2">
          <p>Custom description with multiple elements:</p>
          <div className="flex items-center gap-2">
            <span className="text-green-600">✓</span>
            <span>Task completed successfully</span>
          </div>
        </div>
      ),
      icon: <span className="text-2xl">🎯</span>,
      actions: (
        <>
          <button className="px-3 py-1 bg-green-600 text-white rounded text-sm">
            View Details
          </button>
          <button className="px-3 py-1 border border-green-600 text-green-600 rounded text-sm">
            Dismiss
          </button>
        </>
      ),
    },
  },
};

// Пример с actions slot
export const WithActions: Story = {
  args: {
    type: 'warning',
    title: 'Session Expiring',
    description:
      'Your session will expire in 5 minutes. Do you want to extend it?',
    slots: {
      actions: (
        <>
          <button className="px-4 py-2 bg-yellow-600 text-white rounded text-sm hover:bg-yellow-700">
            Extend Session
          </button>
          <button className="px-4 py-2 border border-yellow-600 text-yellow-600 rounded text-sm hover:bg-yellow-50">
            Logout Now
          </button>
        </>
      ),
    },
  },
};
