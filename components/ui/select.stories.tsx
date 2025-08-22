import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from './select';
import { Label } from './label';

const meta: Meta<typeof Select> = {
  title: 'UI/Select',
  component: Select,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Базовый пример
export const Default: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="blueberry">Blueberry</SelectItem>
        <SelectItem value="grapes">Grapes</SelectItem>
        <SelectItem value="pineapple">Pineapple</SelectItem>
      </SelectContent>
    </Select>
  ),
};

// С группами
export const WithGroups: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a timezone" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>North America</SelectLabel>
          <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
          <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
          <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
          <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
          <SelectItem value="akst">Alaska Standard Time (AKST)</SelectItem>
          <SelectItem value="hst">Hawaii Standard Time (HST)</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Europe & Africa</SelectLabel>
          <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
          <SelectItem value="cet">Central European Time (CET)</SelectItem>
          <SelectItem value="eet">Eastern European Time (EET)</SelectItem>
          <SelectItem value="west">
            Western European Summer Time (WEST)
          </SelectItem>
          <SelectItem value="cat">Central Africa Time (CAT)</SelectItem>
          <SelectItem value="eat">East Africa Time (EAT)</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Asia</SelectLabel>
          <SelectItem value="msk">Moscow Time (MSK)</SelectItem>
          <SelectItem value="ist">India Standard Time (IST)</SelectItem>
          <SelectItem value="cst_china">China Standard Time (CST)</SelectItem>
          <SelectItem value="jst">Japan Standard Time (JST)</SelectItem>
          <SelectItem value="kst">Korea Standard Time (KST)</SelectItem>
          <SelectItem value="ist_indonesia">
            Indonesia Central Standard Time (WITA)
          </SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Australia & Pacific</SelectLabel>
          <SelectItem value="awst">
            Australian Western Standard Time (AWST)
          </SelectItem>
          <SelectItem value="acst">
            Australian Central Standard Time (ACST)
          </SelectItem>
          <SelectItem value="aest">
            Australian Eastern Standard Time (AEST)
          </SelectItem>
          <SelectItem value="nzst">New Zealand Standard Time (NZST)</SelectItem>
          <SelectItem value="fjt">Fiji Time (FJT)</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};

// С отключенными элементами
export const WithDisabled: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a language" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="english">English</SelectItem>
        <SelectItem value="french">French</SelectItem>
        <SelectItem value="german">German</SelectItem>
        <SelectItem value="spanish">Spanish</SelectItem>
        <SelectItem value="portuguese" disabled>
          Portuguese (coming soon)
        </SelectItem>
        <SelectItem value="russian" disabled>
          Russian (coming soon)
        </SelectItem>
        <SelectItem value="japanese">Japanese</SelectItem>
        <SelectItem value="korean">Korean</SelectItem>
        <SelectItem value="chinese" disabled>
          Chinese (coming soon)
        </SelectItem>
      </SelectContent>
    </Select>
  ),
};

// С лейблом
export const WithLabel: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="framework">Framework</Label>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select a framework" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="next">Next.js</SelectItem>
          <SelectItem value="sveltekit">SvelteKit</SelectItem>
          <SelectItem value="nuxt">Nuxt.js</SelectItem>
          <SelectItem value="remix">Remix</SelectItem>
          <SelectItem value="astro">Astro</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
};

// Отключенный селект
export const Disabled: Story = {
  render: () => (
    <Select disabled>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="blueberry">Blueberry</SelectItem>
      </SelectContent>
    </Select>
  ),
};

// С длинным списком
export const LongList: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a country" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Popular Countries</SelectLabel>
          <SelectItem value="us">United States</SelectItem>
          <SelectItem value="ca">Canada</SelectItem>
          <SelectItem value="uk">United Kingdom</SelectItem>
          <SelectItem value="de">Germany</SelectItem>
          <SelectItem value="fr">France</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>A-E</SelectLabel>
          <SelectItem value="af">Afghanistan</SelectItem>
          <SelectItem value="al">Albania</SelectItem>
          <SelectItem value="dz">Algeria</SelectItem>
          <SelectItem value="ad">Andorra</SelectItem>
          <SelectItem value="ao">Angola</SelectItem>
          <SelectItem value="ar">Argentina</SelectItem>
          <SelectItem value="am">Armenia</SelectItem>
          <SelectItem value="au">Australia</SelectItem>
          <SelectItem value="at">Austria</SelectItem>
          <SelectItem value="az">Azerbaijan</SelectItem>
          <SelectItem value="bs">Bahamas</SelectItem>
          <SelectItem value="bh">Bahrain</SelectItem>
          <SelectItem value="bd">Bangladesh</SelectItem>
          <SelectItem value="bb">Barbados</SelectItem>
          <SelectItem value="by">Belarus</SelectItem>
          <SelectItem value="be">Belgium</SelectItem>
          <SelectItem value="bz">Belize</SelectItem>
          <SelectItem value="bj">Benin</SelectItem>
          <SelectItem value="bt">Bhutan</SelectItem>
          <SelectItem value="bo">Bolivia</SelectItem>
          <SelectItem value="ba">Bosnia and Herzegovina</SelectItem>
          <SelectItem value="bw">Botswana</SelectItem>
          <SelectItem value="br">Brazil</SelectItem>
          <SelectItem value="bn">Brunei</SelectItem>
          <SelectItem value="bg">Bulgaria</SelectItem>
          <SelectItem value="bf">Burkina Faso</SelectItem>
          <SelectItem value="bi">Burundi</SelectItem>
          <SelectItem value="cv">Cabo Verde</SelectItem>
          <SelectItem value="kh">Cambodia</SelectItem>
          <SelectItem value="cm">Cameroon</SelectItem>
          <SelectItem value="td">Chad</SelectItem>
          <SelectItem value="cl">Chile</SelectItem>
          <SelectItem value="cn">China</SelectItem>
          <SelectItem value="co">Colombia</SelectItem>
          <SelectItem value="km">Comoros</SelectItem>
          <SelectItem value="cg">Congo</SelectItem>
          <SelectItem value="cr">Costa Rica</SelectItem>
          <SelectItem value="hr">Croatia</SelectItem>
          <SelectItem value="cu">Cuba</SelectItem>
          <SelectItem value="cy">Cyprus</SelectItem>
          <SelectItem value="cz">Czech Republic</SelectItem>
          <SelectItem value="dk">Denmark</SelectItem>
          <SelectItem value="dj">Djibouti</SelectItem>
          <SelectItem value="dm">Dominica</SelectItem>
          <SelectItem value="do">Dominican Republic</SelectItem>
          <SelectItem value="ec">Ecuador</SelectItem>
          <SelectItem value="eg">Egypt</SelectItem>
          <SelectItem value="sv">El Salvador</SelectItem>
          <SelectItem value="gq">Equatorial Guinea</SelectItem>
          <SelectItem value="er">Eritrea</SelectItem>
          <SelectItem value="ee">Estonia</SelectItem>
          <SelectItem value="sz">Eswatini</SelectItem>
          <SelectItem value="et">Ethiopia</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};

// Интерактивный пример
export const InteractiveExample: Story = {
  render: () => {
    const [framework, setFramework] = React.useState('');
    const [language, setLanguage] = React.useState('');

    return (
      <div className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-sm font-medium">Configure Your Project</h3>

          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="framework-select">Framework</Label>
            <Select value={framework} onValueChange={setFramework}>
              <SelectTrigger>
                <SelectValue placeholder="Select a framework" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>React-based</SelectLabel>
                  <SelectItem value="next">Next.js</SelectItem>
                  <SelectItem value="remix">Remix</SelectItem>
                  <SelectItem value="gatsby">Gatsby</SelectItem>
                </SelectGroup>
                <SelectSeparator />
                <SelectGroup>
                  <SelectLabel>Vue-based</SelectLabel>
                  <SelectItem value="nuxt">Nuxt.js</SelectItem>
                  <SelectItem value="vitepress">VitePress</SelectItem>
                </SelectGroup>
                <SelectSeparator />
                <SelectGroup>
                  <SelectLabel>Other</SelectLabel>
                  <SelectItem value="sveltekit">SvelteKit</SelectItem>
                  <SelectItem value="astro">Astro</SelectItem>
                  <SelectItem value="solid">SolidStart</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="language-select">Language</Label>
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger>
                <SelectValue placeholder="Select a language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="javascript">JavaScript</SelectItem>
                <SelectItem value="typescript">TypeScript</SelectItem>
                <SelectItem value="python">Python</SelectItem>
                <SelectItem value="go">Go</SelectItem>
                <SelectItem value="rust">Rust</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="rounded-md bg-muted p-4">
          <h4 className="text-sm font-medium mb-2">Configuration</h4>
          <div className="text-sm text-muted-foreground">
            <div>
              Framework: <strong>{framework || 'Not selected'}</strong>
            </div>
            <div>
              Language: <strong>{language || 'Not selected'}</strong>
            </div>
          </div>
        </div>
      </div>
    );
  },
};
