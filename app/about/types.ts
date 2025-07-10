export type Block = {
  title: string;
  description: string;
  offset?: boolean;
  smallerFont?: boolean;
  mobileOffset?: boolean;
};
export type BlockProps = {
  blocks: Block[];
};

export type InputFieldProps = {
  label: string;
  type?: string;
  isTextarea?: boolean;
};

export enum Social {
  LinkedIn = 'LinkedIn',
  Telegram = 'Telegram',
  WhatsApp = 'WhatsApp',
}
