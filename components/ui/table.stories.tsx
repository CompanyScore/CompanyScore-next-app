import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableCaption,
  TableFooter,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Edit,
  Trash2,
  Eye,
  Search,
  ArrowUpDown,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react';

const meta: Meta<typeof Table> = {
  title: 'UI/Table',
  component: Table,
  parameters: {
    layout: 'padded',
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
    <Table {...args}>
      <TableCaption>Список платежей за январь 2024</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Клиент</TableHead>
          <TableHead>Email</TableHead>
          <TableHead className="text-right">Сумма</TableHead>
          <TableHead>Статус</TableHead>
          <TableHead>Дата</TableHead>
          <TableHead className="text-right">Действия</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">Иван Петров</TableCell>
          <TableCell>m@example.com</TableCell>
          <TableCell className="text-right">$100.00</TableCell>
          <TableCell>
            <Badge variant="outline">Ожидает</Badge>
          </TableCell>
          <TableCell>2024-01-01</TableCell>
          <TableCell className="text-right">
            <div className="flex justify-end space-x-2">
              <Button variant="ghost" size="sm">
                <Eye className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Edit className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Мария Сидорова</TableCell>
          <TableCell>example@gmail.com</TableCell>
          <TableCell className="text-right">$125.00</TableCell>
          <TableCell>
            <Badge variant="secondary">Обрабатывается</Badge>
          </TableCell>
          <TableCell>2024-01-02</TableCell>
          <TableCell className="text-right">
            <div className="flex justify-end space-x-2">
              <Button variant="ghost" size="sm">
                <Eye className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Edit className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Алексей Козлов</TableCell>
          <TableCell>test@example.com</TableCell>
          <TableCell className="text-right">$250.00</TableCell>
          <TableCell>
            <Badge variant="success">Успешно</Badge>
          </TableCell>
          <TableCell>2024-01-03</TableCell>
          <TableCell className="text-right">
            <div className="flex justify-end space-x-2">
              <Button variant="ghost" size="sm">
                <Eye className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Edit className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={2}>Итого</TableCell>
          <TableCell className="text-right">$475.00</TableCell>
          <TableCell colSpan={3}></TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
};

// С вариантами стилей
export const Variants: Story = {
  render: args => (
    <div className="space-y-8">
      {(['default', 'secondary', 'outline', 'ghost', 'brand'] as const).map(
        variant => (
          <div key={variant}>
            <h3 className="text-lg font-semibold mb-4 capitalize">{variant}</h3>
            <Table {...args} variant={variant}>
              <TableHeader variant={variant}>
                <TableRow variant={variant}>
                  <TableHead>Клиент</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead className="text-right">Сумма</TableHead>
                  <TableHead>Статус</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow variant={variant}>
                  <TableCell className="font-medium">Иван Петров</TableCell>
                  <TableCell>m@example.com</TableCell>
                  <TableCell className="text-right">$100.00</TableCell>
                  <TableCell>
                    <Badge variant="outline">Ожидает</Badge>
                  </TableCell>
                </TableRow>
                <TableRow variant={variant}>
                  <TableCell className="font-medium">Мария Сидорова</TableCell>
                  <TableCell>example@gmail.com</TableCell>
                  <TableCell className="text-right">$125.00</TableCell>
                  <TableCell>
                    <Badge variant="secondary">Обрабатывается</Badge>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        ),
      )}
    </div>
  ),
};

// С размерами
export const Sizes: Story = {
  render: args => (
    <div className="space-y-8">
      {(['sm', 'md', 'lg'] as const).map(size => (
        <div key={size}>
          <h3 className="text-lg font-semibold mb-4 capitalize">{size}</h3>
          <Table {...args} size={size}>
            <TableHeader size={size}>
              <TableRow size={size}>
                <TableHead>Клиент</TableHead>
                <TableHead>Email</TableHead>
                <TableHead className="text-right">Сумма</TableHead>
                <TableHead>Статус</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow size={size}>
                <TableCell className="font-medium">Иван Петров</TableCell>
                <TableCell>m@example.com</TableCell>
                <TableCell className="text-right">$100.00</TableCell>
                <TableCell>
                  <Badge variant="outline">Ожидает</Badge>
                </TableCell>
              </TableRow>
              <TableRow size={size}>
                <TableCell className="font-medium">Мария Сидорова</TableCell>
                <TableCell>example@gmail.com</TableCell>
                <TableCell className="text-right">$125.00</TableCell>
                <TableCell>
                  <Badge variant="secondary">Обрабатывается</Badge>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      ))}
    </div>
  ),
};

// С выбором строк
export const WithSelection: Story = {
  render: args => {
    const [selectedRows, setSelectedRows] = React.useState<
      Record<string, boolean>
    >({});

    const toggleRow = (id: string) => {
      setSelectedRows(prev => ({
        ...prev,
        [id]: !prev[id],
      }));
    };

    const toggleAll = () => {
      const allSelected =
        Object.keys(selectedRows).length === 3 &&
        Object.values(selectedRows).every(Boolean);
      if (allSelected) {
        setSelectedRows({});
      } else {
        setSelectedRows({
          '1': true,
          '2': true,
          '3': true,
        });
      }
    };

    return (
      <Table {...args}>
        <TableCaption>Список пользователей с выбором</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>
              <input
                type="checkbox"
                checked={
                  Object.keys(selectedRows).length === 3 &&
                  Object.values(selectedRows).every(Boolean)
                }
                onChange={toggleAll}
                className="rounded border-gray-300"
              />
            </TableHead>
            <TableHead>Имя</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Роль</TableHead>
            <TableHead>Статус</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[
            {
              id: '1',
              name: 'Иван Петров',
              email: 'ivan@example.com',
              role: 'Администратор',
              status: 'Активен',
            },
            {
              id: '2',
              name: 'Мария Сидорова',
              email: 'maria@example.com',
              role: 'Пользователь',
              status: 'Активен',
            },
            {
              id: '3',
              name: 'Алексей Козлов',
              email: 'alex@example.com',
              role: 'Модератор',
              status: 'Неактивен',
            },
          ].map(user => (
            <TableRow
              key={user.id}
              data-state={selectedRows[user.id] ? 'selected' : undefined}
            >
              <TableCell>
                <input
                  type="checkbox"
                  checked={selectedRows[user.id] || false}
                  onChange={() => toggleRow(user.id)}
                  className="rounded border-gray-300"
                />
              </TableCell>
              <TableCell className="font-medium">{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>
                <Badge
                  variant={user.status === 'Активен' ? 'default' : 'outline'}
                >
                  {user.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  },
};

// С заголовком и подвалом
export const WithCaptionAndFooter: Story = {
  render: args => (
    <Table {...args}>
      <TableCaption>Детальный отчет по продажам за Q1 2024</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Месяц</TableHead>
          <TableHead>Продажи</TableHead>
          <TableHead>Возвраты</TableHead>
          <TableHead className="text-right">Чистая прибыль</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">Январь</TableCell>
          <TableCell>$12,000</TableCell>
          <TableCell>$800</TableCell>
          <TableCell className="text-right">$11,200</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Февраль</TableCell>
          <TableCell>$15,000</TableCell>
          <TableCell>$1,200</TableCell>
          <TableCell className="text-right">$13,800</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Март</TableCell>
          <TableCell>$18,000</TableCell>
          <TableCell>$900</TableCell>
          <TableCell className="text-right">$17,100</TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell className="font-medium">Итого за Q1</TableCell>
          <TableCell className="font-medium">$45,000</TableCell>
          <TableCell className="font-medium">$2,900</TableCell>
          <TableCell className="text-right font-medium">$42,100</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
};

// Компактная таблица
export const Compact: Story = {
  render: args => (
    <Table {...args} size="sm">
      <TableHeader size="sm">
        <TableRow size="sm">
          <TableHead>ID</TableHead>
          <TableHead>Название</TableHead>
          <TableHead>Категория</TableHead>
          <TableHead className="text-right">Цена</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {[
          {
            id: '001',
            name: 'Товар A',
            category: 'Электроника',
            price: '$299',
          },
          { id: '002', name: 'Товар B', category: 'Одежда', price: '$89' },
          { id: '003', name: 'Товар C', category: 'Книги', price: '$24' },
          { id: '004', name: 'Товар D', category: 'Спорт', price: '$156' },
          {
            id: '005',
            name: 'Товар E',
            category: 'Электроника',
            price: '$445',
          },
        ].map(item => (
          <TableRow key={item.id} size="sm">
            <TableCell className="font-mono text-xs">{item.id}</TableCell>
            <TableCell className="font-medium">{item.name}</TableCell>
            <TableCell>{item.category}</TableCell>
            <TableCell className="text-right">{item.price}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

// Таблица с действиями
export const WithActions: Story = {
  render: args => (
    <Table {...args}>
      <TableCaption>Управление контентом</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Заголовок</TableHead>
          <TableHead>Автор</TableHead>
          <TableHead>Дата публикации</TableHead>
          <TableHead>Статус</TableHead>
          <TableHead className="text-right">Действия</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {[
          {
            id: '1',
            title: 'Как создать React приложение',
            author: 'Иван Петров',
            date: '2024-01-15',
            status: 'Опубликовано',
          },
          {
            id: '2',
            title: 'Основы TypeScript',
            author: 'Мария Сидорова',
            date: '2024-01-14',
            status: 'Черновик',
          },
          {
            id: '3',
            title: 'CSS Grid Layout',
            author: 'Алексей Козлов',
            date: '2024-01-13',
            status: 'На модерации',
          },
        ].map(post => (
          <TableRow key={post.id}>
            <TableCell className="font-medium">{post.title}</TableCell>
            <TableCell>{post.author}</TableCell>
            <TableCell>{post.date}</TableCell>
            <TableCell>
              <Badge
                variant={
                  post.status === 'Опубликовано'
                    ? 'default'
                    : post.status === 'Черновик'
                      ? 'outline'
                      : 'secondary'
                }
              >
                {post.status}
              </Badge>
            </TableCell>
            <TableCell className="text-right">
              <div className="flex justify-end space-x-2">
                <Button variant="ghost" size="sm">
                  <Eye className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Edit className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

// С поиском
export const WithSearch: Story = {
  render: args => {
    const [searchTerm, setSearchTerm] = React.useState('');

    const data = [
      {
        id: '1',
        name: 'Иван Петров',
        email: 'ivan@example.com',
        role: 'Администратор',
        status: 'Активен',
      },
      {
        id: '2',
        name: 'Мария Сидорова',
        email: 'maria@example.com',
        role: 'Пользователь',
        status: 'Активен',
      },
      {
        id: '3',
        name: 'Алексей Козлов',
        email: 'alex@example.com',
        role: 'Модератор',
        status: 'Неактивен',
      },
      {
        id: '4',
        name: 'Елена Волкова',
        email: 'elena@example.com',
        role: 'Пользователь',
        status: 'Активен',
      },
      {
        id: '5',
        name: 'Дмитрий Соколов',
        email: 'dmitry@example.com',
        role: 'Администратор',
        status: 'Неактивен',
      },
    ];

    const filteredData = data.filter(
      item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.role.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    return (
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Поиск по имени, email или роли..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="pl-8"
            />
          </div>
          <Badge variant="secondary">Найдено: {filteredData.length}</Badge>
        </div>

        <Table {...args}>
          <TableCaption>Список пользователей с поиском</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Имя</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Роль</TableHead>
              <TableHead>Статус</TableHead>
              <TableHead className="text-right">Действия</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData.length > 0 ? (
              filteredData.map(user => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        user.status === 'Активен' ? 'default' : 'outline'
                      }
                    >
                      {user.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end space-x-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="h-24 text-center">
                  Ничего не найдено
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    );
  },
};

// С фильтрами
export const WithFilters: Story = {
  render: args => {
    const [roleFilter, setRoleFilter] = React.useState('all');
    const [statusFilter, setStatusFilter] = React.useState('all');

    const data = [
      {
        id: '1',
        name: 'Иван Петров',
        email: 'ivan@example.com',
        role: 'Администратор',
        status: 'Активен',
      },
      {
        id: '2',
        name: 'Мария Сидорова',
        email: 'maria@example.com',
        role: 'Пользователь',
        status: 'Активен',
      },
      {
        id: '3',
        name: 'Алексей Козлов',
        email: 'alex@example.com',
        role: 'Модератор',
        status: 'Неактивен',
      },
      {
        id: '4',
        name: 'Елена Волкова',
        email: 'elena@example.com',
        role: 'Пользователь',
        status: 'Активен',
      },
      {
        id: '5',
        name: 'Дмитрий Соколов',
        email: 'dmitry@example.com',
        role: 'Администратор',
        status: 'Неактивен',
      },
      {
        id: '6',
        name: 'Анна Морозова',
        email: 'anna@example.com',
        role: 'Модератор',
        status: 'Активен',
      },
    ];

    const filteredData = data.filter(item => {
      const roleMatch = roleFilter === 'all' || item.role === roleFilter;
      const statusMatch =
        statusFilter === 'all' || item.status === statusFilter;
      return roleMatch && statusMatch;
    });

    return (
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium">Роль:</span>
            <Select value={roleFilter} onValueChange={setRoleFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все роли</SelectItem>
                <SelectItem value="Администратор">Администратор</SelectItem>
                <SelectItem value="Модератор">Модератор</SelectItem>
                <SelectItem value="Пользователь">Пользователь</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium">Статус:</span>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все статусы</SelectItem>
                <SelectItem value="Активен">Активен</SelectItem>
                <SelectItem value="Неактивен">Неактивен</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Badge variant="secondary">
            Показано: {filteredData.length} из {data.length}
          </Badge>
        </div>

        <Table {...args}>
          <TableCaption>Список пользователей с фильтрами</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Имя</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Роль</TableHead>
              <TableHead>Статус</TableHead>
              <TableHead className="text-right">Действия</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData.map(user => (
              <TableRow key={user.id}>
                <TableCell className="font-medium">{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>
                  <Badge
                    variant={user.status === 'Активен' ? 'default' : 'outline'}
                  >
                    {user.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end space-x-2">
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  },
};

// С сортировкой
export const WithSorting: Story = {
  render: args => {
    const [sortField, setSortField] = React.useState<
      'name' | 'email' | 'role' | 'status'
    >('name');
    const [sortDirection, setSortDirection] = React.useState<'asc' | 'desc'>(
      'asc',
    );

    const data = [
      {
        id: '1',
        name: 'Иван Петров',
        email: 'ivan@example.com',
        role: 'Администратор',
        status: 'Активен',
      },
      {
        id: '2',
        name: 'Мария Сидорова',
        email: 'maria@example.com',
        role: 'Пользователь',
        status: 'Активен',
      },
      {
        id: '3',
        name: 'Алексей Козлов',
        email: 'alex@example.com',
        role: 'Модератор',
        status: 'Неактивен',
      },
      {
        id: '4',
        name: 'Елена Волкова',
        email: 'elena@example.com',
        role: 'Пользователь',
        status: 'Активен',
      },
      {
        id: '5',
        name: 'Дмитрий Соколов',
        email: 'dmitry@example.com',
        role: 'Администратор',
        status: 'Неактивен',
      },
    ];

    const sortedData = [...data].sort((a, b) => {
      const aValue = a[sortField].toLowerCase();
      const bValue = b[sortField].toLowerCase();

      if (sortDirection === 'asc') {
        return aValue.localeCompare(bValue);
      } else {
        return bValue.localeCompare(aValue);
      }
    });

    const handleSort = (field: typeof sortField) => {
      if (sortField === field) {
        setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
      } else {
        setSortField(field);
        setSortDirection('asc');
      }
    };

    return (
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <span className="text-sm text-muted-foreground">
            Сортировка: {sortField} (
            {sortDirection === 'asc' ? 'по возрастанию' : 'по убыванию'})
          </span>
        </div>

        <Table {...args}>
          <TableCaption>Список пользователей с сортировкой</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>
                <Button
                  variant="ghost"
                  onClick={() => handleSort('name')}
                  className="h-auto p-0 font-medium"
                >
                  Имя
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>
                <Button
                  variant="ghost"
                  onClick={() => handleSort('email')}
                  className="h-auto p-0 font-medium"
                >
                  Email
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>
                <Button
                  variant="ghost"
                  onClick={() => handleSort('role')}
                  className="h-auto p-0 font-medium"
                >
                  Роль
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>
                <Button
                  variant="ghost"
                  onClick={() => handleSort('status')}
                  className="h-auto p-0 font-medium"
                >
                  Статус
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead className="text-right">Действия</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedData.map(user => (
              <TableRow key={user.id}>
                <TableCell className="font-medium">{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>
                  <Badge
                    variant={user.status === 'Активен' ? 'default' : 'outline'}
                  >
                    {user.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end space-x-2">
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  },
};

// С пагинацией
export const WithPagination: Story = {
  render: args => {
    const [currentPage, setCurrentPage] = React.useState(1);
    const [pageSize, setPageSize] = React.useState(3);

    const data = [
      {
        id: '1',
        name: 'Иван Петров',
        email: 'ivan@example.com',
        role: 'Администратор',
        status: 'Активен',
      },
      {
        id: '2',
        name: 'Мария Сидорова',
        email: 'maria@example.com',
        role: 'Пользователь',
        status: 'Активен',
      },
      {
        id: '3',
        name: 'Алексей Козлов',
        email: 'alex@example.com',
        role: 'Модератор',
        status: 'Неактивен',
      },
      {
        id: '4',
        name: 'Елена Волкова',
        email: 'elena@example.com',
        role: 'Пользователь',
        status: 'Активен',
      },
      {
        id: '5',
        name: 'Дмитрий Соколов',
        email: 'dmitry@example.com',
        role: 'Администратор',
        status: 'Неактивен',
      },
      {
        id: '6',
        name: 'Анна Морозова',
        email: 'anna@example.com',
        role: 'Модератор',
        status: 'Активен',
      },
      {
        id: '7',
        name: 'Сергей Иванов',
        email: 'sergey@example.com',
        role: 'Пользователь',
        status: 'Активен',
      },
      {
        id: '8',
        name: 'Ольга Петрова',
        email: 'olga@example.com',
        role: 'Пользователь',
        status: 'Неактивен',
      },
    ];

    const totalPages = Math.ceil(data.length / pageSize);
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const currentData = data.slice(startIndex, endIndex);

    const goToPage = (page: number) => {
      setCurrentPage(Math.max(1, Math.min(page, totalPages)));
    };

    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-muted-foreground">
              Записей на странице:
            </span>
            <Select
              value={pageSize.toString()}
              onValueChange={value => {
                setPageSize(Number(value));
                setCurrentPage(1);
              }}
            >
              <SelectTrigger className="w-[80px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
                <SelectItem value="5">5</SelectItem>
                <SelectItem value="10">10</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="text-sm text-muted-foreground">
            Показано {startIndex + 1}-{Math.min(endIndex, data.length)} из{' '}
            {data.length} записей
          </div>
        </div>

        <Table {...args}>
          <TableCaption>Список пользователей с пагинацией</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Имя</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Роль</TableHead>
              <TableHead>Статус</TableHead>
              <TableHead className="text-right">Действия</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentData.map(user => (
              <TableRow key={user.id}>
                <TableCell className="font-medium">{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>
                  <Badge
                    variant={user.status === 'Активен' ? 'default' : 'outline'}
                  >
                    {user.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end space-x-2">
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            Страница {currentPage} из {totalPages}
          </div>

          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => goToPage(1)}
              disabled={currentPage === 1}
            >
              <ChevronsLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <Button
                key={page}
                variant={currentPage === page ? 'default' : 'outline'}
                size="sm"
                onClick={() => goToPage(page)}
                className="w-8 h-8 p-0"
              >
                {page}
              </Button>
            ))}

            <Button
              variant="outline"
              size="sm"
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => goToPage(totalPages)}
              disabled={currentPage === totalPages}
            >
              <ChevronsRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    );
  },
};

// Комбинированный пример
export const CombinedFeatures: Story = {
  render: args => {
    const [searchTerm, setSearchTerm] = React.useState('');
    const [roleFilter, setRoleFilter] = React.useState('all');
    const [sortField, setSortField] = React.useState<
      'name' | 'email' | 'role' | 'status'
    >('name');
    const [sortDirection, setSortDirection] = React.useState<'asc' | 'desc'>(
      'asc',
    );
    const [currentPage, setCurrentPage] = React.useState(1);
    const [pageSize, setPageSize] = React.useState(3);

    const data = [
      {
        id: '1',
        name: 'Иван Петров',
        email: 'ivan@example.com',
        role: 'Администратор',
        status: 'Активен',
      },
      {
        id: '2',
        name: 'Мария Сидорова',
        email: 'maria@example.com',
        role: 'Пользователь',
        status: 'Активен',
      },
      {
        id: '3',
        name: 'Алексей Козлов',
        email: 'alex@example.com',
        role: 'Модератор',
        status: 'Неактивен',
      },
      {
        id: '4',
        name: 'Елена Волкова',
        email: 'elena@example.com',
        role: 'Пользователь',
        status: 'Активен',
      },
      {
        id: '5',
        name: 'Дмитрий Соколов',
        email: 'dmitry@example.com',
        role: 'Администратор',
        status: 'Неактивен',
      },
      {
        id: '6',
        name: 'Анна Морозова',
        email: 'anna@example.com',
        role: 'Модератор',
        status: 'Активен',
      },
      {
        id: '7',
        name: 'Сергей Иванов',
        email: 'sergey@example.com',
        role: 'Пользователь',
        status: 'Активен',
      },
      {
        id: '8',
        name: 'Ольга Петрова',
        email: 'olga@example.com',
        role: 'Пользователь',
        status: 'Неактивен',
      },
    ];

    // Фильтрация
    let filteredData = data.filter(item => {
      const searchMatch =
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.role.toLowerCase().includes(searchTerm.toLowerCase());
      const roleMatch = roleFilter === 'all' || item.role === roleFilter;
      return searchMatch && roleMatch;
    });

    // Сортировка
    filteredData = [...filteredData].sort((a, b) => {
      const aValue = a[sortField].toLowerCase();
      const bValue = b[sortField].toLowerCase();

      if (sortDirection === 'asc') {
        return aValue.localeCompare(bValue);
      } else {
        return bValue.localeCompare(aValue);
      }
    });

    // Пагинация
    const totalPages = Math.ceil(filteredData.length / pageSize);
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const currentData = filteredData.slice(startIndex, endIndex);

    const handleSort = (field: typeof sortField) => {
      if (sortField === field) {
        setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
      } else {
        setSortField(field);
        setSortDirection('asc');
      }
      setCurrentPage(1);
    };

    const goToPage = (page: number) => {
      setCurrentPage(Math.max(1, Math.min(page, totalPages)));
    };

    // Сброс пагинации при изменении фильтров
    React.useEffect(() => {
      setCurrentPage(1);
    }, [searchTerm, roleFilter]);

    return (
      <div className="space-y-4">
        {/* Поиск и фильтры */}
        <div className="flex items-center space-x-4">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Поиск по имени, email или роли..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="pl-8"
            />
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium">Роль:</span>
            <Select value={roleFilter} onValueChange={setRoleFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все роли</SelectItem>
                <SelectItem value="Администратор">Администратор</SelectItem>
                <SelectItem value="Модератор">Модератор</SelectItem>
                <SelectItem value="Пользователь">Пользователь</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Badge variant="secondary">Найдено: {filteredData.length}</Badge>
        </div>

        {/* Настройки пагинации */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-muted-foreground">
              Записей на странице:
            </span>
            <Select
              value={pageSize.toString()}
              onValueChange={value => {
                setPageSize(Number(value));
                setCurrentPage(1);
              }}
            >
              <SelectTrigger className="w-[80px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
                <SelectItem value="5">5</SelectItem>
                <SelectItem value="10">10</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="text-sm text-muted-foreground">
            Показано {startIndex + 1}-{Math.min(endIndex, filteredData.length)}{' '}
            из {filteredData.length} записей
          </div>
        </div>

        {/* Таблица */}
        <Table {...args}>
          <TableCaption>
            Список пользователей с полным функционалом
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>
                <Button
                  variant="ghost"
                  onClick={() => handleSort('name')}
                  className="h-auto p-0 font-medium"
                >
                  Имя
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>
                <Button
                  variant="ghost"
                  onClick={() => handleSort('email')}
                  className="h-auto p-0 font-medium"
                >
                  Email
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>
                <Button
                  variant="ghost"
                  onClick={() => handleSort('role')}
                  className="h-auto p-0 font-medium"
                >
                  Роль
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>
                <Button
                  variant="ghost"
                  onClick={() => handleSort('status')}
                  className="h-auto p-0 font-medium"
                >
                  Статус
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead className="text-right">Действия</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentData.length > 0 ? (
              currentData.map(user => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        user.status === 'Активен' ? 'default' : 'outline'
                      }
                    >
                      {user.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end space-x-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="h-24 text-center">
                  Ничего не найдено
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>

        {/* Пагинация */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              Страница {currentPage} из {totalPages}
            </div>

            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => goToPage(1)}
                disabled={currentPage === 1}
              >
                <ChevronsLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <Button
                  key={page}
                  variant={currentPage === page ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => goToPage(page)}
                  className="w-8 h-8 p-0"
                >
                  {page}
                </Button>
              ))}

              <Button
                variant="outline"
                size="sm"
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => goToPage(totalPages)}
                disabled={currentPage === totalPages}
              >
                <ChevronsRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </div>
    );
  },
};
