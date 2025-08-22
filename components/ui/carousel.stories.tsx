import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import * as React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  Star,
  ShoppingCart,
  Play,
  Clock,
  Calendar,
  Quote,
  ChevronRight,
  Image as ImageIcon,
  Video,
  FileText,
} from 'lucide-react';

const meta: Meta<typeof Carousel> = {
  title: 'UI/Carousel',
  component: Carousel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Ориентация карусели',
    },
    opts: {
      control: 'object',
      description: 'Опции Embla Carousel',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Базовый пример
export const Default: Story = {
  render: args => (
    <Carousel {...args} className="w-full max-w-xs">
      <CarouselContent>
        {Array.from({ length: 5 }, (_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
  args: {},
};

// Вертикальная карусель
export const Vertical: Story = {
  render: args => (
    <Carousel {...args} orientation="vertical" className="w-full max-w-xs">
      <CarouselContent className="h-[200px]">
        {Array.from({ length: 5 }, (_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-2xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
  args: {},
};

// Множественные элементы на слайде
export const MultipleItems: Story = {
  render: args => (
    <Carousel {...args} className="w-full max-w-sm">
      <CarouselContent className="-ml-2 md:-ml-4">
        {Array.from({ length: 8 }, (_, index) => (
          <CarouselItem
            key={index}
            className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
          >
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-2xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
  args: {},
};

// Без кнопок навигации
export const WithoutNavigation: Story = {
  render: args => (
    <Carousel {...args} className="w-full max-w-xs">
      <CarouselContent>
        {Array.from({ length: 5 }, (_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  ),
  args: {},
};

// Галерея изображений
export const ImageGallery: Story = {
  render: args => (
    <Carousel {...args} className="w-full max-w-md">
      <CarouselContent>
        {Array.from({ length: 6 }, (_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-video items-center justify-center p-6 bg-muted">
                  <div className="text-center space-y-2">
                    <ImageIcon className="h-12 w-12 mx-auto text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">
                      Изображение {index + 1}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
  args: {},
};

// Карточки товаров
export const ProductCards: Story = {
  render: args => {
    const products = [
      { id: 1, name: 'Смартфон', price: '25,000₽', rating: 4.5, reviews: 128 },
      { id: 2, name: 'Ноутбук', price: '65,000₽', rating: 4.8, reviews: 89 },
      { id: 3, name: 'Наушники', price: '8,500₽', rating: 4.2, reviews: 256 },
      { id: 4, name: 'Планшет', price: '35,000₽', rating: 4.6, reviews: 142 },
      { id: 5, name: 'Умные часы', price: '15,000₽', rating: 4.3, reviews: 76 },
    ];

    return (
      <Carousel {...args} className="w-full max-w-lg">
        <CarouselContent className="-ml-2 md:-ml-4">
          {products.map(product => (
            <CarouselItem
              key={product.id}
              className="pl-2 md:pl-4 md:basis-1/2"
            >
              <Card>
                <CardContent className="p-4 space-y-3">
                  <div className="aspect-square bg-muted rounded-md flex items-center justify-center">
                    <ShoppingCart className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold">{product.name}</h3>
                    <p className="text-2xl font-bold text-primary">
                      {product.price}
                    </p>
                    <div className="flex items-center space-x-1">
                      <div className="flex">
                        {Array.from({ length: 5 }, (_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'}`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">
                        ({product.reviews})
                      </span>
                    </div>
                    <Button className="w-full">В корзину</Button>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    );
  },
  args: {},
};

// Отзывы пользователей
export const Testimonials: Story = {
  render: args => {
    const testimonials = [
      {
        id: 1,
        name: 'Анна Иванова',
        role: 'Менеджер проекта',
        content:
          'Отличный продукт! Значительно упростил нашу работу и повысил продуктивность команды.',
        rating: 5,
        avatar: 'АИ',
      },
      {
        id: 2,
        name: 'Сергей Петров',
        role: 'Разработчик',
        content:
          'Интуитивно понятный интерфейс и мощная функциональность. Рекомендую всем коллегам.',
        rating: 5,
        avatar: 'СП',
      },
      {
        id: 3,
        name: 'Мария Сидорова',
        role: 'Дизайнер',
        content:
          'Превосходный дизайн и удобство использования. Работать стало намного приятнее.',
        rating: 4,
        avatar: 'МС',
      },
    ];

    return (
      <Carousel {...args} className="w-full max-w-2xl">
        <CarouselContent>
          {testimonials.map(testimonial => (
            <CarouselItem key={testimonial.id}>
              <Card>
                <CardContent className="p-6 space-y-4">
                  <Quote className="h-8 w-8 text-muted-foreground" />
                  <p className="text-lg italic">{testimonial.content}</p>
                  <div className="flex items-center space-x-1">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'}`}
                      />
                    ))}
                  </div>
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    );
  },
  args: {},
};

// Новости и статьи
export const NewsArticles: Story = {
  render: args => {
    const articles = [
      {
        id: 1,
        title: 'Новые возможности React 18',
        summary: 'Обзор ключевых нововведений и улучшений производительности',
        date: '15 декабря 2024',
        readTime: '5 мин',
        category: 'Технологии',
      },
      {
        id: 2,
        title: 'Тренды веб-дизайна 2024',
        summary:
          'Что будет актуально в дизайне веб-интерфейсов в следующем году',
        date: '14 декабря 2024',
        readTime: '8 мин',
        category: 'Дизайн',
      },
      {
        id: 3,
        title: 'Оптимизация производительности',
        summary: 'Практические советы по ускорению загрузки веб-приложений',
        date: '13 декабря 2024',
        readTime: '12 мин',
        category: 'Разработка',
      },
      {
        id: 4,
        title: 'UX исследования',
        summary: 'Методы изучения пользовательского опыта и их применение',
        date: '12 декабря 2024',
        readTime: '6 мин',
        category: 'UX/UI',
      },
    ];

    return (
      <Carousel {...args} className="w-full max-w-4xl">
        <CarouselContent className="-ml-2 md:-ml-4">
          {articles.map(article => (
            <CarouselItem
              key={article.id}
              className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
            >
              <Card className="h-full">
                <CardContent className="p-4 space-y-3">
                  <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                    <FileText className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <div className="space-y-2">
                    <Badge variant="secondary">{article.category}</Badge>
                    <h3 className="font-semibold line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {article.summary}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    <Button variant="ghost" className="w-full justify-between">
                      Читать далее
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    );
  },
  args: {},
};

// Медиа контент
export const MediaContent: Story = {
  render: args => {
    const media = [
      { id: 1, type: 'video', title: 'Урок по React', duration: '15:30' },
      { id: 2, type: 'image', title: 'Дизайн концепт', duration: null },
      {
        id: 3,
        type: 'video',
        title: 'Интервью с экспертом',
        duration: '45:20',
      },
      { id: 4, type: 'image', title: 'Инфографика', duration: null },
      { id: 5, type: 'video', title: 'Демо продукта', duration: '8:45' },
    ];

    return (
      <Carousel {...args} className="w-full max-w-3xl">
        <CarouselContent className="-ml-2 md:-ml-4">
          {media.map(item => (
            <CarouselItem
              key={item.id}
              className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
            >
              <Card>
                <CardContent className="p-0">
                  <div className="aspect-video bg-muted rounded-t-md flex items-center justify-center relative">
                    {item.type === 'video' ? (
                      <>
                        <Video className="h-12 w-12 text-muted-foreground" />
                        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                          {item.duration}
                        </div>
                        <Button
                          size="sm"
                          className="absolute inset-0 m-auto w-16 h-16 rounded-full"
                        >
                          <Play className="h-6 w-6" />
                        </Button>
                      </>
                    ) : (
                      <ImageIcon className="h-12 w-12 text-muted-foreground" />
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {item.type === 'video' ? 'Видео' : 'Изображение'}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    );
  },
  args: {},
};

// Команда
export const TeamMembers: Story = {
  render: args => {
    const team = [
      {
        id: 1,
        name: 'Алексей Смирнов',
        role: 'CEO & Основатель',
        bio: '15+ лет опыта в IT, основатель 3 успешных стартапов',
        avatar: 'АС',
        social: { linkedin: '#', twitter: '#' },
      },
      {
        id: 2,
        name: 'Елена Козлова',
        role: 'CTO',
        bio: 'Эксперт в области архитектуры ПО и команд разработки',
        avatar: 'ЕК',
        social: { linkedin: '#', github: '#' },
      },
      {
        id: 3,
        name: 'Дмитрий Волков',
        role: 'Lead Designer',
        bio: 'Создает интуитивные интерфейсы для сложных продуктов',
        avatar: 'ДВ',
        social: { dribbble: '#', behance: '#' },
      },
      {
        id: 4,
        name: 'Анна Морозова',
        role: 'Product Manager',
        bio: 'Специалист по продуктовой стратегии и пользовательскому опыту',
        avatar: 'АМ',
        social: { linkedin: '#', medium: '#' },
      },
    ];

    return (
      <Carousel {...args} className="w-full max-w-4xl">
        <CarouselContent className="-ml-2 md:-ml-4">
          {team.map(member => (
            <CarouselItem
              key={member.id}
              className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
            >
              <Card className="text-center">
                <CardContent className="p-6 space-y-4">
                  <Avatar className="w-20 h-20 mx-auto">
                    <AvatarFallback className="text-lg">
                      {member.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg">{member.name}</h3>
                    <p className="text-primary font-medium">{member.role}</p>
                    <p className="text-sm text-muted-foreground">
                      {member.bio}
                    </p>
                  </div>
                  <div className="flex justify-center space-x-2">
                    <Button variant="ghost" size="sm">
                      Связаться
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    );
  },
  args: {},
};

// Интерактивный пример с API
export const InteractiveExample: Story = {
  render: args => {
    const [api, setApi] = React.useState<any>();
    const [current, setCurrent] = React.useState(0);
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
      if (!api) {
        return;
      }

      setCount(api.scrollSnapList().length);
      setCurrent(api.selectedScrollSnap() + 1);

      api.on('select', () => {
        setCurrent(api.selectedScrollSnap() + 1);
      });
    }, [api]);

    const slides = [
      {
        title: 'Добро пожаловать',
        content: 'Это первый слайд нашей презентации',
      },
      { title: 'Наши преимущества', content: 'Высокое качество и надежность' },
      {
        title: 'Команда экспертов',
        content: 'Опытные специалисты в своих областях',
      },
      {
        title: 'Инновационные решения',
        content: 'Современные технологии и подходы',
      },
      { title: 'Свяжитесь с нами', content: 'Готовы ответить на ваши вопросы' },
    ];

    return (
      <div className="space-y-4">
        <Carousel {...args} setApi={setApi} className="w-full max-w-md">
          <CarouselContent>
            {slides.map((slide, index) => (
              <CarouselItem key={index}>
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <div className="text-center space-y-4">
                      <h3 className="text-xl font-semibold">{slide.title}</h3>
                      <p className="text-muted-foreground">{slide.content}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <div className="text-center space-y-2">
          <div className="text-sm text-muted-foreground">
            Слайд {current} из {count}
          </div>
          <div className="flex justify-center space-x-1">
            {Array.from({ length: count }, (_, i) => (
              <button
                key={i}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === current - 1 ? 'bg-primary' : 'bg-muted'
                }`}
                onClick={() => api?.scrollTo(i)}
              />
            ))}
          </div>
          <div className="flex justify-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => api?.scrollPrev()}
              disabled={current === 1}
            >
              Назад
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => api?.scrollNext()}
              disabled={current === count}
            >
              Далее
            </Button>
          </div>
        </div>
      </div>
    );
  },
  args: {},
};
