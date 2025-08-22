import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
  ContextMenuSeparator,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuShortcut,
} from './context-menu';
import {
  Copy,
  CreditCard,
  Edit,
  FileText,
  MoreHorizontal,
  MoreVertical,
  Settings,
  Trash2,
  User,
  Users,
} from 'lucide-react';

const meta: Meta<typeof ContextMenu> = {
  title: 'UI/ContextMenu',
  component: ContextMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'secondary', 'outline', 'ghost', 'brand'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Базовый пример
export const Default: Story = {
  render: args => (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
        Правый клик здесь
      </ContextMenuTrigger>
      <ContextMenuContent {...args}>
        <ContextMenuItem>
          <User className="mr-2 h-4 w-4" />
          <span>Профиль</span>
        </ContextMenuItem>
        <ContextMenuItem>
          <CreditCard className="mr-2 h-4 w-4" />
          <span>Биллинг</span>
        </ContextMenuItem>
        <ContextMenuItem>
          <Settings className="mr-2 h-4 w-4" />
          <span>Настройки</span>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>
          <Users className="mr-2 h-4 w-4" />
          <span>Команда</span>
        </ContextMenuItem>
        <ContextMenuItem>
          <FileText className="mr-2 h-4 w-4" />
          <span>Документация</span>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
};

// С вариантами
export const Variants: Story = {
  render: args => (
    <div className="flex gap-4">
      {(['default', 'secondary', 'outline', 'ghost', 'brand'] as const).map(
        variant => (
          <ContextMenu key={variant}>
            <ContextMenuTrigger className="flex h-[150px] w-[200px] items-center justify-center rounded-md border border-dashed text-sm">
              {variant}
            </ContextMenuTrigger>
            <ContextMenuContent variant={variant} {...args}>
              <ContextMenuItem variant={variant}>
                <User className="mr-2 h-4 w-4" />
                <span>Профиль</span>
              </ContextMenuItem>
              <ContextMenuItem variant={variant}>
                <Settings className="mr-2 h-4 w-4" />
                <span>Настройки</span>
              </ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem variant={variant}>
                <FileText className="mr-2 h-4 w-4" />
                <span>Документация</span>
              </ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        ),
      )}
    </div>
  ),
};

// С размерами
export const Sizes: Story = {
  render: args => (
    <div className="flex gap-4">
      {(['sm', 'md', 'lg'] as const).map(size => (
        <ContextMenu key={size}>
          <ContextMenuTrigger className="flex h-[150px] w-[200px] items-center justify-center rounded-md border border-dashed text-sm">
            {size}
          </ContextMenuTrigger>
          <ContextMenuContent size={size} {...args}>
            <ContextMenuItem size={size}>
              <User className="mr-2 h-4 w-4" />
              <span>Профиль</span>
            </ContextMenuItem>
            <ContextMenuItem size={size}>
              <Settings className="mr-2 h-4 w-4" />
              <span>Настройки</span>
            </ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem size={size}>
              <FileText className="mr-2 h-4 w-4" />
              <span>Документация</span>
            </ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      ))}
    </div>
  ),
};

// С чекбоксами
export const WithCheckboxes: Story = {
  render: args => (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
        Правый клик для чекбоксов
      </ContextMenuTrigger>
      <ContextMenuContent {...args}>
        <ContextMenuLabel>Настройки отображения</ContextMenuLabel>
        <ContextMenuCheckboxItem checked>
          <span>Показывать статус</span>
        </ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem checked>
          <span>Показывать время</span>
        </ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem>
          <span>Показывать уведомления</span>
        </ContextMenuCheckboxItem>
        <ContextMenuSeparator />
        <ContextMenuLabel>Дополнительные опции</ContextMenuLabel>
        <ContextMenuCheckboxItem>
          <span>Автосохранение</span>
        </ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem>
          <span>Темная тема</span>
        </ContextMenuCheckboxItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
};

// С радио кнопками
export const WithRadioButtons: Story = {
  render: args => (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
        Правый клик для радио кнопок
      </ContextMenuTrigger>
      <ContextMenuContent {...args}>
        <ContextMenuLabel>Выберите тему</ContextMenuLabel>
        <ContextMenuRadioGroup value="light">
          <ContextMenuRadioItem value="light">
            <span>Светлая</span>
          </ContextMenuRadioItem>
          <ContextMenuRadioItem value="dark">
            <span>Темная</span>
          </ContextMenuRadioItem>
          <ContextMenuRadioItem value="system">
            <span>Системная</span>
          </ContextMenuRadioItem>
        </ContextMenuRadioGroup>
        <ContextMenuSeparator />
        <ContextMenuLabel>Размер шрифта</ContextMenuLabel>
        <ContextMenuRadioGroup value="medium">
          <ContextMenuRadioItem value="small">
            <span>Маленький</span>
          </ContextMenuRadioItem>
          <ContextMenuRadioItem value="medium">
            <span>Средний</span>
          </ContextMenuRadioItem>
          <ContextMenuRadioItem value="large">
            <span>Большой</span>
          </ContextMenuRadioItem>
        </ContextMenuRadioGroup>
      </ContextMenuContent>
    </ContextMenu>
  ),
};

// С подменю
export const WithSubmenu: Story = {
  render: args => (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
        Правый клик для подменю
      </ContextMenuTrigger>
      <ContextMenuContent {...args}>
        <ContextMenuItem>
          <User className="mr-2 h-4 w-4" />
          <span>Профиль</span>
        </ContextMenuItem>
        <ContextMenuItem>
          <CreditCard className="mr-2 h-4 w-4" />
          <span>Биллинг</span>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuSub>
          <ContextMenuSubTrigger>
            <MoreHorizontal className="mr-2 h-4 w-4" />
            <span>Больше опций</span>
          </ContextMenuSubTrigger>
          <ContextMenuSubContent>
            <ContextMenuItem>
              <Edit className="mr-2 h-4 w-4" />
              <span>Редактировать</span>
            </ContextMenuItem>
            <ContextMenuItem>
              <Copy className="mr-2 h-4 w-4" />
              <span>Копировать</span>
            </ContextMenuItem>
            <ContextMenuItem>
              <Trash2 className="mr-2 h-4 w-4" />
              <span>Удалить</span>
            </ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
      </ContextMenuContent>
    </ContextMenu>
  ),
};

// С шорткатами
export const WithShortcuts: Story = {
  render: args => (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
        Правый клик для шорткатов
      </ContextMenuTrigger>
      <ContextMenuContent {...args}>
        <ContextMenuItem>
          <User className="mr-2 h-4 w-4" />
          <span>Профиль</span>
          <ContextMenuShortcut>⌘P</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          <Settings className="mr-2 h-4 w-4" />
          <span>Настройки</span>
          <ContextMenuShortcut>⌘,</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>
          <Copy className="mr-2 h-4 w-4" />
          <span>Копировать</span>
          <ContextMenuShortcut>⌘C</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          <Edit className="mr-2 h-4 w-4" />
          <span>Вставить</span>
          <ContextMenuShortcut>⌘V</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          <Trash2 className="mr-2 h-4 w-4" />
          <span>Удалить</span>
          <ContextMenuShortcut>⌫</ContextMenuShortcut>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
};

// Комплексный пример
export const ComplexExample: Story = {
  render: args => (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
        Комплексное меню
      </ContextMenuTrigger>
      <ContextMenuContent {...args}>
        <ContextMenuLabel inset>Файл</ContextMenuLabel>
        <ContextMenuItem>
          <FileText className="mr-2 h-4 w-4" />
          <span>Новый файл</span>
          <ContextMenuShortcut>⌘N</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          <FileText className="mr-2 h-4 w-4" />
          <span>Открыть</span>
          <ContextMenuShortcut>⌘O</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          <FileText className="mr-2 h-4 w-4" />
          <span>Сохранить</span>
          <ContextMenuShortcut>⌘S</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuLabel inset>Редактирование</ContextMenuLabel>
        <ContextMenuItem>
          <Copy className="mr-2 h-4 w-4" />
          <span>Копировать</span>
          <ContextMenuShortcut>⌘C</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          <Edit className="mr-2 h-4 w-4" />
          <span>Вставить</span>
          <ContextMenuShortcut>⌘V</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuLabel inset>Настройки</ContextMenuLabel>
        <ContextMenuCheckboxItem checked>
          <span>Автосохранение</span>
        </ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem>
          <span>Темная тема</span>
        </ContextMenuCheckboxItem>
        <ContextMenuSeparator />
        <ContextMenuSub>
          <ContextMenuSubTrigger>
            <MoreVertical className="mr-2 h-4 w-4" />
            <span>Дополнительно</span>
          </ContextMenuSubTrigger>
          <ContextMenuSubContent>
            <ContextMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Настройки</span>
            </ContextMenuItem>
            <ContextMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Профиль</span>
            </ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>
              <Trash2 className="mr-2 h-4 w-4" />
              <span>Удалить</span>
            </ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
      </ContextMenuContent>
    </ContextMenu>
  ),
};

// Интерактивный пример
export const InteractiveExample: Story = {
  render: args => {
    const [theme, setTheme] = React.useState('light');
    const [autosave, setAutosave] = React.useState(true);
    const [notifications, setNotifications] = React.useState(false);

    return (
      <ContextMenu>
        <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
          Интерактивное меню
        </ContextMenuTrigger>
        <ContextMenuContent {...args}>
          <ContextMenuLabel>Тема</ContextMenuLabel>
          <ContextMenuRadioGroup value={theme} onValueChange={setTheme}>
            <ContextMenuRadioItem value="light">
              <span>Светлая</span>
            </ContextMenuRadioItem>
            <ContextMenuRadioItem value="dark">
              <span>Темная</span>
            </ContextMenuRadioItem>
            <ContextMenuRadioItem value="system">
              <span>Системная</span>
            </ContextMenuRadioItem>
          </ContextMenuRadioGroup>
          <ContextMenuSeparator />
          <ContextMenuLabel>Настройки</ContextMenuLabel>
          <ContextMenuCheckboxItem
            checked={autosave}
            onCheckedChange={setAutosave}
          >
            <span>Автосохранение</span>
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem
            checked={notifications}
            onCheckedChange={setNotifications}
          >
            <span>Уведомления</span>
          </ContextMenuCheckboxItem>
          <ContextMenuSeparator />
          <ContextMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Все настройки</span>
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    );
  },
};
