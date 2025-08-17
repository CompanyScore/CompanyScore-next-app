import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Popover, PopoverContent, PopoverTrigger } from './popover';
import { Button } from './button';
import { Input } from './input';
import { Label } from './label';
import { Calendar } from './calendar';
import { Badge } from './badge';

const meta: Meta<typeof Popover> = {
  title: 'UI/Popover',
  component: Popover,
  parameters: {
    docs: {
      description: {
        component: 'Компонент всплывающего окна с различным содержимым.',
      },
      sourceState: 'hidden',
      controls: { sort: 'requiredFirst' },
      expanded: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Popover>;

// Базовый пример
export const Default: Story = {
  render: args => (
    <Popover {...args}>
      <PopoverTrigger asChild>
        <Button variant="outline">Открыть</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Настройки</h4>
            <p className="text-sm text-muted-foreground">
              Настройте параметры вашего профиля.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width">Ширина</Label>
              <Input
                id="width"
                defaultValue="100%"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxWidth">Макс. ширина</Label>
              <Input
                id="maxWidth"
                defaultValue="300px"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="height">Высота</Label>
              <Input
                id="height"
                defaultValue="25px"
                className="col-span-2 h-8"
              />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

// С календарем
export const WithCalendar: Story = {
  render: args => (
    <Popover {...args}>
      <PopoverTrigger asChild>
        <Button variant="outline">Выбрать дату</Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar mode="single" className="rounded-md border" />
      </PopoverContent>
    </Popover>
  ),
};

// С формой
export const WithForm: Story = {
  render: args => (
    <Popover {...args}>
      <PopoverTrigger asChild>
        <Button variant="outline">Добавить пользователя</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Новый пользователь</h4>
            <p className="text-sm text-muted-foreground">
              Заполните информацию о пользователе.
            </p>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="name">Имя</Label>
            <Input id="name" placeholder="Введите имя" />
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="email@example.com" />
            <Label htmlFor="phone">Телефон</Label>
            <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" />
          </div>
          <div className="flex justify-end space-x-2">
            <Button variant="outline" size="sm">
              Отмена
            </Button>
            <Button size="sm">Добавить</Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

// С уведомлениями
export const WithNotifications: Story = {
  render: args => (
    <Popover {...args}>
      <PopoverTrigger asChild>
        <Button variant="outline" className="relative">
          Уведомления
          <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 text-xs">
            3
          </Badge>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Уведомления</h4>
            <p className="text-sm text-muted-foreground">
              У вас есть 3 новых уведомления.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-[var(--info-600)] rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">Новое сообщение</p>
                <p className="text-xs text-muted-foreground">
                  От Ивана Петрова
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-[var(--success-600)] rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">Задача выполнена</p>
                <p className="text-xs text-muted-foreground">
                  Проект &quot;Веб-сайт&quot;
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-[var(--warning-500)] rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">Напоминание</p>
                <p className="text-xs text-muted-foreground">Встреча в 15:00</p>
              </div>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

// С профилем пользователя
export const WithUserProfile: Story = {
  render: args => (
    <Popover {...args}>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-8 h-8 rounded-full">
          ИП
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-lg font-medium">ИП</span>
            </div>
            <div>
              <h4 className="font-medium leading-none">Иван Петров</h4>
              <p className="text-sm text-muted-foreground">ivan@example.com</p>
            </div>
          </div>
          <div className="grid gap-2">
            <Button variant="outline" size="sm" className="justify-start">
              Профиль
            </Button>
            <Button variant="outline" size="sm" className="justify-start">
              Настройки
            </Button>
            <Button variant="outline" size="sm" className="justify-start">
              Помощь
            </Button>
            <div className="border-t pt-2">
              <Button
                variant="outline"
                size="sm"
                className="justify-start text-red-600 hover:text-red-700"
              >
                Выйти
              </Button>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

// С поиском
export const WithSearch: Story = {
  render: args => (
    <Popover {...args}>
      <PopoverTrigger asChild>
        <Button variant="outline">Поиск</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Поиск</h4>
            <p className="text-sm text-muted-foreground">
              Найдите нужную информацию.
            </p>
          </div>
          <div className="grid gap-2">
            <Input placeholder="Введите поисковый запрос..." />
            <div className="text-xs text-muted-foreground">
              Популярные запросы:
            </div>
            <div className="space-y-1">
              <div className="text-sm cursor-pointer hover:bg-gray-100 p-1 rounded">
                Как создать проект?
              </div>
              <div className="text-sm cursor-pointer hover:bg-gray-100 p-1 rounded">
                Настройки профиля
              </div>
              <div className="text-sm cursor-pointer hover:bg-gray-100 p-1 rounded">
                API документация
              </div>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

// С действиями
export const WithActions: Story = {
  render: args => (
    <Popover {...args}>
      <PopoverTrigger asChild>
        <Button variant="outline">Действия</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Доступные действия</h4>
            <p className="text-sm text-muted-foreground">
              Выберите действие для выполнения.
            </p>
          </div>
          <div className="grid gap-2">
            <Button size="sm" className="justify-start">
              Создать новый проект
            </Button>
            <Button variant="outline" size="sm" className="justify-start">
              Импортировать данные
            </Button>
            <Button variant="outline" size="sm" className="justify-start">
              Экспортировать отчет
            </Button>
            <Button variant="outline" size="sm" className="justify-start">
              Настройки
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

// С информацией
export const WithInfo: Story = {
  render: args => (
    <Popover {...args}>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm">
          ℹ️ Информация
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">О проекте</h4>
            <p className="text-sm text-muted-foreground">
              Информация о текущем проекте.
            </p>
          </div>
          <div className="grid gap-2 text-sm">
            <div className="flex justify-between">
              <span>Версия:</span>
              <span className="font-medium">1.2.3</span>
            </div>
            <div className="flex justify-between">
              <span>Статус:</span>
              <Badge variant="success">Активен</Badge>
            </div>
            <div className="flex justify-between">
              <span>Создан:</span>
              <span className="font-medium">15.01.2024</span>
            </div>
            <div className="flex justify-between">
              <span>Обновлен:</span>
              <span className="font-medium">20.03.2024</span>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
};
