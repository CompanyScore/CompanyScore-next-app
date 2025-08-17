import React from 'react';

export function SpacingDemo() {
  const spacingSizes = [
    { name: 'xs', value: '0.25rem', px: '4px' },
    { name: 'sm', value: '0.5rem', px: '8px' },
    { name: 'md', value: '1rem', px: '16px' },
    { name: 'lg', value: '1.5rem', px: '24px' },
    { name: 'xl', value: '2rem', px: '32px' },
    { name: '2xl', value: '3rem', px: '48px' },
    { name: '3xl', value: '4rem', px: '64px' },
    { name: '4xl', value: '6rem', px: '96px' },
    { name: '5xl', value: '8rem', px: '128px' },
  ];

  const spacingTypes = [
    { type: 'padding', prefix: 'p', description: 'Padding (все стороны)' },
    { type: 'padding-x', prefix: 'px', description: 'Padding (горизонтально)' },
    { type: 'padding-y', prefix: 'py', description: 'Padding (вертикально)' },
    { type: 'margin', prefix: 'm', description: 'Margin (все стороны)' },
    { type: 'margin-x', prefix: 'mx', description: 'Margin (горизонтально)' },
    { type: 'margin-y', prefix: 'my', description: 'Margin (вертикально)' },
    { type: 'gap', prefix: 'gap', description: 'Gap (для flex/grid)' },
  ];

  return (
    <div className="p-6 space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">
          Spacing System Demo
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Демонстрация системы отступов с использованием CSS переменных и
          утилитарных классов.
        </p>
      </div>

      {/* Spacing Scale */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
          Spacing Scale
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {spacingSizes.map(spacing => (
            <div
              key={spacing.name}
              className="border border-gray-200 dark:border-gray-700 rounded-lg p-4"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-sm text-gray-600 dark:text-gray-400">
                  {spacing.name}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {spacing.px}
                </span>
              </div>
              <div
                className="bg-brand-300 rounded"
                style={{ height: spacing.value, width: '100%' }}
              />
              <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                {spacing.value}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Spacing Utilities */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
          Spacing Utilities
        </h3>
        <div className="space-y-6">
          {spacingTypes.map(spacingType => (
            <div key={spacingType.type}>
              <h4 className="text-md font-medium mb-3 text-gray-800 dark:text-gray-200">
                {spacingType.description}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {spacingSizes.map(size => (
                  <div
                    key={`${spacingType.prefix}-${size.name}`}
                    className={`border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800 ${
                      spacingType.prefix === 'p' ||
                      spacingType.prefix === 'px' ||
                      spacingType.prefix === 'py'
                        ? `p-${size.name}`
                        : spacingType.prefix === 'm' ||
                            spacingType.prefix === 'mx' ||
                            spacingType.prefix === 'my'
                          ? `m-${size.name}`
                          : ''
                    }`}
                  >
                    <div className="bg-white dark:bg-gray-700 rounded p-2">
                      <div className="font-mono text-xs text-gray-600 dark:text-gray-400 mb-1">
                        .{spacingType.prefix}-{size.name}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {size.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gap Demo */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
          Gap Demo (Flexbox)
        </h3>
        <div className="space-y-4">
          {spacingSizes.map(size => (
            <div key={`gap-${size.name}`}>
              <div className="text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                .gap-{size.name} ({size.value})
              </div>
              <div
                className={`flex gap-${size.name} bg-gray-100 dark:bg-gray-800 p-4 rounded-lg`}
              >
                <div className="bg-brand-300 rounded p-2 text-xs font-medium">
                  Item 1
                </div>
                <div className="bg-brand-400 rounded p-2 text-xs font-medium">
                  Item 2
                </div>
                <div className="bg-brand-500 rounded p-2 text-xs font-medium">
                  Item 3
                </div>
                <div className="bg-brand-600 rounded p-2 text-xs font-medium">
                  Item 4
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CSS Variables */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
          CSS Variables
        </h3>
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
          <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto">
            {`:root {
  --spacing-xs: 0.25rem;    /* 4px */
  --spacing-sm: 0.5rem;     /* 8px */
  --spacing-md: 1rem;       /* 16px */
  --spacing-lg: 1.5rem;     /* 24px */
  --spacing-xl: 2rem;       /* 32px */
  --spacing-2xl: 3rem;      /* 48px */
  --spacing-3xl: 4rem;      /* 64px */
  --spacing-4xl: 6rem;      /* 96px */
  --spacing-5xl: 8rem;      /* 128px */
}`}
          </pre>
        </div>
      </div>

      {/* Usage Examples */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
          Usage Examples
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="font-medium text-gray-800 dark:text-gray-200">
              Card Component
            </h4>
            <div className="p-lg bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <h5 className="text-lg font-semibold mb-sm text-gray-900 dark:text-gray-100">
                Card Title
              </h5>
              <p className="text-gray-600 dark:text-gray-400 mb-md">
                This card uses p-lg for padding, mb-sm for margin-bottom between
                title and content, and mb-md for margin-bottom before the
                button.
              </p>
              <button className="px-md py-sm bg-brand-500 text-white rounded hover:bg-brand-600 transition-colors">
                Action Button
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium text-gray-800 dark:text-gray-200">
              Layout Grid
            </h4>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-md">
              <div className="grid grid-cols-2 gap-md">
                <div className="bg-white dark:bg-gray-700 rounded p-sm text-center text-sm">
                  Grid Item 1
                </div>
                <div className="bg-white dark:bg-gray-700 rounded p-sm text-center text-sm">
                  Grid Item 2
                </div>
                <div className="bg-white dark:bg-gray-700 rounded p-sm text-center text-sm">
                  Grid Item 3
                </div>
                <div className="bg-white dark:bg-gray-700 rounded p-sm text-center text-sm">
                  Grid Item 4
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
