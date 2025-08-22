import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './sheet';
import { Button } from './button';
import { Input } from './input';
import { Label } from './label';
import { Separator } from './separator';

const meta: Meta<typeof Sheet> = {
  title: 'UI/Sheet',
  component: Sheet,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Базовый пример
export const Default: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  ),
};

// Справа (по умолчанию)
export const Right: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Right Sheet</Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Edit Profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you`&apos`re
            done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
};

// Слева
export const Left: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Left Sheet</Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Navigation Menu</SheetTitle>
          <SheetDescription>
            Navigate through the application using the menu below.
          </SheetDescription>
        </SheetHeader>
        <div className="py-4">
          <nav className="space-y-2">
            <a
              href="#"
              className="block px-2 py-1.5 text-sm hover:bg-accent rounded-md"
            >
              Dashboard
            </a>
            <a
              href="#"
              className="block px-2 py-1.5 text-sm hover:bg-accent rounded-md"
            >
              Projects
            </a>
            <a
              href="#"
              className="block px-2 py-1.5 text-sm hover:bg-accent rounded-md"
            >
              Tasks
            </a>
            <Separator />
            <a
              href="#"
              className="block px-2 py-1.5 text-sm hover:bg-accent rounded-md"
            >
              Settings
            </a>
            <a
              href="#"
              className="block px-2 py-1.5 text-sm hover:bg-accent rounded-md"
            >
              Help
            </a>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  ),
};

// Сверху
export const Top: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Top Sheet</Button>
      </SheetTrigger>
      <SheetContent side="top" className="h-[300px]">
        <SheetHeader>
          <SheetTitle>Notifications</SheetTitle>
          <SheetDescription>Recent notifications and updates.</SheetDescription>
        </SheetHeader>
        <div className="py-4 space-y-4">
          <div className="flex items-start space-x-3 p-3 bg-muted rounded-md">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
            <div>
              <p className="text-sm font-medium">New message received</p>
              <p className="text-xs text-muted-foreground">2 minutes ago</p>
            </div>
          </div>
          <div className="flex items-start space-x-3 p-3 bg-muted rounded-md">
            <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
            <div>
              <p className="text-sm font-medium">Task completed</p>
              <p className="text-xs text-muted-foreground">1 hour ago</p>
            </div>
          </div>
          <div className="flex items-start space-x-3 p-3 bg-muted rounded-md">
            <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
            <div>
              <p className="text-sm font-medium">Update available</p>
              <p className="text-xs text-muted-foreground">3 hours ago</p>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  ),
};

// Снизу
export const Bottom: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Bottom Sheet</Button>
      </SheetTrigger>
      <SheetContent side="bottom" className="h-[400px]">
        <SheetHeader>
          <SheetTitle>Quick Actions</SheetTitle>
          <SheetDescription>
            Perform quick actions from this panel.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="h-20 flex-col">
              <div className="text-lg mb-1">📁</div>
              <span className="text-xs">New Folder</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col">
              <div className="text-lg mb-1">📄</div>
              <span className="text-xs">New Document</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col">
              <div className="text-lg mb-1">📊</div>
              <span className="text-xs">New Chart</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col">
              <div className="text-lg mb-1">📷</div>
              <span className="text-xs">Take Photo</span>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  ),
};

// Разные размеры
export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Small (300px)</Button>
        </SheetTrigger>
        <SheetContent className="w-[300px]">
          <SheetHeader>
            <SheetTitle>Small Sheet</SheetTitle>
            <SheetDescription>
              This is a small sheet with 300px width.
            </SheetDescription>
          </SheetHeader>
          <div className="py-4">
            <p className="text-sm text-muted-foreground">
              Perfect for quick actions or simple forms.
            </p>
          </div>
        </SheetContent>
      </Sheet>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Medium (400px)</Button>
        </SheetTrigger>
        <SheetContent className="w-[400px] sm:w-[540px]">
          <SheetHeader>
            <SheetTitle>Medium Sheet</SheetTitle>
            <SheetDescription>
              This is a medium sheet with responsive width.
            </SheetDescription>
          </SheetHeader>
          <div className="py-4">
            <p className="text-sm text-muted-foreground">
              Good for forms with multiple fields or detailed content.
            </p>
          </div>
        </SheetContent>
      </Sheet>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Large (600px)</Button>
        </SheetTrigger>
        <SheetContent className="w-[600px] sm:w-[700px]">
          <SheetHeader>
            <SheetTitle>Large Sheet</SheetTitle>
            <SheetDescription>
              This is a large sheet with more space for content.
            </SheetDescription>
          </SheetHeader>
          <div className="py-4">
            <p className="text-sm text-muted-foreground">
              Ideal for complex forms, detailed views, or when you need more
              space.
            </p>
          </div>
        </SheetContent>
      </Sheet>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Full Width</Button>
        </SheetTrigger>
        <SheetContent className="w-full max-w-none">
          <SheetHeader>
            <SheetTitle>Full Width Sheet</SheetTitle>
            <SheetDescription>
              This sheet takes the full width of the screen.
            </SheetDescription>
          </SheetHeader>
          <div className="py-4">
            <p className="text-sm text-muted-foreground">
              Use for dashboards or when you need maximum space.
            </p>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  ),
};

// Форма контакта
export const ContactForm: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Contact Us</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Contact Us</SheetTitle>
          <SheetDescription>
            Send us a message and we`&apos`ll get back to you as soon as
            possible.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="contact-name">Name</Label>
            <Input id="contact-name" placeholder="Enter your name" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="contact-email">Email</Label>
            <Input
              id="contact-email"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="contact-subject">Subject</Label>
            <Input id="contact-subject" placeholder="What's this about?" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="contact-message">Message</Label>
            <textarea
              id="contact-message"
              className="min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              placeholder="Tell us more..."
            />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Send Message</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
};

// Настройки
export const SettingsSheet: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">⚙️ Settings</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Settings</SheetTitle>
          <SheetDescription>
            Configure your preferences and account settings.
          </SheetDescription>
        </SheetHeader>
        <div className="py-4 space-y-6">
          <div>
            <h4 className="text-sm font-medium mb-3">Account</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Email notifications</p>
                  <p className="text-xs text-muted-foreground">
                    Receive email about your account activity
                  </p>
                </div>
                <input type="checkbox" className="rounded" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Push notifications</p>
                  <p className="text-xs text-muted-foreground">
                    Receive push notifications on your device
                  </p>
                </div>
                <input type="checkbox" className="rounded" />
              </div>
            </div>
          </div>

          <Separator />

          <div>
            <h4 className="text-sm font-medium mb-3">Appearance</h4>
            <div className="space-y-3">
              <div>
                <Label htmlFor="theme" className="text-sm font-medium">
                  Theme
                </Label>
                <select
                  id="theme"
                  className="w-full mt-1 rounded-md border border-input bg-background px-3 py-2 text-sm"
                >
                  <option>Light</option>
                  <option>Dark</option>
                  <option>System</option>
                </select>
              </div>
              <div>
                <Label htmlFor="language" className="text-sm font-medium">
                  Language
                </Label>
                <select
                  id="language"
                  className="w-full mt-1 rounded-md border border-input bg-background px-3 py-2 text-sm"
                >
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                  <option>German</option>
                </select>
              </div>
            </div>
          </div>

          <Separator />

          <div>
            <h4 className="text-sm font-medium mb-3">Privacy</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Profile visibility</p>
                  <p className="text-xs text-muted-foreground">
                    Make your profile visible to other users
                  </p>
                </div>
                <input type="checkbox" className="rounded" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Analytics</p>
                  <p className="text-xs text-muted-foreground">
                    Help us improve by sharing usage data
                  </p>
                </div>
                <input type="checkbox" className="rounded" defaultChecked />
              </div>
            </div>
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">Cancel</Button>
          </SheetClose>
          <SheetClose asChild>
            <Button>Save Changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
};

// Интерактивный пример
export const InteractiveExample: Story = {
  render: () => {
    const [side, setSide] = React.useState<'top' | 'right' | 'bottom' | 'left'>(
      'right',
    );
    const [open, setOpen] = React.useState(false);

    return (
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          <Button
            variant={side === 'top' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSide('top')}
          >
            Top
          </Button>
          <Button
            variant={side === 'right' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSide('right')}
          >
            Right
          </Button>
          <Button
            variant={side === 'bottom' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSide('bottom')}
          >
            Bottom
          </Button>
          <Button
            variant={side === 'left' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSide('left')}
          >
            Left
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button>Open Sheet from {side}</Button>
          </SheetTrigger>
          <SheetContent
            side={side}
            className={side === 'top' || side === 'bottom' ? 'h-[300px]' : ''}
          >
            <SheetHeader>
              <SheetTitle>Sheet from {side}</SheetTitle>
              <SheetDescription>
                This sheet slides in from the {side} side of the screen.
              </SheetDescription>
            </SheetHeader>
            <div className="py-4">
              <p className="text-sm text-muted-foreground">
                Current side: <strong>{side}</strong>
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                You can change the side using the buttons above and reopen the
                sheet.
              </p>
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button variant="outline">Close</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    );
  },
};
