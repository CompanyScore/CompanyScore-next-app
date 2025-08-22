import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
} from './command';
import {
  Calendar,
  Smile,
  Calculator,
  CreditCard,
  Settings,
  Search,
  FileText,
  Folder,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';

const meta: Meta<typeof Command> = {
  title: 'UI/Command',
  component: Command,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Компонент командной палитры с поиском и навигацией по командам.',
      },
      canvas: {
        sourceState: 'hidden',
      },
      controls: {
        sort: 'requiredFirst',
      },
    },
    controls: {
      expanded: false,
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'secondary', 'outline', 'ghost', 'brand'],
      description: 'Вариант стиля компонента',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Размер компонента',
    },
  },
  decorators: [
    Story => (
      <div className="w-full max-w-md">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Базовые команды для демонстрации
const commands = [
  {
    value: 'calendar',
    label: 'Calendar',
    icon: <Calendar className="h-4 w-4" />,
  },
  { value: 'search', label: 'Search', icon: <Search className="h-4 w-4" /> },
  {
    value: 'settings',
    label: 'Settings',
    icon: <Settings className="h-4 w-4" />,
  },
  {
    value: 'calculator',
    label: 'Calculator',
    icon: <Calculator className="h-4 w-4" />,
  },
  {
    value: 'credit-card',
    label: 'Credit Card',
    icon: <CreditCard className="h-4 w-4" />,
  },
  { value: 'smile', label: 'Smile', icon: <Smile className="h-4 w-4" /> },
];

const fileCommands = [
  {
    value: 'new-file',
    label: 'New File',
    icon: <FileText className="h-4 w-4" />,
  },
  {
    value: 'new-folder',
    label: 'New Folder',
    icon: <Folder className="h-4 w-4" />,
  },
  {
    value: 'open-file',
    label: 'Open File',
    icon: <FileText className="h-4 w-4" />,
  },
];

const contactCommands = [
  { value: 'email', label: 'Send Email', icon: <Mail className="h-4 w-4" /> },
  { value: 'phone', label: 'Call', icon: <Phone className="h-4 w-4" /> },
  {
    value: 'location',
    label: 'Get Directions',
    icon: <MapPin className="h-4 w-4" />,
  },
];

// Основные варианты
export const Default: Story = {
  render: args => (
    <Command {...args}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          {commands.map(command => (
            <CommandItem key={command.value} value={command.value}>
              {command.icon}
              {command.label}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  ),
};

// Варианты стилей
export const Variants: Story = {
  render: args => (
    <div className="space-y-4">
      <div>
        <h3 className="text-sm font-medium mb-2">Default variant</h3>
        <Command variant="default" {...args}>
          <CommandInput placeholder="Type a command..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              {commands.slice(0, 3).map(command => (
                <CommandItem key={command.value} value={command.value}>
                  {command.icon}
                  {command.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </div>

      <div>
        <h3 className="text-sm font-medium mb-2">Secondary variant</h3>
        <Command variant="secondary" {...args}>
          <CommandInput placeholder="Type a command..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              {commands.slice(0, 3).map(command => (
                <CommandItem key={command.value} value={command.value}>
                  {command.icon}
                  {command.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </div>

      <div>
        <h3 className="text-sm font-medium mb-2">Outline variant</h3>
        <Command variant="outline" {...args}>
          <CommandInput placeholder="Type a command..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              {commands.slice(0, 3).map(command => (
                <CommandItem key={command.value} value={command.value}>
                  {command.icon}
                  {command.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </div>

      <div>
        <h3 className="text-sm font-medium mb-2">Ghost variant</h3>
        <Command variant="ghost" {...args}>
          <CommandInput placeholder="Type a command..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              {commands.slice(0, 3).map(command => (
                <CommandItem key={command.value} value={command.value}>
                  {command.icon}
                  {command.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </div>

      <div>
        <h3 className="text-sm font-medium mb-2">Brand variant</h3>
        <Command variant="brand" {...args}>
          <CommandInput placeholder="Type a command..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              {commands.slice(0, 3).map(command => (
                <CommandItem key={command.value} value={command.value}>
                  {command.icon}
                  {command.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </div>
    </div>
  ),
};

// Размеры
export const Sizes: Story = {
  render: args => (
    <div className="space-y-4">
      <div>
        <h3 className="text-sm font-medium mb-2">Small size</h3>
        <Command size="sm" {...args}>
          <CommandInput placeholder="Type a command..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              {commands.slice(0, 3).map(command => (
                <CommandItem key={command.value} value={command.value}>
                  {command.icon}
                  {command.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </div>

      <div>
        <h3 className="text-sm font-medium mb-2">Medium size (default)</h3>
        <Command size="md" {...args}>
          <CommandInput placeholder="Type a command..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              {commands.slice(0, 3).map(command => (
                <CommandItem key={command.value} value={command.value}>
                  {command.icon}
                  {command.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </div>

      <div>
        <h3 className="text-sm font-medium mb-2">Large size</h3>
        <Command size="lg" {...args}>
          <CommandInput placeholder="Type a command..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              {commands.slice(0, 3).map(command => (
                <CommandItem key={command.value} value={command.value}>
                  {command.icon}
                  {command.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </div>
    </div>
  ),
};

// С группами команд
export const WithGroups: Story = {
  render: args => (
    <Command {...args}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>

        <CommandGroup heading="Files">
          {fileCommands.map(command => (
            <CommandItem key={command.value} value={command.value}>
              {command.icon}
              {command.label}
            </CommandItem>
          ))}
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Contacts">
          {contactCommands.map(command => (
            <CommandItem key={command.value} value={command.value}>
              {command.icon}
              {command.label}
            </CommandItem>
          ))}
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Tools">
          {commands.map(command => (
            <CommandItem key={command.value} value={command.value}>
              {command.icon}
              {command.label}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  ),
};

// С горячими клавишами
export const WithShortcuts: Story = {
  render: args => (
    <Command {...args}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem value="calendar">
            <Calendar className="h-4 w-4" />
            Calendar
            <CommandShortcut>cmd+k</CommandShortcut>
          </CommandItem>
          <CommandItem value="search">
            <Search className="h-4 w-4" />
            Search
            <CommandShortcut>cmd+s</CommandShortcut>
          </CommandItem>
          <CommandItem value="settings">
            <Settings className="h-4 w-4" />
            Settings
            <CommandShortcut>cmd+,</CommandShortcut>
          </CommandItem>
          <CommandItem value="calculator">
            <Calculator className="h-4 w-4" />
            Calculator
            <CommandShortcut>cmd+c</CommandShortcut>
          </CommandItem>
          <CommandItem value="new-file">
            <FileText className="h-4 w-4" />
            New File
            <CommandShortcut>cmd+n</CommandShortcut>
          </CommandItem>
          <CommandItem value="save">
            <FileText className="h-4 w-4" />
            Save
            <CommandShortcut>cmd+s</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
};

// Интерактивный пример
export const InteractiveExample: Story = {
  render: args => {
    const [selectedCommand, setSelectedCommand] = React.useState<string>('');

    const handleSelect = (value: string) => {
      setSelectedCommand(value);
      console.log('Selected command:', value);
    };

    return (
      <div className="space-y-4">
        <Command {...args}>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              {commands.map(command => (
                <CommandItem
                  key={command.value}
                  value={command.value}
                  onSelect={handleSelect}
                >
                  {command.icon}
                  {command.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>

        {selectedCommand && (
          <div className="p-3 bg-[var(--success-50)] border border-[var(--success-200)] rounded-lg">
            <div className="text-sm font-medium text-[var(--success-800)]">
              Selected command:
            </div>
            <div className="text-sm text-[var(--success-700)] mt-1">
              {commands.find(cmd => cmd.value === selectedCommand)?.label}
            </div>
          </div>
        )}
      </div>
    );
  },
};

// Команды с отключенными элементами
export const WithDisabledItems: Story = {
  render: args => (
    <Command {...args}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem value="calendar">
            <Calendar className="h-4 w-4" />
            Calendar
          </CommandItem>
          <CommandItem value="search" disabled>
            <Search className="h-4 w-4" />
            Search (Disabled)
          </CommandItem>
          <CommandItem value="settings">
            <Settings className="h-4 w-4" />
            Settings
          </CommandItem>
          <CommandItem value="calculator" disabled>
            <Calculator className="h-4 w-4" />
            Calculator (Disabled)
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
};

// Демонстрация разных типов шорткатов
export const ShortcutExamples: Story = {
  render: args => (
    <Command {...args}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="File Operations">
          <CommandItem value="new-file">
            <FileText className="h-4 w-4" />
            New File
            <CommandShortcut>cmd+n</CommandShortcut>
          </CommandItem>
          <CommandItem value="open-file">
            <FileText className="h-4 w-4" />
            Open File
            <CommandShortcut>cmd+o</CommandShortcut>
          </CommandItem>
          <CommandItem value="save">
            <FileText className="h-4 w-4" />
            Save
            <CommandShortcut>cmd+s</CommandShortcut>
          </CommandItem>
          <CommandItem value="save-as">
            <FileText className="h-4 w-4" />
            Save As
            <CommandShortcut>cmd+shift+s</CommandShortcut>
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Edit Operations">
          <CommandItem value="undo">
            <FileText className="h-4 w-4" />
            Undo
            <CommandShortcut>cmd+z</CommandShortcut>
          </CommandItem>
          <CommandItem value="redo">
            <FileText className="h-4 w-4" />
            Redo
            <CommandShortcut>cmd+shift+z</CommandShortcut>
          </CommandItem>
          <CommandItem value="cut">
            <FileText className="h-4 w-4" />
            Cut
            <CommandShortcut>cmd+x</CommandShortcut>
          </CommandItem>
          <CommandItem value="copy">
            <FileText className="h-4 w-4" />
            Copy
            <CommandShortcut>cmd+c</CommandShortcut>
          </CommandItem>
          <CommandItem value="paste">
            <FileText className="h-4 w-4" />
            Paste
            <CommandShortcut>cmd+v</CommandShortcut>
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Navigation">
          <CommandItem value="find">
            <Search className="h-4 w-4" />
            Find
            <CommandShortcut>cmd+f</CommandShortcut>
          </CommandItem>
          <CommandItem value="replace">
            <Search className="h-4 w-4" />
            Replace
            <CommandShortcut>cmd+alt+f</CommandShortcut>
          </CommandItem>
          <CommandItem value="go-to-line">
            <Search className="h-4 w-4" />
            Go to Line
            <CommandShortcut>cmd+g</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
};
