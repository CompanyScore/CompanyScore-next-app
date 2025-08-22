import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { ColumnDef } from '@tanstack/react-table';
import {
  DataTable,
  createSortableColumn,
  createSelectColumn,
  createActionsColumn,
  createStatusColumn,
} from './data-table';
import { Badge } from './badge';
import { Button } from './button';
import { Edit, Trash2, Eye, Copy, Download } from 'lucide-react';

// Типы данных
interface Payment {
  id: string;
  amount: number;
  status: 'pending' | 'processing' | 'success' | 'failed';
  email: string;
  date: string;
  customer: string;
}

interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'moderator';
  status: 'active' | 'inactive' | 'pending';
  lastLogin: string;
}

// Моковые данные
const payments: Payment[] = [
  {
    id: '728ed52f',
    amount: 100,
    status: 'pending',
    email: 'm@example.com',
    date: '2024-01-01',
    customer: 'Иван Петров',
  },
  {
    id: '489e1d42',
    amount: 125,
    status: 'processing',
    email: 'example@gmail.com',
    date: '2024-01-02',
    customer: 'Мария Сидорова',
  },
  {
    id: '573e1d42',
    amount: 250,
    status: 'success',
    email: 'test@example.com',
    date: '2024-01-03',
    customer: 'Алексей Козлов',
  },
  {
    id: '784e1d42',
    amount: 75,
    status: 'failed',
    email: 'user@example.com',
    date: '2024-01-04',
    customer: 'Елена Воробьева',
  },
  {
    id: '895e1d42',
    amount: 300,
    status: 'success',
    email: 'admin@example.com',
    date: '2024-01-05',
    customer: 'Дмитрий Новиков',
  },
];

const users: User[] = [
  {
    id: '1',
    name: 'Иван Петров',
    email: 'ivan@example.com',
    role: 'admin',
    status: 'active',
    lastLogin: '2024-01-01 10:30',
  },
  {
    id: '2',
    name: 'Мария Сидорова',
    email: 'maria@example.com',
    role: 'user',
    status: 'active',
    lastLogin: '2024-01-02 14:20',
  },
  {
    id: '3',
    name: 'Алексей Козлов',
    email: 'alex@example.com',
    role: 'moderator',
    status: 'inactive',
    lastLogin: '2024-01-01 09:15',
  },
  {
    id: '4',
    name: 'Елена Воробьева',
    email: 'elena@example.com',
    role: 'user',
    status: 'pending',
    lastLogin: '2024-01-03 16:45',
  },
  {
    id: '5',
    name: 'Дмитрий Новиков',
    email: 'dmitry@example.com',
    role: 'admin',
    status: 'active',
    lastLogin: '2024-01-02 11:30',
  },
];

// Колонки для платежей
const paymentColumns: ColumnDef<Payment>[] = [
  createSortableColumn<Payment>('customer', 'Клиент'),
  createSortableColumn<Payment>('email', 'Email'),
  createSortableColumn<Payment>('amount', 'Сумма', value => (
    <div className="text-right font-medium">${value.toLocaleString()}</div>
  )),
  createStatusColumn<Payment>('status', {
    pending: { label: 'Ожидает', variant: 'outline' },
    processing: { label: 'Обрабатывается', variant: 'secondary' },
    success: { label: 'Успешно', variant: 'default' },
    failed: { label: 'Ошибка', variant: 'destructive' },
  }),
  createSortableColumn<Payment>('date', 'Дата'),
  createActionsColumn<Payment>(row => [
    {
      label: 'Просмотреть',
      onClick: () => console.log('Просмотр', row.id),
      icon: <Eye className="h-4 w-4" />,
    },
    {
      label: 'Редактировать',
      onClick: () => console.log('Редактирование', row.id),
      icon: <Edit className="h-4 w-4" />,
    },
    {
      label: 'Копировать ID',
      onClick: () => navigator.clipboard.writeText(row.id),
      icon: <Copy className="h-4 w-4" />,
    },
    {
      label: 'Удалить',
      onClick: () => console.log('Удаление', row.id),
      icon: <Trash2 className="h-4 w-4" />,
    },
  ]),
];

// Колонки для пользователей
const userColumns: ColumnDef<User>[] = [
  createSelectColumn<User>(),
  createSortableColumn<User>('name', 'Имя'),
  createSortableColumn<User>('email', 'Email'),
  createStatusColumn<User>('role', {
    admin: { label: 'Администратор', variant: 'destructive' },
    moderator: { label: 'Модератор', variant: 'secondary' },
    user: { label: 'Пользователь', variant: 'default' },
  }),
  createStatusColumn<User>('status', {
    active: { label: 'Активен', variant: 'default' },
    inactive: { label: 'Неактивен', variant: 'outline' },
    pending: { label: 'Ожидает', variant: 'secondary' },
  }),
  createSortableColumn<User>('lastLogin', 'Последний вход'),
  createActionsColumn<User>(row => [
    {
      label: 'Просмотреть профиль',
      onClick: () => console.log('Профиль', row.id),
      icon: <Eye className="h-4 w-4" />,
    },
    {
      label: 'Редактировать',
      onClick: () => console.log('Редактирование', row.id),
      icon: <Edit className="h-4 w-4" />,
    },
    {
      label: 'Экспорт данных',
      onClick: () => console.log('Экспорт', row.id),
      icon: <Download className="h-4 w-4" />,
    },
  ]),
];

const meta: Meta<typeof DataTable> = {
  title: 'UI/DataTable',
  component: DataTable,
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
    searchable: { control: 'boolean' },
    filterable: { control: 'boolean' },
    sortable: { control: 'boolean' },
    pagination: { control: 'boolean' },
    selectable: { control: 'boolean' },
    serverSide: { control: 'boolean' },
    loading: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Базовый пример
export const Default: Story = {
  args: {
    columns: paymentColumns,
    data: payments,
    searchable: true,
    filterable: true,
    sortable: true,
    pagination: true,
    selectable: false,
    searchPlaceholder: 'Поиск по клиентам...',
    searchColumn: 'customer',
  },
};

// С выбором строк
export const WithSelection: Story = {
  args: {
    columns: userColumns,
    data: users,
    searchable: true,
    filterable: true,
    sortable: true,
    pagination: true,
    selectable: true,
    searchPlaceholder: 'Поиск по пользователям...',
    searchColumn: 'name',
  },
};

// С вариантами стилей
export const Variants: Story = {
  render: args => (
    <div className="space-y-8">
      {(['default', 'secondary', 'outline', 'ghost', 'brand'] as const).map(
        variant => (
          <div key={variant}>
            <h3 className="text-lg font-semibold mb-4 capitalize">{variant}</h3>
            <DataTable
              {...args}
              variant={variant}
              columns={paymentColumns}
              data={payments}
              searchable={false}
              filterable={false}
              pagination={false}
            />
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
          <DataTable
            {...args}
            size={size}
            columns={paymentColumns}
            data={payments}
            searchable={false}
            filterable={false}
            pagination={false}
          />
        </div>
      ))}
    </div>
  ),
};

// Только поиск
export const SearchOnly: Story = {
  args: {
    columns: paymentColumns,
    data: payments,
    searchable: true,
    filterable: false,
    sortable: false,
    pagination: false,
    selectable: false,
    searchPlaceholder: 'Поиск по клиентам...',
    searchColumn: 'customer',
  },
};

// Только сортировка
export const SortOnly: Story = {
  args: {
    columns: paymentColumns,
    data: payments,
    searchable: false,
    filterable: false,
    sortable: true,
    pagination: false,
    selectable: false,
  },
};

// Только пагинация
export const PaginationOnly: Story = {
  args: {
    columns: paymentColumns,
    data: payments,
    searchable: false,
    filterable: false,
    sortable: false,
    pagination: true,
    selectable: false,
    pageSize: 2,
  },
};

// Загрузка
export const Loading: Story = {
  args: {
    columns: paymentColumns,
    data: [],
    searchable: true,
    filterable: true,
    sortable: true,
    pagination: true,
    selectable: false,
    loading: true,
  },
};

// Пустые данные
export const Empty: Story = {
  args: {
    columns: paymentColumns,
    data: [],
    searchable: true,
    filterable: true,
    sortable: true,
    pagination: true,
    selectable: false,
  },
};

// Серверная сторона
export const ServerSide: Story = {
  render: args => {
    const [data] = React.useState(payments);
    const [loading, setLoading] = React.useState(false);
    const [totalCount] = React.useState(payments.length);

    const handleDataChange = React.useCallback((params: any) => {
      console.log('Server side params:', params);
      setLoading(true);

      // Имитация серверного запроса
      setTimeout(() => {
        setLoading(false);
        // Здесь был бы реальный API запрос
      }, 1000);
    }, []);

    return (
      <DataTable
        {...args}
        columns={paymentColumns}
        data={data}
        serverSide={true}
        loading={loading}
        totalCount={totalCount}
        onDataChange={handleDataChange}
      />
    );
  },
};

// Комплексный пример
export const ComplexExample: Story = {
  render: args => {
    const [selectedRows] = React.useState<Record<string, boolean>>({});

    const handleBulkAction = (action: string) => {
      const selectedIds = Object.keys(selectedRows).filter(
        id => selectedRows[id],
      );
      console.log(`${action} для:`, selectedIds);
    };

    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Управление пользователями</h2>
          <div className="flex items-center space-x-2">
            {Object.keys(selectedRows).filter(id => selectedRows[id]).length >
              0 && (
              <>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleBulkAction('Экспорт')}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Экспорт выбранных
                </Button>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => handleBulkAction('Удаление')}
                >
                  <Trash2 className="mr-2 h-4 w-4" />
                  Удалить выбранные
                </Button>
              </>
            )}
            <Button>
              <Edit className="mr-2 h-4 w-4" />
              Добавить пользователя
            </Button>
          </div>
        </div>

        <DataTable
          {...args}
          columns={userColumns}
          data={users}
          searchable={true}
          filterable={true}
          sortable={true}
          pagination={true}
          selectable={true}
          searchPlaceholder="Поиск по имени или email..."
          searchColumn="name"
          variant="outline"
        />
      </div>
    );
  },
};

// Интерактивный пример
export const InteractiveExample: Story = {
  render: args => {
    const [data, setData] = React.useState(payments);

    const handleDataChange = React.useCallback((params: any) => {
      console.log('Table params changed:', params);
    }, []);

    const handleAddPayment = () => {
      const newPayment: Payment = {
        id: Math.random().toString(36).substr(2, 9),
        amount: Math.floor(Math.random() * 1000) + 100,
        status: ['pending', 'processing', 'success', 'failed'][
          Math.floor(Math.random() * 4)
        ] as Payment['status'],
        email: `user${Math.floor(Math.random() * 1000)}@example.com`,
        date: new Date().toISOString().split('T')[0],
        customer: `Клиент ${Math.floor(Math.random() * 1000)}`,
      };
      setData(prev => [...prev, newPayment]);
    };

    const handleClearData = () => {
      setData([]);
    };

    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Button onClick={handleAddPayment}>Добавить платеж</Button>
            <Button variant="outline" onClick={handleClearData}>
              Очистить данные
            </Button>
          </div>
          <Badge variant="secondary">Всего записей: {data.length}</Badge>
        </div>

        <DataTable
          {...args}
          columns={paymentColumns}
          data={data}
          searchable={true}
          filterable={true}
          sortable={true}
          pagination={true}
          selectable={true}
          onDataChange={handleDataChange}
          variant="brand"
        />
      </div>
    );
  },
};
