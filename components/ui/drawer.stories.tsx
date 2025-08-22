import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import * as React from 'react';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import {
  User,
  Settings,
  Bell,
  Trash2,
  Plus,
  Search,
  Filter,
  ShoppingCart,
  Package,
  Truck,
  CheckCircle,
  AlertCircle,
  Info,
} from 'lucide-react';

const meta: Meta<typeof Drawer> = {
  title: 'UI/Drawer',
  component: Drawer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    shouldScaleBackground: {
      control: 'boolean',
      description: 'Масштабировать ли фон при открытии',
    },
    modal: {
      control: 'boolean',
      description: 'Модальный режим',
    },
    open: {
      control: 'boolean',
      description: 'Контролируемое состояние открытия',
    },
    onOpenChange: {
      action: 'openChanged',
      description: 'Callback при изменении состояния',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Базовый пример
export const Default: Story = {
  render: args => (
    <Drawer {...args}>
      <DrawerTrigger asChild>
        <Button variant="outline">Открыть drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Вы уверены?</DrawerTitle>
          <DrawerDescription>
            Это действие нельзя отменить. Это навсегда удалит ваш аккаунт и
            удалит ваши данные с наших серверов.
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Button>Подтвердить</Button>
          <DrawerClose asChild>
            <Button variant="outline">Отмена</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
  args: {},
};

// Профиль пользователя
export const UserProfile: Story = {
  render: args => (
    <Drawer {...args}>
      <DrawerTrigger asChild>
        <Button variant="outline">
          <User className="h-4 w-4 mr-2" />
          Профиль
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <div className="flex items-center space-x-4">
            <Avatar className="w-16 h-16">
              <AvatarImage src="/avatars/01.png" />
              <AvatarFallback>ИИ</AvatarFallback>
            </Avatar>
            <div>
              <DrawerTitle>Иван Иванов</DrawerTitle>
              <DrawerDescription>ivan@example.com</DrawerDescription>
            </div>
          </div>
        </DrawerHeader>
        <div className="px-4 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Полное имя</Label>
            <Input id="name" defaultValue="Иван Иванов" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" defaultValue="ivan@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Телефон</Label>
            <Input id="phone" defaultValue="+7 (999) 123-45-67" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="bio">О себе</Label>
            <Textarea
              id="bio"
              placeholder="Расскажите о себе..."
              defaultValue="Старший разработчик с 5-летним опытом работы в веб-разработке."
            />
          </div>
        </div>
        <DrawerFooter>
          <Button>Сохранить изменения</Button>
          <DrawerClose asChild>
            <Button variant="outline">Отмена</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
  args: {},
};

// Настройки
export const SettingsDrawer: Story = {
  render: args => (
    <Drawer {...args}>
      <DrawerTrigger asChild>
        <Button variant="outline">
          <Settings className="h-4 w-4 mr-2" />
          Настройки
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Настройки приложения</DrawerTitle>
          <DrawerDescription>
            Управляйте настройками вашего аккаунта и предпочтениями.
          </DrawerDescription>
        </DrawerHeader>
        <div className="px-4 space-y-6">
          <div className="space-y-4">
            <h4 className="text-sm font-medium">Уведомления</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Email уведомления</Label>
                  <p className="text-xs text-muted-foreground">
                    Получать уведомления на email
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Push уведомления</Label>
                  <p className="text-xs text-muted-foreground">
                    Уведомления в браузере
                  </p>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Маркетинговые</Label>
                  <p className="text-xs text-muted-foreground">
                    Новости и предложения
                  </p>
                </div>
                <Switch />
              </div>
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <h4 className="text-sm font-medium">Внешний вид</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Темная тема</Label>
                  <p className="text-xs text-muted-foreground">
                    Автоматическое переключение
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Компактный режим</Label>
                  <p className="text-xs text-muted-foreground">
                    Уменьшить отступы
                  </p>
                </div>
                <Switch />
              </div>
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <h4 className="text-sm font-medium">Безопасность</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Двухфакторная аутентификация</Label>
                  <p className="text-xs text-muted-foreground">
                    Дополнительная защита
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  Настроить
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Сессии</Label>
                  <p className="text-xs text-muted-foreground">
                    Управление устройствами
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  Просмотр
                </Button>
              </div>
            </div>
          </div>
        </div>
        <DrawerFooter>
          <Button>Сохранить настройки</Button>
          <DrawerClose asChild>
            <Button variant="outline">Отмена</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
  args: {},
};

// Корзина покупок
export const ShoppingCartDrawer: Story = {
  render: args => {
    const [items, setItems] = React.useState([
      { id: 1, name: 'Смартфон', price: 25000, quantity: 1 },
      { id: 2, name: 'Наушники', price: 8500, quantity: 2 },
      { id: 3, name: 'Чехол', price: 1200, quantity: 1 },
    ]);

    const total = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );

    return (
      <Drawer {...args}>
        <DrawerTrigger asChild>
          <Button variant="outline" className="relative">
            <ShoppingCart className="h-4 w-4 mr-2" />
            Корзина
            <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center">
              {items.length}
            </Badge>
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Корзина покупок</DrawerTitle>
            <DrawerDescription>
              {items.length} товар(ов) в корзине
            </DrawerDescription>
          </DrawerHeader>
          <div className="px-4 flex-1 overflow-auto">
            {items.length === 0 ? (
              <div className="text-center py-8">
                <ShoppingCart className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground">Корзина пуста</p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map(item => (
                  <div
                    key={item.id}
                    className="flex items-center space-x-4 p-3 border rounded-lg"
                  >
                    <div className="w-12 h-12 bg-muted rounded-md flex items-center justify-center">
                      <Package className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">{item.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        Количество: {item.quantity}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">
                        {item.price.toLocaleString()}₽
                      </p>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() =>
                          setItems(items.filter(i => i.id !== item.id))
                        }
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          {items.length > 0 && (
            <DrawerFooter>
              <div className="w-full space-y-4">
                <div className="flex justify-between text-lg font-semibold">
                  <span>Итого:</span>
                  <span>{total.toLocaleString()}₽</span>
                </div>
                <Button className="w-full">
                  <Truck className="h-4 w-4 mr-2" />
                  Оформить заказ
                </Button>
                <DrawerClose asChild>
                  <Button variant="outline" className="w-full">
                    Продолжить покупки
                  </Button>
                </DrawerClose>
              </div>
            </DrawerFooter>
          )}
        </DrawerContent>
      </Drawer>
    );
  },
  args: {},
};

// Фильтры и поиск
export const FiltersAndSearch: Story = {
  render: args => {
    const [priceRange, setPriceRange] = React.useState([0, 100000]);
    const [categories, setCategories] = React.useState<string[]>([]);
    const [sortBy, setSortBy] = React.useState('popular');

    const categoryOptions = [
      'Электроника',
      'Одежда',
      'Книги',
      'Спорт',
      'Дом',
      'Красота',
    ];

    const sortOptions = [
      { value: 'popular', label: 'По популярности' },
      { value: 'price-asc', label: 'Цена: по возрастанию' },
      { value: 'price-desc', label: 'Цена: по убыванию' },
      { value: 'newest', label: 'Сначала новые' },
    ];

    return (
      <Drawer {...args}>
        <DrawerTrigger asChild>
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Фильтры
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Фильтры и поиск</DrawerTitle>
            <DrawerDescription>
              Настройте параметры поиска товаров
            </DrawerDescription>
          </DrawerHeader>
          <div className="px-4 space-y-6">
            <div className="space-y-4">
              <h4 className="text-sm font-medium">Поиск</h4>
              <div className="space-y-2">
                <Label htmlFor="search">Поиск товаров</Label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="search"
                    placeholder="Введите название товара..."
                    className="pl-10"
                  />
                </div>
              </div>
            </div>

            <Separator />

            <div className="space-y-4">
              <h4 className="text-sm font-medium">Категории</h4>
              <div className="space-y-2">
                {categoryOptions.map(category => (
                  <div key={category} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id={category}
                      checked={categories.includes(category)}
                      onChange={e => {
                        if (e.target.checked) {
                          setCategories([...categories, category]);
                        } else {
                          setCategories(categories.filter(c => c !== category));
                        }
                      }}
                    />
                    <Label htmlFor={category} className="text-sm">
                      {category}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            <div className="space-y-4">
              <h4 className="text-sm font-medium">Ценовой диапазон</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Input
                    type="number"
                    placeholder="От"
                    value={priceRange[0]}
                    onChange={e =>
                      setPriceRange([Number(e.target.value), priceRange[1]])
                    }
                  />
                  <span className="text-muted-foreground">—</span>
                  <Input
                    type="number"
                    placeholder="До"
                    value={priceRange[1]}
                    onChange={e =>
                      setPriceRange([priceRange[0], Number(e.target.value)])
                    }
                  />
                </div>
              </div>
            </div>

            <Separator />

            <div className="space-y-4">
              <h4 className="text-sm font-medium">Сортировка</h4>
              <div className="space-y-2">
                {sortOptions.map(option => (
                  <div
                    key={option.value}
                    className="flex items-center space-x-2"
                  >
                    <input
                      type="radio"
                      id={option.value}
                      name="sort"
                      value={option.value}
                      checked={sortBy === option.value}
                      onChange={e => setSortBy(e.target.value)}
                    />
                    <Label htmlFor={option.value} className="text-sm">
                      {option.label}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <DrawerFooter>
            <Button className="w-full">Применить фильтры</Button>
            <DrawerClose asChild>
              <Button variant="outline" className="w-full">
                Сбросить
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    );
  },
  args: {},
};

// Уведомления
export const Notifications: Story = {
  render: args => {
    const notifications = [
      {
        id: 1,
        type: 'success',
        title: 'Заказ подтвержден',
        message: 'Ваш заказ #12345 успешно подтвержден',
        time: '2 минуты назад',
        icon: CheckCircle,
        read: false,
      },
      {
        id: 2,
        type: 'info',
        title: 'Новое сообщение',
        message: 'У вас есть новое сообщение от поддержки',
        time: '1 час назад',
        icon: Info,
        read: false,
      },
      {
        id: 3,
        type: 'warning',
        title: 'Обновление системы',
        message: 'Система будет обновлена в 23:00',
        time: '3 часа назад',
        icon: AlertCircle,
        read: true,
      },
      {
        id: 4,
        type: 'success',
        title: 'Платеж прошел',
        message: 'Платеж на сумму 2,500₽ успешно обработан',
        time: '1 день назад',
        icon: CheckCircle,
        read: true,
      },
    ];

    const unreadCount = notifications.filter(n => !n.read).length;

    return (
      <Drawer {...args}>
        <DrawerTrigger asChild>
          <Button variant="outline" className="relative">
            <Bell className="h-4 w-4 mr-2" />
            Уведомления
            {unreadCount > 0 && (
              <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center">
                {unreadCount}
              </Badge>
            )}
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Уведомления</DrawerTitle>
            <DrawerDescription>
              {unreadCount} непрочитанных уведомлений
            </DrawerDescription>
          </DrawerHeader>
          <div className="px-4 flex-1 overflow-auto">
            <div className="space-y-4">
              {notifications.map(notification => {
                const Icon = notification.icon;
                return (
                  <div
                    key={notification.id}
                    className={`p-4 border rounded-lg ${!notification.read ? 'bg-muted/50' : ''}`}
                  >
                    <div className="flex items-start space-x-3">
                      <Icon
                        className={`h-5 w-5 mt-0.5 ${
                          notification.type === 'success'
                            ? 'text-green-500'
                            : notification.type === 'warning'
                              ? 'text-yellow-500'
                              : 'text-blue-500'
                        }`}
                      />
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium">{notification.title}</h4>
                          {!notification.read && (
                            <div className="w-2 h-2 bg-blue-500 rounded-full" />
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {notification.message}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {notification.time}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <DrawerFooter>
            <Button variant="outline" className="w-full">
              Отметить все как прочитанные
            </Button>
            <DrawerClose asChild>
              <Button variant="outline" className="w-full">
                Закрыть
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    );
  },
  args: {},
};

// Интерактивный пример
export const InteractiveExample: Story = {
  render: args => {
    const [open, setOpen] = React.useState(false);
    const [formData, setFormData] = React.useState({
      name: '',
      email: '',
      message: '',
      priority: 'normal',
      category: 'general',
    });

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log('Form submitted:', formData);
      setOpen(false);
      setFormData({
        name: '',
        email: '',
        message: '',
        priority: 'normal',
        category: 'general',
      });
    };

    return (
      <div className="space-y-4">
        <div className="text-center space-y-2">
          <h3 className="text-lg font-semibold">Форма обратной связи</h3>
          <p className="text-sm text-muted-foreground">
            Нажмите кнопку ниже, чтобы открыть форму в drawer
          </p>
        </div>

        <Drawer {...args} open={open} onOpenChange={setOpen}>
          <DrawerTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Создать обращение
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Новое обращение</DrawerTitle>
              <DrawerDescription>
                Заполните форму ниже, чтобы создать новое обращение в службу
                поддержки.
              </DrawerDescription>
            </DrawerHeader>
            <form onSubmit={handleSubmit} className="px-4 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Ваше имя *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={e =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={e =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Категория</Label>
                <select
                  id="category"
                  className="w-full p-2 border rounded-md"
                  value={formData.category}
                  onChange={e =>
                    setFormData({ ...formData, category: e.target.value })
                  }
                >
                  <option value="general">Общие вопросы</option>
                  <option value="technical">Техническая поддержка</option>
                  <option value="billing">Оплата</option>
                  <option value="feature">Предложения</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="priority">Приоритет</Label>
                <select
                  id="priority"
                  className="w-full p-2 border rounded-md"
                  value={formData.priority}
                  onChange={e =>
                    setFormData({ ...formData, priority: e.target.value })
                  }
                >
                  <option value="low">Низкий</option>
                  <option value="normal">Обычный</option>
                  <option value="high">Высокий</option>
                  <option value="urgent">Срочный</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Сообщение *</Label>
                <Textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={e =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Опишите вашу проблему или вопрос..."
                  required
                />
              </div>
            </form>
            <DrawerFooter>
              <Button onClick={handleSubmit} className="w-full">
                Отправить обращение
              </Button>
              <DrawerClose asChild>
                <Button variant="outline" className="w-full">
                  Отмена
                </Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>

        <div className="text-center text-sm text-muted-foreground">
          Состояние drawer: {open ? 'Открыт' : 'Закрыт'}
        </div>
      </div>
    );
  },
  args: {},
};
