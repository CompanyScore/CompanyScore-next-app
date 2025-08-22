import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import * as React from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Info,
  HelpCircle,
  Star,
  Heart,
  Download,
  Edit,
  Trash2,
  Eye,
  Share,
  Copy,
  Save,
  Bookmark,
  Calendar,
  User,
  Mail,
  Phone,
} from 'lucide-react';

const meta: Meta<typeof Tooltip> = {
  title: 'UI/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    Story => (
      <TooltipProvider>
        <Story />
      </TooltipProvider>
    ),
  ],
  argTypes: {
    delayDuration: {
      control: 'number',
      description: 'Задержка перед показом тултипа (мс)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Базовый пример
export const Default: Story = {
  render: args => (
    <Tooltip {...args}>
      <TooltipTrigger asChild>
        <Button variant="outline">Наведите на меня</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Это базовый тултип</p>
      </TooltipContent>
    </Tooltip>
  ),
  args: {},
};

// С иконкой
export const WithIcon: Story = {
  render: args => (
    <Tooltip {...args}>
      <TooltipTrigger asChild>
        <Button variant="outline" size="xs">
          <Info className="h-4 w-4" />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Дополнительная информация</p>
      </TooltipContent>
    </Tooltip>
  ),
  args: {},
};

// Различные позиции
export const Positions: Story = {
  render: args => (
    <div className="grid grid-cols-3 gap-4">
      <Tooltip {...args}>
        <TooltipTrigger asChild>
          <Button variant="outline">Сверху</Button>
        </TooltipTrigger>
        <TooltipContent side="top">
          <p>Тултип сверху</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip {...args}>
        <TooltipTrigger asChild>
          <Button variant="outline">Справа</Button>
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>Тултип справа</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip {...args}>
        <TooltipTrigger asChild>
          <Button variant="outline">Снизу</Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <p>Тултип снизу</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip {...args}>
        <TooltipTrigger asChild>
          <Button variant="outline">Слева</Button>
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>Тултип слева</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
  args: {},
};

// С задержкой
export const WithDelay: Story = {
  render: args => (
    <div className="flex space-x-4">
      <Tooltip {...args} delayDuration={0}>
        <TooltipTrigger asChild>
          <Button variant="outline">Без задержки</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Показывается сразу</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip {...args} delayDuration={1000}>
        <TooltipTrigger asChild>
          <Button variant="outline">С задержкой</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Показывается через 1 секунду</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
  args: {},
};

// Длинный контент
export const LongContent: Story = {
  render: args => (
    <Tooltip {...args}>
      <TooltipTrigger asChild>
        <Button variant="outline">Подробная информация</Button>
      </TooltipTrigger>
      <TooltipContent className="max-w-xs">
        <p>
          Это более длинный тултип с подробным описанием функциональности. Он
          может содержать несколько строк текста и автоматически переносится по
          ширине контейнера.
        </p>
      </TooltipContent>
    </Tooltip>
  ),
  args: {},
};

// С форматированным контентом
export const FormattedContent: Story = {
  render: args => (
    <div className="flex space-x-4">
      <Tooltip {...args}>
        <TooltipTrigger asChild>
          <Button variant="outline">
            <Star className="h-4 w-4 mr-2" />
            Рейтинг
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <div className="space-y-1">
            <p className="font-semibold">Рейтинг товара</p>
            <p className="text-sm">⭐⭐⭐⭐⭐ 4.8/5</p>
            <p className="text-xs text-muted-foreground">
              Основано на 1,234 отзывах
            </p>
          </div>
        </TooltipContent>
      </Tooltip>

      <Tooltip {...args}>
        <TooltipTrigger asChild>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Скачать
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <div className="space-y-1">
            <p className="font-semibold">Скачать файл</p>
            <p className="text-sm">Размер: 2.4 MB</p>
            <p className="text-xs text-muted-foreground">PDF документ</p>
          </div>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
  args: {},
};

// Панель инструментов
export const Toolbar: Story = {
  render: args => (
    <div className="flex items-center space-x-1 p-2 border rounded-md">
      <Tooltip {...args}>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="sm">
            <Save className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Сохранить (Ctrl+S)</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip {...args}>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="sm">
            <Copy className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Копировать (Ctrl+C)</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip {...args}>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="sm">
            <Edit className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Редактировать</p>
        </TooltipContent>
      </Tooltip>

      <div className="w-px h-6 bg-border mx-1" />

      <Tooltip {...args}>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="sm">
            <Share className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Поделиться</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip {...args}>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="sm">
            <Trash2 className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Удалить (Delete)</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
  args: {},
};

// Карточка пользователя
export const UserCard: Story = {
  render: args => (
    <div className="flex items-center space-x-4">
      <Tooltip {...args}>
        <TooltipTrigger asChild>
          <div className="flex items-center space-x-2 p-2 border rounded-md cursor-pointer hover:bg-muted">
            <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
              <User className="h-4 w-4" />
            </div>
            <span className="text-sm">Иван Иванов</span>
          </div>
        </TooltipTrigger>
        <TooltipContent className="max-w-xs">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                <User className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold">Иван Иванов</p>
                <p className="text-xs text-muted-foreground">
                  Старший разработчик
                </p>
              </div>
            </div>
            <div className="space-y-1 text-xs">
              <div className="flex items-center space-x-2">
                <Mail className="h-3 w-3" />
                <span>ivan@example.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-3 w-3" />
                <span>+7 (999) 123-45-67</span>
              </div>
            </div>
          </div>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
  args: {},
};

// Статистика
export const Statistics: Story = {
  render: args => (
    <div className="grid grid-cols-4 gap-4">
      <Tooltip {...args}>
        <TooltipTrigger asChild>
          <div className="p-4 border rounded-md cursor-pointer hover:bg-muted">
            <div className="text-2xl font-bold">1,234</div>
            <div className="text-sm text-muted-foreground">Пользователи</div>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <div className="space-y-1">
            <p className="font-semibold">Всего пользователей</p>
            <p className="text-sm">Активных: 1,089</p>
            <p className="text-sm">Неактивных: 145</p>
            <p className="text-xs text-muted-foreground">
              За последние 30 дней: +123
            </p>
          </div>
        </TooltipContent>
      </Tooltip>

      <Tooltip {...args}>
        <TooltipTrigger asChild>
          <div className="p-4 border rounded-md cursor-pointer hover:bg-muted">
            <div className="text-2xl font-bold">567</div>
            <div className="text-sm text-muted-foreground">Заказы</div>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <div className="space-y-1">
            <p className="font-semibold">Заказы за месяц</p>
            <p className="text-sm">Выполнено: 489</p>
            <p className="text-sm">В обработке: 78</p>
            <p className="text-xs text-muted-foreground">Средний чек: 2,450₽</p>
          </div>
        </TooltipContent>
      </Tooltip>

      <Tooltip {...args}>
        <TooltipTrigger asChild>
          <div className="p-4 border rounded-md cursor-pointer hover:bg-muted">
            <div className="text-2xl font-bold">89%</div>
            <div className="text-sm text-muted-foreground">Конверсия</div>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <div className="space-y-1">
            <p className="font-semibold">Конверсия продаж</p>
            <p className="text-sm">Посетители: 12,345</p>
            <p className="text-sm">Покупки: 1,097</p>
            <p className="text-xs text-muted-foreground">
              Рост на 5% за неделю
            </p>
          </div>
        </TooltipContent>
      </Tooltip>

      <Tooltip {...args}>
        <TooltipTrigger asChild>
          <div className="p-4 border rounded-md cursor-pointer hover:bg-muted">
            <div className="text-2xl font-bold">4.8</div>
            <div className="text-sm text-muted-foreground">Рейтинг</div>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <div className="space-y-1">
            <p className="font-semibold">Средний рейтинг</p>
            <p className="text-sm">⭐⭐⭐⭐⭐ 4.8/5</p>
            <p className="text-sm">Отзывов: 2,456</p>
            <p className="text-xs text-muted-foreground">98% положительных</p>
          </div>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
  args: {},
};

// Действия с файлами
export const FileActions: Story = {
  render: args => (
    <div className="space-y-4">
      <h3 className="text-sm font-medium">Действия с файлами</h3>
      <div className="space-y-2">
        {[
          { name: 'Document.pdf', size: '2.4 MB', type: 'PDF' },
          { name: 'Spreadsheet.xlsx', size: '1.2 MB', type: 'Excel' },
          { name: 'Presentation.pptx', size: '5.8 MB', type: 'PowerPoint' },
        ].map((file, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-2 border rounded"
          >
            <div className="flex-1">
              <p className="text-sm font-medium">{file.name}</p>
              <p className="text-xs text-muted-foreground">
                {file.size} • {file.type}
              </p>
            </div>
            <div className="flex items-center space-x-1">
              <Tooltip {...args}>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Просмотреть файл</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip {...args}>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Скачать файл</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip {...args}>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <Share className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Поделиться файлом</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
  args: {},
};

// Помощник
export const HelpTooltips: Story = {
  render: args => (
    <div className="space-y-4 max-w-md">
      <h3 className="text-sm font-medium">Форма с подсказками</h3>
      <div className="space-y-3">
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <label className="text-sm font-medium">Email</label>
            <Tooltip {...args}>
              <TooltipTrigger asChild>
                <HelpCircle className="h-4 w-4 text-muted-foreground cursor-help" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Введите действующий email адрес для регистрации</p>
              </TooltipContent>
            </Tooltip>
          </div>
          <input
            type="email"
            className="w-full p-2 border rounded"
            placeholder="your@email.com"
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <label className="text-sm font-medium">Пароль</label>
            <Tooltip {...args}>
              <TooltipTrigger asChild>
                <HelpCircle className="h-4 w-4 text-muted-foreground cursor-help" />
              </TooltipTrigger>
              <TooltipContent className="max-w-xs">
                <div className="space-y-1">
                  <p className="font-semibold">Требования к паролю:</p>
                  <ul className="text-sm space-y-1">
                    <li>• Минимум 8 символов</li>
                    <li>• Одна заглавная буква</li>
                    <li>• Одна цифра</li>
                    <li>• Один специальный символ</li>
                  </ul>
                </div>
              </TooltipContent>
            </Tooltip>
          </div>
          <input
            type="password"
            className="w-full p-2 border rounded"
            placeholder="Введите пароль"
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <label className="text-sm font-medium">Часовой пояс</label>
            <Tooltip {...args}>
              <TooltipTrigger asChild>
                <HelpCircle className="h-4 w-4 text-muted-foreground cursor-help" />
              </TooltipTrigger>
              <TooltipContent>
                <p>
                  Выберите ваш часовой пояс для корректного отображения времени
                </p>
              </TooltipContent>
            </Tooltip>
          </div>
          <select className="w-full p-2 border rounded">
            <option>UTC+3 (Москва)</option>
            <option>UTC+0 (Лондон)</option>
            <option>UTC-5 (Нью-Йорк)</option>
          </select>
        </div>
      </div>
    </div>
  ),
  args: {},
};

// Интерактивный пример
export const InteractiveExample: Story = {
  render: args => {
    const [likes, setLikes] = React.useState(42);
    const [bookmarked, setBookmarked] = React.useState(false);
    const [shared, setShared] = React.useState(false);

    return (
      <div className="space-y-6">
        <h3 className="text-sm font-medium">Интерактивная карточка поста</h3>

        <div className="max-w-md p-4 border rounded-lg space-y-4">
          <div className="space-y-2">
            <h4 className="font-semibold">Заголовок интересного поста</h4>
            <p className="text-sm text-muted-foreground">
              Это содержимое поста с интересной информацией, которая может быть
              полезна читателям.
            </p>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Tooltip {...args}>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setLikes(likes + 1)}
                  >
                    <Heart
                      className={`h-4 w-4 mr-1 ${likes > 42 ? 'fill-red-500 text-red-500' : ''}`}
                    />
                    {likes}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{likes > 42 ? 'Вы поставили лайк!' : 'Поставить лайк'}</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip {...args}>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setBookmarked(!bookmarked)}
                  >
                    <Bookmark
                      className={`h-4 w-4 ${bookmarked ? 'fill-blue-500 text-blue-500' : ''}`}
                    />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>
                    {bookmarked ? 'Удалить из закладок' : 'Добавить в закладки'}
                  </p>
                </TooltipContent>
              </Tooltip>

              <Tooltip {...args}>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShared(!shared)}
                  >
                    <Share
                      className={`h-4 w-4 ${shared ? 'text-green-500' : ''}`}
                    />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{shared ? 'Поделились!' : 'Поделиться постом'}</p>
                </TooltipContent>
              </Tooltip>
            </div>

            <Tooltip {...args}>
              <TooltipTrigger asChild>
                <Badge variant="secondary">
                  <Calendar className="h-3 w-3 mr-1" />
                  Сегодня
                </Badge>
              </TooltipTrigger>
              <TooltipContent>
                <div className="space-y-1">
                  <p className="font-semibold">Опубликовано</p>
                  <p className="text-sm">15 декабря 2024</p>
                  <p className="text-xs text-muted-foreground">14:30 МСК</p>
                </div>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>

        <div className="text-xs text-muted-foreground">
          Состояние: Лайков {likes},
          {bookmarked ? ' в закладках' : ' не в закладках'},
          {shared ? ' поделились' : ' не поделились'}
        </div>
      </div>
    );
  },
  args: {},
};
