import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { User, Settings, Bell, BarChart3, Mail } from 'lucide-react';

const meta: Meta<typeof Tabs> = {
  title: 'UI/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    defaultValue: {
      control: 'text',
      description: 'Значение по умолчанию для активной вкладки',
    },
    value: {
      control: 'text',
      description: 'Контролируемое значение активной вкладки',
    },
    onValueChange: {
      action: 'valueChanged',
      description: 'Callback при изменении значения',
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Ориентация вкладок',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Базовый пример
export const Default: Story = {
  render: args => (
    <Tabs {...args} className="w-[400px]">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="account">Аккаунт</TabsTrigger>
        <TabsTrigger value="password">Пароль</TabsTrigger>
        <TabsTrigger value="settings">Настройки</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Аккаунт</CardTitle>
            <CardDescription>
              Управляйте настройками вашего аккаунта и настройте предпочтения.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Имя</Label>
              <Input id="name" defaultValue="Иван Иванов" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Имя пользователя</Label>
              <Input id="username" defaultValue="@ivan" />
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Пароль</CardTitle>
            <CardDescription>
              Измените свой пароль здесь. После сохранения вы будете
              разлогинены.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Текущий пароль</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">Новый пароль</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="settings">
        <Card>
          <CardHeader>
            <CardTitle>Настройки</CardTitle>
            <CardDescription>
              Управляйте настройками приложения и уведомлениями.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="notifications" defaultChecked />
              <Label htmlFor="notifications">Уведомления</Label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="marketing" />
              <Label htmlFor="marketing">Маркетинговые уведомления</Label>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  ),
  args: {
    defaultValue: 'account',
  },
};

// С иконками
export const WithIcons: Story = {
  render: args => (
    <Tabs {...args} className="w-[400px]">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="profile">
          <User className="h-4 w-4 mr-2" />
          Профиль
        </TabsTrigger>
        <TabsTrigger value="settings">
          <Settings className="h-4 w-4 mr-2" />
          Настройки
        </TabsTrigger>
        <TabsTrigger value="notifications">
          <Bell className="h-4 w-4 mr-2" />
          Уведомления
        </TabsTrigger>
        <TabsTrigger value="reports">
          <BarChart3 className="h-4 w-4 mr-2" />
          Отчеты
        </TabsTrigger>
      </TabsList>
      <TabsContent value="profile">
        <Card>
          <CardHeader>
            <CardTitle>Профиль пользователя</CardTitle>
            <CardDescription>Информация о вашем профиле</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                  <User className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-medium">Иван Иванов</h3>
                  <p className="text-sm text-muted-foreground">
                    ivan@example.com
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="settings">
        <Card>
          <CardHeader>
            <CardTitle>Настройки приложения</CardTitle>
            <CardDescription>Управляйте настройками</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Настройки приложения</p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="notifications">
        <Card>
          <CardHeader>
            <CardTitle>Уведомления</CardTitle>
            <CardDescription>Управляйте уведомлениями</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Настройки уведомлений</p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="reports">
        <Card>
          <CardHeader>
            <CardTitle>Отчеты</CardTitle>
            <CardDescription>Просмотр отчетов</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Аналитика и отчеты</p>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  ),
  args: {
    defaultValue: 'profile',
  },
};

// Вертикальные вкладки
export const Vertical: Story = {
  render: args => (
    <Tabs {...args} orientation="vertical" className="w-[600px]">
      <TabsList className="grid w-40 grid-rows-4">
        <TabsTrigger value="overview">Обзор</TabsTrigger>
        <TabsTrigger value="analytics">Аналитика</TabsTrigger>
        <TabsTrigger value="reports">Отчеты</TabsTrigger>
        <TabsTrigger value="notifications">Уведомления</TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="ml-6">
        <Card>
          <CardHeader>
            <CardTitle>Обзор проекта</CardTitle>
            <CardDescription>Общая информация о проекте</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <p className="text-sm font-medium">Всего пользователей</p>
                <p className="text-2xl font-bold">1,234</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">Активные сессии</p>
                <p className="text-2xl font-bold">567</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="analytics" className="ml-6">
        <Card>
          <CardHeader>
            <CardTitle>Аналитика</CardTitle>
            <CardDescription>Детальная аналитика</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Графики и диаграммы</p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="reports" className="ml-6">
        <Card>
          <CardHeader>
            <CardTitle>Отчеты</CardTitle>
            <CardDescription>Генерируемые отчеты</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Список отчетов</p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="notifications" className="ml-6">
        <Card>
          <CardHeader>
            <CardTitle>Уведомления</CardTitle>
            <CardDescription>Настройки уведомлений</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Управление уведомлениями</p>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  ),
  args: {
    defaultValue: 'overview',
  },
};

// С бейджами
export const WithBadges: Story = {
  render: args => (
    <Tabs {...args} className="w-[500px]">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="inbox" className="flex items-center space-x-2">
          <span>Входящие</span>
          <Badge variant="secondary">12</Badge>
        </TabsTrigger>
        <TabsTrigger value="sent" className="flex items-center space-x-2">
          <span>Отправленные</span>
          <Badge variant="secondary">5</Badge>
        </TabsTrigger>
        <TabsTrigger value="drafts" className="flex items-center space-x-2">
          <span>Черновики</span>
          <Badge variant="secondary">3</Badge>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="inbox">
        <Card>
          <CardHeader>
            <CardTitle>Входящие сообщения</CardTitle>
            <CardDescription>12 непрочитанных сообщений</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {[1, 2, 3].map(i => (
                <div
                  key={i}
                  className="flex items-center space-x-3 p-2 border rounded"
                >
                  <Mail className="h-4 w-4" />
                  <div className="flex-1">
                    <p className="font-medium">Сообщение {i}</p>
                    <p className="text-sm text-muted-foreground">
                      Краткое описание...
                    </p>
                  </div>
                  <Badge variant="outline">Новое</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="sent">
        <Card>
          <CardHeader>
            <CardTitle>Отправленные сообщения</CardTitle>
            <CardDescription>5 отправленных сообщений</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Список отправленных сообщений</p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="drafts">
        <Card>
          <CardHeader>
            <CardTitle>Черновики</CardTitle>
            <CardDescription>3 сохраненных черновика</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Список черновиков</p>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  ),
  args: {
    defaultValue: 'inbox',
  },
};

// Интерактивный пример
export const InteractiveExample: Story = {
  render: args => {
    const [activeTab, setActiveTab] = React.useState('profile');

    return (
      <div className="space-y-4">
        <Tabs
          {...args}
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-[500px]"
        >
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="profile">Профиль</TabsTrigger>
            <TabsTrigger value="security">Безопасность</TabsTrigger>
            <TabsTrigger value="preferences">Предпочтения</TabsTrigger>
          </TabsList>
          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>Профиль пользователя</CardTitle>
                <CardDescription>
                  Управляйте информацией профиля
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Полное имя</Label>
                  <Input id="name" defaultValue="Иван Иванов" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    defaultValue="ivan@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input id="phone" defaultValue="+7 (999) 123-45-67" />
                </div>
                <Button>Сохранить изменения</Button>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="security">
            <Card>
              <CardHeader>
                <CardTitle>Безопасность</CardTitle>
                <CardDescription>
                  Настройки безопасности аккаунта
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="current-password">Текущий пароль</Label>
                  <Input id="current-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new-password">Новый пароль</Label>
                  <Input id="new-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Подтвердите пароль</Label>
                  <Input id="confirm-password" type="password" />
                </div>
                <Button>Изменить пароль</Button>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="preferences">
            <Card>
              <CardHeader>
                <CardTitle>Предпочтения</CardTitle>
                <CardDescription>
                  Настройки интерфейса и уведомлений
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="dark-mode" />
                  <Label htmlFor="dark-mode">Темная тема</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="notifications" defaultChecked />
                  <Label htmlFor="notifications">Email уведомления</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="marketing" />
                  <Label htmlFor="marketing">Маркетинговые уведомления</Label>
                </div>
                <Button>Сохранить предпочтения</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="text-sm text-muted-foreground">
          Активная вкладка: <span className="font-medium">{activeTab}</span>
        </div>
      </div>
    );
  },
  args: {
    defaultValue: 'profile',
  },
};
