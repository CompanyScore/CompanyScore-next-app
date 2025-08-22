import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import * as d3 from 'd3';
import { cn } from '@/lib/utils';

const radarChartVariants = cva('relative w-full h-full', {
  variants: {
    variant: {
      filled: 'radar-filled',
      outlined: 'radar-outlined',
      dots: 'radar-dots',
    },
    size: {
      sm: 'h-40 w-40',
      md: 'h-56 w-56',
      lg: 'h-72 w-72',
      xl: 'h-96 w-96',
    },
  },
  defaultVariants: {
    variant: 'filled',
    size: 'md',
  },
});

export interface RadarDataPoint {
  key: string;
  value: number;
  color?: string;
  label?: string;
}

export interface RadarDataset {
  id: string;
  data: RadarDataPoint[];
  color?: string;
  label?: string;
  fillOpacity?: number;
  strokeWidth?: number;
}

interface RadarChartProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof radarChartVariants> {
  data: RadarDataset[] | Record<string, number>;
  width?: number;
  height?: number;
  maxValue?: number;
  levels?: number;
  showGrid?: boolean;
  showLabels?: boolean;
  showLegend?: boolean;
  animate?: boolean;
  interactive?: boolean;
  tooltip?: boolean;
  centerLabel?: string;
}

const RadarChart = React.forwardRef<HTMLDivElement, RadarChartProps>(
  (
    {
      className,
      variant = 'filled',
      size,
      data,
      width = 400,
      height = 400,
      maxValue = 10,
      levels = 5,
      showGrid = true,
      showLabels = true,
      showLegend = true,
      animate = true,
      interactive = true,
      tooltip = true,
      centerLabel,
      ...props
    },
    ref,
  ) => {
    const svgRef = React.useRef<SVGSVGElement>(null);
    const [tooltipData, setTooltipData] = React.useState<{
      x: number;
      y: number;
      content: string;
      visible: boolean;
    }>({ x: 0, y: 0, content: '', visible: false });

    // Нормализуем данные
    const normalizedData = React.useMemo(() => {
      if (Array.isArray(data)) {
        return data as RadarDataset[];
      } else {
        // Преобразуем Record<string, number> в RadarDataset
        const dataPoints: RadarDataPoint[] = Object.entries(data).map(
          ([key, value]) => ({
            key,
            value,
          }),
        );
        return [{ id: 'default', data: dataPoints }];
      }
    }, [data]);

    // Получаем все уникальные ключи
    const allKeys = React.useMemo(() => {
      const keys = new Set<string>();
      normalizedData.forEach(dataset => {
        dataset.data.forEach(point => keys.add(point.key));
      });
      return Array.from(keys);
    }, [normalizedData]);

    // Создаем углы для осей
    const angles = React.useMemo(() => {
      return allKeys.map(
        (_, i) => (i * 2 * Math.PI) / allKeys.length - Math.PI / 2,
      );
    }, [allKeys]);

    // Создаем радиусы для уровней с большими отступами
    const padding = 80; // Увеличиваем отступы для подписей
    const radius = Math.min(width, height) / 2 - padding;
    const radiusScale = d3
      .scaleLinear()
      .domain([0, maxValue])
      .range([0, radius]);

    // Функция для получения координат точки
    const getPointCoordinates = (key: string, value: number) => {
      const keyIndex = allKeys.indexOf(key);
      const angle = angles[keyIndex];
      const r = radiusScale(value);
      return {
        x: width / 2 + r * Math.cos(angle),
        y: height / 2 + r * Math.sin(angle),
      };
    };

    // Функция для создания полигона
    const createPolygon = (dataPoints: RadarDataPoint[]) => {
      // Создаем точки для всех осей в правильном порядке
      const points = allKeys.map(key => {
        const dataPoint = dataPoints.find(p => p.key === key);
        const value = dataPoint?.value || 0;
        const coords = getPointCoordinates(key, value);
        return `${coords.x},${coords.y}`;
      });
      return points.join(' ');
    };

    // Обработчики событий
    const handleMouseMove = (
      event: React.MouseEvent,
      point?: RadarDataPoint,
      datasetId?: string,
    ) => {
      if (!tooltip || !point) return;

      const rect = event.currentTarget.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const dataset = normalizedData.find(d => d.id === datasetId);
      const content = `${dataset?.label || 'Dataset'}: ${point.key} = ${point.value}`;

      setTooltipData({ x, y, content, visible: true });
    };

    const handleMouseLeave = () => {
      setTooltipData(prev => ({ ...prev, visible: false }));
    };

    // Рендерим график
    React.useEffect(() => {
      if (!svgRef.current || allKeys.length === 0) return;

      const svg = d3.select(svgRef.current);
      svg.selectAll('*').remove();

      // Добавляем сетку
      if (showGrid) {
        // Концентрические круги
        for (let i = 1; i <= levels; i++) {
          const levelRadius = (radius * i) / levels;
          svg
            .append('circle')
            .attr('cx', width / 2)
            .attr('cy', height / 2)
            .attr('r', levelRadius)
            .attr('fill', 'none')
            .attr('stroke', 'var(--border)')
            .attr('stroke-width', 1)
            .attr('opacity', 0.3);
        }

        // Радиальные линии
        angles.forEach(angle => {
          const x1 = width / 2;
          const y1 = height / 2;
          const x2 = width / 2 + radius * Math.cos(angle);
          const y2 = height / 2 + radius * Math.sin(angle);

          svg
            .append('line')
            .attr('x1', x1)
            .attr('y1', y1)
            .attr('x2', x2)
            .attr('y2', y2)
            .attr('stroke', 'var(--border)')
            .attr('stroke-width', 1)
            .attr('opacity', 0.3);
        });
      }

      // Добавляем подписи осей
      if (showLabels) {
        angles.forEach((angle, i) => {
          const key = allKeys[i];
          const labelRadius = radius + 30; // Увеличиваем расстояние до подписей
          const x = width / 2 + labelRadius * Math.cos(angle);
          const y = height / 2 + labelRadius * Math.sin(angle);

          // Определяем выравнивание текста в зависимости от позиции
          let textAnchor = 'middle';
          let dominantBaseline = 'middle';

          // Корректируем выравнивание для крайних позиций
          if (Math.cos(angle) > 0.5) textAnchor = 'start';
          else if (Math.cos(angle) < -0.5) textAnchor = 'end';

          if (Math.sin(angle) > 0.5) dominantBaseline = 'hanging';
          else if (Math.sin(angle) < -0.5) dominantBaseline = 'text-bottom';

          svg
            .append('text')
            .attr('x', x)
            .attr('y', y)
            .attr('text-anchor', textAnchor)
            .attr('dominant-baseline', dominantBaseline)
            .attr('fill', 'var(--muted-foreground)')
            .attr('font-size', '12px')
            .attr('font-weight', '500')
            .text(key);
        });
      }

      // Добавляем подписи уровней
      if (showGrid) {
        for (let i = 1; i <= levels; i++) {
          const levelValue = (maxValue * i) / levels;
          const levelRadius = (radius * i) / levels;
          const x = width / 2 + levelRadius * Math.cos(angles[0]);
          const y = height / 2 + levelRadius * Math.sin(angles[0]);

          svg
            .append('text')
            .attr('x', x - 10)
            .attr('y', y)
            .attr('text-anchor', 'end')
            .attr('dominant-baseline', 'middle')
            .attr('fill', 'var(--muted-foreground)')
            .attr('font-size', '10px')
            .text(levelValue.toString());
        }
      }

      // Рендерим данные
      normalizedData.forEach((dataset, datasetIndex) => {
        const color = dataset.color || d3.schemeCategory10[datasetIndex % 10];
        const fillOpacity = dataset.fillOpacity || 0.3;
        const strokeWidth = dataset.strokeWidth || 2;

        // Создаем полигон
        const polygonPoints = createPolygon(dataset.data);

        switch (variant) {
          case 'filled':
            svg
              .append('polygon')
              .attr('points', polygonPoints)
              .attr('fill', color)
              .attr('fill-opacity', fillOpacity)
              .attr('stroke', color)
              .attr('stroke-width', strokeWidth)
              .style('opacity', animate ? 0 : 1)
              .transition()
              .duration(animate ? 1000 : 0)
              .style('opacity', 1);
            break;

          case 'outlined':
            svg
              .append('polygon')
              .attr('points', polygonPoints)
              .attr('fill', 'none')
              .attr('stroke', color)
              .attr('stroke-width', strokeWidth)
              .style('opacity', animate ? 0 : 1)
              .transition()
              .duration(animate ? 1000 : 0)
              .style('opacity', 1);
            break;

          case 'dots':
            // Добавляем линии между точками
            svg
              .append('polygon')
              .attr('points', polygonPoints)
              .attr('fill', 'none')
              .attr('stroke', color)
              .attr('stroke-width', 1)
              .attr('stroke-dasharray', '3,3')
              .style('opacity', animate ? 0 : 1)
              .transition()
              .duration(animate ? 1000 : 0)
              .style('opacity', 1);

            // Добавляем точки
            allKeys.forEach(key => {
              const dataPoint = dataset.data.find(p => p.key === key);
              const value = dataPoint?.value || 0;
              const coords = getPointCoordinates(key, value);
              svg
                .append('circle')
                .attr('cx', coords.x)
                .attr('cy', coords.y)
                .attr('r', 4)
                .attr('fill', color)
                .attr('stroke', 'var(--background)')
                .attr('stroke-width', 2)
                .style('opacity', animate ? 0 : 1)
                .transition()
                .duration(animate ? 1000 : 0)
                .style('opacity', 1);
            });
            break;
        }

        // Добавляем точки данных для интерактивности
        if (interactive && tooltip) {
          dataset.data.forEach(point => {
            const coords = getPointCoordinates(point.key, point.value);
            svg
              .append('circle')
              .attr('cx', coords.x)
              .attr('cy', coords.y)
              .attr('r', 6)
              .attr('fill', 'transparent')
              .attr('stroke', color)
              .attr('stroke-width', 2)
              .style('opacity', 0)
              .style('cursor', 'pointer')
              .on('mouseenter', function (event) {
                d3.select(this).style('opacity', 0.5);
                const rect = (event.target as Element).getBoundingClientRect();
                const mouseEvent = {
                  clientX: event.pageX,
                  clientY: event.pageY,
                  currentTarget: { getBoundingClientRect: () => rect },
                } as any;
                handleMouseMove(mouseEvent, point, dataset.id);
              })
              .on('mouseleave', function () {
                d3.select(this).style('opacity', 0);
                handleMouseLeave();
              });
          });
        }
      });

      // Добавляем центральную метку
      if (centerLabel) {
        svg
          .append('text')
          .attr('x', width / 2)
          .attr('y', height / 2)
          .attr('text-anchor', 'middle')
          .attr('dominant-baseline', 'middle')
          .attr('fill', 'var(--foreground)')
          .attr('font-size', '14px')
          .attr('font-weight', '500')
          .text(centerLabel);
      }
    }, [
      normalizedData,
      variant,
      width,
      height,
      maxValue,
      levels,
      showGrid,
      showLabels,
      angles,
      allKeys,
      animate,
      interactive,
      tooltip,
      centerLabel,
    ]);

    return (
      <div
        ref={ref}
        className={cn(
          radarChartVariants({ variant, size }),
          'relative overflow-visible',
          className,
        )}
        style={{ minWidth: width, minHeight: height }}
        {...props}
      >
        <svg
          ref={svgRef}
          width={width}
          height={height}
          className="overflow-visible"
          style={{ display: 'block' }}
        />

        {/* Tooltip */}
        {tooltip && tooltipData.visible && (
          <div
            className="absolute pointer-events-none bg-background border border-border rounded-md px-2 py-1 text-sm shadow-lg z-10"
            style={{
              left: tooltipData.x + 10,
              top: tooltipData.y - 10,
            }}
          >
            {tooltipData.content}
          </div>
        )}

        {/* Легенда */}
        {showLegend && normalizedData.length > 1 && (
          <div className="absolute bottom-2 right-2 flex gap-2">
            {normalizedData.map((dataset, index) => (
              <div key={dataset.id} className="flex items-center gap-1 text-xs">
                <div
                  className="w-3 h-3 rounded"
                  style={{
                    backgroundColor:
                      dataset.color || d3.schemeCategory10[index % 10],
                  }}
                />
                <span className="text-muted-foreground">
                  {dataset.label || dataset.id}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  },
);
RadarChart.displayName = 'RadarChart';

export { RadarChart };
