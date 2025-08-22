import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { AspectRatio, Image } from './aspect-ratio';

const meta: Meta<typeof AspectRatio> = {
  title: 'UI/AspectRatio',
  component: AspectRatio,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Компонент для отображения контента с заданным соотношением сторон.',
      },
      sourceState: 'hidden',
      controls: { sort: 'requiredFirst' },
      expanded: false,
    },
  },
  tags: ['autodocs'],
  argTypes: {
    ratio: {
      control: { type: 'number', step: 0.1 },
      description: 'Соотношение сторон (ширина / высота)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div>
      <h3 className="text-sm font-medium mb-2">Square (1:1)</h3>
      <AspectRatio ratio={1}>
        <Image
          src="https://picsum.photos/400/400"
          alt="Random square"
          className="rounded-md object-cover"
        />
      </AspectRatio>
    </div>
  ),
};

export const DifferentRatios: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-4xl">
      <div>
        <h3 className="text-sm font-medium mb-2">Square (1:1)</h3>
        <AspectRatio ratio={1}>
          <Image
            src="https://picsum.photos/400/400"
            alt="Random square"
            className="rounded-md object-cover"
          />
        </AspectRatio>
      </div>

      <div>
        <h3 className="text-sm font-medium mb-2">Portrait (3:4)</h3>
        <AspectRatio ratio={3 / 4}>
          <Image
            src="https://picsum.photos/400/533"
            alt="Random portrait"
            className="rounded-md object-cover"
          />
        </AspectRatio>
      </div>

      <div>
        <h3 className="text-sm font-medium mb-2">Landscape (16:9)</h3>
        <AspectRatio ratio={16 / 9}>
          <Image
            src="https://picsum.photos/400/225"
            alt="Random landscape"
            className="rounded-md object-cover"
          />
        </AspectRatio>
      </div>

      <div>
        <h3 className="text-sm font-medium mb-2">Ultra Wide (21:9)</h3>
        <AspectRatio ratio={21 / 9}>
          <Image
            src="https://picsum.photos/400/171"
            alt="Random ultra wide"
            className="rounded-md object-cover"
          />
        </AspectRatio>
      </div>
    </div>
  ),
};
