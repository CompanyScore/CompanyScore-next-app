'use client';

import React from 'react';

interface TypographyProps {
  className?: string;
}

export function Typography({ className }: TypographyProps) {
  const fontWeights = [
    { name: 'Thin', class: 'font-thin' },
    { name: 'ExtraLight', class: 'font-extralight' },
    { name: 'Light', class: 'font-light' },
    { name: 'Regular', class: 'font-normal' },
    { name: 'Medium', class: 'font-medium' },
    { name: 'SemiBold', class: 'font-semibold' },
    { name: 'Bold', class: 'font-bold' },
    { name: 'ExtraBold', class: 'font-extrabold' },
    { name: 'Black', class: 'font-black' },
  ];

  const fontSizes = [
    { name: 'text-7xl', class: 'text-7xl' },
    { name: 'text-6xl', class: 'text-6xl' },
    { name: 'text-5xl', class: 'text-5xl' },
    { name: 'text-4xl', class: 'text-4xl' },
    { name: 'text-3xl', class: 'text-3xl' },
    { name: 'text-2xl', class: 'text-2xl' },
    { name: 'text-xl', class: 'text-xl' },
    { name: 'text-lg', class: 'text-lg' },
    { name: 'text-base', class: 'text-base' },
    { name: 'text-sm', class: 'text-sm' },
    { name: 'text-xs', class: 'text-xs' },
  ];

  return (
    <div className={`p-6 space-y-8 ${className}`}>
      {/* Header */}
      <div className="space-y-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
          Typography
        </h1>
        <div className="space-y-2">
          <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
            {getComputedStyle(document.documentElement)
              .getPropertyValue('--font-family')
              .replace(/['"]/g, '') || 'Inter'}
          </p>
          <div className="text-6xl font-normal text-gray-900 dark:text-gray-100">
            Ag
          </div>
          <div className="text-sm font-normal text-gray-600 dark:text-gray-400 tracking-wider">
            ABCDEFGHIJKLMNOPQRSTUVWXYZ
            <br />
            abcdefghijklmnopqrstuvwxyz
            <br />
            0123456789 !@#$%^&*()
          </div>
        </div>
      </div>

      {/* Typography Matrix */}
      <div className="relative">
        <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 dark:scrollbar-thumb-gray-600 dark:scrollbar-track-gray-800">
          <div className="grid grid-cols-[auto_repeat(9,1fr)] gap-2 sm:gap-4 min-w-max">
            {/* Header Row */}
            <div className="p-4 sm:p-8 lg:p-16 font-semibold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 sticky left-0 bg-white dark:bg-gray-900 z-10">
              Size
            </div>
            {fontWeights.map(weight => (
              <div
                key={weight.name}
                className="p-2 sm:p-4 text-center font-semibold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700 min-w-[100px] sm:min-w-[120px] lg:min-w-[140px]"
              >
                {weight.name}
              </div>
            ))}

            {/* Content Rows */}
            {fontSizes.map(size => (
              <React.Fragment key={size.name}>
                <div className="p-2 sm:p-4 font-mono text-xs sm:text-sm text-gray-600 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700 sticky left-0 bg-white dark:bg-gray-900 z-10">
                  {size.name}
                </div>
                {fontWeights.map(weight => (
                  <div
                    key={`${size.name}-${weight.name}`}
                    className="p-2 sm:p-4 border-b border-gray-200 dark:border-gray-700 text-center min-w-[100px] sm:min-w-[120px] lg:min-w-[140px]"
                  >
                    <div
                      className={`${size.class} ${weight.class} text-gray-900 dark:text-gray-100 leading-tight`}
                    >
                      {size.name}
                    </div>
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Usage Examples */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Usage Examples
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Headings
            </h3>
            <div className="space-y-1">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
                Heading 1
              </h1>
              <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">
                Heading 2
              </h2>
              <h3 className="text-2xl font-medium text-gray-900 dark:text-gray-100">
                Heading 3
              </h3>
              <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
                Heading 4
              </h4>
              <h5 className="text-lg font-medium text-gray-800 dark:text-gray-200">
                Heading 5
              </h5>
              <h6 className="text-base font-medium text-gray-800 dark:text-gray-200">
                Heading 6
              </h6>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Body Text
            </h3>
            <div className="space-y-1">
              <p className="text-lg font-normal text-gray-700 dark:text-gray-300">
                Large body text
              </p>
              <p className="text-base font-normal text-gray-700 dark:text-gray-300">
                Regular body text
              </p>
              <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
                Small body text
              </p>
              <p className="text-xs font-normal text-gray-500 dark:text-gray-500">
                Extra small text
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
