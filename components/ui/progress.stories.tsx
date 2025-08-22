import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Progress } from './progress';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './card';
import { Button } from './button';
import {
  Upload,
  HardDrive,
  Battery,
  Cpu,
  MemoryStick,
  CheckCircle,
  AlertCircle,
  Clock,
  Target,
  Activity,
  Loader2,
} from 'lucide-react';

const meta: Meta<typeof Progress> = {
  title: 'UI/Progress',
  component: Progress,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
    variant: {
      control: { type: 'select' },
      options: [
        'default',
        'secondary',
        'outline',
        'success',
        'warning',
        'error',
        'info',
      ],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl'],
    },
    indicatorColor: {
      control: { type: 'color' },
    },
    backgroundColor: {
      control: { type: 'color' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Базовый пример
export const Default: Story = {
  args: {
    value: 33,
  },
};

// С вариантами
export const Variants: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Варианты</h3>
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>Default</span>
              <span>33%</span>
            </div>
            <Progress value={33} variant="default" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>Secondary</span>
              <span>45%</span>
            </div>
            <Progress value={45} variant="secondary" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>Outline</span>
              <span>67%</span>
            </div>
            <Progress value={67} variant="outline" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>Success</span>
              <span>89%</span>
            </div>
            <Progress value={89} variant="success" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>Warning</span>
              <span>56%</span>
            </div>
            <Progress value={56} variant="warning" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>Error</span>
              <span>23%</span>
            </div>
            <Progress value={23} variant="error" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>Info</span>
              <span>78%</span>
            </div>
            <Progress value={78} variant="info" />
          </div>
        </div>
      </div>
    </div>
  ),
};

// С размерами
export const Sizes: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Размеры</h3>
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>Small (sm)</span>
              <span>25%</span>
            </div>
            <Progress value={25} size="sm" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>Medium (md)</span>
              <span>50%</span>
            </div>
            <Progress value={50} size="md" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>Large (lg)</span>
              <span>75%</span>
            </div>
            <Progress value={75} size="lg" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>Extra Large (xl)</span>
              <span>90%</span>
            </div>
            <Progress value={90} size="xl" />
          </div>
        </div>
      </div>
    </div>
  ),
};

// С кастомными цветами
export const CustomColors: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Кастомные цвета</h3>
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>Градиент</span>
              <span>60%</span>
            </div>
            <Progress
              value={60}
              indicatorColor="linear-gradient(90deg, #ff6b6b, #4ecdc4)"
              backgroundColor="#f1f5f9"
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>Фиолетовый</span>
              <span>80%</span>
            </div>
            <Progress
              value={80}
              indicatorColor="#8b5cf6"
              backgroundColor="#f3f4f6"
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>Оранжевый</span>
              <span>40%</span>
            </div>
            <Progress
              value={40}
              indicatorColor="#f97316"
              backgroundColor="#fef3c7"
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>Розовый</span>
              <span>95%</span>
            </div>
            <Progress
              value={95}
              indicatorColor="#ec4899"
              backgroundColor="#fdf2f8"
            />
          </div>
        </div>
      </div>
    </div>
  ),
};

// С системной информацией
export const SystemInfo: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center space-x-2 text-sm">
              <HardDrive className="h-4 w-4" />
              <span>Дисковое пространство</span>
            </CardTitle>
            <CardDescription>Использование диска C:</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Использовано</span>
                <span>745 GB из 1 TB</span>
              </div>
              <Progress value={74.5} variant="warning" />
            </div>
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>Свободно: 255 GB</span>
              <span>74.5%</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center space-x-2 text-sm">
              <MemoryStick className="h-4 w-4" />
              <span>Оперативная память</span>
            </CardTitle>
            <CardDescription>Использование RAM</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Использовано</span>
                <span>12.8 GB из 16 GB</span>
              </div>
              <Progress value={80} variant="info" />
            </div>
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>Свободно: 3.2 GB</span>
              <span>80%</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center space-x-2 text-sm">
              <Cpu className="h-4 w-4" />
              <span>Процессор</span>
            </CardTitle>
            <CardDescription>Загрузка CPU</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Загрузка</span>
                <span>45%</span>
              </div>
              <Progress value={45} variant="default" />
            </div>
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>Температура: 65°C</span>
              <span>Частота: 3.2 GHz</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center space-x-2 text-sm">
              <Battery className="h-4 w-4" />
              <span>Батарея</span>
            </CardTitle>
            <CardDescription>Заряд ноутбука</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Заряд</span>
                <span>23%</span>
              </div>
              <Progress value={23} variant="error" />
            </div>
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>Осталось: 1ч 15м</span>
              <span>Заряжается</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  ),
};

// С загрузкой файлов
export const FileUpload: Story = {
  render: () => {
    const [uploadProgress, setUploadProgress] = React.useState(0);
    const [isUploading, setIsUploading] = React.useState(false);

    const startUpload = () => {
      setIsUploading(true);
      setUploadProgress(0);

      const interval = setInterval(() => {
        setUploadProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsUploading(false);
            return 100;
          }
          return prev + Math.random() * 15;
        });
      }, 500);
    };

    return (
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Upload className="h-5 w-5" />
              <span>Загрузка файлов</span>
            </CardTitle>
            <CardDescription>Загрузите файлы на сервер</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>document.pdf</span>
                <span>{Math.round(uploadProgress)}%</span>
              </div>
              <Progress
                value={uploadProgress}
                variant={uploadProgress === 100 ? 'success' : 'default'}
              />
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>2.5 MB</span>
                <span>
                  {isUploading
                    ? 'Загружается...'
                    : uploadProgress === 100
                      ? 'Завершено'
                      : 'Ожидание'}
                </span>
              </div>
            </div>

            <Button
              onClick={startUpload}
              disabled={isUploading}
              className="w-full"
            >
              {isUploading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Загрузка...
                </>
              ) : (
                <>
                  <Upload className="mr-2 h-4 w-4" />
                  Начать загрузку
                </>
              )}
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  },
};

// С задачами
export const TaskProgress: Story = {
  render: () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Target className="h-5 w-5" />
            <span>Прогресс проекта</span>
          </CardTitle>
          <CardDescription>Общий прогресс выполнения задач</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>Общий прогресс</span>
              <span>67%</span>
            </div>
            <Progress value={67} variant="default" size="lg" />
          </div>

          <div className="space-y-3">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Дизайн</span>
                </span>
                <span>100%</span>
              </div>
              <Progress value={100} variant="success" />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center space-x-2">
                  <Activity className="h-4 w-4 text-blue-500" />
                  <span>Разработка</span>
                </span>
                <span>75%</span>
              </div>
              <Progress value={75} variant="info" />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center space-x-2">
                  <AlertCircle className="h-4 w-4 text-yellow-500" />
                  <span>Тестирование</span>
                </span>
                <span>45%</span>
              </div>
              <Progress value={45} variant="warning" />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-gray-500" />
                  <span>Документация</span>
                </span>
                <span>20%</span>
              </div>
              <Progress value={20} variant="outline" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  ),
};

// С анимацией
export const AnimatedProgress: Story = {
  render: () => {
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
      const timer = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            return 0;
          }
          return prev + 1;
        });
      }, 100);

      return () => clearInterval(timer);
    }, []);

    return (
      <div className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-sm font-medium">Анимации</h3>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>Анимированный прогресс</span>
              <span>{progress}%</span>
            </div>
            <Progress value={progress} variant="default" />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>С пульсацией</span>
              <span>{progress}%</span>
            </div>
            <div className="animate-pulse">
              <Progress value={progress} variant="default" />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>С bounce эффектом</span>
              <span>{progress}%</span>
            </div>
            <div className="animate-bounce">
              <Progress
                value={progress}
                variant="warning"
                className="transition-all duration-500 ease-bounce"
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>С glow эффектом</span>
              <span>{progress}%</span>
            </div>
            <Progress
              value={progress}
              variant="error"
              className="shadow-2xl shadow-red-500/50 animate-pulse"
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>Скачкообразная анимация</span>
              <span>{Math.floor(progress / 10) * 10}%</span>
            </div>
            <Progress
              value={Math.floor(progress / 10) * 10}
              variant="default"
              className="transition-all duration-100 ease-linear"
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>Градиент развития (error → warning → success)</span>
              <span>{progress}%</span>
            </div>
            <Progress
              value={progress}
              variant={
                progress < 30 ? 'error' : progress < 70 ? 'warning' : 'success'
              }
              className="transition-all duration-500 ease-in-out"
            />
          </div>
        </div>
      </div>
    );
  },
};

// Интерактивный пример
export const InteractiveExample: Story = {
  render: () => {
    const [progress, setProgress] = React.useState(50);
    const [variant, setVariant] = React.useState<
      'default' | 'success' | 'warning' | 'error'
    >('default');
    const [size, setSize] = React.useState<'sm' | 'md' | 'lg' | 'xl'>('md');

    const getVariantColor = (variant: string) => {
      switch (variant) {
        case 'success':
          return '#10b981';
        case 'warning':
          return '#f59e0b';
        case 'error':
          return '#ef4444';
        default:
          return undefined;
      }
    };

    return (
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Интерактивный Progress</CardTitle>
            <CardDescription>Настройте параметры прогресс-бара</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">
                Прогресс: {progress}%
              </label>
              <input
                type="range"
                min="0"
                max="100"
                value={progress}
                onChange={e => setProgress(Number(e.target.value))}
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Вариант</label>
              <div className="flex space-x-2">
                {(['default', 'success', 'warning', 'error'] as const).map(
                  v => (
                    <Button
                      key={v}
                      variant={variant === v ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setVariant(v)}
                    >
                      {v}
                    </Button>
                  ),
                )}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Размер</label>
              <div className="flex space-x-2">
                {(['sm', 'md', 'lg', 'xl'] as const).map(s => (
                  <Button
                    key={s}
                    variant={size === s ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSize(s)}
                  >
                    {s}
                  </Button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Результат</span>
                <span>{progress}%</span>
              </div>
              <Progress
                value={progress}
                variant={variant}
                size={size}
                indicatorColor={getVariantColor(variant)}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    );
  },
};
