import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from './collapsible';
import React from 'react';

const meta: Meta<typeof Collapsible> = {
  title: 'UI/Collapsible',
  component: Collapsible,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Интерактивный компонент для сворачивания/разворачивания панелей с различными вариантами стилей.',
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
      options: ['default', 'secondary', 'outline', 'ghost', 'brand'],
      description: 'Вариант стиля компонента',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Размер компонента',
    },
    defaultOpen: {
      control: { type: 'boolean' },
      description: 'Открыт ли компонент по умолчанию',
    },
    open: {
      control: { type: 'boolean' },
      description: 'Контролируемое состояние открытия',
    },
    onOpenChange: {
      action: 'openChange',
      description: 'Callback при изменении состояния',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Основные варианты
export const Default: Story = {
  render: args => (
    <Collapsible {...args}>
      <CollapsibleTrigger>
        Can I use this in my project?
        <span className="text-gray-400">▼</span>
      </CollapsibleTrigger>
      <CollapsibleContent>
        Yes. Free to use for personal and commercial projects. No attribution
        required.
      </CollapsibleContent>
    </Collapsible>
  ),
};

export const DefaultOpen: Story = {
  render: args => (
    <Collapsible {...args} defaultOpen>
      <CollapsibleTrigger>
        This is open by default
        <span className="text-gray-400">▼</span>
      </CollapsibleTrigger>
      <CollapsibleContent>
        This content is visible by default when the component loads.
      </CollapsibleContent>
    </Collapsible>
  ),
};

// Варианты стилей
export const Variants: Story = {
  render: args => (
    <div className="space-y-4">
      <Collapsible variant="default" {...args}>
        <CollapsibleTrigger>
          Default variant
          <span className="text-gray-400">▼</span>
        </CollapsibleTrigger>
        <CollapsibleContent>
          Default styling with gray border and white background.
        </CollapsibleContent>
      </Collapsible>

      <Collapsible variant="secondary" {...args}>
        <CollapsibleTrigger>
          Secondary variant
          <span className="text-gray-400">▼</span>
        </CollapsibleTrigger>
        <CollapsibleContent>
          Secondary styling with gray background and border.
        </CollapsibleContent>
      </Collapsible>

      <Collapsible variant="outline" {...args}>
        <CollapsibleTrigger>
          Outline variant
          <span className="text-gray-400">▼</span>
        </CollapsibleTrigger>
        <CollapsibleContent>
          Outline styling with thicker border.
        </CollapsibleContent>
      </Collapsible>

      <Collapsible variant="ghost" {...args}>
        <CollapsibleTrigger>
          Ghost variant
          <span className="text-gray-400">▼</span>
        </CollapsibleTrigger>
        <CollapsibleContent>
          Ghost styling with subtle background.
        </CollapsibleContent>
      </Collapsible>

      <Collapsible variant="brand" {...args}>
        <CollapsibleTrigger>
          Brand variant
          <span className="text-gray-400">▼</span>
        </CollapsibleTrigger>
        <CollapsibleContent>
          Brand styling with orange accent color.
        </CollapsibleContent>
      </Collapsible>
    </div>
  ),
};

// Размеры
export const Sizes: Story = {
  render: args => (
    <div className="space-y-4">
      <Collapsible size="sm" {...args}>
        <CollapsibleTrigger>
          Small size
          <span className="text-gray-400">▼</span>
        </CollapsibleTrigger>
        <CollapsibleContent>
          Small size with compact padding and text.
        </CollapsibleContent>
      </Collapsible>

      <Collapsible size="md" {...args}>
        <CollapsibleTrigger>
          Medium size (default)
          <span className="text-gray-400">▼</span>
        </CollapsibleTrigger>
        <CollapsibleContent>
          Medium size with standard padding and text.
        </CollapsibleContent>
      </Collapsible>

      <Collapsible size="lg" {...args}>
        <CollapsibleTrigger>
          Large size
          <span className="text-gray-400">▼</span>
        </CollapsibleTrigger>
        <CollapsibleContent>
          Large size with generous padding and larger text.
        </CollapsibleContent>
      </Collapsible>
    </div>
  ),
};

export const WithIcons: Story = {
  render: args => (
    <Collapsible {...args}>
      <CollapsibleTrigger>
        <div className="flex items-center gap-2">
          <span className="text-green-500">🔒</span>
          <span className="font-medium">Security Settings</span>
        </div>
        <span className="text-gray-400 transition-transform">▼</span>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="space-y-2">
          <p>Configure your security preferences:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Two-factor authentication</li>
            <li>Password requirements</li>
            <li>Session management</li>
          </ul>
        </div>
      </CollapsibleContent>
    </Collapsible>
  ),
};

export const MultipleCollapsibles: Story = {
  render: args => (
    <div className="space-y-2">
      <Collapsible {...args}>
        <CollapsibleTrigger>
          First Section
          <span className="text-gray-400">▼</span>
        </CollapsibleTrigger>
        <CollapsibleContent>Content for the first section.</CollapsibleContent>
      </Collapsible>

      <Collapsible {...args}>
        <CollapsibleTrigger>
          Second Section
          <span className="text-gray-400">▼</span>
        </CollapsibleTrigger>
        <CollapsibleContent>Content for the second section.</CollapsibleContent>
      </Collapsible>

      <Collapsible {...args}>
        <CollapsibleTrigger>
          Third Section
          <span className="text-gray-400">▼</span>
        </CollapsibleTrigger>
        <CollapsibleContent>Content for the third section.</CollapsibleContent>
      </Collapsible>
    </div>
  ),
};

export const WithAnimation: Story = {
  render: args => (
    <Collapsible {...args}>
      <CollapsibleTrigger>
        <span className="font-medium text-purple-900">
          Animated Collapsible
        </span>
        <span className="text-purple-500 transition-transform duration-200">
          ▼
        </span>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <p className="text-purple-800">
          This collapsible has smooth animations and custom styling.
        </p>
      </CollapsibleContent>
    </Collapsible>
  ),
};

export const FAQ: Story = {
  render: args => (
    <div className="space-y-2">
      <Collapsible {...args}>
        <CollapsibleTrigger>
          <span className="font-medium">What is CompanyScore?</span>
          <span className="text-gray-400">▼</span>
        </CollapsibleTrigger>
        <CollapsibleContent>
          CompanyScore is a professional platform for rating and reviewing
          companies. Find reliable information about companies and share your
          experience with the community.
        </CollapsibleContent>
      </Collapsible>

      <Collapsible {...args}>
        <CollapsibleTrigger>
          <span className="font-medium">How do I create an account?</span>
          <span className="text-gray-400">▼</span>
        </CollapsibleTrigger>
        <CollapsibleContent>
          You can sign up using your email address or connect with your existing
          social media accounts. The registration process is quick and secure.
        </CollapsibleContent>
      </Collapsible>

      <Collapsible {...args}>
        <CollapsibleTrigger>
          <span className="font-medium">Can I edit my reviews?</span>
          <span className="text-gray-400">▼</span>
        </CollapsibleTrigger>
        <CollapsibleContent>
          Yes, you can edit your reviews within 30 days of posting. After that
          period, you can contact our support team for assistance.
        </CollapsibleContent>
      </Collapsible>
    </div>
  ),
};

// Интерактивный пример с контролируемым состоянием
export const InteractiveExample: Story = {
  render: args => {
    const [openItems, setOpenItems] = React.useState<Record<string, boolean>>(
      {},
    );

    const handleToggle = (id: string) => (isOpen: boolean) => {
      setOpenItems(prev => ({
        ...prev,
        [id]: isOpen,
      }));
    };

    const items = [
      { id: 'item1', title: 'Item 1', content: 'Content for item 1' },
      { id: 'item2', title: 'Item 2', content: 'Content for item 2' },
      { id: 'item3', title: 'Item 3', content: 'Content for item 3' },
    ];

    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium">Interactive Collapsibles</h3>
          <div className="text-sm text-muted-foreground">
            Open: {Object.values(openItems).filter(Boolean).length} of{' '}
            {items.length}
          </div>
        </div>

        <div className="space-y-2">
          {items.map(item => (
            <Collapsible
              key={item.id}
              open={openItems[item.id]}
              onOpenChange={handleToggle(item.id)}
              {...args}
            >
              <CollapsibleTrigger>
                <span className="font-medium">{item.title}</span>
                <span className="text-gray-400">▼</span>
              </CollapsibleTrigger>
              <CollapsibleContent>{item.content}</CollapsibleContent>
            </Collapsible>
          ))}
        </div>

        {Object.values(openItems).some(Boolean) && (
          <div className="p-3 bg-[var(--success-50)] border border-[var(--success-200)] rounded-lg">
            <div className="text-sm font-medium text-[var(--success-800)]">
              Open items:
            </div>
            <div className="text-sm text-[var(--success-700)] mt-1">
              {items
                .filter(item => openItems[item.id])
                .map(item => item.title)
                .join(', ')}
            </div>
          </div>
        )}
      </div>
    );
  },
};
