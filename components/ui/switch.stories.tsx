import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Switch } from './switch';
import { Label } from './label';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './card';
import { Button } from './button';
import {
  Bell,
  BellOff,
  Moon,
  Sun,
  Wifi,
  WifiOff,
  Volume2,
  VolumeX,
  Shield,
  Settings,
  Smartphone,
  Monitor,
  Tablet,
} from 'lucide-react';

const meta: Meta<typeof Switch> = {
  title: 'UI/Switch',
  component: Switch,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Базовый пример
export const Default: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane mode</Label>
    </div>
  ),
};

// С лейблом
export const WithLabel: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Switch id="notifications" />
        <Label htmlFor="notifications">Push notifications</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Switch id="marketing" />
        <Label htmlFor="marketing">Marketing emails</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Switch id="updates" />
        <Label htmlFor="updates">System updates</Label>
      </div>
    </div>
  ),
};

// С иконками
export const WithIcons: Story = {
  render: () => {
    const [notifications, setNotifications] = React.useState(true);
    const [darkMode, setDarkMode] = React.useState(false);
    const [wifi, setWifi] = React.useState(true);
    const [volume, setVolume] = React.useState(true);

    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {notifications ? (
              <Bell className="h-4 w-4" />
            ) : (
              <BellOff className="h-4 w-4" />
            )}
            <Label>Notifications</Label>
          </div>
          <Switch checked={notifications} onCheckedChange={setNotifications} />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {darkMode ? (
              <Moon className="h-4 w-4" />
            ) : (
              <Sun className="h-4 w-4" />
            )}
            <Label>Dark mode</Label>
          </div>
          <Switch checked={darkMode} onCheckedChange={setDarkMode} />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {wifi ? (
              <Wifi className="h-4 w-4" />
            ) : (
              <WifiOff className="h-4 w-4" />
            )}
            <Label>Wi-Fi</Label>
          </div>
          <Switch checked={wifi} onCheckedChange={setWifi} />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {volume ? (
              <Volume2 className="h-4 w-4" />
            ) : (
              <VolumeX className="h-4 w-4" />
            )}
            <Label>Sound</Label>
          </div>
          <Switch checked={volume} onCheckedChange={setVolume} />
        </div>
      </div>
    );
  },
};

// Настройки безопасности
export const SecuritySettings: Story = {
  render: () => {
    const [twoFactor, setTwoFactor] = React.useState(true);
    const [biometric, setBiometric] = React.useState(false);
    const [location, setLocation] = React.useState(true);
    const [analytics, setAnalytics] = React.useState(false);

    return (
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Shield className="h-5 w-5" />
            <span>Security Settings</span>
          </CardTitle>
          <CardDescription>
            Manage your account security preferences
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base">Two-factor authentication</Label>
              <p className="text-sm text-muted-foreground">
                Add an extra layer of security to your account
              </p>
            </div>
            <Switch checked={twoFactor} onCheckedChange={setTwoFactor} />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base">Biometric login</Label>
              <p className="text-sm text-muted-foreground">
                Use fingerprint or face recognition
              </p>
            </div>
            <Switch checked={biometric} onCheckedChange={setBiometric} />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base">Location services</Label>
              <p className="text-sm text-muted-foreground">
                Allow apps to access your location
              </p>
            </div>
            <Switch checked={location} onCheckedChange={setLocation} />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base">Analytics & tracking</Label>
              <p className="text-sm text-muted-foreground">
                Help us improve by sharing usage data
              </p>
            </div>
            <Switch checked={analytics} onCheckedChange={setAnalytics} />
          </div>
        </CardContent>
      </Card>
    );
  },
};

// Настройки уведомлений
export const NotificationSettings: Story = {
  render: () => {
    const [email, setEmail] = React.useState(true);
    const [push, setPush] = React.useState(true);
    const [sms, setSms] = React.useState(false);
    const [marketing, setMarketing] = React.useState(false);
    const [updates, setUpdates] = React.useState(true);
    const [newsletter, setNewsletter] = React.useState(false);

    return (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Notification Preferences
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Email notifications</Label>
                <p className="text-sm text-muted-foreground">
                  Receive notifications via email
                </p>
              </div>
              <Switch checked={email} onCheckedChange={setEmail} />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Push notifications</Label>
                <p className="text-sm text-muted-foreground">
                  Receive push notifications on your device
                </p>
              </div>
              <Switch checked={push} onCheckedChange={setPush} />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>SMS notifications</Label>
                <p className="text-sm text-muted-foreground">
                  Receive notifications via SMS
                </p>
              </div>
              <Switch checked={sms} onCheckedChange={setSms} />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Marketing & Updates</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Marketing emails</Label>
                <p className="text-sm text-muted-foreground">
                  Receive promotional content and offers
                </p>
              </div>
              <Switch checked={marketing} onCheckedChange={setMarketing} />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>System updates</Label>
                <p className="text-sm text-muted-foreground">
                  Get notified about important updates
                </p>
              </div>
              <Switch checked={updates} onCheckedChange={setUpdates} />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Newsletter</Label>
                <p className="text-sm text-muted-foreground">
                  Subscribe to our weekly newsletter
                </p>
              </div>
              <Switch checked={newsletter} onCheckedChange={setNewsletter} />
            </div>
          </div>
        </div>
      </div>
    );
  },
};

// Настройки конфиденциальности
export const PrivacySettings: Story = {
  render: () => {
    const [profileVisibility, setProfileVisibility] = React.useState(true);
    const [activityStatus, setActivityStatus] = React.useState(true);
    const [dataSharing, setDataSharing] = React.useState(false);
    const [cookies, setCookies] = React.useState(true);

    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label className="text-base">Public profile</Label>
            <p className="text-sm text-muted-foreground">
              Make your profile visible to other users
            </p>
          </div>
          <Switch
            checked={profileVisibility}
            onCheckedChange={setProfileVisibility}
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label className="text-base">Activity status</Label>
            <p className="text-sm text-muted-foreground">
              Show when you`&apos`re online or active
            </p>
          </div>
          <Switch
            checked={activityStatus}
            onCheckedChange={setActivityStatus}
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label className="text-base">Data sharing</Label>
            <p className="text-sm text-muted-foreground">
              Allow third-party data sharing
            </p>
          </div>
          <Switch checked={dataSharing} onCheckedChange={setDataSharing} />
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label className="text-base">Essential cookies</Label>
            <p className="text-sm text-muted-foreground">
              Allow cookies for basic functionality
            </p>
          </div>
          <Switch checked={cookies} onCheckedChange={setCookies} />
        </div>
      </div>
    );
  },
};

// Настройки синхронизации
export const SyncSettings: Story = {
  render: () => {
    const [cloudSync, setCloudSync] = React.useState(true);
    const [autoBackup, setAutoBackup] = React.useState(true);
    const [crossDevice, setCrossDevice] = React.useState(false);
    const [offlineMode, setOfflineMode] = React.useState(false);

    return (
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Settings className="h-5 w-5" />
            <span>Sync Settings</span>
          </CardTitle>
          <CardDescription>
            Configure how your data is synchronized
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base">Cloud sync</Label>
              <p className="text-sm text-muted-foreground">
                Sync your data to the cloud
              </p>
            </div>
            <Switch checked={cloudSync} onCheckedChange={setCloudSync} />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base">Auto backup</Label>
              <p className="text-sm text-muted-foreground">
                Automatically backup your data
              </p>
            </div>
            <Switch checked={autoBackup} onCheckedChange={setAutoBackup} />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base">Cross-device sync</Label>
              <p className="text-sm text-muted-foreground">
                Sync across all your devices
              </p>
            </div>
            <Switch checked={crossDevice} onCheckedChange={setCrossDevice} />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base">Offline mode</Label>
              <p className="text-sm text-muted-foreground">
                Work without internet connection
              </p>
            </div>
            <Switch checked={offlineMode} onCheckedChange={setOfflineMode} />
          </div>
        </CardContent>
      </Card>
    );
  },
};

// Отключенные состояния
export const Disabled: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Switch id="disabled-off" disabled />
        <Label htmlFor="disabled-off">Disabled (off)</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Switch id="disabled-on" disabled defaultChecked />
        <Label htmlFor="disabled-on">Disabled (on)</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Switch id="enabled" />
        <Label htmlFor="enabled">Enabled</Label>
      </div>
    </div>
  ),
};

// Управляемое состояние
export const Controlled: Story = {
  render: () => {
    const [checked, setChecked] = React.useState(false);

    return (
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Switch
            id="controlled"
            checked={checked}
            onCheckedChange={setChecked}
          />
          <Label htmlFor="controlled">{checked ? 'Enabled' : 'Disabled'}</Label>
        </div>

        <div className="text-sm text-muted-foreground">
          Current state: <strong>{checked ? 'ON' : 'OFF'}</strong>
        </div>

        <div className="flex space-x-2">
          <Button variant="outline" size="sm" onClick={() => setChecked(true)}>
            Turn ON
          </Button>
          <Button variant="outline" size="sm" onClick={() => setChecked(false)}>
            Turn OFF
          </Button>
        </div>
      </div>
    );
  },
};

// Настройки устройств
export const DeviceSettings: Story = {
  render: () => {
    const [smartphone, setSmartphone] = React.useState(true);
    const [tablet, setTablet] = React.useState(false);
    const [desktop, setDesktop] = React.useState(true);

    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Smartphone className="h-4 w-4" />
            <div className="space-y-0.5">
              <Label className="text-base">Smartphone</Label>
              <p className="text-sm text-muted-foreground">
                Sync to your mobile device
              </p>
            </div>
          </div>
          <Switch checked={smartphone} onCheckedChange={setSmartphone} />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Tablet className="h-4 w-4" />
            <div className="space-y-0.5">
              <Label className="text-base">Tablet</Label>
              <p className="text-sm text-muted-foreground">
                Sync to your tablet device
              </p>
            </div>
          </div>
          <Switch checked={tablet} onCheckedChange={setTablet} />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Monitor className="h-4 w-4" />
            <div className="space-y-0.5">
              <Label className="text-base">Desktop</Label>
              <p className="text-sm text-muted-foreground">
                Sync to your computer
              </p>
            </div>
          </div>
          <Switch checked={desktop} onCheckedChange={setDesktop} />
        </div>
      </div>
    );
  },
};

// Интерактивный пример
export const InteractiveExample: Story = {
  render: () => {
    const [settings, setSettings] = React.useState({
      notifications: true,
      darkMode: false,
      autoSave: true,
      analytics: false,
      location: true,
      marketing: false,
    });

    const updateSetting = (key: keyof typeof settings, value: boolean) => {
      setSettings(prev => ({
        ...prev,
        [key]: value,
      }));
    };

    const resetSettings = () => {
      setSettings({
        notifications: true,
        darkMode: false,
        autoSave: true,
        analytics: false,
        location: true,
        marketing: false,
      });
    };

    return (
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Интерактивные настройки</CardTitle>
            <CardDescription>Управляйте настройками приложения</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-base">Уведомления</Label>
                <p className="text-sm text-muted-foreground">
                  Получать push-уведомления
                </p>
              </div>
              <Switch
                checked={settings.notifications}
                onCheckedChange={value => updateSetting('notifications', value)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-base">Темная тема</Label>
                <p className="text-sm text-muted-foreground">
                  Использовать темный режим
                </p>
              </div>
              <Switch
                checked={settings.darkMode}
                onCheckedChange={value => updateSetting('darkMode', value)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-base">Автосохранение</Label>
                <p className="text-sm text-muted-foreground">
                  Автоматически сохранять изменения
                </p>
              </div>
              <Switch
                checked={settings.autoSave}
                onCheckedChange={value => updateSetting('autoSave', value)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-base">Аналитика</Label>
                <p className="text-sm text-muted-foreground">
                  Отправлять данные об использовании
                </p>
              </div>
              <Switch
                checked={settings.analytics}
                onCheckedChange={value => updateSetting('analytics', value)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-base">Геолокация</Label>
                <p className="text-sm text-muted-foreground">
                  Разрешить доступ к местоположению
                </p>
              </div>
              <Switch
                checked={settings.location}
                onCheckedChange={value => updateSetting('location', value)}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-base">Маркетинг</Label>
                <p className="text-sm text-muted-foreground">
                  Получать рекламные материалы
                </p>
              </div>
              <Switch
                checked={settings.marketing}
                onCheckedChange={value => updateSetting('marketing', value)}
              />
            </div>

            <div className="pt-4 border-t">
              <Button
                onClick={resetSettings}
                variant="outline"
                className="w-full"
              >
                Сбросить настройки
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="text-sm text-muted-foreground">
          <strong>Текущие настройки:</strong>
          <pre className="mt-2 p-2 bg-muted rounded text-xs">
            {JSON.stringify(settings, null, 2)}
          </pre>
        </div>
      </div>
    );
  },
};
