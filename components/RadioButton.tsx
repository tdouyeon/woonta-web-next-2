import { ChangeEvent } from 'react';

const RadioButton = ({
  label,
  name,
  value,
  checked,
  onChange,
}: {
  label: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <label className="inline-flex items-center">
      <input
        name={name}
        type="radio"
        value={value}
        checked={checked}
        onChange={onChange}
        className="form-radio text-blue-600 h-4 w-4"
      />
      <span className="ml-2 text-primary">{label}</span>
    </label>
  );
};

export default RadioButton;
