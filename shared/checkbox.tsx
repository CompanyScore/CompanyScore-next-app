type CheckboxProps = {
  label: string;
  checked: boolean;
  onChange: () => void;
};

export function Checkbox({ label, checked, onChange }: CheckboxProps) {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="checkbox checkbox-primary"
      />
      {label}
    </label>
  );
}
