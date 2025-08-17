import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from './card';
import { Button } from './button';
import { Badge } from './badge';
import { Avatar } from './avatar';

const meta: Meta<typeof Card> = {
  title: 'UI/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Компонент карточки с заголовком, содержимым и футером. Поддерживает интерактивность.',
      },
      sourceState: 'hidden',
      controls: { sort: 'requiredFirst' },
      expanded: false,
    },
  },
  tags: ['autodocs'],
  argTypes: {
    onClick: {
      action: 'clicked',
      description: 'Callback функция для интерактивности',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Заголовок карточки</CardTitle>
        <CardDescription>
          Описание карточки с дополнительной информацией
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>Основное содержимое карточки. Здесь может быть любой контент.</p>
      </CardContent>
      <CardFooter>
        <Button>Действие</Button>
      </CardFooter>
    </Card>
  ),
};

export const Interactive: Story = {
  render: () => {
    const handleClick = () => {
      alert('Карточка была кликнута!');
    };

    return (
      <Card className="w-[350px]" onClick={handleClick}>
        <CardHeader>
          <CardTitle>Интерактивная карточка</CardTitle>
          <CardDescription>
            Кликните на карточку для взаимодействия
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            Эта карточка реагирует на hover и клик. Попробуйте навести курсор и
            кликнуть!
          </p>
        </CardContent>
        <CardFooter>
          <Badge variant="brand">Интерактивная</Badge>
        </CardFooter>
      </Card>
    );
  },
};

export const UserProfile: Story = {
  render: () => {
    const handleProfileClick = () => {
      alert('Открыт профиль пользователя');
    };

    return (
      <Card className="w-[300px]" onClick={handleProfileClick}>
        <CardHeader>
          <div className="flex items-center gap-3">
            <Avatar
              src="https://picsum.photos/200/200?random=1"
              alt="User avatar"
              size="lg"
              notifications={3}
            />
            <div>
              <CardTitle>Иван Петров</CardTitle>
              <CardDescription>Frontend Developer</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Email:</span>
              <span className="text-sm">ivan@example.com</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Статус:</span>
              <Badge variant="success" size="sm">
                Online
              </Badge>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button size="sm" variant="outline" className="w-full">
            Отправить сообщение
          </Button>
        </CardFooter>
      </Card>
    );
  },
};

export const ProductCard: Story = {
  render: () => {
    const handleProductClick = () => {
      alert('Открыта страница продукта');
    };

    return (
      <Card className="w-[280px]" onClick={handleProductClick}>
        <CardHeader className="pb-3">
          <div className="aspect-square bg-muted rounded-lg mb-3 flex items-center justify-center">
            <span className="text-4xl">📱</span>
          </div>
          <CardTitle>iPhone 15 Pro</CardTitle>
          <CardDescription>Самый мощный iPhone в истории</CardDescription>
        </CardHeader>
        <CardContent className="pb-3">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold">$999</span>
              <Badge variant="destructive" size="sm">
                -20%
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">Доставка: 2-3 дня</p>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Добавить в корзину</Button>
        </CardFooter>
      </Card>
    );
  },
};

export const NotificationCard: Story = {
  render: () => {
    const handleNotificationClick = () => {
      alert('Уведомление прочитано');
    };

    return (
      <Card className="w-[400px]" onClick={handleNotificationClick}>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Новое сообщение</CardTitle>
            <Badge variant="brand" size="sm">
              Новое
            </Badge>
          </div>
          <CardDescription>От: support@company.com</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm">
            У вас есть новое сообщение от службы поддержки. Пожалуйста,
            проверьте ваш почтовый ящик для получения дополнительной информации.
          </p>
        </CardContent>
        <CardFooter className="justify-between">
          <span className="text-xs text-muted-foreground">2 минуты назад</span>
          <Button size="sm" variant="outline">
            Ответить
          </Button>
        </CardFooter>
      </Card>
    );
  },
};
