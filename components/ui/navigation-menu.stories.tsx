import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from './navigation-menu';
import { Button } from './button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './card';
import { Badge } from './badge';
import {
  FileText,
  ExternalLink,
  Zap,
  Shield,
  Globe,
  Code,
  Palette,
  Cloud,
  Smartphone,
  Server,
  Lock,
  Users,
  BarChart3,
  Video,
  TrendingUp,
  Check,
} from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { MessageCircle, Github } from 'lucide-react';

const meta: Meta<typeof NavigationMenu> = {
  title: 'UI/NavigationMenu',
  component: NavigationMenu,
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
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Продукты</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 w-[400px]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      shadcn/ui
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Красиво спроектированные компоненты, построенные с
                      использованием Radix UI и Tailwind CSS.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Введение">
                Переиспользуемые компоненты, построенные с использованием Radix
                UI и Tailwind CSS.
              </ListItem>
              <ListItem href="/docs/installation" title="Установка">
                Как установить зависимости и настроить ваш проект.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Типографика">
                Стили для заголовков, абзацев, списков...и многое другое.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Компоненты</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[500px] gap-3 p-4 md:grid-cols-2">
              <ListItem href="/docs/components/accordion" title="Аккордеон">
                Вертикально складываемые интерактивные панели для отображения
                контента.
              </ListItem>
              <ListItem
                href="/docs/components/alert-dialog"
                title="Диалог предупреждения"
              >
                Модальное диалоговое окно, которое прерывает работу пользователя
                с критическим контентом.
              </ListItem>
              <ListItem href="/docs/components/avatar" title="Аватар">
                Изображение с поддержкой fallback для пользователей.
              </ListItem>
              <ListItem href="/docs/components/badge" title="Бейдж">
                Маленький счетчик и аннотация.
              </ListItem>
              <ListItem href="/docs/components/button" title="Кнопка">
                Интерактивный элемент для выполнения действий.
              </ListItem>
              <ListItem href="/docs/components/calendar" title="Календарь">
                Датапикер с поддержкой диапазонов и отключенных дат.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Документация
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            О нас
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
};

// С сервисами
export const ServicesMenu: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Услуги</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 w-[600px] md:grid-cols-2">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/services"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Наши услуги
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Полный спектр решений для вашего бизнеса от веб-разработки
                      до консалтинга.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/services/web-development" title="Веб-разработка">
                <div className="flex items-center space-x-2">
                  <Code className="h-4 w-4" />
                  <span>Создание современных веб-приложений</span>
                </div>
              </ListItem>
              <ListItem
                href="/services/mobile-development"
                title="Мобильная разработка"
              >
                <div className="flex items-center space-x-2">
                  <Smartphone className="h-4 w-4" />
                  <span>iOS и Android приложения</span>
                </div>
              </ListItem>
              <ListItem href="/services/design" title="Дизайн">
                <div className="flex items-center space-x-2">
                  <Palette className="h-4 w-4" />
                  <span>UI/UX дизайн и брендинг</span>
                </div>
              </ListItem>
              <ListItem href="/services/consulting" title="Консалтинг">
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4" />
                  <span>Технический консалтинг</span>
                </div>
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Решения</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4">
              <ListItem href="/solutions/ecommerce" title="E-commerce">
                Полнофункциональные интернет-магазины с интеграцией платежей.
              </ListItem>
              <ListItem href="/solutions/crm" title="CRM системы">
                Управление взаимоотношениями с клиентами.
              </ListItem>
              <ListItem href="/solutions/analytics" title="Аналитика">
                Системы аналитики и отчетности для бизнеса.
              </ListItem>
              <ListItem href="/solutions/automation" title="Автоматизация">
                Автоматизация бизнес-процессов и рабочих потоков.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Портфолио
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Контакты
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
};

// С карточками
export const CardsMenu: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Решения</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid gap-3 p-6 w-[800px] md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Zap className="h-5 w-5" />
                    <span>Быстрый старт</span>
                  </CardTitle>
                  <CardDescription>
                    Готовые решения для быстрого запуска проекта
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Готовые шаблоны</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Быстрая настройка</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Техническая поддержка</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="h-5 w-5" />
                    <span>Безопасность</span>
                  </CardTitle>
                  <CardDescription>
                    Защищенные решения для корпоративного использования
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center space-x-2">
                      <Lock className="h-4 w-4 text-blue-500" />
                      <span>Шифрование данных</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Lock className="h-4 w-4 text-blue-500" />
                      <span>Двухфакторная аутентификация</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Lock className="h-4 w-4 text-blue-500" />
                      <span>Аудит безопасности</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5" />
                    <span>Масштабирование</span>
                  </CardTitle>
                  <CardDescription>
                    Решения для растущего бизнеса
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center space-x-2">
                      <Cloud className="h-4 w-4 text-purple-500" />
                      <span>Облачная инфраструктура</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Cloud className="h-4 w-4 text-purple-500" />
                      <span>Автоматическое масштабирование</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Cloud className="h-4 w-4 text-purple-500" />
                      <span>Мониторинг производительности</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Продукты</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4">
              <ListItem href="/products/platform" title="Платформа">
                <div className="flex items-center justify-between">
                  <span>Единая платформа для всех задач</span>
                  <Badge variant="secondary">Новое</Badge>
                </div>
              </ListItem>
              <ListItem href="/products/api" title="API">
                <div className="flex items-center justify-between">
                  <span>REST API для интеграций</span>
                  <Badge variant="outline">Популярное</Badge>
                </div>
              </ListItem>
              <ListItem href="/products/sdk" title="SDK">
                <div className="flex items-center justify-between">
                  <span>SDK для разработчиков</span>
                  <Badge variant="outline">Стабильное</Badge>
                </div>
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Цены
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
};

// С индикатором
export const WithIndicator: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Продукты</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 w-[400px]">
              <ListItem href="/products/featured" title="Рекомендуемые">
                Лучшие продукты для вашего бизнеса
              </ListItem>
              <ListItem href="/products/new" title="Новые">
                Свежие поступления и обновления
              </ListItem>
              <ListItem href="/products/popular" title="Популярные">
                Самые востребованные решения
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Поддержка</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4">
              <ListItem href="/support/docs" title="Документация">
                Подробные руководства и API документация
              </ListItem>
              <ListItem href="/support/community" title="Сообщество">
                Форум разработчиков и обсуждения
              </ListItem>
              <ListItem href="/support/contact" title="Связаться">
                Свяжитесь с нашей командой поддержки
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            О компании
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuIndicator />
    </NavigationMenu>
  ),
};

// С кнопками
export const WithButtons: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Ресурсы</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid gap-3 p-6 w-[500px] md:grid-cols-2">
              <div className="space-y-3">
                <h3 className="text-sm font-medium">Документация</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="/docs/getting-started"
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      Начало работы
                    </a>
                  </li>
                  <li>
                    <a
                      href="/docs/components"
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      Компоненты
                    </a>
                  </li>
                  <li>
                    <a
                      href="/docs/examples"
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      Примеры
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-sm font-medium">Сообщество</h3>
                <div className="flex flex-col space-y-2">
                  <Button variant="outline" size="sm" className="justify-start">
                    <Globe className="mr-2 h-4 w-4" />
                    Веб-сайт
                  </Button>
                  <Button variant="outline" size="sm" className="justify-start">
                    <Users className="mr-2 h-4 w-4" />
                    Discord
                  </Button>
                  <Button variant="outline" size="sm" className="justify-start">
                    <Code className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                </div>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Блог
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Button variant="default" size="sm">
            Начать бесплатно
          </Button>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
};

// Комплексный пример
export const ComplexExample: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Продукты</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid gap-3 p-6 w-[800px] md:grid-cols-2">
              <div className="space-y-3">
                <h3 className="text-sm font-medium">Основные продукты</h3>
                <ul className="grid gap-2">
                  <ListItem href="/products/core" title="Core Platform">
                    <div className="flex items-center space-x-2">
                      <Server className="h-4 w-4" />
                      <span>Основная платформа</span>
                    </div>
                  </ListItem>
                  <ListItem href="/products/analytics" title="Analytics">
                    <div className="flex items-center space-x-2">
                      <BarChart3 className="h-4 w-4" />
                      <span>Аналитика и отчеты</span>
                    </div>
                  </ListItem>
                  <ListItem href="/products/automation" title="Automation">
                    <div className="flex items-center space-x-2">
                      <Zap className="h-4 w-4" />
                      <span>Автоматизация процессов</span>
                    </div>
                  </ListItem>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-sm font-medium">Дополнительные модули</h3>
                <ul className="grid gap-2">
                  <ListItem href="/products/mobile" title="Mobile SDK">
                    <div className="flex items-center space-x-2">
                      <Smartphone className="h-4 w-4" />
                      <span>Мобильные приложения</span>
                    </div>
                  </ListItem>
                  <ListItem href="/products/integrations" title="Integrations">
                    <div className="flex items-center space-x-2">
                      <ExternalLink className="h-4 w-4" />
                      <span>Интеграции с сервисами</span>
                    </div>
                  </ListItem>
                  <ListItem href="/products/enterprise" title="Enterprise">
                    <div className="flex items-center space-x-2">
                      <Shield className="h-4 w-4" />
                      <span>Корпоративные решения</span>
                    </div>
                  </ListItem>
                </ul>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Решения</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[500px] gap-3 p-4">
              <ListItem href="/solutions/startup" title="Для стартапов">
                <div className="flex items-center justify-between">
                  <span>Быстрый старт и масштабирование</span>
                  <Badge variant="secondary">Популярное</Badge>
                </div>
              </ListItem>
              <ListItem href="/solutions/enterprise" title="Для предприятий">
                <div className="flex items-center justify-between">
                  <span>Корпоративные решения</span>
                  <Badge variant="outline">Премиум</Badge>
                </div>
              </ListItem>
              <ListItem href="/solutions/agency" title="Для агентств">
                <div className="flex items-center justify-between">
                  <span>Решения для агентств</span>
                  <Badge variant="outline">Новое</Badge>
                </div>
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Поддержка</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid gap-3 p-6 w-[600px] md:grid-cols-2">
              <div className="space-y-3">
                <h3 className="text-sm font-medium">Документация</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="/docs"
                      className="text-sm text-muted-foreground hover:text-foreground flex items-center space-x-2"
                    >
                      <FileText className="h-4 w-4" />
                      <span>Руководства</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/api"
                      className="text-sm text-muted-foreground hover:text-foreground flex items-center space-x-2"
                    >
                      <Code className="h-4 w-4" />
                      <span>API документация</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/tutorials"
                      className="text-sm text-muted-foreground hover:text-foreground flex items-center space-x-2"
                    >
                      <Video className="h-4 w-4" />
                      <span>Видеоуроки</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-sm font-medium">Сообщество</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="/forum"
                      className="text-sm text-muted-foreground hover:text-foreground flex items-center space-x-2"
                    >
                      <Users className="h-4 w-4" />
                      <span>Форум</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/discord"
                      className="text-sm text-muted-foreground hover:text-foreground flex items-center space-x-2"
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span>Discord</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/github"
                      className="text-sm text-muted-foreground hover:text-foreground flex items-center space-x-2"
                    >
                      <Github className="h-4 w-4" />
                      <span>GitHub</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            О компании
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Button variant="default" size="sm">
            Попробовать бесплатно
          </Button>
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuIndicator />
    </NavigationMenu>
  ),
};

// Интерактивный пример
export const InteractiveExample: Story = {
  render: () => {
    const [activeItem, setActiveItem] = React.useState<string | null>(null);

    return (
      <div className="space-y-4">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger
                onPointerMove={() => setActiveItem('products')}
                onPointerLeave={() => setActiveItem(null)}
              >
                Продукты
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 w-[400px]">
                  <ListItem href="/products/core" title="Основная платформа">
                    <div className="flex items-center space-x-2">
                      <Server className="h-4 w-4" />
                      <span>Полнофункциональная платформа</span>
                    </div>
                  </ListItem>
                  <ListItem href="/products/analytics" title="Аналитика">
                    <div className="flex items-center space-x-2">
                      <BarChart3 className="h-4 w-4" />
                      <span>Детальная аналитика</span>
                    </div>
                  </ListItem>
                  <ListItem href="/products/automation" title="Автоматизация">
                    <div className="flex items-center space-x-2">
                      <Zap className="h-4 w-4" />
                      <span>Автоматизация процессов</span>
                    </div>
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger
                onPointerMove={() => setActiveItem('solutions')}
                onPointerLeave={() => setActiveItem(null)}
              >
                Решения
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4">
                  <ListItem href="/solutions/startup" title="Для стартапов">
                    <div className="flex items-center justify-between">
                      <span>Быстрый старт</span>
                      <Badge variant="secondary">Популярное</Badge>
                    </div>
                  </ListItem>
                  <ListItem
                    href="/solutions/enterprise"
                    title="Для предприятий"
                  >
                    <div className="flex items-center justify-between">
                      <span>Корпоративные решения</span>
                      <Badge variant="outline">Премиум</Badge>
                    </div>
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                onPointerMove={() => setActiveItem('pricing')}
                onPointerLeave={() => setActiveItem(null)}
              >
                Цены
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
          <NavigationMenuIndicator />
        </NavigationMenu>

        <div className="text-sm text-muted-foreground">
          <p>
            Активный элемент: <strong>{activeItem || 'Нет'}</strong>
          </p>
        </div>
      </div>
    );
  },
};

// Вспомогательная функция для создания элементов списка
const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
