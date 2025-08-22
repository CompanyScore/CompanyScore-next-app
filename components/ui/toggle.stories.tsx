import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import * as React from 'react';
import { Toggle } from '@/components/ui/toggle';
import {
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Volume2,
  VolumeX,
  Play,
  Pause,
  Heart,
  Star,
  Bookmark,
  Eye,
  EyeOff,
  Sun,
  Moon,
  Wifi,
  WifiOff,
  Bluetooth,
  BluetoothConnected,
} from 'lucide-react';

const meta: Meta<typeof Toggle> = {
  title: 'UI/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outline'],
      description: 'Вариант стиля кнопки',
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg'],
      description: 'Размер кнопки',
    },
    disabled: {
      control: 'boolean',
      description: 'Отключенное состояние',
    },
    pressed: {
      control: 'boolean',
      description: 'Нажатое состояние',
    },
    onPressedChange: {
      action: 'pressedChanged',
      description: 'Callback при изменении состояния',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Базовый пример
export const Default: Story = {
  render: args => (
    <Toggle {...args}>
      <Bold className="h-4 w-4" />
    </Toggle>
  ),
  args: {},
};

// Варианты
export const Variants: Story = {
  render: args => (
    <div className="flex items-center space-x-2">
      <Toggle {...args} variant="default">
        <Bold className="h-4 w-4" />
      </Toggle>
      <Toggle {...args} variant="outline">
        <Italic className="h-4 w-4" />
      </Toggle>
    </div>
  ),
  args: {},
};

// Размеры
export const Sizes: Story = {
  render: args => (
    <div className="flex items-center space-x-2">
      <Toggle {...args} size="sm">
        <Bold className="h-3 w-3" />
      </Toggle>
      <Toggle {...args} size="default">
        <Bold className="h-4 w-4" />
      </Toggle>
      <Toggle {...args} size="lg">
        <Bold className="h-5 w-5" />
      </Toggle>
    </div>
  ),
  args: {},
};

// С текстом
export const WithText: Story = {
  render: args => (
    <div className="flex items-center space-x-2">
      <Toggle {...args}>
        <Bold className="h-4 w-4 mr-2" />
        Жирный
      </Toggle>
      <Toggle {...args}>
        <Italic className="h-4 w-4 mr-2" />
        Курсив
      </Toggle>
      <Toggle {...args}>
        <Underline className="h-4 w-4 mr-2" />
        Подчеркнутый
      </Toggle>
    </div>
  ),
  args: {},
};

// Отключенное состояние
export const Disabled: Story = {
  render: args => (
    <div className="flex items-center space-x-2">
      <Toggle {...args} disabled>
        <Bold className="h-4 w-4" />
      </Toggle>
      <Toggle {...args} disabled pressed>
        <Italic className="h-4 w-4" />
      </Toggle>
    </div>
  ),
  args: {},
};

// Панель форматирования текста
export const TextFormatting: Story = {
  render: args => (
    <div className="space-y-4">
      <h3 className="text-sm font-medium">Панель форматирования текста</h3>
      <div className="flex items-center space-x-1 p-2 border rounded-md">
        <Toggle {...args} size="sm">
          <Bold className="h-4 w-4" />
        </Toggle>
        <Toggle {...args} size="sm">
          <Italic className="h-4 w-4" />
        </Toggle>
        <Toggle {...args} size="sm">
          <Underline className="h-4 w-4" />
        </Toggle>
        <div className="w-px h-6 bg-border mx-1" />
        <Toggle {...args} size="sm">
          <AlignLeft className="h-4 w-4" />
        </Toggle>
        <Toggle {...args} size="sm">
          <AlignCenter className="h-4 w-4" />
        </Toggle>
        <Toggle {...args} size="sm">
          <AlignRight className="h-4 w-4" />
        </Toggle>
      </div>
    </div>
  ),
  args: {},
};

// Медиаплеер контролы
export const MediaControls: Story = {
  render: args => {
    const [isPlaying, setIsPlaying] = React.useState(false);
    const [isMuted, setIsMuted] = React.useState(false);

    return (
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Медиаплеер</h3>
        <div className="flex items-center space-x-2 p-3 border rounded-md">
          <Toggle {...args} pressed={isPlaying} onPressedChange={setIsPlaying}>
            {isPlaying ? (
              <Pause className="h-4 w-4" />
            ) : (
              <Play className="h-4 w-4" />
            )}
          </Toggle>
          <Toggle {...args} pressed={isMuted} onPressedChange={setIsMuted}>
            {isMuted ? (
              <VolumeX className="h-4 w-4" />
            ) : (
              <Volume2 className="h-4 w-4" />
            )}
          </Toggle>
        </div>
        <div className="text-sm text-muted-foreground">
          Статус: {isPlaying ? 'Воспроизведение' : 'Пауза'} | Звук:{' '}
          {isMuted ? 'Выключен' : 'Включен'}
        </div>
      </div>
    );
  },
  args: {},
};

// Социальные действия
export const SocialActions: Story = {
  render: args => {
    const [isLiked, setIsLiked] = React.useState(false);
    const [isStarred, setIsStarred] = React.useState(false);
    const [isBookmarked, setIsBookmarked] = React.useState(false);

    return (
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Социальные действия</h3>
        <div className="flex items-center space-x-2 p-3 border rounded-md">
          <Toggle
            {...args}
            pressed={isLiked}
            onPressedChange={setIsLiked}
            variant="outline"
          >
            <Heart
              className={`h-4 w-4 ${isLiked ? 'fill-red-500 text-red-500' : ''}`}
            />
          </Toggle>
          <Toggle
            {...args}
            pressed={isStarred}
            onPressedChange={setIsStarred}
            variant="outline"
          >
            <Star
              className={`h-4 w-4 ${isStarred ? 'fill-yellow-500 text-yellow-500' : ''}`}
            />
          </Toggle>
          <Toggle
            {...args}
            pressed={isBookmarked}
            onPressedChange={setIsBookmarked}
            variant="outline"
          >
            <Bookmark
              className={`h-4 w-4 ${isBookmarked ? 'fill-blue-500 text-blue-500' : ''}`}
            />
          </Toggle>
        </div>
        <div className="text-sm text-muted-foreground">
          {isLiked && '❤️ Понравилось'} {isStarred && '⭐ В избранном'}{' '}
          {isBookmarked && '🔖 Сохранено'}
        </div>
      </div>
    );
  },
  args: {},
};

// Настройки видимости
export const VisibilityToggle: Story = {
  render: args => {
    const [isVisible, setIsVisible] = React.useState(true);

    return (
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Настройки видимости</h3>
        <div className="flex items-center space-x-2">
          <Toggle {...args} pressed={isVisible} onPressedChange={setIsVisible}>
            {isVisible ? (
              <Eye className="h-4 w-4" />
            ) : (
              <EyeOff className="h-4 w-4" />
            )}
          </Toggle>
          <span className="text-sm">
            {isVisible ? 'Содержимое видимо' : 'Содержимое скрыто'}
          </span>
        </div>
        {isVisible && (
          <div className="p-3 border rounded-md">
            <p className="text-sm">Это содержимое можно показать или скрыть</p>
          </div>
        )}
      </div>
    );
  },
  args: {},
};

// Системные настройки
export const SystemSettings: Story = {
  render: args => {
    const [isDarkMode, setIsDarkMode] = React.useState(false);
    const [isWifiOn, setIsWifiOn] = React.useState(true);
    const [isBluetoothOn, setIsBluetoothOn] = React.useState(false);

    return (
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Системные настройки</h3>
        <div className="space-y-3 p-3 border rounded-md">
          <div className="flex items-center justify-between">
            <span className="text-sm">Темная тема</span>
            <Toggle
              {...args}
              pressed={isDarkMode}
              onPressedChange={setIsDarkMode}
              size="sm"
            >
              {isDarkMode ? (
                <Moon className="h-4 w-4" />
              ) : (
                <Sun className="h-4 w-4" />
              )}
            </Toggle>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Wi-Fi</span>
            <Toggle
              {...args}
              pressed={isWifiOn}
              onPressedChange={setIsWifiOn}
              size="sm"
            >
              {isWifiOn ? (
                <Wifi className="h-4 w-4" />
              ) : (
                <WifiOff className="h-4 w-4" />
              )}
            </Toggle>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Bluetooth</span>
            <Toggle
              {...args}
              pressed={isBluetoothOn}
              onPressedChange={setIsBluetoothOn}
              size="sm"
            >
              {isBluetoothOn ? (
                <BluetoothConnected className="h-4 w-4" />
              ) : (
                <Bluetooth className="h-4 w-4" />
              )}
            </Toggle>
          </div>
        </div>
      </div>
    );
  },
  args: {},
};

// Интерактивный пример
export const InteractiveExample: Story = {
  render: args => {
    const [toggleStates, setToggleStates] = React.useState({
      bold: false,
      italic: false,
      underline: false,
      alignLeft: true,
      alignCenter: false,
      alignRight: false,
    });

    const handleToggle = (key: string) => {
      if (key.startsWith('align')) {
        // Для выравнивания - только один может быть активен
        setToggleStates(prev => ({
          ...prev,
          alignLeft: key === 'alignLeft',
          alignCenter: key === 'alignCenter',
          alignRight: key === 'alignRight',
        }));
      } else {
        setToggleStates(prev => ({
          ...prev,
          [key]: !prev[key as keyof typeof prev],
        }));
      }
    };

    const getTextStyle = () => {
      let style = '';
      if (toggleStates.bold) style += 'font-bold ';
      if (toggleStates.italic) style += 'italic ';
      if (toggleStates.underline) style += 'underline ';
      if (toggleStates.alignLeft) style += 'text-left ';
      if (toggleStates.alignCenter) style += 'text-center ';
      if (toggleStates.alignRight) style += 'text-right ';
      return style;
    };

    return (
      <div className="space-y-4 w-[400px]">
        <h3 className="text-sm font-medium">Редактор текста</h3>

        <div className="flex items-center space-x-1 p-2 border rounded-md">
          <Toggle
            {...args}
            pressed={toggleStates.bold}
            onPressedChange={() => handleToggle('bold')}
            size="sm"
          >
            <Bold className="h-4 w-4" />
          </Toggle>
          <Toggle
            {...args}
            pressed={toggleStates.italic}
            onPressedChange={() => handleToggle('italic')}
            size="sm"
          >
            <Italic className="h-4 w-4" />
          </Toggle>
          <Toggle
            {...args}
            pressed={toggleStates.underline}
            onPressedChange={() => handleToggle('underline')}
            size="sm"
          >
            <Underline className="h-4 w-4" />
          </Toggle>

          <div className="w-px h-6 bg-border mx-1" />

          <Toggle
            {...args}
            pressed={toggleStates.alignLeft}
            onPressedChange={() => handleToggle('alignLeft')}
            size="sm"
          >
            <AlignLeft className="h-4 w-4" />
          </Toggle>
          <Toggle
            {...args}
            pressed={toggleStates.alignCenter}
            onPressedChange={() => handleToggle('alignCenter')}
            size="sm"
          >
            <AlignCenter className="h-4 w-4" />
          </Toggle>
          <Toggle
            {...args}
            pressed={toggleStates.alignRight}
            onPressedChange={() => handleToggle('alignRight')}
            size="sm"
          >
            <AlignRight className="h-4 w-4" />
          </Toggle>
        </div>

        <div className="p-4 border rounded-md min-h-[100px]">
          <p className={getTextStyle()}>
            Это пример текста с примененным форматированием. Вы можете изменить
            стиль, используя кнопки выше.
          </p>
        </div>

        <div className="text-xs text-muted-foreground">
          Активные стили:{' '}
          {Object.entries(toggleStates)
            .filter(([value]) => value)
            .map(([key]) => key)
            .join(', ') || 'нет'}
        </div>
      </div>
    );
  },
  args: {},
};
