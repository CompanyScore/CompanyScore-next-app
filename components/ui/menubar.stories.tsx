import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarLabel,
} from './menubar';
import {
  Settings,
  User,
  Search,
  Filter,
  Download,
  Upload,
  Share,
  Trash2,
  Copy,
  Undo,
  Redo,
  Save,
  Keyboard,
  Monitor,
  Sun,
  Moon,
  Globe,
  Volume2,
  RotateCcw,
  ZoomIn,
  ZoomOut,
  Grid,
  List,
  Calendar,
  Star,
  Heart,
  Bookmark,
  Tag,
  Folder,
  FileText,
  Image,
  Video,
  Music,
  Archive,
  Lock,
  Unlock,
  Eye,
  MoreHorizontal,
} from 'lucide-react';

const meta: Meta<typeof Menubar> = {
  title: 'UI/Menubar',
  component: Menubar,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Базовый пример
export const Default: Story = {
  render: () => (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Файл</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Новый файл
            <MenubarShortcut>cmd + N</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Открыть
            <MenubarShortcut>cmd + O</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            <Save className="mr-2 h-4 w-4" />
            Сохранить
            <MenubarShortcut>cmd + S</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Сохранить как...
            <MenubarShortcut>cmd + ⇧S</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            Печать
            <MenubarShortcut>cmd + P</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            Выход
            <MenubarShortcut>cmd + Q</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Правка</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <Undo className="mr-2 h-4 w-4" />
            Отменить
            <MenubarShortcut>cmd + Z</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            <Redo className="mr-2 h-4 w-4" />
            Повторить
            <MenubarShortcut>cmd + ⇧Z</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            Вырезать
            <MenubarShortcut>cmd + X</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            <Copy className="mr-2 h-4 w-4" />
            Копировать
            <MenubarShortcut>cmd + C</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Вставить
            <MenubarShortcut>cmd + V</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Вид</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem>
            <Grid className="mr-2 h-4 w-4" />
            Сетка
          </MenubarCheckboxItem>
          <MenubarCheckboxItem checked>
            <List className="mr-2 h-4 w-4" />
            Список
          </MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarItem>
            <ZoomIn className="mr-2 h-4 w-4" />
            Увеличить
            <MenubarShortcut>cmd + +</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            <ZoomOut className="mr-2 h-4 w-4" />
            Уменьшить
            <MenubarShortcut>cmd + -</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Справка</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Справка
            <MenubarShortcut>cmd + ?</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>О программе</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
};

// С подменю
export const WithSubmenus: Story = {
  render: () => (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Файл</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Новый</MenubarItem>
          <MenubarSub>
            <MenubarSubTrigger>
              <Folder className="mr-2 h-4 w-4" />
              Открыть недавние
            </MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>document1.txt</MenubarItem>
              <MenubarItem>document2.txt</MenubarItem>
              <MenubarItem>presentation.pptx</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Экспорт</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>PDF</MenubarItem>
              <MenubarItem>Word</MenubarItem>
              <MenubarItem>HTML</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Правка</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <Undo className="mr-2 h-4 w-4" />
            Отменить
          </MenubarItem>
          <MenubarItem>
            <Redo className="mr-2 h-4 w-4" />
            Повторить
          </MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>
              <MoreHorizontal className="mr-2 h-4 w-4" />
              Дополнительно
            </MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Найти и заменить</MenubarItem>
              <MenubarItem>Перейти к строке</MenubarItem>
              <MenubarItem>Выделить все</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
};

// С радио кнопками
export const WithRadioButtons: Story = {
  render: () => {
    const [view, setView] = React.useState('list');
    const [theme, setTheme] = React.useState('system');

    return (
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Вид</MenubarTrigger>
          <MenubarContent>
            <MenubarLabel inset>Режим отображения</MenubarLabel>
            <MenubarRadioGroup value={view} onValueChange={setView}>
              <MenubarRadioItem value="grid">
                <Grid className="mr-2 h-4 w-4" />
                Сетка
              </MenubarRadioItem>
              <MenubarRadioItem value="list">
                <List className="mr-2 h-4 w-4" />
                Список
              </MenubarRadioItem>
              <MenubarRadioItem value="calendar">
                <Calendar className="mr-2 h-4 w-4" />
                Календарь
              </MenubarRadioItem>
            </MenubarRadioGroup>
            <MenubarSeparator />
            <MenubarLabel inset>Тема</MenubarLabel>
            <MenubarRadioGroup value={theme} onValueChange={setTheme}>
              <MenubarRadioItem value="light">
                <Sun className="mr-2 h-4 w-4" />
                Светлая
              </MenubarRadioItem>
              <MenubarRadioItem value="dark">
                <Moon className="mr-2 h-4 w-4" />
                Темная
              </MenubarRadioItem>
              <MenubarRadioItem value="system">
                <Monitor className="mr-2 h-4 w-4" />
                Системная
              </MenubarRadioItem>
            </MenubarRadioGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    );
  },
};

// С чекбоксами
export const WithCheckboxes: Story = {
  render: () => {
    const [showGrid, setShowGrid] = React.useState(true);
    const [showRulers, setShowRulers] = React.useState(false);
    const [showStatusBar, setShowStatusBar] = React.useState(true);

    return (
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Вид</MenubarTrigger>
          <MenubarContent>
            <MenubarLabel inset>Элементы интерфейса</MenubarLabel>
            <MenubarCheckboxItem
              checked={showGrid}
              onCheckedChange={setShowGrid}
            >
              <Grid className="mr-2 h-4 w-4" />
              Показать сетку
            </MenubarCheckboxItem>
            <MenubarCheckboxItem
              checked={showRulers}
              onCheckedChange={setShowRulers}
            >
              Показать линейки
            </MenubarCheckboxItem>
            <MenubarCheckboxItem
              checked={showStatusBar}
              onCheckedChange={setShowStatusBar}
            >
              Показать строку состояния
            </MenubarCheckboxItem>
            <MenubarSeparator />
            <MenubarLabel inset>Дополнительно</MenubarLabel>
            <MenubarCheckboxItem>
              <Eye className="mr-2 h-4 w-4" />
              Показать скрытые файлы
            </MenubarCheckboxItem>
            <MenubarCheckboxItem>
              <Tag className="mr-2 h-4 w-4" />
              Показать теги
            </MenubarCheckboxItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    );
  },
};

// С настройками
export const SettingsMenu: Story = {
  render: () => (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Настройки</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <User className="mr-2 h-4 w-4" />
            Профиль
          </MenubarItem>
          <MenubarItem>
            <Settings className="mr-2 h-4 w-4" />
            Общие настройки
          </MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>
              <Keyboard className="mr-2 h-4 w-4" />
              Горячие клавиши
            </MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Настроить сочетания</MenubarItem>
              <MenubarItem>Сбросить по умолчанию</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSub>
            <MenubarSubTrigger>
              <Globe className="mr-2 h-4 w-4" />
              Язык
            </MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Русский</MenubarItem>
              <MenubarItem>English</MenubarItem>
              <MenubarItem>Español</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>
            <Volume2 className="mr-2 h-4 w-4" />
            Звуки
          </MenubarItem>
          <MenubarItem>
            <Monitor className="mr-2 h-4 w-4" />
            Мониторы
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
};

// С действиями
export const ActionsMenu: Story = {
  render: () => (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Действия</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <Download className="mr-2 h-4 w-4" />
            Скачать
          </MenubarItem>
          <MenubarItem>
            <Upload className="mr-2 h-4 w-4" />
            Загрузить
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            <Share className="mr-2 h-4 w-4" />
            Поделиться
          </MenubarItem>
          <MenubarItem>
            <Bookmark className="mr-2 h-4 w-4" />
            Добавить в закладки
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            <Star className="mr-2 h-4 w-4" />
            Добавить в избранное
          </MenubarItem>
          <MenubarItem>
            <Heart className="mr-2 h-4 w-4" />
            Нравится
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem className="text-destructive">
            <Trash2 className="mr-2 h-4 w-4" />
            Удалить
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Инструменты</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <Search className="mr-2 h-4 w-4" />
            Поиск
            <MenubarShortcut>cmd + F</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            <Filter className="mr-2 h-4 w-4" />
            Фильтры
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            <RotateCcw className="mr-2 h-4 w-4" />
            Повернуть
          </MenubarItem>
          <MenubarItem>Обрезать</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
};

// С файлами
export const FileTypesMenu: Story = {
  render: () => (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Файлы</MenubarTrigger>
        <MenubarContent>
          <MenubarLabel inset>Создать новый</MenubarLabel>
          <MenubarItem>
            <FileText className="mr-2 h-4 w-4" />
            Документ
          </MenubarItem>
          <MenubarItem>
            <Image className="mr-2 h-4 w-4" />
            Изображение
          </MenubarItem>
          <MenubarItem>
            <Video className="mr-2 h-4 w-4" />
            Видео
          </MenubarItem>
          <MenubarItem>
            <Music className="mr-2 h-4 w-4" />
            Аудио
          </MenubarItem>
          <MenubarSeparator />
          <MenubarLabel inset>Открыть</MenubarLabel>
          <MenubarItem>
            <Folder className="mr-2 h-4 w-4" />
            Папку
          </MenubarItem>
          <MenubarItem>
            <Archive className="mr-2 h-4 w-4" />
            Архив
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            <Lock className="mr-2 h-4 w-4" />
            Зашифровать
          </MenubarItem>
          <MenubarItem>
            <Unlock className="mr-2 h-4 w-4" />
            Расшифровать
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
};

// Комплексный пример
export const ComplexExample: Story = {
  render: () => {
    const [view, setView] = React.useState('list');
    const [showGrid, setShowGrid] = React.useState(true);
    const [showRulers, setShowRulers] = React.useState(false);

    return (
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Файл</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              Новый проект
              <MenubarShortcut>cmd + N</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              = Открыть проект
              <MenubarShortcut>cmd + O</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarSub>
              <MenubarSubTrigger>Экспорт</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>PDF</MenubarItem>
                <MenubarItem>Word</MenubarItem>
                <MenubarItem>HTML</MenubarItem>
                <MenubarItem>Markdown</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSeparator />
            <MenubarItem>
              Выход
              <MenubarShortcut>cmd + Q</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Правка</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <Undo className="mr-2 h-4 w-4" />
              Отменить
              <MenubarShortcut>cmd + Z</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              <Redo className="mr-2 h-4 w-4" />
              Повторить
              <MenubarShortcut>cmd + ⇧Z</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              Вырезать
              <MenubarShortcut>cmd + X</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              <Copy className="mr-2 h-4 w-4" />
              Копировать
              <MenubarShortcut>cmd + C</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Вставить
              <MenubarShortcut>cmd + V</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Вид</MenubarTrigger>
          <MenubarContent>
            <MenubarLabel inset>Режим отображения</MenubarLabel>
            <MenubarRadioGroup value={view} onValueChange={setView}>
              <MenubarRadioItem value="grid">
                <Grid className="mr-2 h-4 w-4" />
                Сетка
              </MenubarRadioItem>
              <MenubarRadioItem value="list">
                <List className="mr-2 h-4 w-4" />
                Список
              </MenubarRadioItem>
              <MenubarRadioItem value="calendar">
                <Calendar className="mr-2 h-4 w-4" />
                Календарь
              </MenubarRadioItem>
            </MenubarRadioGroup>
            <MenubarSeparator />
            <MenubarLabel inset>Элементы интерфейса</MenubarLabel>
            <MenubarCheckboxItem
              checked={showGrid}
              onCheckedChange={setShowGrid}
            >
              <Grid className="mr-2 h-4 w-4" />
              Показать сетку
            </MenubarCheckboxItem>
            <MenubarCheckboxItem
              checked={showRulers}
              onCheckedChange={setShowRulers}
            >
              Показать линейки
            </MenubarCheckboxItem>
            <MenubarSeparator />
            <MenubarItem>
              <ZoomIn className="mr-2 h-4 w-4" />
              Увеличить
              <MenubarShortcut>cmd + +</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              <ZoomOut className="mr-2 h-4 w-4" />
              Уменьшить
              <MenubarShortcut>cmd + -</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Настройки</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <Settings className="mr-2 h-4 w-4" />
              Общие настройки
            </MenubarItem>
            <MenubarItem>
              <User className="mr-2 h-4 w-4" />
              Профиль пользователя
            </MenubarItem>
            <MenubarSeparator />
            <MenubarSub>
              <MenubarSubTrigger>
                <Globe className="mr-2 h-4 w-4" />
                Язык и регион
              </MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>Русский</MenubarItem>
                <MenubarItem>English</MenubarItem>
                <MenubarItem>Español</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSeparator />
            <MenubarItem>
              Справка
              <MenubarShortcut>cmd + ?</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>О программе</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    );
  },
};

// Интерактивный пример
export const InteractiveExample: Story = {
  render: () => {
    const [selectedView, setSelectedView] = React.useState('list');
    const [selectedTheme, setSelectedTheme] = React.useState('system');
    const [showGrid, setShowGrid] = React.useState(true);
    const [showRulers, setShowRulers] = React.useState(false);
    const [actionCount, setActionCount] = React.useState(0);

    const handleAction = (action: string) => {
      setActionCount(prev => prev + 1);
      console.log(`Выполнено действие: ${action}`);
    };

    return (
      <div className="space-y-4">
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>Файл</MenubarTrigger>
            <MenubarContent>
              <MenubarItem onSelect={() => handleAction('Новый файл')}>
                Новый файл
                <MenubarShortcut>cmd + N</MenubarShortcut>
              </MenubarItem>
              <MenubarItem onSelect={() => handleAction('Открыть файл')}>
                Открыть файл
                <MenubarShortcut>cmd + O</MenubarShortcut>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem onSelect={() => handleAction('Сохранить')}>
                <Save className="mr-2 h-4 w-4" />
                Сохранить
                <MenubarShortcut>cmd + S</MenubarShortcut>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Вид</MenubarTrigger>
            <MenubarContent>
              <MenubarLabel inset>Режим отображения</MenubarLabel>
              <MenubarRadioGroup
                value={selectedView}
                onValueChange={setSelectedView}
              >
                <MenubarRadioItem value="grid">
                  <Grid className="mr-2 h-4 w-4" />
                  Сетка
                </MenubarRadioItem>
                <MenubarRadioItem value="list">
                  <List className="mr-2 h-4 w-4" />
                  Список
                </MenubarRadioItem>
                <MenubarRadioItem value="calendar">
                  <Calendar className="mr-2 h-4 w-4" />
                  Календарь
                </MenubarRadioItem>
              </MenubarRadioGroup>
              <MenubarSeparator />
              <MenubarLabel inset>Тема</MenubarLabel>
              <MenubarRadioGroup
                value={selectedTheme}
                onValueChange={setSelectedTheme}
              >
                <MenubarRadioItem value="light">
                  <Sun className="mr-2 h-4 w-4" />
                  Светлая
                </MenubarRadioItem>
                <MenubarRadioItem value="dark">
                  <Moon className="mr-2 h-4 w-4" />
                  Темная
                </MenubarRadioItem>
                <MenubarRadioItem value="system">
                  <Monitor className="mr-2 h-4 w-4" />
                  Системная
                </MenubarRadioItem>
              </MenubarRadioGroup>
              <MenubarSeparator />
              <MenubarCheckboxItem
                checked={showGrid}
                onCheckedChange={setShowGrid}
              >
                <Grid className="mr-2 h-4 w-4" />
                Показать сетку
              </MenubarCheckboxItem>
              <MenubarCheckboxItem
                checked={showRulers}
                onCheckedChange={setShowRulers}
              >
                Показать линейки
              </MenubarCheckboxItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>

        <div className="text-sm text-muted-foreground space-y-2">
          <p>
            Выбранный режим отображения: <strong>{selectedView}</strong>
          </p>
          <p>
            Выбранная тема: <strong>{selectedTheme}</strong>
          </p>
          <p>
            Показать сетку: <strong>{showGrid ? 'Да' : 'Нет'}</strong>
          </p>
          <p>
            Показать линейки: <strong>{showRulers ? 'Да' : 'Нет'}</strong>
          </p>
          <p>
            Количество выполненных действий: <strong>{actionCount}</strong>
          </p>
        </div>
      </div>
    );
  },
};
