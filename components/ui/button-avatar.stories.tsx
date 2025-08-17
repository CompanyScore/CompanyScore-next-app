import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Button } from './button';
import { Avatar } from './avatar';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from './alert-dialog';

const meta: Meta<typeof Button> = {
  title: 'UI/ButtonAvatar',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Демонстрация взаимодействия между Button и Avatar компонентами.',
      },
      sourceState: 'hidden',
      controls: { sort: 'requiredFirst' },
      expanded: false,
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AvatarWithButton: Story = {
  render: () => {
    const handleAvatarClick = (id: string) => {
      alert(`Кликнут аватар с ID: ${id}`);
    };

    return (
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Avatar
            src="https://picsum.photos/200/200?random=1"
            alt="User 1"
            fallback="U1"
            className="cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => handleAvatarClick('user1')}
          />
          <Button size="sm">Профиль</Button>
        </div>

        <div className="flex items-center gap-2">
          <Avatar
            src="https://picsum.photos/200/200?random=2"
            alt="User 2"
            fallback="U2"
            className="cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => handleAvatarClick('user2')}
          />
          <Button variant="outline" size="sm">
            Настройки
          </Button>
        </div>
      </div>
    );
  },
};

export const MultipleAvatarsWithButtons: Story = {
  render: () => {
    const users = [
      {
        id: 'user1',
        src: 'https://picsum.photos/200/200?random=1',
        alt: 'User 1',
        fallback: 'U1',
      },
      {
        id: 'user2',
        src: 'https://picsum.photos/200/200?random=2',
        alt: 'User 2',
        fallback: 'U2',
      },
      {
        id: 'user3',
        src: 'https://picsum.photos/200/200?random=3',
        alt: 'User 3',
        fallback: 'U3',
      },
      { id: 'unknown', unknown: true },
    ];

    const handleAvatarClick = (id: string) => {
      alert(`Кликнут аватар с ID: ${id}`);
    };

    return (
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          {users.map(user => (
            <div key={user.id} className="flex flex-col items-center gap-2">
              <Avatar
                {...user}
                className="cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => handleAvatarClick(user.id)}
              />
              <Button
                size="xs"
                variant="ghost"
                onClick={() => handleAvatarClick(user.id)}
              >
                {user.id}
              </Button>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button variant="secondary">Управление пользователями</Button>
        </div>
      </div>
    );
  },
};

export const AvatarGroupWithAction: Story = {
  render: () => {
    const users = [
      {
        id: 'user1',
        src: 'https://picsum.photos/200/200?random=1',
        alt: 'User 1',
        fallback: 'U1',
      },
      {
        id: 'user2',
        src: 'https://picsum.photos/200/200?random=2',
        alt: 'User 2',
        fallback: 'U2',
      },
      {
        id: 'user3',
        src: 'https://picsum.photos/200/200?random=3',
        alt: 'User 3',
        fallback: 'U3',
      },
      { id: 'user4', unknown: true },
    ];

    const handleAvatarClick = (id: string) => {
      alert(`Кликнут аватар с ID: ${id}`);
    };

    return (
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <div className="flex -space-x-2">
            {users.map(user => (
              <Avatar
                key={user.id}
                {...user}
                className="ring-2 ring-background cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => handleAvatarClick(user.id)}
              />
            ))}
          </div>
          <Button size="sm" variant="outline">
            +{users.length} участников
          </Button>
        </div>

        <div className="flex gap-2">
          <Button size="sm" variant="default">
            Добавить участника
          </Button>
          <Button size="sm" variant="ghost">
            Удалить
          </Button>
        </div>
      </div>
    );
  },
};

export const InteractiveAvatars: Story = {
  render: () => {
    const users = [
      {
        id: 'admin',
        src: 'https://picsum.photos/200/200?random=1',
        alt: 'Admin',
        fallback: 'AD',
        role: 'Администратор',
      },
      {
        id: 'moderator',
        src: 'https://picsum.photos/200/200?random=2',
        alt: 'Moderator',
        fallback: 'MD',
        role: 'Модератор',
      },
      {
        id: 'user',
        src: 'https://picsum.photos/200/200?random=3',
        alt: 'User',
        fallback: 'US',
        role: 'Пользователь',
      },
      { id: 'guest', unknown: true, role: 'Гость' },
    ];

    const handleAvatarClick = (id: string, role: string) => {
      alert(`Кликнут ${role} с ID: ${id}`);
    };

    return (
      <div className="space-y-6">
        {users.map(user => (
          <div
            key={user.id}
            className="flex items-center gap-4 p-4 border rounded-lg"
          >
            <Avatar
              {...user}
              size="lg"
              className="cursor-pointer hover:scale-105 transition-transform"
              onClick={() => handleAvatarClick(user.id, user.role)}
            />
            <div className="flex-1">
              <h3 className="font-medium">{user.role}</h3>
              <p className="text-sm text-muted-foreground">ID: {user.id}</p>
            </div>
            <div className="flex gap-2">
              <Button
                size="sm"
                variant="outline"
                onClick={() => handleAvatarClick(user.id, user.role)}
              >
                Профиль
              </Button>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => handleAvatarClick(user.id, user.role)}
              >
                Настройки
              </Button>
            </div>
          </div>
        ))}
      </div>
    );
  },
};

export const AvatarWithStatusAndButton: Story = {
  render: () => {
    const users = [
      {
        id: 'online',
        src: 'https://picsum.photos/200/200?random=1',
        alt: 'Online User',
        fallback: 'ON',
        status: 'online',
      },
      {
        id: 'away',
        src: 'https://picsum.photos/200/200?random=2',
        alt: 'Away User',
        fallback: 'AW',
        status: 'away',
      },
      {
        id: 'offline',
        src: 'https://picsum.photos/200/200?random=3',
        alt: 'Offline User',
        fallback: 'OF',
        status: 'offline',
      },
      { id: 'unknown', unknown: true, status: 'unknown' },
    ];

    const getStatusColor = (status: string) => {
      switch (status) {
        case 'online':
          return 'bg-green-500';
        case 'away':
          return 'bg-yellow-500';
        case 'offline':
          return 'bg-red-500';
        default:
          return 'bg-gray-500';
      }
    };

    const handleAvatarClick = (id: string, status: string) => {
      alert(`Кликнут пользователь ${id} (статус: ${status})`);
    };

    return (
      <div className="space-y-4">
        {users.map(user => (
          <div key={user.id} className="flex items-center gap-4">
            <div className="relative">
              <Avatar
                {...user}
                className="cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => handleAvatarClick(user.id, user.status)}
              />
              <div
                className={`absolute -bottom-1 -right-1 h-3 w-3 rounded-full ${getStatusColor(user.status)} border-2 border-background`}
              />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium capitalize">{user.status}</p>
            </div>
            <Button
              size="sm"
              variant="ghost"
              onClick={() => handleAvatarClick(user.id, user.status)}
            >
              Написать
            </Button>
          </div>
        ))}
      </div>
    );
  },
};

export const AvatarWithAlertDialog: Story = {
  render: () => {
    const users = [
      {
        id: 'admin',
        src: 'https://picsum.photos/200/200?random=1',
        alt: 'Admin',
        fallback: 'AD',
        role: 'Администратор',
      },
      {
        id: 'moderator',
        src: 'https://picsum.photos/200/200?random=2',
        alt: 'Moderator',
        fallback: 'MD',
        role: 'Модератор',
      },
      {
        id: 'user',
        src: 'https://picsum.photos/200/200?random=3',
        alt: 'User',
        fallback: 'US',
        role: 'Пользователь',
      },
    ];

    return (
      <div className="space-y-6">
        {users.map(user => (
          <div
            key={user.id}
            className="flex items-center gap-4 p-4 border rounded-lg"
          >
            <Avatar {...user} size="lg" />
            <div className="flex-1">
              <h3 className="font-medium">{user.role}</h3>
              <p className="text-sm text-muted-foreground">ID: {user.id}</p>
            </div>
            <div className="flex gap-2">
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button size="sm" variant="outline">
                    Удалить
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Удалить пользователя?</AlertDialogTitle>
                    <AlertDialogDescription>
                      Вы уверены, что хотите удалить {user.role.toLowerCase()}{' '}
                      &quot;{user.id}&quot;? Это действие нельзя отменить.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Отмена</AlertDialogCancel>
                    <AlertDialogAction>Удалить</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>

              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button size="sm" variant="ghost">
                    Блокировать
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Заблокировать пользователя?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      Пользователь &quot;{user.id}&quot; будет заблокирован и не
                      сможет войти в систему.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Отмена</AlertDialogCancel>
                    <AlertDialogAction>Заблокировать</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        ))}
      </div>
    );
  },
};

export const InteractiveWithAlertDialog: Story = {
  render: () => {
    const users = [
      {
        id: 'user1',
        src: 'https://picsum.photos/200/200?random=1',
        alt: 'User 1',
        fallback: 'U1',
        name: 'Пользователь 1',
      },
      {
        id: 'user2',
        src: 'https://picsum.photos/200/200?random=2',
        alt: 'User 2',
        fallback: 'U2',
        name: 'Пользователь 2',
      },
      {
        id: 'user3',
        src: 'https://picsum.photos/200/200?random=3',
        alt: 'User 3',
        fallback: 'U3',
        name: 'Пользователь 3',
      },
      { id: 'unknown', unknown: true, name: 'Неизвестный пользователь' },
    ];

    return (
      <div className="space-y-4">
        {users.map(user => (
          <div
            key={user.id}
            className="flex items-center gap-4 p-4 border rounded-lg"
          >
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Avatar
                  {...user}
                  size="lg"
                  className="cursor-pointer hover:scale-105 transition-transform"
                />
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Информация о пользователе</AlertDialogTitle>
                  <AlertDialogDescription>
                    <div className="flex items-center gap-3 mt-2">
                      <Avatar {...user} size="md" />
                      <div>
                        <p className="font-medium">{user.name}</p>
                        <p className="text-sm text-muted-foreground">
                          ID: {user.id}
                        </p>
                      </div>
                    </div>
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Закрыть</AlertDialogCancel>
                  <AlertDialogAction>Редактировать</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

            <div className="flex-1">
              <h3 className="font-medium">{user.name}</h3>
              <p className="text-sm text-muted-foreground">ID: {user.id}</p>
            </div>

            <div className="flex gap-2">
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button size="sm" variant="outline">
                    Действия
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Действия с пользователем
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      Выберите действие для пользователя &quot;{user.name}&quot;
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Отмена</AlertDialogCancel>
                    <div className="flex gap-2">
                      <AlertDialogAction>Редактировать</AlertDialogAction>
                      <AlertDialogAction>Удалить</AlertDialogAction>
                    </div>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        ))}
      </div>
    );
  },
};

export const InteractiveAvatarGroup: Story = {
  render: () => {
    const users = [
      {
        id: 'shadcn',
        src: 'https://github.com/shadcn.png',
        alt: '@shadcn',
        fallback: 'CN',
      },
      {
        id: 'leerob',
        src: 'https://github.com/leerob.png',
        alt: '@leerob',
        fallback: 'LR',
      },
      {
        id: 'evilrabbit',
        src: 'https://github.com/evilrabbit.png',
        alt: '@evilrabbit',
        fallback: 'ER',
      },
      { id: 'unknown', unknown: true },
    ];

    const handleAvatarClick = (id: string) => {
      alert(`Кликнут аватар с ID: ${id}`);
    };

    const handleGroupClick = () => {
      alert('Request detailed list');
    };

    return (
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <div className="flex -space-x-2">
            {users.map(user => (
              <Avatar
                key={user.id}
                {...user}
                className="ring-2 ring-background cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => handleAvatarClick(user.id)}
              />
            ))}
          </div>

          <Button
            size="sm"
            variant="outline"
            onClick={handleGroupClick}
            className="cursor-pointer"
          >
            +{users.length} участников
          </Button>
        </div>

        <div className="text-sm text-muted-foreground">
          Кликните на аватар для получения ID, или на &quot;+{users.length}{' '}
          участников&quot; для запроса детального списка
        </div>
      </div>
    );
  },
};

export const AvatarGroupWithAlertDialog: Story = {
  render: () => {
    const users = [
      {
        id: 'user1',
        src: 'https://picsum.photos/200/200?random=1',
        alt: 'User 1',
        fallback: 'U1',
      },
      {
        id: 'user2',
        src: 'https://picsum.photos/200/200?random=2',
        alt: 'User 2',
        fallback: 'U2',
      },
      {
        id: 'user3',
        src: 'https://picsum.photos/200/200?random=3',
        alt: 'User 3',
        fallback: 'U3',
      },
      { id: 'user4', unknown: true },
    ];

    return (
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <div className="flex -space-x-2">
            {users.map((user, index) => (
              <AlertDialog key={user.id}>
                <AlertDialogTrigger asChild>
                  <Avatar
                    {...user}
                    className="ring-2 ring-background cursor-pointer hover:opacity-80 transition-opacity"
                  />
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Пользователь {user.id}</AlertDialogTitle>
                    <AlertDialogDescription>
                      <div className="flex items-center gap-3 mt-2">
                        <Avatar {...user} size="md" />
                        <div>
                          <p className="font-medium">Пользователь {user.id}</p>
                          <p className="text-sm text-muted-foreground">
                            Индекс: {index + 1}
                          </p>
                        </div>
                      </div>
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Закрыть</AlertDialogCancel>
                    <AlertDialogAction>Подробнее</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            ))}
          </div>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button size="sm" variant="outline">
                +{users.length} участников
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Участники группы</AlertDialogTitle>
                <AlertDialogDescription>
                  Всего участников: {users.length}
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Закрыть</AlertDialogCancel>
                <AlertDialogAction>Управление</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>

        <div className="flex gap-2">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button size="sm" variant="default">
                Добавить участника
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Добавить участника</AlertDialogTitle>
                <AlertDialogDescription>
                  Вы уверены, что хотите добавить нового участника в группу?
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Отмена</AlertDialogCancel>
                <AlertDialogAction>Добавить</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button size="sm" variant="ghost">
                Удалить всех
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Удалить всех участников?</AlertDialogTitle>
                <AlertDialogDescription>
                  Это действие удалит всех {users.length} участников группы. Это
                  действие нельзя отменить.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Отмена</AlertDialogCancel>
                <AlertDialogAction>Удалить всех</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    );
  },
};
