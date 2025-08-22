import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import * as React from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const meta: Meta<typeof Textarea> = {
  title: 'UI/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Плейсхолдер для текстовой области',
    },
    disabled: {
      control: 'boolean',
      description: 'Отключенное состояние',
    },
    rows: {
      control: 'number',
      description: 'Количество строк',
    },
    value: {
      control: 'text',
      description: 'Значение текстовой области',
    },
    onChange: {
      action: 'changed',
      description: 'Callback при изменении значения',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Базовый пример
export const Default: Story = {
  render: args => <Textarea {...args} className="w-[300px]" />,
  args: {
    placeholder: 'Введите ваше сообщение здесь...',
  },
};

// С лейблом
export const WithLabel: Story = {
  render: args => (
    <div className="space-y-2 w-[300px]">
      <Label htmlFor="message">Сообщение</Label>
      <Textarea {...args} id="message" />
    </div>
  ),
  args: {
    placeholder: 'Напишите ваше сообщение...',
  },
};

// Отключенное состояние
export const Disabled: Story = {
  render: args => (
    <div className="space-y-2 w-[300px]">
      <Label htmlFor="disabled-textarea">Отключенная текстовая область</Label>
      <Textarea {...args} id="disabled-textarea" />
    </div>
  ),
  args: {
    disabled: true,
    placeholder: 'Это поле отключено',
    value: 'Отключенный текст',
  },
};

// Различные размеры
export const Sizes: Story = {
  render: args => (
    <div className="space-y-4 w-[400px]">
      <div className="space-y-2">
        <Label>Маленькая (3 строки)</Label>
        <Textarea
          {...args}
          rows={3}
          placeholder="Маленькая текстовая область..."
        />
      </div>
      <div className="space-y-2">
        <Label>Средняя (5 строк)</Label>
        <Textarea
          {...args}
          rows={5}
          placeholder="Средняя текстовая область..."
        />
      </div>
      <div className="space-y-2">
        <Label>Большая (8 строк)</Label>
        <Textarea
          {...args}
          rows={8}
          placeholder="Большая текстовая область..."
        />
      </div>
    </div>
  ),
  args: {},
};

// Валидация с ошибкой
export const WithError: Story = {
  render: args => (
    <div className="space-y-2 w-[300px]">
      <Label htmlFor="error-textarea">Комментарий *</Label>
      <Textarea
        {...args}
        id="error-textarea"
        className="border-destructive focus-visible:ring-destructive"
      />
      <p className="text-sm text-destructive">
        Это поле обязательно для заполнения
      </p>
    </div>
  ),
  args: {
    placeholder: 'Введите комментарий...',
  },
};

// Успешная валидация
export const WithSuccess: Story = {
  render: args => (
    <div className="space-y-2 w-[300px]">
      <Label htmlFor="success-textarea">Отзыв</Label>
      <Textarea
        {...args}
        id="success-textarea"
        className="border-green-500 focus-visible:ring-green-500"
      />
      <p className="text-sm text-green-600">Отлично! Ваш отзыв принят</p>
    </div>
  ),
  args: {
    value: 'Отличный сервис, очень доволен качеством обслуживания!',
  },
};

// Форма обратной связи
export const FeedbackForm: Story = {
  render: args => (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Обратная связь</CardTitle>
        <CardDescription>
          Расскажите нам о вашем опыте использования нашего продукта
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="subject">Тема</Label>
          <input
            id="subject"
            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Краткое описание темы"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="feedback">Ваш отзыв</Label>
          <Textarea
            {...args}
            id="feedback"
            rows={6}
            placeholder="Поделитесь своими мыслями, предложениями или сообщите о проблемах..."
          />
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Отмена</Button>
          <Button>Отправить отзыв</Button>
        </div>
      </CardContent>
    </Card>
  ),
  args: {},
};

// Чат сообщение
export const ChatMessage: Story = {
  render: args => (
    <Card className="w-[350px]">
      <CardContent className="p-4">
        <div className="space-y-3">
          <div className="space-y-2">
            <Label htmlFor="chat-message">Новое сообщение</Label>
            <Textarea
              {...args}
              id="chat-message"
              rows={3}
              placeholder="Введите ваше сообщение..."
            />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">
              0/500 символов
            </span>
            <div className="flex gap-2">
              <Button variant="ghost" size="sm">
                📎
              </Button>
              <Button size="sm">Отправить</Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  ),
  args: {},
};

// Интерактивный пример с подсчетом символов
export const InteractiveExample: Story = {
  render: args => {
    const [value, setValue] = React.useState('');
    const maxLength = 250;

    return (
      <div className="space-y-4 w-[400px]">
        <Card>
          <CardHeader>
            <CardTitle>Написать пост</CardTitle>
            <CardDescription>
              Поделитесь своими мыслями с сообществом
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="interactive-textarea">Текст поста</Label>
              <Textarea
                {...args}
                id="interactive-textarea"
                value={value}
                onChange={e => setValue(e.target.value)}
                rows={4}
                placeholder="О чем вы думаете?"
                maxLength={maxLength}
              />
              <div className="flex items-center justify-between text-xs">
                <span
                  className={`${value.length > maxLength * 0.8 ? 'text-destructive' : 'text-muted-foreground'}`}
                >
                  {value.length}/{maxLength} символов
                </span>
                {value.length > 0 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setValue('')}
                  >
                    Очистить
                  </Button>
                )}
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                disabled={value.length === 0}
                onClick={() => setValue('')}
              >
                Сбросить
              </Button>
              <Button disabled={value.length === 0 || value.length > maxLength}>
                Опубликовать
              </Button>
            </div>
          </CardContent>
        </Card>

        {value.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">
                Предварительный просмотр
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">{value || 'Ваш пост появится здесь...'}</p>
            </CardContent>
          </Card>
        )}
      </div>
    );
  },
  args: {},
};
