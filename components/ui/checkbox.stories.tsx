import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Checkbox } from './checkbox';
import { Label } from './label';
import { Star, Heart, CheckCircle, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const meta: Meta<typeof Checkbox> = {
  title: 'UI/Checkbox',
  component: Checkbox,
  parameters: {
    docs: {
      description: {
        component:
          'Checkbox component with support for various sizes, variants and custom icons.',
      },
      sourceState: 'hidden',
      controls: { sort: 'requiredFirst' },
      expanded: false,
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    variant: {
      control: 'select',
      options: ['default', 'brand', 'success', 'warning', 'error'],
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

// Single checkbox (round)
export const Default: Story = {
  args: {
    id: 'checkbox-default',
  },
};

export const WithLabel: Story = {
  render: args => (
    <div className="flex items-center space-x-2">
      <Checkbox id="checkbox-with-label" {...args} />
      <Label htmlFor="checkbox-with-label">Accept terms</Label>
    </div>
  ),
};

export const Disabled: Story = {
  render: args => (
    <div className="flex items-center space-x-2">
      <Checkbox id="checkbox-disabled" disabled {...args} />
      <Label htmlFor="checkbox-disabled" className="text-muted-foreground">
        Disabled checkbox
      </Label>
    </div>
  ),
};

// Sizes
export const Sizes: Story = {
  render: args => (
    <div className="flex items-center space-x-4">
      <div className="flex items-center space-x-2">
        <Checkbox id="checkbox-xs" size="xs" {...args} />
        <Label htmlFor="checkbox-xs">Extra small</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="checkbox-sm" size="sm" {...args} />
        <Label htmlFor="checkbox-sm">Small</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="checkbox-md" size="md" {...args} />
        <Label htmlFor="checkbox-md">Medium</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="checkbox-lg" size="lg" {...args} />
        <Label htmlFor="checkbox-lg">Large</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="checkbox-xl" size="xl" {...args} />
        <Label htmlFor="checkbox-xl">Extra large</Label>
      </div>
    </div>
  ),
};

// Variants
export const Variants: Story = {
  render: args => (
    <div className="flex items-center space-x-4">
      <div className="flex items-center space-x-2">
        <Checkbox id="checkbox-default" variant="default" {...args} />
        <Label htmlFor="checkbox-default">Default</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="checkbox-brand" variant="brand" {...args} />
        <Label htmlFor="checkbox-brand">Brand</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="checkbox-success" variant="success" {...args} />
        <Label htmlFor="checkbox-success">Success</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="checkbox-warning" variant="warning" {...args} />
        <Label htmlFor="checkbox-warning">Warning</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="checkbox-error" variant="error" {...args} />
        <Label htmlFor="checkbox-error">Error</Label>
      </div>
    </div>
  ),
};

// Custom icons
export const CustomIcons: Story = {
  render: args => (
    <div className="flex items-center space-x-4">
      <div className="flex items-center space-x-2">
        <Checkbox
          id="checkbox-star"
          icon={<Star className="h-3 w-3" />}
          {...args}
        />
        <Label htmlFor="checkbox-star">Favorite</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox
          id="checkbox-heart"
          icon={<Heart className="h-3 w-3" />}
          {...args}
        />
        <Label htmlFor="checkbox-heart">Liked</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox
          id="checkbox-check"
          icon={<CheckCircle className="h-3 w-3" />}
          {...args}
        />
        <Label htmlFor="checkbox-check">Verified</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox
          id="checkbox-alert"
          icon={<AlertCircle className="h-3 w-3" />}
          {...args}
        />
        <Label htmlFor="checkbox-alert">Important</Label>
      </div>
    </div>
  ),
};

// Multiple checkboxes (square)
export const MultipleCheckboxes: Story = {
  render: args => {
    const [checkedItems, setCheckedItems] = React.useState<
      Record<string, boolean>
    >({});

    const handleCheckboxChange = (id: string) => (checked: boolean) => {
      setCheckedItems(prev => ({
        ...prev,
        [id]: checked,
      }));
    };

    const checkboxes = [
      { id: 'option1', label: 'Option 1' },
      { id: 'option2', label: 'Option 2' },
      { id: 'option3', label: 'Option 3' },
      { id: 'option4', label: 'Option 4' },
    ];

    return (
      <div className="space-y-2">
        <Label className="text-base font-medium">Select options:</Label>
        {checkboxes.map(checkbox => (
          <div key={checkbox.id} className="flex items-center space-x-2">
            <Checkbox
              id={checkbox.id}
              checked={checkedItems[checkbox.id] || false}
              onCheckedChange={handleCheckboxChange(checkbox.id)}
              isGroup={true}
              {...args}
            />
            <Label htmlFor={checkbox.id}>{checkbox.label}</Label>
          </div>
        ))}
        <div className="mt-4 text-sm text-muted-foreground">
          Selected: {Object.values(checkedItems).filter(Boolean).length} of{' '}
          {checkboxes.length}
        </div>
      </div>
    );
  },
};

// Checkbox with colored wrapper (round and square)
export const ColoredWrapper: Story = {
  render: args => {
    const [checkedStates, setCheckedStates] = React.useState<
      Record<string, boolean>
    >({
      'checkbox-colored-round': true,
      'checkbox-success-colored-round': true,
      'checkbox-warning-colored-round': true,
      'checkbox-error-colored-round': true,
      'checkbox-colored-square': true,
      'checkbox-success-colored-square': true,
      'checkbox-warning-colored-square': true,
      'checkbox-error-colored-square': true,
    });

    const handleCheckboxChange = (id: string) => (checked: boolean) => {
      setCheckedStates(prev => ({
        ...prev,
        [id]: checked,
      }));
    };

    return (
      <div className="space-y-6">
        <div>
          <h3 className="text-sm font-medium mb-3">
            Round checkboxes (single):
          </h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="checkbox-colored-round"
                checked={checkedStates['checkbox-colored-round']}
                onCheckedChange={handleCheckboxChange('checkbox-colored-round')}
                wrapperClassName={cn(
                  'p-3 rounded-lg transition-colors',
                  checkedStates['checkbox-colored-round']
                    ? 'bg-muted border border-border'
                    : 'bg-background border border-border',
                )}
                {...args}
              />
              <Label htmlFor="checkbox-colored-round" className="font-medium">
                Round with colored wrapper
              </Label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="checkbox-success-colored-round"
                variant="success"
                checked={checkedStates['checkbox-success-colored-round']}
                onCheckedChange={handleCheckboxChange(
                  'checkbox-success-colored-round',
                )}
                wrapperClassName="p-3 rounded-lg bg-[var(--success-50)] border border-[var(--success-200)]"
                {...args}
              />
              <Label
                htmlFor="checkbox-success-colored-round"
                className="font-medium"
              >
                Success round
              </Label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="checkbox-warning-colored-round"
                variant="warning"
                checked={checkedStates['checkbox-warning-colored-round']}
                onCheckedChange={handleCheckboxChange(
                  'checkbox-warning-colored-round',
                )}
                wrapperClassName="p-3 rounded-lg bg-[var(--warning-50)] border border-[var(--warning-200)]"
                {...args}
              />
              <Label
                htmlFor="checkbox-warning-colored-round"
                className="font-medium"
              >
                Warning round
              </Label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="checkbox-error-colored-round"
                variant="error"
                checked={checkedStates['checkbox-error-colored-round']}
                onCheckedChange={handleCheckboxChange(
                  'checkbox-error-colored-round',
                )}
                wrapperClassName="p-3 rounded-lg bg-[var(--error-50)] border border-[var(--error-200)]"
                {...args}
              />
              <Label
                htmlFor="checkbox-error-colored-round"
                className="font-medium"
              >
                Error round
              </Label>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium mb-3">
            Square checkboxes (group):
          </h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="checkbox-colored-square"
                checked={checkedStates['checkbox-colored-square']}
                onCheckedChange={handleCheckboxChange(
                  'checkbox-colored-square',
                )}
                isGroup={true}
                wrapperClassName={cn(
                  'p-3 rounded-lg transition-colors',
                  checkedStates['checkbox-colored-square']
                    ? 'bg-muted border border-border'
                    : 'bg-background border border-border',
                )}
                {...args}
              />
              <Label htmlFor="checkbox-colored-square" className="font-medium">
                Square with colored wrapper
              </Label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="checkbox-success-colored-square"
                variant="success"
                checked={checkedStates['checkbox-success-colored-square']}
                onCheckedChange={handleCheckboxChange(
                  'checkbox-success-colored-square',
                )}
                isGroup={true}
                wrapperClassName="p-3 rounded-lg bg-[var(--success-50)] border border-[var(--success-200)]"
                {...args}
              />
              <Label
                htmlFor="checkbox-success-colored-square"
                className="font-medium"
              >
                Success square
              </Label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="checkbox-warning-colored-square"
                variant="warning"
                checked={checkedStates['checkbox-warning-colored-square']}
                onCheckedChange={handleCheckboxChange(
                  'checkbox-warning-colored-square',
                )}
                isGroup={true}
                wrapperClassName="p-3 rounded-lg bg-[var(--warning-50)] border border-[var(--warning-200)]"
                {...args}
              />
              <Label
                htmlFor="checkbox-warning-colored-square"
                className="font-medium"
              >
                Warning square
              </Label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="checkbox-error-colored-square"
                variant="error"
                checked={checkedStates['checkbox-error-colored-square']}
                onCheckedChange={handleCheckboxChange(
                  'checkbox-error-colored-square',
                )}
                isGroup={true}
                wrapperClassName="p-3 rounded-lg bg-[var(--error-50)] border border-[var(--error-200)]"
                {...args}
              />
              <Label
                htmlFor="checkbox-error-colored-square"
                className="font-medium"
              >
                Error square
              </Label>
            </div>
          </div>
        </div>
      </div>
    );
  },
};

// Form with checkboxes
export const FormWithCheckboxes: Story = {
  render: args => {
    const [formData, setFormData] = React.useState({
      terms: false,
      newsletter: false,
      notifications: false,
      marketing: false,
    });

    const handleChange = (field: string) => (checked: boolean) => {
      setFormData(prev => ({
        ...prev,
        [field]: checked,
      }));
    };

    return (
      <div className="space-y-4 p-4 border rounded-lg">
        <h3 className="text-lg font-medium">Account Settings</h3>

        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="terms"
              checked={formData.terms}
              onCheckedChange={handleChange('terms')}
              variant="brand"
              {...args}
            />
            <Label htmlFor="terms" className="font-medium">
              I accept the terms of service
            </Label>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="newsletter"
              checked={formData.newsletter}
              onCheckedChange={handleChange('newsletter')}
              icon={<Star className="h-3 w-3" />}
              {...args}
            />
            <Label htmlFor="newsletter">Subscribe to newsletter</Label>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="notifications"
              checked={formData.notifications}
              onCheckedChange={handleChange('notifications')}
              variant="success"
              icon={<CheckCircle className="h-3 w-3" />}
              {...args}
            />
            <Label htmlFor="notifications">Receive notifications</Label>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="marketing"
              checked={formData.marketing}
              onCheckedChange={handleChange('marketing')}
              variant="warning"
              icon={<AlertCircle className="h-3 w-3" />}
              {...args}
            />
            <Label htmlFor="marketing">Marketing materials</Label>
          </div>
        </div>

        <div className="pt-4 border-t">
          <div className="text-sm text-muted-foreground">
            Selected: {Object.values(formData).filter(Boolean).length} of{' '}
            {Object.keys(formData).length}
          </div>
        </div>
      </div>
    );
  },
};

// Disabled selection
export const DisabledSelection: Story = {
  render: args => {
    const [checkedItems, setCheckedItems] = React.useState<
      Record<string, boolean>
    >({
      option1: true,
      option2: false,
      option3: true,
    });

    const handleCheckboxChange = (id: string) => (checked: boolean) => {
      setCheckedItems(prev => ({
        ...prev,
        [id]: checked,
      }));
    };

    const checkboxes = [
      { id: 'option1', label: 'Option 1', disabled: true },
      { id: 'option2', label: 'Option 2', disabled: true },
      { id: 'option3', label: 'Option 3', disabled: true },
      { id: 'option4', label: 'Option 4', disabled: false },
    ];

    return (
      <div className="space-y-2">
        <Label className="text-base font-medium">
          Select options (some disabled):
        </Label>
        {checkboxes.map(checkbox => (
          <div key={checkbox.id} className="flex items-center space-x-2">
            <Checkbox
              id={checkbox.id}
              checked={checkedItems[checkbox.id] || false}
              onCheckedChange={handleCheckboxChange(checkbox.id)}
              disabled={checkbox.disabled}
              isGroup={true}
              {...args}
            />
            <Label
              htmlFor={checkbox.id}
              className={checkbox.disabled ? 'text-muted-foreground' : ''}
            >
              {checkbox.label}
            </Label>
          </div>
        ))}
      </div>
    );
  },
};

// Locked from selected checkbox
export const LockedFromSelected: Story = {
  render: args => {
    const [checkedItems, setCheckedItems] = React.useState<
      Record<string, boolean>
    >({});
    const [isAnySelected, setIsAnySelected] = React.useState(false);

    const handleCheckboxChange = (id: string) => (checked: boolean) => {
      const newCheckedItems = {
        ...checkedItems,
        [id]: checked,
      };
      setCheckedItems(newCheckedItems);
      setIsAnySelected(Object.values(newCheckedItems).some(Boolean));
    };

    const checkboxes = [
      { id: 'option1', label: 'Option 1' },
      { id: 'option2', label: 'Option 2' },
      { id: 'option3', label: 'Option 3' },
      { id: 'option4', label: 'Option 4' },
    ];

    return (
      <div className="space-y-2">
        <Label className="text-base font-medium">
          Select one option (others will be locked):
        </Label>
        {checkboxes.map(checkbox => (
          <div key={checkbox.id} className="flex items-center space-x-2">
            <Checkbox
              id={checkbox.id}
              checked={checkedItems[checkbox.id] || false}
              onCheckedChange={handleCheckboxChange(checkbox.id)}
              disabled={isAnySelected && !checkedItems[checkbox.id]}
              isGroup={true}
              {...args}
            />
            <Label
              htmlFor={checkbox.id}
              className={
                isAnySelected && !checkedItems[checkbox.id]
                  ? 'text-muted-foreground'
                  : ''
              }
            >
              {checkbox.label}
            </Label>
          </div>
        ))}
        {isAnySelected && (
          <div className="mt-2 text-sm text-[var(--warning-600)]">
            ⚠️ One option selected. Others are locked.
          </div>
        )}
      </div>
    );
  },
};

// Dropdown checkbox
export const DropdownCheckbox: Story = {
  render: args => {
    const [isReady, setIsReady] = React.useState(false);
    const [subOptions, setSubOptions] = React.useState<Record<string, boolean>>(
      {},
    );

    const handleSubOptionChange = (id: string) => (checked: boolean) => {
      setSubOptions(prev => ({
        ...prev,
        [id]: checked,
      }));
    };

    const subCheckboxes = [
      { id: 'sub1', label: 'Sub-option 1' },
      { id: 'sub2', label: 'Sub-option 2' },
      { id: 'sub3', label: 'Sub-option 3' },
    ];

    return (
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="ready"
            checked={isReady}
            onCheckedChange={checked => setIsReady(checked === true)}
            {...args}
          />
          <Label htmlFor="ready" className="font-medium">
            Are you ready?
          </Label>
        </div>

        {isReady && (
          <div className="ml-6 space-y-2 border-l-2 border-[var(--brand-200)] pl-4">
            <Label className="text-sm font-medium text-muted-foreground">
              Additional options:
            </Label>
            {subCheckboxes.map(checkbox => (
              <div key={checkbox.id} className="flex items-center space-x-2">
                <Checkbox
                  id={checkbox.id}
                  checked={subOptions[checkbox.id] || false}
                  onCheckedChange={handleSubOptionChange(checkbox.id)}
                  size="sm"
                  isGroup={true}
                  {...args}
                />
                <Label htmlFor={checkbox.id} className="text-sm">
                  {checkbox.label}
                </Label>
              </div>
            ))}
            <div className="text-xs text-muted-foreground">
              Selected: {Object.values(subOptions).filter(Boolean).length} of{' '}
              {subCheckboxes.length}
            </div>
          </div>
        )}
      </div>
    );
  },
};

// Interactive example
export const InteractiveExample: Story = {
  render: args => {
    const [selectedItems, setSelectedItems] = React.useState<string[]>([]);

    const items = [
      { id: 'item1', label: 'Item 1', icon: <Star className="h-3 w-3" /> },
      { id: 'item2', label: 'Item 2', icon: <Heart className="h-3 w-3" /> },
      {
        id: 'item3',
        label: 'Item 3',
        icon: <CheckCircle className="h-3 w-3" />,
      },
      {
        id: 'item4',
        label: 'Item 4',
        icon: <AlertCircle className="h-3 w-3" />,
      },
    ];

    const handleItemToggle = (itemId: string) => (checked: boolean) => {
      setSelectedItems(prev =>
        checked ? [...prev, itemId] : prev.filter(id => id !== itemId),
      );
    };

    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium">Select items</h3>
          <div className="text-sm text-muted-foreground">
            Selected: {selectedItems.length} of {items.length}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {items.map(item => (
            <div
              key={item.id}
              className={cn(
                'p-3 border rounded-lg transition-colors cursor-pointer',
                selectedItems.includes(item.id)
                  ? 'bg-[var(--brand-50)] border-[var(--brand-200)]'
                  : 'bg-muted border-border hover:bg-accent',
              )}
              onClick={() =>
                handleItemToggle(item.id)(!selectedItems.includes(item.id))
              }
            >
              <div className="flex items-center space-x-2">
                <Checkbox
                  id={item.id}
                  checked={selectedItems.includes(item.id)}
                  onCheckedChange={handleItemToggle(item.id)}
                  icon={item.icon}
                  wrapperClassName="flex-shrink-0"
                  {...args}
                />
                <Label htmlFor={item.id} className="cursor-pointer">
                  {item.label}
                </Label>
              </div>
            </div>
          ))}
        </div>

        {selectedItems.length > 0 && (
          <div className="p-3 bg-[var(--success-50)] border border-[var(--success-200)] rounded-lg">
            <div className="text-sm font-medium text-[var(--success-800)]">
              Selected items:
            </div>
            <div className="text-sm text-[var(--success-700)] mt-1">
              {selectedItems
                .map(id => items.find(item => item.id === id)?.label)
                .join(', ')}
            </div>
          </div>
        )}
      </div>
    );
  },
};
