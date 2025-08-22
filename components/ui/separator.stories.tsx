import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Separator } from './separator';

const meta: Meta<typeof Separator> = {
  title: 'UI/Separator',
  component: Separator,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
    },
    decorative: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Базовый пример
export const Default: Story = {
  render: () => (
    <div>
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
        <p className="text-sm text-muted-foreground">
          An open-source UI component library.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  ),
};

// Горизонтальный
export const Horizontal: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold">Section 1</h3>
        <p className="text-sm text-muted-foreground">
          This is the first section of content.
        </p>
      </div>
      <Separator />
      <div>
        <h3 className="text-lg font-semibold">Section 2</h3>
        <p className="text-sm text-muted-foreground">
          This is the second section of content.
        </p>
      </div>
      <Separator />
      <div>
        <h3 className="text-lg font-semibold">Section 3</h3>
        <p className="text-sm text-muted-foreground">
          This is the third section of content.
        </p>
      </div>
    </div>
  ),
};

// Вертикальный
export const Vertical: Story = {
  render: () => (
    <div className="flex h-20 items-center space-x-4">
      <div className="text-sm">
        <div className="font-medium">Item 1</div>
        <div className="text-muted-foreground">Description</div>
      </div>
      <Separator orientation="vertical" />
      <div className="text-sm">
        <div className="font-medium">Item 2</div>
        <div className="text-muted-foreground">Description</div>
      </div>
      <Separator orientation="vertical" />
      <div className="text-sm">
        <div className="font-medium">Item 3</div>
        <div className="text-muted-foreground">Description</div>
      </div>
    </div>
  ),
};

// В навигации
export const Navigation: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Breadcrumb Navigation</h3>
        <div className="flex items-center space-x-2 text-sm">
          <span>Home</span>
          <Separator orientation="vertical" className="h-4" />
          <span>Products</span>
          <Separator orientation="vertical" className="h-4" />
          <span>Electronics</span>
          <Separator orientation="vertical" className="h-4" />
          <span className="text-muted-foreground">Laptops</span>
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="text-lg font-semibold mb-4">Menu Items</h3>
        <div className="flex items-center space-x-6 text-sm">
          <a
            href="#"
            className="hover:text-foreground text-muted-foreground transition-colors"
          >
            Dashboard
          </a>
          <Separator orientation="vertical" className="h-4" />
          <a
            href="#"
            className="hover:text-foreground text-muted-foreground transition-colors"
          >
            Analytics
          </a>
          <Separator orientation="vertical" className="h-4" />
          <a
            href="#"
            className="hover:text-foreground text-muted-foreground transition-colors"
          >
            Reports
          </a>
          <Separator orientation="vertical" className="h-4" />
          <a
            href="#"
            className="hover:text-foreground text-muted-foreground transition-colors"
          >
            Settings
          </a>
        </div>
      </div>
    </div>
  ),
};

// В карточке
export const InCard: Story = {
  render: () => (
    <div className="w-[350px] rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="p-6">
        <div className="space-y-1">
          <h3 className="text-2xl font-semibold leading-none tracking-tight">
            Card Title
          </h3>
          <p className="text-sm text-muted-foreground">
            Card description goes here.
          </p>
        </div>
      </div>
      <Separator />
      <div className="p-6">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Status</span>
            <span className="text-sm font-medium">Active</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Created</span>
            <span className="text-sm font-medium">2 days ago</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Updated</span>
            <span className="text-sm font-medium">1 hour ago</span>
          </div>
        </div>
      </div>
      <Separator />
      <div className="p-6">
        <div className="flex items-center space-x-2">
          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2">
            Edit
          </button>
          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2">
            Delete
          </button>
        </div>
      </div>
    </div>
  ),
};

// В боковой панели
export const Sidebar: Story = {
  render: () => (
    <div className="w-64 rounded-lg border bg-card">
      <div className="p-6">
        <h3 className="text-lg font-semibold">Dashboard</h3>
      </div>
      <Separator />
      <div className="p-4">
        <nav className="space-y-2">
          <div className="space-y-1">
            <h4 className="text-sm font-medium text-muted-foreground mb-2">
              GENERAL
            </h4>
            <a
              href="#"
              className="flex items-center rounded-md px-2 py-1.5 text-sm hover:bg-accent"
            >
              Overview
            </a>
            <a
              href="#"
              className="flex items-center rounded-md px-2 py-1.5 text-sm hover:bg-accent"
            >
              Analytics
            </a>
            <a
              href="#"
              className="flex items-center rounded-md px-2 py-1.5 text-sm hover:bg-accent"
            >
              Reports
            </a>
          </div>
        </nav>
      </div>
      <Separator />
      <div className="p-4">
        <nav className="space-y-2">
          <div className="space-y-1">
            <h4 className="text-sm font-medium text-muted-foreground mb-2">
              SETTINGS
            </h4>
            <a
              href="#"
              className="flex items-center rounded-md px-2 py-1.5 text-sm hover:bg-accent"
            >
              Account
            </a>
            <a
              href="#"
              className="flex items-center rounded-md px-2 py-1.5 text-sm hover:bg-accent"
            >
              Preferences
            </a>
            <a
              href="#"
              className="flex items-center rounded-md px-2 py-1.5 text-sm hover:bg-accent"
            >
              Security
            </a>
          </div>
        </nav>
      </div>
      <Separator />
      <div className="p-4">
        <button className="w-full rounded-md bg-secondary px-3 py-2 text-sm hover:bg-secondary/80">
          Sign Out
        </button>
      </div>
    </div>
  ),
};

// С различными размерами
export const Sizes: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Горизонтальные разделители</h3>

        <div>
          <p className="text-sm text-muted-foreground mb-2">
            Тонкий (по умолчанию)
          </p>
          <Separator />
        </div>

        <div>
          <p className="text-sm text-muted-foreground mb-2">Средний</p>
          <Separator className="h-[2px]" />
        </div>

        <div>
          <p className="text-sm text-muted-foreground mb-2">Толстый</p>
          <Separator className="h-1" />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Вертикальные разделители</h3>
        <div className="flex items-center space-x-4 h-12">
          <span className="text-sm">Тонкий</span>
          <Separator orientation="vertical" />
          <span className="text-sm">Средний</span>
          <Separator orientation="vertical" className="w-[2px]" />
          <span className="text-sm">Толстый</span>
          <Separator orientation="vertical" className="w-1" />
          <span className="text-sm">Конец</span>
        </div>
      </div>
    </div>
  ),
};
