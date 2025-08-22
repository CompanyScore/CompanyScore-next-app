import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import * as React from 'react';
import { REGEXP_ONLY_DIGITS_AND_CHARS } from 'input-otp';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '@/components/ui/input-otp';

const meta: Meta<typeof InputOTP> = {
  title: 'UI/InputOTP',
  component: InputOTP,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    maxLength: {
      control: { type: 'number', min: 1, max: 12 },
      description: 'Максимальная длина OTP',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Отключенное состояние',
    },
    pattern: {
      control: { type: 'select' },
      options: ['digits', 'alphanumeric'],
      description: 'Паттерн ввода',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => (
    <div className="w-full max-w-sm space-y-4">
      <div className="space-y-2">
        <Label htmlFor="otp">Введите код подтверждения</Label>
        <InputOTP {...args} id="otp">
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </div>
    </div>
  ),
  args: {
    maxLength: 6,
  },
};

export const FourDigits: Story = {
  render: args => (
    <div className="w-full max-w-sm space-y-4">
      <div className="space-y-2">
        <Label htmlFor="otp-4">4-значный код</Label>
        <InputOTP {...args} id="otp-4">
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
          </InputOTPGroup>
        </InputOTP>
      </div>
    </div>
  ),
  args: {
    maxLength: 4,
  },
};

export const WithSeparator: Story = {
  render: args => (
    <div className="w-full max-w-sm space-y-4">
      <div className="space-y-2">
        <Label htmlFor="otp-separator">Код с разделителем</Label>
        <InputOTP {...args} id="otp-separator">
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
          </InputOTPGroup>
        </InputOTP>
      </div>
    </div>
  ),
  args: {
    maxLength: 4,
  },
};

export const Alphanumeric: Story = {
  render: args => (
    <div className="w-full max-w-sm space-y-4">
      <div className="space-y-2">
        <Label htmlFor="otp-alpha">Буквенно-цифровой код</Label>
        <InputOTP
          {...args}
          id="otp-alpha"
          pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
        >
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </div>
    </div>
  ),
  args: {
    maxLength: 6,
    pattern: REGEXP_ONLY_DIGITS_AND_CHARS,
  },
};

export const Disabled: Story = {
  render: args => (
    <div className="w-full max-w-sm space-y-4">
      <div className="space-y-2">
        <Label htmlFor="otp-disabled">Отключенное поле</Label>
        <InputOTP {...args} id="otp-disabled" disabled>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
          </InputOTPGroup>
        </InputOTP>
      </div>
    </div>
  ),
  args: {
    maxLength: 4,
    disabled: true,
  },
};

export const Controlled: Story = {
  render: args => {
    const [value, setValue] = React.useState('');

    return (
      <div className="w-full max-w-sm space-y-4">
        <div className="space-y-2">
          <Label htmlFor="otp-controlled">Управляемый ввод</Label>
          <InputOTP
            {...args}
            id="otp-controlled"
            value={value}
            onChange={setValue}
          >
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
            </InputOTPGroup>
          </InputOTP>
          <div className="text-sm text-muted-foreground">
            Введенное значение: {value || 'пусто'}
          </div>
        </div>
      </div>
    );
  },
  args: {
    maxLength: 4,
  },
};

export const FormExample: Story = {
  render: args => {
    const [otp, setOtp] = React.useState('');
    const [isValid, setIsValid] = React.useState(false);

    React.useEffect(() => {
      setIsValid(otp.length === 6);
    }, [otp]);

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (isValid) {
        alert(`Код подтверждения: ${otp}`);
      }
    };

    return (
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Подтверждение входа</CardTitle>
          <CardDescription>
            Введите 6-значный код, отправленный на ваш телефон
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="otp-form">Код подтверждения</Label>
              <InputOTP {...args} id="otp-form" value={otp} onChange={setOtp}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup>
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </div>
            <div className="flex gap-2">
              <Button type="submit" disabled={!isValid}>
                Подтвердить
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => setOtp('')}
              >
                Очистить
              </Button>
            </div>
            {otp && (
              <div className="text-sm text-muted-foreground">
                {isValid ? '✅ Код введен полностью' : '⚠️ Введите все 6 цифр'}
              </div>
            )}
          </form>
        </CardContent>
      </Card>
    );
  },
  args: {
    maxLength: 6,
  },
};

export const CustomStyling: Story = {
  render: args => (
    <div className="w-full max-w-sm space-y-4">
      <div className="space-y-2">
        <Label htmlFor="otp-custom">Кастомный стиль</Label>
        <InputOTP {...args} id="otp-custom" className="gap-3">
          <InputOTPGroup className="gap-3">
            <InputOTPSlot
              index={0}
              className="h-12 w-12 text-lg font-semibold border-2 border-primary"
            />
            <InputOTPSlot
              index={1}
              className="h-12 w-12 text-lg font-semibold border-2 border-primary"
            />
            <InputOTPSlot
              index={2}
              className="h-12 w-12 text-lg font-semibold border-2 border-primary"
            />
            <InputOTPSlot
              index={3}
              className="h-12 w-12 text-lg font-semibold border-2 border-primary"
            />
          </InputOTPGroup>
        </InputOTP>
      </div>
    </div>
  ),
  args: {
    maxLength: 4,
  },
};

export const InteractiveExample: Story = {
  render: args => {
    const [otp, setOtp] = React.useState('');
    const [pattern, setPattern] = React.useState<'digits' | 'alphanumeric'>(
      'digits',
    );

    return (
      <div className="w-full max-w-md space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Интерактивный пример</CardTitle>
            <CardDescription>
              Попробуйте различные настройки OTP поля
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Тип ввода</Label>
              <div className="flex gap-2">
                <Button
                  variant={pattern === 'digits' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setPattern('digits')}
                >
                  Только цифры
                </Button>
                <Button
                  variant={pattern === 'alphanumeric' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setPattern('alphanumeric')}
                >
                  Буквы и цифры
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="otp-interactive">Код подтверждения</Label>
              <InputOTP
                {...args}
                id="otp-interactive"
                value={otp}
                onChange={setOtp}
                pattern={
                  pattern === 'alphanumeric'
                    ? REGEXP_ONLY_DIGITS_AND_CHARS
                    : undefined
                }
              >
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup>
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </div>

            <div className="space-y-2">
              <Label>Информация</Label>
              <div className="text-sm space-y-1">
                <div>
                  Тип: {pattern === 'digits' ? 'Только цифры' : 'Буквы и цифры'}
                </div>
                <div>Длина: {otp.length}/6</div>
                <div>Значение: {otp || 'пусто'}</div>
              </div>
            </div>

            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={() => setOtp('')}>
                Очистить
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setOtp('123456')}
              >
                Заполнить тестовым
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  },
  args: {
    maxLength: 6,
  },
};
