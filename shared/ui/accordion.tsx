type Props = {
  name: string;
  title: string;
  defaultChecked?: boolean;
  children: React.ReactNode;
};

export function Accordion({ name, title, defaultChecked, children }: Props) {
  return (
    <div className="collapse collapse-arrow bg-base-100 border border-base-300 overflow-visible">
      <input type="radio" name={name} defaultChecked={defaultChecked} />
      <div className="collapse-title font-semibold">{title}</div>
      <div className="collapse-content text-sm overflow-visible">
        {children}
      </div>
    </div>
  );
}
