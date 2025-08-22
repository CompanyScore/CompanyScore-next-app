import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import * as d3 from 'd3';
import { cn } from '@/lib/utils';

const chartVariants = cva('relative w-full h-full', {
  variants: {
    variant: {
      line: 'chart-line',
      area: 'chart-area',
      bar: 'chart-bar',
      scatter: 'chart-scatter',
    },
    size: {
      sm: 'h-32',
      md: 'h-48',
      lg: 'h-64',
      xl: 'h-80',
    },
  },
  defaultVariants: {
    variant: 'line',
    size: 'md',
  },
});

export interface DataPoint {
  x: number | string | Date;
  y: number;
  color?: string;
  label?: string;
}

export interface ChartData {
  id: string;
  data: DataPoint[];
  color?: string;
  label?: string;
}

export interface ChartAxis {
  x: {
    label?: string;
    tickFormat?: (value: any) => string;
    tickCount?: number;
    domain?: [number, number] | [Date, Date];
  };
  y: {
    label?: string;
    tickFormat?: (value: any) => string;
    tickCount?: number;
    domain?: [number, number];
  };
}

interface ChartProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof chartVariants> {
  data: ChartData[] | DataPoint[];
  axis?: ChartAxis;
  width?: number;
  height?: number;
  margin?: { top: number; right: number; bottom: number; left: number };
  showGrid?: boolean;
  showLegend?: boolean;
  animate?: boolean;
  interactive?: boolean;
  tooltip?: boolean;
}

const Chart = React.forwardRef<HTMLDivElement, ChartProps>(
  (
    {
      className,
      variant = 'line',
      size,
      data,
      axis,
      width = 600,
      height = 400,
      margin = { top: 20, right: 30, bottom: 40, left: 60 },
      showGrid = true,
      showLegend = true,
      animate = true,
      interactive = true,
      tooltip = true,
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
      if (Array.isArray(data) && data.length > 0 && 'data' in data[0]) {
        return data as ChartData[];
      } else {
        return [{ id: 'default', data: data as DataPoint[] }];
      }
    }, [data]);

    // Создаем масштабы
    const scales = React.useMemo(() => {
      const allData = normalizedData.flatMap(d => d.data);
      const xValues = allData.map(d => d.x);
      const yValues = allData.map(d => d.y);

      const xScale = d3
        .scaleLinear()
        .domain(
          axis?.x.domain || [
            d3.min(xValues) as number,
            d3.max(xValues) as number,
          ],
        )
        .range([margin.left, width - margin.right]);

      const yScale = d3
        .scaleLinear()
        .domain(
          axis?.y.domain || [
            d3.min(yValues) as number,
            d3.max(yValues) as number,
          ],
        )
        .range([height - margin.bottom, margin.top]);

      return { xScale, yScale };
    }, [normalizedData, axis, width, height, margin]);

    // Создаем линии и области
    const lineGenerator = d3
      .line<DataPoint>()
      .x(d => scales.xScale(typeof d.x === 'number' ? d.x : 0))
      .y(d => scales.yScale(d.y))
      .curve(d3.curveMonotoneX);

    const areaGenerator = d3
      .area<DataPoint>()
      .x(d => scales.xScale(typeof d.x === 'number' ? d.x : 0))
      .y0(scales.yScale(0))
      .y1(d => scales.yScale(d.y))
      .curve(d3.curveMonotoneX);

    // Обработчики событий
    const handleMouseMove = (
      event: React.MouseEvent,
      point?: DataPoint,
      seriesId?: string,
    ) => {
      if (!tooltip || !point) return;

      const rect = event.currentTarget.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const series = normalizedData.find(d => d.id === seriesId);
      const content = `${series?.label || 'Series'}: ${point.y}`;

      setTooltipData({ x, y, content, visible: true });
    };

    const handleMouseLeave = () => {
      setTooltipData(prev => ({ ...prev, visible: false }));
    };

    // Рендерим график
    React.useEffect(() => {
      if (!svgRef.current) return;

      const svg = d3.select(svgRef.current);
      svg.selectAll('*').remove();

      // Добавляем сетку
      if (showGrid) {
        svg
          .append('g')
          .attr('class', 'grid')
          .attr('transform', `translate(0,${height - margin.bottom})`)
          .call(
            d3
              .axisBottom(scales.xScale)
              .tickSize(-height + margin.top + margin.bottom)
              .tickFormat(''),
          );

        svg
          .append('g')
          .attr('class', 'grid')
          .attr('transform', `translate(${margin.left},0)`)
          .call(
            d3
              .axisLeft(scales.yScale)
              .tickSize(-width + margin.left + margin.right)
              .tickFormat(''),
          );
      }

      // Добавляем оси
      svg
        .append('g')
        .attr('transform', `translate(0,${height - margin.bottom})`)
        .call(
          d3
            .axisBottom(scales.xScale)
            .tickFormat(axis?.x.tickFormat || d3.format('.0f'))
            .ticks(axis?.x.tickCount || 5),
        );

      svg
        .append('g')
        .attr('transform', `translate(${margin.left},0)`)
        .call(
          d3
            .axisLeft(scales.yScale)
            .tickFormat(axis?.y.tickFormat || d3.format('.0f'))
            .ticks(axis?.y.tickCount || 5),
        );

      // Добавляем подписи осей
      if (axis?.x.label) {
        svg
          .append('text')
          .attr('x', width / 2)
          .attr('y', height - 5)
          .attr('text-anchor', 'middle')
          .attr('class', 'text-sm text-muted-foreground')
          .text(axis.x.label);
      }

      if (axis?.y.label) {
        svg
          .append('text')
          .attr('transform', 'rotate(-90)')
          .attr('x', -height / 2)
          .attr('y', 15)
          .attr('text-anchor', 'middle')
          .attr('class', 'text-sm text-muted-foreground')
          .text(axis.y.label);
      }

      // Рендерим данные в зависимости от типа графика
      normalizedData.forEach((series, seriesIndex) => {
        const color = series.color || d3.schemeCategory10[seriesIndex % 10];

        switch (variant) {
          case 'line':
            svg
              .append('path')
              .datum(series.data)
              .attr('fill', 'none')
              .attr('stroke', color)
              .attr('stroke-width', 2)
              .attr('d', lineGenerator)
              .style('opacity', animate ? 0 : 1)
              .transition()
              .duration(animate ? 1000 : 0)
              .style('opacity', 1);
            break;

          case 'area':
            svg
              .append('path')
              .datum(series.data)
              .attr('fill', color)
              .attr('opacity', 0.3)
              .attr('d', areaGenerator)
              .style('opacity', animate ? 0 : 0.3)
              .transition()
              .duration(animate ? 1000 : 0)
              .style('opacity', 0.3);
            break;

          case 'bar':
            svg
              .selectAll(`.bar-${series.id}`)
              .data(series.data)
              .enter()
              .append('rect')
              .attr('class', `bar-${series.id}`)
              .attr(
                'x',
                d => scales.xScale(typeof d.x === 'number' ? d.x : 0) - 10,
              )
              .attr('y', d => scales.yScale(d.y))
              .attr('width', 20)
              .attr('height', d => height - margin.bottom - scales.yScale(d.y))
              .attr('fill', color)
              .style('opacity', animate ? 0 : 1)
              .transition()
              .duration(animate ? 1000 : 0)
              .style('opacity', 1);
            break;

          case 'scatter':
            svg
              .selectAll(`.scatter-${series.id}`)
              .data(series.data)
              .enter()
              .append('circle')
              .attr('class', `scatter-${series.id}`)
              .attr('cx', d => scales.xScale(typeof d.x === 'number' ? d.x : 0))
              .attr('cy', d => scales.yScale(d.y))
              .attr('r', 4)
              .attr('fill', color)
              .style('opacity', animate ? 0 : 1)
              .transition()
              .duration(animate ? 1000 : 0)
              .style('opacity', 1);
            break;
        }
      });
    }, [
      normalizedData,
      variant,
      scales,
      width,
      height,
      margin,
      showGrid,
      axis,
      animate,
    ]);

    return (
      <div
        ref={ref}
        className={cn(chartVariants({ variant, size }), className)}
        {...props}
      >
        <svg
          ref={svgRef}
          width={width}
          height={height}
          className="w-full h-full"
          onMouseLeave={handleMouseLeave}
        >
          {/* Интерактивные элементы для tooltip */}
          {interactive && tooltip && (
            <rect
              width={width}
              height={height}
              fill="transparent"
              onMouseMove={e => {
                const x = scales.xScale.invert(e.nativeEvent.offsetX);
                const y = scales.yScale.invert(e.nativeEvent.offsetY);
                // Найти ближайшую точку данных
                const allData = normalizedData.flatMap(d => d.data);
                const closest = allData.reduce((prev, curr) => {
                  const prevDist = Math.abs(prev.x - x) + Math.abs(prev.y - y);
                  const currDist = Math.abs(curr.x - x) + Math.abs(curr.y - y);
                  return currDist < prevDist ? curr : prev;
                });
                handleMouseMove(e, closest);
              }}
            />
          )}
        </svg>

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
            {normalizedData.map((series, index) => (
              <div key={series.id} className="flex items-center gap-1 text-xs">
                <div
                  className="w-3 h-3 rounded"
                  style={{
                    backgroundColor:
                      series.color || d3.schemeCategory10[index % 10],
                  }}
                />
                <span className="text-muted-foreground">
                  {series.label || series.id}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  },
);
Chart.displayName = 'Chart';

export { Chart };
