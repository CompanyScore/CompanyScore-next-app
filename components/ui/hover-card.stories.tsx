import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { HoverCard, HoverCardContent, HoverCardTrigger } from './hover-card';
import { Button } from './button';
import { Avatar, AvatarFallback, AvatarImage } from './avatar';
import { Badge } from './badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './card';
import {
  User,
  Calendar,
  MapPin,
  Mail,
  Phone,
  Globe,
  Github,
  Twitter,
  Linkedin,
  ExternalLink,
  Star,
  Users,
  Code,
  Package,
  Download,
  Eye,
  Heart,
} from 'lucide-react';

const meta: Meta<typeof HoverCard> = {
  title: 'UI/HoverCard',
  component: HoverCard,
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
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">Hover</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@nextjs</h4>
            <p className="text-sm">
              The React Framework – created and maintained by @vercel.
            </p>
            <div className="flex items-center pt-2">
              <Calendar className="mr-2 h-4 w-4 opacity-70" />
              <span className="text-xs text-muted-foreground">
                Joined December 2021
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};

// С профилем пользователя
export const UserProfile: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="outline">
          <User className="mr-2 h-4 w-4" />
          Иван Петров
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>ИП</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">Иван Петров</h4>
            <p className="text-sm text-muted-foreground">
              Senior Frontend Developer
            </p>
            <div className="flex items-center pt-2">
              <Badge variant="secondary">React</Badge>
              <Badge variant="secondary" className="ml-1">
                TypeScript
              </Badge>
            </div>
            <div className="flex items-center pt-2 space-x-4 text-xs text-muted-foreground">
              <div className="flex items-center">
                <MapPin className="mr-1 h-3 w-3" />
                Москва
              </div>
              <div className="flex items-center">
                <Mail className="mr-1 h-3 w-3" />
                ivan@example.com
              </div>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};

// С проектом
export const ProjectCard: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link" className="p-0 h-auto font-normal">
          CompanyScore Dashboard
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm">CompanyScore Dashboard</CardTitle>
              <Badge variant="outline">Active</Badge>
            </div>
            <CardDescription className="text-xs">
              Современная панель управления для анализа компаний
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">Технологии:</span>
              <div className="flex space-x-1">
                <Badge variant="secondary" className="text-xs">
                  Next.js
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  React
                </Badge>
                <Badge variant="secondary" className="text-xs">
                  TypeScript
                </Badge>
              </div>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">Статистика:</span>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Star className="mr-1 h-3 w-3" />
                  <span>156</span>
                </div>
                <div className="flex items-center">
                  <Users className="mr-1 h-3 w-3" />
                  <span>12</span>
                </div>
                <div className="flex items-center">
                  <Code className="mr-1 h-3 w-3" />
                  <span>1.2k</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">
                Последнее обновление:
              </span>
              <span>2 дня назад</span>
            </div>
          </CardContent>
        </Card>
      </HoverCardContent>
    </HoverCard>
  ),
};

// С пакетом npm
export const NpmPackage: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link" className="p-0 h-auto font-normal">
          @radix-ui/react-hover-card
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-semibold">
              @radix-ui/react-hover-card
            </h4>
            <Badge variant="outline">v1.0.0</Badge>
          </div>
          <p className="text-sm text-muted-foreground">
            Unstyled, accessible components for building high‑quality design
            systems and web apps.
          </p>
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Download className="mr-1 h-3 w-3" />
                <span>1.2M</span>
              </div>
              <div className="flex items-center">
                <Star className="mr-1 h-3 w-3" />
                <span>2.4k</span>
              </div>
              <div className="flex items-center">
                <Eye className="mr-1 h-3 w-3" />
                <span>45k</span>
              </div>
            </div>
            <div className="flex items-center">
              <Heart className="mr-1 h-3 w-3 text-red-500" />
              <span>98%</span>
            </div>
          </div>
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>Последнее обновление: 3 дня назад</span>
            <div className="flex items-center">
              <Github className="mr-1 h-3 w-3" />
              <span>GitHub</span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};

// С ссылкой
export const LinkPreview: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <a
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 underline inline-flex items-center"
        >
          Next.js
          <ExternalLink className="ml-1 h-3 w-3" />
        </a>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-semibold">Next.js</h4>
            <Badge variant="outline">Framework</Badge>
          </div>
          <p className="text-sm text-muted-foreground">
            The React Framework for Production. Next.js gives you the best
            developer experience with all the features you need for production.
          </p>
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>nextjs.org</span>
            <div className="flex items-center space-x-2">
              <Github className="h-3 w-3" />
              <Twitter className="h-3 w-3" />
              <Linkedin className="h-3 w-3" />
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};

// С изображением
export const ImagePreview: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="outline" className="p-2">
          <img
            src="https://github.com/shadcn.png"
            alt="Avatar"
            className="w-8 h-8 rounded-full"
          />
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="space-y-2">
          <img
            src="https://github.com/shadcn.png"
            alt="Large Avatar"
            className="w-full h-32 object-cover rounded-md"
          />
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">shadcn/ui</h4>
            <p className="text-sm text-muted-foreground">
              Beautifully designed components built with Radix UI and Tailwind
              CSS.
            </p>
            <div className="flex items-center pt-2">
              <Calendar className="mr-2 h-4 w-4 opacity-70" />
              <span className="text-xs text-muted-foreground">
                Создан в 2023 году
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};

// С контактами
export const ContactInfo: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="ghost" size="sm">
          <Mail className="mr-2 h-4 w-4" />
          Контакты
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="space-y-3">
          <h4 className="text-sm font-semibold">Контактная информация</h4>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">support@company.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">+7 (495) 123-45-67</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">Москва, ул. Примерная, 123</span>
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">www.company.com</span>
            </div>
          </div>
          <div className="flex items-center justify-between pt-2">
            <span className="text-xs text-muted-foreground">Время работы:</span>
            <span className="text-xs">Пн-Пт 9:00-18:00</span>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};

// С уведомлением
export const NotificationPreview: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="outline" size="sm" className="relative">
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
          Уведомления
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="space-y-3">
          <h4 className="text-sm font-semibold">Последние уведомления</h4>
          <div className="space-y-2">
            <div className="flex items-start space-x-2 p-2 rounded-md bg-muted/50">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">Новый комментарий</p>
                <p className="text-xs text-muted-foreground">
                  Иван оставил комментарий к вашему посту
                </p>
                <span className="text-xs text-muted-foreground">
                  2 минуты назад
                </span>
              </div>
            </div>
            <div className="flex items-start space-x-2 p-2 rounded-md bg-muted/50">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">Задача выполнена</p>
                <p className="text-xs text-muted-foreground">
                  Задача Обновить дизайн была завершена
                </p>
                <span className="text-xs text-muted-foreground">
                  1 час назад
                </span>
              </div>
            </div>
            <div className="flex items-start space-x-2 p-2 rounded-md bg-muted/50">
              <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">Напоминание</p>
                <p className="text-xs text-muted-foreground">
                  У вас запланирована встреча через 30 минут
                </p>
                <span className="text-xs text-muted-foreground">
                  3 часа назад
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-center pt-2">
            <Button variant="link" size="sm" className="text-xs">
              Показать все уведомления
            </Button>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
};

// Интерактивный пример
export const InteractiveExample: Story = {
  render: () => {
    const [hoverCount, setHoverCount] = React.useState(0);

    return (
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button
                variant="outline"
                onMouseEnter={() => setHoverCount(prev => prev + 1)}
              >
                Наведите на меня
              </Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="space-y-2">
                <h4 className="text-sm font-semibold">
                  Интерактивный HoverCard
                </h4>
                <p className="text-sm text-muted-foreground">
                  Этот HoverCard отслеживает количество наведений мыши.
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span>Количество наведений:</span>
                  <Badge variant="secondary">{hoverCount}</Badge>
                </div>
                <p className="text-xs text-muted-foreground">
                  Попробуйте навести несколько раз!
                </p>
              </div>
            </HoverCardContent>
          </HoverCard>

          <HoverCard>
            <HoverCardTrigger asChild>
              <Button variant="ghost">
                <Package className="mr-2 h-4 w-4" />
                Компоненты
              </Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="space-y-2">
                <h4 className="text-sm font-semibold">UI Компоненты</h4>
                <p className="text-sm text-muted-foreground">
                  Коллекция переиспользуемых компонентов для вашего приложения.
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Button</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Input</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>Card</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>Dialog</span>
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>

        <div className="text-sm text-muted-foreground">
          <p>Общее количество наведений: {hoverCount}</p>
        </div>
      </div>
    );
  },
};
