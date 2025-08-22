import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { ScrollArea } from './scroll-area';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './card';
import { Badge } from './badge';
import { Avatar, AvatarFallback, AvatarImage } from './avatar';

const meta: Meta<typeof ScrollArea> = {
  title: 'UI/ScrollArea',
  component: ScrollArea,
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
    <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
      <div className="space-y-4">
        <h4 className="text-sm font-medium leading-none">Jokester</h4>
        <p className="text-sm text-muted-foreground">
          Jokester began sneaking into the castle in the middle of the night and
          leaving jokes all over the place: under the king`&apos`s pillow, in
          his soup, even in the royal toilet. The king was furious, but he
          couldn`&apos`t seem to stop Jokester. And then, one day, the people of
          the kingdom discovered that the jokes left by Jokester were so funny
          that they couldn`&apos`t help but laugh. And once they started
          laughing, they couldn`&apos`t stop.
        </p>
        <p className="text-sm text-muted-foreground">
          The king was furious, but he couldn`&apos`t seem to stop Jokester. And
          then, one day, the people of the kingdom discovered that the jokes
          left by Jokester were so funny that they couldn`&apos`t help but
          laugh. And once they started laughing, they couldn`&apos`t stop.
        </p>
        <p className="text-sm text-muted-foreground">
          And then, one day, the people of the kingdom discovered that the jokes
          left by Jokester were so funny that they couldn`&apos`t help but
          laugh. And once they started laughing, they couldn`&apos`t stop.
        </p>
      </div>
    </ScrollArea>
  ),
};

// Горизонтальная прокрутка
export const Horizontal: Story = {
  render: () => (
    <ScrollArea className="w-96 whitespace-nowrap rounded-md border">
      <div className="flex w-max space-x-4 p-4">
        <div className="w-[150px] space-y-2">
          <div className="h-4 w-4 rounded bg-slate-500" />
          <div className="space-y-1 text-sm">
            <p className="text-sm font-medium leading-none">Jokester</p>
            <p className="text-xs text-muted-foreground">King`&apos`s Jester</p>
          </div>
        </div>
        <div className="w-[150px] space-y-2">
          <div className="h-4 w-4 rounded bg-slate-500" />
          <div className="space-y-1 text-sm">
            <p className="text-sm font-medium leading-none">Jokester</p>
            <p className="text-xs text-muted-foreground">King`&apos`s Jester</p>
          </div>
        </div>
        <div className="w-[150px] space-y-2">
          <div className="h-4 w-4 rounded bg-slate-500" />
          <div className="space-y-1 text-sm">
            <p className="text-sm font-medium leading-none">Jokester</p>
            <p className="text-xs text-muted-foreground">King`&apos`s Jester</p>
          </div>
        </div>
        <div className="w-[150px] space-y-2">
          <div className="h-4 w-4 rounded bg-slate-500" />
          <div className="space-y-1 text-sm">
            <p className="text-sm font-medium leading-none">Jokester</p>
            <p className="text-xs text-muted-foreground">King`&apos`s Jester</p>
          </div>
        </div>
        <div className="w-[150px] space-y-2">
          <div className="h-4 w-4 rounded bg-slate-500" />
          <div className="space-y-1 text-sm">
            <p className="text-sm font-medium leading-none">Jokester</p>
            <p className="text-xs text-muted-foreground">King`&apos`s Jester</p>
          </div>
        </div>
        <div className="w-[150px] space-y-2">
          <div className="h-4 w-4 rounded bg-slate-500" />
          <div className="space-y-1 text-sm">
            <p className="text-sm font-medium leading-none">Jokester</p>
            <p className="text-xs text-muted-foreground">King`&apos`s Jester</p>
          </div>
        </div>
      </div>
    </ScrollArea>
  ),
};

// С карточками
export const WithCards: Story = {
  render: () => (
    <ScrollArea className="h-[400px] w-[350px] rounded-md border p-4">
      <div className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Card 1</CardTitle>
            <CardDescription>
              This is the first card in the scroll area.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Card 2</CardTitle>
            <CardDescription>
              This is the second card in the scroll area.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Card 3</CardTitle>
            <CardDescription>
              This is the third card in the scroll area.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Card 4</CardTitle>
            <CardDescription>
              This is the fourth card in the scroll area.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Card 5</CardTitle>
            <CardDescription>
              This is the fifth card in the scroll area.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium.
            </p>
          </CardContent>
        </Card>
      </div>
    </ScrollArea>
  ),
};

// С пользователями
export const UserList: Story = {
  render: () => (
    <ScrollArea className="h-[300px] w-[350px] rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Users</h4>
        <div className="space-y-4">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src={`https://github.com/shadcn${i}.png`} />
                <AvatarFallback>U{i + 1}</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">User {i + 1}</p>
                <p className="text-xs text-muted-foreground">
                  user{i + 1}@example.com
                </p>
              </div>
              <div className="ml-auto">
                <Badge
                  variant={
                    i % 3 === 0
                      ? 'default'
                      : i % 3 === 1
                        ? 'secondary'
                        : 'outline'
                  }
                >
                  {i % 3 === 0 ? 'Admin' : i % 3 === 1 ? 'User' : 'Guest'}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollArea>
  ),
};

// С длинным текстом
export const LongText: Story = {
  render: () => (
    <ScrollArea className="h-[300px] w-[500px] rounded-md border p-4">
      <div className="space-y-4">
        <h4 className="text-lg font-semibold">Long Article</h4>
        <div className="space-y-4 text-sm text-muted-foreground">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt.
          </p>
          <p>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit, sed quia non numquam eius modi tempora
            incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
          </p>
          <p>
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
            autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
            nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
            voluptas nulla pariatur?
          </p>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga.
          </p>
          <p>
            Et harum quidem rerum facilis est et expedita distinctio. Nam libero
            tempore, cum soluta nobis est eligendi optio cumque nihil impedit
            quo minus id quod maxime placeat facere possimus, omnis voluptas
            assumenda est, omnis dolor repellendus.
          </p>
        </div>
      </div>
    </ScrollArea>
  ),
};

// С таблицей
export const Table: Story = {
  render: () => (
    <ScrollArea className="h-[300px] w-[600px] rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Data Table</h4>
        <div className="space-y-2">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="flex items-center justify-between rounded-md border p-3"
            >
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">Item {i + 1}</p>
                <p className="text-xs text-muted-foreground">
                  Description for item {i + 1}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Badge
                  variant={
                    i % 4 === 0
                      ? 'default'
                      : i % 4 === 1
                        ? 'secondary'
                        : i % 4 === 2
                          ? 'outline'
                          : 'destructive'
                  }
                >
                  {i % 4 === 0
                    ? 'Active'
                    : i % 4 === 1
                      ? 'Pending'
                      : i % 4 === 2
                        ? 'Draft'
                        : 'Archived'}
                </Badge>
                <span className="text-sm text-muted-foreground">
                  #{String(i + 1).padStart(3, '0')}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollArea>
  ),
};
