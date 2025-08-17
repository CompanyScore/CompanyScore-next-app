import React, { useState, useEffect } from 'react';

export function BreakpointDemo() {
  const [currentWidth, setCurrentWidth] = useState(0);
  const [currentBreakpoint, setCurrentBreakpoint] = useState('');

  const breakpoints = [
    {
      name: 'mobile',
      width: 0,
      description: 'Mobile devices',
      columns: 1,
      margin: '1.5rem (24px)',
      gutter: '1.5rem (24px)',
    },
    {
      name: 'sm',
      width: 640,
      description: 'Small devices (phones)',
      columns: 2,
      margin: '1.5rem (24px)',
      gutter: '1.5rem (24px)',
    },
    {
      name: 'md',
      width: 768,
      description: 'Medium devices (tablets)',
      columns: 6,
      margin: '2.25rem (36px)',
      gutter: '1.5rem (24px)',
    },
    {
      name: 'lg',
      width: 1024,
      description: 'Large devices (laptops)',
      columns: 8,
      margin: '2.75rem (44px)',
      gutter: '1.5rem (24px)',
    },
    {
      name: 'xl',
      width: 1280,
      description: 'Extra large devices (desktops)',
      columns: 12,
      margin: '1.75rem (28px)',
      gutter: '1.5rem (24px)',
    },
    {
      name: '2xl',
      width: 1536,
      description: '2X large devices (large desktops)',
      columns: 12,
      margin: '3rem (48px)',
      gutter: '1.5rem (24px)',
    },
  ];

  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth;
      setCurrentWidth(width);

      // Определяем текущий брейкпоинт
      let breakpoint = '';
      for (let i = breakpoints.length - 1; i >= 0; i--) {
        if (width >= breakpoints[i].width) {
          breakpoint = breakpoints[i].name;
          break;
        }
      }
      setCurrentBreakpoint(breakpoint);
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const getBreakpointColor = (breakpointName: string) => {
    const colors = {
      mobile: 'bg-gray-500',
      sm: 'bg-blue-500',
      md: 'bg-green-500',
      lg: 'bg-yellow-500',
      xl: 'bg-orange-500',
      '2xl': 'bg-red-500',
    };
    return colors[breakpointName as keyof typeof colors] || 'bg-gray-500';
  };

  return (
    <div className="p-6 space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">
          Breakpoint System Demo
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Демонстрация системы брейкпоинтов для адаптивного дизайна.
        </p>
      </div>

      {/* Current Viewport Info */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
          Current Viewport
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              {currentWidth}px
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Width
            </div>
          </div>
          <div className="text-center">
            <div
              className={`text-2xl font-bold ${getBreakpointColor(currentBreakpoint)} text-white px-3 py-1 rounded-lg inline-block`}
            >
              {currentBreakpoint || 'xs'}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Breakpoint
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">
              {window.innerHeight}px
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Height
            </div>
          </div>
        </div>
      </div>

      {/* Breakpoint Scale */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
          Breakpoint Scale
        </h3>
        <div className="space-y-4">
          {breakpoints.map(breakpoint => (
            <div
              key={breakpoint.name}
              className="border border-gray-200 dark:border-gray-700 rounded-lg p-4"
            >
              <div className="flex items-center justify-between mb-3">
                <div>
                  <span
                    className={`inline-block px-3 py-1 rounded-lg text-white font-semibold text-sm ${getBreakpointColor(breakpoint.name)}`}
                  >
                    {breakpoint.name}
                  </span>
                  <span className="ml-3 text-lg font-mono text-gray-700 dark:text-gray-300">
                    {breakpoint.width > 0 ? `${breakpoint.width}px` : 'default'}
                  </span>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {breakpoint.description}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-4 mb-3 text-xs">
                <div>
                  <div className="font-semibold text-gray-700 dark:text-gray-300">
                    Columns
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">
                    {breakpoint.columns}
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-gray-700 dark:text-gray-300">
                    Margin
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">
                    {breakpoint.margin}
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-gray-700 dark:text-gray-300">
                    Gutter
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">
                    {breakpoint.gutter}
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-4">
                  <div
                    className={`${getBreakpointColor(breakpoint.name)} h-4 rounded-full transition-all duration-300`}
                    style={{
                      width: `${Math.min((breakpoint.width / 1536) * 100, 100)}%`,
                    }}
                  />
                </div>
                <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                  CSS Variable: <code>--breakpoint-{breakpoint.name}</code>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Responsive Grid Demo */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
          Responsive Grid Demo
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12 2xl:grid-cols-12 gap-6">
          {Array.from({ length: 12 }, (_, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-brand-100 to-brand-200 dark:from-brand-900/30 dark:to-brand-800/30 rounded-lg p-4 text-center border border-brand-200 dark:border-brand-700"
            >
              <div className="text-lg font-bold text-brand-700 dark:text-brand-300">
                {i + 1}
              </div>
              <div className="text-xs text-brand-600 dark:text-brand-400">
                Grid Item
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
          <p>Количество колонок изменяется в зависимости от размера экрана:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              <code>mobile</code> (до 640px): 1 колонка, margin: 1.5rem, gutter:
              1.5rem
            </li>
            <li>
              <code>sm</code> (640px+): 2 колонки, margin: 1.5rem, gutter:
              1.5rem
            </li>
            <li>
              <code>md</code> (768px+): 6 колонок, margin: 2.25rem, gutter:
              1.5rem
            </li>
            <li>
              <code>lg</code> (1024px+): 8 колонок, margin: 2.75rem, gutter:
              1.5rem
            </li>
            <li>
              <code>xl</code> (1280px+): 12 колонок, margin: 1.75rem, gutter:
              1.5rem
            </li>
            <li>
              <code>2xl</code> (1536px+): 12 колонок, margin: 3rem, gutter:
              1.5rem
            </li>
          </ul>
        </div>
      </div>

      {/* Responsive Text Demo */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
          Responsive Text Demo
        </h3>
        <div className="space-y-4">
          <div className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <div className="font-semibold mb-2">Адаптивный текст:</div>
            <div>Этот текст изменяет размер в зависимости от брейкпоинта</div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <div className="text-sm font-medium text-blue-700 dark:text-blue-300 mb-2">
                Mobile First
              </div>
              <div className="text-xs text-blue-600 dark:text-blue-400">
                Дизайн начинается с мобильных устройств
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
              <div className="text-sm font-medium text-green-700 dark:text-green-300 mb-2">
                Progressive Enhancement
              </div>
              <div className="text-xs text-green-600 dark:text-green-400">
                Функциональность улучшается с размером экрана
              </div>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
              <div className="text-sm font-medium text-purple-700 dark:text-purple-300 mb-2">
                Fluid Design
              </div>
              <div className="text-xs text-purple-600 dark:text-purple-400">
                Плавные переходы между брейкпоинтами
              </div>
            </div>
          </div>
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
  /* Breakpoint system */
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
  --breakpoint-2xl: 1536px;
  
  /* Grid system */
  --grid-columns-mobile: 1;
  --grid-columns-sm: 2;
  --grid-columns-md: 6;
  --grid-columns-lg: 8;
  --grid-columns-xl: 12;
  --grid-columns-2xl: 12;
  
  --grid-gutter: 1.5rem;    /* 24px */
  --grid-gutter-px: 24px;
  
  --grid-margin-mobile: 1.5rem;    /* 24px */
  --grid-margin-sm: 1.5rem;         /* 24px */
  --grid-margin-md: 2.25rem;        /* 36px */
  --grid-margin-lg: 2.75rem;        /* 44px */
  --grid-margin-xl: 1.75rem;        /* 28px */
  --grid-margin-2xl: 3rem;          /* 48px */
}`}
          </pre>
        </div>
      </div>

      {/* Usage Examples */}
      <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
          Usage Examples
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="font-medium text-gray-800 dark:text-gray-200">
              Tailwind CSS Classes
            </h4>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
              <pre className="text-sm text-gray-700 dark:text-gray-300">
                {`<div className="
  grid 
  grid-cols-1 
  sm:grid-cols-2 
  md:grid-cols-6 
  lg:grid-cols-8 
  xl:grid-cols-12 
  2xl:grid-cols-12 
  gap-6 
  mx-6 
  sm:mx-6 
  md:mx-9 
  lg:mx-11 
  xl:mx-7 
  2xl:mx-12
">
  {/* Content */}
</div>`}
              </pre>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium text-gray-800 dark:text-gray-200">
              CSS Media Queries
            </h4>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
              <pre className="text-sm text-gray-700 dark:text-gray-300">
                {`@media (min-width: 640px) {
  /* sm styles */
}

@media (min-width: 768px) {
  /* md styles */
}

@media (min-width: 1024px) {
  /* lg styles */
}`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
