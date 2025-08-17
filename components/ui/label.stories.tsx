import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Label } from './label';
import { Input } from './input';

const meta: Meta<typeof Label> = {
  title: 'UI/Label',
  component: Label,
  parameters: {
    docs: {
      description: {
        component: 'Компонент метки для форм.',
      },
      sourceState: 'hidden',
      controls: { sort: 'requiredFirst' },
      expanded: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    children: 'Имя пользователя',
  },
};

export const WithInput: Story = {
  render: args => (
    <div className="space-y-2">
      <Label htmlFor="username" {...args}>
        Имя пользователя
      </Label>
      <Input id="username" placeholder="Введите имя..." />
    </div>
  ),
};

export const WithEmail: Story = {
  render: args => (
    <div className="space-y-2">
      <Label htmlFor="email" {...args}>
        Email адрес
      </Label>
      <Input id="email" type="email" placeholder="email@example.com" />
    </div>
  ),
};

export const WithPhone: Story = {
  render: args => (
    <div className="space-y-2">
      <Label htmlFor="phone" {...args}>
        Номер телефона
      </Label>
      <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" />
    </div>
  ),
};
