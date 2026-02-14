import type { ChangeEvent } from "react";
import "./TeamNameInput.css";

type TeamNameInputProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  "data-testid"?: string;
};

export function TeamNameInput({
  label,
  value,
  onChange,
  placeholder = "",
  "data-testid": testId = "team-name-input",
}: TeamNameInputProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="team-name-input" data-testid={testId}>
      <label className="team-name-input__label" htmlFor={testId}>
        {label}
      </label>
      <input
        id={testId}
        type="text"
        className="team-name-input__field"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        autoComplete="off"
      />
    </div>
  );
}
