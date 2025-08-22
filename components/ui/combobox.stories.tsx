import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Combobox, ComboboxOption } from './combobox';

const meta: Meta<typeof Combobox> = {
  title: 'UI/Combobox',
  component: Combobox,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Компонент автодополнения с поиском и выпадающим списком опций.',
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
    disabled: {
      control: { type: 'boolean' },
      description: 'Отключен ли компонент',
    },
    multiple: {
      control: { type: 'boolean' },
      description: 'Множественный выбор',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Плейсхолдер для пустого состояния',
    },
    searchPlaceholder: {
      control: { type: 'text' },
      description: 'Плейсхолдер для поля поиска',
    },
    emptyMessage: {
      control: { type: 'text' },
      description: 'Сообщение при отсутствии результатов',
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

// Базовые опции для демонстрации
const frameworks: ComboboxOption[] = [
  { value: 'next.js', label: 'Next.js' },
  { value: 'sveltekit', label: 'SvelteKit' },
  { value: 'nuxt.js', label: 'Nuxt.js' },
  { value: 'remix', label: 'Remix' },
  { value: 'astro', label: 'Astro' },
  { value: 'gatsby', label: 'Gatsby' },
  { value: 'vite', label: 'Vite' },
  { value: 'webpack', label: 'Webpack' },
];

const countries: ComboboxOption[] = [
  { value: 'russia', label: 'Россия' },
  { value: 'usa', label: 'США' },
  { value: 'germany', label: 'Германия' },
  { value: 'france', label: 'Франция' },
  { value: 'japan', label: 'Япония' },
  { value: 'china', label: 'Китай' },
  { value: 'uk', label: 'Великобритания' },
  { value: 'canada', label: 'Канада' },
];

const companies: ComboboxOption[] = [
  { value: 'apple', label: 'Apple Inc.' },
  { value: 'google', label: 'Google LLC' },
  { value: 'microsoft', label: 'Microsoft Corporation' },
  { value: 'amazon', label: 'Amazon.com Inc.' },
  { value: 'meta', label: 'Meta Platforms Inc.' },
  { value: 'netflix', label: 'Netflix Inc.' },
  { value: 'tesla', label: 'Tesla Inc.' },
  { value: 'nvidia', label: 'NVIDIA Corporation' },
];

// Основные варианты
export const Default: Story = {
  render: args => {
    const [value, setValue] = React.useState('');

    return (
      <Combobox
        {...args}
        options={frameworks}
        value={value}
        onValueChange={setValue}
        placeholder="Выберите фреймворк..."
        searchPlaceholder="Поиск фреймворка..."
      />
    );
  },
};

export const WithPreselectedValue: Story = {
  render: args => {
    const [value, setValue] = React.useState('next.js');

    return (
      <Combobox
        {...args}
        options={frameworks}
        value={value}
        onValueChange={setValue}
        placeholder="Выберите фреймворк..."
      />
    );
  },
};

// Варианты стилей
export const Variants: Story = {
  render: args => {
    const [values, setValues] = React.useState<Record<string, string>>({});

    const handleValueChange = (variant: string) => (value: string) => {
      setValues(prev => ({ ...prev, [variant]: value }));
    };

    return (
      <div className="space-y-4">
        <Combobox
          {...args}
          variant="default"
          options={frameworks}
          value={values.default || ''}
          onValueChange={handleValueChange('default')}
          placeholder="Default variant"
        />

        <Combobox
          {...args}
          variant="secondary"
          options={frameworks}
          value={values.secondary || ''}
          onValueChange={handleValueChange('secondary')}
          placeholder="Secondary variant"
        />

        <Combobox
          {...args}
          variant="outline"
          options={frameworks}
          value={values.outline || ''}
          onValueChange={handleValueChange('outline')}
          placeholder="Outline variant"
        />

        <Combobox
          {...args}
          variant="ghost"
          options={frameworks}
          value={values.ghost || ''}
          onValueChange={handleValueChange('ghost')}
          placeholder="Ghost variant"
        />

        <Combobox
          {...args}
          variant="brand"
          options={frameworks}
          value={values.brand || ''}
          onValueChange={handleValueChange('brand')}
          placeholder="Brand variant"
        />
      </div>
    );
  },
};

// Размеры
export const Sizes: Story = {
  render: args => {
    const [values, setValues] = React.useState<Record<string, string>>({});

    const handleValueChange = (size: string) => (value: string) => {
      setValues(prev => ({ ...prev, [size]: value }));
    };

    return (
      <div className="space-y-4">
        <Combobox
          {...args}
          size="sm"
          options={frameworks}
          value={values.sm || ''}
          onValueChange={handleValueChange('sm')}
          placeholder="Small size"
        />

        <Combobox
          {...args}
          size="md"
          options={frameworks}
          value={values.md || ''}
          onValueChange={handleValueChange('md')}
          placeholder="Medium size (default)"
        />

        <Combobox
          {...args}
          size="lg"
          options={frameworks}
          value={values.lg || ''}
          onValueChange={handleValueChange('lg')}
          placeholder="Large size"
        />
      </div>
    );
  },
};

// Множественный выбор
export const Multiple: Story = {
  render: args => {
    const [selectedValues, setSelectedValues] = React.useState<string[]>([]);

    return (
      <div className="space-y-4">
        <Combobox
          {...args}
          multiple
          options={countries}
          selectedValues={selectedValues}
          onSelectedValuesChange={setSelectedValues}
          placeholder="Выберите страны..."
          searchPlaceholder="Поиск стран..."
        />

        {selectedValues.length > 0 && (
          <div className="p-3 bg-[var(--success-50)] border border-[var(--success-200)] rounded-lg">
            <div className="text-sm font-medium text-[var(--success-800)]">
              Выбранные страны:
            </div>
            <div className="text-sm text-[var(--success-700)] mt-1">
              {selectedValues
                .map(
                  value =>
                    countries.find(country => country.value === value)?.label,
                )
                .join(', ')}
            </div>
          </div>
        )}
      </div>
    );
  },
};

// Отключенное состояние
export const Disabled: Story = {
  render: args => {
    const [value, setValue] = React.useState('next.js');

    return (
      <div className="space-y-4">
        <Combobox
          {...args}
          options={frameworks}
          value={value}
          onValueChange={setValue}
          placeholder="Отключенный combobox"
          disabled
        />
      </div>
    );
  },
};

// Опции с отключенными элементами
export const WithDisabledOptions: Story = {
  render: args => {
    const [value, setValue] = React.useState('');

    const optionsWithDisabled: ComboboxOption[] = [
      { value: 'apple', label: 'Apple Inc.' },
      { value: 'google', label: 'Google LLC' },
      { value: 'microsoft', label: 'Microsoft Corporation', disabled: true },
      { value: 'amazon', label: 'Amazon.com Inc.' },
      { value: 'meta', label: 'Meta Platforms Inc.', disabled: true },
      { value: 'netflix', label: 'Netflix Inc.' },
      { value: 'tesla', label: 'Tesla Inc.' },
      { value: 'nvidia', label: 'NVIDIA Corporation' },
    ];

    return (
      <Combobox
        {...args}
        options={optionsWithDisabled}
        value={value}
        onValueChange={setValue}
        placeholder="Выберите компанию..."
        searchPlaceholder="Поиск компаний..."
        emptyMessage="Компания не найдена"
      />
    );
  },
};

// Кастомные сообщения
export const CustomMessages: Story = {
  render: args => {
    const [value, setValue] = React.useState('');

    return (
      <Combobox
        {...args}
        options={companies}
        value={value}
        onValueChange={setValue}
        placeholder="Начните вводить название компании..."
        searchPlaceholder="Введите название для поиска..."
        emptyMessage="К сожалению, такой компании не найдено"
      />
    );
  },
};

// Интерактивный пример
export const InteractiveExample: Story = {
  render: args => {
    const [selectedFramework, setSelectedFramework] = React.useState('');
    const [selectedCountries, setSelectedCountries] = React.useState<string[]>(
      [],
    );
    const [selectedCompany, setSelectedCompany] = React.useState('');

    return (
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="text-lg font-medium">Выберите фреймворк</h3>
          <Combobox
            {...args}
            options={frameworks}
            value={selectedFramework}
            onValueChange={setSelectedFramework}
            placeholder="Выберите фреймворк..."
          />
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-medium">
            Выберите страны (множественный выбор)
          </h3>
          <Combobox
            {...args}
            multiple
            options={countries}
            selectedValues={selectedCountries}
            onSelectedValuesChange={setSelectedCountries}
            placeholder="Выберите страны..."
          />
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-medium">Выберите компанию</h3>
          <Combobox
            {...args}
            options={companies}
            value={selectedCompany}
            onValueChange={setSelectedCompany}
            placeholder="Выберите компанию..."
          />
        </div>

        {(selectedFramework ||
          selectedCountries.length > 0 ||
          selectedCompany) && (
          <div className="p-4 bg-gray-50 border rounded-lg">
            <h4 className="font-medium mb-2">Выбранные значения:</h4>
            <div className="space-y-1 text-sm">
              {selectedFramework && (
                <div>
                  Фреймворк:{' '}
                  {frameworks.find(f => f.value === selectedFramework)?.label}
                </div>
              )}
              {selectedCountries.length > 0 && (
                <div>
                  Страны:{' '}
                  {selectedCountries
                    .map(value => countries.find(c => c.value === value)?.label)
                    .join(', ')}
                </div>
              )}
              {selectedCompany && (
                <div>
                  Компания:{' '}
                  {companies.find(c => c.value === selectedCompany)?.label}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    );
  },
};

// Пример с фильтрацией
export const WithFiltering: Story = {
  render: args => {
    const [value, setValue] = React.useState('');
    const [searchTerm] = React.useState('');

    const allOptions: ComboboxOption[] = [
      ...frameworks.map(f => ({ ...f, label: `Framework: ${f.label}` })),
      ...countries.map(c => ({ ...c, label: `Country: ${c.label}` })),
      ...companies.map(c => ({ ...c, label: `Company: ${c.label}` })),
    ];

    const filteredOptions = allOptions.filter(option =>
      option.label.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    return (
      <div className="space-y-4">
        <Combobox
          {...args}
          options={filteredOptions}
          value={value}
          onValueChange={setValue}
          placeholder="Поиск по всем категориям..."
          searchPlaceholder="Введите для поиска..."
          emptyMessage="Ничего не найдено"
        />

        <div className="text-sm text-gray-600">
          Найдено: {filteredOptions.length} из {allOptions.length} опций
        </div>
      </div>
    );
  },
};
