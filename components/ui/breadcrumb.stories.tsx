import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import * as React from 'react';
import { SlashIcon, ChevronRightIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from '@/components/ui/breadcrumb';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Label } from '@/components/ui/label';

const meta: Meta<typeof Breadcrumb> = {
  title: 'UI/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    separator: {
      control: { type: 'text' },
      description: 'Кастомный разделитель',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => (
    <div className="w-full max-w-md space-y-4">
      <Breadcrumb {...args}>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Главная</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/components">Компоненты</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Хлебные крошки</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  ),
};

export const CustomSeparator: Story = {
  render: args => (
    <div className="w-full max-w-md space-y-4">
      <Breadcrumb {...args}>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Главная</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <SlashIcon />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink href="/components">Компоненты</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <SlashIcon />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage>Хлебные крошки</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  ),
};

export const WithDropdown: Story = {
  render: args => (
    <div className="w-full max-w-md space-y-4">
      <Breadcrumb {...args}>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Главная</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-auto p-0 text-foreground">
                  Компоненты
                  <ChevronRightIcon className="ml-1 h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem>Документация</DropdownMenuItem>
                <DropdownMenuItem>Темы</DropdownMenuItem>
                <DropdownMenuItem>GitHub</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Хлебные крошки</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  ),
};

export const WithEllipsis: Story = {
  render: args => (
    <div className="w-full max-w-md space-y-4">
      <Breadcrumb {...args}>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Главная</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/components">Компоненты</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbEllipsis />
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/components/ui">UI</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Хлебные крошки</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  ),
};

export const LongPath: Story = {
  render: args => (
    <div className="w-full max-w-md space-y-4">
      <Breadcrumb {...args}>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Главная</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/docs">Документация</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/docs/components">Компоненты</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/docs/components/ui">UI</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/docs/components/ui/navigation">
              Навигация
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Хлебные крошки</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  ),
};

export const Responsive: Story = {
  render: args => {
    const [isMobile, setIsMobile] = React.useState(false);

    return (
      <div className="w-full max-w-md space-y-6">
        <div className="flex gap-2">
          <Button
            variant={!isMobile ? 'default' : 'outline'}
            size="sm"
            onClick={() => setIsMobile(false)}
          >
            Desktop
          </Button>
          <Button
            variant={isMobile ? 'default' : 'outline'}
            size="sm"
            onClick={() => setIsMobile(true)}
          >
            Mobile
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Адаптивные хлебные крошки</CardTitle>
            <CardDescription>
              {isMobile
                ? 'На мобильных устройствах используется Drawer'
                : 'На десктопе используется Dropdown'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Breadcrumb {...args}>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Главная</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  {isMobile ? (
                    <Drawer>
                      <DrawerTrigger asChild>
                        <Button
                          variant="ghost"
                          className="h-auto p-0 text-foreground"
                        >
                          Компоненты
                          <ChevronRightIcon className="ml-1 h-3 w-3" />
                        </Button>
                      </DrawerTrigger>
                      <DrawerContent>
                        <DrawerHeader>
                          <DrawerTitle>Компоненты</DrawerTitle>
                          <DrawerDescription>
                            Выберите раздел компонентов
                          </DrawerDescription>
                        </DrawerHeader>
                        <div className="p-4 space-y-2">
                          <Button
                            variant="ghost"
                            className="w-full justify-start"
                          >
                            Документация
                          </Button>
                          <Button
                            variant="ghost"
                            className="w-full justify-start"
                          >
                            Темы
                          </Button>
                          <Button
                            variant="ghost"
                            className="w-full justify-start"
                          >
                            GitHub
                          </Button>
                        </div>
                      </DrawerContent>
                    </Drawer>
                  ) : (
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          className="h-auto p-0 text-foreground"
                        >
                          Компоненты
                          <ChevronRightIcon className="ml-1 h-3 w-3" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="start">
                        <DropdownMenuItem>Документация</DropdownMenuItem>
                        <DropdownMenuItem>Темы</DropdownMenuItem>
                        <DropdownMenuItem>GitHub</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  )}
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Хлебные крошки</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </CardContent>
        </Card>
      </div>
    );
  },
};

export const InteractiveExample: Story = {
  render: args => {
    const [currentPath, setCurrentPath] = React.useState([
      'Главная',
      'Компоненты',
      'UI',
      'Хлебные крошки',
    ]);

    const navigateTo = (index: number) => {
      setCurrentPath(currentPath.slice(0, index + 1));
    };

    return (
      <div className="w-full max-w-md space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Интерактивные хлебные крошки</CardTitle>
            <CardDescription>
              Кликайте по элементам для навигации
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Breadcrumb {...args}>
              <BreadcrumbList>
                {currentPath.map((item, index) => (
                  <React.Fragment key={index}>
                    <BreadcrumbItem>
                      {index === currentPath.length - 1 ? (
                        <BreadcrumbPage>{item}</BreadcrumbPage>
                      ) : (
                        <BreadcrumbLink
                          href="#"
                          onClick={e => {
                            e.preventDefault();
                            navigateTo(index);
                          }}
                        >
                          {item}
                        </BreadcrumbLink>
                      )}
                    </BreadcrumbItem>
                    {index < currentPath.length - 1 && <BreadcrumbSeparator />}
                  </React.Fragment>
                ))}
              </BreadcrumbList>
            </Breadcrumb>

            <div className="space-y-2">
              <Label className="text-sm font-medium">Текущий путь:</Label>
              <div className="text-sm text-muted-foreground">
                {currentPath.join(' / ')}
              </div>
            </div>

            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  setCurrentPath([
                    'Главная',
                    'Компоненты',
                    'UI',
                    'Хлебные крошки',
                  ])
                }
              >
                Сбросить
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  setCurrentPath([
                    'Главная',
                    'Документация',
                    'Руководства',
                    'Начало работы',
                  ])
                }
              >
                Альтернативный путь
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  },
};

export const FileExplorer: Story = {
  render: args => {
    const [currentPath, setCurrentPath] = React.useState([
      'C:',
      'Users',
      'Documents',
      'Projects',
    ]);

    const navigateTo = (index: number) => {
      setCurrentPath(currentPath.slice(0, index + 1));
    };

    return (
      <div className="w-full max-w-md space-y-4">
        <div className="space-y-2">
          <Label className="text-sm font-medium">Проводник файлов</Label>
          <Breadcrumb {...args}>
            <BreadcrumbList>
              {currentPath.map((item, index) => (
                <React.Fragment key={index}>
                  <BreadcrumbItem>
                    {index === currentPath.length - 1 ? (
                      <BreadcrumbPage>{item}</BreadcrumbPage>
                    ) : (
                      <BreadcrumbLink
                        href="#"
                        onClick={e => {
                          e.preventDefault();
                          navigateTo(index);
                        }}
                      >
                        {item}
                      </BreadcrumbLink>
                    )}
                  </BreadcrumbItem>
                  {index < currentPath.length - 1 && <BreadcrumbSeparator />}
                </React.Fragment>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="text-sm text-muted-foreground">
          Текущая папка: {currentPath.join('\\')}
        </div>
      </div>
    );
  },
};
