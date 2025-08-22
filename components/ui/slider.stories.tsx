import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Slider } from './slider';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './card';
import { Label } from './label';
import { Button } from './button';
import {
  Volume2,
  VolumeX,
  Sun,
  Moon,
  Palette,
  Target,
  Clock,
  Thermometer,
  Zap,
  Music,
  Settings,
} from 'lucide-react';

const meta: Meta<typeof Slider> = {
  title: 'UI/Slider',
  component: Slider,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    defaultValue: {
      control: { type: 'object' },
    },
    max: {
      control: { type: 'number' },
    },
    min: {
      control: { type: 'number' },
    },
    step: {
      control: { type: 'number' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Базовый пример
export const Default: Story = {
  render: () => (
    <div className="w-[60%] space-y-4">
      <div className="space-y-2">
        <Label>Volume</Label>
        <Slider defaultValue={[33]} max={100} step={1} />
      </div>
    </div>
  ),
};

// С лейблом и значением
export const WithValue: Story = {
  render: () => {
    const [value, setValue] = React.useState([50]);

    return (
      <div className="w-[60%] space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label>Brightness</Label>
            <span className="text-sm text-muted-foreground">{value[0]}%</span>
          </div>
          <Slider
            value={value}
            onValueChange={setValue}
            max={100}
            step={1}
            className="w-full"
          />
        </div>
      </div>
    );
  },
};

// Диапазон значений
export const Range: Story = {
  render: () => {
    const [value, setValue] = React.useState([20, 80]);

    return (
      <div className="w-[60%] space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label>Price Range</Label>
            <span className="text-sm text-muted-foreground">
              ${value[0]} - ${value[1]}
            </span>
          </div>
          <Slider
            value={value}
            onValueChange={setValue}
            max={1000}
            min={0}
            step={10}
            className="w-full"
          />
        </div>
      </div>
    );
  },
};

// С иконками
export const WithIcons: Story = {
  render: () => {
    const [volume, setVolume] = React.useState([70]);
    const [brightness, setBrightness] = React.useState([60]);

    return (
      <div className="w-[60%] space-y-6">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <VolumeX className="h-4 w-4" />
              <Label>Volume</Label>
              <Volume2 className="h-4 w-4" />
            </div>
            <span className="text-sm text-muted-foreground">{volume[0]}%</span>
          </div>
          <Slider
            value={volume}
            onValueChange={setVolume}
            max={100}
            step={1}
            className="w-full"
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Moon className="h-4 w-4" />
              <Label>Brightness</Label>
              <Sun className="h-4 w-4" />
            </div>
            <span className="text-sm text-muted-foreground">
              {brightness[0]}%
            </span>
          </div>
          <Slider
            value={brightness}
            onValueChange={setBrightness}
            max={100}
            step={1}
            className="w-full"
          />
        </div>
      </div>
    );
  },
};

// Настройки цвета
export const ColorSettings: Story = {
  render: () => {
    const [hue, setHue] = React.useState([180]);
    const [saturation, setSaturation] = React.useState([50]);
    const [lightness, setLightness] = React.useState([50]);

    const color = `hsl(${hue[0]}, ${saturation[0]}%, ${lightness[0]}%)`;

    return (
      <div className="w-[60%] space-y-6">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Palette className="h-4 w-4" />
              <Label>Hue</Label>
            </div>
            <span className="text-sm text-muted-foreground">{hue[0]}°</span>
          </div>
          <Slider
            value={hue}
            onValueChange={setHue}
            max={360}
            step={1}
            className="w-full"
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label>Saturation</Label>
            <span className="text-sm text-muted-foreground">
              {saturation[0]}%
            </span>
          </div>
          <Slider
            value={saturation}
            onValueChange={setSaturation}
            max={100}
            step={1}
            className="w-full"
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label>Lightness</Label>
            <span className="text-sm text-muted-foreground">
              {lightness[0]}%
            </span>
          </div>
          <Slider
            value={lightness}
            onValueChange={setLightness}
            max={100}
            step={1}
            className="w-full"
          />
        </div>

        <div className="flex items-center space-x-4">
          <div
            className="w-12 h-12 rounded-md border"
            style={{ backgroundColor: color }}
          />
          <span className="text-sm font-mono">{color}</span>
        </div>
      </div>
    );
  },
};

// Системные настройки
export const SystemSettings: Story = {
  render: () => {
    const [cpuLimit, setCpuLimit] = React.useState([75]);
    const [memoryLimit, setMemoryLimit] = React.useState([60]);
    const [temperature, setTemperature] = React.useState([45]);

    return (
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Settings className="h-5 w-5" />
              <span>System Settings</span>
            </CardTitle>
            <CardDescription>
              Configure system performance limits
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Zap className="h-4 w-4" />
                  <Label>CPU Limit</Label>
                </div>
                <span className="text-sm text-muted-foreground">
                  {cpuLimit[0]}%
                </span>
              </div>
              <Slider
                value={cpuLimit}
                onValueChange={setCpuLimit}
                max={100}
                step={5}
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Target className="h-4 w-4" />
                  <Label>Memory Limit</Label>
                </div>
                <span className="text-sm text-muted-foreground">
                  {memoryLimit[0]}%
                </span>
              </div>
              <Slider
                value={memoryLimit}
                onValueChange={setMemoryLimit}
                max={100}
                step={5}
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Thermometer className="h-4 w-4" />
                  <Label>Temperature Threshold</Label>
                </div>
                <span className="text-sm text-muted-foreground">
                  {temperature[0]}°C
                </span>
              </div>
              <Slider
                value={temperature}
                onValueChange={setTemperature}
                max={100}
                min={20}
                step={1}
                className="w-full"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    );
  },
};

// Аудио эквалайзер
export const AudioEqualizer: Story = {
  render: () => {
    const [frequencies, setFrequencies] = React.useState([
      60, 80, 70, 90, 50, 75, 85,
    ]);
    const frequencyLabels = [
      '60Hz',
      '170Hz',
      '310Hz',
      '600Hz',
      '1kHz',
      '3kHz',
      '6kHz',
      '12kHz',
      '14kHz',
      '16kHz',
    ];

    return (
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Music className="h-5 w-5" />
              <span>Audio Equalizer</span>
            </CardTitle>
            <CardDescription>
              Adjust frequency bands for optimal sound
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-10 gap-2">
              {frequencies.map((value, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center space-y-2"
                >
                  <div className="h-32 w-4 bg-muted rounded-full flex items-end">
                    <div
                      className="w-full bg-primary rounded-full transition-all duration-200"
                      style={{ height: `${value}%` }}
                    />
                  </div>
                  <Slider
                    value={[value]}
                    onValueChange={newValue => {
                      const newFrequencies = [...frequencies];
                      newFrequencies[index] = newValue[0];
                      setFrequencies(newFrequencies);
                    }}
                    max={100}
                    min={0}
                    step={1}
                    orientation="vertical"
                    className="h-32"
                  />
                  <span className="text-xs text-muted-foreground">
                    {frequencyLabels[index]}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  },
};

// Таймер
export const Timer: Story = {
  render: () => {
    const [time, setTime] = React.useState([30]);
    const [isRunning, setIsRunning] = React.useState(false);

    React.useEffect(() => {
      let interval: NodeJS.Timeout;

      if (isRunning && time[0] > 0) {
        interval = setInterval(() => {
          setTime(prev => [Math.max(0, prev[0] - 1)]);
        }, 1000);
      } else if (time[0] === 0) {
        setIsRunning(false);
      }

      return () => clearInterval(interval);
    }, [isRunning, time]);

    const formatTime = (seconds: number) => {
      const mins = Math.floor(seconds / 60);
      const secs = seconds % 60;
      return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    return (
      <div className="w-[60%] space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Clock className="h-5 w-5" />
              <span>Timer</span>
            </CardTitle>
            <CardDescription>Set a countdown timer</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center">
              <div className="text-4xl font-bold">{formatTime(time[0])}</div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label>Duration</Label>
                <span className="text-sm text-muted-foreground">
                  {time[0]} minutes
                </span>
              </div>
              <Slider
                value={time}
                onValueChange={setTime}
                max={120}
                min={1}
                step={1}
                className="w-full"
                disabled={isRunning}
              />
            </div>

            <div className="flex space-x-2">
              <Button
                onClick={() => setIsRunning(!isRunning)}
                className="flex-1"
              >
                {isRunning ? 'Pause' : 'Start'}
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  setTime([30]);
                  setIsRunning(false);
                }}
                className="flex-1"
              >
                Reset
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  },
};

// Интерактивный пример
export const InteractiveExample: Story = {
  render: () => {
    const [value, setValue] = React.useState([50]);
    const [max, setMax] = React.useState(100);
    const [step, setStep] = React.useState(1);
    const [min, setMin] = React.useState(0);

    return (
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Интерактивный Slider</CardTitle>
            <CardDescription>Настройте параметры слайдера</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Минимум</Label>
                <input
                  type="number"
                  value={min}
                  onChange={e => setMin(Number(e.target.value))}
                  className="w-full rounded-md border px-3 py-2"
                />
              </div>
              <div className="space-y-2">
                <Label>Максимум</Label>
                <input
                  type="number"
                  value={max}
                  onChange={e => setMax(Number(e.target.value))}
                  className="w-full rounded-md border px-3 py-2"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Шаг</Label>
              <input
                type="number"
                value={step}
                onChange={e => setStep(Number(e.target.value))}
                className="w-full rounded-md border px-3 py-2"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label>Значение</Label>
                <span className="text-sm text-muted-foreground">
                  {value[0]}
                </span>
              </div>
              <Slider
                value={value}
                onValueChange={setValue}
                max={max}
                min={min}
                step={step}
                className="w-full"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    );
  },
};
