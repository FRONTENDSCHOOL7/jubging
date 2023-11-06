import React from "react";
import { InputField, ErrorMessage, Label, InputContainer } from "./InputStyle";

const Input = ({
  id,
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
  maxLength,
  minLength,
  error,
  ...props
}) => {
  return (
    <InputContainer>
      <Label htmlFor={id}>{label}</Label>
      <InputField
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
        minLength={minLength}
        placeholder={placeholder}
        {...props}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </InputContainer>
  );
};

export default Input;
