'use client';

export function ColorPalette() {
  // Определяем цветовые группы
  const colorGroups = [
    { name: 'Neutral', prefix: 'neutral' },
    { name: 'Gray', prefix: 'gray' },
    { name: 'Brand', prefix: 'brand' },
    { name: 'Warning', prefix: 'warning' },
    { name: 'Success', prefix: 'success' },
    { name: 'Error', prefix: 'error' },
    { name: 'Info', prefix: 'info' },
    { name: 'Yellow', prefix: 'yellow' },
  ];

  // Определяем оттенки (строки)
  const shades = [
    '50',
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900',
  ];

  // Функция для получения цвета по группе и оттенку
  const getColor = (group: string, shade: string) => {
    const colorMap: Record<
      string,
      Record<string, { hex: string; description?: string }>
    > = {
      neutral: {
        '50': { hex: '#FAFAFA', description: 'Background' },
        '100': { hex: '#F5F5F5' },
        '200': { hex: '#E5E5E5' },
        '300': { hex: '#D4D4D4' },
        '400': { hex: '#A1A1A1' },
        '500': { hex: '#737373', description: 'Secondary text' },
        '600': { hex: '#525252' },
        '700': { hex: '#404040' },
        '800': { hex: '#262626', description: 'Primary text' },
        '900': { hex: '#171717' },
      },
      gray: {
        '50': { hex: '#F9FAFB' },
        '100': { hex: '#F3F4F6' },
        '200': { hex: '#E5E7EB' },
        '300': { hex: '#CBD5DC', description: 'Disabled background' },
        '400': { hex: '#94A3AF' },
        '500': { hex: '#64748B', description: 'Disabled text' },
        '600': { hex: '#475569' },
        '700': { hex: '#334155' },
        '800': { hex: '#1E293B' },
        '900': { hex: '#101828' },
      },
      brand: {
        '50': { hex: '#FFF2DC', description: 'Background' },
        '100': { hex: '#FFE0BD' },
        '200': { hex: '#FEC970' },
        '300': { hex: '#FDC26A', description: 'Buttons' },
        '400': { hex: '#FDAA22' },
        '500': { hex: '#FC920B' },
        '600': { hex: '#F58808' },
        '700': { hex: '#F27708' },
        '800': { hex: '#EC6608' },
        '900': { hex: '#E34300' },
      },
      warning: {
        '50': { hex: '#FFFBEB' },
        '100': { hex: '#FEF3C7' },
        '200': { hex: '#FDE68A' },
        '300': { hex: '#FCD34D' },
        '400': { hex: '#FBBF24' },
        '500': { hex: '#F59E0B' },
        '600': { hex: '#D97706' },
        '700': { hex: '#B45309', description: 'Accent text' },
        '800': { hex: '#92400E' },
        '900': { hex: '#78350F' },
      },
      success: {
        '50': { hex: '#F0FDF4', description: 'Background' },
        '100': { hex: '#F0FDF4' },
        '200': { hex: '#F0FDF4' },
        '300': { hex: '#F0FDF4' },
        '400': { hex: '#F0FDF4' },
        '500': { hex: '#16A34A' },
        '600': { hex: '#16A34A' },
        '700': { hex: '#16A34A' },
        '800': { hex: '#166534' },
        '900': { hex: '#166534' },
      },
      error: {
        '50': { hex: '#FEE2E2', description: 'Background' },
        '100': { hex: '#FEE2E2' },
        '200': { hex: '#FEE2E2' },
        '300': { hex: '#FEE2E2' },
        '400': { hex: '#FEE2E2' },
        '500': { hex: '#FB2C56', description: 'Icons' },
        '600': { hex: '#FB2C56' },
        '700': { hex: '#FB2C56' },
        '800': { hex: '#9F1239', description: 'Text' },
        '900': { hex: '#9F1239' },
      },
      info: {
        '50': { hex: '#F0F9FF', description: 'Background' },
        '100': { hex: '#F0F9FF' },
        '200': { hex: '#F0F9FF' },
        '300': { hex: '#F0F9FF' },
        '400': { hex: '#F0F9FF' },
        '500': { hex: '#0284C7' },
        '600': { hex: '#0284C7' },
        '700': { hex: '#0284C7' },
        '800': { hex: '#075985' },
        '900': { hex: '#075985' },
      },
      yellow: {
        '50': { hex: '#FEFCE8', description: 'Background' },
        '100': { hex: '#FEFCE8' },
        '200': { hex: '#FEFCE8' },
        '300': { hex: '#FEFCE8' },
        '400': { hex: '#FEFCE8' },
        '500': { hex: '#FACC15' },
        '600': { hex: '#FACC15' },
        '700': { hex: '#FACC15' },
        '800': { hex: '#78350F' },
        '900': { hex: '#78350F' },
      },
    };

    return colorMap[group]?.[shade];
  };

  return (
    <div className="p-6 space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">
          Color Palette Matrix
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Color matrix organized by shades (rows) and color groups (columns).
          Dark theme is automatically applied using CSS filter inversion.
        </p>
      </div>

      {/* Color Matrix */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="p-2 text-left font-semibold text-gray-900 dark:text-gray-100 border-b">
                Shade
              </th>
              {colorGroups.map(group => (
                <th
                  key={group.prefix}
                  className="p-2 text-center font-semibold text-gray-900 dark:text-gray-100 border-b"
                >
                  {group.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {shades.map(shade => (
              <tr key={shade}>
                <td className="p-2 font-mono text-sm text-gray-600 dark:text-gray-400 border-b">
                  {shade}
                </td>
                {colorGroups.map(group => {
                  const colorData = getColor(group.prefix, shade);
                  if (!colorData)
                    return (
                      <td
                        key={`${group.prefix}-${shade}`}
                        className="p-2 border-b"
                      ></td>
                    );

                  // Функция для определения цвета текста на основе яркости фона
                  const getTextColor = (backgroundColor: string) => {
                    const hex = backgroundColor.replace('#', '');
                    const r = parseInt(hex.substr(0, 2), 16);
                    const g = parseInt(hex.substr(2, 2), 16);
                    const b = parseInt(hex.substr(4, 2), 16);
                    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
                    return brightness > 128 ? '#000000' : '#FFFFFF';
                  };

                  const textColor = getTextColor(colorData.hex);

                  return (
                    <td
                      key={`${group.prefix}-${shade}`}
                      className="p-2 border-b"
                    >
                      <div className="flex flex-col items-center gap-1">
                        <div
                          className="w-16 h-16 rounded border shadow-sm flex items-center justify-center"
                          style={{ backgroundColor: colorData.hex }}
                        >
                          <span
                            className="text-xs font-mono font-bold drop-shadow-sm"
                            style={{ color: textColor }}
                          >
                            {`${group.prefix}-${shade}`}
                          </span>
                        </div>
                        {colorData.description && (
                          <span className="text-xs text-gray-500 dark:text-gray-400 text-center">
                            {colorData.description}
                          </span>
                        )}
                      </div>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
