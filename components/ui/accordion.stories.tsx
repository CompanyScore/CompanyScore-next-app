import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './accordion';

const meta: Meta<typeof Accordion> = {
  title: 'UI/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Аккордеон компонент с поддержкой анимации и доступности.',
      },
      sourceState: 'hidden',
      controls: { sort: 'requiredFirst' },
      expanded: false,
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-full">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It&apos;s animated by default, but you can disable it if you
            prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};

export const Multiple: Story = {
  render: () => (
    <div className="w-full">
      <Accordion type="multiple">
        <AccordionItem value="item-1">
          <AccordionTrigger>Can I open multiple items?</AccordionTrigger>
          <AccordionContent>
            Yes! This accordion allows multiple items to be open simultaneously.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>How does it work?</AccordionTrigger>
          <AccordionContent>
            Each accordion item can be toggled independently, allowing users to
            view multiple sections at once.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Absolutely! It follows WAI-ARIA guidelines and works with screen
            readers.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};

export const WithCustomContent: Story = {
  render: () => (
    <div className="w-full">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Product Features</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <h4 className="font-semibold">Key Features:</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Responsive design</li>
                <li>Accessibility compliant</li>
                <li>Smooth animations</li>
                <li>Customizable styling</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Technical Specifications</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <strong>Framework:</strong> React
                </div>
                <div>
                  <strong>UI Library:</strong> Radix UI
                </div>
                <div>
                  <strong>Styling:</strong> Tailwind CSS
                </div>
                <div>
                  <strong>TypeScript:</strong> Yes
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Installation Guide</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <p className="text-sm">Install the required dependencies:</p>
              <pre className="bg-gray-100 p-2 rounded text-xs">
                npm install @radix-ui/react-accordion
              </pre>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};

export const FAQ: Story = {
  render: () => (
    <div className="w-full">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>What is CompanyScore?</AccordionTrigger>
          <AccordionContent>
            CompanyScore is a professional platform for rating and reviewing
            companies. Find reliable information about companies and share your
            experience with the community.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>How do I create an account?</AccordionTrigger>
          <AccordionContent>
            You can sign up using your email address or connect with your
            existing social media accounts. The registration process is quick
            and secure.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Can I edit my reviews?</AccordionTrigger>
          <AccordionContent>
            Yes, you can edit your reviews within 30 days of posting. After that
            period, you can contact our support team for assistance.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            How are company ratings calculated?
          </AccordionTrigger>
          <AccordionContent>
            Company ratings are calculated based on multiple factors including
            user reviews, verified feedback, and various quality metrics. We use
            a transparent algorithm to ensure fair and accurate ratings.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>Is my data secure?</AccordionTrigger>
          <AccordionContent>
            Absolutely! We take data security seriously and use
            industry-standard encryption to protect your personal information.
            We never share your data with third parties without your explicit
            consent.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="w-full">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="flex items-center gap-2">
            <span className="text-brand-500">🔒</span>
            Security & Privacy
          </AccordionTrigger>
          <AccordionContent>
            Learn about our security measures and privacy policies.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="flex items-center gap-2">
            <span className="text-brand-500">⚡</span>
            Performance
          </AccordionTrigger>
          <AccordionContent>
            Discover how we optimize performance for the best user experience.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="flex items-center gap-2">
            <span className="text-brand-500">🎨</span>
            Customization
          </AccordionTrigger>
          <AccordionContent>
            Explore customization options and theming capabilities.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="w-full">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Enabled Item</AccordionTrigger>
          <AccordionContent>
            This item is enabled and can be toggled.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" disabled>
          <AccordionTrigger>Disabled Item</AccordionTrigger>
          <AccordionContent>
            This content is not accessible when disabled.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Another Enabled Item</AccordionTrigger>
          <AccordionContent>
            This item is also enabled and functional.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};
