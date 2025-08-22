import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { RadioGroup, RadioGroupItem } from './radio-group';
import { Label } from './label';

const meta: Meta<typeof RadioGroup> = {
  title: 'UI/RadioGroup',
  component: RadioGroup,
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
    <RadioGroup defaultValue="option-one">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="option-one" />
        <Label htmlFor="option-one">Option One</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="option-two" />
        <Label htmlFor="option-two">Option Two</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-three" id="option-three" />
        <Label htmlFor="option-three">Option Three</Label>
      </div>
    </RadioGroup>
  ),
};

// С размерами
export const Sizes: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Размеры</h3>

        <div className="space-y-3">
          <h4 className="text-sm text-muted-foreground">Small</h4>
          <RadioGroup defaultValue="sm-one">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="sm-one" id="sm-one" size="sm" />
              <Label htmlFor="sm-one">Small Option One</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="sm-two" id="sm-two" size="sm" />
              <Label htmlFor="sm-two">Small Option Two</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-3">
          <h4 className="text-sm text-muted-foreground">Medium (Default)</h4>
          <RadioGroup defaultValue="md-one">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="md-one" id="md-one" size="md" />
              <Label htmlFor="md-one">Medium Option One</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="md-two" id="md-two" size="md" />
              <Label htmlFor="md-two">Medium Option Two</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-3">
          <h4 className="text-sm text-muted-foreground">Large</h4>
          <RadioGroup defaultValue="lg-one">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="lg-one" id="lg-one" size="lg" />
              <Label htmlFor="lg-one">Large Option One</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="lg-two" id="lg-two" size="lg" />
              <Label htmlFor="lg-two">Large Option Two</Label>
            </div>
          </RadioGroup>
        </div>
      </div>
    </div>
  ),
};

// С вариантами
export const Variants: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Варианты</h3>

        <div className="space-y-3">
          <h4 className="text-sm text-muted-foreground">Default</h4>
          <RadioGroup defaultValue="default-one">
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="default-one"
                id="default-one"
                variant="default"
              />
              <Label htmlFor="default-one">Default Option One</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="default-two"
                id="default-two"
                variant="default"
              />
              <Label htmlFor="default-two">Default Option Two</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-3">
          <h4 className="text-sm text-muted-foreground">Brand</h4>
          <RadioGroup defaultValue="brand-one">
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="brand-one"
                id="brand-one"
                variant="brand"
              />
              <Label htmlFor="brand-one">Brand Option One</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="brand-two"
                id="brand-two"
                variant="brand"
              />
              <Label htmlFor="brand-two">Brand Option Two</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-3">
          <h4 className="text-sm text-muted-foreground">Success</h4>
          <RadioGroup defaultValue="success-one">
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="success-one"
                id="success-one"
                variant="success"
              />
              <Label htmlFor="success-one">Success Option One</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="success-two"
                id="success-two"
                variant="success"
              />
              <Label htmlFor="success-two">Success Option Two</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-3">
          <h4 className="text-sm text-muted-foreground">Warning</h4>
          <RadioGroup defaultValue="warning-one">
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="warning-one"
                id="warning-one"
                variant="warning"
              />
              <Label htmlFor="warning-one">Warning Option One</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="warning-two"
                id="warning-two"
                variant="warning"
              />
              <Label htmlFor="warning-two">Warning Option Two</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-3">
          <h4 className="text-sm text-muted-foreground">Error</h4>
          <RadioGroup defaultValue="error-one">
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="error-one"
                id="error-one"
                variant="error"
              />
              <Label htmlFor="error-one">Error Option One</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="error-two"
                id="error-two"
                variant="error"
              />
              <Label htmlFor="error-two">Error Option Two</Label>
            </div>
          </RadioGroup>
        </div>
      </div>
    </div>
  ),
};

// Отключенные элементы
export const Disabled: Story = {
  render: () => (
    <RadioGroup defaultValue="enabled">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="enabled" id="enabled" />
        <Label htmlFor="enabled">Enabled Option</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="disabled" id="disabled" disabled />
        <Label htmlFor="disabled">Disabled Option</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem
          value="another-disabled"
          id="another-disabled"
          disabled
        />
        <Label htmlFor="another-disabled">Another Disabled Option</Label>
      </div>
    </RadioGroup>
  ),
};

// Интерактивный пример
export const InteractiveExample: Story = {
  render: () => {
    const [selectedValue, setSelectedValue] = React.useState('option-one');
    const [size, setSize] = React.useState<'sm' | 'md' | 'lg'>('md');
    const [variant, setVariant] = React.useState<
      'default' | 'brand' | 'success' | 'warning' | 'error'
    >('default');

    return (
      <div className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-sm font-medium">Настройки</h3>

          <div className="space-y-2">
            <Label className="text-sm font-medium">Размер</Label>
            <RadioGroup
              value={size}
              onValueChange={value => setSize(value as any)}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="sm" id="size-sm" />
                <Label htmlFor="size-sm">Small</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="md" id="size-md" />
                <Label htmlFor="size-md">Medium</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="lg" id="size-lg" />
                <Label htmlFor="size-lg">Large</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-medium">Вариант</Label>
            <RadioGroup
              value={variant}
              onValueChange={value => setVariant(value as any)}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="default" id="variant-default" />
                <Label htmlFor="variant-default">Default</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="brand" id="variant-brand" />
                <Label htmlFor="variant-brand">Brand</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="success" id="variant-success" />
                <Label htmlFor="variant-success">Success</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="warning" id="variant-warning" />
                <Label htmlFor="variant-warning">Warning</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="error" id="variant-error" />
                <Label htmlFor="variant-error">Error</Label>
              </div>
            </RadioGroup>
          </div>
        </div>

        <div className="space-y-2">
          <Label className="text-sm font-medium">
            Результат (выбранное значение: {selectedValue})
          </Label>
          <RadioGroup value={selectedValue} onValueChange={setSelectedValue}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="option-one"
                id="result-one"
                size={size}
                variant={variant}
              />
              <Label htmlFor="result-one">Option One</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="option-two"
                id="result-two"
                size={size}
                variant={variant}
              />
              <Label htmlFor="result-two">Option Two</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="option-three"
                id="result-three"
                size={size}
                variant={variant}
              />
              <Label htmlFor="result-three">Option Three</Label>
            </div>
          </RadioGroup>
        </div>
      </div>
    );
  },
};
