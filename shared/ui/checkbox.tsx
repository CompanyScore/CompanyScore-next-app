type CheckboxProps = {
  label: React.ReactNode;
  value: string;
  selected: boolean;
  onChange: () => void;
};

export function Checkbox({ label, selected, onChange }: CheckboxProps) {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input
        type="checkbox"
        checked={selected}
        onChange={onChange}
        className="checkbox checkbox-primary"
      />
      {label}
    </label>
  );
}
