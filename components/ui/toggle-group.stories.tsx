import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import * as React from 'react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import {
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  List,
  ListOrdered,
  Quote,
  Code,
  Link,
  Image,
  Volume1,
  Volume2,
  VolumeX,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Shuffle,
  Repeat,
  Grid,
  List as ListView,
  Calendar,
  MapPin,
  Sun,
  Moon,
  Monitor,
} from 'lucide-react';

const meta: Meta<typeof ToggleGroup> = {
  title: 'UI/ToggleGroup',
  component: ToggleGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['single', 'multiple'],
      description: 'Тип выбора (одиночный или множественный)',
    },
    variant: {
      control: 'select',
      options: ['default', 'outline'],
      description: 'Вариант стиля группы',
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg'],
      description: 'Размер группы',
    },
    disabled: {
      control: 'boolean',
      description: 'Отключенное состояние',
    },
    value: {
      control: 'text',
      description: 'Выбранное значение (для single)',
    },
    defaultValue: {
      control: 'text',
      description: 'Значение по умолчанию',
    },
    onValueChange: {
      action: 'valueChanged',
      description: 'Callback при изменении значения',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Базовый пример
export const Default: Story = {
  render: args => (
    <ToggleGroup {...args}>
      <ToggleGroupItem value="bold">
        <Bold className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic">
        <Italic className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline">
        <Underline className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
  args: {
    type: 'multiple',
  },
};

// Одиночный выбор
export const SingleSelection: Story = {
  render: args => (
    <ToggleGroup {...args}>
      <ToggleGroupItem value="left">
        <AlignLeft className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="center">
        <AlignCenter className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="right">
        <AlignRight className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="justify">
        <AlignJustify className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
  args: {
    type: 'single',
    defaultValue: 'left',
  },
};

// Варианты
export const Variants: Story = {
  render: args => (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Default</h3>
        <ToggleGroup {...args} variant="default">
          <ToggleGroupItem value="bold">
            <Bold className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic">
            <Italic className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline">
            <Underline className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Outline</h3>
        <ToggleGroup {...args} variant="outline">
          <ToggleGroupItem value="bold">
            <Bold className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic">
            <Italic className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline">
            <Underline className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  ),
  args: {
    type: 'multiple',
  },
};

// Размеры
export const Sizes: Story = {
  render: args => (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Small</h3>
        <ToggleGroup {...args} size="sm">
          <ToggleGroupItem value="bold">
            <Bold className="h-3 w-3" />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic">
            <Italic className="h-3 w-3" />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline">
            <Underline className="h-3 w-3" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Default</h3>
        <ToggleGroup {...args} size="default">
          <ToggleGroupItem value="bold">
            <Bold className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic">
            <Italic className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline">
            <Underline className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Large</h3>
        <ToggleGroup {...args} size="lg">
          <ToggleGroupItem value="bold">
            <Bold className="h-5 w-5" />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic">
            <Italic className="h-5 w-5" />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline">
            <Underline className="h-5 w-5" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  ),
  args: {
    type: 'multiple',
  },
};

// С текстом
export const WithText: Story = {
  render: args => (
    <ToggleGroup {...args}>
      <ToggleGroupItem value="bold">
        <Bold className="h-4 w-4 mr-2" />
        Жирный
      </ToggleGroupItem>
      <ToggleGroupItem value="italic">
        <Italic className="h-4 w-4 mr-2" />
        Курсив
      </ToggleGroupItem>
      <ToggleGroupItem value="underline">
        <Underline className="h-4 w-4 mr-2" />
        Подчеркнутый
      </ToggleGroupItem>
    </ToggleGroup>
  ),
  args: {
    type: 'multiple',
  },
};

// Отключенное состояние
export const Disabled: Story = {
  render: args => (
    <ToggleGroup {...args} disabled>
      <ToggleGroupItem value="bold">
        <Bold className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic">
        <Italic className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline">
        <Underline className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
  args: {
    type: 'multiple',
  },
};

// Панель форматирования текста
export const TextFormatting: Story = {
  render: args => (
    <div className="space-y-4">
      <h3 className="text-sm font-medium">Панель форматирования</h3>
      <div className="space-y-3">
        <div className="space-y-2">
          <span className="text-xs text-muted-foreground">Стиль текста</span>
          <ToggleGroup {...args} type="multiple" size="sm">
            <ToggleGroupItem value="bold">
              <Bold className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic">
              <Italic className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="underline">
              <Underline className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="code">
              <Code className="h-4 w-4" />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>

        <div className="space-y-2">
          <span className="text-xs text-muted-foreground">Выравнивание</span>
          <ToggleGroup {...args} type="single" size="sm" defaultValue="left">
            <ToggleGroupItem value="left">
              <AlignLeft className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="center">
              <AlignCenter className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="right">
              <AlignRight className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="justify">
              <AlignJustify className="h-4 w-4" />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>

        <div className="space-y-2">
          <span className="text-xs text-muted-foreground">
            Списки и элементы
          </span>
          <ToggleGroup {...args} type="single" size="sm">
            <ToggleGroupItem value="bullet">
              <List className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="numbered">
              <ListOrdered className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="quote">
              <Quote className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="link">
              <Link className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="image">
              <Image className="h-4 w-4" />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>
    </div>
  ),
  args: {},
};

// Медиаплеер
export const MediaPlayer: Story = {
  render: args => {
    const [playbackState, setPlaybackState] = React.useState('pause');
    const [volume, setVolume] = React.useState('medium');
    const [options, setOptions] = React.useState<string[]>([]);

    return (
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Медиаплеер</h3>
        <div className="space-y-3">
          <div className="space-y-2">
            <span className="text-xs text-muted-foreground">
              Воспроизведение
            </span>
            <ToggleGroup
              {...args}
              type="single"
              value={playbackState}
              onValueChange={value => value && setPlaybackState(value)}
            >
              <ToggleGroupItem value="previous">
                <SkipBack className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="play">
                <Play className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="pause">
                <Pause className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="next">
                <SkipForward className="h-4 w-4" />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>

          <div className="space-y-2">
            <span className="text-xs text-muted-foreground">Громкость</span>
            <ToggleGroup
              {...args}
              type="single"
              value={volume}
              onValueChange={value => value && setVolume(value)}
            >
              <ToggleGroupItem value="mute">
                <VolumeX className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="low">
                <Volume1 className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="medium">
                <Volume2 className="h-4 w-4" />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>

          <div className="space-y-2">
            <span className="text-xs text-muted-foreground">Опции</span>
            <ToggleGroup
              {...args}
              type="multiple"
              value={options}
              onValueChange={setOptions}
            >
              <ToggleGroupItem value="shuffle">
                <Shuffle className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="repeat">
                <Repeat className="h-4 w-4" />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>

        <div className="text-xs text-muted-foreground">
          Состояние: {playbackState} | Громкость: {volume} | Опции:{' '}
          {options.join(', ') || 'нет'}
        </div>
      </div>
    );
  },
  args: {},
};

// Вид отображения
export const ViewMode: Story = {
  render: args => {
    const [viewMode, setViewMode] = React.useState('grid');

    return (
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Режим отображения</h3>
        <ToggleGroup
          {...args}
          type="single"
          value={viewMode}
          onValueChange={value => value && setViewMode(value)}
        >
          <ToggleGroupItem value="grid">
            <Grid className="h-4 w-4 mr-2" />
            Сетка
          </ToggleGroupItem>
          <ToggleGroupItem value="list">
            <ListView className="h-4 w-4 mr-2" />
            Список
          </ToggleGroupItem>
          <ToggleGroupItem value="calendar">
            <Calendar className="h-4 w-4 mr-2" />
            Календарь
          </ToggleGroupItem>
          <ToggleGroupItem value="map">
            <MapPin className="h-4 w-4 mr-2" />
            Карта
          </ToggleGroupItem>
        </ToggleGroup>
        <div className="text-sm text-muted-foreground">
          Выбранный режим: {viewMode}
        </div>
      </div>
    );
  },
  args: {},
};

// Тема интерфейса
export const ThemeSelector: Story = {
  render: args => {
    const [theme, setTheme] = React.useState('system');

    return (
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Тема интерфейса</h3>
        <ToggleGroup
          {...args}
          type="single"
          value={theme}
          onValueChange={value => value && setTheme(value)}
          variant="outline"
        >
          <ToggleGroupItem value="light">
            <Sun className="h-4 w-4 mr-2" />
            Светлая
          </ToggleGroupItem>
          <ToggleGroupItem value="dark">
            <Moon className="h-4 w-4 mr-2" />
            Темная
          </ToggleGroupItem>
          <ToggleGroupItem value="system">
            <Monitor className="h-4 w-4 mr-2" />
            Системная
          </ToggleGroupItem>
        </ToggleGroup>
        <div className="text-sm text-muted-foreground">
          Активная тема: {theme}
        </div>
      </div>
    );
  },
  args: {},
};

export const InteractiveExample: Story = {
  render: args => {
    const [textStyles, setTextStyles] = React.useState<string[]>([]);
    const [alignment, setAlignment] = React.useState('left');
    const [listType, setListType] = React.useState('');

    const getTextClass = () => {
      let classes = '';
      if (textStyles.includes('bold')) classes += 'font-bold ';
      if (textStyles.includes('italic')) classes += 'italic ';
      if (textStyles.includes('underline')) classes += 'underline ';
      if (alignment === 'center') classes += 'text-center ';
      if (alignment === 'right') classes += 'text-right ';
      if (alignment === 'justify') classes += 'text-justify ';
      return classes;
    };

    return (
      <div className="space-y-6 w-[500px]">
        <h3 className="text-sm font-medium">Интерактивный редактор</h3>

        <div className="space-y-4 p-4 border rounded-md">
          <div className="space-y-2">
            <span className="text-xs text-muted-foreground">Стиль текста</span>
            <ToggleGroup
              {...args}
              type="multiple"
              value={textStyles}
              onValueChange={setTextStyles}
              size="sm"
            >
              <ToggleGroupItem value="bold">
                <Bold className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="italic">
                <Italic className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="underline">
                <Underline className="h-4 w-4" />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>

          <div className="space-y-2">
            <span className="text-xs text-muted-foreground">Выравнивание</span>
            <ToggleGroup
              {...args}
              type="single"
              value={alignment}
              onValueChange={value => value && setAlignment(value)}
              size="sm"
            >
              <ToggleGroupItem value="left">
                <AlignLeft className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="center">
                <AlignCenter className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="right">
                <AlignRight className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="justify">
                <AlignJustify className="h-4 w-4" />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>

          <div className="space-y-2">
            <span className="text-xs text-muted-foreground">Тип списка</span>
            <ToggleGroup
              {...args}
              type="single"
              value={listType}
              onValueChange={value => setListType(value || '')}
              size="sm"
            >
              <ToggleGroupItem value="bullet">
                <List className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="numbered">
                <ListOrdered className="h-4 w-4" />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>

        <div className="p-4 border rounded-md min-h-[100px]">
          <p className={getTextClass()}>
            Это пример текста с примененным форматированием. Вы можете изменять
            стиль, выравнивание и другие параметры с помощью панели инструментов
            выше.
          </p>
          {listType === 'bullet' && (
            <ul className="list-disc ml-6 mt-2">
              <li>Первый пункт списка</li>
              <li>Второй пункт списка</li>
              <li>Третий пункт списка</li>
            </ul>
          )}
          {listType === 'numbered' && (
            <ol className="list-decimal ml-6 mt-2">
              <li>Первый пункт списка</li>
              <li>Второй пункт списка</li>
              <li>Третий пункт списка</li>
            </ol>
          )}
        </div>

        <div className="text-xs text-muted-foreground">
          Стили: {textStyles.join(', ') || 'нет'} | Выравнивание: {alignment} |
          Список: {listType || 'нет'}
        </div>
      </div>
    );
  },
  args: {},
};
