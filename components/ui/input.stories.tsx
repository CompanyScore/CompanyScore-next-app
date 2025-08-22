import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Input } from './input';
import { Label } from './label';

const meta: Meta<typeof Input> = {
  title: 'UI/Input',
  component: Input,
  parameters: {
    docs: {
      description: {
        component:
          'Расширенный компонент ввода с поддержкой масок, валидации и обработки ошибок.',
      },
      sourceState: 'hidden',
      controls: { sort: 'requiredFirst' },
      expanded: false,
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'tel', 'password', 'number', 'file'],
    },
    mask: {
      control: 'text',
      description: 'Маска ввода (# - цифры, A - буквы, * - любой символ)',
    },
    pattern: {
      control: 'text',
      description: 'Regex паттерн для валидации',
    },
    validateOnChange: {
      control: 'boolean',
      description: 'Валидировать при изменении',
    },
    error: {
      control: 'text',
      description: 'Сообщение об ошибке',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

// Базовые примеры
export const Default: Story = {
  args: {
    placeholder: 'Введите текст...',
  },
};

export const WithLabel: Story = {
  render: args => (
    <div className="space-y-2">
      <Label htmlFor="input-with-label">Имя пользователя</Label>
      <Input id="input-with-label" {...args} />
    </div>
  ),
  args: {
    placeholder: 'Введите имя...',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Отключенное поле',
    disabled: true,
  },
};

export const WithError: Story = {
  args: {
    placeholder: 'Поле с ошибкой',
    error: 'Это поле обязательно для заполнения',
  },
};

// TODO: Show both and error and success message
export const EmailValidation: Story = {
  render: args => {
    const [isValid, setIsValid] = React.useState(true);
    const [value, setValue] = React.useState('');

    return (
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="example@domain.com"
          value={value}
          onChange={e => setValue(e.target.value)}
          pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
          validateOnChange={true}
          onValidationChange={setIsValid}
          {...args}
        />
        {!isValid && value && value.trim() && (
          <p className="text-xs text-[var(--warning-500)]">
            ⚠️ Неверный формат email
          </p>
        )}
        {isValid && value && value.trim() && (
          <p className="text-xs text-[var(--success-600)]">✓ Валидный email</p>
        )}
      </div>
    );
  },
};
