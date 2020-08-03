import React from "react";

import "./Checkbox.css";

export const Checkbox = ({
  id,
  isChecked,
  name = "",
  disabled = false,
  onChange,
  label,
}) => {
  const onCheckboxChange = () => {
    onChange(id);
  };

  return (
    <div className="checkbox">
      <input
        className="checkbox-input"
        type="checkbox"
        checked={isChecked}
        id={id}
        name={name}
        onChange={onCheckboxChange}
        disabled={disabled}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};
