import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import * as React from 'react';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  FileText,
  Folder,
  Mail,
  MessageSquare,
  Settings,
  User,
  Users,
  Share,
  Plus,
  Grid,
  List,
  Code,
  Database,
} from 'lucide-react';

const meta: Meta<typeof ResizablePanelGroup> = {
  title: 'UI/Resizable',
  component: ResizablePanelGroup,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Направление панелей',
    },
    autoSaveId: {
      control: 'text',
      description: 'ID для автосохранения размеров',
    },
    onLayout: {
      action: 'layoutChanged',
      description: 'Callback при изменении layout',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Базовый пример
export const Default: Story = {
  render: args => (
    <div className="h-[400px] w-full">
      <ResizablePanelGroup
        {...args}
        className="min-h-[200px] rounded-lg border"
      >
        <ResizablePanel defaultSize={50}>
          <div className="flex h-full items-center justify-center p-6">
            <div className="text-center">
              <FileText className="mx-auto h-8 w-8 text-muted-foreground mb-2" />
              <h3 className="font-semibold">Панель 1</h3>
              <p className="text-sm text-muted-foreground">50% ширины</p>
            </div>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={50}>
          <div className="flex h-full items-center justify-center p-6">
            <div className="text-center">
              <Folder className="mx-auto h-8 w-8 text-muted-foreground mb-2" />
              <h3 className="font-semibold">Панель 2</h3>
              <p className="text-sm text-muted-foreground">50% ширины</p>
            </div>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  ),
  args: {
    direction: 'horizontal',
  },
};

// Вертикальные панели
export const Vertical: Story = {
  render: args => (
    <div className="h-[400px] w-full">
      <ResizablePanelGroup
        {...args}
        className="min-h-[200px] rounded-lg border"
      >
        <ResizablePanel defaultSize={60}>
          <div className="flex h-full items-center justify-center p-6">
            <div className="text-center">
              <Mail className="mx-auto h-8 w-8 text-muted-foreground mb-2" />
              <h3 className="font-semibold">Верхняя панель</h3>
              <p className="text-sm text-muted-foreground">60% высоты</p>
            </div>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={40}>
          <div className="flex h-full items-center justify-center p-6">
            <div className="text-center">
              <MessageSquare className="mx-auto h-8 w-8 text-muted-foreground mb-2" />
              <h3 className="font-semibold">Нижняя панель</h3>
              <p className="text-sm text-muted-foreground">40% высоты</p>
            </div>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  ),
  args: {
    direction: 'vertical',
  },
};

// С ручками
export const WithHandles: Story = {
  render: args => (
    <div className="h-[400px] w-full">
      <ResizablePanelGroup
        {...args}
        className="min-h-[200px] rounded-lg border"
      >
        <ResizablePanel defaultSize={33}>
          <div className="flex h-full items-center justify-center p-6">
            <div className="text-center">
              <User className="mx-auto h-8 w-8 text-muted-foreground mb-2" />
              <h3 className="font-semibold">Пользователи</h3>
              <p className="text-sm text-muted-foreground">33% ширины</p>
            </div>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={34}>
          <div className="flex h-full items-center justify-center p-6">
            <div className="text-center">
              <Users className="mx-auto h-8 w-8 text-muted-foreground mb-2" />
              <h3 className="font-semibold">Группы</h3>
              <p className="text-sm text-muted-foreground">34% ширины</p>
            </div>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={33}>
          <div className="flex h-full items-center justify-center p-6">
            <div className="text-center">
              <Settings className="mx-auto h-8 w-8 text-muted-foreground mb-2" />
              <h3 className="font-semibold">Настройки</h3>
              <p className="text-sm text-muted-foreground">33% ширины</p>
            </div>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  ),
  args: {
    direction: 'horizontal',
  },
};

// Без ручек
export const WithoutHandles: Story = {
  render: args => (
    <div className="h-[400px] w-full">
      <ResizablePanelGroup
        {...args}
        className="min-h-[200px] rounded-lg border"
      >
        <ResizablePanel defaultSize={50}>
          <div className="flex h-full items-center justify-center p-6">
            <div className="text-center">
              <Code className="mx-auto h-8 w-8 text-muted-foreground mb-2" />
              <h3 className="font-semibold">Код</h3>
              <p className="text-sm text-muted-foreground">
                Перетащите границу
              </p>
            </div>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={50}>
          <div className="flex h-full items-center justify-center p-6">
            <div className="text-center">
              <Database className="mx-auto h-8 w-8 text-muted-foreground mb-2" />
              <h3 className="font-semibold">Данные</h3>
              <p className="text-sm text-muted-foreground">
                Перетащите границу
              </p>
            </div>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  ),
  args: {
    direction: 'horizontal',
  },
};

// Файловый менеджер
export const FileManager: Story = {
  render: args => (
    <div className="h-[500px] w-full">
      <ResizablePanelGroup
        {...args}
        className="min-h-[200px] rounded-lg border"
      >
        <ResizablePanel defaultSize={25} minSize={15}>
          <div className="h-full p-4">
            <div className="space-y-2">
              <h3 className="font-semibold text-sm">Папки</h3>
              <div className="space-y-1">
                {[
                  'Документы',
                  'Изображения',
                  'Музыка',
                  'Видео',
                  'Загрузки',
                ].map(folder => (
                  <div
                    key={folder}
                    className="flex items-center space-x-2 p-2 rounded hover:bg-muted cursor-pointer"
                  >
                    <Folder className="h-4 w-4" />
                    <span className="text-sm">{folder}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={75}>
          <div className="h-full p-4">
            <div className="space-y-2">
              <h3 className="font-semibold text-sm">Файлы</h3>
              <div className="space-y-1">
                {[
                  { name: 'document.pdf', type: 'PDF', size: '2.4 MB' },
                  { name: 'image.jpg', type: 'Image', size: '1.2 MB' },
                  { name: 'video.mp4', type: 'Video', size: '15.8 MB' },
                  { name: 'script.js', type: 'JavaScript', size: '45 KB' },
                ].map(file => (
                  <div
                    key={file.name}
                    className="flex items-center justify-between p-2 rounded hover:bg-muted"
                  >
                    <div className="flex items-center space-x-2">
                      <FileText className="h-4 w-4" />
                      <span className="text-sm">{file.name}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="secondary" className="text-xs">
                        {file.type}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {file.size}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  ),
  args: {
    direction: 'horizontal',
  },
};

// Чат интерфейс
export const ChatInterface: Story = {
  render: args => (
    <div className="h-[500px] w-full">
      <ResizablePanelGroup
        {...args}
        className="min-h-[200px] rounded-lg border"
      >
        <ResizablePanel defaultSize={30} minSize={20}>
          <div className="h-full p-4">
            <div className="space-y-4">
              <h3 className="font-semibold">Контакты</h3>
              <div className="space-y-2">
                {[
                  { name: 'Иван Петров', status: 'online', avatar: 'ИП' },
                  { name: 'Мария Сидорова', status: 'away', avatar: 'МС' },
                  { name: 'Алексей Козлов', status: 'offline', avatar: 'АК' },
                  { name: 'Елена Волкова', status: 'online', avatar: 'ЕВ' },
                ].map(contact => (
                  <div
                    key={contact.name}
                    className="flex items-center space-x-3 p-2 rounded hover:bg-muted cursor-pointer"
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="text-xs">
                        {contact.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{contact.name}</p>
                      <p className="text-xs text-muted-foreground capitalize">
                        {contact.status}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={70}>
          <div className="h-full flex flex-col">
            <div className="p-4 border-b">
              <h3 className="font-semibold">Чат с Иван Петров</h3>
            </div>
            <div className="flex-1 p-4 overflow-auto">
              <div className="space-y-4">
                {[
                  {
                    message: 'Привет! Как дела?',
                    sender: 'them',
                    time: '14:30',
                  },
                  {
                    message: 'Привет! Все хорошо, спасибо!',
                    sender: 'me',
                    time: '14:31',
                  },
                  {
                    message: 'Отлично! Что нового?',
                    sender: 'them',
                    time: '14:32',
                  },
                ].map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[70%] p-3 rounded-lg ${
                        msg.sender === 'me'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted'
                      }`}
                    >
                      <p className="text-sm">{msg.message}</p>
                      <p className="text-xs opacity-70 mt-1">{msg.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-4 border-t">
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Введите сообщение..."
                  className="flex-1 px-3 py-2 border rounded-md"
                />
                <Button size="sm">Отправить</Button>
              </div>
            </div>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  ),
  args: {
    direction: 'horizontal',
  },
};

// Код редактор
export const CodeEditor: Story = {
  render: args => (
    <div className="h-[500px] w-full">
      <ResizablePanelGroup
        {...args}
        className="min-h-[200px] rounded-lg border"
      >
        <ResizablePanel defaultSize={20} minSize={15}>
          <div className="h-full p-4">
            <div className="space-y-4">
              <h3 className="font-semibold text-sm">Проект</h3>
              <div className="space-y-1">
                {[
                  {
                    name: 'src',
                    type: 'folder',
                    children: ['components', 'utils', 'pages'],
                  },
                  {
                    name: 'public',
                    type: 'folder',
                    children: ['images', 'fonts'],
                  },
                  { name: 'package.json', type: 'file' },
                  { name: 'README.md', type: 'file' },
                ].map(item => (
                  <div key={item.name} className="space-y-1">
                    <div className="flex items-center space-x-2 p-1 rounded hover:bg-muted cursor-pointer">
                      {item.type === 'folder' ? (
                        <Folder className="h-4 w-4" />
                      ) : (
                        <FileText className="h-4 w-4" />
                      )}
                      <span className="text-sm">{item.name}</span>
                    </div>
                    {item.children && (
                      <div className="ml-4 space-y-1">
                        {item.children.map(child => (
                          <div
                            key={child}
                            className="flex items-center space-x-2 p-1 rounded hover:bg-muted cursor-pointer"
                          >
                            <FileText className="h-4 w-4" />
                            <span className="text-sm">{child}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={60}>
          <div className="h-full flex flex-col">
            <div className="p-2 border-b bg-muted/50">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-sm ml-2">main.tsx</span>
              </div>
            </div>
            <div className="flex-1 p-4 font-mono text-sm">
              <pre className="text-muted-foreground">
                {`import React from 'react'

function App() {
  return (
    <div className="app">
      <h1>Hello World</h1>
      <p>Welcome to my app!</p>
    </div>
  )
}

export default App`}
              </pre>
            </div>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={20} minSize={15}>
          <div className="h-full p-4">
            <div className="space-y-4">
              <h3 className="font-semibold text-sm">Проблемы</h3>
              <div className="space-y-2">
                <div className="p-2 rounded bg-red-50 border border-red-200">
                  <p className="text-xs text-red-700">
                    Ошибка: Неизвестная переменная
                  </p>
                  <p className="text-xs text-red-600">main.tsx:5</p>
                </div>
                <div className="p-2 rounded bg-yellow-50 border border-yellow-200">
                  <p className="text-xs text-yellow-700">
                    Предупреждение: Неиспользуемый импорт
                  </p>
                  <p className="text-xs text-yellow-600">main.tsx:1</p>
                </div>
              </div>
            </div>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  ),
  args: {
    direction: 'horizontal',
  },
};

// Дашборд
export const Dashboard: Story = {
  render: args => (
    <div className="h-[600px] w-full">
      <ResizablePanelGroup
        {...args}
        className="min-h-[200px] rounded-lg border"
      >
        <ResizablePanel defaultSize={70}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel defaultSize={60}>
              <div className="h-full p-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Основная панель</CardTitle>
                    <CardDescription>60% высоты, 70% ширины</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 border rounded">
                        <h4 className="font-medium">Статистика</h4>
                        <p className="text-2xl font-bold">1,234</p>
                        <p className="text-sm text-muted-foreground">
                          +12% с прошлого месяца
                        </p>
                      </div>
                      <div className="p-4 border rounded">
                        <h4 className="font-medium">Активность</h4>
                        <p className="text-2xl font-bold">89%</p>
                        <p className="text-sm text-muted-foreground">
                          Высокая активность
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={40}>
              <div className="h-full p-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Нижняя панель</CardTitle>
                    <CardDescription>40% высоты, 70% ширины</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Задача 1</span>
                        <Badge variant="secondary">В процессе</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Задача 2</span>
                        <Badge variant="default">Завершено</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Задача 3</span>
                        <Badge variant="outline">Ожидает</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={30}>
          <div className="h-full p-4">
            <Card>
              <CardHeader>
                <CardTitle>Боковая панель</CardTitle>
                <CardDescription>30% ширины</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Быстрые действия</h4>
                    <div className="space-y-1">
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full justify-start"
                      >
                        <Plus className="h-4 w-4 mr-2" />
                        Создать
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full justify-start"
                      >
                        Загрузить
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full justify-start"
                      >
                        <Share className="h-4 w-4 mr-2" />
                        Поделиться
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Недавние</h4>
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2 p-2 rounded hover:bg-muted cursor-pointer">
                        <FileText className="h-4 w-4" />
                        <span className="text-sm">document.pdf</span>
                      </div>
                      <div className="flex items-center space-x-2 p-2 rounded hover:bg-muted cursor-pointer">
                        <FileText className="h-4 w-4" />
                        <span className="text-sm">report.docx</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  ),
  args: {
    direction: 'horizontal',
  },
};

// Интерактивный пример
export const InteractiveExample: Story = {
  render: args => {
    const [layout, setLayout] = React.useState([50, 50]);

    return (
      <div className="space-y-4">
        <div className="text-center">
          <h3 className="text-lg font-semibold">Интерактивные панели</h3>
          <p className="text-sm text-muted-foreground">
            Перетащите границы для изменения размеров панелей
          </p>
        </div>

        <div className="h-[400px] w-full">
          <ResizablePanelGroup
            {...args}
            className="min-h-[200px] rounded-lg border"
            onLayout={sizes => setLayout(sizes)}
          >
            <ResizablePanel defaultSize={50}>
              <div className="flex h-full items-center justify-center p-6">
                <div className="text-center">
                  <Grid className="mx-auto h-8 w-8 text-muted-foreground mb-2" />
                  <h3 className="font-semibold">Панель 1</h3>
                  <p className="text-sm text-muted-foreground">
                    Размер: {Math.round(layout[0] || 50)}%
                  </p>
                </div>
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={50}>
              <div className="flex h-full items-center justify-center p-6">
                <div className="text-center">
                  <List className="mx-auto h-8 w-8 text-muted-foreground mb-2" />
                  <h3 className="font-semibold">Панель 2</h3>
                  <p className="text-sm text-muted-foreground">
                    Размер: {Math.round(layout[1] || 50)}%
                  </p>
                </div>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>

        <div className="text-center text-sm text-muted-foreground">
          Текущий layout: [{layout.map(size => Math.round(size)).join(', ')}]
        </div>
      </div>
    );
  },
  args: {
    direction: 'horizontal',
  },
};
