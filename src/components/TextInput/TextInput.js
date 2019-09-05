import React from "react";

import { Input } from "reactstrap";

const TextInput = ({ placeholder, type, onChange, min, max, step, value }) => {
  return (
    <Input
      type={type}
      name="text"
      id="textId"
      placeholder={placeholder}
      onChange={onChange}
      min={min}
      max={max}
      step={step}
      value={value}
    />
  );
};

export default TextInput;
